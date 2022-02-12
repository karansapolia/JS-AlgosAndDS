// Call Stack game: https://frontendmasters.com/courses/practical-algorithms/call-stack-walkthrough/

const stack = [];

const callMe = () => {
  callMe();
  callMe();
  callMe("anyTime");
};

const callStackGame = (func) => {
  func();
};
