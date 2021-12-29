import React, { useState } from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Tabs, Tab } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';
import logo from '../../assets/logo.svg'
import {Link} from 'react-router-dom'

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

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '3em'
    },
    logo: {
        height: '7em',
        fontFamily: 'Roboto'
    },
    tabContainer: {
        marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: '50px',
        marginLeft: "50px",
        marginRight: '25px',
        height: '45px',
    }
}))


export default function Header(props) {
    const classes = useStyles()
    const [current, setCurrent] = useState(0)

    const handleChange = (e, value) =>{
        setCurrent(value);
    }

    return (
        <>
            <ElevationScroll>
                <AppBar position='fixed' color="primary">
                    <Toolbar disableGutters={true}>
                        <img alt="Company logo" className={classes.logo} src={logo}/>
                        <Tabs onChange={handleChange} indicatorColor='primary' value={current} className={classes.tabContainer}>
                            <Tab className={classes.tab} component={Link} to="/" label="Home"/>
                            <Tab className={classes.tab} component={Link} to="/services" label="Services"/>
                            <Tab className={classes.tab} component={Link} to="/about-us" label="About Us"/>
                            <Tab className={classes.tab} component={Link} to="/contact-us" label="Contact Us"/>
                            <Tab className={classes.tab} component={Link} to="/support" label="Support"/>
                        </Tabs>
                        <Button className={classes.button} variant="contained" color="secondary">Free Estimate</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </>
    )
}