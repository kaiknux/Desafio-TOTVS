import React from 'react';


import classes from './SideDrawer.module.css'
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import NavigationItems from '../NavigationItems/NavigationItems';
const sideDrawer = (props) => {
    // esse objeto tem estrutura diferente pra poder colocar
    // um condicional css pra animação
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }


    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo1a}>
                    <img alt="img" className={classes.sdImages} src={require('../../../assets/images/TOTVS_posN.png')} />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>

    );
}

export default sideDrawer;