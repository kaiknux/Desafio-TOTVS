import React from 'react';
import classes from './CityCard.module.css';


const cityCard = (props) => (
    <div className={classes.ccContainer}>
        <div className={classes.ccHeader}>
            <div className={classes.hotelTag}>
                    <>PlaceHolder GoldenTulip</>
            </div>
            <div className={classes.hotelInteraction}>
                    <>Ver detalhe da ação</>
            </div>
        </div>
        <div className={classes.ccContent}>
            <div className={classes.ccDescription}>
                    <>Oi eu sou a descrição da rede de hotéis</>
            </div>
            <div className={classes.ccInteraction}>
                    <button className={classes.ccBtn1}>VER MAIS</button>
            </div>
        </div>







    </div>
)

export default cityCard;