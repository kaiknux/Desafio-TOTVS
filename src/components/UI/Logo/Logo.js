import React from 'react';

import totvsLogo from '../../../assets/images/logo.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={totvsLogo} alt='nOne' className={classes.logoImage} />
    </div>
);

export default logo;