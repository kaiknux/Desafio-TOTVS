import React from 'react';
import classes from './SearchResults.module.css';
import CityCard from '../../components/CityCard/CityCard';

const searchResults = (props) => (
    <div className={classes.srContainer}>
    <p>Resultado da busca</p>
    <CityCard />
    </div>
)

export default searchResults;