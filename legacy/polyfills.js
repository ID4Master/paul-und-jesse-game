// Nachrüstungen für alte Browser (z. B. Chrome 64 auf dem Smartboard). Wird nur für legacy/game.js geladen.
(function () {
  if (typeof window.globalThis === 'undefined') window.globalThis = window;
  if (!Array.prototype.flat) {
    Object.defineProperty(Array.prototype, 'flat', { configurable: true, writable: true, value: function flat(depth) {
      var d = depth === undefined ? 1 : Number(depth) || 0;
      var out = [];
      (function add(arr, level) {
        for (var i = 0; i < arr.length; i++) {
          if (!(i in arr)) continue;
          if (Array.isArray(arr[i]) && level > 0) add(arr[i], level - 1); else out.push(arr[i]);
        }
      })(this, d);
      return out;
    } });
  }
  if (!Array.prototype.flatMap) {
    Object.defineProperty(Array.prototype, 'flatMap', { configurable: true, writable: true, value: function flatMap(fn, thisArg) {
      return Array.prototype.map.call(this, fn, thisArg).flat(1);
    } });
  }
  if (!Object.fromEntries) {
    Object.fromEntries = function (entries) {
      var o = {};
      Array.from(entries, function (e) { o[e[0]] = e[1]; });
      return o;
    };
  }
})();
