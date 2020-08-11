const container = document.getElementById("container");
const input = document.getElementById("input");
const num = document.getElementsByClassName("num");
const firsticons = document.getElementsByClassName("firsticons");
const switchbox = document.getElementById("switchbox");
const main = document.getElementById("main");

input.value = "";
let defaultTheme = "light";

function showItem(values, text) {
  values.forEach((inputs) => {
    if (inputs === "num" || inputs == "op") {
      input.value += text;
    }
    if (inputs === "C") {
      input.value = "";
    }
    if (inputs === "D") {
      input.value = input.value.slice(0, -1);
    }
    if (inputs === "equal") {
      enter();
    }
  });
}

function enter() {
  if (input.value === "/04/19") {
    // alert("Congrats! You Have Activated The CheatSheet!!!! Hit OK !");
    window.location.href = "https://samippoudel.com.np";
  } else {
    let final_ans = eval(input.value);
    input.value = final_ans;
  }
}

// Click Event Listener
container.addEventListener("click", function (e) {
  let clicked_class = e.target.classList;
  let clicked_text = e.target.innerHTML;
  showItem(clicked_class, clicked_text);
});

// Keypress event listener
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    enter();
  } else if (e.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  } else if (e.key === "c") {
    input.value = "";
  } else if (e.key !== " " && e.key !== "Shift") {
    input.value += e.key;
  }
});

switchbox.addEventListener("click", function (e) {
  if (defaultTheme === "light") {
    document.documentElement.style.cssText = `
    --main_color1: black;
  --main_color2: #141414;
  --gray: rgb(165, 164, 164);
  --text_color: white;
  --switch_shadow: #64dce7;
  --first_row: #313131;
  --switch_border: 2px solid #11e0f3;
  --hover_text: black;`;
    defaultTheme = "dark";
  } else if (defaultTheme === "dark") {
    document.documentElement.style.cssText = `
    --main_color1: #f9fafb;
  --main_color2: white;
  --gray: rgb(165, 164, 164);
  --text_color: black;
  --switch_shadow: rgba(0, 0, 0, 0.3);
  --first_row: rgb(211, 208, 208);
  --switch_border: none;
  --hover_text: black;
    `;
    defaultTheme = "light";
  }
});
