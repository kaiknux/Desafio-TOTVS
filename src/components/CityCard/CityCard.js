import React, { Component } from 'react';
import classes from './CityCard.module.css';

import ccNav1 from '../../assets/images/ccNav1.svg';
import ccNav2 from '../../assets/images/ccNav2.svg';

class CityCard extends Component {
    state = {
        expanded: false,
    }

    expandCardHandler = () => {
        if (this.state.expanded) {
            this.setState({expanded: false})
        } else {
            this.setState({expanded: true})
    }
}


    render() {
        let url = '';
        if (this.props.chamada) {  
            url = `https://firebasestorage.googleapis.com/v0/b/desafio-totvseo.appspot.com/o/${this.props.chamada}?alt=media&token=d8f879e0-f1aa-42f5-9f25-dfdeb8ccda21`
        }

        let div2 = '';
        let navImage = ccNav1;
        if (this.state.expanded) {
            div2 = (
                <div className={classes.ccContent}>
                    <div className={classes.ccDescription}>
                        <>{this.props.descric}</>
                    </div>
                    <div className={classes.ccInteraction}>
                        <button className={classes.ccBtn1}>VER MAIS</button>
                    </div>
                </div>
            )
            navImage = ccNav2
        }
        return (
            <div className={classes.ccContainer}>
                <div className={classes.ccHeader}>
                    <div className={classes.hotelTag}>
                        <div><img alt="comp" className={classes.hotelsTag} src={url} /></div><div>{this.props.nome}</div>
                    </div>
                    <div onClick={() => this.expandCardHandler()} className={classes.hotelInteraction}>
                        <div  className={classes.IntDescription}>Ver detalhe da ação</div><img alt="n" className={classes.intNavigators} src={navImage} />
                    </div>
                </div>
                {div2 }
            </div>
        )
    }
}





export default CityCard;

