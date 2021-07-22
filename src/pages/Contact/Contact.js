import React, { Component } from 'react';
import './Contact.css'

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientName: '',
            birthDay: '',
            birthPlace: '',
            adress: '',
            postalCode: '',
            cityAdress: '',
            coachingBeginDate: '',
            coachingEndDate: '',
            coachingPrice: 0,
            payementNumber: 1,
            contractDate: this.getCurrentDate(),
            contractCity: '',
            emailAdress: '',
        }
    }

    handleInputChange = event => {
        const name = event.target.name
            this.setState({
                [name]: event.target.value
            })
    }

    getCurrentDate() {
        let today = new Date()
        let day = today.getDate()
        let month = today.getMonth()
        let currentDate = today.getFullYear() + '-' + (month < 10 ? '0' + (month + 1) : (month + 1)) + '-' + (day < 10 ? '0' + day : day)
        return (currentDate)
    }


    storedForm = async (e) => {
        // e.preventDefault();
    }

    render() {
        const payementNumberPossible = [];
        for (let i = 1; i < 7; i++) {
            payementNumberPossible[i] = i;
        }

        return (
        <div className="newClientContainer">
        <h1 className="contact-title">Formulaire de contact</h1>

        <div className="wrapperNewClientForm">
        <form className="newClientFormulaire" onSubmit={this.storedForm}>
            <label for="input-sm"> Nom prénom : {'\n'} </label>
                <input class="form-control input-sm" id="input-sm" className="champs" name="clientName" type="text" value={this.state.clientName} onChange={this.handleInputChange} /> {'\n'}
            <label> Date de naissance : {'\n'}</label>
                <input id="inputsm"  class="form-control" className="champs" name="birthDay" type="date" value={this.state.birthDay} onChange={this.handleInputChange} /> {'\n'}
            <label> Lieu de naissance : {'\n'} </label>
                <input id="inputsm"  class="form-control" className="champs" name="birthPlace" type="text" value={this.state.birthPlace} onChange={this.handleInputChange} /> {'\n'}
            <label> Adresse : {'\n'} </label>
                <input id="inputsm"  class="form-control" size="large" className="champs" name="adress" type="text" value={this.state.adress} onChange={this.handleInputChange} /> {'\n'}
            <label> Code postale : {'\n'} </label>  
                <input id="inputsm"  class="form-control" className="champs" name="postalCode" type="text" value={this.state.postalCode} onChange={this.handleInputChange} /> {'\n'}
            <label> Ville : {'\n'} </label>
                <input id="inputsm"  class="form-control" className="champs" name="cityAdress" type="text" value={this.state.cityAdress} onChange={this.handleInputChange} /> {'\n'}
            <label> Date de debut : {'\n'} </label>
                <input id="inputsm"  class="form-control" className="champs" name="coachingBeginDate" type="date" value={this.state.coachingBeginDate} onChange={this.handleInputChange} /> {'\n'}
            <label> Date de fin : {'\n'} </label>
                <input id="inputsm"  class="form-control" className="champs" name="coachingEndDate" type="date" value={this.state.coachingEndDate} onChange={this.handleInputChange} /> {'\n'}
            <label> Prix : {'\n'}  </label>
                <input id="inputsm"  class="form-control" className="champs" name="coachingPrice" type="number" value={this.state.coachingPrice} onChange={this.handleInputChange} /> {'\n'}
            <label> Nombre de versement (entre 1 et 6) : {'\n'} </label>
                <select className="champs" name="payementNumber" onChange={this.handleInputChange} >
                {payementNumberPossible.map((number, index) => (
                    <option value={number}>{index}</option>
                ))}
                  </select> {'\n'}
            <label> Adresse email : {'\n'} </label>
                <input id="inputsm"  class="form-control" className="champs" name="emailAdress" type="mail" value={this.state.emailAdress} onChange={this.handleInputChange} /> {'\n'}
            <button type="submit" className="contact-button">Envoyer</button>
        </form>
        </div>
        </div>
        )
    }
}
