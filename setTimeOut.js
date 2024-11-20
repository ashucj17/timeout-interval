document.getElementById("start").addEventListener("click", () => {
  const myTime = function () {
    document.querySelector("h1").innerHTML = "We can do it";
    console.log("Namastye");
  };

  const changeMe = setTimeout(myTime, 2000);
  document.querySelector("#stop").addEventListener("click", () => {
    clearTimeout(changeMe);
    console.log("stopped");
  });
});
