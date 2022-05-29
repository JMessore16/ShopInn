import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Collapse } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Avatar from './Avatar';
import { Link as Scroll } from 'react-scroll';
import UserLoginForm from "../user/UserLoginForm";
import DropDownDrawer from './DropDownDrawer';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Nunito',
    },
    container: {
        textAlign: 'center',
    },
    appbar: {
        background: 'none',

    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'

    },
    appbarTitle: {
        flexGrow: '1',
        color: '#8BDB81',
    },
    logo: {
        color: '#8BDB81'
    },
    title: {
        color: '#fff',
        fontSize: '4.5rem',

    },
    arrow: {
        color: '#8BDB81',
        fontSize: '3rem',
    }
}));
export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    const [dropDown, setDropDown] = useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])
    return (
    <div className={classes.root}>
        <AppBar className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>ShopInn</h1>
            <UserLoginForm />
            <DropDownDrawer />
            <Avatar />
            </Toolbar>
        </AppBar>

        <Collapse in={checked} {... (checked ? { timeout: 1000 } : {})} collapsedSize ={50}>
        <div className={classes.container}>
            <h1 className={classes.title}>
               <span className={classes.logo}>ShopInn</span> made <br/> simple.
            </h1>
            <Scroll to="items-for-sale" smooth={true}>
            <IconButton>
                <ExpandMoreIcon className={classes.arrow} />
            </IconButton>
            </Scroll>
        </div>
        </Collapse>
    </div>
    )
}
