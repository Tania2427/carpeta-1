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

 //exercici3:

 /*function moviesAverage (director) {
     let result2= getPelisFromDirector(director);
     let scoreAverage=
     console.table(result2);
 }*/