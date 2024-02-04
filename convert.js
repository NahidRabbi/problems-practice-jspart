//  Hight ber korar system
// 12 inch 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}
// 66
function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch '
    return result;
    
}
const nahidHight = inchToFeet(66);
// console.log(nahidHight);
const nahidHight2 = inchToFeet2(66);
// console.log(nahidHight2);

// Mile To Kilometer ber korar system

function mileToKilometer(mile){
  const kilo = mile * 1.60934;
  return kilo;
}

function kiloMeterToMiles(kilo){
    const mile = kilo * 0.621371;
    return mile;
}
const totalMiles = mileToKilometer(1.60934);
console.log(totalMiles);
const totalKilos = kiloMeterToMiles(0.621371);
console.log(totalKilos);
