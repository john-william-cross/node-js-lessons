const memoryCard = {
   answer: `The technical term for hashtag is octothorpe`,
   createdAt: 1601474982458,
   id: `6002a816-a85d-4332-985d-6da576a1ce5c`,
   imagery: `Jim Thorpe has octopus arms and is cooking hashbrowns`,
   lastAttemptAt: 1601474996936,
   level: 1,
   nextAttemptAt: 1601475008675,
   totalSuccessfulAttempts: 1,
   userId: `50aab22f-8e8e-49c2-8d16-e1039febf29e`,
};

// method for getting all the keys

// Object.keys()   //you pass this method/function the object to get all its keys
const keys = Object.keys(memoryCard); //create variable called keys, store all memoryCard keys there
// console.log(keys); //log keys

// Object.values()  //you pass this method/function the object to get all its values
const values = Object.values(memoryCard); //create variable called values, store all memoryCard values there
// console.log(values); //log values

const hasAnswerProp = memoryCard.hasOwnProperty(`answer`); //check if the object, in this case memoryCard, has an answer property/key
// console.log(hasAnswerProp);

// function checkObj(obj, checkProp) {
//     const
//     if (obj)
// }

const items = {
   gift: `pony`,
   pet: `kitten`,
   bed: `sleigh`,
};

function checkObj(obj, checkProp) {
   const keys = Object.keys(obj);
   console.log(keys);
   const values = Object.values(obj);
   console.log(values);
   const hasCheckPropProperty = obj.hasOwnProperty(checkProp);

   console.log(`This property is present: `, hasCheckPropProperty);

   if (hasCheckPropProperty) {
      console.log(checkProp);
   } else {
      console.log(`Not Found`);
   }
}

checkObj(items, `gift`);
