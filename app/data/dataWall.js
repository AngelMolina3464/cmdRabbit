const AlphabeticUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const AlphabeticLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const Numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const Simbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "+",
  "=",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "/",
  "<",
  ">",
  "?",
  "|",
  "\\",
];

const ArrayTotal = AlphabeticUpper.concat(AlphabeticLower, Numeric, Simbols);

const numberRand = (max) => {
  const randomNumber = Math.random();
  const numberInRange = Math.floor(randomNumber * max + 1);
  return numberInRange;
};

export const arrayBuild = (max = 92) => {
  const newPlotArray = [];

  for (let index = 1; index <= 2500; index++) {
    newPlotArray.push(ArrayTotal[numberRand(max)]);
  }

  const arrayDescontruccion = newPlotArray.join(" ");
  return arrayDescontruccion;
};


