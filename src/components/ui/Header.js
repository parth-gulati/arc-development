import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Menu, MenuItem } from "@material-ui/core";
import { Tabs, Tab } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { makeStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
  },
  logo: {
    height: "7em",
    fontFamily: "Roboto",
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    ...theme.typography.tab,
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.arcBlue,
    color: "white",
    borderRadius: "0px",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => {
    setCurrent(value);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const menuOptions = [
    { name: "Services", link: "/services" },
    { name: "Custom Software Development", link: "/custom-software" },
    { name: "Mobile App Development", link: "/mobile-apps" },
    { name: "Website Development", link: "/websites" },
  ];

  useEffect(() => {
    if (window.location.pathname === "/" && current !== 0) {
      setCurrent(0);
    } else if (window.location.pathname === "/services" && current !== 1) {
      setCurrent(1);
    } else if (window.location.pathname === "/about-us" && current !== 2) {
      setCurrent(2);
    } else if (window.location.pathname === "/contact-us" && current !== 3) {
      setCurrent(3);
    } else if (window.location.pathname === "/support" && current !== 4) {
      setCurrent(4);
    }
  }, [current]);

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters={true}>
            <Button
              component={Link}
              disableRipple={true}
              to="/"
              onClick={() => setCurrent(0)}
              className={classes.logoContainer}
            >
              <img alt="Company logo" className={classes.logo} src={logo} />
            </Button>
            <Tabs
              onChange={handleChange}
              indicatorColor="primary"
              value={current}
              className={classes.tabContainer}
            >
              <Tab
                className={classes.tab}
                component={Link}
                to="/"
                label="Home"
              />
              <Tab
                onMouseOver={(e) => {
                  handleClick(e);
                }}
                aria-haspopup={anchorEl ? true : undefined}
                aria-owns={anchorEl ? "simple-menu" : undefined}
                className={classes.tab}
                component={Link}
                to="/services"
                label="Services"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/about-us"
                label="About Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/contact-us"
                label="Contact Us"
              />
              <Tab
                className={classes.tab}
                component={Link}
                to="/support"
                label="Support"
              />
            </Tabs>
            <Button
              className={classes.button}
              component={Link}
              onClick={() => setCurrent(false)}
              to="/estimate"
              variant="contained"
              color="secondary"
            >
              Free Estimate
            </Button>
            <Menu
              elevation={0}
              classes={{ paper: classes.menu }}
              MenuListProps={{ onMouseLeave: handleClose }}
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menuItem }}
                  onClick={(event)=>{
                    handleMenuItemClick(event,i);
                    setCurrent(1);
                  }}
                  selected={i===selectedIndex && current===1}
                >
                  {option.name}
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
}
