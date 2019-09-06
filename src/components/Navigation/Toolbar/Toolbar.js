import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import Logo from '../../UI/Logo/Logo';

const toolbar = (props) => (
    <div className={classes.tbContainer}>
        <div className={classes.tbContent}>
            <div className={classes.tbNav}>
                <NavigationItems />
            </div>
            <div className={classes.divLogo}>
                <Logo />
            </div>
        </div>
    </div>
)

export default toolbar;