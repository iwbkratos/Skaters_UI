import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorChips({status}:any) {
    
    const res:string=status;
  return (
    <Stack spacing={1} sx={{ alignItems: 'center' }}>
      <Stack direction="row" spacing={1}>
        
    { res=="paid" && <Chip label="paid" color="success"/>}
    { res=="pending" && <Chip label="pending" color="primary"/>}
    { res=="canceled" && <Chip label="canceled" color="error"/>}
      </Stack>
      {/* <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
      </Stack> */}
    </Stack>
  );
}