document.querySelector("#start").addEventListener("click", () => {
  let MyInterval = () => {
    let myCode = (document.querySelector("h1").innerHTML =
      "Learning JS with chai");
    console.log("Ashish", Date.now());
  };
  let toStop = setInterval(MyInterval, 1000);

  document.querySelector("#stop").addEventListener("click", () => {
    clearInterval(toStop);
    console.log("Stopped");
  });
});
