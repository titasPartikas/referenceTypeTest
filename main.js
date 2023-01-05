// TASK 1
// Create an object car with these fields: brand, color, numOfDoors. Fill those fields with values and console.log each of them separately.

const car = {
  brand: "Toyota",
  color: "Red",
  numOfDoors: 5,
  engine: {
    transmition: 'manual'
  }
};
const { brand, color, numOfDoors, engine } = car;

engine.transmition = 'automatic';

console.log(car);
console.log(car.brand);
console.log(car.color);
console.log(car.numOfDoors);

addSeperator("TASK 2");
// TASK 2
// Create a function createPerson that takes first name, last name, age, and returns object with same named keys and its values are set to the passed arguments.

function createPerson(firstName, lastName, age) {
  const person = {
    // sample of regular object field declaration
    firstName: firstName,
    // shorthand - has same effect as regular declaration
    lastName,
    age,
    getIsOfLegalAge: () => {
      return person.age >= 20;
    },
  };

  return person;
}

console.log(createPerson("Titas", "Partikas", 19));
console.log(createPerson("Titas", "Partikas", 19).getIsOfLegalAge());

// TASK 2.1
// Add a method to that object that when it's invoked it should return if that person is of legal age, legal age is 20.

addSeperator("TASK 3");
// TASK 3 --- don't return in event listener- it doesn't make sense
// Create two inputs and a button in your HTML, when button is clicked create and return an object with its key set as the first input value and its value is set to the second input value.
const dynamicKeyBtn = document.querySelector("#dynamicKeyBtn");
const keyInput = document.querySelector("#key");
const valueInput = document.querySelector("#value");

dynamicKeyBtn.addEventListener("click", () => {
  return {
    [keyInput.value]: valueInput.value,
  };
});

addSeperator("TASK 4");
// TASK 4
// Create a function isEqual that takes two objects and returns if they are equal. Use function created in second task to create objects that you need to compare. Remember functions are reference type just like objects are.

const isEqual = (user1, user2) => {
  if (
    user1.firstName !== user2.firstName ||
    user1.lastName !== user2.lastName ||
    user1.age !== user2.age ||
    user1.getIsOfLegalAge() !== user2.getIsOfLegalAge()
  ) {
    return false;
  }

  return true;
};

const user1 = createPerson("", "", 20);
const user2 = createPerson("", "", 20);

const equalityResult = isEqual(user1, user2);
console.log(equalityResult);

addSeperator("TASK 5");
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

const orderCarBtn = document.querySelector("#orderCarBtn");
const carBrandInput = document.querySelector("#carBrand");
const carColorInput = document.querySelector("#carColor");
const premiumPackageCheckbox = document.querySelector("#premiumPackage");
const winterPackageCheckbox = document.querySelector("#winterPackage");
const engineDropdown = document.querySelector("#engine");
const transmitionDropdown = document.querySelector("#transmition");
const carListContainer = document.querySelector(".car-list");

let isEditOrderMode = false;
let editModeContainer = null;

orderCarBtn.addEventListener("click", () => {
  const car = {
    brand: carBrandInput.value,
    color: carColorInput.value,
    engine: engineDropdown.value,
    transmition: transmitionDropdown.value,
    extras: {
      premiumPackage: premiumPackageCheckbox.checked,
      winterPackage: winterPackageCheckbox.checked,
    },
  };

  if (isEditOrderMode) {
    onEditOrder(car);
  } else {
    displayOrderedCar(car);
  }

  clearForm();
});

const onEditOrder = (car) => {
  editModeContainer.innerHTML = '';
  prepareOrderContainer(editModeContainer, car);
  orderCarBtn.textContent = 'Order';
  isEditOrderMode = false;
};

/*
    <div data-color='White' ....>
        <p>Car Brand: BMW</p>
    </div>
*/

const displayOrderedCar = (car) => {
  const container = document.createElement("div");
  container.classList.add("ordered-car");
  prepareOrderContainer(container, car)
  carListContainer.append(container);
};

const prepareOrderContainer = (container, car) => {
  fillContainerDataAttributes(container, car);
  const {
    brandParagraph,
    colorParagraph,
    engineParagraph,
    premiumPackageParagraph,
    transmitionParagraph,
    winterPackageParagraph,
  } = getOrderParagraphs(car);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.onclick = (event) => {
    const orderedCarContainer = event.target.parentElement;
    editModeContainer = orderedCarContainer;
    prefillForm(orderedCarContainer.dataset);
    orderCarBtn.textContent = "Edit Order";
    isEditOrderMode = true;
  };

  container.append(
    brandParagraph,
    colorParagraph,
    engineParagraph,
    transmitionParagraph,
    winterPackageParagraph,
    premiumPackageParagraph,
    editBtn
  );
}

