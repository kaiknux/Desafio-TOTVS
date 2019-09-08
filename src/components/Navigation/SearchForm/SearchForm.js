import React, { Component } from 'react';
import classes from './SearchForm.module.css';
import { withRouter } from 'react-router-dom'; // ver se precisa mesmo

import axios from '../../../axios-orders';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

import { connect } from 'react-redux';
import * as hotelSearchActions from '../../../store/actions/index';

import magGlass from '../../../assets/images/magGlass.png';

class SearchForm extends Component {

    state = {
        suggestions: [],
        fetchedHotels: [],
        searchString: '',
        final: '',
        backdrap: false,
        
    };

    componentDidMount () {
        this.props.onInitClients();
        this.setState({clients: this.props.clis})
        
        console.log("%cSearchForm props", "color: cyan; font-size: 14px")
        console.log(this.props)
        console.log("%cSearchForm state", "color: cyan; font-size: 14px")
        console.log(this.state)
    }

    searchEventHandler = (event) => {
        this.setState({
            searchString: event.target.value,
            backdrap: true,
        })
        let libraries = this.state.suggestions
        let searchString = this.state.searchString.trim().toLowerCase()
        if (searchString.length > 0) {
            libraries = libraries.filter( i => i.toLowerCase().match( searchString ) )
        }
        console.log(searchString)
        console.log(libraries)
        this.setState({final: libraries, backdrap: true, triggerSuggestion: true})
        console.log(this.state)
    }

    useSearchHandler = () => {
        let arrayPraFiltrar = this.props.clis.map(a=> a.nome)
        this.setState({suggestions: arrayPraFiltrar})
        console.log("%cSearchForm props", "color: cyan; font-size: 14px")
        console.log(this.props)
        console.log("%cSearchForm state", "color: cyan; font-size: 14px")
        console.log(this.state)
    }

    endOfSearchHandler = (nome) => {

    }

    funcaoReload = (param) => {
        this.setState({searchString: ''})
        this.setState({backdrap: false})
    }

    productSelectedHandler = (prodName) => {
        this.setState({ searchString: prodName, backdrap: false, triggerSuggestion: false })

        const queryParams = [];

        const libraries = this.state.fetchedHotels
        for (let osc in libraries) {
            if (libraries[osc].nome === prodName) {
                queryParams.push('product=' + libraries[osc].id);
            }
        }
        console.log(queryParams)
        const queryString = queryParams.join('&');
        // console.log(this.props)
        // const lugar = `/sale/${queryString}`
                        // console.log(this.props.history)
                        // this.props.history.replace({
                        //     pathname: '/sale',
                        //     search: '/' + queryString
                        // });
                        // window.location.reload();
        }

        
        // this.props.history.push({
        //     pathname: '/sale',
        //     search: '/' + queryString
        // });
    
  


        // const queryParams = [];
        // queryParams.push('product=' + id);
        // const queryString = queryParams.join('&');
        // this.props.history.push({
        //     pathname: '/sale',
        //     search: '/' + queryString
        // });

    



    suggestionSelected (optionClicked) {
        console.log(optionClicked)
        const agoraSim = optionClicked;
        this.setState({text1a: agoraSim})
    

        // this.props.functionHandler(this.state.text)
        console.log(this.state.text1a);
    }

    render() {

        const text = this.state.searchString;
        let backdrap = null;
        let sugestoes = null;
        let sugestoesEmContainer = null;
        if (this.state.searchString && this.state.triggerSuggestion) {
            sugestoes = (
                this.state.final.map(
                    sugestaoUnica => {
                        return ( 
                        <div className={classes.sugItem} onClick={() => this.endOfSearchHandler(sugestaoUnica)}>
                            {sugestaoUnica}
                        </div>
                        )
                    }
                )
            ) 
            sugestoesEmContainer = (
                <div className={classes.formSuggestionsContainer}>{sugestoes}</div>
            )
        }
        if (this.state.backdrap) {
            backdrap = (
                <div className={classes.Backdrap} onClick={this.funcaoReload}></div>
            )
        }

        return (
                <div className={classes.Headerf1}>
                    <form onSubmit={this.searchHandler} className={classes.fHeader}>
                        <div className={classes.fContainer}>
                            <input     onKeyPress={event => {
                                          if (event.key === 'Enter') {
                                                this.suggestionSelected()
                                         }}}
                                         autoComplete="off" 
                                         value={text} 
                                         onChange={this.searchEventHandler} 
                                         name="city" 
                                         key="teste"
                                         placeholder="Digite o que procura" 
                                         className={classes.FormControl} 
                                         onClick={()=> this.useSearchHandler()}
                                         autoFocus 
                                         />
                                         {sugestoesEmContainer}
                                         {backdrap}
                            
                        </div>
                        <button className={classes.formBtn1}>
                        <img src={magGlass} className={classes.formMagGlass} alt='nOne' />
                    </button>
                    </form>
                </div>

        );
    }
};

const mapStateToProps = state => {
    return {
        clis: state.newItem,
        countList: state.totalList,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        onInitClients: () => dispatch(hotelSearchActions.initClients())

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(SearchForm, axios));