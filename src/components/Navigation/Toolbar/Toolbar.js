import React, { Component } from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';
import DrawerToggle from '../../UI/DrawerToggle/DrawerToggle';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';

class Toolbar extends Component {
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render () {
        
        return (
            <div className={classes.tbContainer}>
            <div className={classes.tbContent}>
                <div className={classes.tbNav}>
                    <NavigationItems />
                </div>
                <div className={classes.tbNmob}>
                <DrawerToggle clicked={() => this.setState({showSideDrawer: true})}/>

                </div>

                <div className={classes.divLogo}>
                    <Logo />
                </div>
                <SideDrawer open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
            </div>

        </div>
        )
    }



}
export default Toolbar;