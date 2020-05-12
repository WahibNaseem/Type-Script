"use strict";
var MeraMath;
(function (MeraMath) {
    var CicleSpace;
    (function (CicleSpace) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return PI * diameter;
        }
        CicleSpace.calculateCircumference = calculateCircumference;
    })(CicleSpace = MeraMath.CicleSpace || (MeraMath.CicleSpace = {}));
})(MeraMath || (MeraMath = {}));
