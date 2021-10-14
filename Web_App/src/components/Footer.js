import React from "react"
import './App.css';
import { Box, Typography } from "@material-ui/core";

function Footer() {
    const navStyle = {
        color: 'white',
    };

    return (
        <div>
            <Box className="footer" style={navStyle} display="flex" bgcolor="#004d99" p={5} alignItems="center">
                <Typography variant="h5">&copy;
			        <a href="http://www.ds.unipi.gr/" target="_blank" rel="noreferrer">2021 DS_UNIPI</a>.All rights reserved.
                </Typography>
                <Typography variant="h5">
                    Επικοινωνία με τον ΕΟΔΥ
                </Typography>
                <Typography variant="h5">
                    Τηλεφωνικό κέντρο
                    <br />
                    210 5212054 24ωρη γραμμή
                </Typography>
                <Typography variant="h5">
                    Ηλεκτρονική Διεύθυνση
                    <br />
                    info@eody.gov.gr
                </Typography>
            </Box>
        </div>
    );
}

export default Footer