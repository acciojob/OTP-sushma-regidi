const codes = document.querySelectorAll(".code");

// Automatically focus on first input on page load
document.getElementById("code-1").focus();

codes.forEach((input, idx) => {
    
    // Forward typing behavior
    input.addEventListener("input", (e) => {
        const value = input.value.replace(/[^0-9]/, "");

        input.value = value;

        if (value && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    // Backspace behavior
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (input.value === "" && idx > 0) {
                codes[idx - 1].value = "";  // delete previous input
                codes[idx - 1].focus();      // shift focus backward
            } else {
                input.value = "";  // delete current
            }
        }
    });
});

