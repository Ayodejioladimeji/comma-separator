# comma-separator

Separate numbers in hundreds, thousands, millions, billions and trillions and converts long numbers to readable strings.

## Install

```sh
$ npm install comma-separator
```

## Import

Nodejs Applications

```js
const { addComma } = require("comma-separator");
```

Reactjs Applications

```js
import { addComma } from "comma-separator";
```

## Usage

### Add comma to numbers

```js
const { addComma } = require("comma-separator");

addComma(5000000); // "5,000,000"
addComma(-10000); // "-10,000"

addComma(1000); // "1,000"
addComma(-1000); // "-1,000"

addComma(1000.12); // "1,000.12"
addComma(-1000.12); // "-1,000.12"

addComma("-200000000M"); // "-200,000,000M"
```

### Remove comma from numbers

```js
const { removeComma } = require("comma-separator");

removeComma("5,000,000"); // 5000000
removeComma("-10,000"); // -10000

removeComma("1,000"); // 1000
removeComma("-1,000"); // -1000

removeComma("-100,000,000 Millions"); // -100000000
```

### strict add comma to numbers

```js
const { strictAddComma } = require("comma-separator");

strictAddComma(5000000); // "5,000,000"
stritAddComma(-10000); // "10,000"

strictAddComma(-10000000); // "10,000,000"

strictAddComma("10000000M"); // "10,000,000"

strictAddComma("1000 thousand naira"); // "1,000"

strictAddComma("-200000000M"); // "200,000,000"
```

### strict remove comma from numbers

```js
const { strictRemoveComma } = require("comma-separator");

strictRemoveComma("5,000,000"); // 5000000
strictRemoveComma("-10,000"); // 10000

strictRemoveComma("1,000"); // 1000
strictRemoveComma("-1,000"); // 1000

strictRemoveComma("1,000Thousand"); // 1000
strictRemoveComma("-100,000,000 Millions"); // 100000000

strictRemoveComma("-20.00,000,000Millions"); // 2000000000
```

### Convert Long numbers to readable strings

```js
const { convert } = require("comma-separator");

convert(5000); // 5K
convert(10000); //10K
convert(100000); //100K

convert(1000000); // 1M
convert(20000000); // 20M

convert(5000000000); // 5B
convert(100000000000); //100B

convert(5000000000000); // 5T
```

## Examples

### Remove Comma Example

```js
const { removeComma } = require("comma-separator");

const ex1 = "10,000";
const ex2 = "-3,000";
const ex3 = 1000;
const ex4 = "1,000 naira";

const calculateSum = (...rest) => {
  let arr = [];
  rest.forEach((item) => {
    arr.push(removeComma(item));
  });

  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

const response = calculateSum(ex1, ex2, ex3, ex4);
console.log(response);

`Result = 9000`;
```

```js
const { removeComma } = require("comma-separator");

const ex1 = "10,000";
const ex2 = "3,000";
const ex3 = 1000;
const ex4 = "1,000 naira";

const calculateSum = (...rest) => {
  let arr = [];
  rest.forEach((item) => {
    arr.push(removeComma(item));
  });

  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

const response = calculateSum(ex1, ex2, ex3, ex4);
console.log(response);

`Result = 15000`;
```

#### ------------------------------------------------------------------

### Remove Strict Comma Example

```js
const { strictRemoveComma } = require("comma-separator");

const ex1 = "10,000";
const ex2 = "-3,000";
const ex3 = 1000;
const ex4 = "1,000 naira";

const calculateSum = (...rest) => {
  let arr = [];
  rest.forEach((item) => {
    arr.push(strictRemoveComma(item));
  });

  return arr.reduce((acc, item) => {
    return acc + item;
  }, 0);
};

const response = calculateSum(ex1, ex2, ex3, ex4);
console.log(response);

`Result = 15000`;
```
