import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor: '#990000',
    color: 'white',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard1() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2">
            <b>Ραντεβού για εμβολιασμό</b>
        </Typography>
        <br />
        <Typography variant="h5" component="h2">
        Ο εμβολιασμός, δωρεάν για όλους, είναι σε εξέλιξη για τους ανθρώπους στην πρώτη γραμμή της υγείας, εκπαιδευτικούς γενικής εκπαίδευσης και για τις ηλικίες 30 ετών και άνω.
        </Typography>
        <br />
        <Typography variant="h5" component="h2">
            Δείτε αν ανήκετε στην πληθυσμιακή ομάδα που μπορεί να εμβολιαστεί την τρέχουσα περίοδο με βάση τον ΑΜΚΑ και κλείστε το ραντεβού σας.
        </Typography>
        <br />
        <Typography variant="h5" component="h2">
        Στόχος, να εμβολιαστεί το σύνολο του πληθυσμού άνω των 18 ετών. Η Εθνική Επιτροπή Εμβολιασμών μπορεί να αλλάξει την προτεραιότητα ανάλογα με τον αριθμό των δόσεων που είναι διαθέσιμες.
        </Typography>
      </CardContent>
        <CardActions>
          <Link to="/vaccinationAppointment">
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
    </Card>
  );
}
