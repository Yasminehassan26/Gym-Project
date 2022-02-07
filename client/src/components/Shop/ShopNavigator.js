import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Navbar from "../Navbar";
import Cards from "./Cards";
import Clothes from "./Clothes";
import Supplies from "./Supplies";
import Equipments from "./Equipments";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function ShopNavigator({ history }) {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
      <Navbar history={history} />
      <Box sx={{ bgcolor: "background.paper" }}>
        <AppBar position="static" sx={{ backgroundColor: "#cc1b85" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label="Clothes" {...a11yProps(0)} />
            <Tab label="Equipments" {...a11yProps(1)} />
            <Tab label="Supplies" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Cards Elements={Clothes} />
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Cards Elements={Equipments} />
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Cards Elements={Supplies} />
          </TabPanel>
        </SwipeableViews>
      </Box>
    </div>
  );
}