const fillContainerDataAttributes = (container, car) => {
  container.dataset.color = car.color;
  container.dataset.brand = car.brand;
  container.dataset.transmition = car.transmition;
  container.dataset.engine = car.engine;
  container.dataset.winterPackage = car.extras.winterPackage;
  container.dataset.premiumPackage = car.extras.premiumPackage;
};

const getOrderParagraphs = (car) => {
  const brandParagraph = createFieldParagraph("Brand", car.brand);
  const colorParagraph = createFieldParagraph("Color", car.color);
  const engineParagraph = createFieldParagraph("Engine", car.engine);
  const transmitionParagraph = createFieldParagraph(
    "Transmition",
    car.transmition
  );
  const winterPackageParagraph = createFieldParagraph(
    "Winter Package",
    car.extras.winterPackage
  );
  const premiumPackageParagraph = createFieldParagraph(
    "Premium Package",
    car.extras.premiumPackage
  );

  return {
    brandParagraph,
    colorParagraph,
    engineParagraph,
    transmitionParagraph,
    winterPackageParagraph,
    premiumPackageParagraph,
  };
};

const createFieldParagraph = (title, value) => {
  const paragraph = document.createElement("p");
  paragraph.textContent = `${title}: ${value}`;

  return paragraph;
};

const clearForm = () => {
  carBrandInput.value = "";
  carColorInput.value = "";
  engineDropdown.value = "80kW";
  transmitionDropdown.value = "manual";
  premiumPackageCheckbox.checked = false;
  winterPackageCheckbox.checked = false;
};

const prefillForm = (order) => {
  carBrandInput.value = order.brand;
  carColorInput.value = order.color;
  engineDropdown.value = order.engine;
  transmitionDropdown.value = order.transmition;
  premiumPackageCheckbox.checked = parseStringifiedBoolean(order.premiumPackage);
  winterPackageCheckbox.checked = parseStringifiedBoolean(order.winterPackage);
};

const parseStringifiedBoolean = (value) => {
  return value === "true" ? true : false;
};

// TASK 5.1 ---- don't return in events
/*
    Create a function that gets invoked when user clicks button it will construct an car object and return it. This object will hold all values that user has selected/written. Constraints: 
		a. car brand, car color, engine and transmition should be in the first layer of object. ( so if I would try to read value of car color I would need to traverse object as so: car.carColor )
        b. premium package and winter package should be its own separate object that is stored inside car object under 'extras' key. ( so if I would try to read value of winter package I would need to traverse object as so: car.extras.winterPackage )
*/

// TASK 5.2 ---- could be more clear on how edit functionality should work
/*
    Create a function that will be used to display result of 5.1 on our page and in addition it should also include button 'Edit' which when clicked will prefill form of 5 task with data it is editing.
	(apart 'Edit' button it should look simillar to how we implemented our forms in projects that we did where user enters information and on button click we created containers that we displayed on the right side, for checkboxes display their values as boolean type)
*/

// TASK 6 ---- 1.b should be more clear on what it's supposed to do, maybe find examples?. d. maybe add method name instead of pointing to the task number
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

const validatePersonEntry = (person, exposeAge = false) => {
  const entryValidation = {
    firstName: person.firstName,
    lastName: person.lastName,
    entryAllow: person.getIsOfLegalAge(),
  }

  if (exposeAge) {
    entryValidation.age = person.age;
  }

  return entryValidation;
}

const person1 = createPerson('Vardenis', 'Pavardenis', 15);

console.log(validatePersonEntry(person1, true));
addSeperator('BONUS');
// BONUS TASK
// Demonstrate closures in javascript.
const housePrice = 50000;
// lets assume a person is buying a house and we need to know if he can afford it.
const validateIfPersonCanPurchase = (budget) => {
  const loans = 5000;

  if (loans > 10000) {
    return false;
  }

  if (housePrice > budget) {
    return false;
  }

  const informBank = () => {
    const bankAccountId = '123';

    console.log({
      loans,
      housePrice,
      budget,
      bankAccountId
    })
  }
  informBank();
  return true;
}

console.log(validateIfPersonCanPurchase(60000));
function addSeperator(task) {
  const prefixSuffix = "-----------------";
  console.log(`${prefixSuffix}${task}${prefixSuffix}`);
}
