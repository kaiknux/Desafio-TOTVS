import React from 'react';
import classes from './Toolbar.module.css';

import Logo from '../../UI/Logo/Logo';

const toolbar = (props) => (
    <div className={classes.tbContainer}>
        <div className={classes.tbContent}>
            <div className={classes.tbNav}>
                Navigation placeholder
            </div>
            <div className={classes.divLogo}>
            <Logo />
            </div>
        </div>
    </div>
)

export default toolbar;