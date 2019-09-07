import React, { Component } from 'react';
import classes from './CityCard.module.css';

import placeHolderEmp from '../../assets/images/golden_tulip_logo.png';
import ccNav1 from '../../assets/images/ccNav1.svg';


class CityCard extends Component {
    state = {
        expanded: false,
    }

    componentDidMount () {
        console.log(this.props);
    }

    expandCardHandler = () => {
        this.setState({expanded: true})
    }

    shrinkCardHandler = () => {
        this.setState({expanded: false})
    }

    render() {
        let url = '';
        if (this.props.chamada) {  
            url = `https://firebasestorage.googleapis.com/v0/b/desafio-totvseo.appspot.com/o/${this.props.chamada}?alt=media&token=d8f879e0-f1aa-42f5-9f25-dfdeb8ccda21`
        }
        return (
            <div className={classes.ccContainer}>
                <div className={classes.ccHeader}>
                    <div className={classes.hotelTag}>
                        <div><img alt="comp" className={classes.hotelsTag} src={url} /></div><div>{this.props.nome}</div>
                    </div>
                    <div className={classes.hotelInteraction}>
                        <div className={classes.IntDescription}>Ver detalhe da ação</div><img alt="n" className={classes.intNavigators} src={ccNav1} />
                    </div>
                </div>
                <div className={classes.ccContent}>
                    <div className={classes.ccDescription}>
                        <>{this.props.descric}</>
                    </div>
                    <div className={classes.ccInteraction}>
                        <button className={classes.ccBtn1}>VER MAIS</button>
                    </div>
                </div>
            </div>
        )
    }
}





export default CityCard;


//{require('../../assets/images/ccNav1.jpg')}

/* <div className={classes.ccContainer}>
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
</div> */