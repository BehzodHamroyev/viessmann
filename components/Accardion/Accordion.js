import React from 'react';
import AccordionWrapper from './AccordionWrapper';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import data from '../../datas/productData';

function TabPanel(props) {
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
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <h2 className="container">Категории</h2>
      <AccordionWrapper>
        <AppBar className="my-5 bg-danger" position="static">
          <Tabs
            className="container"
            value={value}
            onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab label="Жилые здания" {...a11yProps(0)} />
            <Tab label="Предприятия" {...a11yProps(1)} />
            <Tab label="Индустрия" {...a11yProps(2)} />
            <Tab label="Коммунальная техника" {...a11yProps(3)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <div className="container">
            <div className="row">
              <h1>1. product group 1</h1>
              {data?.map((value, index) => {
                return (
                  <div
                    key={index}
                    className="col-12 col-sm-12 col-md-6 col-lg-4  my-5"
                  >
                    <div className="my-2 mybox shadow w-100 d-flex flex-column align-items-center px-2 h-100">
                      <img className="w-75" src={value.img} alt="" />
                      <h6 className="my-4 fw-bold title">{value.title}</h6>
                      <p className="title">{value.subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="container m-0 ">
            <div className="row m-0">
              <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 my-5">
                <div className="my-2 shadow w-100 d-flex flex-column align-items-center px-2 h-100 mybox">
                  <img
                    className="w-100"
                    src="https://orzu-tehnopark.s3.amazonaws.com/viessmann/visual-reverse-image-search-v2_297x176.jpg"
                    alt=""
                  />
                  <h6 className="my-4 fw-bold title">lorem</h6>
                  <p className="title">Lorem, ipsum.</p>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
      </AccordionWrapper>
    </div>
  );
}
