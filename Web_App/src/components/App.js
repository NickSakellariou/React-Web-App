import React from "react"
import './App.css';
import Nav from "./Nav";
import News from "./News";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import VaccinationAppointment from "./VaccinationAppointment";
import VaccinationStatistics from "./VaccinationStatistics";
import Contact from "./Contact";
import Footer from "./Footer";
import ResponsiveCarousel from "./Carousel";
import OutlinedCard1 from "./HomeCard1";
import OutlinedCard2 from "./HomeCard2";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import { Box, Typography } from "@material-ui/core";

function App() {
  return (
    // Εδώ γίνεται χρήση της βιβλιοθήκης React Router η οποία μας βοηθάει να έχουμε 
    // πολλές σελίδες στην εφαρμογή μας.
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          {/* Εδώ για παράδειγμα, στο path "/" εμφανίζεται το component "Home" το οποίο δημιουργούμε
            πιο κάτω "const Home = () => (...)" (έχει χρησιμοποιηθεί και το exact το οποίο σημαίνει ότι το 
            path πρέπει να έχει ακριβώς αυτόν τον χαρακτήρα, αν δεν βάζαμε το exact τότε οποιοδήποτε άλλο 
            path και να βάζαμε η εφαρμογή θα μας πήγαινε εκεί που ορίσαμε για το "/" καθώς θα διάβαζε τον 
            πρώτο χαρακτήρα και θα σταμάταγε εκεί) */}
          <Route path="/" exact component={Home} />
          {/* Ενώ εδώ, στο path "/news" εμφανίζεται το component News το οποίο έχουμε κάνει import 
            πιο πάνω από το αρχείο News.js */}
          <Route path="/news" component={News} />
          <Route path="/frequentlyAskedQuestions" component={FrequentlyAskedQuestions} />
          <Route path="/vaccinationAppointment" component={VaccinationAppointment} />
          <Route path="/vaccinationStatistics" component={VaccinationStatistics} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

// Εδώ γίνεται χρήση CSS πιο γρήγορα, χωρίς να τροποποιήσουμε το CSS αρχείο.
const generalInformationStyle = {
  color: '#000080'
};

const latestNewsStyle = {
  color: '#000080'
};

const Home = () => (
  <div>
    {/* Από εδώ και στην συνέχεια χρησιμοποιούνται διάφορα components τα οποία έχουμε κάνει
      import στην κορυφή του αρχείου. */}
    <ResponsiveCarousel />
    <br />
    <br />
    {/* Το Box και το Typography τα κάνουμε import από την βιβλιοθήκη Material-UI και χρησιμεύουν
      μόνο για να κάνουν την διεπαφή χρήστη πιο όμορφη. */}
    <Box className="homeCards" display="flex" textAlign="left">
      <OutlinedCard1 />
      <OutlinedCard2 />
    </Box>
    <br />
    <Typography variant="h3" style={generalInformationStyle}><b>Βίντεο με οδηγίες</b></Typography>
    <br />
    <iframe className="videos" width="560" height="315" src="https://www.youtube.com/embed/uqy9EtE1uuE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <iframe className="videos" width="560" height="315" src="https://www.youtube.com/embed/rFF-Ss091z8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    <br />
    <br />
    <br />
    <br />
    <Typography variant="h3" style={generalInformationStyle}><b>Γενικές πληροφορίες</b></Typography>
    <br /> 
    <Box className="generalInformation" bgcolor="#e6e6e6" p={5}>
      <Typography variant="h4" style={generalInformationStyle}><b>Πώς λειτουργούν τα εμβόλια κατά της νόσου COVID-19;</b></Typography>
      <br />
      <Typography variant="h5">Η λειτουργία των εμβολίων βασίζεται στην κατάλληλη προετοιμασία του ανοσοποιητικού συστήματος του ατόμου (της φυσικής άμυνας του οργανισμού) ώστε να αναγνωρίζει συγκεκριμένη νόσο και να προστατεύεται από αυτήν.</Typography>
      <br />
      <Typography variant="h5" style={generalInformationStyle}><b>Δημιουργία ανοσίας:</b></Typography>
      <br />
      <Typography variant="h5">Το μεγαλύτερο μέρος της έρευνας σχετικά με τα εμβόλια κατά της COVID-19 αφορά την πρόκληση απόκρισης ενάντια σε μια πρωτεΐνη (είτε ολόκληρη είτε τμήμα αυτής) η οποία βρίσκεται μόνο στον ιό που προκαλεί την COVID-19. Όταν ένα άτομο εμβολιάζεται δημιουργείται ανοσοαπόκριση. Για τα περισσότερα εμβόλια κατά της COVID-19 χρειάζονται δύο δόσεις προκειμένου να δημιουργηθεί ανοσία.</Typography>
      <br />
      <Typography variant="h5">Εάν το άτομο προσβληθεί αργότερα από τον ιό, το ανοσοποιητικό σύστημα είναι σε θέση να τον αναγνωρίσει. Έπειτα, είναι ήδη προετοιμασμένο να του επιτεθεί.</Typography>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <Typography variant="h4" style={generalInformationStyle}><b>Εξασφάλιση δόσεων μελλοντικών εμβολίων</b></Typography>
      <br />
      <Typography variant="h5">Η Ευρωπαϊκή Επιτροπή συνεργάζεται στενά με φαρμακευτικές εταιρείες και με τον Ευρωπαϊκό Οργανισμό Φαρμάκων για να έχει διαθέσιμο ένα ασφαλές και αποτελεσματικό εμβόλιο το συντομότερο δυνατό. Όπως και με κάθε εμβόλιο, έτσι και στη συγκεκριμένη περίπτωση τα εμβόλια θα υποβληθούν σε αυστηρή επιστημονική αξιολόγηση προτού κυκλοφορήσουν στην αγορά.</Typography>
      <br />
      <Typography variant="h5">Η Ευρωπαϊκή Επιτροπή έχει μέχρι στιγμής εξασφαλίσει συμφωνίες με 6 εταιρείες ανάπτυξης ελπιδοφόρων εμβολίων, και ενδέχεται να συναφθούν και άλλες. Μέχρι στιγμής, η Επιτροπή έχει εξασφαλίσει για τους πολίτες της Ευρωπαϊκής Ένωσης, 2.000.000.000. δόσεις.</Typography>
      <br />
      <br />
      <hr />
      <br />
      <br />
      <Typography variant="h4" style={generalInformationStyle}><b>Σε τι χρησιμεύουν τα εμβόλια;</b></Typography>
      <br />
      <Typography variant="h5">Ο εμβολιασμός ενισχύει την ανοσοποιητική άμυνα του οργανισμού και βοηθά στην αντιμετώπιση κοινών νόσων στις οποίες μπορεί να εκτίθενται οι άνθρωποι. Στη συντριπτική πλειονότητα των περιπτώσεων, ο εμβολιασμός αποτρέπει την προσβολή από νόσους.</Typography>
      <br />
      <Typography variant="h5">Σε ορισμένες περιπτώσεις, ένα άτομο μπορεί να προσβληθεί από μια νόσο ακόμη και αν έχει εμβολιαστεί. Ωστόσο, τα συμπτώματα που παρουσιάζει είναι ηπιότερα και η ανάρρωση ταχύτερη.</Typography>
      <br />
      <Typography variant="h5">Ορισμένες από τις νόσους έναντι των οποίων μας προστατεύουν τα εμβόλια:</Typography>
      <ul>
        <li><Typography variant="h5">Ηπατίτιδα Α και Β</Typography></li>
        <br />
        <li><Typography variant="h5">Τέτανος, διφθερίτιδα, κοκίτης </Typography></li>
        <br />
        <li><Typography variant="h5">Μηνιγγίτιδα</Typography></li>
        <br />
        <li><Typography variant="h5">Μόλυνση από τον ιό των ανθρώπινων θηλωμάτων (HPV)</Typography></li>
        <br />
        <li><Typography variant="h5">Γρίπη</Typography></li>
        <br />
        <li><Typography variant="h5">Ιλαρά, παρωτίτιδα και ερυθρά</Typography></li>
        <br />
        <li><Typography variant="h5">Πολιομυελίτιδα</Typography></li>
        <br />
        <li><Typography variant="h5">Τέτανος</Typography></li>
        <br />
        <li><Typography variant="h5">Φυματίωση</Typography></li>
      </ul>
      <br />
      <Typography variant="h4" style={generalInformationStyle}><b>Οφέλη για όλους</b></Typography>
      <br />
      <Typography variant="h5">Τα εμβολιασμένα άτομα έχουν λιγότερες πιθανότητες να μεταδώσουν λοιμώδη νόσο σε άλλους. Έτσι, τα άτομα που εμβολιάζονται συμβάλλουν στην προστασία των ατόμων που δεν μπορούν να εμβολιαστούν. Σε αυτά περιλαμβάνονται:</Typography>
      <ul>
        <li><Typography variant="h5">βρέφη</Typography></li>
        <br />
        <li><Typography variant="h5">παιδιά</Typography></li>
        <br />
        <li><Typography variant="h5">ηλικιωμένοι</Typography></li>
        <br />
        <li><Typography variant="h5">άτομα με εξασθενημένο ανοσοποιητικό σύστημα, όπως οι καρκινοπαθείς</Typography></li>
      </ul>
      <br />
      <Typography variant="h5">Οι ομάδες αυτές επωφελούνται από τον εμβολιασμό των άλλων, διότι κατά αυτόν τον τρόπο η νόσος δεν μπορεί να εξαπλωθεί στην κοινότητα.</Typography>
      <br />
      <Typography variant="h5">Απαιτείται μεγάλος αριθμός εμβολιασμών προκειμένου να επιτευχθεί η εν λόγω συλλογική ανοσία. Όταν μεγάλος αριθμός ατόμων εμβολιάζεται, οι αλυσίδες λοιμώξεων διακόπτονται. Για παράδειγμα, σύμφωνα με το Ευρωπαϊκό Κέντρο Πρόληψης και Ελέγχου Νόσων (ECDC), απαιτείται να εμβολιαστεί το 95 % του πληθυσμού κατά της ιλαράς, προκειμένου να αποφευχθεί η περαιτέρω διασπορά της νόσου στην κοινότητα.</Typography>
      <br />
      <Typography variant="h4" style={generalInformationStyle}><b>Μείωση της επιβάρυνσης των ατόμων</b></Typography>
      <br />
      <Typography variant="h5">Ο εμβολιασμός, συμβάλλοντας στη διατήρηση της υγείας περισσότερων ανθρώπων, βοηθά στη μείωση των κοινωνικών και ψυχολογικών επιπτώσεων των ασθενειών στους ανθρώπους και ελαφρύνει την επιβάρυνση των νοσοκομείων και των συστημάτων υγειονομικής περίθαλψης. Αυτό σημαίνει ότι μπορούν να διατεθούν πόροι για την καταπολέμηση άλλων νόσων, όπως ο καρκίνος ή η νόσος του Αλτσχάιμερ.</Typography>
    </Box>

    <br />
    <br />
    <br />
    <Typography variant="h3" style={latestNewsStyle}><b>Τελευταίες Ανακοινώσεις</b></Typography>
    <br /> 
    <Box className="latestNews" bgcolor="#e6e6e6" p={5}>
      <ul>
        <br />
        <hr />
        <br />
        <br />
        <li>
          <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 26 Απριλίου, 2021 - 22:00</Typography>
          <br />
          <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
          <br /> 
        </li>

        <br />
        <hr />
        <br />
        <br />
        <li>
          <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 19 Απριλίου, 2021 - 22:07</Typography>
          <br />
          <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
          <br />
        </li>

        <br />
        <hr />
        <br />
        <br />
        <li>
          <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 12 Απριλίου, 2021 - 22:10</Typography>
          <br />
          <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
          <br />
        </li>

        <br />
        <hr />
        <br />
        <br />
        <li>
          <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 5 Απριλίου, 2021 - 22:12</Typography>
          <br />
          <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
          <br />
        </li>

        <br />
        <hr />
        <br />
        <br />
        <li>
          <Typography variant="h6" style={latestNewsStyle}>Τρίτη, 30 Μαρτίου, 2021 - 09:02</Typography>
          <br />
          <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
          <br />
        </li>


        <br />
        <hr />
        <br />
        <br />
        <li>
          <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 22 Μαρτίου, 2021 - 21:57</Typography>
          <br />
          <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση Υπουργείου Υγείας από την Πρόεδρο Εθνικής Επιτροπής Εμβολιασμών κα Μαρία Θεοδωρίδου και τον Γενικό Γραμματέα Πρωτοβάθμιας Φροντίδας Υγείας κο Μάριο Θεμιστοκλέους</b></Typography>
          <br />
        </li>

        <br />
        <hr />
        <br />
        <br />
        <li>
          <Typography variant="h6" style={latestNewsStyle}>Τρίτη, 16 Μαρτίου, 2021 - 22:58</Typography>
          <br />
          <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
          <br /> 
        </li>

        <br />
        <hr />
        <br />
        <br />
        <li>
          <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 8 Μαρτίου, 2021 - 22:16</Typography>
          <br />
          <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
          <br />
        </li>

        <br />
        <hr />
        <br />
        <br />
        <li>
          <Typography variant="h6" style={latestNewsStyle}>Δευτέρα, 1 Μαρτίου, 2021 - 22:34</Typography>
          <br />
          <Typography variant="h4" style={latestNewsStyle}><b>Ενημέρωση διαπιστευμένων συντακτών για το Εθνικό Σχέδιο εμβολιαστικής κάλυψης κατά της COVID-19, από την Πρόεδρο της Εθνικής Επιτροπής Εμβολιασμών Μαρία Θεοδωρίδου και τον Γ.Γ. Πρωτοβάθμιας Φροντίδας Υγείας Μάριο Θεμιστοκλέους</b></Typography>
          <br />
        </li>

        <br />
        <br />
        <br />
      </ul>
    </Box>
  </div>
)

export default App;