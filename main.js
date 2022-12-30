// TASK 1
// Create an object car with these fields: brand, color, numOfDoors. Fill those fields with values and console.log each of them separately.

const car = {
  brand: "bmw",
  color: "black",
  numOfDoors: "4",
};

console.log(car);

// TASK 2
// Create a function createPerson that takes first name and last name, age, and returns object with same named keys and its values are set to the passed arguments.

function createPerson(userFirstName, userLastName, userAge) {
  const person = {
    firstName: userFirstName,
    lastName: userLastName,
    age: userAge,
    legalAge: false,
    isAgeLegal() {
      if (userAge > 20) {
        person.legalAge = true;
        return true;
      }
    },
  };
  person.isAgeLegal();
  return person;
}
const person = createPerson("Mantas", "Vilimas", 30);

console.log(person);

// TASK 2.1
// Add a method to that object that when it's invoked it should return if that person is of legal age, legal age is 20.

// TASK 3
// Create two inputs and a button in your HTML, when button is clicked create and return an object with its key set as the first input value and its value is set to the second input value.
const firstBtn = document.querySelector("#first-btn");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");

firstBtn.addEventListener("click", createObject);

function createObject() {
  const newObject = {};
  newObject[firstInput.value] = secondInput.value;
  console.log(newObject);
  return newObject;
}

// TASK 4
// Create a function isEqual that takes two objects and returns if they are equal. Use function created in second task to create objects that you need to compare. Remember functions are reference type just like objects are.

function isEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  } else {
    return false;
  }
}

console.log(
  isEqual(
    createPerson("mantas", "vilimas", 30),
    createPerson("mantas", "vilimas", 30)
  )
); //! nelygios nes funkcija kuria nauja objekta, nors ir paramertai tie patys

const object1 = createPerson("mantas", "vilimas", 30);
const object2 = object1;

console.log(isEqual(object1, object2)); //! lygios nes vienas objektas nurodo i kito objekto vieta

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
    Create a function that gets invoked when user clicks button it will construct an car object and return it. This object will hold all values that user has selected/written. Constraints: 
		a. car brand, car color, engine and transmition should be in the first layer of object. ( so if I would try to read value of car color I would need to traverse object as so: car.carColor )
        b. premium package and winter package should be its own separate object that is stored inside car object under 'extras' key. ( so if I would try to read value of winter package I would need to traverse object as so: car.extras.winterPackage )
*/

// TASK 5.2
/*
    Create a function that will be used to display result of 5.1 on our page and in addition it should also include button 'Edit' which when clicked will prefill form of 5 task with data it is editing.
	(apart 'Edit' button it should look simillar to how we implemented our forms in projects that we did where user enters information and on button click we created containers that we displayed on the right side, for checkboxes display their values as boolean type)
*/

const carBtn = document.querySelector("#car-search");
const carBrand = document.querySelector("#car-brand");
const carColor = document.querySelector("#car-color");
const carEngine = document.querySelector("#engine");
const carGearbox = document.querySelector("#transmission");
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
    carGearbox: carGearbox.value,
    extras: {
      premiumPackage: premiumPackage.checked,
      winterPackage: winterPackage.checked,
    },
  };
  console.log(car);
  return car;
}

function displayResult() {
  const resultContainer = document.createElement("div");
  const resultParagraph = document.createElement("p");
  const editButton = document.createElement("button");
  resultParagraph.textContent = JSON.stringify(createCarObject());
  editButton.textContent = "Edit";

  resultContainer.append(resultParagraph, editButton);
  bodyElement.append(resultContainer);

  editButton.addEventListener("click", function () {
    resultParagraph.textContent = JSON.stringify(createCarObject());
  });
}

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

function validatePersonEntry(newPersonObject, ageExpose) {
  const newPerson = newPersonObject;

  if (!ageExpose) {
    delete newPerson.age;
  }

  if (newPersonObject.isAgeLegal()) {
    newPersonObject.entryAllowed = true;
  }

  return newPerson;
}

const newPerson = validatePersonEntry(
  createPerson("Mantas", "Vilimas", 30),
  false
);

console.log(newPerson);

// BONUS TASK
// Demonstrate closures in javascript.

function demoFunction() {
  const newButton = document.createElement("button");
  newButton.textContent = "New created Button";
  bodyElement.append(newButton);

  function colsureFunctionAddColor() {
    newButton.style.backgroundColor = "red";
    function addPadding() {
      newButton.style.padding = "10px";
    }
    addPadding();
  }

  colsureFunctionAddColor();
}

demoFunction();

// colsureFunctionAddColor(); //! Neveiks uz demoFunction() ribu , nes ji veikia tik toje funkcijoje, kurioje buvo sukurta
// addPadding() //! neveiks jei panaudosiu demoFunction() viduje, nes ji veikia tik colsureFunctionAddColor() viduje
