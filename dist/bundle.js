(() => {
  var n = {
      267: (n) => {
        "use strict";
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (e += "@supports (".concat(t[4], ") {")),
                  t[2] && (e += "@media ".concat(t[2], " {")),
                  r &&
                    (e += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (e += n(t)),
                  r && (e += "}"),
                  t[2] && (e += "}"),
                  t[4] && (e += "}"),
                  e
                );
              }).join("");
            }),
            (t.i = function (n, e, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var c = 0; c < this.length; c++) {
                  var u = this[c][0];
                  null != u && (a[u] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var s = [].concat(n[l]);
                (r && a[s[0]]) ||
                  (void 0 !== i &&
                    (void 0 === s[5] ||
                      (s[1] = "@layer"
                        .concat(s[5].length > 0 ? " ".concat(s[5]) : "", " {")
                        .concat(s[1], "}")),
                    (s[5] = i)),
                  e &&
                    (s[2]
                      ? ((s[1] = "@media "
                          .concat(s[2], " {")
                          .concat(s[1], "}")),
                        (s[2] = e))
                      : (s[2] = e)),
                  o &&
                    (s[4]
                      ? ((s[1] = "@supports ("
                          .concat(s[4], ") {")
                          .concat(s[1], "}")),
                        (s[4] = o))
                      : (s[4] = "".concat(o))),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      978: (n) => {
        "use strict";
        n.exports = function (n) {
          return n[1];
        };
      },
      799: () => {
        function n(t) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      "function" == typeof Symbol &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? "symbol"
                      : typeof n;
                  }),
            n(t)
          );
        }
        function t(n, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(n, e(o.key), o);
          }
        }
        function e(t) {
          var e = (function (t) {
            if ("object" != n(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var r = e.call(t, "string");
              if ("object" != n(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(t);
          })(t);
          return "symbol" == n(e) ? e : e + "";
        }
        function r(n) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (n) {
              if (
                null === n ||
                !(function (n) {
                  try {
                    return (
                      -1 !== Function.toString.call(n).indexOf("[native code]")
                    );
                  } catch (t) {
                    return "function" == typeof n;
                  }
                })(n)
              )
                return n;
              if ("function" != typeof n)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== t) {
                if (t.has(n)) return t.get(n);
                t.set(n, e);
              }
              function e() {
                return (function (n, t, e) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, t);
                  var a = new (n.bind.apply(n, r))();
                  return e && i(a, e.prototype), a;
                })(n, arguments, a(this).constructor);
              }
              return (
                (e.prototype = Object.create(n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(e, n)
              );
            }),
            r(n)
          );
        }
        function o() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (n) {}
          return (o = function () {
            return !!n;
          })();
        }
        function i(n, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (n, t) {
                  return (n.__proto__ = t), n;
                }),
            i(n, t)
          );
        }
        function a(n) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (n) {
                  return n.__proto__ || Object.getPrototypeOf(n);
                }),
            a(n)
          );
        }
        var c = (function (e) {
          function r() {
            var t;
            return (
              (function (n, t) {
                if (!(n instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              (t = (function (t, e, r) {
                return (
                  (e = a(e)),
                  (function (t, e) {
                    if (e && ("object" == n(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (n) {
                      if (void 0 === n)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return n;
                    })(t);
                  })(
                    t,
                    o()
                      ? Reflect.construct(e, r || [], a(t).constructor)
                      : e.apply(t, r),
                  )
                );
              })(this, r)).render(),
              t
            );
          }
          return (
            (function (n, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (n.prototype = Object.create(t && t.prototype, {
                constructor: { value: n, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                t && i(n, t);
            })(r, e),
            (c = r),
            (u = [
              {
                key: "render",
                value: function () {
                  this.innerHTML =
                    '\n        \n        <div class="app-bar">\n            <div class="app-name"><span id="notes-text">Notes</span><span id="app-text">App </span></div>\n        </div>\n        \n        ';
                },
              },
            ]) && t(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(r(HTMLElement));
        customElements.define("app-bar", c);
      },
      831: () => {
        function n(t) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      "function" == typeof Symbol &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? "symbol"
                      : typeof n;
                  }),
            n(t)
          );
        }
        function t(n, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(n, e(o.key), o);
          }
        }
        function e(t) {
          var e = (function (t) {
            if ("object" != n(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var r = e.call(t, "string");
              if ("object" != n(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(t);
          })(t);
          return "symbol" == n(e) ? e : e + "";
        }
        function r(n) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (n) {
              if (
                null === n ||
                !(function (n) {
                  try {
                    return (
                      -1 !== Function.toString.call(n).indexOf("[native code]")
                    );
                  } catch (t) {
                    return "function" == typeof n;
                  }
                })(n)
              )
                return n;
              if ("function" != typeof n)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== t) {
                if (t.has(n)) return t.get(n);
                t.set(n, e);
              }
              function e() {
                return (function (n, t, e) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, t);
                  var a = new (n.bind.apply(n, r))();
                  return e && i(a, e.prototype), a;
                })(n, arguments, a(this).constructor);
              }
              return (
                (e.prototype = Object.create(n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(e, n)
              );
            }),
            r(n)
          );
        }
        function o() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (n) {}
          return (o = function () {
            return !!n;
          })();
        }
        function i(n, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (n, t) {
                  return (n.__proto__ = t), n;
                }),
            i(n, t)
          );
        }
        function a(n) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (n) {
                  return n.__proto__ || Object.getPrototypeOf(n);
                }),
            a(n)
          );
        }
        var c = (function (e) {
          function r() {
            var t;
            return (
              (function (n, t) {
                if (!(n instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              (t = (function (t, e, r) {
                return (
                  (e = a(e)),
                  (function (t, e) {
                    if (e && ("object" == n(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (n) {
                      if (void 0 === n)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return n;
                    })(t);
                  })(
                    t,
                    o()
                      ? Reflect.construct(e, r || [], a(t).constructor)
                      : e.apply(t, r),
                  )
                );
              })(this, r)).render(),
              t
            );
          }
          return (
            (function (n, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (n.prototype = Object.create(t && t.prototype, {
                constructor: { value: n, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                t && i(n, t);
            })(r, e),
            (c = r),
            (u = [
              {
                key: "render",
                value: function () {
                  this.innerHTML =
                    '\n        <div class="footer-app">\n            <h1 class="app-footer">Notes App, 2024</h1>\n            <h2 class="app-desc">Abdul Hafizh Mahfudin</h2>\n        </div>\n        \n        \n        \n        ';
                },
              },
            ]) && t(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(r(HTMLElement));
        customElements.define("footer-app", c);
      },
      309: () => {
        function n(t) {
          return (
            (n =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (n) {
                    return typeof n;
                  }
                : function (n) {
                    return n &&
                      "function" == typeof Symbol &&
                      n.constructor === Symbol &&
                      n !== Symbol.prototype
                      ? "symbol"
                      : typeof n;
                  }),
            n(t)
          );
        }
        function t(n, t) {
          for (var r = 0; r < t.length; r++) {
            var o = t[r];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              Object.defineProperty(n, e(o.key), o);
          }
        }
        function e(t) {
          var e = (function (t) {
            if ("object" != n(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var r = e.call(t, "string");
              if ("object" != n(r)) return r;
              throw new TypeError(
                "@@toPrimitive must return a primitive value.",
              );
            }
            return String(t);
          })(t);
          return "symbol" == n(e) ? e : e + "";
        }
        function r(n) {
          var t = "function" == typeof Map ? new Map() : void 0;
          return (
            (r = function (n) {
              if (
                null === n ||
                !(function (n) {
                  try {
                    return (
                      -1 !== Function.toString.call(n).indexOf("[native code]")
                    );
                  } catch (t) {
                    return "function" == typeof n;
                  }
                })(n)
              )
                return n;
              if ("function" != typeof n)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              if (void 0 !== t) {
                if (t.has(n)) return t.get(n);
                t.set(n, e);
              }
              function e() {
                return (function (n, t, e) {
                  if (o()) return Reflect.construct.apply(null, arguments);
                  var r = [null];
                  r.push.apply(r, t);
                  var a = new (n.bind.apply(n, r))();
                  return e && i(a, e.prototype), a;
                })(n, arguments, a(this).constructor);
              }
              return (
                (e.prototype = Object.create(n.prototype, {
                  constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                })),
                i(e, n)
              );
            }),
            r(n)
          );
        }
        function o() {
          try {
            var n = !Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            );
          } catch (n) {}
          return (o = function () {
            return !!n;
          })();
        }
        function i(n, t) {
          return (
            (i = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (n, t) {
                  return (n.__proto__ = t), n;
                }),
            i(n, t)
          );
        }
        function a(n) {
          return (
            (a = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (n) {
                  return n.__proto__ || Object.getPrototypeOf(n);
                }),
            a(n)
          );
        }
        var c = (function (e) {
          function r() {
            var t;
            return (
              (function (n, t) {
                if (!(n instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, r),
              (t = (function (t, e, r) {
                return (
                  (e = a(e)),
                  (function (t, e) {
                    if (e && ("object" == n(e) || "function" == typeof e))
                      return e;
                    if (void 0 !== e)
                      throw new TypeError(
                        "Derived constructors may only return object or undefined",
                      );
                    return (function (n) {
                      if (void 0 === n)
                        throw new ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return n;
                    })(t);
                  })(
                    t,
                    o()
                      ? Reflect.construct(e, r || [], a(t).constructor)
                      : e.apply(t, r),
                  )
                );
              })(this, r)).render(),
              t
            );
          }
          return (
            (function (n, t) {
              if ("function" != typeof t && null !== t)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (n.prototype = Object.create(t && t.prototype, {
                constructor: { value: n, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(n, "prototype", { writable: !1 }),
                t && i(n, t);
            })(r, e),
            (c = r),
            (u = [
              {
                key: "render",
                value: function () {
                  this.innerHTML =
                    '\n        <div id="form-spin">\n        <form id="form">\n          <div class="form-title">\n            <label for="title">Judul catatan</label>\n            <input\n              type="text"\n              name="title-note"\n              id="title-note"\n              required\n              minlength="3"\n              aria-describedby="inputValidation"\n            />\n            <p id="inputValidation" class="validation-message"></p>\n          </div>\n          \n\n          <div class="form-body">\n            <label for="note">Catatan</label>\n            <textarea cols="1000" name="body-note" id="body-note"></textarea>\n          </div>\n          <div class="form-button">\n            <button class="button submit-button">Simpan catatan</button>\n          </div>\n        </form>\n      </div>';
                },
              },
            ]) && t(c.prototype, u),
            Object.defineProperty(c, "prototype", { writable: !1 }),
            c
          );
          var c, u;
        })(r(HTMLElement));
        customElements.define("note-form", c);
      },
      607: (n, t, e) => {
        "use strict";
        e.d(t, { A: () => c });
        var r = e(978),
          o = e.n(r),
          i = e(267),
          a = e.n(i)()(o());
        a.push([
          n.id,
          '* {\n  margin: 0.2em;\n  box-sizing: border-box;\n  font-family: "Quicksand", sans-serif;\n  font-style: normal;\n\n}\n\nbody {\n  grid-template-columns: 1fr;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n/* main {\n  display: grid;\n  grid-template-columns: 1fr;\n  height: auto;\n}  */\n\nfooter{\n  height: auto;\n  background-color: #C8CFA0;\n  border-radius: 5px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\ninput:focus-visible {\n  appearance: none;\n  outline: none;\n\n  box-shadow: 0 0 0 6px #FCDC94;\n}\n\ninput[type="text"] {\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border-radius: 4px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\ninput[type="text"]:focus {\n  background-color: #FCDC94;\n}\n\n#body-note{\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n#body-note:focus {\n  background-color: #FCDC94;\n}\n\ninput[type="textarea"] {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  box-sizing: border-box;\n  border-radius: 4px;\n\n}\n\ninput {\n  background-color: #C8CFA0;\n}\n\ntextarea:focus-visible {\n  appearance: none;\n  outline: none;\n\n  box-shadow: 0 0 0 6px #FCDC94;\n}\ntextarea {\n  background-color: #C8CFA0;\n  height: 150px;\n  \n}\n\n.input-error {\n  box-shadow: red;\n}\n\nlabel:has(+ input:focus-visible) {\n  font-weight: bold;\n}\n\n.app-bar {\n  /* display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: 100px;\n  gap: 10px;\n  justify-content: space-evenly;\n  justify-items: center; */\n  text-align: center;\n  align-content: space-evenly;\n  background-color: #C8CFA0;\n  font-size: 25px;\n  border-radius: 15px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n/* .app-name {\n  justify-self: center;\n} */\n\n.button {\n  background-color: green; /* Green */\n  border: none;\n  color:#8AA7AD;\n  padding: 16px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  margin: 4px 2px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n.add-note-button{\n  background-color: #FCDC94; \n  color: black; \n  border: 2px solid #8AA7AD;\n}\n\n.add-note-button:hover {\n  background-color: #78ABA8;\n  color: white;\n}\n\n#notes-text{\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n#notes-text:hover{\n  color: #EF9C66;\n}\n#app-text{\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n#app-text:hover{\n  color: #EF9C66;\n}\n\n.submit-button{\n  background-color: #FCDC94;\n  color: black; \n  border: 2px solid #8AA7AD;\n}\n\n.submit-button:hover {\n  background-color: #78ABA8;\n  color: white;\n}\n\n#form {\n  display: grid;\n  grid-template-rows: 0.1fr;\n  border-radius: 25px;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: #EF9C66;\n  height: 100%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  /* width: 500px;\n  height: 500px; */\n}\n\n.form-body {\n  display: grid;\n  gap: 10px;\n}\n\nlabel {\n  justify-self: center;\n  align-self: center;\n}\n\n.form-title {\n  display: grid;\n  grid-template-rows: 1fr 2fr 1fr;\n  gap: 10px;\n}\n\n#inputValidation {\n  margin-block-start: 0.5rem;\n  color: white;\n}\n\ntextarea {\n  max-width: 36em;\n  resize: vertical;\n}\n\n.span-form-verif {\n  justify-items: start;\n}\n\n.form-button {\n  justify-self: center;\n}\n\n.main-form {\n  display: grid;\n  grid-template-columns: 4fr;\n  grid-template-rows: 2fr 2fr 2fr 2fr;\n  gap: 10px;\n}\n\n#title_required {\n  color: #FCDC94;\n}\n/* end */\n\n.none {\n  display: none;\n\n}\n\n.visible {\n  display: visible;\n}\n\n/* .notes{\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 3fr;\n} */\n/* \n.note-kosong{\n  width: 200px;\n  height: 200px;\n} */\n\n.note-data {\n  height: max-content;\n}\n\n.noteListContainer {\n  display: grid;\n  /* grid-template-columns: 1fr 1fr 1fr 1fr; */\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));  \n  align-items: center;\n  gap: 5px;\n  background-color: #EF9C66;\n  border-radius: 15px;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.container-list-note{\n  background-color:#C8CFA0;\n  border-radius: 15px;\n  gap: 2.5px;\n  padding: 10px;\n  height: fit-content;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\n.container-list-note:hover{\n  background-color:#FCDC94;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  /* transition-duration: 0.4s; */\n}\n\n.container-note{\n  display: grid;\n  grid-template-columns: 1fr ;\n  grid-template-rows: 0.5fr 0.1fr 3fr 0fr;\n}\n\nh1{\n  font-size: 18px;\n}\n\nh2{\n  font-size: 28px;\n  transition-duration: 0.4s;\n  cursor: pointer;\n}\n\nh3{\n  font-size: 13px;\n}\n\nh2:hover{\n  font-weight: bold;\n}\n.hidden{\n  visibility: hidden;\n}\n\n/* .footer-app {\n  display: grid;\n  grid-template-columns: 4fr;\n  grid-template-columns: 2fr;\n  gap: 10px;\n} */\n',
          "",
        ]);
        const c = a;
      },
      72: (n) => {
        "use strict";
        var t = [];
        function e(n) {
          for (var e = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === n) {
              e = r;
              break;
            }
          return e;
        }
        function r(n, r) {
          for (var i = {}, a = [], c = 0; c < n.length; c++) {
            var u = n[c],
              l = r.base ? u[0] + r.base : u[0],
              s = i[l] || 0,
              p = "".concat(l, " ").concat(s);
            i[l] = s + 1;
            var d = e(p),
              f = {
                css: u[1],
                media: u[2],
                sourceMap: u[3],
                supports: u[4],
                layer: u[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(f);
            else {
              var y = o(f, r);
              (r.byIndex = c),
                t.splice(c, 0, { identifier: p, updater: y, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function o(n, t) {
          var e = t.domAPI(t);
          return (
            e.update(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap &&
                  t.supports === n.supports &&
                  t.layer === n.layer
                )
                  return;
                e.update((n = t));
              } else e.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var c = e(i[a]);
              t[c].references--;
            }
            for (var u = r(n, o), l = 0; l < i.length; l++) {
              var s = e(i[l]);
              0 === t[s].references && (t[s].updater(), t.splice(s, 1));
            }
            i = u;
          };
        };
      },
      659: (n) => {
        "use strict";
        var t = {};
        n.exports = function (n, e) {
          var r = (function (n) {
            if (void 0 === t[n]) {
              var e = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                e instanceof window.HTMLIFrameElement
              )
                try {
                  e = e.contentDocument.head;
                } catch (n) {
                  e = null;
                }
              t[n] = e;
            }
            return t[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(e);
        };
      },
      540: (n) => {
        "use strict";
        n.exports = function (n) {
          var t = document.createElement("style");
          return n.setAttributes(t, n.attributes), n.insert(t, n.options), t;
        };
      },
      56: (n, t, e) => {
        "use strict";
        n.exports = function (n) {
          var t = e.nc;
          t && n.setAttribute("nonce", t);
        };
      },
      825: (n) => {
        "use strict";
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = n.insertStyleElement(n);
          return {
            update: function (e) {
              !(function (n, t, e) {
                var r = "";
                e.supports && (r += "@supports (".concat(e.supports, ") {")),
                  e.media && (r += "@media ".concat(e.media, " {"));
                var o = void 0 !== e.layer;
                o &&
                  (r += "@layer".concat(
                    e.layer.length > 0 ? " ".concat(e.layer) : "",
                    " {",
                  )),
                  (r += e.css),
                  o && (r += "}"),
                  e.media && (r += "}"),
                  e.supports && (r += "}");
                var i = e.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */",
                    )),
                  t.styleTagTransform(r, n, t.options);
              })(t, n, e);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(t);
            },
          };
        };
      },
      113: (n) => {
        "use strict";
        n.exports = function (n, t) {
          if (t.styleSheet) t.styleSheet.cssText = n;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        };
      },
    },
    t = {};
  function e(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, exports: {} });
    return n[r](i, i.exports, e), i.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var r in t)
        e.o(t, r) &&
          !e.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: t[r] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (e.nc = void 0),
    (() => {
      "use strict";
      function n(t) {
        return (
          (n =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    "function" == typeof Symbol &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? "symbol"
                    : typeof n;
                }),
          n(t)
        );
      }
      function t(n, t) {
        for (var e = 0; e < t.length; e++) {
          var o = t[e];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            "value" in o && (o.writable = !0),
            Object.defineProperty(n, r(o.key), o);
        }
      }
      function r(t) {
        var e = (function (t) {
          if ("object" != n(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var r = e.call(t, "string");
            if ("object" != n(r)) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return String(t);
        })(t);
        return "symbol" == n(e) ? e : e + "";
      }
      e(799), e(831), e(309);
      var o = [
        {
          id: "notes-jT-jjsyz61J8XKiI",
          title: "Welcome to Notes, Dimas!",
          body: "Welcome to Notes! This is your first note. You can archive it, delete it, or create new ones.",
          createdAt: "2022-07-28T10:03:12.594Z",
          archived: !1,
        },
        {
          id: "notes-aB-cdefg12345",
          title: "Meeting Agenda",
          body: "Discuss project updates and assign tasks for the upcoming week.",
          createdAt: "2022-08-05T15:30:00.000Z",
          archived: !1,
        },
        {
          id: "notes-XyZ-789012345",
          title: "Shopping List",
          body: "Milk, eggs, bread, fruits, and vegetables.",
          createdAt: "2022-08-10T08:45:23.120Z",
          archived: !1,
        },
        {
          id: "notes-1a-2b3c4d5e6f",
          title: "Personal Goals",
          body: "Read two books per month, exercise three times a week, learn a new language.",
          createdAt: "2022-08-15T18:12:55.789Z",
          archived: !1,
        },
        {
          id: "notes-LMN-456789",
          title: "Recipe: Spaghetti Bolognese",
          body: "Ingredients: ground beef, tomatoes, onions, garlic, pasta. Steps:...",
          createdAt: "2022-08-20T12:30:40.200Z",
          archived: !1,
        },
        {
          id: "notes-QwErTyUiOp",
          title: "Workout Routine",
          body: "Monday: Cardio, Tuesday: Upper body, Wednesday: Rest, Thursday: Lower body, Friday: Cardio.",
          createdAt: "2022-08-25T09:15:17.890Z",
          archived: !1,
        },
        {
          id: "notes-abcdef-987654",
          title: "Book Recommendations",
          body: "1. 'The Alchemist' by Paulo Coelho\n2. '1984' by George Orwell\n3. 'To Kill a Mockingbird' by Harper Lee",
          createdAt: "2022-09-01T14:20:05.321Z",
          archived: !1,
        },
        {
          id: "notes-zyxwv-54321",
          title: "Daily Reflections",
          body: "Write down three positive things that happened today and one thing to improve tomorrow.",
          createdAt: "2022-09-07T20:40:30.150Z",
          archived: !1,
        },
        {
          id: "notes-poiuyt-987654",
          title: "Travel Bucket List",
          body: "1. Paris, France\n2. Kyoto, Japan\n3. Santorini, Greece\n4. New York City, USA",
          createdAt: "2022-09-15T11:55:44.678Z",
          archived: !1,
        },
        {
          id: "notes-asdfgh-123456",
          title: "Coding Projects",
          body: "1. Build a personal website\n2. Create a mobile app\n3. Contribute to an open-source project",
          createdAt: "2022-09-20T17:10:12.987Z",
          archived: !1,
        },
        {
          id: "notes-5678-abcd-efgh",
          title: "Project Deadline",
          body: "Complete project tasks by the deadline on October 1st.",
          createdAt: "2022-09-28T14:00:00.000Z",
          archived: !1,
        },
        {
          id: "notes-9876-wxyz-1234",
          title: "Health Checkup",
          body: "Schedule a routine health checkup with the doctor.",
          createdAt: "2022-10-05T09:30:45.600Z",
          archived: !1,
        },
        {
          id: "notes-qwerty-8765-4321",
          title: "Financial Goals",
          body: "1. Create a monthly budget\n2. Save 20% of income\n3. Invest in a retirement fund.",
          createdAt: "2022-10-12T12:15:30.890Z",
          archived: !1,
        },
        {
          id: "notes-98765-54321-12345",
          title: "Holiday Plans",
          body: "Research and plan for the upcoming holiday destination.",
          createdAt: "2022-10-20T16:45:00.000Z",
          archived: !1,
        },
        {
          id: "notes-1234-abcd-5678",
          title: "Language Learning",
          body: "Practice Spanish vocabulary for 30 minutes every day.",
          createdAt: "2022-10-28T08:00:20.120Z",
          archived: !1,
        },
      ];
      function i(n, t) {
        (null == t || t > n.length) && (t = n.length);
        for (var e = 0, r = Array(t); e < t; e++) r[e] = n[e];
        return r;
      }
      console.log(o);
      var a = (function () {
        return (
          (n = function n() {
            !(function (n, t) {
              if (!(n instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, n);
          }),
          (e = [
            {
              key: "getAll",
              value: function () {
                return o;
              },
            },
          ]),
          null && t(n.prototype, null),
          e && t(n, e),
          Object.defineProperty(n, "prototype", { writable: !1 }),
          n
        );
        var n, e;
      })().getAll();
      var c = e(72),
        u = e.n(c),
        l = e(825),
        s = e.n(l),
        p = e(659),
        d = e.n(p),
        f = e(56),
        y = e.n(f),
        b = e(540),
        m = e.n(b),
        v = e(113),
        h = e.n(v),
        g = e(607),
        x = {};
      (x.styleTagTransform = h()),
        (x.setAttributes = y()),
        (x.insert = d().bind(null, "head")),
        (x.domAPI = s()),
        (x.insertStyleElement = m()),
        u()(g.A, x),
        g.A && g.A.locals && g.A.locals,
        (function () {
          function n(n) {
            var t = document.createElement("h1");
            t.innerText = n.title;
            var e = document.createElement("h3"),
              r = new Date(n.createdAt).toLocaleString();
            e.innerText = "Dibuat pada tanggal ".concat(r);
            var o = document.createElement("h2");
            o.innerText = n.body;
            var i = document.createElement("p");
            (i.innerText = n.archived), i.classList.add("hidden");
            var a = document.createElement("div");
            a.classList.add("container-note"), a.append(t, e, o, i);
            var c = document.createElement("div");
            return (
              c.classList.add("container-list-note"),
              c.append(a),
              c.setAttribute("id", "note-".concat(n.id)),
              c
            );
          }
          document
            .getElementById("form")
            .addEventListener("submit", function (n) {
              var t;
              submit.preventDefault(),
                (t = {
                  id: "notes-".concat(Math.random().toString(36).substr(2, 9)),
                  title: document.getElementById("title-note").value,
                  body: document.getElementById("body-note").value,
                  createdAt: new Date().toISOString(),
                  archived: !1,
                }),
                a.push(t),
                document.dispatchEvent(new Event(RENDER_EVENT));
            });
          var t = document.querySelector("form"),
            e = document.querySelector("input");
          t.addEventListener("submit", function (n) {
            return n.preventDefault();
          });
          var r = function (n) {
            n.target.setCustomValidity(""),
              n.target.validity.valueMissing
                ? n.target.setCustomValidity(
                    "Wajib diisi, jangan dikosongin yak!",
                  )
                : n.target.validity.tooShort &&
                  n.target.setCustomValidity("Diisi minimal 3 karakter yak!");
          };
          e.addEventListener("change", r),
            e.addEventListener("invalid", r),
            e.addEventListener("blur", function (n) {
              var t = n.target.validity.valid,
                e = n.target.validationMessage,
                r = inputValidation
                  ? document.getElementById("inputValidation")
                  : null;
              r && e && !t
                ? ((r.innerText = e), console.log(e))
                : (r.innerText = "");
            }),
            console.log(a);
          var o = document.getElementById("note-list-container");
          o.innerHTML = "";
          var c,
            u = (function (n, t) {
              var e =
                ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                n["@@iterator"];
              if (!e) {
                if (
                  Array.isArray(n) ||
                  (e = (function (n, t) {
                    if (n) {
                      if ("string" == typeof n) return i(n, t);
                      var e = {}.toString.call(n).slice(8, -1);
                      return (
                        "Object" === e &&
                          n.constructor &&
                          (e = n.constructor.name),
                        "Map" === e || "Set" === e
                          ? Array.from(n)
                          : "Arguments" === e ||
                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                            ? i(n, t)
                            : void 0
                      );
                    }
                  })(n)) ||
                  (t && n && "number" == typeof n.length)
                ) {
                  e && (n = e);
                  var r = 0,
                    o = function () {};
                  return {
                    s: o,
                    n: function () {
                      return r >= n.length
                        ? { done: !0 }
                        : { done: !1, value: n[r++] };
                    },
                    e: function (n) {
                      throw n;
                    },
                    f: o,
                  };
                }
                throw new TypeError(
                  "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                );
              }
              var a,
                c = !0,
                u = !1;
              return {
                s: function () {
                  e = e.call(n);
                },
                n: function () {
                  var n = e.next();
                  return (c = n.done), n;
                },
                e: function (n) {
                  (u = !0), (a = n);
                },
                f: function () {
                  try {
                    c || null == e.return || e.return();
                  } finally {
                    if (u) throw a;
                  }
                },
              };
            })(a);
          try {
            for (u.s(); !(c = u.n()).done; ) {
              var l = n(c.value);
              o.append(l);
            }
          } catch (n) {
            u.e(n);
          } finally {
            u.f();
          }
        })();
    })();
})();
