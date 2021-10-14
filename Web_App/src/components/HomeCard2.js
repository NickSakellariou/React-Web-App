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
    backgroundColor: '#006080',
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

export default function OutlinedCard2() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h2">
            <b>Στατιστικά εμβολιασμού</b>
        </Typography>
        <br />
        <Typography variant="h5" component="h2">
          <b> 4.079.168 </b> εμβολιασμοί έχουν πραγματοποιηθεί (έως την 13/05/2021)
        </Typography>
        <br />
        <Typography variant="h5" component="h2">
          <b> 2.666.908 </b> εμβολιασμοί με τουλάχιστον 1 δόση έχουν πραγματοποιηθεί (έως την 13/05/2021)
        </Typography>
        <br />
        <Typography variant="h5" component="h2">
          <b> 1.450.838 </b> ολοκληρωμένοι εμβολιασμοί έχουν πραγματοποιηθεί (έως την 13/05/2021)
        </Typography>
      </CardContent>
        <CardActions>
          <Link to="/vaccinationStatistics">
            <Button size="small">Learn More</Button>
          </Link>
        </CardActions>
    </Card>
  );
}
