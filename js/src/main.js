




document.addEventListener('DOMContentLoaded', function() {


  'use strict';
  'esversion: 6';





  // ---------- INTERSECTION OBSERVER
  (function() {

    console.log(`INIT Intersection Observer`);



    // ----- Init
    // On définit le ou les éléments à surveiller
    const cible = document.getElementById('cible-observer');


    // ----- Traitement
    // On crée l'intersection oberver
    const observer = new IntersectionObserver(function(p_elements) {

      // Pour chaque élément surveillé :
      p_elements.forEach(p_elt => {
        if (p_elt.intersectionRatio > 0) {
          console.log(`${p_elt.target.id} entre`);
        } else {
          console.log(`${p_elt.target.id} sort`);
        };// if (p_elt.intersectionRatio > 0) {
      });// p_elements.forEach(p_elt => {

    });// const observer = new IntersectionObserver(function(p_element) {

    // Enfin, on "démarre" l'intersection observer
    // Dans le cas d'un querySelectorAll, il faudra parcourir le tableau (array)
    observer.observe(cible);

  })();
  // ---------- /INTERSECTION OBSERVER





});// document.addEventListener('DOMContentLoaded', function() {
