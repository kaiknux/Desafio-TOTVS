import React from 'react';
import classes from './NavigationItems.module.css';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
    <NavigationItem link='/' exact>Inicio</NavigationItem>
    <NavigationItem link='/hotelssearch'>Busca</NavigationItem>
    <NavigationItem link='/hotels'>Lista de Hoteleiros</NavigationItem>
    <NavigationItem link='/addhotel'>Adicionar Hotel</NavigationItem>
    </ul>

);

export default navigationItems;