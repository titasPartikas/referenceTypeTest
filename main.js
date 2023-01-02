// TASK 1
// Create an object car with these fields: brand, color, numOfDoors. Fill those fields with values and console.log each of them separately.
const car = {
    brand: 'seat',
    color: 'blue' ,
    numOfDoors: '5',
};

console.log(car.brand);
console.log(car.color);
console.log(car.numOfDoors);

// TASK 2
// Create a function createPerson that takes first name and last name, age, and returns object with same named keys and its values are set to the passed arguments.


function createPerson(firstName, lastName, age) {
    const obj = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      isLegalAge() {
        if (obj.age <= 20) {
            return false;
        } else {
            return true;
        }
      }
    }
    return obj;
  }

console.log(createPerson('Agne', 'Ciuksyte', 28));
  


// TASK 2.1
// Add a method to that object that when it's invoked it should return if that person is of legal age, legal age is 20.

//up

// TASK 3
// Create two inputs and a button in your HTML, when button is clicked create and return an object with its key set as the first input value and its value is set to the second input value.


const firstInput = document.querySelector("#input-1");
const secondInput = document.querySelector("#input-2");
const submitBtn = document.querySelector("#submit-btn");
const key = firstInput.value;
const value = secondInput.value;
const obj = {}

submitBtn.addEventListener("click", createReturn());


function createReturn() {
    const obj = {}
    obj[key] = value;
    
    return obj
}

console.log(createReturn());

// TASK 4
// Create a function isEqual that takes two objects and returns if they are equal. Use function created in second task to create objects that you need to compare. Remember functions are reference type just like objects are.

let personOne = createPerson('Agne', 'Ciuksyte', 28);
let personTwo = createPerson('Agne', 'Ciuksyte', 28);


function isEqual(arg1, arg2) {
    if (arg1 === arg2) {
        return true;
    } else {
        return false;
    }
   
};

console.log(isEqual(personOne, personTwo)); // always gives false, why? values are identical 




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
const carBrandInput = document.querySelector("#car-brand");
const carColorInput = document.querySelector("#car-color");
const carEngineSelection = document.querySelector("#car-engine");
const carTransmisionSelection = document.querySelector("#car-trans");
const premiumPackage = document.querySelector("#p-package");
const winterPackage = document.querySelector("#w-package");

const clickBtn = document.querySelector("#click-btn");

const displayContainer = document.querySelector(".car-info-container");
const displayMe = document.querySelector("#display-me");
const editBtn = document.querySelector("#edit-btn");

clickBtn.addEventListener("click", displayObject());
editBtn.addEventListener("click", editActions());

function constructObject() {
    const newCar = {
        brand: carBrandInput.value,
        color: carColorInput.value,
        engine: carEngineSelection.value,
        transmision: carTransmisionSelection.value,
        extras: {
            premium: premiumPackage.checked,
            winter: winterPackage.checked,
        },
    };
    return newCar;
}

console.log(constructObject());

function displayObject() {
    const carObject = constructObject();
    displayCarInfo(carObject);
}

function displayCarInfo(newCar) {
    displayContainer.classList.remove("hidden");
    displayMe.textContent = JSON.stringify(newCar);
}


// TASK 5.2
/*
    Create a function that will be used to display result of 5.1 on our page and in addition it should also include button 'Edit' which when clicked will prefill form of 5 task with data it is editing.
	(apart 'Edit' button it should look simillar to how we implemented our forms in projects that we did where user enters information and on button click we created containers that we displayed on the right side, for checkboxes display their values as boolean type)
*/

// function editActions() {

// } // idk how to do the task, cause i don't really understand it, sorry :(  i wish i did





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

const newPerson = createPerson('Agne', 'Ciuksyte', 28);


function validatePersonEntry(newPerson, exposeAge = false) {
    const newObject = {
        firstName: newPerson.firstName,
        lastName: newPerson.lastName,
        entryGranted() {
            if (exposeAge) {
                newObject.age = newPerson.age;
            }
        }
    };

    return newObject;

}

const validatePerson = validatePersonEntry(newPerson, true);
console.log(validatePerson);

// BONUS TASK
// Demonstrate closures in javascript.