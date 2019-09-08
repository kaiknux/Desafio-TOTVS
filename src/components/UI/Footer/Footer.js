import React from 'react';
import classes from './Footer.module.css';
import imgRedux from '../../../assets/images/redux.png';
import imgReact from '../../../assets/images/react.png';
import imgFireBase from '../../../assets/images/firebase.png';


const footer = (props) => (
    <div className={classes.ftContainer}>
        <div>
        <img className={classes.fTecPin} src={imgRedux} alt="text" />
        <img className={classes.fTecPin} src={imgReact} alt="text" />
        <img className={classes.fTecPin} src={imgFireBase} alt="text" />
        </div>
        <div>
        Feito com: Redux, ReactJS e Google Firebase
        </div>
    </div>
)

export default footer;