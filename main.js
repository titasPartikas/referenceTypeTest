// TASK 1
// Create an object car with these fields: brand, color, numOfDoors. Fill those fields with values and console.log each of them separately.

const car = {
  brand: "Toyota",
  color: "white",
  numOfDoors: "4",
};
console.log(car.brand);
console.log(car.color);
console.log(car.numOfDoors);

// TASK 2
// Create a function createPerson that takes first name and last name, age, and returns object with same named keys and its values are set to the passed arguments.
const person = {};

function createPerson(firstName, lastName, age) {
  person.firstName = "New";
  person.lastName = "Year";
  person.age = "23";

  return person;
}
createPerson();
console.log(person);

// TASK 2.1
// Add a method to that object that when it's invoked it should return if that person is of legal age, legal age is 20.
function isAgeValid(age) {
  if (person.age > 20) {
    return true;
  } else {
    return false;
  }
}

// TASK 3
// Create two inputs and a button in your HTML, when button is clicked create and return an object with its key set as the first input value and its value is set to the second input value.

const btn = document.querySelector("#btn");
const keyInput = document.querySelector("#firstName");
const valueInput = document.querySelector("#lastName");
const obj = {};

btn.addEventListener("click", onClick);
function onClick() {
  keyInput.textContent = keyInput.value;
  valueInput.textContent = keyInput.value;

  if (keyInput.value) {
    obj[keyInput.value] = valueInput.value;
    keyInput.textContent = "";
  }

  console.log(obj);
}

// TASK 4
// Create a function isEqual that takes two objects and returns if they are equal. Use function created in second task to create objects that you need to compare. Remember functions are reference type just like objects are.

function isEqual() {
  const person = createPerson();
  const user = createPerson();

  if (person === user) {
    return true;
  } else {
    return false;
  }
}
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
const thisCar = {};

const container = document.querySelector(".container");
const carBrandLabel = document.createElement("label");
carBrandLabel.textContent = "Brand: ";
const carBrandInput = document.createElement("input");
carBrandInput.value = "";

const carColorLabel = document.createElement("label");
carColorLabel.textContent = "Color: ";
const carColorInput = document.createElement("input");
carColorInput.value = "";
container.append(carBrandLabel, carBrandInput, carColorLabel, carColorInput);

container.style.display = "flex";
container.style.flexDirection = "column";
container.style.gap = "10px";
container.style.width = "300px";

const selectEngineLabel = document.createElement("label");
selectEngineLabel.textContent = "Engine: ";
const selectEngine = document.createElement("select");

container.append(selectEngineLabel, selectEngine);

const engine = ["80kW", "100kW", "120kW"];
for (let i = 0; i < engine.length; i++) {
  const option = document.createElement("option");
  option.value = engine[i];
  option.text = engine[i];
  selectEngine.append(option);
}

const transmition = ["manual", "automatic"];

const transmitionLabel = document.createElement("label");
transmitionLabel.textContent = "Transmition: ";
const selectTransmition = document.createElement("select");
container.append(transmitionLabel, selectTransmition);
for (let i = 0; i < transmition.length; i++) {
  const option = document.createElement("option");
  option.value = transmition[i];
  option.text = transmition[i];
  selectTransmition.append(option);
}

function createCheckbox() {
  const checkboxDiv = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "Premium package";
  checkbox.value = "Premium package";

  const label = document.createElement("label");
  label.textContent = "Premium package";
  const checkbox1 = document.createElement("input");
  checkbox1.type = "checkbox";
  checkbox1.name = "Winter package";
  checkbox1.value = "Winter package";

  const label1 = document.createElement("label");
  label1.textContent = "Winter package";
  container.append(checkboxDiv);
  checkboxDiv.append(label, checkbox, label1, checkbox1);

  if (checkbox.checked) {
    thisCar.extras = checkbox.value;
  }
  if (checkbox1.checked) {
    thisCar.extras = checkbox1.value;
  }
}

createCheckbox();

// function getCheckbox(checkbox, checkbox1) {
//   if (checkbox.checked) {
//     thisCar.extras = checkbox.value;
//   }
//   if (checkbox1.checked) {
//     thisCar.extras = checkbox1.value;
//   }
// }
const carBtn = document.createElement("button");
container.append(carBtn);
carBtn.textContent = "Click me";
// TASK 5.1
/*
    Create a function that gets invoked when user clicks button it will construct an car object and return it. This object will hold all values that user has selected/written. Constraints: 
		a. car brand, car color, engine and transmition should be in the first layer of object. ( so if I would try to read value of car color I would need to traverse object as so: car.carColor )
        b. premium package and winter package should be its own separate object that is stored inside car object under 'extras' key. ( so if I would try to read value of winter package I would need to traverse object as so: car.extras.winterPackage )
*/

function constractObject() {
  thisCar.brand = carBrandInput.value;
  thisCar.color = carColorInput.value;
  thisCar.engine = selectEngine.value;
  thisCar.transmition = selectTransmition.value;
  // getCheckbox();
}
// TASK 5.2
/*
    Create a function that will be used to display result of 5.1 on our page and in addition it should also include button 'Edit' which when clicked will prefill form of 5 task with data it is editing.
	(apart 'Edit' button it should look simillar to how we implemented our forms in projects that we did where user enters information and on button click we created containers that we displayed on the right side, for checkboxes display their values as boolean type)
*/
carBtn.addEventListener("click", displayObject);
function displayObject() {
  constractObject();

  const resultTextarea = document.createElement("textarea");
  container.append(resultTextarea);
  resultTextarea.value = JSON.stringify(thisCar);
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
function validatePersonEntry({firstName, lastName, age }) {
  person.firstName = "Greg";
  person.lastName = "Adams";
  person.age = isAgeValid(age);
  return person;
}
validatePersonEntry({
  firstName: "Greg",
  lastName: "Adams",
  age: 33,
});
// BONUS TASK
// Demonstrate closures in javascript.
