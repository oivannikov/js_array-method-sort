'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    if (String(a) > String(b)) {
      return 1;
    } else if (String(a) < String(b)) {
      return -1;
    } else {
      return 0;
    }
  }) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const current = this[i];
          const next = this[j];

          this[i] = next;
          this[j] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
