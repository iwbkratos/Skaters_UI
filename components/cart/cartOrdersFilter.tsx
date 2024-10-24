'use client'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { useRouter } from 'next/navigation';
import CartOrders from './cartOrders';


interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

const fabGreenStyle = {
  color: 'common.white',
  bgcolor: green[500],
  '&:hover': {
    bgcolor: green[600],
  },
};

export default function FloatingActionButtonZoom({data}:any) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };
 
  const paid= data?.filter((value:any)=>value?.status=='paid')
  const pending= data?.filter((value:any)=>value?.status=='pending')
  const canceled= data?.filter((value:any)=>value?.status=='canceled')
   console.log("filtered================== "+ paid)
   console.log("filtered================== "+ pending)
   console.log("filtered================== "+ canceled)

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };

//   const fabs = [
//     {
//       color: 'primary' as 'primary',
//       sx: fabStyle as SxProps,
//       icon: <AddIcon />,
//       label: 'Add',
//     },
//     {
//       color: 'secondary' as 'secondary',
//       sx: fabStyle as SxProps,
//       icon: <EditIcon />,
//       label: 'Edit',
//     },
//     {
//       color: 'inherit' as 'inherit',
//       sx: { ...fabStyle, ...fabGreenStyle } as SxProps,
//       icon: <UpIcon />,
//       label: 'Expand',
//     },
//   ];
    const router =useRouter();
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: 1000,
        position: 'relative',
        minHeight: 200,
      }}
    >
      <AppBar position="static" sx={{boxShadow:'none'}}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="action tabs example"
          sx={{bgcolor:'white'}}
        >
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Paid" {...a11yProps(1)} />
          <Tab label="Pending" {...a11yProps(2)} />
          <Tab label="Canceled" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction} >
        <CartOrders data={data}/>
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <CartOrders data={paid}/>
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <CartOrders data={pending}/>
      </TabPanel>
      <TabPanel value={value} index={3} dir={theme.direction}>
        <CartOrders data={canceled}/>
      </TabPanel>
      {/* {fabs.map((fab, index) => (
        <Zoom
          key={fab.color}
          in={value === index}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${value === index ? transitionDuration.exit : 0}ms`,
          }}
          unmountOnExit
        >
          <Fab sx={fab.sx} aria-label={fab.label} color={fab.color}>
            {fab.icon}
          </Fab>
        </Zoom>
      ))} */}
    </Box>
  );
}
