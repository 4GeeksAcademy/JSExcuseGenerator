/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML = ExcuseGen();
};
function ExcuseGen() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let indexWho = Math.floor(Math.random() * who.length);
  let indexAction = Math.floor(Math.random() * action.length);
  let indexWhat = Math.floor(Math.random() * what.length);
  let indexWhen = Math.floor(Math.random() * when.length);

  return (
    who[indexWho] +
    " " +
    action[indexAction] +
    " " +
    what[indexWhat] +
    " " +
    when[indexWhen]
  );
}
