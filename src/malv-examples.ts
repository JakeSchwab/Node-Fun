// let is block scoped and can be overwritten
let a = 1;
a = 2;

// const means constant, is also block scoped but cannot be redeclared
const b = 1;
// b = 2; // does not work

// Functions
function one(): number {
  return 1;
}

function addOne(x: number): number {
  return x + 1;
}

const addOneShort = (x: number) => x + 1;
const square = (x: number) => x * x;
console.log(square(addOneShort(5)));

interface TollesObjekt {
  hustle: string;
  iahfdp: number;
}

interface DemoInterface {
  name: string;
  age: number;
  height: number;
  tollesObjekt: TollesObjekt;
}

const d: DemoInterface = {
  name: 'd',
  age: 12,
  height: 30,
  tollesObjekt: {
    hustle: '23',
    iahfdp: 12
  }
}

// d kommt von ner datenbank
console.log(d.tollesObjekt.hustle);

const demoFn = (di: DemoInterface) => {
  return di.age;
}

const getComputedAge = (d: DemoInterface) => d.age + d.tollesObjekt.iahfdp;

demoFn(d);