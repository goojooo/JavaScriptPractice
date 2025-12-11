import { add, subtract } from './math.js';
import  sayHello  from './greet.js';
import  {companyName, year}  from './task3.js';

window.add = add;
window.sub = subtract;
window.call = sayHello;

console.log(companyName + " " + year)
