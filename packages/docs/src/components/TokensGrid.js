"use strict";
exports.__esModule = true;
exports.TokensGrid = void 0;
require("../styles/tokens-grid.css");
function TokensGrid(_a) {
    var tokens = _a.tokens, _b = _a.hasRemValue, hasRemValue = _b === void 0 ? false : _b;
    return (<table className="tokens-grid">
      <thead>
        <tr>
          <th>Name</th>
          <th>Value</th>
          {hasRemValue && <th>Pixels</th>}
        </tr>
      </thead>

      <tbody>
        {Object.entries(tokens).map(function (_a) {
            var key = _a[0], value = _a[1];
            return (<tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRemValue && (<td>{Number(value.replace('rem', '')) * 16}px</td>)}
            </tr>);
        })}
      </tbody>
    </table>);
}
exports.TokensGrid = TokensGrid;
