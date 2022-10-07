import React,{useState,useEffect} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HomePage from '../Homepage';
import Projects from '../Projects/index';
import Timeline from '../Timeline';
import Connect from '../Connect/index'
import '../Homepage/index.css'
import axios from "axios";

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
      className='z-40'
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
  const [value, setValue] = useState(0);
  const [viewCount,setViewCount] = useState(0);

  async function getViewCount() {
    let {data,status} = await axios.get('https://api.countapi.xyz/update/portfolio/bikashd/?amount=1');
    setViewCount(data?.value)
  }

  useEffect(()=> {
    getViewCount()
  },[])
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const allTabs = ["Home","Timeline","Projects","Connect"]

  return (
    <div className="w-full flex-column align-center justify-center z-40">
      <Box className="flex align-center justify-between w-11/12 mx-10">
        <div className="flex items-center font-semibold text-white text-rainbow-animation" 
          style={{fontFamily:'Cedarville Cursive'}}>
            Bikash D
        </div>
        <Tabs value={value} onChange={handleChange}>
          {
            allTabs.map((val,index) => 
              <Tab label={val} className="font-medium" style={{textTransform:'none',fontFamily:'Cedarville Cursive',color:'white'}}></Tab>)
          }
          <span className='flex align-center justify-center text-white mt-3 ml-3' 
            style={{fontFamily:'Cedarville Cursive'}}> 
            View Count: {viewCount}
          </span>
        </Tabs>
        
      </Box>
      <TabPanel value={value} index={0}>
        <HomePage/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Timeline/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Projects/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Connect/>
      </TabPanel>
    </div>
  );
}
