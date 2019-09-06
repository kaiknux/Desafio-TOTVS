import React from 'react';
import classes from './Toolbar.module.css';

import Logo from '../../UI/Logo/Logo';

const toolbar = (props) => (
    <div className={classes.tbContainer}>
        <div className={classes.tbContent}>
            <Logo />
        </div>
    </div>
)

export default toolbar;