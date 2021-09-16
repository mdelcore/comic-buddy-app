// The Superhero Entry
class SuperheroEntry {
  constructor(superheroName, superheroUniverse, superheroPower) {
    this.superheroName = superheroName;
    this.superheroUniverse = superheroUniverse;
    this.superheroPower = superheroPower;

  }
}

// The Superhero List Class
class SuperheroList {
  // Add Superhero Function
  addSuperhero(entry) {
    const listData = document.querySelector('.superhero-list-data');
    const listContainer = document.createElement('ul');
    listContainer.setAttribute('id', 'list');

    listContainer.innerHTML += `
    <li>${entry.superheroName}</li>
    <li>${entry.superheroUniverse}</li>
    <li>${entry.superheroPower}</li>
    <i class="fas fa-trash"></i>
    `;

    listData.appendChild(listContainer);
  }

  // Clear Superhero Input Fields Function
  clearSuperHeroInputs() {
    [
      document.querySelector('#name').value,
      document.querySelector('#universe').value,
      document.querySelector('#power').value,
    ] = ['', '', ''];
  }

  // Validation Error Function
  validationError() {
    document.querySelector('.validate-error').classList.add('show-validation');
    setTimeout(() => {
      document
        .querySelector('.validate-error')
        .classList.remove ('show-validation');
    }, 2500);
  }

 // Validation Success Function
  validationSuccess() {
    document.querySelector('.validate-success').classList.add('show-validation');
    setTimeout(() => {
      document
        .querySelector('.validate-success')
        .classList.remove ('show-validation');
    }, 2500);
  }
}


// ---------------------- Events ---------------------------

// Form Submission Event Listener
const form = document.querySelector('.superhero-form');
form.addEventListener('submit', function(e) {
  e.preventDefault();

  let [superheroName, superheroUniverse, superheroPower] = [
    document.querySelector('#name').value,
    document.querySelector('#universe').value,
    document.querySelector('#power').value,
  ];

  // Instantiating the superheroEntry Class
  const entry = new SuperheroEntry(superheroName, superheroUniverse, superheroPower);

  // Instantiating the superheroList Class
  const list = new SuperheroList();

  // Validate the form in one or more of the input fields are empty
  if(
    superheroName === '' ||
    superheroUniverse === '' ||
    superheroPower === ''
    ) {
      list.validationError();
  } else {
      list.addSuperhero(entry);
      list.clearSuperHeroInputs();
      list.validationSuccess();
  };

  console.log(list);
});

// Deleting Listed SuperHeros
const listData = document.querySelector('.superhero-list-data');
listData.addEventListener('click', function(e) {
  if(e.target.className === 'fas fa-trash') {
    const trash = e.target.parentNode;
    trash.remove();
  }
});