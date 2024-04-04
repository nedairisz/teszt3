import { tesztFuggvenyemhez } from "./teszt.js";

//Két pozitív egész szám legnagyobb közös osztóját keresi MassageChannel.

export function fuggvenyem(a, b) {

  if (a===0 || b===0){
    return "Egyik szám sem lehet nulla!"
  }if (a<0 ||b<0){
    return "Mindkét számnak pozitívnak kell lennie!"
  }
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
}
tesztFuggvenyemhez()

/* console.log(fuggvenyem(15,25)); //5
console.log(fuggvenyem(9,6)); //3
console.log(fuggvenyem(15,6)); //3
console.log(fuggvenyem(0,0)); //0
console.log(fuggvenyem(10.5,6)); //1.5  */

//console.log(fuggvenyem("4",6));
//console.log(fuggvenyem(1/3,2)); 
//console.log(fuggvenyem(0,3));
//console.log(fuggvenyem(-5,6));  //abszolút értékét kéne vegye , -nincs értelmezve a ..
//console.log(fuggvenyem(-5,-6));
//console.log(fuggvenyem(10.5,6.5));


// két pozitív egész számra van csak értelmezve a legnagyobb közös osztó
//relatív prímek: legnagyobb közös osztójuk 1