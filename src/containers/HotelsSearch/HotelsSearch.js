import React from 'react';
import classes from './HotelsSearch.module.css';
import Rococo from '../../components/UI/RococoDeFundo/RococoDeFundo';

import SearchForm from '../../components/Navigation/SearchForm/SearchForm';
import SearchResults from '../../components/SearchResults/SearchResults';

const hotelsSearch = (props) => (
    <div className={classes.hsContainer}>
        <div className={classes.upperArea}>
            <div className={classes.inputArea}>
                    <SearchForm />
            </div>
        </div>
        <Rococo />
        <div className={classes.searchArea}>
            <SearchResults />
        </div>
    </div>
)

export default hotelsSearch;