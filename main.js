// TASK 1
// Create an object car with these fields: brand, color, numOfDoors. Fill those fields with values and console.log each of them separately.

// UZDUOTYS:
// const car = {
//     brand: "Kia",
//     color: "red",
//     numOfDoors: "4",
// }
//  console.log(car.brand, car.color, car.numOfDoors);





// TASK 2
// Create a function createPerson that takes first name and last name, age, and returns object with same named keys and its values are set to the passed arguments.

//UZDUOTYS:
// const firstNameInput = document.querySelector("#first-name");
// const lastNameInput = document.querySelector("#last-name");
// const ageInput = document.querySelector("#age");
// const submitBtn = document.querySelector("#submit");
// const user = {
//     firstName: '',
//     lastName: '',
//     age: '',
// };

// submitBtn.addEventListener('click', createPerson)

// function createPerson() {
//     event.preventDefault();
//     user.firstName = user2.firstName = firstNameInput.value;
//     user.lastName = user2.lastName = lastNameInput.value;
//     user.age = user2.age = ageInput.value;
//     //2.1 Add a method to that object that when it's invoked it should return if that person is of legal age, legal age is 20.
//     function ageLegal() {
//         const ageValue = Number(ageInput.value);
//         if (ageValue >= 20) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     console.log(ageLegal(), user);
// };


//TASK 3
// Create two inputs and a button in your HTML, when button is clicked create and return an object with its key set as the first input value and its value is set to the second input value.

//UZDUOTYS:
//  const keyInput = document.querySelector('#key');
//  const valueInput = document.querySelector('#value');
//  const updateBtn = document.querySelector('#update')

//  const object = {};

//  updateBtn.addEventListener('click', function updateObject() {
//      const keyValue = keyInput.value;
//      object[keyValue] = valueInput.value;

//      console.log(object);
//      return object;
//  });


// TASK 4
// Create a function isEqual that takes two objects and returns if they are equal. Use function created in second task to create objects that you need to compare. Remember functions are reference type just like objects are.

// UZDUOTYS:
// const user2 = {
//     firstName: '',
//     lastName: '',
//     age: '',
// };

// function isEqual() {
//     if (user.firstName === user2.firstName || user.lastName === user2.lastName || user.age === user2.age) {
//         return true;
//     } else {
//         return false;
//     }
// };
// console.log(isEqual());

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

// //UZDUOTYS:
// const carBrandInput = document.querySelector('#brand');
// const carColorInput = document.querySelector("#color");
// const engineInput = document.querySelector('#engine');
// const firstEngineValue = document.querySelector("#first-engine");
// const secondEngineValue = document.querySelector("#second-engine");
// const thirdEngineValue = document.querySelector("#third-engine");
// const transmitionInput = document.querySelector("#transmition");
// const firstTransmitionValue = document.querySelector("#first-transmition");
// const secondTransmitionValue = document.querySelector("#second-transmition");
// const premiumPackage = document.querySelector("#premium-package");
// const winterPackage = document.querySelector("#winter-package");
// const submitBtn = document.querySelector("#submit");
// const car = {
//     carBrand: "",
//     carColor: "",
//     engine: "",
//     transmition: "",
//     extras: {
//         premiumPackage: "",
//         winterPackage: "",
//     },
// };

// submitBtn.addEventListener("click", updateObj);

// function updateObj() {
//     car.carBrand = carBrandInput.value;
//     car.carColor = carColorInput.value;
//     car.engine = engineInput.value;
//     car.transmition = transmitionInput.value;
//     showResult();
//     return car;
// }
// console.log(car)

// // function checkCheckbox(premiumPackage, winterPackage) {
// //     if (premiumPackage.checked) {
// //         car.extras.premiumPackage = premiumPackage.value;   // NEPAVYKO, SULAUZIAU KODA
// //     } else {
// //         car.extras.winterPackage = winterPackage.value;
// //     }
// // }





// // TASK 5.2
// /*
//     Create a function that will be used to display result of 5.1 on our page and in addition it should also include button 'Edit' which when clicked will prefill form of 5 task with data it is editing.
//     (apart 'Edit' button it should look simillar to how we implemented our forms in projects that we did where user enters information and on button click we created containers that we displayed on the right side, for checkboxes display their values as boolean type)
// */

// // UZDUOTYS: NEPAVYKO PASIIMTI CHECKBOXU VALUE
// const result = document.querySelector("#results");
// const editBtn = document.querySelector("#edit");

// function showResult() {
//     event.preventDefault()
//     if (carBrandInput.value || carColorInput.value || engineInput.value || transmitionInput.value || winterPackage.checked || premiumPackage.checked) {
//         clearValues();
//         result.style.display = "block";
//         editBtn.style.display = "block";
//         result.textContent = JSON.stringify(car);
//     } console.log(car)
// }

// function clearValues() {
//     carBrandInput.value = '';
//     carColorInput.value = '';
//     engineInput.value = '';
//     transmitionInput.value = '';
//     car.extras.premiumPackage = '';
//     car.extras.winterPackage = '';
// };

// editBtn.addEventListener("click", canEdit)

// function canEdit() {
//     event.preventDefault();
//     carBrandInput.value = car.carBrand;
//     carColorInput.value = car.carColor;
//     engineInput.value = car.engine;
//     transmitionInput.value = car.transmition;
//     premiumPackage.checked = car.extras.premiumPackage;
//     winterPackage.checked = car.extras.winterPackage;
//     result.style.display = 'none';
//     editBtn.style.display = 'none';
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


//UZDUOTYS: NEPAVYKO
// const firstNameInput = document.querySelector("#first-name");
// const lastNameInput = document.querySelector("#last-name");
// const ageInput = document.querySelector("#age");
// const submitBtn = document.querySelector("#submit");
// const user = {
//     firstName: '',
//     lastName: '',
//     age: '',
// };

// submitBtn.addEventListener('click', createPerson)

// function createPerson() {
//     event.preventDefault();
//     user.firstName = firstNameInput.value;
//     user.lastName = lastNameInput.value;
//     user.age = ageInput.value;
//     new.entryAllowed = ageValue.value;
//     //2.1 Add a method to that object that when it's invoked it should return if that person is of legal age, legal age is 20.
//     function ageLegal() {
//         const ageValue = Number(ageInput.value);
//         if (ageValue >= 20) {
//             return true;
//         } else {
//             return false;
//         }
//     }
//     // console.log(ageLegal(), user);
// };

// let exposeAge = Boolean(false);

// function validatePersonEntry(user, exposeAge) {
//     if (user && exposeAge) {
//         return new {
//             firstName: '',
//             lastName: '',
//             age: '',
//             entryAllowed: '',
//         };
//     }console.log(new)
// }



// BONUS TASK
// Demonstrate closures in javascript.

// const countBtn = document.querySelector("#button")
// const result = document.querySelector("#demo")

// countBtn.addEventListener('click', countClickResult)

// const countClick = (function () {
//     let counter = 0;
//     return function () { counter += 1; return counter; }
// })();

// function countClickResult() {
//     result.textContent = countClick();
// }


