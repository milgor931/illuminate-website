import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme }  from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")] : {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")] : {
            marginBottom: "1.25em"
        },

    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")] : {
            height: "7em"
        },
        [theme.breakpoints.down("xs")] : {
            height: "5.5em"
        },
    },
    tabContainer: {
        marginLeft: 'auto',
        padding: "1rem",
    },
    tab: {
        ...theme.typography.tab,
        color: "white",
        minWidth: 10,
        marginLeft: "25px",
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "100px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "3rem",
        "&:hover" : {
            backgroundColor: theme.palette.secondary.light,
        }
    },
    logoContainer: {
        padding: 10,
        "&:hover" : {
            backgroundColor: "transparent",
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px",
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover" : {
            opacity: 1,
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px",
    },
    drawerIconContainer: {
        marginLeft: 'auto',
        "&:hover" : {
            backgroundColor: 'transparent',
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.orange,
        color: theme.palette.common.blue,
        paddingTop: '20%',
        [theme.breakpoints.down("md")] : {
          paddingRight: '5%',
          paddingLeft: "5%",
        },
        [theme.breakpoints.down("xs")] : {
          paddingRight: '12%',
          paddingLeft: "12%",
        },
    },
    drawerItem: {
        ...theme.typography.tab,
        [theme.breakpoints.down("md")] : {
           fontSize: "2.5em"
        },
        [theme.breakpoints.down("xs")] : {
            fontSize: "2em"
        },
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.blue,
    },
    appBar: {
        background: 'rgb(0,0,0,0.4)',
        zIndex: theme.zIndex.modal + 1,
    }
}))

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

const Nav = props => {

    const classes = useStyles();

    const [ anchorEl, setAnchorEl ] = useState(null);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [ openMenu, setOpenMenu ] = useState(false);
    const [ openDrawer, setOpenDrawer ] = useState(false);

    const [ value, setValue ] = useState(0);
    const [ selectedIndex, setSelectedIndex ] = useState(0);

    const onChangeHandler = (event, newValue) => {
        setValue(newValue)
    }

    const menuItemClickHandler = (e, i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        setSelectedIndex(i);
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    }

    const handleClose = (event) => {
        setAnchorEl(null);
        setOpenMenu(false);
    }

    const tabs = (
        <React.Fragment>
            <Tabs value={value}  onChange={onChangeHandler} className={classes.tabContainer}>
                <Tab label="Home" className={classes.tab} component={Link} to='/'/>
                <Tab label="Blog" className={classes.tab} component={Link} to="/blog"/>
                <Tab label="Podcast" className={classes.tab} component={Link} to="/podcast" />
                <Tab label="About Us" className={classes.tab} component={Link} to="/about"/>
                <Tab label="Helpful Links" className={classes.tab} component={Link} to="/links"/>
            </Tabs>
        </React.Fragment>
    )

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer classes={{paper: classes.drawer}} disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
                <div className={classes.toolbarMargin}>
                <List disablePadding>
                    <ListItem onClick={() => {setOpenDrawer(false); setValue(0)}} divider button component={Link} to="/" selected={value === 0}>
                        <ListItemText className={classes.drawerItem} disableTypography>Home</ListItemText>
                    </ListItem>
                    <ListItem onClick={() => {setOpenDrawer(false); setValue(1)}} divider button component={Link} to="/blog" selected={value === 1}>
                        <ListItemText className={classes.drawerItem} disableTypography>Blog</ListItemText>
                    </ListItem>
                    <ListItem onClick={() => {setOpenDrawer(false); setValue(2)}} divider button component={Link} to="/podcast" selected={value === 2}>
                        <ListItemText className={classes.drawerItem} disableTypography>Podcast</ListItemText>
                    </ListItem>
                    <ListItem onClick={() => {setOpenDrawer(false); setValue(3)}} divider button component={Link} to="/about" selected={value === 3}>
                        <ListItemText className={classes.drawerItem} disableTypography>About Us</ListItemText>
                    </ListItem>
                    <ListItem onClick={() => {setOpenDrawer(false); setValue(4)}} divider button component={Link} to="/links" selected={value === 4}>
                        <ListItemText className={classes.drawerItem} disableTypography>Helpful Links</ListItemText>
                    </ListItem>
                </List>
                </div>
            </SwipeableDrawer>
            <IconButton className={classes.drawerIconContainer} disableRipple onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    )

    return (
        <React.Fragment>
            <ElevationScroll>
            <AppBar position="sticky" color="primary" className={classes.appBar}>
                <Toolbar disableGutters>
                    <Button disableRipple onClick={() => setValue(0)} className={classes.logoContainer} component={Link} to="/">Illuminate</Button>
                    {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>
    )
}

export default Nav;