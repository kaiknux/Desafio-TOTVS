import React from 'react';
import classes from './HotelsSearch.module.css';
import Rococo from '../../components/UI/RococoDeFundo/RococoDeFundo';

import magGlass from '../../assets/images/magGlass.png';
import Input from '../../components/Input/Input';
import CityCard from '../../components/CityCard/CityCard';

const hotelsSearch = (props) => (
    <div className={classes.hsContainer}>
        <div className={classes.upperArea}>
            <div className={classes.inputArea}>
                <form className={classes.inputItself}>
                    <Input />
                    <button className={classes.formBtn1}>
                        <img src={magGlass} className={classes.formMagGlass} alt='nOne' />
                    </button>
                </form>
            </div>
        </div>
        <Rococo />
        <div className={classes.searchArea}>
            Resultado da busca
            <CityCard />
        </div>
    </div>
)

export default hotelsSearch;