# ContainsSwag
 A way to check if a string contains swag


This was writen as a way to try out github and to practice coding, but mainly as a joke.

HOW TO USE:
1. import the swag.js file into your project/code `const swag = require('./swag')`
2. pass a string to the swagTest function `swag.swagTest('the string you want to check for swag')`
3. ???
4. it will return a true or false value if the word swag apears anywhere in the string

EXAMPLE:
 ```
 const swag = require('./swag')

const coolword = 'your mom'
const coolword2 = 'your mom is swag'
const coolword3 = 'swag';

console.log('the phrase ' + coolword + ' gives the result ' + swag.swagTest(coolword));
console.log('the phrase ' + coolword2 + ' gives the result ' + swag.swagTest(coolword2));
console.log('the phrase ' + coolword3 + ' gives the result ' + swag.swagTest(coolword3));
```
this code should return the result:
```
the phrase your mom gives the result false
the phrase your mom is swag gives the result true
the phrase swag gives the result true
```
