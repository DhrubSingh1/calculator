const display = document.getElementById("display");
let expression = "";

function show() {
  display.textContent = expression || "0";
}

document.querySelector(".buttons").addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;
  const key = e.target.textContent;

  if (key === "AC") {
    expression = "";
  } else if (key === "=") {
    try {
      expression = String(eval(expression) ?? "");
    } catch {
      expression = "";
      display.textContent = "Error";
      return;
    }
  } else {
    expression += key;
  }
  show();
});