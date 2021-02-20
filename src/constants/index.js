
// CORS
const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';

//Base URL
const base_url_heroes = "https://superheroapi.com/api.php/";
const access_token = "10225968587621225";


//Getting the date to get the popular, upcoming and recent games

export const searchHeroeGet = heroes_id => `${ cors_anywhere }${ base_url_heroes }${ access_token }/${ heroes_id }`;
export const idHeroesGet = heroes_id => `${ cors_anywhere }${ base_url_heroes }${ access_token }/${ heroes_id }`;
 

