import React, {createContext, useState, useEffect} from 'react';
import {searchHeroeGet} from './../constants';

export const HeroesContext = createContext();


const HeroesContextProvider = ({children}) => {

  const [doneFetchSearchedHeroes, setdoneFetchSearchedHeroes] = useState(false);
  const [searchedHeroes, setSearchedHeroes] = useState([]); 
  const [currentQHeroe, setCurrentQHeroe] = useState('');

  //Life Cycle
 

  //Fetchs
 
  const getSearchedHeroes = (q_heroe) => {

    fetch(searchHeroeGet(q_heroe))
      .then(res => res.json())
      .then(data => {
        setdoneFetchSearchedHeroes(true);
        setSearchedHeroes(data)
      })
      .catch(error => console.log(error));

  }

  const validateQGHeroes = (e) => {

    let q_heroes = e.target.value.toLowerCase().trim();
    if(e.type === 'keypress' && e.key === 'Enter') {
      if(q_heroes && q_heroes !== currentQHeroe) {
        setCurrentQHeroe(q_heroes);
        getSearchedHeroes(q_heroes);
      }else{
        setdoneFetchSearchedHeroes(false);
      }
    }

  }

  return (
    <HeroesContext.Provider value={{  doneFetchSearchedHeroes, searchedHeroes, validateQGHeroes}}>
      {children}
    </HeroesContext.Provider>
  )
  
}

export default HeroesContextProvider;