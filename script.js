const keys = document.querySelectorAll(".key");
const display_input = document.querySelector(".display .input");
const display_output = document.querySelector(".display .output");

let resArray = [];
function isNumber(o) {
    return o === "" || !isNaN(o - 0);
}
window.addEventListener("keydown", (e) => {
    display_output.innerHTML = "";
    if (isNumber(e.key) || "+-*/.%()".includes(e.key)) {
        resArray.push(e.key);
    }
    if (e.key === "Backspace") {
        resArray.pop();
    }
    let resArrayRender = [];
    if (resArray.length === 0) {
        resArrayRender = [];
    } else {
        for (let i = 0; i < resArray.length; i++) {
            if (resArray[i] === "*") resArrayRender.push("x");
            else resArrayRender.push(resArray[i]);
        }
    }
    display_input.innerHTML = resArrayRender.join("")
        ? resArrayRender.join("")
        : "";
    try {
        if (e.key === "=" || e.key === "Enter") {
            console.log(resArray);
            if (resArray.length === 0) display_output.innerHTML = "";
            else {
                display_output.innerHTML =
                    resArray === [] ? "" : eval(resArray.join(""));
                resArray = [];
            }
        }
    } catch (error) {
        resArray = [];
        alert("Phep tinh loi");
        display_input.innerHTML = "";
        console.log(error);
    }
});

keys.forEach((key) => {
    key.addEventListener("click", () => {
        if (key.dataset.key === "clear") {
            display_input.innerHTML = "";
            display_output.innerHTML = "";
            resArray = [];
        }
        if (key.dataset.key === "brackets") {
            // console.log(key.dataset.key);
            // if() {}

            let string = resArray.join("");
        }
        if (isNumber(key.dataset.key) || "+-*/.%()".includes(key.dataset.key)) {
            resArray.push(key.dataset.key);
            display_input.innerHTML = resArray.join("");
            console.log(resArray);
        }
        if (key.dataset.key === "=") {
            try {
                if (resArray.length === 0) display_output.innerHTML = "";
                else display_output.innerHTML = eval(resArray.join(""));
            } catch (error) {
                console.log(error);
                resArray = [];
                display_input.innerHTML = "";
                alert("Phep tinh loi");
            }
        }
    });
});
