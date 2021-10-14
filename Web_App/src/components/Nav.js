import React from "react"
import './App.css';
import { Box, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function Nav() {
    const navStyle = {
        color: 'white',
    };

    return (
        <div>
            <Box className="header" style={navStyle} display="flex" bgcolor="#004d99" p={5} alignItems="center">
                {/* Με την βοήθεια της βιβλιοθήκης React Router, το Link μας βοηθάει κάθε φορά που
                    ο χρήστης πατάει εκεί που δείχνει το Link να τον πηγαίνει στην αντίστοιχη σελίδα
                    που δηλώνουμε εδώ */}
                <Link style={navStyle} to="/">
                    <Typography variant="h4">Εμβολιασμός COVID-19</Typography>
                </Link>
                <Link style={navStyle} to="/news">
                    <Typography variant="h5">Νέα</Typography>
                </Link>
                <Link style={navStyle} to="/frequentlyAskedQuestions">
                    <Typography variant="h5">Συχνές ερωτήσεις</Typography>
                </Link>
                <Link style={navStyle} to="/vaccinationAppointment">
                    <Typography variant="h5">Ραντεβού για εμβολιασμό</Typography>
                </Link>
                <Link style={navStyle} to="/vaccinationStatistics">
                    <Typography variant="h5">Στατιστικά εμβολιασμού</Typography>
                </Link>
                <Link style={navStyle} to="/contact">
                    <Typography variant="h5">Επικοινωνία</Typography>
                </Link>
            </Box>
        </div>
    );
}

export default Nav