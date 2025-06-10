"use strict";
exports.__esModule = true;
exports.ColorsGrid = void 0;
var tokens_1 = require("@devtrust/tokens");
var polished_1 = require("polished");
function ColorsGrid() {
    return Object.entries(tokens_1.colors).map(function (_a) {
        var key = _a[0], color = _a[1];
        return (<div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontFamily: 'monospace',
                color: (0, polished_1.getContrast)(color, '#FFF') < 3.5 ? '#000' : '#FFF'
            }}>
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>);
    });
}
exports.ColorsGrid = ColorsGrid;
