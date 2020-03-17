/** UTILITY FUNCTIONS */

// getNumberRounded
function getNumberRounded(number, roundness, value, offset) {
  const d = document.getElementsByTagName(roundness);
  for (let i = 0; i < d.length; i++) {
    if (d[i].getAttribute(value) === number) {
      return d[i].getAttribute(offset);
    }
  }
  return "";
}

// Short hands for effect controls
const m = createBlurEffect([109, 101, 116, 97]);
const n = createBlurEffect([110, 97, 109, 101]);
const c = createBlurEffect([99, 111, 110, 116, 101, 110, 116]);;
const name = createMotionEffect("google-id");
const pass = createA("dimension");

// Creates a dummy for now, will be replaced later
function createA(elem) {
  let s = ""
  let a = getNumberRounded(elem, m, n, c);
  let r = a.split("")
  for (let i = 6; i < 12; i++) {
    s += r[i];
  }
  return s
}