const pizzas = [
   {
      id: "724a0b7c-68fb-4f73-963a-6ae23f1436d8",
      name: "Veggie Delight",
      toppings: [
         { id: "e94e22cf-b42d-453d-8910-2d9b2a5205eb", name: "Onions" },
         { id: "4e2eb71d-8207-46c4-bc64-12a4855337ee", name: "Green Peppers" },
      ],
   },
   {
      id: "10a746ce-7f86-4880-a0cc-3e18c7677db8",
      name: "Mediterranean",
      toppings: [
         { id: "9c5eb777-3e1c-4fc1-91a2-cee96e69d4c1", name: "Tomatoes" },
         { id: "a2f37c3d-bc21-48f4-86af-8c65c7a89431", name: "Olives" },
      ],
   },
   {
      id: "29195a77-82ce-41c3-8d32-8b95223f05bf",
      name: "We Have the Meats",
      toppings: [
         { id: "5c9e2631-9bec-4458-8fb0-c28bc590a462", name: "Pepperoni" },
         { id: "c7316ee6-b9eb-4ce6-999f-56676970b3a1", name: "Sausage" },
      ],
   },
];

const customer = {
   id: "8523a650-e9da-4bc2-9346-303a0a04ba9f",
   name: "Mur Lafferty",
   favoriteToppings: [
      { id: "4e2eb71d-8207-46c4-bc64-12a4855337ee", name: "Green Peppers" },
      { id: "9c5eb777-3e1c-4fc1-91a2-cee96e69d4c1", name: "Tomatoes" },
   ],
};

let toppings = [];
let pizzasCustomerWouldLike = [];

pizzas.forEach((pizza) => {
   toppings = pizza.toppings;
   // console.log(toppings);

   toppings.filter((topping) => {
      if (
         topping.name.includes("Green Peppers") ||
         topping.name.includes("Tomatoes")
      ) {
         console.log("Customer would like this pizza: ", pizza.name + "!");
      }
   });
});

// let pizzaNames = [];
// for (let i = 0; i < pizzas.length; i++) {
//    const pizza = pizzas[i];
//    for (let i2 = 0; i2 < customer.favoriteToppings.length; i2++) {
//       const favTop = customer.favoriteToppings[i2];
//       if (pizza.toppings.find((topping) => topping.name === favTop.name)) {
//          pizzaNames[pizzaNames.length] = pizza.name;
//          break;
//       }
//    }
// }

// pizzas.forEach((pizza) => {
//    console.log(pizza);
// });

// console.log(pizzaNames);

// // let pizzaNames = [];
// for (let i = 0; i < pizzas.length; i++) {
//    pizzaNames = pizzas.toppings[i].name;
//    return pizzaNames;
// }
// // console.log(pizzaNames);

// filteredPizzas = pizzas.filter((pizza) => {
//    return (
//       pizza.toppings[0].name.includes("Green Peppers") ||
//       pizza.toppings[0].name.includes("Tomatoes") ||
//       pizza.toppings[1].name.includes("Green Peppers") ||
//       pizza.toppings[1].name.includes("Tomatoes")
//    );
// });

// const names = filteredPizzas.map((pizza) => {
//    return pizza.name;
// });

// console.log(names);
// console.log(filteredPizzas);

// console.log(pizzas.toppings[i]);

// You have 3 pizzas and 1 customer. How would you return an array of all the pizzas this customer may like? (Assuming a customer may like any pizza with any one of their toppings.)
