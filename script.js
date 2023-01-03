// TASK 1
// Create an object car with these fields: brand, color, numOfDoors. Fill those fields with values and console.log each of them separately.

const car = {
  brand: "Volkswagen",
  color: "Dark Grey",
  numOfDoors: "4",
};

console.log(car);

// patikslinimas pagal reikalavimus
console.log(car.brand);
console.log(car.color);
console.log(car.numOfDoors);


// TASK 2
// Create a function createPerson that takes first name and last name, age, and returns object with same named keys and
// its values are set to the passed arguments.

// 

// TASK 2.1
// Add a method to that object that when it's invoked it should return if that person is of legal age, legal age is 20.

/*
shorthand'as taip turėtų būti

function createPerson(firstName, lastName, age) {
  return {
    firstName,
    lastName,
    age,

    // metodas pridėtas
    isAgeLegal: () => {
      return age => 20;
    },

  }
}

console.log(createPerson("Darius", "Stasiukaitis", 36));
console.log(createPerson("Darius", "Stasiukaitis", 36).isAgeLegal());

daug skirtingų būdų atlikti šį "task'ą" --- reiks dar kartą peržiūrėt video...

*/

// Čia veikia, bet padaryti galima kitaip (plius dar yra klaida, nes lygu ženklas buvo neįrašytas)
function createPerson(personFirstName, personLastName, personAge) {
  const person = {
    firstName: personFirstName,
    lastName: personLastName,
    age: personAge,
    legalAge: false,

    // Pridėtas metodas
    isAgeLegal() {
      if (personAge >= 20) {
        person.legalAge = true;
        return true;
      }
    },
  };
  person.isAgeLegal();
  return person;
}
const person = createPerson("Darius", "Stasiukaitis", 36);

console.log(person);

// Atkelta TASK 4 -->

/* Create a function isEqual that takes two objects and returns if they are equal. Use function created in second task to 
create objects that you need to compare. Remember functions are reference type just like objects are. */

function isEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  } else {
    return false;
  }
}

console.log(
  isEqual(
    createPerson("darius", "stasiukaitis", 36),
    createPerson("darius", "stasiukaitis", 36),
  )
);

const object1 = createPerson("darius", "stasiukaitis", 36);
const object2 = object1;

console.log(isEqual(object1, object2));


// TASK 3
// Create two inputs and a button in your HTML, when button is clicked create and return an object with its key set as
// the first input value and its value is set to the second input value.

const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");
const firstBtn = document.querySelector("#first-btn");

firstBtn.addEventListener("click", createObject);

function createObject() {
  const newObject = {};
  newObject[firstInput.value] = secondInput.value;
  console.log(newObject);
  return newObject;
}

// PERŽIŪRĖTI 2023-01-03 PASKAITĄ IR PASIDOMĖT TOM arrowFunction (jeigu čia teisingai supratau...)

// TASK 4

// Iškelta užduotis prie TASK 2


// TASK 5
/*
    Create inputs, dropdowns, checkboxes and a button:
        a. Car brand (input)
        b. Car color (input)
        c. Engine (dropdown with values)
            i. 80kW
            ii. 100kW
            iii. 120kW
        d. Transmition (dropdown with values)
            i. Manual
            ii. Automatic
        e. Premium package (optional checkbox)
        d. Winter package (optional checkbox)
*/

// TASK 5.1
/*
    Create a function that gets invoked when user clicks button it will construct an car object and return it. This object will 
    hold all values that user has selected/written. Constraints:

		a. car brand, car color, engine and transmition should be in the first layer of object. ( so if I would try to read value 
            of car color I would need to traverse object as so: car.carColor )

        b. premium package and winter package should be its own separate object that is stored inside car object under 'extras' key. 
            ( so if I would try to read value of winter package I would need to traverse object as so: car.extras.winterPackage )
*/

// TASK 5.2
/*
    Create a function that will be used to display result of 5.1 on our page and in addition it should also include button 'Edit' which 
    when clicked will prefill form of 5 task with data it is editing.

	(apart 'Edit' button it should look simillar to how we implemented our forms in projects that we did where user enters information and 
    on button click we created containers that we displayed on the right side, for checkboxes display their values as boolean type)
*/

/*
Jau matau, kad ne taip vėl supratau užduotį, nes ne šone suformuoja rezultatus...
Čia kaip toje formos užduotyje turėjo būti padaryta, kai įvedamas vardas, pavardė, komentaras ir pan...
Reikės peržiūrėti style.css ir sudėlioti su flex: 1... Pan. kaip biudžeto užduotyje
*/

// Paspaudus search nenusiresetina...

// sprendimas užduoties visiškai kitoks... toks įspūdis, kad tik pasiimta iš html teisingai, visa kita..........

const carBtn = document.querySelector("#car-search");
const carBrand = document.querySelector("#car-brand");
const carColor = document.querySelector("#car-color");
const carEngine = document.querySelector("#engine");
const carTransmission = document.querySelector("#transmission");
const premiumPackage = document.querySelector("#premium");
const winterPackage = document.querySelector("#winter");
const bodyElement = document.querySelector("body");

carBtn.addEventListener("click", createCarObject);
carBtn.addEventListener("click", displayResult);

function createCarObject() {
  const car = {
    carBrand: carBrand.value,
    carColor: carColor.value,
    carEngine: carEngine.value,
    carTransmission: carTransmission.value,
    extras: {
      premiumPackage: premiumPackage.checked,
      winterPackage: winterPackage.checked,
    },
  };
  console.log(car);
  return car;
}

// Nuo čia Titas kažkaip kitaip išDisplay'ina ...

function displayResult() {
  const resultContainer = document.createElement("div");
  const resultParagraph = document.createElement("p");
  const editButton = document.createElement("button");
  resultParagraph.textContent = JSON.stringify(createCarObject());
  editButton.textContent = "Edit"; // Edit button atrodo, kad veikia ne taip (editina tik paskutinį),
  // kaip užduotyje parašyta, kad veiktų, nes neišeditina antros tarkim reikšmės....
  // Pas Titą kažkaip kitaip ten event pasiekiamas... target aš pas save nerandu

  resultContainer.append(resultParagraph, editButton);
  bodyElement.append(resultContainer);

  editButton.addEventListener("click", function () {
    resultParagraph.textContent = JSON.stringify(createCarObject());
  });
}

// const clearForm = () => {
//   car
// }

// TASK 6
/*
    Create a function validatePersonEntry which would take two arguments:
        a. person object constructed in task two
        b. expose age boolean, by default it should be false

    This function should return NEW object with these properties:
		a. firstName
		b. lastName
		c. age (only if expose age was set to true)
		d. entryAllowed ( should be return value of method that we have created in 2.1 )
*/

function validatePersonEntry(newPersonObject, exposeAge) {
  const newPerson = newPersonObject;

  if (!exposeAge) {
    delete newPerson.age;
  }

  if (newPersonObject.isAgeLegal()) {
    newPersonObject.entryAllowed = true;
  }

  return newPerson;
}

const newPerson = validatePersonEntry(
  createPerson("Darius", "Stasiukaitis", 36),
  false
);

console.log(newPerson);

// BONUS TASK
// Demonstrate closures in javascript.

function makeFunc() {
  const name = 'Closures';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

// Tarkime, sukūrus funkciją A ir jos viduje sukūrus kitą funkciją B, funkcija B už funkcijos A ribų neveiks,
// nes ji veikia tik funkcijos A viduje

// Turbūt suprantu, bet nepademostruosiu...