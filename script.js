parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i)
                    return i(t, !0);
                if (o)
                    return o(t, !0);
                if (u && "string" == typeof t)
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND",
                c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }
            ,
            p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0,
    f.Module = function(e) {
        this.id = e,
        this.bundle = f,
        this.exports = {}
    }
    ,
    f.modules = e,
    f.cache = r,
    f.parent = o,
    f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }
        , {}]
    }
    ;
    for (var c = 0; c < t.length; c++)
        try {
            f(t[c])
        } catch (e) {
            i || (i = e)
        }
    if (t.length) {
        var l = f(t[t.length - 1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f,
    i)
        throw i;
    return f
}({
    "KAEt": [function(require, module, exports) {
        var define;
        var global = arguments[3];
        var e, t = arguments[3];
        !function(t, n) {
            "function" == typeof e && e.amd ? e([], n) : "undefined" != typeof exports ? n() : (n(),
            t.FileSaver = {})
        }(this, function() {
            "use strict";
            function e(e, t, n) {
                var o = new XMLHttpRequest;
                o.open("GET", e),
                o.responseType = "blob",
                o.onload = function() {
                    r(o.response, t, n)
                }
                ,
                o.onerror = function() {
                    console.error("could not download file")
                }
                ,
                o.send()
            }
            function n(e) {
                var t = new XMLHttpRequest;
                t.open("HEAD", e, !1);
                try {
                    t.send()
                } catch (e) {}
                return 200 <= t.status && 299 >= t.status
            }
            function o(t) {
                try {
                    t.dispatchEvent(new MouseEvent("click"))
                } catch (e) {
                    var n = document.createEvent("MouseEvents");
                    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
                    t.dispatchEvent(n)
                }
            }
            var a = "object" == typeof window && window.window === window ? window : "object" == typeof self && self.self === self ? self : "object" == typeof t && t.global === t ? t : void 0
              , i = a.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)
              , r = a.saveAs || ("object" != typeof window || window !== a ? function() {}
            : "download"in HTMLAnchorElement.prototype && !i ? function(t, i, r) {
                var s = a.URL || a.webkitURL
                  , c = document.createElement("a");
                i = i || t.name || "download",
                c.download = i,
                c.rel = "noopener",
                "string" == typeof t ? (c.href = t,
                c.origin === location.origin ? o(c) : n(c.href) ? e(t, i, r) : o(c, c.target = "_blank")) : (c.href = s.createObjectURL(t),
                setTimeout(function() {
                    s.revokeObjectURL(c.href)
                }, 4e4),
                setTimeout(function() {
                    o(c)
                }, 0))
            }
            : "msSaveOrOpenBlob"in navigator ? function(t, a, i) {
                if (a = a || t.name || "download",
                "string" != typeof t)
                    navigator.msSaveOrOpenBlob(function(e, t) {
                        return void 0 === t ? t = {
                            autoBom: !1
                        } : "object" != typeof t && (console.warn("Deprecated: Expected third argument to be a object"),
                        t = {
                            autoBom: !t
                        }),
                        t.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob(["\ufeff", e],{
                            type: e.type
                        }) : e
                    }(t, i), a);
                else if (n(t))
                    e(t, a, i);
                else {
                    var r = document.createElement("a");
                    r.href = t,
                    r.target = "_blank",
                    setTimeout(function() {
                        o(r)
                    })
                }
            }
            : function(t, n, o, r) {
                if ((r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."),
                "string" == typeof t)
                    return e(t, n, o);
                var s = "application/octet-stream" === t.type
                  , c = /constructor/i.test(a.HTMLElement) || a.safari
                  , l = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((l || s && c || i) && "undefined" != typeof FileReader) {
                    var u = new FileReader;
                    u.onloadend = function() {
                        var e = u.result;
                        e = l ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;"),
                        r ? r.location.href = e : location = e,
                        r = null
                    }
                    ,
                    u.readAsDataURL(t)
                } else {
                    var f = a.URL || a.webkitURL
                      , d = f.createObjectURL(t);
                    r ? r.location = d : location.href = d,
                    r = null,
                    setTimeout(function() {
                        f.revokeObjectURL(d)
                    }, 4e4)
                }
            }
            );
            a.saveAs = r.saveAs = r,
            "undefined" != typeof module && (module.exports = r)
        });
    }
    , {}],
    "epB2": [function(require, module, exports) {
        var e = require("file-saver")
          , t = e.saveAs
          , r = document.getElementById("canvas")
          , i = r.getContext("2d")
          , n = document.getElementById("container");
        navigator.canShare && navigator.canShare() && n.classList.add("share"),
        document.getElementById("filepicker").addEventListener("change", function(e) {
            var t = new FileReader;
            t.onload = function(e) {
                var t = new Image;
                t.onload = function() {
                    console.log(t.width, t.height),
                    document.querySelector(".preview").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e.target.result),
                    t.width > t.height ? document.querySelector(".preview").setAttribute("width", "".concat(t.width / t.height * 100, "%")) : document.querySelector(".preview").setAttribute("height", "".concat(t.height / t.width * 100, "%")),
                    n.classList.remove("step-1"),
                    n.classList.add("step-2")
                }
                ,
                t.src = e.target.result
            }
            ,
            t.readAsDataURL(e.target.files[0])
        }),
        document.getElementById("borderFilepicker").addEventListener("change", function(e) {
            var t = new FileReader;
            t.onload = function(e) {
                var t = new Image;
                t.onload = function() {
                    console.log(t.width, t.height),
                    document.querySelector(".borderPreview").setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", e.target.result),
                    t.width > t.height ? document.querySelector(".borderPreview").setAttribute("width", "".concat(t.width / t.height * 100, "%")) : document.querySelector(".borderPreview").setAttribute("height", "".concat(t.height / t.width * 100, "%"))
                }
                ,
                t.src = e.target.result
            }
            ,
            t.readAsDataURL(e.target.files[0])
        }),
        document.getElementById("borderType").addEventListener("change", function(e) {
            switch (document.querySelectorAll(".borderType").forEach(function(e) {
                return e.classList.toggle("disabled", !0)
            }),
            e.target.value) {
            case "image":
                document.querySelector(".borderType.image").classList.toggle("disabled", !1),
                document.querySelector(".borderPreview").setAttribute("visibility", "visible"),
                document.querySelector(".border").setAttribute("visibility", "hidden");
                break;
            default:
                document.querySelector(".borderType.colour").classList.toggle("disabled", !1),
                document.querySelector(".borderPreview").setAttribute("visibility", "hidden"),
                document.querySelector(".border").setAttribute("visibility", "visible")
            }
        }),
        document.getElementById("colorInput").addEventListener("change", function(e) {
            document.querySelector(".border").setAttribute("fill", e.target.value)
        }),
        document.getElementById("borderSizeInput").addEventListener("change", function(e) {
            var t = parseInt(e.target.value)
              , r = document.querySelector(".innerShape")
              , i = 46.5 * t
              , n = 46.5 * (200 - 2 * t);
            r.setAttribute("x", i),
            r.setAttribute("y", i),
            r.setAttribute("width", n),
            r.setAttribute("height", n)
        }),
        document.getElementById("download").addEventListener("click", function() {
            n.classList.remove("step-2"),
            n.classList.add("step-3");
            var e = document.querySelector("svg")
              , o = (new XMLSerializer).serializeToString(e)
              , d = window.URL || window.webkitURL || window
              , a = new Image
              , c = new Blob([o],{
                type: "image/svg+xml"
            })
              , l = d.createObjectURL(c);
            a.onload = function() {
                setTimeout(function() {
                    i.drawImage(a, 0, 0),
                    document.getElementById("result").setAttribute("src", r.toDataURL("image/png")),
                    r.toBlob(function(e) {
                        t(e, "ch-avatar.png")
                    }, "image/png")
                })
            }
            ,
            a.src = l
        }),
        document.getElementById("share").addEventListener("click", function() {
            r.toBlob(function(e) {
                navigator.share({
                    blob: e,
                    mimeType: "image/png"
                })
            }, "image/png")
        });
    }
    , {
        "file-saver": "KAEt"
    }]
}, {}, ["epB2"], null)
