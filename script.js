console.log('JavaScript');

// $(document).ready(readyNow);

// function readyNow() {
//     console.log('JQuery')
// }

let myBday;

myBday = 'July 9, 1999';

console.log('Nolens bday is: ' + myBday)

myBday = '07/09/99'

console.log('Nolens bday is: ' + myBday)



let mph = 60;

let distanceToTheMoon = 230940;

let hoursToTheMoon = distanceToTheMoon / mph

console.log(hoursToTheMoon + ' hours to the moon');

let maxHoursCanDrive = 3;

if (hoursToTheMoon > maxHoursCanDrive){
    console.log('Hell no! That is too far')
}

let isItTooFar = hoursToTheMoon > maxHoursCanDrive;

console.log(isItTooFar);

function isItTooFarForMe (distance, maxTime, mph) {
    let hours = distance / mph;
    return hours > maxTime;
}

