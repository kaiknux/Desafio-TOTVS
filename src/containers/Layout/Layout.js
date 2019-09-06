import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/UI/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import HotelsSearch from '../HotelsSearch/HotelsSearch';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render() {
        return (
            <div className={classes.layContainer}>
                <div className={classes.footerPusher}>
                    <Toolbar />
                    <HotelsSearch />
                    <button onClick={() => this.setState({showSideDrawer: true})}>Mostrar Sidebar</button>
                </div>

                <Footer />
                <SideDrawer open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
            </div>
        )
    }
}

export default Layout;