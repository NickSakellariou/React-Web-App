import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    textAlign: 'left',
    backgroundColor:'#e6e6e6',
  },
}));

export default function FrequentlyAskedQuestions() {
    const classes = useStyles();

    const frequentlyAskedQuestionsStyle = {
        color: '#000080',
        textAlign: 'center'
    };

  return (
    <div className={classes.root}>
        <br />
        <Typography variant="h3" style={frequentlyAskedQuestionsStyle}><b>Συχνές ερωτήσεις</b></Typography>
        <br /> 
        <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h5"><b>1. Είμαι εγγεγραμμένος στην άυλη συνταγογράφηση και έλαβα SMS με ραντεβού το οποίο με εξυπηρετεί. Τι πρέπει να κάνω;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Στα SMS που λάβατε αναφέρεται ένας κωδικός εμβολιασμού. Για να επιβεβαιώσετε το ραντεβού πρέπει να στείλετε με τη σειρά σας ένα SMS στο 13034 γράφοντας μόνο αυτόν τον κωδικό. Τότε θα λάβετε νέο SMS που θα γράφει ότι η διαδικασία ολοκληρώθηκε επιτυχώς. Η προ-κράτηση ραντεβού πρέπει να επιβεβαιωθεί μέσα σε 72 ώρες, αλλιώς παύει να ισχύει.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography variant="h5"><b>2. Είμαι εγγεγραμμένος στην άυλη συνταγογράφηση και έλαβα SMS με ραντεβού το οποίο δεν με εξυπηρετεί. Τι πρέπει να κάνω;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Μπορείτε να αλλάξετε το ραντεβού που σας προτείνεται είτε στο emvolio.gov.gr, είτε σε φαρμακείο ή ΚΕΠ, με την ίδια διαδικασία που περιγράφεται στην αμέσως επόμενη ερώτηση, δηλαδή με τη διαδικασία που ακολουθούν όσοι δεν ήταν εγγεγραμμένοι στην άυλη συνταγογράφηση.
Κατ' εξαίρεση, για τις ηλικιακές ομάδες 30-49 δεν ισχύει η απευθείας διάθεση ραντεβού μέσω της άυλης συνταγογράφησης.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography variant="h5"><b>3. Ανήκω στην πληθυσμιακή ομάδα που εμβολιάζεται αυτή την περίοδο, δεν είμαι εγγεγραμμένος στην άυλη συνταγογράφηση και επιθυμώ να κλείσω ραντεβού εμβολιασμού. Τι πρέπει να κάνω;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Έχετε δύο τρόπους: είτε να μπείτε στο emvolio.gov.gr, είτε να απευθυνθείτε σε φαρμακείο ή ΚΕΠ.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <Typography variant="h5"><b>4. Ανήκω στην πληθυσμιακή ομάδα που εμβολιάζεται αυτή την περίοδο, αλλά δεν είναι εύκολο να μεταβώ σε ΚΕΠ για να κλείσω ραντεβού. Μπορεί να το κάνει για εμένα κάποιος συγγενής μου;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Ναι, γίνεται. Μάλιστα, μπορεί να γίνει και χωρίς εξουσιοδότηση, αρκεί το πρόσωπο που θα κάνει τη διαδικασία για εσάς να υπογράψει υπεύθυνη δήλωση με το ακόλουθο περιεχόμενο:

«Εκπροσωπώ τον/ την (ονοματεπώνυμο)   με   (αρ. ταυτότητας ή διαβατηρίου) και (ΑΜΚΑ) προκειμένου να προγραμματίσω το ραντεβού του / της κατά της ασθένειας covid19».

Το πρόσωπο που θα προσέλθει πρέπει να έχει μαζί του την ταυτότητά του, ενώ καλό είναι να έχει και ένα απλό αντίγραφο της ταυτότητάς του προσώπου για το οποίο ενεργεί, σε περίπτωση που χρειαστεί κάποιο επιπλέον στοιχείο για τον εντοπισμό του στα μητρώα.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <Typography variant="h5"><b>5. Ανήκω στην πληθυσμιακή ομάδα που εμβολιάζεται αυτή την περίοδο, εγγεγραμμένος στην άυλη συνταγογράφηση και δεν έλαβα SMS. Τι πρέπει να κάνω;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Αυτό που πρέπει να κάνετε είναι να ελέγξετε ότι έχετε επιλεγεί για την τρέχουσα φάση του εμβολιασμού. Αυτό γίνεται με τρεις τρόπους: είτε στο φαρμακείο ή το ΚΕΠ σας (με ταυτότητα και ΑΜΚΑ), είτε στο emvolio.gov.gr (με ΑΜΚΑ και ΑΦΜ), είτε στέλνοντας SMS στο 13034 με τον ΑΜΚΑ σας. Αν πράγματι επρόκειτο για ζήτημα αριθμού τηλεφώνου, μπορείτε να ακολουθήσετε τη διαδικασία κλεισίματος ραντεβού που περιγράφεται στην προ-προηγούμενη ερώτηση.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6a-content"
          id="panel6a-header"
        >
          <Typography variant="h5"><b>6. Αν και ανήκω στην πληθυσμιακή ομάδα που εμβολιάζεται αυτή την περίοδο, έκανα έλεγχο προτεραιότητας και με εμφανίζει μη επιλεγμένο για εμβολιασμό. Τι πρέπει να κάνω;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Θα χρειαστεί να μπείτε στο emvolio.gov.gr/aitisi και να συμπληρώσετε τη φόρμα που θα εμφανιστεί – δεν θα σας ζητηθούν κωδικοί Taxisnet. Η αίτησή σας θα εξεταστεί από την αρμόδια Επιτροπή και, εφόσον πράγματι είχατε δικαίωμα να εμβολιαστείτε την τρέχουσα περίοδο, θα ενημερωθείτε για το πώς θα κλείσετε ραντεβού. Η διαδικασία υποβολής αίτησης μπορεί να γίνει και στα ΚΕΠ. Δώστε ιδιαίτερη προσοχή στα στοιχεία επικοινωνίας που θα δηλώσετε, ώστε να λάβετε την απάντησή σας όσο το δυνατόν γρηγορότερα.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7a-content"
          id="panel7a-header"
        >
          <Typography variant="h5"><b>7. Ανήκω στην πληθυσμιακή ομάδα που εμβολιάζεται αυτή την περίοδο και μέχρι σήμερα δεν είχα εγγραφεί στην άυλη συνταγογράφηση. Αν εγγραφώ τώρα, θα λάβω SMS;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Δυστυχώς, η διαδικασία της προ-κράτησης για κάθε πληθυσμιακή ομάδα γίνεται μία μόνο φορά, πριν ανοίξουν τα ραντεβού για τη συγκεκριμένη ομάδα. Συνεπώς, αν είστε στην πληθυσμιακή ομάδα που εμβολιάζεται αυτή την περίοδο, η άυλη συνταγογράφηση μπορεί να σας εξυπηρετήσει για τις συνταγές και τα παραπεμπτικά σας, αλλά όχι για να κλείσετε ραντεβού εμβολιασμού. Ως εκ τούτου, θα πρέπει να ακολουθήσετε τη διαδικασία για τους μη εγγεγραμμένους.

Όσοι δεν ανήκετε στην πληθυσμιακή ομάδα που εμβολιάζεται αυτή την περίοδο μπορείτε ακόμα να εγγράφεστε στην άυλη συνταγογράφηση και, όταν κληθεί η δική σας πληθυσμιακή ομάδα, θα λάβετε κανονικά SMS με την προ-κράτηση ραντεβού.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8a-content"
          id="panel8a-header"
        >
          <Typography variant="h5"><b>8. Έχω κλείσει το ραντεβού μου, αλλά θέλω να το αλλάξω. Τι πρέπει να κάνω;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Τα ραντεβού αλλάζουν όπως κλείνονται: είτε στο emvolio.gov.gr, είτε σε φαρμακείο ή ΚΕΠ, με τον ίδιο τρόπο που περιγράφεται πιο πριν. Πρέπει να γνωρίζετε ότι αλλαγή ραντεβού μπορεί να γίνει μόνο δυο φορές και μόνο εφόσον το ζητήσετε τουλάχιστον τρεις ημέρες πριν από το αρχικά προγραμματισμένο ραντεβού.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9a-content"
          id="panel9a-header"
        >
          <Typography variant="h5"><b>9. Έχω κλείσει το ραντεβού μου, αλλά δεν θυμάμαι πότε είναι. Τι πρέπει να κάνω;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Αρχικά, έχει προγραμματίσει να γίνει υπενθύμιση του ραντεβού σας τρεις φορές, με SMS στον αριθμό που μας έχετε δηλώσει: το πρώτο τρεις ημέρες πριν από το ραντεβού, το δεύτερο την παραμονή του ραντεβού και το τρίτο στις 7 πμ την ημέρα του ραντεβού.

Αν, παρ’ όλα αυτά, επιθυμείτε να αναζητήσετε το ραντεβού σας οποτεδήποτε, μπορείτε είτε να στείλετε SMS στο 13034 γράφοντας τον ΑΜΚΑ και το επώνυμό σας, είτε να μπείτε στο emvolio.gov.gr (αναζήτηση με ΑΜΚΑ και ΑΦΜ), είτε να απευθυνθείτε σε φαρμακείο ή ΚΕΠ.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10a-content"
          id="panel10a-header"
        >
          <Typography variant="h5"><b>10. Τι χρειάζεται να έχω μαζί μου όταν προσέλθω για να εμβολιαστώ;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Πρέπει να έχετε μαζί σας την ταυτότητά σας και πρόχειρο τον ΑΜΚΑ σας και τον κωδικό εμβολιασμού. Η εκτύπωση των στοιχείων του εμβολιασμού δεν είναι υποχρεωτική.
          Για την επιτάχυνση της διαδικασίας, συνιστάται να έχετε διαθέσιμο – είτε εκτυπωμένο, είτε στο κινητό σας – τον κωδικό QR που εμφανίζεται στο emvolio.gov.gr και σε όλα τα έγγραφα που εκτυπώνουν τα φαρμακεία και τα ΚΕΠ.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11a-content"
          id="panel11a-header"
        >
          <Typography variant="h5"><b>11. Δεν μπόρεσα να προσέλθω στο ραντεβού που είχα κλείσει. Τι πρέπει να κάνω;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Θα μπορέσετε να κλείσετε νέο ραντεβού με οποιονδήποτε από τους τρόπους που περιγράφονται παραπάνω, όμως θα πρέπει να περάσει ένας μήνας από την ημέρα του ραντεβού που ακυρώθηκε.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel12a-content"
          id="panel12a-header"
        >
          <Typography variant="h5"><b>12. Θα επιβαρυνθώ με κάποιο κόστος για κάποιο στάδιο από τη διαδικασία;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Όχι. Όλη η διαδικασία είναι απολύτως δωρεάν για τους πολίτες – τόσο η επίσκεψη στα φαρμακεία, όσο και η αποστολή και λήψη SMS.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel13a-content"
          id="panel13a-header"
        >
          <Typography variant="h5"><b>13. Με ποια διαδικασία θα πραγματοποιηθεί ο εμβολιασμός του πληθυσμού στη χώρα μας;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Οι εμβολιασμοί ομάδων του γενικού πληθυσμού ξεκινούν τον Ιανουάριο του 2021. Για την ομαλή εφαρμογή αυτής της διαδικασίας ακολουθούνται τα παρακάτω βήματα:
          <ul>
                <li>Σύμφωνα με τα κριτήρια της Εθνικής Επιτροπής Εμβολιασμών, θα προκύψει από τη Γενική Γραμματεία Πληροφοριακών Συστημάτων Δημόσιας Διοίκησης μία ενιαία λίστα δικαιούχων του εμβολίου. Οι δικαιούχοι αυτοί προ-κατανέμονται σε συγκεκριμένα εμβολιαστικά κέντρα με βάση τη φορολογική τους διεύθυνση, η οποία είναι η πλέον επικαιροποιημένη και τα ραντεβού τους προ-κρατούνται σε συγκεκριμένες μέρες και ώρες. Επομένως, όλα τα ραντεβού θα προκύψουν πριν ακόμα αρχίσει ο εμβολιασμός και θα οριστικοποιούνται μόνο όταν ο δικαιούχος επιβεβαιώσει την παρουσία του.
Ο πολίτης, εφόσον είναι εγγεγραμμένος στην άυλη συνταγογράφηση, λαμβάνει αυτόματα ένα sms/email με το προκαθορισμένο σημείο ραντεβού, σε συγκεκριμένη ημέρα και ώρα. Μαζί με τις πληροφορίες του ραντεβού λαμβάνει ειδικό κωδικό επαλήθευσης και σχετικό link, στο οποίο μπορεί να επιβεβαιώσει και να οριστικοποιήσει το ραντεβού του.</li>
                <li>Οι πολίτες που δεν είναι εγγεγραμμένοι στην αυλή συνταγογράφηση μπορούν να κλείσουν ραντεβού διαδικτυακά, εισάγοντας τον ΑΜΚΑ τους στη σχετική πλατφόρμα, (emvolio.gov.gr), όπου το σύστημα τους ενημερώνει αυτόματα αν ανήκουν στις ομάδες που εμβολιάζονται τη δεδομένη χρονική στιγμή. Εφόσον ανήκουν στις ομάδες προτεραιότητας, μπορούν να κλείσουν το ραντεβού εισάγοντας τους κωδικούς taxisnet.</li>
                <li>Επιπλέον, όσοι δεν είναι εξοικειωμένοι με τη χρήση της ψηφιακής τεχνολογίας μπορούν να κλείνουν ραντεβού σε φαρμακείο ή σε ΚΕΠ.</li>
          </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel14a-content"
          id="panel14a-header"
        >
          <Typography variant="h5"><b>14. Πόσο αποτελεσματικό είναι το εμβόλιο για την COVID-19;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Αφού λάβουν και τις δύο δόσεις του εμβολίου, οι περισσότεροι άνθρωποι θα είναι προστατευμένοι. Χρειάζεται τουλάχιστον μία εβδομάδα μετά την χορήγηση της 2ης δόσης για να αναπτυχθεί ανοσία, η οποία, σύμφωνα με τα τρέχοντα επιστημονικά δεδομένα, εκτιμάται ότι θα διαρκεί για 6 έως 8 μήνες. Υπάρχει μια μικρή πιθανότητα να κολλήσει κάποιος ακόμη και αν έχει λάβει το εμβόλιο. Αυτό σημαίνει ότι είναι σημαντικό να συνεχίσει να τηρεί τα μέτρα ασφαλείας, μέχρι να εμβολιαστεί μεγαλύτερο μέρος του πληθυσμού.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel15a-content"
          id="panel15a-header"
        >
          <Typography variant="h5"><b>15. Ποιος καλύπτει το κόστος του εμβολιασμού;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Όλοι οι ευρωπαίοι πολίτες θα εμβολιαστούν δωρεάν. Το κόστος του εμβολιασμού στη χώρα μας το καλύπτουν πλήρως η Ευρωπαϊκή Ένωση και το Ελληνικό Κράτος.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel16a-content"
          id="panel16a-header"
        >
          <Typography variant="h5"><b>16. Ποιες ομάδες του πληθυσμού θα έχουν προτεραιότητα στον εμβολιασμό;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Το Εθνικό Σύστημα Υγείας προσφέρει αρχικά το εμβόλιο για την COVID-19 στα άτομα που φροντίζουν την υγεία του πληθυσμού και σε αυτούς που κινδυνεύουν περισσότερο. Οι υγειονομικοί είναι η πρώτη ομάδα που θα εμβολιαστεί ώστε να προστατευτούν οι ίδιοι αλλά και να είναι σε θέση να φροντίσουν την υγεία του πληθυσμού. Ο εμβολιασμός έχει ήδη ξεκινήσει. Η σειρά με την οποία θα πραγματοποιηθεί το εμβόλιο στον πληθυσμό θα βασίζεται στις οδηγίες της Εθνικής Επιτροπής Εμβολιασμού.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel17a-content"
          id="panel17a-header"
        >
          <Typography variant="h5"><b>17. Αφού εμβολιαστώ θα μπορώ να ξαναγυρίσω στον προηγούμενο τρόπο ζωής μου;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Υπολογίζεται ότι θα πρέπει πρώτα να εμβολιαστεί ένα μεγάλο ποσοστό του πληθυσμού (περίπου 7 στους 10), μέχρι να αναπτυχθεί ανοσία στην κοινότητα. Επομένως, θα πρέπει να συνεχίσουμε να τηρούμε με την ίδια συνέπεια τα μέτρα προστασίας, μέχρι να εμβολιαστεί ένα μεγάλο μέρος του πληθυσμού.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel18a-content"
          id="panel18a-header"
        >
          <Typography variant="h5"><b>18. Πόσο ασφαλή είναι τα εμβόλια που θα κυκλοφορήσουν;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Μέχρι στιγμής, εκατοντάδες χιλιάδες άνθρωποι έχουν λάβει το εμβόλιο κατά της COVID-19 χωρίς να έχουν αναφερθεί σοβαρά ανεπιθύμητα συμπτώματα, πέρα από τα συνήθη που παρατηρούνται σε κάποια άτομα μετά από κάποιον εμβολιασμό. Τα εμβόλια που θα χρησιμοποιηθούν στη χώρα μας έχουν πάρει έγκριση για την ασφάλεια, την ποιότητα και την αποτελεσματικότητα τους από τους αρμόδιους διεθνείς οργανισμούς, τον ΕΜΑ (European Medicines Agency) και τον FDA (Food and Drug Administration) και έχουν ελεγχθεί από τον ΠΟΥ (Παγκόσμιος Οργανισμός Υγείας). Όλα τα εμβόλια θα έχουν υποβληθεί σε κλινικές μελέτες για την ανοσογονικότητα και την ασφάλεια τους και θα έχουν ελεγχθεί σε πολλά διαδοχικά στάδια (μελέτες φάσης 1 – έως 3). Σύμφωνα με τις προδιαγραφές, για να δοθεί άδεια κυκλοφορίας σε ένα εμβόλιο πρέπει να πάρουν μέρος τουλάχιστον 30.000 άτομα στις μελέτες φάσης 3. Αυτή η προϋπόθεση θα τηρηθεί και για τα εμβόλια αυτά. Να σημειωθεί ότι η παρακολούθηση για τυχόν σπάνιες ανεπιθύμητες ενέργειες συνεχίζεται διεθνώς και μετά την έναρξη της χορήγησης τους.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel19a-content"
          id="panel19a-header"
        >
          <Typography variant="h5"><b>19. Προκαλούν τα εμβόλια ανεπιθύμητες ενέργειες;</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="h6">
          Οι όποιες ανεπιθύμητες ενέργειες μπορεί να προκληθούν είναι ήπιες και παροδικές, όπως πόνος στο χέρι στο σημείο της ένεσης, πυρετός, αδιαθεσία, μυαλγίες και πονοκέφαλος. Όλα αυτά τα συμπτώματα υποχωρούν γρήγορα, συνήθως μέσα σε ένα εικοσιτετράωρο. Η λήψη αντιπυρετικών και αντιφλεγμονωδών φαρμάκων βοηθά στην αντιμετώπισή τους. Είναι πολύ σπάνιο για οποιονδήποτε να παρουσιάσει κάποια σοβαρή αλλεργική αντίδραση στο εμβόλιο (αναφυλαξία). Εάν συμβεί αυτό, συνήθως εκδηλώνεται μέσα σε λίγα λεπτά και το προσωπικό που χορηγεί το εμβόλιο είναι εκπαιδευμένο να αντιμετωπίσει τυχόν αλλεργικές αντιδράσεις άμεσα.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br />
      <br />
      <br />
    </div>
  );
}
