/*
 * Toggles the placeholder values of input fields
 */

(function () {

  // General function used for both input fields

  function toggleAttribute(input, attribute) {
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

  // Bind "placeholders events" to dom elements
  toggleAttribute(document.getElementById("user-name"), "placeholder")
  toggleAttribute(document.getElementById("user-pass"), "placeholder")

})();