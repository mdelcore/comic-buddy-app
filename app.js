// The Superhero Entry
class SuperheroEntry {
  constructor(superheroName, superheroUniverse, superheroPower) {
    this.superheroName = superheroName;
    this.superheroUniverse = superheroUniverse;
    this.superheroPower = superheroPower;

  }
}

// The Superhero List Class
class SuperheroList {}


// ---------------------- Events ---------------------------

const form = document.querySelector('.superhero-form');
form.addEventListener('submit', function(e) {
  e.preventDefault()

  let [superheroName, superheroUniverse, superheroPower] = [
    document.querySelector('#name').value,
    document.querySelector('#universe').value,
    document.querySelector('#power').value,
  ]
})