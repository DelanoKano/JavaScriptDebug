function getAngle() {
  //Get hand Elements
  const hourHand = document.querySelector(".hour");
  const minuteHand = document.querySelector(".minute");
  const secondHand = document.querySelector(".second");
  const milisecHand = document.querySelector(".mili");

  //hours, minutes and seconds
  const today = new Date(); //Date object
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let miliseconds = today.getMilliseconds();

  // angle of rotation of hands, one rotation = 360
  let hrHandRotation = 30 * hours;
  let minHandRotation = 6 * minutes;
  let secHandRotation = 6 * seconds;
  let milisecHandRotation = 0.36 * miliseconds;

  //now rotate the hands
  //adding translateX here otherwise only rotate works
  hourHand.style.transform = `translateX(-50%) rotate(${hrHandRotation}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minHandRotation}deg)`;
  secondHand.style.transform = `translateX(-50%) rotate(${secHandRotation}deg)`;
  milisecHand.style.transform = `translateX(-50%) rotate(${milisecHandRotation}deg)`;
}

getAngle(); //to start the clock as soon as page loads otherwise it jumps to current time abruptly form 12

setInterval(getAngle, 1);
