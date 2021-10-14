import React from "react"
import './App.css';
import { Box, Typography } from "@material-ui/core";
import image1 from './newsImages/newsImages1.jpg';
import image2 from './newsImages/newsImages2.jpg';

const latestNewsStyle = {
    color: '#000080'
};

const latestNewsStyle1 = {
    color: '#000080',
    textAlign: 'center'
};

function News() {
    return (
    <Box className="latestNews" bgcolor="#e6e6e6"  >
        <br />
        <ul>
            <Typography variant="h3" style={latestNewsStyle1}><b>Τελευταίες Ανακοινώσεις</b></Typography>
            <br /> 
            <br />
            <hr />
            <br />
            <br />
            <li>
                <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 26 Απριλίου, 2021 - 22:00</Typography>
                <br />
                <Box display="flex" className="imageNews">
                    <img src={image1} alt="related"/>
                    <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
                </Box>
                <br /> 
                <Typography variant="h5" style={latestNewsStyle}>ΣΥΝΤΟΝΙΣΤΗΣ: Καλησπέρα σας από το Υπουργείο Υγείας και καλή Μεγάλη Εβδομάδα. Ξεκινά η ενημέρωση για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της νόσου COVID-19 από την Ομότιμη Καθηγήτρια Παιδιατρικής και Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γενικό...</Typography>
                <br />
            </li>

            <br />
            <hr />
            <br />
            <br />
            <li>
                <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 19 Απριλίου, 2021 - 22:07</Typography>
                <br />
                <Box display="flex" className="imageNews">
                    <img src={image1} alt="related"/>
                    <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
                </Box>
                <br /> 
                <Typography variant="h5" style={latestNewsStyle}>ΣΥΝΤΟΝΙΣΤΗΣ: Καλησπέρα σας από το Υπουργείο Υγείας. Ξεκινά η ενημέρωση για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της νόσου COVID-19 από την Ομότιμη Καθηγήτρια Παιδιατρικής και Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γενικό Γραμματέα Πρωτοβάθμιας...</Typography>
                <br />
            </li>

            <br />
            <hr />
            <br />
            <br />
            <li>
                <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 12 Απριλίου, 2021 - 22:10</Typography>
                <br />
                <Box display="flex" className="imageNews">
                    <img src={image1} alt="related"/>
                    <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
                </Box>
                <br /> 
                <Typography variant="h5" style={latestNewsStyle}>ΣΥΝΤΟΝΙΣΤΗΣ: Καλησπέρα σας από το Υπουργείο Υγείας. Ξεκινά η ενημέρωση για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της νόσου COVID-19 από την Ομότιμη Καθηγήτρια Παιδιατρικής και Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γενικό Γραμματέα Πρωτοβάθμιας...</Typography>
                <br />
            </li>

            <br />
            <hr />
            <br />
            <br />
            <li>
                <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 5 Απριλίου, 2021 - 22:12</Typography>
                <br />
                <Box display="flex" className="imageNews">
                    <img src={image1} alt="related"/>
                    <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
                </Box>
                <br /> 
                <Typography variant="h5" style={latestNewsStyle}>ΣΥΝΤΟΝΙΣΤΗΣ: Καλησπέρα σας από το Υπουργείο Υγείας. Ξεκινά η ενημέρωση για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της νόσου COVID-19 από την Ομότιμη Καθηγήτρια Παιδιατρικής και Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γενικό Γραμματέα Πρωτοβάθμιας...</Typography>
                <br />
            </li>

            <br />
            <hr />
            <br />
            <br />
            <li>
                <Typography variant="h6" style={latestNewsStyle}>Τρίτη, 30 Μαρτίου, 2021 - 09:02</Typography>
                <br />
                <Box display="flex" className="imageNews">
                    <img src={image1} alt="related"/>
                    <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
                </Box>
                <br /> 
                <Typography variant="h5" style={latestNewsStyle}>ΣΥΝΤΟΝΙΣΤΗΣ: Καλησπέρα σας από το Υπουργείο Υγείας. Ξεκινά η ενημέρωση για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της νόσου Covid-19 από την Ομότιμη Καθηγήτρια Παιδιατρικής και Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γενικό...</Typography>
                <br />
            </li>


            <br />
            <hr />
            <br />
            <br />
            <li>
                <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 22 Μαρτίου, 2021 - 21:57</Typography>
                <br />
                <Box display="flex" className="imageNews">
                    <img src={image2} alt="related"/>
                    <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση Υπουργείου Υγείας από την Πρόεδρο Εθνικής Επιτροπής Εμβολιασμών κα Μαρία Θεοδωρίδου και τον Γενικό Γραμματέα Πρωτοβάθμιας Φροντίδας Υγείας κο Μάριο Θεμιστοκλέους</b></Typography>
                </Box>
                <br /> 
                <Typography variant="h5" style={latestNewsStyle}>ΣΥΝΤΟΝΙΣΤΗΣ: Καλησπέρα σας από το Υπουργείο Υγείας. Ξεκινάει η ενημέρωση για το Εθνικό Σχέδιο Εμβολιαστικής Κάλυψης κατά της νόσου COVID-19 από την ομότιμη Καθηγήτρια Παιδιατρικής και Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών, Μαρία Θεοδωρίδου και τον Γενικό Γραμματέα Πρωτοβάθμιας...</Typography>
                <br />
            </li>

            <br />
            <hr />
            <br />
            <br />
            <li>
                <Typography variant="h6" style={latestNewsStyle}>Τρίτη, 16 Μαρτίου, 2021 - 22:58</Typography>
                <br />
                <Box display="flex" className="imageNews">
                    <img src={image1} alt="related"/>
                    <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
                </Box>
                <br /> 
                <Typography variant="h5" style={latestNewsStyle}>ΣΥΝΤΟΝΙΣΤΗΣ: Καλησπέρα σας από το Υπουργείο Υγείας και καλή Σαρακοστή. Ξεκινά η ενημέρωση για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της νόσου Covid-19, από την Ομότιμη Καθηγήτρια Παιδιατρικής και Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γενικό...</Typography>
                <br />
            </li>

            <br />
            <hr />
            <br />
            <br />
            <li>
                <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 8 Μαρτίου, 2021 - 22:16</Typography>
                <br />
                <Box display="flex" className="imageNews">
                    <img src={image1} alt="related"/>
                    <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
                </Box>
                <br /> 
                <Typography variant="h5" style={latestNewsStyle}>ΣΥΝΤΟΝΙΣΤΗΣ: Καλησπέρα σας από το Υπουργείο Υγείας. Ξεκινά η ενημέρωση για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της νόσου COVID-19 από την Ομότιμη Καθηγήτρια Παιδιατρικής και Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γενικό Γραμματέα Πρωτοβάθμιας...</Typography>
                <br />
            </li>

            <br />
            <hr />
            <br />
            <br />
            <li>
                <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 1 Μαρτίου, 2021 - 22:34</Typography>
                <br />
                <Box display="flex" className="imageNews">
                    <img src={image1} alt="related"/>
                    <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
                </Box>
                <br /> 
                <Typography variant="h5" style={latestNewsStyle}>ΣΥΝΤΟΝΙΣΤΗΣ: Καλησπέρα σας από το Υπουργείο Υγείας και καλό μήνα. Ξεκινά η ενημέρωση για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της νόσου Covid-19 από την Ομότιμη Καθηγήτρια Παιδιατρικής και Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γενικό Γραμματέα...</Typography>
                <br />
            </li>

            <br />
            <br />
            <br />
        </ul>
        <br />
    </Box>
    );
}

export default News;