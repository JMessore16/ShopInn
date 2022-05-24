import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ItemCard from "./ItemCard";
import BottomNav from './BottomNav';


const useStyles = makeStyles((theme) => ({
    root: {
        height: '250vh'
    }
}));

export default function ItemsForSale () {
    const classes = useStyles();
    return (
        <div id="items-for-sale" className={classes.root}>
            <ItemCard />
            <BottomNav />
        </div>
    )
}