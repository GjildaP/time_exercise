/*
countdown
Write a function called countdown that accepts a number as a parameter and every 1000 milliseconds decrements the value and console.logs it.
 Once the value is 0 it should log “DONE!” and stop.
*/
function countdown(num) {
    let intervalId = setInterval(function() {
      num--;
      if (num <= 0) {
        clearInterval(intervalId);
        console.log("DONE!");
      } else {
        console.log(num);
      }
    }, 1000);
  }


/*
randomGame
Write a function called randomGame that selects a random number between 0 and 1 every 1000 milliseconds and each time that a random number is picked, add 1 to a counter. If the number is greater than .75, stop the timer and console.log the number of tries it took before we found a number greater than .75.
*/
function randomGame() {
    let counter = 0;
    let intervalId = setInterval(function() {
      let randNum = Math.random();
      counter++;
      console.log(randNum);
      if (randNum > 0.75) {
        clearInterval(intervalId);
        console.log(`It took ${counter} tries to find a number greater than 0.75.`);
      }
    }, 1000);
  }