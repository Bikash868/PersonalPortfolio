import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomePage from '../Homepage';
import About from '../About';
import Services from '../Services';
import Connect from '../Connect'
import {menuItems} from '../Services/allData'
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function NavBar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const allTabs = ["Home","Projects","Services","Connect"]

  return (
    <div className="w-full flex-column align-center justify-center">
      <Box className="flex align-center justify-between w-11/12 mx-10">
        <div className="flex items-center font-semibold text-slate-500" style={{fontFamily:'Cedarville Cursive'}}>Bikash D</div>
        <Tabs value={value} onChange={handleChange}>
          {
            allTabs.map((val,index)=><Tab label={val} className="font-medium" style={{textTransform:'none',fontFamily:'Cedarville Cursive'}}></Tab>)
          }
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <HomePage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Services data = {menuItems}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Connect/>
      </TabPanel>
    </div>
  );
}
