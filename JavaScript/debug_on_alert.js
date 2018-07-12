var old = alert;

alert = function() {
  console.log(new Error().stack);
  debugger;
  old.apply(window, arguments);
};
