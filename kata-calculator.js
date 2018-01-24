// kata-calculator.js

(function(exports) {
  "use strict";

  function KataCalculator() {
  }

  exports.KataCalculator = KataCalculator;

  KataCalculator.prototype = {
    add: function() {
      var addition = 0, args = arguments;

      for(var i = 0; i < args.length; i++)  {
        console.log("Adding " + args[i] + "\n");
        addition += args[i];
      }
      return addition;
    }
  };
})(this);