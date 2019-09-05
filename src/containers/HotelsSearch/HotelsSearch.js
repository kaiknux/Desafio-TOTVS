import React from 'react';
import classes from './HotelsSearch.module.css';

import Rococo from '../../components/UI/RococoDeFundo/RococoDeFundo';

const hotelsSearch = (props) => (
    <div className={classes.hsContainer}>
        <div className={classes.upperArea}>
            <div className={classes.inputArea}>
            Oi
            </div>
            <Rococo />
        </div>
        <div className={classes.searchArea}>
            Search Area
        </div>
    </div>
)

export default hotelsSearch;