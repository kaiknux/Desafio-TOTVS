import React, { Component } from 'react';
import classes from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/UI/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
            <Auxiliary>
                <div className={classes.footerPusher}>
                    <Toolbar />

                </div>
                {this.props.children}
                <button onClick={() => this.setState({showSideDrawer: true})}>Mostrar Sidebar</button>

                <Footer />
                <SideDrawer open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
            </Auxiliary>
        )
    }
}

export default Layout;