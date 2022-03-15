 //exercici 1: mostrar només els directors de les pel·lícules.Has de crear la funció getAllDirectors().
 function getAllDirectors() {
     let result = movies.map(function director(movie) {

         return movie.director;
     });
     console.table(result);

 }

 //exercici2: mostrar les pel·lícules per a un determinat director/ora. Crear una funció getPelisFromDirector().

 function getPelisFromDirector(nombreDirector){
     let result2=movies.filter(function (film) {
       return film.director === nombreDirector
     });
     return result2;
    // console.table(result2);
 }
 
 /*exercici3:Per a tenir més informació d'aquest director, es demana calcular la mitjana de les
puntuacions de les seves pel·lícules.Implementar la funció pelisAverage(), la qual rep un array de pel·lícules
i retorna la nota mitjana, amb dos decimals.*/

 function pelisAverage (nombreDirector) {
     let filmsPelisDirector= getPelisFromDirector(nombreDirector);
     let conteo= filmsPelisDirector.reduce ((conteoActual,filmsPelisDirector) => { //conteo:es una acumulacion y filmsPelisDirector es el valor que esta tomando la función.
       conteoActual[filmsPelisDirector]=(conteoActual[filmsPelisDirector]|| 0) +1;
      console.table( conteoActual);
      },{}); 
    }
 console.table(filmsPelisDirector);

 