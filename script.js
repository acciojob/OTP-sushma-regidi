//your JS code here. If required.
// Select all OTP input fields
const codes = document.querySelectorAll(".code");

// Set focus on the first input at load
codes[0].focus();

codes.forEach((input, idx) => {
    input.addEventListener("input", () => {
        // Allow only numbers
        input.value = input.value.replace(/[^0-9]/g, "");

        if (input.value.length === 1 && idx < codes.length - 1) {
            // Move to next input
            codes[idx + 1].focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (input.value === "" && idx > 0) {
                // Move back to previous input
                codes[idx - 1].focus();
                codes[idx - 1].value = "";
            } else {
                // Clear current value before moving
                input.value = "";
            }
        }
    });
});
