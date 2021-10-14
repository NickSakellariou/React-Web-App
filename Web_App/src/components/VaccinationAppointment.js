import React from "react"
import './App.css';
import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// Στο συγκεκριμένο αρχείο όπως και σε μερικά ακόμη γίνεται χρήση των classes αντί για function.
// Οι διαφορές έχουν να κάνουν κυρίως με το πως δηλώνεται το state, το οποίο είναι η κατάσταση στην
// οποία βρίσκονται οι μεταβλητές. Και το πως αλλάζει το state των μεταβλητών.

class VaccinationAppointment extends React.Component {

    // Εδώ γίνεται η αρχικοποίηση του state.

    constructor(props) {
      super(props);
      this.state = {
        name: '',
        surname: '',
        phone: null,
        email: '',
        gender: '',
        amka: null,
        errormessagename: '',
        errormessagesurname: '',
        errormessagephone: '',
        errormessageamka: '',
        errormessageemail: '',
        errormessagegender: '',
        randomdate: '',
        randomhour: '',
        datetime: ''
      };
    }

    // Εδώ είναι ο κώδικας που τρέχει όταν ο χρήστης κάνει submit την αρχική φόρμα.
    // Γιατί έχουμε δηλώσει στην φόρμα : onSubmit={this.mySubmitHandler}

