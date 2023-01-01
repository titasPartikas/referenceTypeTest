// TASK 1
// Create an object car with these fields: brand, color, numOfDoors. Fill those fields with values and console.log each of them separately.
const car1 = {
  brand: "audi",
  color: "black",
  numOfDoors: 4,
};

console.log(car1.brand);
console.log(car1.color);
console.log(car1.numOfDoors);

// TASK 2
// Create a function createPerson that takes first name and last name, age, and returns object with same named keys and its values are set to the passed arguments.

// TASK 2.1
// Add a method to that object that when it's invoked it should return if that person is of legal age, legal age is 20.

function createPerson(firstName, lastName, age) {
  const person = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    isAgeLegal() {
      if (person.age >= 20) {
        return true;
      } else {
        return false;
      }
    },
  };
  return person;
}

createPerson("Jonas", "Jonaitis", 30);

// TASK 3
// Create two inputs and a button in your HTML, when button is clicked create and return an object with its key set as the first input value and its value is set to the second input value.

const elements = {
  keyInput: document.querySelector("#key"),
  valueInput: document.querySelector("#value"),
  button: document.querySelector("#create-button"),
};

elements.button.addEventListener("click", createObject);

function createObject() {
  const key = elements.keyInput.value;
  const value = elements.valueInput.value;

  const object = {};
  object[key] = value;

  return object;
}

// TASK 4
// Create a function isEqual that takes two objects and returns if they are equal. Use function created in second task to create objects that you need to compare. Remember functions are reference type just like objects are.
let obj1 = createPerson("Jonas", "Jonaitis", 30);
let obj2 = createPerson("Jonas", "Jonaitis", 30);

function isEqual(object1, object2) {
  if (object1 === object2) {
    return true;
  } else {
    return false;
  }
}
console.log("isEqual: " + isEqual(obj1, obj2));

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
    Create a function that gets invoked when user clicks button it will construct a car object and return it. This object will hold all values that user has selected/written. Constraints: 
		a. car brand, car color, engine and transmition should be in the first layer of object. ( so if I would try to read value of car color I would need to traverse object as so: car.carColor )
        b. premium package and winter package should be its own separate object that is stored inside car object under 'extras' key. ( so if I would try to read value of winter package I would need to traverse object as so: car.extras.winterPackage )
*/

const elements2 = {
  inputs: {
    carBrandInput: document.querySelector("#car-brand"),
    carColorInput: document.querySelector("#car-color"),
    engineSelect: document.querySelector("#engine-power"),
    transmitionSelect: document.querySelector("#transmition"),
    premiumCheck: document.querySelector("#premium-package"),
    winterCheck: document.querySelector("#winter-package"),
  },
  confirmButton: document.querySelector("#confirm-button"),
  editButton: document.querySelector("#edit-button"),

  displayContainer: document.querySelector(".display-container"),
  displayer: document.querySelector("#displayer"),
};

elements2.confirmButton.addEventListener("click", confirmAction);

function confirmAction() {
  const carObj = createCar();
  displayContent(carObj);
  clearInputs(elements2.inputs);
}

function createCar() {
  const car = {
    brand: elements2.inputs.carBrandInput.value,
    color: elements2.inputs.carColorInput.value,
    engine: elements2.inputs.engineSelect.value,
    transmition: elements2.inputs.transmitionSelect.value,
    extras: {
      premiumPackage: elements2.inputs.premiumCheck.checked,
      winterPackage: elements2.inputs.winterCheck.checked,
    },
  };
  return car;
}

// TASK 5.2
/*
    Create a function that will be used to display result of 5.1 on our page and in addition it should also include button 'Edit' which when clicked will prefill form of 5 task with data it is editing.
	(apart 'Edit' button it should look simillar to how we implemented our forms in projects that we did where user enters information and on button click we created containers that we displayed on the right side, for checkboxes display their values as boolean type)
*/
elements2.editButton.addEventListener("click", editAction);

function displayContent(car) {
  elements2.displayContainer.classList.remove("hidden");
  elements2.displayer.textContent = JSON.stringify(car);
}

function clearInputs(inputs) {
  inputs.carBrandInput.value = "";
  inputs.carColorInput.value = "";
  inputs.engineSelect.value = "choose-engine";
  inputs.transmitionSelect.value = "choose-transmition";
  inputs.premiumCheck.checked = false;
  inputs.winterCheck.checked = false;
}

function editAction() {
  const parse = parseCar();
  fillInputs(elements2.inputs, parse);
  elements2.displayer.textContent = "";
  elements2.displayContainer.classList.add("hidden");
}

function parseCar() {
  const text = elements2.displayer.textContent;
  const carObject = JSON.parse(text);
  return carObject;
}

function fillInputs(inputs, car) {
  inputs.carBrandInput.value = car.brand;
  inputs.carColorInput.value = car.color;
  inputs.engineSelect.value = car.engine;
  inputs.transmitionSelect.value = car.transmition;
  inputs.premiumCheck.checked = car.extras.premiumPackage;
  inputs.winterCheck.checked = car.extras.winterPackage;
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

// BONUS TASK
// Demonstrate closures in javascript.
const person = createPerson("Jonas", "Jonaitis", 30);

const newPerson = validatePersonEntry(person, true);
console.log(newPerson);

function validatePersonEntry(personObj, exposeAge = false) {
  const newPersonObj = {};
  newPersonObj.firstName = personObj.firstName;
  newPersonObj.lastName = personObj.lastName;

  if (exposeAge) {
    newPersonObj.age = personObj.age;
  }

  newPersonObj.entryAllowed = personObj.isAgeLegal();

  return newPersonObj;
}
