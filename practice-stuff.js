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

// You have 3 pizzas and 1 customer. How would you return an array of all the pizzas this customer may like? (Assuming a customer may like any pizza with any one of their toppings.)

// const allToppings = pizzas.map((pizza) => {
//    console.log(pizza.toppings[0].name);
//    console.log(pizza.toppings[1].name);
// });

const veggieDelight =
   pizzas[0].toppings[0].name + ", " + pizzas[0].toppings[1].name;
console.log(veggieDelight);

const firstPizzaToppings =
   pizzas[0].toppings[0].name + ", " + pizzas[0].toppings[1].name;
console.log(firstPizzaToppings);

// const combo = firstPizzaTopping + ", " + secondPizzaTopping;

// console.log(combo);

// const customerFirstFav = customer.favoriteToppings[0].name;
// const customerSecondFav = customer.favoriteToppings[1].name;
// const customerFavs = customerFirstFav + ", " + customerSecondFav;
// console.log(customerFavs);

// const comboToArray = combo.split(", ");
// console.log(comboToArray);
// const customerFavsToArray = customerFavs.split(", ");
// console.log(customerFavsToArray);

// const match = comboToArray.some((r) => customerFavsToArray.indexOf(r) >= 0);
// console.log(match);
// // console.log("\n");
// // console.log(customer.favoriteToppings[0].name);
// // console.log(customer.favoriteToppings[1].name);
// // const customerToppings = customer.favoriteToppings;
// // console.log(`Here are the customer's preferred toppings: `, customerToppings);

// // let match;

// // if (allToppings.includes(customer.favoriteToppings[0].name)) {
// //    console.log("match");
// // }