    mySubmitHandler = (event) => {
        event.preventDefault();

        let errname = '';
        let errsurname = '';
        let errphone = '';
        let erramka = '';
        let erremail = '';
        let errgender = '';

        let randdate = '';
        let randhour = '';

        // Εδώ παίρνουμε τα states από τις μεταβλητές της φόρμας και ελέγχουμε αν υπάρχουν λάθη
        // σε αυτά που έχει εισάγει ο χρήστης.

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

        let amka = this.state.amka;
        if(!amka){
            erramka = <strong>Δεν έχετε συμπληρώσει το ΑΜΚΑ σας</strong>;
        }
        if(amka != null && amka.length !== 11){
            erramka = <strong>Ο ΑΜΚΑ αποτελείται από 11 ψηφία</strong>;
        }
        if(amka != null && !Number(amka)) {
            erramka = <strong>Ο ΑΜΚΑ αποτελείται μόνο από ψηφία</strong>;
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

        let gender = this.state.gender;
        if(!gender){
            errgender = <strong>Δεν έχετε συμπληρώσει το φύλο σας</strong>;
        }

        // Σε περίπτωση που ο χρήστης έχει εισάγει όλα τα στοιχεία του σωστά, η εφαρμογή του προτείνει 
        // τυχαία μέρα και ώρα για το κλείσιμο του ραντεβού.
        if(errname === '' && errsurname === '' && errphone === '' && erramka === '' && erremail === '' && errgender === ''){
            document.getElementById("next").style.display = "block";

            document.getElementById("form").style.display = "none";

            // Η τυχαία μέρα μπορεί να είναι από σήμερα μέχρι και 31/07/2021

            var startDate = new Date().getTime();
            var endDate =  new Date(2021,7,1).getTime();

            randdate = new Date(startDate + Math.random() * (endDate - startDate)).toDateString();

            // Εδώ έχει προσεχθεί η ώρα να είναι από τις 8 η ώρα το πρωί μέχρι και 8 η ώρα το βράδυ 
            // 08:00-20:00

            var min = Math.ceil(8);
            var max = Math.floor(20);
            randhour = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        else{
            document.getElementById("next").style.display = "none";
        }


        //Εδώ αναθέτουμε στα states των μεταβλητών που αρχικοποιήσαμε στην αρχή με τις αντίστοιχες τιμές
        // που δημιουργήθηκαν από τον παραπάνω κώδικα. 

        this.setState({errormessagename: errname});
        this.setState({errormessagesurname: errsurname});
        this.setState({errormessagephone: errphone});
        this.setState({errormessageamka: erramka});
        this.setState({errormessageemail: erremail});
        this.setState({errormessagegender: errgender});
        this.setState({randomdate: randdate});
        this.setState({randomhour: randhour});
    }

    mySubmitHandler3 = (event) => {
        event.preventDefault();

        this.setState({randomdate: ''});
        this.setState({randomhour: ''});

        document.getElementById("next").style.display = "none";

        document.getElementById("next2").style.display = "block";
    }

    mySubmitHandler4 = (event) => {
        event.preventDefault();

        document.getElementById("next").style.display = "none";

        document.getElementById("form").style.display = "block";
    }

    mySubmitHandler5 = (event) => {
        event.preventDefault();

        this.setState({datetime: ''});

        document.getElementById("datetime-local").value = '';

        document.getElementById("finalSubmit").style.display = "none";

        document.getElementById("next2").style.display = "none";

        document.getElementById("form").style.display = "block";
    }

    // Κάθε φορά που ο χρήστης εισάγει κάτι εκτελείται αυτός ο κώδικας, ο οποίος το μόνο που κάνει 
    // είναι να αναθέτει την αντίστοιχη τιμή στο name της μεταβλητής.

    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;

        if (nam === "datetime") {
            document.getElementById("finalSubmit").style.display = "block";
        }

        this.setState({[nam]: val});
    }

    mySubmitHandler2 = (event) => {
        event.preventDefault();

        // Το dateInfo είναι όλα τα στοιχεία που έχει εισάγει ο χρήστης.
        // Εδώ γίνεται ένας έλεγχος για το αν έχει ορισθεί η τιμή που ορίζει ο χρήστης για την ημερομηνία
        // του ραντεβού. Αν δεν έχει ορισθεί σημαίνει ότι ο χρήστης επέλεξε την τυχαία μέρα και ώρα που πρότεινε
        // η εφαρμογή. Η μόνη διαφορά είναι ότι στην ημερομηνία που επιλέγεται τυχαία υπάρχει μια ακόμα 
        // μεταβλητή για την ώρα και αυτό γιατί για να βγαίνει και η ώρα τυχαία και μάλιστα 08:00-20:00,
        // έπρεπε να δημιουργηθεί μια ακόμα μεταβλητή.

        let dateInfo = {};
        if(this.state.datetime){
            dateInfo={
                name: this.state.name,
                surname: this.state.surname,
                phone: this.state.phone,
                amka: this.state.amka,
                email: this.state.email,
                gender: this.state.gender,
                datetime: this.state.datetime
            };
        }
        else{
            dateInfo={
                name: this.state.name,
                surname: this.state.surname,
                phone: this.state.phone,
                amka: this.state.amka,
                email: this.state.email,
                gender: this.state.gender,
                date: this.state.randomdate,
                hour: this.state.randomhour
            };
        }

        // Εδώ γίνεται χρήση του AJAX όπου είναι ένα απλό fetch που εισάγουμε στο body ως JSON με την μέθοδο POST 
        // τα στοιχεία του ραντεβού.

        fetch("https://us-central1-unipi-aps.cloudfunctions.net/emvolioDate",{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(dateInfo)
        }).then(r=>r.json()).then(res=>{
            if(res.status === "SUCCESS"){
                alert('Το ραντεβού σας κλείστηκε με επιτυχία!');
                window.location.href='/';
            }
            else{
                alert('Το ραντεβού σας απορρίφθηκε');
            }
        })

    }

    render() {
      return (
        <div className="appointmentForm">
            <form id="form" noValidate autoComplete="off" onSubmit={this.mySubmitHandler}>
            <br />
            <br />
            <Typography variant="h3">Συμπληρώστε τα στοιχεία σας :</Typography>
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
                placeholder="Επώνυμο"
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
            <br />
            <br />
            <TextField
                required
                id="outlined-required"
                placeholder="ΑΜΚΑ"
                color="secondary"
                variant="outlined"
                type='text'
                name='amka'
                onChange={this.myChangeHandler}
            />
            <br />
            {this.state.errormessageamka}
            <br/>
            <br />
            <FormControl component="fieldset">
                <FormLabel component="legend">Φύλο</FormLabel>
                <RadioGroup aria-label="gender" name="gender" onChange={this.myChangeHandler}>
                    <FormControlLabel value="male" control={<Radio />} label="Αρσενικό" />
                    <FormControlLabel value="female" control={<Radio />} label="Θηλυκό" />
                    <FormControlLabel value="other" control={<Radio />} label="Άλλο" />
                </RadioGroup>
            </FormControl>
            <br />
            {this.state.errormessagegender}
            <br />
            <br />
            <br/>
            <br/>
            <Button type="submit" variant="contained" color="primary">
                Υποβολη
            </Button>
            <br />
            <br />
            <br />
            <br />
            </form>
            <div id="next" style={{ display: 'none' }}>
                <br />
                <br />
                <Typography variant="h2">Θέλετε να κλείσετε ραντεβού στις : </Typography>
                <br />
                <Typography variant="h3">Ημερομηνία : </Typography>
                <Typography variant="h4">{this.state.randomdate}</Typography>
                <br />
                <Typography variant="h3">Ώρα : </Typography>
                <Typography variant="h4">{this.state.randomhour}:00</Typography>
                <br />
                <br />
                <form noValidate onSubmit={this.mySubmitHandler2}>
                    <Button type="submit" variant="contained" color="primary">
                        Οριστικη υποβολη
                    </Button>
                </form>
                <br />
                <br />
                <form noValidate onSubmit={this.mySubmitHandler3}>
                    <Button type="submit" variant="contained" color="primary">
                        Θα επιλεξω ραντεβου αλλη μερα και ωρα
                    </Button>
                </form>
                <br />
                <br />
                <form noValidate onSubmit={this.mySubmitHandler4}>
                    <Button type="submit" variant="outlined" color="secondary">
                        Πισω στην συμπληρωση προσωπικων στοιχειων
                    </Button>
                </form>
                <br />
                <br />
                <form action="/">
                    <Button type="submit" variant="outlined" color="secondary">
                        Ακυρωση της διαδικασιας
                    </Button>
                </form>
                <br />
                <br />
            </div>
            <div id="next2" style={{ display: 'none' }}>
                <br />
                <br />
                <Typography variant="h2">Διαλέξτε ημερομηνία και ώρα για το ραντεβού : </Typography>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <form noValidate>
                    <TextField
                        id="datetime-local"
                        label="Next appointment"
                        type="datetime-local"
                        name="datetime"
                        InputLabelProps={{
                        shrink: true,
                        }}
                        onChange={this.myChangeHandler}
                    />
                </form>
                <br />
                <br />
                <br />
                <br />
                <br />
                <form id="finalSubmit" noValidate style={{ display: 'none' }} onSubmit={this.mySubmitHandler2}>
                    <Button type="submit" variant="contained" color="primary">
                        Οριστικη υποβολη
                    </Button>
                </form>
                <p>{this.state.message}</p>
                <br />
                <br />
                <form noValidate onSubmit={this.mySubmitHandler5}>
                    <Button type="submit" variant="outlined" color="secondary">
                        Πισω στην συμπληρωση προσωπικων στοιχειων
                    </Button>
                </form>
                <br />
                <br />
                <form action="/">
                    <Button type="submit" variant="outlined" color="secondary">
                        Ακυρωση της διαδικασιας
                    </Button>
                </form>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
        </div>
      );
    }
  }
  
  export default VaccinationAppointment