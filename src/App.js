import './App.css';

function App(){



var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click", function () {
    if (flag == 0) {
        bulb.style.backgroundColor = "yellow"; // Correct way to set background color
        console.log("Clicked");
        flag = 1;
    } else {
        bulb.style.backgroundColor = "transparent"; // Correct way to reset background color
        console.log("Again Clicked");
        flag = 0;
    }
});


}

export default App;

