import React from 'react';
import classes from './CityCard.module.css';

import placeHolderEmp from '../../assets/images/golden_tulip_logo.png';
import ccNav1 from '../../assets/images/ccNav1.svg';


const cityCard = (props) => (
    <div className={classes.ccContainer}>
        <div className={classes.ccHeader}>
            <div className={classes.hotelTag}>
                <img alt="comp" className={classes.hotelsTag} src={placeHolderEmp} /><>Golden Tulip</>
            </div>
            <div className={classes.hotelInteraction}>
                    <div className={classes.IntDescription}>Ver detalhe da ação</div><img alt="n" className={classes.intNavigators} src={ccNav1} />
            </div>
        </div>
        <div className={classes.ccContent}>
            <div className={classes.ccDescription}>
                    <>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</>
            </div>
            <div className={classes.ccInteraction}>
                    <button className={classes.ccBtn1}>VER MAIS</button>
            </div>
        </div>
    </div>
)

export default cityCard;


//{require('../../assets/images/ccNav1.jpg')}