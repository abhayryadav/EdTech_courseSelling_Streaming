// const jwt= require("jsonwebtoken")
// // const secretkey="nvbghr65/nm"
// // const obj={
// //     "name":"abhay",
// //     "password":"abdgvfh"
// // }
// // let ans =jwt.sign(obj,secretkey);
// // console.log(ans)
// jwt.verify("eyJhbGciOiJIUzI1NiJ9.MGQwZTM2ZGYtNmIwYi00OWIxLWIwNTYtMDVmZDNkZjRkMzYz.NsRuLGFx1IZcrDnybdm8GR_LzW-TNKvMuc7jBFZ1pew","nvbghr65/nm",(err,orgdata)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(orgdata)
//     }
// })





///////////////////////////
 


// const express = require("express");
// const bodyParser = require("body-parser");
// const app = express();
// const fs = require("fs")
// const jwt= require("jsonwebtoken")
// const secretkeyseller="nvbghr65/nm"
// const secretkeyuser="fnkjnjfhr48/v"
// const port= 4000;
// const { v4: uuidv4 } = require('uuid');
// app.use(express.json());
// app.use(bodyParser.json());
// var cors = require('cors')
// app.use(cors()) 

// let sellers=JSON.parse(fs.readFileSync('sellers.txt', 'utf-8'))
// let users=JSON.parse(fs.readFileSync('users.txt', 'utf-8'))
// let courses=JSON.parse(fs.readFileSync('courses.txt', 'utf-8'))



// function tokengeneratoruser(value,secretkey){
//     token = jwt.sign(value,secretkey);
//     return token;
// }
// function tokengeneratorseller(value,secretkey){
//     token = jwt.sign(value,secretkey);
//     return token;
// }
// const sellerAut = (req,res,next) =>{
//     const { username, password } = req.headers;
//     const admin = sellers.find(a=>a.username===username && a.password===password)
//     if(admin){
//         next();
//     }else{
//         res.status(403).json({message:'admin authentication failed'})
//     }

// }
// const userAut = (req,res,next) =>{
//     const { username, password } = req.headers;
//     const user = users.find(a=>a.username===username && a.password===password)
//     if(user){
//         next();
//     }else{
//         res.status(403).json({message:'user authentication failed'})
//     } 

// } 
// const authenticationjwtuser=(req,res,next)=>{
//     const authtoken = req.headers.authorization;
//     if(authtoken){
//         const token = authtoken.split(" ")[1];
//         //console.log(token)
//         jwt.verify(token,secretkeyuser,(err,iddata)=>{
//             if(err){
//                 return res.send({message:'user authentication failed'})
//             }else{
//                 req.id = iddata;
//                 console.log(req.id);
//                 next();
//             }
            
//         })
//     }else {
//         res.send({ message: 'Authorization header missing' });
//     }
// }
// const authenticationjwtseller=(req,res,next)=>{
//     const authtoken = req.headers.authorization;
//     if(authtoken){
//         const token = authtoken.split(" ")[1];
//         //console.log(token)
//         jwt.verify(token,secretkeyseller,(err,iddata)=>{
//             if(err){
//                 return res.send({message:'user authentication failed'})
//             }else{
//                 req.id = iddata;
//                 console.log(req.id);
                
//                 next();
//             }
            
//         })
//     }else {
//         res.send({ message: 'Authorization header missing' });
//     }
// }
// app.post("/seller/signup",(req,res)=>{
//     let seller_recived = req.body;
//     const sellerExist = sellers.find(a=>a.username===seller_recived.username)
//     if (sellerExist) {
//         res.status(403).json({message:"seller already exist"});
//     }else{
//         const sellerid=uuidv4()
//         const seller={"username":seller_recived.username,"password":seller_recived.password,"age":seller_recived.age,"courses":[],tokensearned:[],"sellerId":sellerid}
//         sellers.push(seller);
//         let token = tokengeneratorseller(sellerid,secretkeyseller);
//         const sellersJSON = JSON.stringify(sellers);
//         fs.writeFileSync('sellers.txt', sellersJSON);
//         res.json({message:"seller created",authtoken:token});
//     }
// });

// app.post("/seller/login",sellerAut,(req,res)=>{
//     var sellerid=null;
//     for (let index = 0; index < sellers.length; index++) {
//         if(sellers[index].username==req.headers.username && sellers[index].password==req.headers.password){
//             sellerid=sellers[index].sellerId
//             break;
//         } 
//     }
//     if (sellerid !== null) {
//         const token = tokengeneratorseller(sellerid,secretkeyseller);
//         res.json({ message: "logged in successfully", authtoken: token });
//     } else {
//         res.status(401).json({ message: "Invalid credentials" });
//     }
// });

// app.post("/seller/courses",authenticationjwtseller,(req,res)=>{//seller pushing course
//     const useridh=req.id;
//     console.log()
//     const body = req.body;
//     flag =0;
//     const course={"name":body.name,"courseId":"","sellername":body.sellername,"cost":body.cost,"imglink":body.imglink}
//     course.courseId = uuidv4();
//     //console.log(sellers)
//     for (let index = 0; index < sellers.length; index++) {
//         if (sellers[index].sellerId===useridh) {
//             flag=1;
//             sellers[index].courses.push(course)
//             break;
//         }
//     }
//     if (flag===0) {
//         return res.status(404).json({ message: "Seller does not exist" });
//     }
//     sellersJSON=JSON.stringify(sellers);
//     fs.writeFileSync('sellers.txt', sellersJSON);
//     courses.push(course);
//     coursesJSON=JSON.stringify(courses);
//     fs.writeFileSync('courses.txt', coursesJSON);
//     res.json({message:"course created successfully",courseid: course.id})

