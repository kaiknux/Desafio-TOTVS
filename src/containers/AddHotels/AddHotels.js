import React, { Component } from 'react';
import classes from './AddHotels.module.css';
import Input from '../../components/Input/Input';

class AddHotels extends Component { 
    state = {
        itemForm: {
            nome: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Nome do cliente',
                },
                value: '',
                validation: {
                    required: true,
                },
            },
            descric: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Descrição do cliente',
                },
                value: '',
                validation: {
                    required: true,
                },
            },
            link: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Link do site do cliente',
                },
                value: '',
                validation: {
                    required: true,
                },
            },
        },
    }
    inputChangedHandler = () => {

        console.log("event changed!")
    }

    render() {
        const formElementsArray = [];
        for (let key in this.state.itemForm) {
            formElementsArray.push({
                id: key,
                config: this.state.itemForm[key]
            });
        }
        let form = (
            <form onSubmit={this.formsToFirebaseHandler}>
                {formElementsArray.map(formElement => (
                    <Input key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.value}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <input type="file" onChange={this.handleFileChange} multiple />
                <button>Enviar</button>
            </form>);


        return (
        <div className={classes.cAddHotels}>
            Adicione novos clientes no redux a serem exibidos na busca:
            <div className={classes.AreaDeForm}>
                {form}
            </div>
        </div>
        )
    }
}

export default AddHotels;