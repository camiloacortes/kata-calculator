// kata-calculator.js

(function(exports) {
  "use strict";

  function KataCalculator() {
      return "";
  }

  exports.KataCalculator = KataCalculator;

  KataCalculator.prototype = {
    greets: function(target) {
      if (!target) {
        throw new Error("missing target");
      }
      return this.name + " greets " + target;
    }
  };
})(this);