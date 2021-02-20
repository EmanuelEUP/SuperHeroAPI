import React, { Fragment } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'; 
import "./Heroe.styles.scss";


const Heroe = ({ heroes, listofheroes }) => {

  return (
    <div >
{

heroes == undefined ?


<h2  style={{ color:"white"}}>No Result Found</h2>
:
(



  <Grid container spacing={3}>
 
  <Grid item xs={6}>

    <img src={heroes.image.url} height="650px" width="100%"></img>

  </Grid>

  <Grid item xs={6}>


<Card   variant="outlined">
  <CardContent>

    <Typography   variant="button"  gutterBottom>
    {heroes.id} -  {heroes.biography["full-name"] } 
    </Typography>

    <Typography variant="h5" component="h2">  {heroes.name} </Typography>
    <Typography  variant="h6" component="h6" >  POWERSTATS </Typography>

    <Typography variant="button"  component="p">
    intelligence : <span>{heroes.powerstats.intelligence}</span><br/>
    strength : <span>{heroes.powerstats.strength}</span><br/>
    speed : <span>{heroes.powerstats.speed}</span><br/>
    durability : <span>{heroes.powerstats.durability}</span><br/>
    power : <span>{heroes.powerstats.power}</span><br/>
    combat : <span>{heroes.powerstats.combat}</span><br/>
    </Typography>

    <Typography   variant="h6" component="h6" >  WORK</Typography>

    <Typography variant="button"  component="p">
    intelligence : <span>{heroes.work.occupation}</span><br/>
    strength : <span>{heroes.work.base}</span><br/> 
    race : <span> {heroes.appearance.race}</span><br/> 
   
    </Typography>

    <Typography  variant="h6" component="h6" >  CONNECTIONS </Typography>

    <Typography variant="button"  component="p">
    relatives : <span>{heroes.connections.relatives}</span><br/>
    </Typography>    

    <Typography  variant="h6" component="h6" >  BIOGRAPHY </Typography>

<Typography variant="button"  component="p"> 

alignment : <span>{heroes.biography.alignment}</span><br/>
alter-egos : <span>{heroes.biography["alter-egos"]}</span><br/>
first-appearance : <span>{heroes.biography["first-appearance"]}</span><br/>
place-of-birth : <span>{heroes.biography["Scarsdale, Arizona"]}</span><br/>
publisher : <span>{heroes.biography.publisher}</span><br/>
 
</Typography>    


  </CardContent>
<CardActions>


</CardActions>

</Card>


  </Grid>
  
</Grid>


)


}


    </div>    



    
    
  );



};

export default Heroe;
