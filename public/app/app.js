import { log }  from './utils/promise-helpers.js';
import './utils/array-helpers.js';
import { notasService as service } from './nota/service.js'; 

document
.querySelector('#myButton')
.onclick = () => 
    service
    .sumItems('2143')
    .then(console.log)
    .catch(console.log);

/* document
.querySelector("#myButton")
.onclick = () => 
    fetch('http://localhost:3000/notas')
    .then(handleStatus)
    .then(sumItems('2143'))
    .then(log)
    .catch(console.log); */
