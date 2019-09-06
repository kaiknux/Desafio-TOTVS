import React from 'react';
import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
            //lembrar que className no html não é case sensitive, então fazer inputType virar inputtype em switch case
        case ('input'):
            inputElement = <input onChange={props.changed} className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
            break;
        case ('textarea'):
            inputElement = <textarea onChange={props.changed} className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
            break;
        default:
            inputElement = <input onChange={props.changed} className={classes.InputElement} {...props.elementConfig} value={props.value}/>;
    };
    return (
    <div className={classes.Input}>
        {inputElement}
    </div>
    )
}

export default input;

// rua santa leopoldina, 457. ap 203 são gabriel endereço carlos
