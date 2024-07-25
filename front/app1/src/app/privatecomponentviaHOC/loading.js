
'use client';

// export default function Loader() {
//     console.warn("loading..........");
//     return (
//         <div className="divloading">
//             <h1 className="h1loading">Loading</h1>
//         </div>
//     );
// }

import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <center >
      <div className='divloading2'>
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      </div>
    </center>
  );
}