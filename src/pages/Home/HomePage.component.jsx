import React, { Fragment, useContext } from "react";
import { HeroesContext } from "./../../context/HeroesContext";
import SearchBar from "./../../components/Heroes/SearchBar/SearchBar.component";
import Heroe from "./../../components/Heroes/Heroe/Heroe.component";
import Welcome from "./../../components/Welcome/Welcome.component"; 
import Message from "./../../components/Common/Message/Message.component";
import Grid from "@material-ui/core/Grid";
import "./HomePage.styles.scss";


const HomePage = () => {

  const {
    doneFetchSearchedHeroes,
    searchedHeroes,
    validateQGHeroes,
  } = useContext(HeroesContext);

  return (

    <Fragment>

      <SearchBar validateQGHeroes={validateQGHeroes} />

      <Grid container spacing={3} style={{marginTop: '1rem'}} >

        {
        
        !doneFetchSearchedHeroes ? ( 
          
         (<Welcome/>)  
          
          ) : searchedHeroes.response === "success" ? ( <Heroe heroes={searchedHeroes} />) 
            : 
            (<Message text="No results found" />)
        }

      </Grid>

    </Fragment>

  );
};

export default HomePage;
