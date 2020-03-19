/**
 * Dashboard Login Page
 *
 * Author: Matthias Jäger
 * Date: 15-03-2020
 * Licence: MIT
 */

/** GLOBAL CONSTANTS */

// Outer container
const login = document.getElementsByClassName("login")[0];

// Select input fields
const user_name_input = document.getElementById("user-name");
const user_pass_input = document.getElementById("user-pass");

// Select hidden message boxes
const user_pass_validate = document.getElementById("user-pass-validate");
const user_name_validate = document.getElementById("user-name-validate");

// Select the three form groups
const group_user = document.getElementById("group-user");
const group_pass = document.getElementById("group-pass");
const group_submit = document.getElementById("submit");

/** GLOBAL VARIABLES */

// Validation state
let confirm_user = false;
let confirm_pass = false;


/** USER INTERFACE FUNCTIONS */

/**
 * togglePlaceholderVisibility
 * Used to make the placeholder text invisible while the input is in focus
 */
function togglePlaceholderVisibility(input, attribute) {
  // Store the initial content
  const value = input.getAttribute(attribute);

  // Restore on blur
  input.onblur = function () {
    input.setAttribute(attribute, value);
  };

  // Remove on focus
  input.onfocus = function () {
    input.setAttribute(attribute, "");
  };
}

/** FORM VALIDATE FUNCTIONS */

/**
 * validate
 * Uses two switch statements to validate the inputs in the form
 */
function validate() {

  // Test name
  switch (user_name_input.value) {
    case name:
      confirm_user = true;
      user_name_validate.classList.add("hidden");
      break;
    case "":
      user_name_validate.classList.remove("hidden");
      user_name_validate.classList.add("bg-warning");
      user_name_validate.innerHTML = "You did not enter a user name.";
      break;
    default:
      user_name_validate.classList.remove("hidden");
      user_name_validate.classList.add("bg-error");
      user_name_validate.innerHTML = user_name_input.value + " is unknown, please check for mistakes";
  }

  // Test pass
  switch (user_pass_input.value) {
    case pass:
      confirm_pass = true;
      user_pass_validate.classList.add("hidden")
      break;
    case "":
      user_pass_validate.classList.remove("hidden");
      user_pass_validate.classList.add("bg-warning");
      user_pass_validate.innerHTML = "You did not enter a password.";
      break;
    default:
      user_pass_validate.classList.remove("hidden");
      user_pass_validate.classList.add("bg-error");
      user_pass_validate.innerHTML = "Your password is wrong.";
  }

  // Test both
  if (confirm_user == true && confirm_pass == true) {
    test();
  }
}

/** MAIN FUNCTION */

(function main() {
  // Clear data on reload
  user_name_input.value = "";
  user_pass_input.vale = "";

  // Bind "placeholders events" to dom elements
  togglePlaceholderVisibility(user_name_input, "placeholder");
  togglePlaceholderVisibility(user_pass_input, "placeholder");
})();