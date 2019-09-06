import React from 'react';

import totvsLogo from '../../assets/images/logo.png';
import classes from './Info.module.css';

const info = (props) => (
    <div className={classes.infoContainer}>
        <img src={totvsLogo} alt='nOne' className={classes.logoImage} />
        Text
    </div>
);

export default info;