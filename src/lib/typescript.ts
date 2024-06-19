const maybeFruits: (string | undefined)[] = [
  "apple",
  "banana",
  "cherry",
  undefined,
];

function getFruits(fruits: (string | undefined)[]): string[] {
  // fruitsList: string[]
  const fruitsList = fruits.filter(
    (fruit): fruit is string => fruit !== undefined && fruits.includes(fruit)
  );

  return fruitsList;
}

// Usage
const allFruits = getFruits(maybeFruits);
console.log(allFruits);
/**
interface Fruit {
  name: string;
  ripe: boolean;
}

// Maps fruit names to Fruit objects.
const fruits: Map<string, Fruit> = new Map();

function getRipeFruits(fruitNames: string[]): Fruit[] {
  // fruitsList: Fruit[]
  const fruitsList = fruitNames
    .map((name) => fruits.get(name))
    .filter((fruit): fruit is Fruit => fruit !== undefined);

  for (const fruit of fruitsList) {
    if (fruit.ripe) {
      console.log(`${fruit.name} is ripe!`);
    }
  }

  return fruitsList.filter((fruit) => fruit.ripe);
}

// Usage
const ripeFruits = getRipeFruits(["apple", "banana", "cherry"]);
console.log(ripeFruits);

*/
