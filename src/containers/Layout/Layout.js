import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/UI/Footer/Footer';

import HotelsSearch from '../HotelsSearch/HotelsSearch';

class Layout extends Component {
    state = {

    }
    render() {
        return (
            <div className={classes.layContainer}>
                <div className={classes.footerPusher}>
                <Toolbar />
                <HotelsSearch />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Layout;