// });
// app.put("/seller/courses/:id",authenticationjwtseller,(req,res)=>{
//     const id = req.params.id;
//     var course=req.body
//     flag=0;
//     for (let index = 0; index < sellers.length; index++) {
//         for (let i = 0; i < sellers[index].courses.length; i++) {
            
//             if(sellers[index].courses[i].courseId==id){
//                 flag=1;
//                 console.log("doing....")
//                 sellers[index].courses[i]=course;
//                 sellersJSON=JSON.stringify(sellers);
//                 fs.writeFileSync('sellers.txt', sellersJSON);
//             }
//         }   
//     }
//     if (flag==0) {
//         res.send({message:"course doesent exist"})
//     }else{
//         for (let index = 0; index < sellers.length; index++) {
//             if (courses[index].courseId === id) {
//                 console.log("doing....")
//                 courses[index] = course;
//                 coursesJSON=JSON.stringify(courses);
//                 fs.writeFileSync('courses.txt', coursesJSON);  
//             }
//         } 
//         res.send({message:"updated"})
//     }
    
// });
// app.get("/seller/courses/:seller",authenticationjwtseller,(req,res)=>{
//     const seller=req.params.seller
//     for (let index = 0; index < sellers.length; index++) {
//         if (sellers[index].username===seller) {
//             res.send({"course":sellers[index].courses})
//         }
        
//     }

// });


// app.delete("/seller/courses/:id", authenticationjwtseller, (req, res) => {
//     const id = req.params.id;
//     let flag = 0;

//     for (let index = 0; index < sellers.length; index++) {
//         for (let i = 0; i < sellers[index].courses.length; i++) {
//             if (sellers[index].courses[i].courseId === id) {
//                 flag = 1;
//                 // Delete that particular course
//                 sellers[index].courses.splice(i, 1);
//                 const sellersJSON = JSON.stringify(sellers);
//                 fs.writeFileSync('sellers.txt', sellersJSON);
//             }
//         }
//     }

//     if (flag === 0) {
//         res.send({ message: "Course doesn't exist" });
//     } else {
//         for (let index = 0; index < courses.length; index++) {
//             if (courses[index].courseId === id) {
//                 // Delete that particular course
//                 courses.splice(index, 1);
//                 const coursesJSON = JSON.stringify(courses);
//                 fs.writeFileSync('courses.txt', coursesJSON);
//             }
//         }
//         res.send({ message: "Deleted" });
//     }
// });



// app.post("/user/signup",(req,res)=>{
//     let user_recived = req.body;
//     const userExis = users.find(a=>a.username===user_recived.username)
//     if (userExis) {
//         res.status(403).json({message:"user already exist"});
//     }else{
//         const userid=uuidv4();
//         const user={"username":user_recived.username,"password":user_recived.password,"age":user_recived.age,"courses":[],"userId":userid}
//         users.push(user);
//         const usersJSON = JSON.stringify(users);
//         let token = tokengeneratoruser(userid,secretkeyuser);
//         fs.writeFileSync('users.txt', usersJSON);
//         res.json({message:"user created","token":token});
//     }
// });
// app.post("/user/login",userAut,(req,res)=>{
//     var userid=null;    
//     for (let index = 0; index < users.length; index++) {
//         if(users[index].username==req.headers.username && users[index].password==req.headers.password){
//             userid=users[index].userId
//             break;
//         } 
//     }
//     if (userid !== null) {
//         const token = tokengeneratoruser(userid,secretkeyuser);
//         res.json({ message: "logged in successfully", authtoken: token });
//     } else {
//         res.json({ message: "user dosen't exist" });
//     }
    
// });
// app.get("/user/courses",authenticationjwtuser,(req,res)=>{
//     var userid=req.id;
//     console.log(req.id);
//     for (let index = 0; index < users.length; index++) {
//         if (users[index].userId===userid) {
//             res.send({"course":users[index].courses})
//         }     
//     }
// }); 
// // function purchase(){

// // }

// app.post("/user/courses/",authenticationjwtuser,(req,res)=>{ //buy a course
//     const sellerid=req.headers.sellerid;
//     const courseid=req.headers.coursid;
//     const userid=req.id;
//     console.log(userid)


//     for (let index = 0; index < users.length; index++) {
//         if(userid==users[index].userId){
//             const courseAlreadyPurchased = users[index].courses.find(course => course === courseid);
//             if (courseAlreadyPurchased) {
//                 return res.send({ message: "Course already purchased" });
//             }
//             users[index].courses.push(courseid);
//             const usersJSON = JSON.stringify(users);
//             fs.writeFileSync('users.txt', usersJSON);
            
//         }
//     }
//     for (let index = 0; index < sellers.length; index++) { 
//         if(sellerid==sellers[index].sellerId){
//             for (let i = 0; i < sellers[index].courses.length; i++) {   
//                 if (sellers[index].courses[i].courseId === courseid) {   
//                     let n=Number(sellers[index].tokensearned)
//                     console.log(Number(sellers[index].tokensearned))
//                     console.log(n)
//                     n=n+Number(sellers[index].courses[i].cost)
//                     console.log(n)
//                     sellers[index].tokensearned=n;
//                     console.log(sellers[index].tokensearned)
//                     const sellersJSON = JSON.stringify(sellers);
//                     fs.writeFileSync('sellers.txt', sellersJSON);
//             } 
//         }}
//     }
    
//     res.send({"message":"course purchased"})

// });




// app.get("/courses/",authenticationjwtuser,(req,res)=>{ //buy a course

//     res.send({"courses":courses})

// });






// function started() {
//     console.log(`Server is running at http://localhost:${port}`);
// }

// app.listen(port, started);

