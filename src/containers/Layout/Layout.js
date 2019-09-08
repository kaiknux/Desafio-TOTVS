import React, { Component } from 'react';
import classes from './Layout.module.css';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/UI/Footer/Footer';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import * as hotelSearchActions from '../../store/actions/index'
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }
    componentDidMount () {
        this.props.onInitClients();  
    }

    render() {
        let layObject = <Spinner />
        if (this.props.clis) {
            layObject = ( <Auxiliary>
                <div className={classes.footerPusher}>
                    <Toolbar />

                </div>
                {this.props.children}
                <button onClick={() => this.setState({showSideDrawer: true})}>Mostrar Sidebar</button>

                <Footer />

            </Auxiliary>
            )
        }
        return ( <>L{layObject}</> )
    }
}

const mapStateToProps = state => {
    return {
        clis: state.cList,
        countList: state.totalList,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onInitClients: () => dispatch(hotelSearchActions.initClients())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);