export default {
  giveMeTrue() {
    return true;
  },
  giveMeFalse() {
    return false;
  },
  giveMe(value) {
    if (value) {
      return true;
    }
    return false;
  },
  triggerFunction(func, param) {
    return func(param);
  },
};
