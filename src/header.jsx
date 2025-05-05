import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography'; 

export default function DenseAppBar({name}) {
  return (
    <Box sx={{ flexGrow: 1, textAlign: 'center'}}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Typography variant="h6" color="white" component="div" sx={{ padding: 1 }}>
          {name}
        </Typography> 
      </AppBar>
    </Box>
  );
}
