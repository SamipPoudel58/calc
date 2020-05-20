const container = document.getElementById("container");
const input = document.getElementById("input");
const num = document.querySelectorAll("num");

input.value = "";

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
      calculate(input.value);
    }
    if (inputs === "per") {
      let dataper = input.value;
      for (let i = 0; i < dataper.length; i++) {
        if (dataper.charAt(i) === "%") {
          let num1 = dataper.slice(0, i);
          input.value = +num1 / 100;
        }
      }
    }
  });
}

function calculate(data) {
  for (let i = 0; i < data.length; i++) {
    if (data.charAt(i) === "+") {
      let first = data.slice(0, i);
      let second = data.slice(i + 1, data.length + 1);
      operation(first, second, "+");
    }
    if (data.charAt(i) === "-") {
      let first = data.slice(0, i);
      let second = data.slice(i + 1, data.length + 1);
      operation(first, second, "-");
    }
    if (data.charAt(i) === "X") {
      let first = data.slice(0, i);
      let second = data.slice(i + 1, data.length + 1);
      operation(first, second, "X");
    }
    if (data.charAt(i) === "/") {
      let first = data.slice(0, i);
      let second = data.slice(i + 1, data.length + 1);
      operation(first, second, "/");
    }
  }
}

// Mathematical Operations
function operation(f, s, op) {
  if (op === "+") {
    let answer = +f + +s;
    input.value = answer;
  } else if (op === "-") {
    let answer = +f - +s;
    input.value = answer;
  } else if (op === "X") {
    let answer = +f * +s;
    input.value = answer;
  } else if (op === "/") {
    let answer = +f / +s;
    input.value = answer;
  }
}

container.addEventListener("click", function (e) {
  let clicked_class = e.target.classList;
  let clicked_text = e.target.innerHTML;
  showItem(clicked_class, clicked_text);
});
