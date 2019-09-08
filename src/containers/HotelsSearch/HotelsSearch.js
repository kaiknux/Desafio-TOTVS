import React from 'react';
import classes from './HotelsSearch.module.css';
import Rococo from '../../components/UI/RococoDeFundo/RococoDeFundo';

import SearchForm from '../../components/Navigation/SearchForm/SearchForm';
import SearchResults from '../../components/SearchResults/SearchResults';
import { connect } from 'react-redux';

const hotelsSearch = (props) => {
    let sResults = '';
    if (props.clis) {
        sResults = <SearchResults />
    }
    return (
    <div className={classes.hsContainer}>
        <div className={classes.upperArea}>
            <div className={classes.inputArea}>
                    <SearchForm />
            </div>
        </div>
        <Rococo />
        <div className={classes.searchArea}>
            {sResults}
        </div>
    </div>
    )
}
const mapStateToProps = state => {
    return {
        clis: state.filteredItems,
        countList: state.totalList,
    }
};
export default connect(mapStateToProps, null)(hotelsSearch);
