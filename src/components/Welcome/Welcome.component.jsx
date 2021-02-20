import React from 'react' 
import Grid from '@material-ui/core/Grid';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Link from '@material-ui/core/Link';
import batman from "./../../assets/images/batman.png";
  

const Welcome = () => { 

  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, newExpanded) => {  setExpanded(newExpanded ? panel : false); };

            return(
            <div>

            <Grid container spacing={3}>
            
                    <Grid item xs={6}>
                      <img src={batman} alt="logo" width="100%" height="100%" ></img> 
                    </Grid>

                    <Grid item xs={6}> 

                    <Accordion square expanded={expanded === 'panel1'} >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography  variant="h4">Welcome</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                      I hope you are very welcome to this small web project that compensates for the request for workshop number 2 of the React workshop provided by "https://escalab.academy/react.html"
                      </Typography>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion square expanded={expanded === 'panel1'} >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      
                      <Typography variant="h4">Super Heroes API Info</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography  >
                          What is this?
                          The superhero API, is a quantified and programatically accessible data source of all superheroes from both the comic universe. We've taken all the stuff and put it together in a form that is easier to consume with software. Then we made an API so you can consume it in a hassle free manner.
                          <br/><br/>

                          How can I use it?
                          The data is accessible through a REST API. Consult our documentation if you'd like to get started. Helper libraries are also provided so you can consume the API in the choice of your language.
                          Getting your Access Token
                          <br/><br/>

                          <Link href="https://www.superheroapi.com/" target = "_blank">  Super Heroes API </Link>
                          <br/><br/>



                      </Typography>
                    </AccordionDetails>
                  </Accordion> 

                  <Accordion square expanded={expanded === 'panel1'} >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography variant="h4">SuperHero API - Character IDs</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>

                      Get all SuperHeroes and Villians data from all universes under a single API.

                      <br/>

                    
                      <Link href="https://superheroapi.com/ids.html" target = "_blank">   All Super Heroes ID  </Link>


                      </Typography>
                    </AccordionDetails>
                  </Accordion>


                    </Grid>
            
            </Grid>


            </div>


            );


}

export default Welcome;