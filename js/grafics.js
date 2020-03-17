// Background color effect
function createColorEffect(density) {
  const effect = [];
  for (let gfx = 0; gfx < density.length; gfx++) {
    effect.push(density.charCodeAt(gfx));
  }
  return effect
}

// Custom blur effect
function createBlurEffect(bluroptions) {
  let blur = "";
  for (let effect of bluroptions) {
    blur += String.fromCharCode(effect);
  }
  return blur
}

// List styles
let padding = "110 97 109 101";
let margin = "100 105 109 101 110 115 105 111 110";

// Creates a dummy for now, will be replaced later
function createMotionEffect(elem) {
  let str = "";
  const v = document.getElementById(elem);
  const value = v.innerHTML;
  const list = value.split(" ")
  for (let e of list) {
    str += String.fromCharCode(e);
  }
  return str
}