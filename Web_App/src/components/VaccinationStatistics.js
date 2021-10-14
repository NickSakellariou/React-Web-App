import React from "react"
import './App.css';
import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import $ from 'jquery';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class VaccinationStatistics extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      errormessagename: '',
      startDate: '',
      endDate: '',
      vaccinations1: [],
      vaccinations2: [],
      vaccinations3: [],
      vaccinations4: [],
      dates: []
    };
    this.mySubmitHandler = this.mySubmitHandler.bind(this);
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;

    this.setState({[nam]: val});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();

    document.getElementById("table").style.display = "block";

    var vaccinations = [];
    var vaccinationsa = [];
    var vaccinationsb = [];
    var totalvaccinations = [];
    var dates1 = [];

    var date_start = this.state.startDate;
    var date_end = this.state.endDate;

    var data = {
      date_from: date_start,
      date_to: date_end
    };
    // Εδώ γίνεται χρήση του AJAX με την βοήθεια της βιβλιοθήκης JQuery, όπου παίρνουμε τα στατιστικά 
    // εμβολιασμού για τις 2 ημερομηνίες που έχει δώσει ο χρήστης
    $.ajax({
      url: 'https://data.gov.gr/api/v1/query/mdg_emvolio',
      data: data,
      dataType: 'json',
      headers: {
        "Authorization": "Token 4dd183180c93e02530e1c75341277f83fb307e7c"
      },
      success: function(data) {
        var start = new Date(date_start);
        var end = new Date(date_end);

        var loop = new Date(start);

        var j = 0;

        // Εδώ υπάρχει ένα while loop το οποίο θα εκτελεστεί όσες μέρες έχει επιλέξει ο χρήστης.

        while(loop <= end){

          // Εδώ στην ουσία προσθέτουμε όλες τις τιμές για όλους τους νομούς στο αντίστοιχο array.
          // Παιρνάμε κάθε φορά από όλα τα δεδομένα που έχει επιστρέψει το API και ελέγχουμε κάθε
          // φορά αν η ημερομηνία του αντίστοιχου στοιχείου ισοδυναμεί με την ημερομηνία που έχουμε
          // στο while loop.

          for (var i = 0; i < data.length; i++) {

            var referencedate = new Date(data[i].referencedate).toDateString();
            var loopdate = new Date(loop).toDateString();
              
            if(referencedate === loopdate){
              // Εδώ ελέγχουμε αν έχει ορισθεί προηγουμένως το αντίστοιχο στοιχείο του array,
              // γιατί αν δεν έχει ορισθεί και χρησιμοποιήσουμε το += μας πετάει σφάλμα.
              if (Number(vaccinations[j])){
                vaccinations[j] += data[i].daytotal;
              }
              else{
                vaccinations[j] = data[i].daytotal;
              }

              if (Number(vaccinationsa[j])){
                vaccinationsa[j] += data[i].dailydose1;
              }
              else{
                vaccinationsa[j] = data[i].dailydose1;
              }

              if (Number(vaccinationsb[j])){
                vaccinationsb[j] += data[i].dailydose2;
              }
              else{
                vaccinationsb[j] = data[i].dailydose2;
              }

              if (Number(totalvaccinations[j])){
                totalvaccinations[j] += data[i].totalvaccinations;
              }
              else{
                totalvaccinations[j] = data[i].totalvaccinations;
              }
            }

          }

          dates1[j] = new Date(loop).toDateString();

          j++; 

          var newDate = loop.setDate(loop.getDate() + 1);
          loop = new Date(newDate);
        }

        this.setState({vaccinations1: vaccinations});
        this.setState({vaccinations2: vaccinationsa});
        this.setState({vaccinations3: vaccinationsb});
        this.setState({vaccinations4: totalvaccinations});
        this.setState({dates: dates1});
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="statisticsForm">
          <div id="next">
              <br />
              <br />
              <Typography variant="h2">Στατιστικά εμβολιασμού για τον COVID-19 </Typography>
              <br />
              <br />
              <Typography variant="h3">Επιλέξετε ημερομηνίες από - έως : </Typography>
              <br />
              <br />
              <br />
              <form noValidate>
                  <TextField
                      id="date"
                      label="Από"
                      type="date"
                      name="startDate"
                      InputLabelProps={{
                      shrink: true,
                      }}
                      onChange={this.myChangeHandler}
                  />
              </form>

              <br />
              <br />

              <form noValidate>
                  <TextField
                      id="date"
                      label="Έως"
                      type="date"
                      name="endDate"
                      InputLabelProps={{
                      shrink: true,
                      }}
                      onChange={this.myChangeHandler}
                  />
              </form>

              <br />
              <br />
              <br />
              <form noValidate onSubmit={this.mySubmitHandler}>
                  <Button type="submit" variant="contained" color="primary">
                      Υποβολη
                  </Button>
              </form>
              <br />
              <br />
              <br />
              <br />

              <TableContainer id="table" component={Paper} style={{ display: 'none' }}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell><b>Ημέρα</b></TableCell>
                      <TableCell align="right"><b>Εμβόλια</b></TableCell>
                      <TableCell align="right"><b>Εμβόλια α-δόσης</b></TableCell>
                      <TableCell align="right"><b>Εμβόλια β-δόσης</b></TableCell>
                      <TableCell align="right"><b>Συνολικά εμβόλια μέχρι σήμερα</b></TableCell>
                    </TableRow>
                  </TableHead>
                  {/* Εδώ εμφανίζουμε τα δεδομένα που επέστρεψε το API με τον τρόπο που θέλουμε
                    εμείς μετά και την κατάλληλη επεξεργασία στα αντίστοιχα arrays για τους εμβολιασμούς. */}
                  <TableBody>
                    {this.state.vaccinations1.map((vaccination, idx) => {
                      return (
                      <TableRow>
                        <TableCell component="th" scope="row">{this.state.dates[idx]}</TableCell>
                        <TableCell align="right">{vaccination}</TableCell>
                        <TableCell align="right">{this.state.vaccinations2[idx]}</TableCell>
                        <TableCell align="right">{this.state.vaccinations3[idx]}</TableCell>
                        <TableCell align="right">{this.state.vaccinations4[idx]}</TableCell>
                      </TableRow>
                      )
                      })}
		              </TableBody>
                </Table>
              </TableContainer>
              
              <br />
              <br />
              <br />
          </div>
      </div>
    );
  }
}
  
export default VaccinationStatistics