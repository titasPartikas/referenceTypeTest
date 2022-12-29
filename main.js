// TASK 1
// Create an object car with these fields: brand, color, numOfDoors. Fill those fields with values and console.log each of them separately.



// TASK 2
// Create a function createPerson that takes first name and last name, age, and returns object with same named keys and its values are set to the passed arguments.



// TASK 2.1
// Add a method to that object that when it's invoked it should return if that person is of legal age, legal age is 20.



// TASK 3
// Create two inputs and a button in your HTML, when button is clicked create and return an object with its key set as the first input value and its value is set to the second input value.



// TASK 4
// Create a function isEqual that takes two objects and returns if they are equal. Use function created in second task to create objects that you need to compare. Remember functions are reference type just like objects are.


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

//Task 1.
car = {
    brand: "Toyota",
    color: "white",
    numOfDoors: "4",
}
console.log(car.brand);
console.log(car.color);
console.log(car.numOfDoors);
//Task 2.

function createPerson() {
    
}