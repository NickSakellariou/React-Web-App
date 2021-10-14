import React from "react"
import './App.css';
import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class VaccinationAppointment extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        surname: '',
        phone: null,
        email: '',
        message: '',
        errormessage: '',
        errormessagename: '',
        errormessagesurname: '',
        errormessagephone: '',
        errormessageemail: ''
      };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();

        let err = '';
        let errname = '';
        let errsurname = '';
        let errphone = '';
        let erremail = '';

        let message = this.state.message;
        if(!message){
            err = <strong>Δεν έχετε συμπληρώσει το μήνυμα</strong>;
        }
        if(message != null && message.length <= 10){
            err = <strong>Το μήνυμα αποτελείται από τουλάχιστον 10 χαρακτήρες</strong>;
        }

        let name = this.state.name;
        if(!name){
            errname = <strong>Δεν έχετε συμπληρώσει το όνομά σας</strong>;
        }
        let matchesname = name.match(/\d+/g);
        if (matchesname != null) {
            errname = <strong>Το όνομα δεν αποτελείται από ψηφία</strong>;
        }

        let surname = this.state.surname;
        if(!surname){
            errsurname = <strong>Δεν έχετε συμπληρώσει το επίθετό σας</strong>;
        }
        let matchessurname = surname.match(/\d+/g);
        if (matchessurname != null) {
            errsurname = <strong>Το επίθετο δεν αποτελείται από ψηφία</strong>;
        }

        let phone = this.state.phone;
        if(!phone){
            errphone = <strong>Δεν έχετε συμπληρώσει το τηλέφωνό σας</strong>;
        }
        if(phone != null && phone.length !== 10){
            errphone = <strong>Το τηλέφωνο αποτελείται από 10 ψηφία</strong>;
        }
        if(phone != null && !Number(phone)) {
            errphone = <strong>Το τηλέφωνο αποτελείται μόνο από ψηφία</strong>;
        }

        let email = this.state.email;
        if(email !== "undefined"){
            let lastAtPos = email.lastIndexOf('@');
            let lastDotPos = email.lastIndexOf('.');

            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                erremail = <strong>Το e-mail δεν είναι έγκυρο</strong>;
            }
        }
        if(!email){
            erremail = <strong>Δεν έχετε συμπληρώσει το e-mail σας</strong>;
        }

        if(errname === '' && errsurname === '' && errphone === '' && erremail === '' && err === ''){
            alert('Το μήνυμά σας στάλθηκε με επιτυχία!');
            window.location.href='/';
        }

        this.setState({errormessage: err});
        this.setState({errormessagename: errname});
        this.setState({errormessagesurname: errsurname});
        this.setState({errormessagephone: errphone});
        this.setState({errormessageemail: erremail}); 
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;

        this.setState({[nam]: val});
    }
    render() {
      return (
        <form className="appointmentForm" noValidate autoComplete="off" onSubmit={this.mySubmitHandler}>
        <br />
        <br />
        <Typography variant="h3">Φόρμα επικοινωνίας :</Typography>
        <br />
        <br />
        <TextField
            required
            id="outlined-required"
            placeholder="Όνομα"
            color="secondary"
            variant="outlined"
            type='text'
            name='name'
            onChange={this.myChangeHandler}
        />
        <br />
        {this.state.errormessagename}
        <br />
        <br />
        <TextField
            required
            id="outlined-required"
            placeholder="Επίθετο"
            color="secondary"
            variant="outlined"
            type='text'
            name='surname'
            onChange={this.myChangeHandler}
        />
        <br />
        {this.state.errormessagesurname}
        <br />
        <br />
        <TextField
            required
            id="outlined-required"
            placeholder="Τηλέφωνο"
            color="secondary"
            variant="outlined"
            type='text'
            name='phone'
            onChange={this.myChangeHandler}
        />
        <br />
        {this.state.errormessagephone}
        <br />
        <br />
        <TextField
            required
            id="outlined-required"
            placeholder="E-mail"
            color="secondary"
            variant="outlined"
            type='text'
            name='email'
            onChange={this.myChangeHandler}
        />
        <br />
        {this.state.errormessageemail}
        <br/>
        <br/>
        <TextField
            required
            id="filled-textarea"
            multiline
            variant="filled"
            placeholder="Μήνυμα"
            color="secondary"
            type='text'
            name='message'
            onChange={this.myChangeHandler}
        />
        <br />
        {this.state.errormessage}
        <br />
        <br />
        <Button type="submit" variant="contained" color="primary">
            Υποβολή
        </Button>
        <br />
        <br />
        <br />
        <br />
        </form>
      );
    }
  }
  
  export default VaccinationAppointment