! function (n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return n(t, window, document)
    }) : "object" == typeof exports ? module.exports = function (t, e) {
        return t = t || window, e = e || ("undefined" != typeof window ? require("jquery") : require("jquery")(t)), n(e, t, t.document)
    } : n(jQuery, window, document)
}(function (W, F, v, z) {
    "use strict";

    function r(t) {
        return !t || !0 === t || "-" === t
    }

    function h(t) {
        var e = parseInt(t, 10);
        return !isNaN(e) && isFinite(t) ? e : null
    }

    function a(t, e) {
        return n[e] || (n[e] = new RegExp(Tt(e), "g")), "string" == typeof t && "." !== e ? t.replace(/\./g, "").replace(n[e], ".") : t
    }

    function o(t, e, n) {
        var o = "string" == typeof t;
        return !!r(t) || (e && o && (t = a(t, e)), n && o && (t = t.replace(u, "")), !isNaN(parseFloat(t)) && isFinite(t))
    }

    function i(t, e, n) {
        return !!r(t) || (function (t) {
            return r(t) || "string" == typeof t
        }(t) && !!o(f(t), e, n) || null)
    }

    function m(t, e, n, o) {
        var r = [],
            a = 0,
            i = e.length;
        if (o !== z)
            for (; a < i; a++) t[e[a]][n] && r.push(t[e[a]][n][o]);
        else
            for (; a < i; a++) r.push(t[e[a]][n]);
        return r
    }

    function p(t, e) {
        var n, o = [];
        e === z ? (e = 0, n = t) : (n = e, e = t);
        for (var r = e; r < n; r++) o.push(r);
        return o
    }

    function b(t) {
        for (var e = [], n = 0, o = t.length; n < o; n++) t[n] && e.push(t[n]);
        return e
    }
    var g, y, e, t, I = function (T) {
        this.$ = function (t, e) {
            return this.api(!0).$(t, e)
        }, this._ = function (t, e) {
            return this.api(!0).rows(t, e).data()
        }, this.api = function (t) {
            return new y(t ? ae(this[g.iApiIndex]) : this)
        }, this.fnAddData = function (t, e) {
            var n = this.api(!0),
                o = W.isArray(t) && (W.isArray(t[0]) || W.isPlainObject(t[0])) ? n.rows.add(t) : n.row.add(t);
            return e !== z && !e || n.draw(), o.flatten().toArray()
        }, this.fnAdjustColumnSizing = function (t) {
            var e = this.api(!0).columns.adjust(),
                n = e.settings()[0],
                o = n.oScroll;
            t === z || t ? e.draw(!1) : "" === o.sX && "" === o.sY || Mt(n)
        }, this.fnClearTable = function (t) {
            var e = this.api(!0).clear();
            t !== z && !t || e.draw()
        }, this.fnClose = function (t) {
            this.api(!0).row(t).child.hide()
        }, this.fnDeleteRow = function (t, e, n) {
            var o = this.api(!0),
                r = o.rows(t),
                a = r.settings()[0],
                i = a.aoData[r[0][0]];
            return r.remove(), e && e.call(this, a, i), n !== z && !n || o.draw(), i
        }, this.fnDestroy = function (t) {
            this.api(!0).destroy(t)
        }, this.fnDraw = function (t) {
            this.api(!0).draw(t)
        }, this.fnFilter = function (t, e, n, o, r, a) {
            var i = this.api(!0);
            null === e || e === z ? i.search(t, n, o, a) : i.column(e).search(t, n, o, a), i.draw()
        }, this.fnGetData = function (t, e) {
            var n = this.api(!0);
            if (t === z) return n.data().toArray();
            var o = t.nodeName ? t.nodeName.toLowerCase() : "";
            return e !== z || "td" == o || "th" == o ? n.cell(t, e).data() : n.row(t).data() || null
        }, this.fnGetNodes = function (t) {
            var e = this.api(!0);
            return t !== z ? e.row(t).node() : e.rows().nodes().flatten().toArray()
        }, this.fnGetPosition = function (t) {
            var e = this.api(!0),
                n = t.nodeName.toUpperCase();
            if ("TR" == n) return e.row(t).index();
            if ("TD" != n && "TH" != n) return null;
            var o = e.cell(t).index();
            return [o.row, o.columnVisible, o.column]
        }, this.fnIsOpen = function (t) {
            return this.api(!0).row(t).child.isShown()
        }, this.fnOpen = function (t, e, n) {
            return this.api(!0).row(t).child(e, n).show().child()[0]
        }, this.fnPageChange = function (t, e) {
            var n = this.api(!0).page(t);
            e !== z && !e || n.draw(!1)
        }, this.fnSetColumnVis = function (t, e, n) {
            var o = this.api(!0).column(t).visible(e);
            n !== z && !n || o.columns.adjust().draw()
        }, this.fnSettings = function () {
            return ae(this[g.iApiIndex])
        }, this.fnSort = function (t) {
            this.api(!0).order(t).draw()
        }, this.fnSortListener = function (t, e, n) {
            this.api(!0).order.listener(t, e, n)
        }, this.fnUpdate = function (t, e, n, o, r) {
            var a = this.api(!0);
            return n === z || null === n ? a.row(e).data(t) : a.cell(e, n).data(t), r !== z && !r || a.columns.adjust(), o !== z && !o || a.draw(), 0
        }, this.fnVersionCheck = g.fnVersionCheck;
        var C = this,
            S = T === z,
            D = this.length;
        for (var t in S && (T = {}), this.oApi = this.internal = g.internal, I.ext.internal) t && (this[t] = He(t));
        return this.each(function () {
            var a, i = 1 < D ? le({}, T, !0) : T,
                s = 0,
                t = this.getAttribute("id"),
                l = !1,
                e = I.defaults,
                d = W(this);
            if ("table" == this.nodeName.toLowerCase()) {
                k(e), N(e.column), R(e, e, !0), R(e.column, e.column, !0), R(e, W.extend(i, d.data()));
                var n = I.settings;
                for (s = 0, a = n.length; s < a; s++) {
                    var o = n[s];
                    if (o.nTable == this || o.nTHead && o.nTHead.parentNode == this || o.nTFoot && o.nTFoot.parentNode == this) {
                        var r = i.bRetrieve !== z ? i.bRetrieve : e.bRetrieve,
                            c = i.bDestroy !== z ? i.bDestroy : e.bDestroy;
                        if (S || r) return o.oInstance;
                        if (c) {
                            o.oInstance.fnDestroy();
                            break
                        }
                        return void ie(o, 0, "Cannot reinitialise DataTable", 3)
                    }
                    if (o.sTableId == this.id) {
                        n.splice(s, 1);
                        break
                    }
                }
                null !== t && "" !== t || (t = "DataTables_Table_" + I.ext._unique++ , this.id = t);
                var u = W.extend(!0, {}, I.models.oSettings, {
                    sDestroyWidth: d[0].style.width,
                    sInstance: t,
                    sTableId: t
                });
                u.nTable = this, u.oApi = C.internal, u.oInit = i, n.push(u), u.oInstance = 1 === C.length ? C : d.dataTable(), k(i), A(i.oLanguage), i.aLengthMenu && !i.iDisplayLength && (i.iDisplayLength = W.isArray(i.aLengthMenu[0]) ? i.aLengthMenu[0][0] : i.aLengthMenu[0]), i = le(W.extend(!0, {}, e), i), se(u.oFeatures, i, ["bPaginate", "bLengthChange", "bFilter", "bSort", "bSortMulti", "bInfo", "bProcessing", "bAutoWidth", "bSortClasses", "bServerSide", "bDeferRender"]), se(u, i, ["asStripeClasses", "ajax", "fnServerData", "fnFormatNumber", "sServerMethod", "aaSorting", "aaSortingFixed", "aLengthMenu", "sPaginationType", "sAjaxSource", "sAjaxDataProp", "iStateDuration", "sDom", "bSortCellsTop", "iTabIndex", "fnStateLoadCallback", "fnStateSaveCallback", "renderer", "searchDelay", "rowId", ["iCookieDuration", "iStateDuration"],
                    ["oSearch", "oPreviousSearch"],
                    ["aoSearchCols", "aoPreSearchCols"],
                    ["iDisplayLength", "_iDisplayLength"]
                ]), se(u.oScroll, i, [
                    ["sScrollX", "sX"],
                    ["sScrollXInner", "sXInner"],
                    ["sScrollY", "sY"],
                    ["bScrollCollapse", "bCollapse"]
                ]), se(u.oLanguage, i, "fnInfoCallback"), ce(u, "aoDrawCallback", i.fnDrawCallback, "user"), ce(u, "aoServerParams", i.fnServerParams, "user"), ce(u, "aoStateSaveParams", i.fnStateSaveParams, "user"), ce(u, "aoStateLoadParams", i.fnStateLoadParams, "user"), ce(u, "aoStateLoaded", i.fnStateLoaded, "user"), ce(u, "aoRowCallback", i.fnRowCallback, "user"), ce(u, "aoRowCreatedCallback", i.fnCreatedRow, "user"), ce(u, "aoHeaderCallback", i.fnHeaderCallback, "user"), ce(u, "aoFooterCallback", i.fnFooterCallback, "user"), ce(u, "aoInitComplete", i.fnInitComplete, "user"), ce(u, "aoPreDrawCallback", i.fnPreDrawCallback, "user"), u.rowIdFn = K(i.rowId), L(u);
                var f = u.oClasses;
                if (W.extend(f, I.ext.classes, i.oClasses), d.addClass(f.sTable), u.iInitDisplayStart === z && (u.iInitDisplayStart = i.iDisplayStart, u._iDisplayStart = i.iDisplayStart), null !== i.iDeferLoading) {
                    u.bDeferLoading = !0;
                    var h = W.isArray(i.iDeferLoading);
                    u._iRecordsDisplay = h ? i.iDeferLoading[0] : i.iDeferLoading, u._iRecordsTotal = h ? i.iDeferLoading[1] : i.iDeferLoading
                }
                var p = u.oLanguage;
                W.extend(!0, p, i.oLanguage), p.sUrl && (W.ajax({
                    dataType: "json",
                    url: p.sUrl,
                    success: function (t) {
                        A(t), R(e.oLanguage, t), W.extend(!0, p, t), Nt(u)
                    },
                    error: function () {
                        Nt(u)
                    }
                }), l = !0), null === i.asStripeClasses && (u.asStripeClasses = [f.sStripeOdd, f.sStripeEven]);
                var m = u.asStripeClasses,
                    b = d.children("tbody").find("tr").eq(0); - 1 !== W.inArray(!0, W.map(m, function (t, e) {
                        return b.hasClass(t)
                    })) && (W("tbody tr", this).removeClass(m.join(" ")), u.asDestroyStripes = m.slice());
                var g, v = [],
                    y = this.getElementsByTagName("thead");
                if (0 !== y.length && (ct(u.aoHeader, y[0]), v = ut(u)), null === i.aoColumns)
                    for (g = [], s = 0, a = v.length; s < a; s++) g.push(null);
                else g = i.aoColumns;
                for (s = 0, a = g.length; s < a; s++) H(u, v ? v[s] : null);
                if (P(u, i.aoColumnDefs, g, function (t, e) {
                    B(u, t, e)
                }), b.length) {
                    var w = function (t, e) {
                        return null !== t.getAttribute("data-" + e) ? e : null
                    };
                    W(b[0]).children("th, td").each(function (t, e) {
                        var n = u.aoColumns[t];
                        if (n.mData === t) {
                            var o = w(e, "sort") || w(e, "order"),
                                r = w(e, "filter") || w(e, "search");
                            null === o && null === r || (n.mData = {
                                _: t + ".display",
                                sort: null !== o ? t + ".@data-" + o : z,
                                type: null !== o ? t + ".@data-" + o : z,
                                filter: null !== r ? t + ".@data-" + r : z
                            }, B(u, t))
                        }
                    })
                }
                var x = u.oFeatures,
                    _ = function () {
                        if (i.aaSorting === z) {
                            var t = u.aaSorting;
                            for (s = 0, a = t.length; s < a; s++) t[s][1] = u.aoColumns[s].asSorting[0]
                        }
                        ee(u), x.bSort && ce(u, "aoDrawCallback", function () {
                            if (u.bSorted) {
                                var t = Kt(u),
                                    n = {};
                                W.each(t, function (t, e) {
                                    n[e.src] = e.dir
                                }), ue(u, null, "order", [u, t, n]), Qt(u)
                            }
                        }), ce(u, "aoDrawCallback", function () {
                            (u.bSorted || "ssp" === pe(u) || x.bDeferRender) && ee(u)
                        }, "sc");
                        var e = d.children("caption").each(function () {
                            this._captionSide = W(this).css("caption-side")
                        }),
                            n = d.children("thead");
                        0 === n.length && (n = W("<thead/>").appendTo(d)), u.nTHead = n[0];
                        var o = d.children("tbody");
                        0 === o.length && (o = W("<tbody/>").appendTo(d)), u.nTBody = o[0];
                        var r = d.children("tfoot");
                        if (0 === r.length && 0 < e.length && ("" !== u.oScroll.sX || "" !== u.oScroll.sY) && (r = W("<tfoot/>").appendTo(d)), 0 === r.length || 0 === r.children().length ? d.addClass(f.sNoFooter) : 0 < r.length && (u.nTFoot = r[0], ct(u.aoFooter, u.nTFoot)), i.aaData)
                            for (s = 0; s < i.aaData.length; s++) q(u, i.aaData[s]);
                        else !u.bDeferLoading && "dom" != pe(u) || E(u, W(u.nTBody).children("tr"));
                        u.aiDisplay = u.aiDisplayMaster.slice(), !(u.bInitialised = !0) === l && Nt(u)
                    };
                i.bStateSave ? (x.bStateSave = !0, ce(u, "aoDrawCallback", oe, "state_save"), re(u, i, _)) : _()
            } else ie(null, 0, "Non-table node initialisation (" + this.nodeName + ")", 2)
        }), C = null, this
    },
        n = {},
        s = /[\r\n]/g,
        l = /<.*?>/g,
        d = /^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,
        c = new RegExp("(\\" + ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^", "-"].join("|\\") + ")", "g"),
        u = /[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,
        V = function (t, e, n) {
            var o = [],
                r = 0,
                a = t.length;
            if (n !== z)
                for (; r < a; r++) t[r] && t[r][e] && o.push(t[r][e][n]);
            else
                for (; r < a; r++) t[r] && o.push(t[r][e]);
            return o
        },
        f = function (t) {
            return t.replace(l, "")
        },
        w = function (t) {
            if (function (t) {
                if (t.length < 2) return !0;
                for (var e = t.slice().sort(), n = e[0], o = 1, r = e.length; o < r; o++) {
                    if (e[o] === n) return !1;
                    n = e[o]
                }
                return !0
            }(t)) return t.slice();
            var e, n, o, r = [],
                a = t.length,
                i = 0;
            t: for (n = 0; n < a; n++) {
                for (e = t[n], o = 0; o < i; o++)
                    if (r[o] === e) continue t;
                r.push(e), i++
            }
            return r
        };

    function x(n) {
        var o, r, a = {};
        W.each(n, function (t, e) {
            (o = t.match(/^([^A-Z]+?)([A-Z])/)) && -1 !== "a aa ai ao as b fn i m o s ".indexOf(o[1] + " ") && (r = t.replace(o[0], o[2].toLowerCase()), a[r] = t, "o" === o[1] && x(n[t]))
        }), n._hungarianMap = a
    }

    function R(n, o, r) {
        var a;
        n._hungarianMap || x(n), W.each(o, function (t, e) {
            (a = n._hungarianMap[t]) === z || !r && o[a] !== z || ("o" === a.charAt(0) ? (o[a] || (o[a] = {}), W.extend(!0, o[a], o[t]), R(n[a], o[a], r)) : o[a] = o[t])
        })
    }

    function A(t) {
        var e = I.defaults.oLanguage,
            n = e.sDecimal;
        if (n && Ne(n), t) {
            var o = t.sZeroRecords;
            !t.sEmptyTable && o && "No data available in table" === e.sEmptyTable && se(t, t, "sZeroRecords", "sEmptyTable"), !t.sLoadingRecords && o && "Loading..." === e.sLoadingRecords && se(t, t, "sZeroRecords", "sLoadingRecords"), t.sInfoThousands && (t.sThousands = t.sInfoThousands);
            var r = t.sDecimal;
            r && n !== r && Ne(r)
        }
    }
    I.util = {
        throttle: function (o, t) {
            var r, a, i = t !== z ? t : 200;
            return function () {
                var t = this,
                    e = +new Date,
                    n = arguments;
                r && e < r + i ? (clearTimeout(a), a = setTimeout(function () {
                    r = z, o.apply(t, n)
                }, i)) : (r = e, o.apply(t, n))
            }
        },
        escapeRegex: function (t) {
            return t.replace(c, "\\$1")
        }
    };
    var _ = function (t, e, n) {
        t[e] !== z && (t[n] = t[e])
    };

    function k(t) {
        _(t, "ordering", "bSort"), _(t, "orderMulti", "bSortMulti"), _(t, "orderClasses", "bSortClasses"), _(t, "orderCellsTop", "bSortCellsTop"), _(t, "order", "aaSorting"), _(t, "orderFixed", "aaSortingFixed"), _(t, "paging", "bPaginate"), _(t, "pagingType", "sPaginationType"), _(t, "pageLength", "iDisplayLength"), _(t, "searching", "bFilter"), "boolean" == typeof t.sScrollX && (t.sScrollX = t.sScrollX ? "100%" : ""), "boolean" == typeof t.scrollX && (t.scrollX = t.scrollX ? "100%" : "");
        var e = t.aoSearchCols;
        if (e)
            for (var n = 0, o = e.length; n < o; n++) e[n] && R(I.models.oSearch, e[n])
    }

    function N(t) {
        _(t, "orderable", "bSortable"), _(t, "orderData", "aDataSort"), _(t, "orderSequence", "asSorting"), _(t, "orderDataType", "sortDataType");
        var e = t.aDataSort;
        "number" != typeof e || W.isArray(e) || (t.aDataSort = [e])
    }

    function L(t) {
        if (!I.__browser) {
            var e = {};
            I.__browser = e;
            var n = W("<div/>").css({
                position: "fixed",
                top: 0,
                left: -1 * W(F).scrollLeft(),
                height: 1,
                width: 1,
                overflow: "hidden"
            }).append(W("<div/>").css({
                position: "absolute",
                top: 1,
                left: 1,
                width: 100,
                overflow: "scroll"
            }).append(W("<div/>").css({
                width: "100%",
                height: 10
            }))).appendTo("body"),
                o = n.children(),
                r = o.children();
            e.barWidth = o[0].offsetWidth - o[0].clientWidth, e.bScrollOversize = 100 === r[0].offsetWidth && 100 !== o[0].clientWidth, e.bScrollbarLeft = 1 !== Math.round(r.offset().left), e.bBounding = !!n[0].getBoundingClientRect().width, n.remove()
        }
        W.extend(t.oBrowser, I.__browser), t.oScroll.iBarWidth = I.__browser.barWidth
    }

    function T(t, e, n, o, r, a) {
        var i, s = o,
            l = !1;
        for (n !== z && (i = n, l = !0); s !== r;) t.hasOwnProperty(s) && (i = l ? e(i, t[s], s, t) : t[s], l = !0, s += a);
        return i
    }

    function H(t, e) {
        var n = I.defaults.column,
            o = t.aoColumns.length,
            r = W.extend({}, I.models.oColumn, n, {
                nTh: e || v.createElement("th"),
                sTitle: n.sTitle ? n.sTitle : e ? e.innerHTML : "",
                aDataSort: n.aDataSort ? n.aDataSort : [o],
                mData: n.mData ? n.mData : o,
                idx: o
            });
        t.aoColumns.push(r);
        var a = t.aoPreSearchCols;
        a[o] = W.extend({}, I.models.oSearch, a[o]), B(t, o, W(e).data())
    }

    function B(t, e, n) {
        var o = t.aoColumns[e],
            r = t.oClasses,
            a = W(o.nTh);
        if (!o.sWidthOrig) {
            o.sWidthOrig = a.attr("width") || null;
            var i = (a.attr("style") || "").match(/width:\s*(\d+[pxem%]+)/);
            i && (o.sWidthOrig = i[1])
        }
        n !== z && null !== n && (N(n), R(I.defaults.column, n), n.mDataProp === z || n.mData || (n.mData = n.mDataProp), n.sType && (o._sManualType = n.sType), n.className && !n.sClass && (n.sClass = n.className), n.sClass && a.addClass(n.sClass), W.extend(o, n), se(o, n, "sWidth", "sWidthOrig"), n.iDataSort !== z && (o.aDataSort = [n.iDataSort]), se(o, n, "aDataSort"));

        function s(t) {
            return "string" == typeof t && -1 !== t.indexOf("@")
        }
        var l = o.mData,
            d = K(l),
            c = o.mRender ? K(o.mRender) : null;
        o._bAttrSrc = W.isPlainObject(l) && (s(l.sort) || s(l.type) || s(l.filter)), o._setter = null, o.fnGetData = function (t, e, n) {
            var o = d(t, e, z, n);
            return c && e ? c(o, e, t, n) : o
        }, o.fnSetData = function (t, e, n) {
            return Y(l)(t, e, n)
        }, "number" != typeof l && (t._rowReadObject = !0), t.oFeatures.bSort || (o.bSortable = !1, a.addClass(r.sSortableNone));
        var u = -1 !== W.inArray("asc", o.asSorting),
            f = -1 !== W.inArray("desc", o.asSorting);
        o.bSortable && (u || f) ? u && !f ? (o.sSortingClass = r.sSortableAsc, o.sSortingClassJUI = r.sSortJUIAscAllowed) : !u && f ? (o.sSortingClass = r.sSortableDesc, o.sSortingClassJUI = r.sSortJUIDescAllowed) : (o.sSortingClass = r.sSortable, o.sSortingClassJUI = r.sSortJUI) : (o.sSortingClass = r.sSortableNone, o.sSortingClassJUI = "")
    }

    function $(t) {
        if (!1 !== t.oFeatures.bAutoWidth) {
            var e = t.aoColumns;
            Vt(t);
            for (var n = 0, o = e.length; n < o; n++) e[n].nTh.style.width = e[n].sWidth
        }
        var r = t.oScroll;
        "" === r.sY && "" === r.sX || Mt(t), ue(t, null, "column-sizing", [t])
    }

    function X(t, e) {
        var n = j(t, "bVisible");
        return "number" == typeof n[e] ? n[e] : null
    }

    function C(t, e) {
        var n = j(t, "bVisible"),
            o = W.inArray(e, n);
        return -1 !== o ? o : null
    }

    function O(t) {
        var n = 0;
        return W.each(t.aoColumns, function (t, e) {
            e.bVisible && "none" !== W(e.nTh).css("display") && n++
        }), n
    }

    function j(t, n) {
        var o = [];
        return W.map(t.aoColumns, function (t, e) {
            t[n] && o.push(e)
        }), o
    }

    function S(t) {
        var e, n, o, r, a, i, s, l, d, c = t.aoColumns,
            u = t.aoData,
            f = I.ext.type.detect;
        for (e = 0, n = c.length; e < n; e++)
            if (d = [], !(s = c[e]).sType && s._sManualType) s.sType = s._sManualType;
            else if (!s.sType) {
                for (o = 0, r = f.length; o < r; o++) {
                    for (a = 0, i = u.length; a < i && (d[a] === z && (d[a] = D(t, a, e, "type")), (l = f[o](d[a], t)) || o === f.length - 1) && "html" !== l; a++);
                    if (l) {
                        s.sType = l;
                        break
                    }
                }
                s.sType || (s.sType = "string")
            }
    }

    function P(t, e, n, o) {
        var r, a, i, s, l, d, c, u = t.aoColumns;
        if (e)
            for (r = e.length - 1; 0 <= r; r--) {
                var f = (c = e[r]).targets !== z ? c.targets : c.aTargets;
                for (W.isArray(f) || (f = [f]), i = 0, s = f.length; i < s; i++)
                    if ("number" == typeof f[i] && 0 <= f[i]) {
                        for (; u.length <= f[i];) H(t);
                        o(f[i], c)
                    } else if ("number" == typeof f[i] && f[i] < 0) o(u.length + f[i], c);
                    else if ("string" == typeof f[i])
                        for (l = 0, d = u.length; l < d; l++) "_all" != f[i] && !W(u[l].nTh).hasClass(f[i]) || o(l, c)
            }
        if (n)
            for (r = 0, a = n.length; r < a; r++) o(r, n[r])
    }

    function q(t, e, n, o) {
        var r = t.aoData.length,
            a = W.extend(!0, {}, I.models.oRow, {
                src: n ? "dom" : "data",
                idx: r
            });
        a._aData = e, t.aoData.push(a);
        for (var i = t.aoColumns, s = 0, l = i.length; s < l; s++) i[s].sType = null;
        t.aiDisplayMaster.push(r);
        var d = t.rowIdFn(e);
        return d !== z && (t.aIds[d] = a), !n && t.oFeatures.bDeferRender || ot(t, r, n, o), r
    }

    function E(n, t) {
        var o;
        return t instanceof W || (t = W(t)), t.map(function (t, e) {
            return o = nt(n, e), q(n, o.data, e, o.cells)
        })
    }

    function D(t, e, n, o) {
        var r = t.iDraw,
            a = t.aoColumns[n],
            i = t.aoData[e]._aData,
            s = a.sDefaultContent,
            l = a.fnGetData(i, o, {
                settings: t,
                row: e,
                col: n
            });
        if (l === z) return t.iDrawError != r && null === s && (ie(t, 0, "Requested unknown parameter " + ("function" == typeof a.mData ? "{function}" : "'" + a.mData + "'") + " for row " + e + ", column " + n, 4), t.iDrawError = r), s;
        if (l !== i && null !== l || null === s || o === z) {
            if ("function" == typeof l) return l.call(i)
        } else l = s;
        return null === l && "display" == o ? "" : l
    }

    function M(t, e, n, o) {
        var r = t.aoColumns[n],
            a = t.aoData[e]._aData;
        r.fnSetData(a, o, {
            settings: t,
            row: e,
            col: n
        })
    }
    var U = /\[.*?\]$/,
        G = /\(\)$/;

    function J(t) {
        return W.map(t.match(/(\\.|[^\.])+/g) || [""], function (t) {
            return t.replace(/\\\./g, ".")
        })
    }

    function K(r) {
        if (W.isPlainObject(r)) {
            var a = {};
            return W.each(r, function (t, e) {
                e && (a[t] = K(e))
            }),
                function (t, e, n, o) {
                    var r = a[e] || a._;
                    return r !== z ? r(t, e, n, o) : t
                }
        }
        if (null === r) return function (t) {
            return t
        };
        if ("function" == typeof r) return function (t, e, n, o) {
            return r(t, e, n, o)
        };
        if ("string" != typeof r || -1 === r.indexOf(".") && -1 === r.indexOf("[") && -1 === r.indexOf("(")) return function (t, e) {
            return t[r]
        };
        var h = function (t, e, n) {
            var o, r, a, i;
            if ("" !== n)
                for (var s = J(n), l = 0, d = s.length; l < d; l++) {
                    if (o = s[l].match(U), r = s[l].match(G), o) {
                        if (s[l] = s[l].replace(U, ""), "" !== s[l] && (t = t[s[l]]), a = [], s.splice(0, l + 1), i = s.join("."), W.isArray(t))
                            for (var c = 0, u = t.length; c < u; c++) a.push(h(t[c], e, i));
                        var f = o[0].substring(1, o[0].length - 1);
                        t = "" === f ? a : a.join(f);
                        break
                    }
                    if (r) s[l] = s[l].replace(G, ""), t = t[s[l]]();
                    else {
                        if (null === t || t[s[l]] === z) return z;
                        t = t[s[l]]
                    }
                }
            return t
        };
        return function (t, e) {
            return h(t, e, r)
        }
    }

    function Y(o) {
        if (W.isPlainObject(o)) return Y(o._);
        if (null === o) return function () { };
        if ("function" == typeof o) return function (t, e, n) {
            o(t, "set", e, n)
        };
        if ("string" != typeof o || -1 === o.indexOf(".") && -1 === o.indexOf("[") && -1 === o.indexOf("(")) return function (t, e) {
            t[o] = e
        };
        var p = function (t, e, n) {
            for (var o, r, a, i, s, l = J(n), d = l[l.length - 1], c = 0, u = l.length - 1; c < u; c++) {
                if (r = l[c].match(U), a = l[c].match(G), r) {
                    if (l[c] = l[c].replace(U, ""), t[l[c]] = [], (o = l.slice()).splice(0, c + 1), s = o.join("."), W.isArray(e))
                        for (var f = 0, h = e.length; f < h; f++) p(i = {}, e[f], s), t[l[c]].push(i);
                    else t[l[c]] = e;
                    return
                }
                a && (l[c] = l[c].replace(G, ""), t = t[l[c]](e)), null !== t[l[c]] && t[l[c]] !== z || (t[l[c]] = {}), t = t[l[c]]
            }
            d.match(G) ? t = t[d.replace(G, "")](e) : t[d.replace(U, "")] = e
        };
        return function (t, e) {
            return p(t, e, o)
        }
    }

    function Q(t) {
        return V(t.aoData, "_aData")
    }

    function Z(t) {
        t.aoData.length = 0, t.aiDisplayMaster.length = 0, t.aiDisplay.length = 0, t.aIds = {}
    }

    function tt(t, e, n) {
        for (var o = -1, r = 0, a = t.length; r < a; r++) t[r] == e ? o = r : t[r] > e && t[r]--; - 1 != o && n === z && t.splice(o, 1)
    }

    function et(n, o, t, e) {
        function r(t, e) {
            for (; t.childNodes.length;) t.removeChild(t.firstChild);
            t.innerHTML = D(n, o, e, "display")
        }
        var a, i, s = n.aoData[o];
        if ("dom" !== t && (t && "auto" !== t || "dom" !== s.src)) {
            var l = s.anCells;
            if (l)
                if (e !== z) r(l[e], e);
                else
                    for (a = 0, i = l.length; a < i; a++) r(l[a], a)
        } else s._aData = nt(n, s, e, e === z ? z : s._aData).data;
        s._aSortData = null, s._aFilterData = null;
        var d = n.aoColumns;
        if (e !== z) d[e].sType = null;
        else {
            for (a = 0, i = d.length; a < i; a++) d[a].sType = null;
            rt(n, s)
        }
    }

    function nt(t, e, n, r) {
        var o, a, i, s = [],
            l = e.firstChild,
            d = 0,
            c = t.aoColumns,
            u = t._rowReadObject;
        r = r !== z ? r : u ? {} : [];

        function f(t, e) {
            if ("string" == typeof t) {
                var n = t.indexOf("@");
                if (-1 !== n) {
                    var o = t.substring(n + 1);
                    Y(t)(r, e.getAttribute(o))
                }
            }
        }

        function h(t) {
            n !== z && n !== d || (a = c[d], i = W.trim(t.innerHTML), a && a._bAttrSrc ? (Y(a.mData._)(r, i), f(a.mData.sort, t), f(a.mData.type, t), f(a.mData.filter, t)) : u ? (a._setter || (a._setter = Y(a.mData)), a._setter(r, i)) : r[d] = i), d++
        }
        if (l)
            for (; l;) "TD" != (o = l.nodeName.toUpperCase()) && "TH" != o || (h(l), s.push(l)), l = l.nextSibling;
        else
            for (var p = 0, m = (s = e.anCells).length; p < m; p++) h(s[p]);
        var b = e.firstChild ? e : e.nTr;
        if (b) {
            var g = b.getAttribute("id");
            g && Y(t.rowId)(r, g)
        }
        return {
            data: r,
            cells: s
        }
    }

    function ot(t, e, n, o) {
        var r, a, i, s, l, d = t.aoData[e],
            c = d._aData,
            u = [];
        if (null === d.nTr) {
            for (r = n || v.createElement("tr"), d.nTr = r, d.anCells = u, r._DT_RowIndex = e, rt(t, d), s = 0, l = t.aoColumns.length; s < l; s++) i = t.aoColumns[s], (a = n ? o[s] : v.createElement(i.sCellType))._DT_CellIndex = {
                row: e,
                column: s
            }, u.push(a), n && !i.mRender && i.mData === s || W.isPlainObject(i.mData) && i.mData._ === s + ".display" || (a.innerHTML = D(t, e, s, "display")), i.sClass && (a.className += " " + i.sClass), i.bVisible && !n ? r.appendChild(a) : !i.bVisible && n && a.parentNode.removeChild(a), i.fnCreatedCell && i.fnCreatedCell.call(t.oInstance, a, D(t, e, s), c, e, s);
            ue(t, "aoRowCreatedCallback", null, [r, c, e, u])
        }
        d.nTr.setAttribute("role", "row")
    }

    function rt(t, e) {
        var n = e.nTr,
            o = e._aData;
        if (n) {
            var r = t.rowIdFn(o);
            if (r && (n.id = r), o.DT_RowClass) {
                var a = o.DT_RowClass.split(" ");
                e.__rowc = e.__rowc ? w(e.__rowc.concat(a)) : a, W(n).removeClass(e.__rowc.join(" ")).addClass(o.DT_RowClass)
            }
            o.DT_RowAttr && W(n).attr(o.DT_RowAttr), o.DT_RowData && W(n).data(o.DT_RowData)
        }
    }

    function at(t) {
        var e, n, o, r, a, i = t.nTHead,
            s = t.nTFoot,
            l = 0 === W("th, td", i).length,
            d = t.oClasses,
            c = t.aoColumns;
        for (l && (r = W("<tr/>").appendTo(i)), e = 0, n = c.length; e < n; e++) a = c[e], o = W(a.nTh).addClass(a.sClass), l && o.appendTo(r), t.oFeatures.bSort && (o.addClass(a.sSortingClass), !1 !== a.bSortable && (o.attr("tabindex", t.iTabIndex).attr("aria-controls", t.sTableId), te(t, a.nTh, e))), a.sTitle != o[0].innerHTML && o.html(a.sTitle), he(t, "header")(t, o, a, d);
        if (l && ct(t.aoHeader, i), W(i).find(">tr").attr("role", "row"), W(i).find(">tr>th, >tr>td").addClass(d.sHeaderTH), W(s).find(">tr>th, >tr>td").addClass(d.sFooterTH), null !== s) {
            var u = t.aoFooter[0];
            for (e = 0, n = u.length; e < n; e++)(a = c[e]).nTf = u[e].cell, a.sClass && W(a.nTf).addClass(a.sClass)
        }
    }

    function it(t, e, n) {
        var o, r, a, i, s, l, d, c, u, f = [],
            h = [],
            p = t.aoColumns.length;
        if (e) {
            for (n === z && (n = !1), o = 0, r = e.length; o < r; o++) {
                for (f[o] = e[o].slice(), f[o].nTr = e[o].nTr, a = p - 1; 0 <= a; a--) t.aoColumns[a].bVisible || n || f[o].splice(a, 1);
                h.push([])
            }
            for (o = 0, r = f.length; o < r; o++) {
                if (d = f[o].nTr)
                    for (; l = d.firstChild;) d.removeChild(l);
                for (a = 0, i = f[o].length; a < i; a++)
                    if (u = c = 1, h[o][a] === z) {
                        for (d.appendChild(f[o][a].cell), h[o][a] = 1; f[o + c] !== z && f[o][a].cell == f[o + c][a].cell;) h[o + c][a] = 1, c++;
                        for (; f[o][a + u] !== z && f[o][a].cell == f[o][a + u].cell;) {
                            for (s = 0; s < c; s++) h[o + s][a + u] = 1;
                            u++
                        }
                        W(f[o][a].cell).attr("rowspan", c).attr("colspan", u)
                    }
            }
        }
    }

    function st(t) {
        var e = ue(t, "aoPreDrawCallback", "preDraw", [t]);
        if (-1 === W.inArray(!1, e)) {
            var n = [],
                o = 0,
                r = t.asStripeClasses,
                a = r.length,
                i = (t.aoOpenRows.length, t.oLanguage),
                s = t.iInitDisplayStart,
                l = "ssp" == pe(t),
                d = t.aiDisplay;
            t.bDrawing = !0, s !== z && -1 !== s && (t._iDisplayStart = l ? s : s >= t.fnRecordsDisplay() ? 0 : s, t.iInitDisplayStart = -1);
            var c = t._iDisplayStart,
                u = t.fnDisplayEnd();
            if (t.bDeferLoading) t.bDeferLoading = !1, t.iDraw++ , qt(t, !1);
            else if (l) {
                if (!t.bDestroying && !ht(t)) return
            } else t.iDraw++;
            if (0 !== d.length)
                for (var f = l ? 0 : c, h = l ? t.aoData.length : u, p = f; p < h; p++) {
                    var m = d[p],
                        b = t.aoData[m];
                    null === b.nTr && ot(t, m);
                    var g = b.nTr;
                    if (0 !== a) {
                        var v = r[o % a];
                        b._sRowStripe != v && (W(g).removeClass(b._sRowStripe).addClass(v), b._sRowStripe = v)
                    }
                    ue(t, "aoRowCallback", null, [g, b._aData, o, p, m]), n.push(g), o++
                } else {
                var y = i.sZeroRecords;
                1 == t.iDraw && "ajax" == pe(t) ? y = i.sLoadingRecords : i.sEmptyTable && 0 === t.fnRecordsTotal() && (y = i.sEmptyTable), n[0] = W("<tr/>", {
                    class: a ? r[0] : ""
                }).append(W("<td />", {
                    valign: "top",
                    colSpan: O(t),
                    class: t.oClasses.sRowEmpty
                }).html(y))[0]
            }
            ue(t, "aoHeaderCallback", "header", [W(t.nTHead).children("tr")[0], Q(t), c, u, d]), ue(t, "aoFooterCallback", "footer", [W(t.nTFoot).children("tr")[0], Q(t), c, u, d]);
            var w = W(t.nTBody);
            w.children().detach(), w.append(W(n)), ue(t, "aoDrawCallback", "draw", [t]), t.bSorted = !1, t.bFiltered = !1, t.bDrawing = !1
        } else qt(t, !1)
    }

    function lt(t, e) {
        var n = t.oFeatures,
            o = n.bSort,
            r = n.bFilter;
        o && Yt(t), r ? vt(t, t.oPreviousSearch) : t.aiDisplay = t.aiDisplayMaster.slice(), !0 !== e && (t._iDisplayStart = 0), t._drawHold = e, st(t), t._drawHold = !1
    }

    function dt(t) {
        var e = t.oClasses,
            n = W(t.nTable),
            o = W("<div/>").insertBefore(n),
            r = t.oFeatures,
            a = W("<div/>", {
                id: t.sTableId + "_wrapper",
                class: e.sWrapper + (t.nTFoot ? "" : " " + e.sNoFooter)
            });
        t.nHolding = o[0], t.nTableWrapper = a[0], t.nTableReinsertBefore = t.nTable.nextSibling;
        for (var i, s, l, d, c, u, f = t.sDom.split(""), h = 0; h < f.length; h++) {
            if (i = null, "<" == (s = f[h])) {
                if (l = W("<div/>")[0], "'" == (d = f[h + 1]) || '"' == d) {
                    for (c = "", u = 2; f[h + u] != d;) c += f[h + u], u++;
                    if ("H" == c ? c = e.sJUIHeader : "F" == c && (c = e.sJUIFooter), -1 != c.indexOf(".")) {
                        var p = c.split(".");
                        l.id = p[0].substr(1, p[0].length - 1), l.className = p[1]
                    } else "#" == c.charAt(0) ? l.id = c.substr(1, c.length - 1) : l.className = c;
                    h += u
                }
                a.append(l), a = W(l)
            } else if (">" == s) a = a.parent();
            else if ("l" == s && r.bPaginate && r.bLengthChange) i = Bt(t);
            else if ("f" == s && r.bFilter) i = gt(t);
            else if ("r" == s && r.bProcessing) i = Pt(t);
            else if ("t" == s) i = Et(t);
            else if ("i" == s && r.bInfo) i = Rt(t);
            else if ("p" == s && r.bPaginate) i = Ot(t);
            else if (0 !== I.ext.feature.length)
                for (var m = I.ext.feature, b = 0, g = m.length; b < g; b++)
                    if (s == m[b].cFeature) {
                        i = m[b].fnInit(t);
                        break
                    } if (i) {
                        var v = t.aanFeatures;
                        v[s] || (v[s] = []), v[s].push(i), a.append(i)
                    }
        }
        o.replaceWith(a), t.nHolding = null
    }

    function ct(t, e) {
        function n(t, e, n) {
            for (var o = t[e]; o[n];) n++;
            return n
        }
        var o, r, a, i, s, l, d, c, u, f, h = W(e).children("tr");
        for (t.splice(0, t.length), a = 0, l = h.length; a < l; a++) t.push([]);
        for (a = 0, l = h.length; a < l; a++)
            for (0, r = (o = h[a]).firstChild; r;) {
                if ("TD" == r.nodeName.toUpperCase() || "TH" == r.nodeName.toUpperCase())
                    for (c = (c = 1 * r.getAttribute("colspan")) && 0 !== c && 1 !== c ? c : 1, u = (u = 1 * r.getAttribute("rowspan")) && 0 !== u && 1 !== u ? u : 1, d = n(t, a, 0), f = 1 === c, s = 0; s < c; s++)
                        for (i = 0; i < u; i++) t[a + i][d + s] = {
                            cell: r,
                            unique: f
                        }, t[a + i].nTr = o;
                r = r.nextSibling
            }
    }

    function ut(t, e, n) {
        var o = [];
        n || (n = t.aoHeader, e && ct(n = [], e));
        for (var r = 0, a = n.length; r < a; r++)
            for (var i = 0, s = n[r].length; i < s; i++) !n[r][i].unique || o[i] && t.bSortCellsTop || (o[i] = n[r][i].cell);
        return o
    }

    function ft(r, t, e) {
        if (ue(r, "aoServerParams", "serverParams", [t]), t && W.isArray(t)) {
            var a = {},
                i = /(.*?)\[\]$/;
            W.each(t, function (t, e) {
                var n = e.name.match(i);
                if (n) {
                    var o = n[0];
                    a[o] || (a[o] = []), a[o].push(e.value)
                } else a[e.name] = e.value
            }), t = a
        }

        function n(t) {
            ue(r, null, "xhr", [r, t, r.jqXHR]), e(t)
        }
        var o, s = r.ajax,
            l = r.oInstance;
        if (W.isPlainObject(s) && s.data) {
            var d = "function" == typeof (o = s.data) ? o(t, r) : o;
            t = "function" == typeof o && d ? d : W.extend(!0, t, d), delete s.data
        }
        var c = {
            data: t,
            success: function (t) {
                var e = t.error || t.sError;
                e && ie(r, 0, e), r.json = t, n(t)
            },
            dataType: "json",
            cache: !1,
            type: r.sServerMethod,
            error: function (t, e, n) {
                var o = ue(r, null, "xhr", [r, null, r.jqXHR]); - 1 === W.inArray(!0, o) && ("parsererror" == e ? ie(r, 0, "Invalid JSON response", 1) : 4 === t.readyState && ie(r, 0, "Ajax error", 7)), qt(r, !1)
            }
        };
        r.oAjaxData = t, ue(r, null, "preXhr", [r, t]), r.fnServerData ? r.fnServerData.call(l, r.sAjaxSource, W.map(t, function (t, e) {
            return {
                name: e,
                value: t
            }
        }), n, r) : r.sAjaxSource || "string" == typeof s ? r.jqXHR = W.ajax(W.extend(c, {
            url: s || r.sAjaxSource
        })) : "function" == typeof s ? r.jqXHR = s.call(l, t, n, r) : (r.jqXHR = W.ajax(W.extend(c, s)), s.data = o)
    }

    function ht(e) {
        return !e.bAjaxDataGet || (e.iDraw++ , qt(e, !0), ft(e, pt(e), function (t) {
            mt(e, t)
        }), !1)
    }

    function pt(t) {
        function n(t, e) {
            u.push({
                name: t,
                value: e
            })
        }
        var e, o, r, a, i = t.aoColumns,
            s = i.length,
            l = t.oFeatures,
            d = t.oPreviousSearch,
            c = t.aoPreSearchCols,
            u = [],
            f = Kt(t),
            h = t._iDisplayStart,
            p = !1 !== l.bPaginate ? t._iDisplayLength : -1;
        n("sEcho", t.iDraw), n("iColumns", s), n("sColumns", V(i, "sName").join(",")), n("iDisplayStart", h), n("iDisplayLength", p);
        var m = {
            draw: t.iDraw,
            columns: [],
            order: [],
            start: h,
            length: p,
            search: {
                value: d.sSearch,
                regex: d.bRegex
            }
        };
        for (e = 0; e < s; e++) r = i[e], a = c[e], o = "function" == typeof r.mData ? "function" : r.mData, m.columns.push({
            data: o,
            name: r.sName,
            searchable: r.bSearchable,
            orderable: r.bSortable,
            search: {
                value: a.sSearch,
                regex: a.bRegex
            }
        }), n("mDataProp_" + e, o), l.bFilter && (n("sSearch_" + e, a.sSearch), n("bRegex_" + e, a.bRegex), n("bSearchable_" + e, r.bSearchable)), l.bSort && n("bSortable_" + e, r.bSortable);
        l.bFilter && (n("sSearch", d.sSearch), n("bRegex", d.bRegex)), l.bSort && (W.each(f, function (t, e) {
            m.order.push({
                column: e.col,
                dir: e.dir
            }), n("iSortCol_" + t, e.col), n("sSortDir_" + t, e.dir)
        }), n("iSortingCols", f.length));
        var b = I.ext.legacy.ajax;
        return null === b ? t.sAjaxSource ? u : m : b ? u : m
    }

    function mt(t, n) {
        function e(t, e) {
            return n[t] !== z ? n[t] : n[e]
        }
        var o = bt(t, n),
            r = e("sEcho", "draw"),
            a = e("iTotalRecords", "recordsTotal"),
            i = e("iTotalDisplayRecords", "recordsFiltered");
        if (r) {
            if (1 * r < t.iDraw) return;
            t.iDraw = 1 * r
        }
        Z(t), t._iRecordsTotal = parseInt(a, 10), t._iRecordsDisplay = parseInt(i, 10);
        for (var s = 0, l = o.length; s < l; s++) q(t, o[s]);
        t.aiDisplay = t.aiDisplayMaster.slice(), t.bAjaxDataGet = !1, st(t), t._bInitComplete || Lt(t, n), t.bAjaxDataGet = !0, qt(t, !1)
    }

    function bt(t, e) {
        var n = W.isPlainObject(t.ajax) && t.ajax.dataSrc !== z ? t.ajax.dataSrc : t.sAjaxDataProp;
        return "data" === n ? e.aaData || e[n] : "" !== n ? K(n)(e) : e
    }

    function gt(n) {
        var t = n.oClasses,
            e = n.sTableId,
            o = n.oLanguage,
            r = n.oPreviousSearch,
            a = n.aanFeatures,
            i = '<input type="search" class="' + t.sFilterInput + '"/>',
            s = o.sSearch;
        s = s.match(/_INPUT_/) ? s.replace("_INPUT_", i) : s + i;

        function l() {
            a.f;
            var t = this.value ? this.value : "";
            t != r.sSearch && (vt(n, {
                sSearch: t,
                bRegex: r.bRegex,
                bSmart: r.bSmart,
                bCaseInsensitive: r.bCaseInsensitive
            }), n._iDisplayStart = 0, st(n))
        }
        var d = W("<div/>", {
            id: a.f ? null : e + "_filter",
            class: t.sFilter
        }).append(W("<label/>").append(s)),
            c = null !== n.searchDelay ? n.searchDelay : "ssp" === pe(n) ? 400 : 0,
            u = W("input", d).val(r.sSearch).attr("placeholder", o.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT", c ? $t(l, c) : l).on("keypress.DT", function (t) {
                if (13 == t.keyCode) return !1
            }).attr("aria-controls", e);
        return W(n.nTable).on("search.dt.DT", function (t, e) {
            if (n === e) try {
                u[0] !== v.activeElement && u.val(r.sSearch)
            } catch (t) { }
        }), d[0]
    }

    function vt(t, e, n) {
        function o(t) {
            a.sSearch = t.sSearch, a.bRegex = t.bRegex, a.bSmart = t.bSmart, a.bCaseInsensitive = t.bCaseInsensitive
        }

        function r(t) {
            return t.bEscapeRegex !== z ? !t.bEscapeRegex : t.bRegex
        }
        var a = t.oPreviousSearch,
            i = t.aoPreSearchCols;
        if (S(t), "ssp" != pe(t)) {
            xt(t, e.sSearch, n, r(e), e.bSmart, e.bCaseInsensitive), o(e);
            for (var s = 0; s < i.length; s++) wt(t, i[s].sSearch, s, r(i[s]), i[s].bSmart, i[s].bCaseInsensitive);
            yt(t)
        } else o(e);
        t.bFiltered = !0, ue(t, null, "search", [t])
    }

    function yt(t) {
        for (var e, n, o = I.ext.search, r = t.aiDisplay, a = 0, i = o.length; a < i; a++) {
            for (var s = [], l = 0, d = r.length; l < d; l++) n = r[l], e = t.aoData[n], o[a](t, e._aFilterData, n, e._aData, l) && s.push(n);
            r.length = 0, W.merge(r, s)
        }
    }

    function wt(t, e, n, o, r, a) {
        if ("" !== e) {
            for (var i, s = [], l = t.aiDisplay, d = _t(e, o, r, a), c = 0; c < l.length; c++) i = t.aoData[l[c]]._aFilterData[n], d.test(i) && s.push(l[c]);
            t.aiDisplay = s
        }
    }

    function xt(t, e, n, o, r, a) {
        var i, s, l, d = _t(e, o, r, a),
            c = t.oPreviousSearch.sSearch,
            u = t.aiDisplayMaster,
            f = [];
        if (0 !== I.ext.search.length && (n = !0), s = Dt(t), e.length <= 0) t.aiDisplay = u.slice();
        else {
            for ((s || n || c.length > e.length || 0 !== e.indexOf(c) || t.bSorted) && (t.aiDisplay = u.slice()), i = t.aiDisplay, l = 0; l < i.length; l++) d.test(t.aoData[i[l]]._sFilterRow) && f.push(i[l]);
            t.aiDisplay = f
        }
    }

    function _t(t, e, n, o) {
        t = e ? t : Tt(t), n && (t = "^(?=.*?" + W.map(t.match(/"[^"]+"|[^ ]+/g) || [""], function (t) {
            if ('"' === t.charAt(0)) {
                var e = t.match(/^"(.*)"$/);
                t = e ? e[1] : t
            }
            return t.replace('"', "")
        }).join(")(?=.*?") + ").*$");
        return new RegExp(t, o ? "i" : "")
    }
    var Tt = I.util.escapeRegex,
        Ct = W("<div>")[0],
        St = Ct.textContent !== z;

    function Dt(t) {
        var e, n, o, r, a, i, s, l, d = t.aoColumns,
            c = I.ext.type.search,
            u = !1;
        for (n = 0, r = t.aoData.length; n < r; n++)
            if (!(l = t.aoData[n])._aFilterData) {
                for (i = [], o = 0, a = d.length; o < a; o++)(e = d[o]).bSearchable ? (s = D(t, n, o, "filter"), c[e.sType] && (s = c[e.sType](s)), null === s && (s = ""), "string" != typeof s && s.toString && (s = s.toString())) : s = "", s.indexOf && -1 !== s.indexOf("&") && (Ct.innerHTML = s, s = St ? Ct.textContent : Ct.innerText), s.replace && (s = s.replace(/[\r\n]/g, "")), i.push(s);
                l._aFilterData = i, l._sFilterRow = i.join("  "), u = !0
            } return u
    }

    function It(t) {
        return {
            search: t.sSearch,
            smart: t.bSmart,
            regex: t.bRegex,
            caseInsensitive: t.bCaseInsensitive
        }
    }

    function Ft(t) {
        return {
            sSearch: t.search,
            bSmart: t.smart,
            bRegex: t.regex,
            bCaseInsensitive: t.caseInsensitive
        }
    }

    function Rt(t) {
        var e = t.sTableId,
            n = t.aanFeatures.i,
            o = W("<div/>", {
                class: t.oClasses.sInfo,
                id: n ? null : e + "_info"
            });
        return n || (t.aoDrawCallback.push({
            fn: At,
            sName: "information"
        }), o.attr("role", "status").attr("aria-live", "polite"), W(t.nTable).attr("aria-describedby", e + "_info")), o[0]
    }

    function At(t) {
        var e = t.aanFeatures.i;
        if (0 !== e.length) {
            var n = t.oLanguage,
                o = t._iDisplayStart + 1,
                r = t.fnDisplayEnd(),
                a = t.fnRecordsTotal(),
                i = t.fnRecordsDisplay(),
                s = i ? n.sInfo : n.sInfoEmpty;
            i !== a && (s += " " + n.sInfoFiltered), s = kt(t, s += n.sInfoPostFix);
            var l = n.fnInfoCallback;
            null !== l && (s = l.call(t.oInstance, t, o, r, a, i, s)), W(e).html(s)
        }
    }

    function kt(t, e) {
        var n = t.fnFormatNumber,
            o = t._iDisplayStart + 1,
            r = t._iDisplayLength,
            a = t.fnRecordsDisplay(),
            i = -1 === r;
        return e.replace(/_START_/g, n.call(t, o)).replace(/_END_/g, n.call(t, t.fnDisplayEnd())).replace(/_MAX_/g, n.call(t, t.fnRecordsTotal())).replace(/_TOTAL_/g, n.call(t, a)).replace(/_PAGE_/g, n.call(t, i ? 1 : Math.ceil(o / r))).replace(/_PAGES_/g, n.call(t, i ? 1 : Math.ceil(a / r)))
    }

    function Nt(n) {
        var o, t, e, r = n.iInitDisplayStart,
            a = n.aoColumns,
            i = n.oFeatures,
            s = n.bDeferLoading;
        if (n.bInitialised) {
            for (dt(n), at(n), it(n, n.aoHeader), it(n, n.aoFooter), qt(n, !0), i.bAutoWidth && Vt(n), o = 0, t = a.length; o < t; o++)(e = a[o]).sWidth && (e.nTh.style.width = Jt(e.sWidth));
            ue(n, null, "preInit", [n]), lt(n);
            var l = pe(n);
            "ssp" == l && !s || ("ajax" == l ? ft(n, [], function (t) {
                var e = bt(n, t);
                for (o = 0; o < e.length; o++) q(n, e[o]);
                n.iInitDisplayStart = r, lt(n), qt(n, !1), Lt(n, t)
            }) : (qt(n, !1), Lt(n)))
        } else setTimeout(function () {
            Nt(n)
        }, 200)
    }

    function Lt(t, e) {
        t._bInitComplete = !0, (e || t.oInit.aaData) && $(t), ue(t, null, "plugin-init", [t, e]), ue(t, "aoInitComplete", "init", [t, e])
    }

    function Ht(t, e) {
        var n = parseInt(e, 10);
        t._iDisplayLength = n, fe(t), ue(t, null, "length", [t, n])
    }

    function Bt(o) {
        for (var t = o.oClasses, e = o.sTableId, n = o.aLengthMenu, r = W.isArray(n[0]), a = r ? n[0] : n, i = r ? n[1] : n, s = W("<select/>", {
            name: e + "_length",
            "aria-controls": e,
            class: t.sLengthSelect
        }), l = 0, d = a.length; l < d; l++) s[0][l] = new Option("number" == typeof i[l] ? o.fnFormatNumber(i[l]) : i[l], a[l]);
        var c = W("<div><label/></div>").addClass(t.sLength);
        return o.aanFeatures.l || (c[0].id = e + "_length"), c.children().append(o.oLanguage.sLengthMenu.replace("_MENU_", s[0].outerHTML)), W("select", c).val(o._iDisplayLength).on("change.DT", function (t) {
            Ht(o, W(this).val()), st(o)
        }), W(o.nTable).on("length.dt.DT", function (t, e, n) {
            o === e && W("select", c).val(n)
        }), c[0]
    }

    function Ot(t) {
        function c(t) {
            st(t)
        }
        var e = t.sPaginationType,
            u = I.ext.pager[e],
            f = "function" == typeof u,
            n = W("<div/>").addClass(t.oClasses.sPaging + e)[0],
            h = t.aanFeatures;
        return f || u.fnInit(t, n, c), h.p || (n.id = t.sTableId + "_paginate", t.aoDrawCallback.push({
            fn: function (t) {
                if (f) {
                    var e, n, o = t._iDisplayStart,
                        r = t._iDisplayLength,
                        a = t.fnRecordsDisplay(),
                        i = -1 === r,
                        s = i ? 0 : Math.ceil(o / r),
                        l = i ? 1 : Math.ceil(a / r),
                        d = u(s, l);
                    for (e = 0, n = h.p.length; e < n; e++) he(t, "pageButton")(t, h.p[e], e, d, s, l)
                } else u.fnUpdate(t, c)
            },
            sName: "pagination"
        })), n
    }

    function jt(t, e, n) {
        var o = t._iDisplayStart,
            r = t._iDisplayLength,
            a = t.fnRecordsDisplay();
        0 === a || -1 === r ? o = 0 : "number" == typeof e ? a < (o = e * r) && (o = 0) : "first" == e ? o = 0 : "previous" == e ? (o = 0 <= r ? o - r : 0) < 0 && (o = 0) : "next" == e ? o + r < a && (o += r) : "last" == e ? o = Math.floor((a - 1) / r) * r : ie(t, 0, "Unknown paging action: " + e, 5);
        var i = t._iDisplayStart !== o;
        return t._iDisplayStart = o, i && (ue(t, null, "page", [t]), n && st(t)), i
    }

    function Pt(t) {
        return W("<div/>", {
            id: t.aanFeatures.r ? null : t.sTableId + "_processing",
            class: t.oClasses.sProcessing
        }).html(t.oLanguage.sProcessing).insertBefore(t.nTable)[0]
    }

    function qt(t, e) {
        t.oFeatures.bProcessing && W(t.aanFeatures.r).css("display", e ? "block" : "none"), ue(t, null, "processing", [t, e])
    }

    function Et(t) {
        var e = W(t.nTable);
        e.attr("role", "grid");
        var n = t.oScroll;
        if ("" === n.sX && "" === n.sY) return t.nTable;

        function o(t) {
            return t ? Jt(t) : null
        }
        var r = n.sX,
            a = n.sY,
            i = t.oClasses,
            s = e.children("caption"),
            l = s.length ? s[0]._captionSide : null,
            d = W(e[0].cloneNode(!1)),
            c = W(e[0].cloneNode(!1)),
            u = e.children("tfoot"),
            f = "<div/>";
        u.length || (u = null);
        var h = W(f, {
            class: i.sScrollWrapper
        }).append(W(f, {
            class: i.sScrollHead
        }).css({
            overflow: "hidden",
            position: "relative",
            border: 0,
            width: r ? o(r) : "100%"
        }).append(W(f, {
            class: i.sScrollHeadInner
        }).css({
            "box-sizing": "content-box",
            width: n.sXInner || "100%"
        }).append(d.removeAttr("id").css("margin-left", 0).append("top" === l ? s : null).append(e.children("thead"))))).append(W(f, {
            class: i.sScrollBody
        }).css({
            position: "relative",
            overflow: "auto",
            width: o(r)
        }).append(e));
        u && h.append(W(f, {
            class: i.sScrollFoot
        }).css({
            overflow: "hidden",
            border: 0,
            width: r ? o(r) : "100%"
        }).append(W(f, {
            class: i.sScrollFootInner
        }).append(c.removeAttr("id").css("margin-left", 0).append("bottom" === l ? s : null).append(e.children("tfoot")))));
        var p = h.children(),
            m = p[0],
            b = p[1],
            g = u ? p[2] : null;
        return r && W(b).on("scroll.DT", function (t) {
            var e = this.scrollLeft;
            m.scrollLeft = e, u && (g.scrollLeft = e)
        }), W(b).css(a && n.bCollapse ? "max-height" : "height", a), t.nScrollHead = m, t.nScrollBody = b, t.nScrollFoot = g, t.aoDrawCallback.push({
            fn: Mt,
            sName: "scrolling"
        }), h[0]
    }

    function Mt(n) {
        function t(t) {
            var e = t.style;
            e.paddingTop = "0", e.paddingBottom = "0", e.borderTopWidth = "0", e.borderBottomWidth = "0", e.height = 0
        }
        var e, o, r, a, i, s, l, d, c, u = n.oScroll,
            f = u.sX,
            h = u.sXInner,
            p = u.sY,
            m = u.iBarWidth,
            b = W(n.nScrollHead),
            g = b[0].style,
            v = b.children("div"),
            y = v[0].style,
            w = v.children("table"),
            x = n.nScrollBody,
            _ = W(x),
            T = x.style,
            C = W(n.nScrollFoot).children("div"),
            S = C.children("table"),
            D = W(n.nTHead),
            I = W(n.nTable),
            F = I[0],
            R = F.style,
            A = n.nTFoot ? W(n.nTFoot) : null,
            k = n.oBrowser,
            N = k.bScrollOversize,
            L = V(n.aoColumns, "nTh"),
            H = [],
            B = [],
            O = [],
            j = [],
            P = x.scrollHeight > x.clientHeight;
        if (n.scrollBarVis !== P && n.scrollBarVis !== z) return n.scrollBarVis = P, void $(n);
        n.scrollBarVis = P, I.children("thead, tfoot").remove(), A && (s = A.clone().prependTo(I), o = A.find("tr"), a = s.find("tr")), i = D.clone().prependTo(I), e = D.find("tr"), r = i.find("tr"), i.find("th, td").removeAttr("tabindex"), f || (T.width = "100%", b[0].style.width = "100%"), W.each(ut(n, i), function (t, e) {
            l = X(n, t), e.style.width = n.aoColumns[l].sWidth
        }), A && Wt(function (t) {
            t.style.width = ""
        }, a), c = I.outerWidth(), "" === f ? (R.width = "100%", N && (I.find("tbody").height() > x.offsetHeight || "scroll" == _.css("overflow-y")) && (R.width = Jt(I.outerWidth() - m)), c = I.outerWidth()) : "" !== h && (R.width = Jt(h), c = I.outerWidth()), Wt(t, r), Wt(function (t) {
            O.push(t.innerHTML), H.push(Jt(W(t).css("width")))
        }, r), Wt(function (t, e) {
            -1 !== W.inArray(t, L) && (t.style.width = H[e])
        }, e), W(r).height(0), A && (Wt(t, a), Wt(function (t) {
            j.push(t.innerHTML), B.push(Jt(W(t).css("width")))
        }, a), Wt(function (t, e) {
            t.style.width = B[e]
        }, o), W(a).height(0)), Wt(function (t, e) {
            t.innerHTML = '<div class="dataTables_sizing">' + O[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = H[e]
        }, r), A && Wt(function (t, e) {
            t.innerHTML = '<div class="dataTables_sizing">' + j[e] + "</div>", t.childNodes[0].style.height = "0", t.childNodes[0].style.overflow = "hidden", t.style.width = B[e]
        }, a), I.outerWidth() < c ? (d = x.scrollHeight > x.offsetHeight || "scroll" == _.css("overflow-y") ? c + m : c, N && (x.scrollHeight > x.offsetHeight || "scroll" == _.css("overflow-y")) && (R.width = Jt(d - m)), "" !== f && "" === h || ie(n, 1, "Possible column misalignment", 6)) : d = "100%", T.width = Jt(d), g.width = Jt(d), A && (n.nScrollFoot.style.width = Jt(d)), p || N && (T.height = Jt(F.offsetHeight + m));
        var q = I.outerWidth();
        w[0].style.width = Jt(q), y.width = Jt(q);
        var E = I.height() > x.clientHeight || "scroll" == _.css("overflow-y"),
            M = "padding" + (k.bScrollbarLeft ? "Left" : "Right");
        y[M] = E ? m + "px" : "0px", A && (S[0].style.width = Jt(q), C[0].style.width = Jt(q), C[0].style[M] = E ? m + "px" : "0px"), I.children("colgroup").insertBefore(I.children("thead")), _.scroll(), !n.bSorted && !n.bFiltered || n._drawHold || (x.scrollTop = 0)
    }

    function Wt(t, e, n) {
        for (var o, r, a = 0, i = 0, s = e.length; i < s;) {
            for (o = e[i].firstChild, r = n ? n[i].firstChild : null; o;) 1 === o.nodeType && (n ? t(o, r, a) : t(o, a), a++), o = o.nextSibling, r = n ? r.nextSibling : null;
            i++
        }
    }
    var zt = /<.*?>/g;

    function Vt(t) {
        var e, n, o, r = t.nTable,
            a = t.aoColumns,
            i = t.oScroll,
            s = i.sY,
            l = i.sX,
            d = i.sXInner,
            c = a.length,
            u = j(t, "bVisible"),
            f = W("th", t.nTHead),
            h = r.getAttribute("width"),
            p = r.parentNode,
            m = !1,
            b = t.oBrowser,
            g = b.bScrollOversize,
            v = r.style.width;
        for (v && -1 !== v.indexOf("%") && (h = v), e = 0; e < u.length; e++) null !== (n = a[u[e]]).sWidth && (n.sWidth = Xt(n.sWidthOrig, p), m = !0);
        if (g || !m && !l && !s && c == O(t) && c == f.length)
            for (e = 0; e < c; e++) {
                var y = X(t, e);
                null !== y && (a[y].sWidth = Jt(f.eq(e).width()))
            } else {
            var w = W(r).clone().css("visibility", "hidden").removeAttr("id");
            w.find("tbody tr").remove();
            var x = W("<tr/>").appendTo(w.find("tbody"));
            for (w.find("thead, tfoot").remove(), w.append(W(t.nTHead).clone()).append(W(t.nTFoot).clone()), w.find("tfoot th, tfoot td").css("width", ""), f = ut(t, w.find("thead")[0]), e = 0; e < u.length; e++) n = a[u[e]], f[e].style.width = null !== n.sWidthOrig && "" !== n.sWidthOrig ? Jt(n.sWidthOrig) : "", n.sWidthOrig && l && W(f[e]).append(W("<div/>").css({
                width: n.sWidthOrig,
                margin: 0,
                padding: 0,
                border: 0,
                height: 1
            }));
            if (t.aoData.length)
                for (e = 0; e < u.length; e++) n = a[o = u[e]], W(Ut(t, o)).clone(!1).append(n.sContentPadding).appendTo(x);
            W("[name]", w).removeAttr("name");
            var _ = W("<div/>").css(l || s ? {
                position: "absolute",
                top: 0,
                left: 0,
                height: 1,
                right: 0,
                overflow: "hidden"
            } : {}).append(w).appendTo(p);
            l && d ? w.width(d) : l ? (w.css("width", "auto"), w.removeAttr("width"), w.width() < p.clientWidth && h && w.width(p.clientWidth)) : s ? w.width(p.clientWidth) : h && w.width(h);
            var T = 0;
            for (e = 0; e < u.length; e++) {
                var C = W(f[e]),
                    S = C.outerWidth() - C.width(),
                    D = b.bBounding ? Math.ceil(f[e].getBoundingClientRect().width) : C.outerWidth();
                T += D, a[u[e]].sWidth = Jt(D - S)
            }
            r.style.width = Jt(T), _.remove()
        }
        if (h && (r.style.width = Jt(h)), (h || l) && !t._reszEvt) {
            var I = function () {
                W(F).on("resize.DT-" + t.sInstance, $t(function () {
                    $(t)
                }))
            };
            g ? setTimeout(I, 1e3) : I(), t._reszEvt = !0
        }
    }
    var $t = I.util.throttle;

    function Xt(t, e) {
        if (!t) return 0;
        var n = W("<div/>").css("width", Jt(t)).appendTo(e || v.body),
            o = n[0].offsetWidth;
        return n.remove(), o
    }

    function Ut(t, e) {
        var n = Gt(t, e);
        if (n < 0) return null;
        var o = t.aoData[n];
        return o.nTr ? o.anCells[e] : W("<td/>").html(D(t, n, e, "display"))[0]
    }

    function Gt(t, e) {
        for (var n, o = -1, r = -1, a = 0, i = t.aoData.length; a < i; a++)(n = (n = (n = D(t, a, e, "display") + "").replace(zt, "")).replace(/&nbsp;/g, " ")).length > o && (o = n.length, r = a);
        return r
    }

    function Jt(t) {
        return null === t ? "0px" : "number" == typeof t ? t < 0 ? "0px" : t + "px" : t.match(/\d$/) ? t + "px" : t
    }

    function Kt(t) {
        function e(t) {
            t.length && !W.isArray(t[0]) ? h.push(t) : W.merge(h, t)
        }
        var n, o, r, a, i, s, l, d = [],
            c = t.aoColumns,
            u = t.aaSortingFixed,
            f = W.isPlainObject(u),
            h = [];
        for (W.isArray(u) && e(u), f && u.pre && e(u.pre), e(t.aaSorting), f && u.post && e(u.post), n = 0; n < h.length; n++)
            for (o = 0, r = (a = c[l = h[n][0]].aDataSort).length; o < r; o++) s = c[i = a[o]].sType || "string", h[n]._idx === z && (h[n]._idx = W.inArray(h[n][1], c[i].asSorting)), d.push({
                src: l,
                col: i,
                dir: h[n][1],
                index: h[n]._idx,
                type: s,
                formatter: I.ext.type.order[s + "-pre"]
            });
        return d
    }

    function Yt(t) {
        var e, n, o, r, c, u = [],
            f = I.ext.type.order,
            h = t.aoData,
            a = (t.aoColumns, 0),
            i = t.aiDisplayMaster;
        for (S(t), e = 0, n = (c = Kt(t)).length; e < n; e++)(r = c[e]).formatter && a++ , ne(t, r.col);
        if ("ssp" != pe(t) && 0 !== c.length) {
            for (e = 0, o = i.length; e < o; e++) u[i[e]] = e;
            a === c.length ? i.sort(function (t, e) {
                var n, o, r, a, i, s = c.length,
                    l = h[t]._aSortData,
                    d = h[e]._aSortData;
                for (r = 0; r < s; r++)
                    if (0 != (a = (n = l[(i = c[r]).col]) < (o = d[i.col]) ? -1 : o < n ? 1 : 0)) return "asc" === i.dir ? a : -a;
                return (n = u[t]) < (o = u[e]) ? -1 : o < n ? 1 : 0
            }) : i.sort(function (t, e) {
                var n, o, r, a, i, s = c.length,
                    l = h[t]._aSortData,
                    d = h[e]._aSortData;
                for (r = 0; r < s; r++)
                    if (n = l[(i = c[r]).col], o = d[i.col], 0 !== (a = (f[i.type + "-" + i.dir] || f["string-" + i.dir])(n, o))) return a;
                return (n = u[t]) < (o = u[e]) ? -1 : o < n ? 1 : 0
            })
        }
        t.bSorted = !0
    }

    function Qt(t) {
        for (var e, n = t.aoColumns, o = Kt(t), r = t.oLanguage.oAria, a = 0, i = n.length; a < i; a++) {
            var s = n[a],
                l = s.asSorting,
                d = s.sTitle.replace(/<.*?>/g, ""),
                c = s.nTh;
            c.removeAttribute("aria-sort"), e = s.bSortable ? d + ("asc" === (0 < o.length && o[0].col == a ? (c.setAttribute("aria-sort", "asc" == o[0].dir ? "ascending" : "descending"), l[o[0].index + 1] || l[0]) : l[0]) ? r.sSortAscending : r.sSortDescending) : d, c.setAttribute("aria-label", e)
        }
    }

    function Zt(t, e, n, o) {
        function r(t, e) {
            var n = t._idx;
            return n === z && (n = W.inArray(t[1], l)), n + 1 < l.length ? n + 1 : e ? null : 0
        }
        var a, i = t.aoColumns[e],
            s = t.aaSorting,
            l = i.asSorting;
        if ("number" == typeof s[0] && (s = t.aaSorting = [s]), n && t.oFeatures.bSortMulti) {
            var d = W.inArray(e, V(s, "0")); - 1 !== d ? (null === (a = r(s[d], !0)) && 1 === s.length && (a = 0), null === a ? s.splice(d, 1) : (s[d][1] = l[a], s[d]._idx = a)) : (s.push([e, l[0], 0]), s[s.length - 1]._idx = 0)
        } else s.length && s[0][0] == e ? (a = r(s[0]), s.length = 1, s[0][1] = l[a], s[0]._idx = a) : (s.length = 0, s.push([e, l[0]]), s[0]._idx = 0);
        lt(t), "function" == typeof o && o(t)
    }

    function te(e, t, n, o) {
        var r = e.aoColumns[n];
        de(t, {}, function (t) {
            !1 !== r.bSortable && (e.oFeatures.bProcessing ? (qt(e, !0), setTimeout(function () {
                Zt(e, n, t.shiftKey, o), "ssp" !== pe(e) && qt(e, !1)
            }, 0)) : Zt(e, n, t.shiftKey, o))
        })
    }

    function ee(t) {
        var e, n, o, r = t.aLastSort,
            a = t.oClasses.sSortColumn,
            i = Kt(t),
            s = t.oFeatures;
        if (s.bSort && s.bSortClasses) {
            for (e = 0, n = r.length; e < n; e++) o = r[e].src, W(V(t.aoData, "anCells", o)).removeClass(a + (e < 2 ? e + 1 : 3));
            for (e = 0, n = i.length; e < n; e++) o = i[e].src, W(V(t.aoData, "anCells", o)).addClass(a + (e < 2 ? e + 1 : 3))
        }
        t.aLastSort = i
    }

    function ne(t, e) {
        var n, o, r, a = t.aoColumns[e],
            i = I.ext.order[a.sSortDataType];
        i && (n = i.call(t.oInstance, t, e, C(t, e)));
        for (var s = I.ext.type.order[a.sType + "-pre"], l = 0, d = t.aoData.length; l < d; l++)(o = t.aoData[l])._aSortData || (o._aSortData = []), o._aSortData[e] && !i || (r = i ? n[l] : D(t, l, e, "sort"), o._aSortData[e] = s ? s(r) : r)
    }

    function oe(n) {
        if (n.oFeatures.bStateSave && !n.bDestroying) {
            var t = {
                time: +new Date,
                start: n._iDisplayStart,
                length: n._iDisplayLength,
                order: W.extend(!0, [], n.aaSorting),
                search: It(n.oPreviousSearch),
                columns: W.map(n.aoColumns, function (t, e) {
                    return {
                        visible: t.bVisible,
                        search: It(n.aoPreSearchCols[e])
                    }
                })
            };
            ue(n, "aoStateSaveParams", "stateSaveParams", [n, t]), n.oSavedState = t, n.fnStateSaveCallback.call(n.oInstance, n, t)
        }
    }

    function re(r, t, a) {
        function e(t) {
            if (t && t.time) {
                var e = ue(r, "aoStateLoadParams", "stateLoadParams", [r, t]);
                if (-1 === W.inArray(!1, e)) {
                    var n = r.iStateDuration;
                    if (0 < n && t.time < +new Date - 1e3 * n) a();
                    else if (t.columns && l.length !== t.columns.length) a();
                    else {
                        if (r.oLoadedState = W.extend(!0, {}, t), t.start !== z && (r._iDisplayStart = t.start, r.iInitDisplayStart = t.start), t.length !== z && (r._iDisplayLength = t.length), t.order !== z && (r.aaSorting = [], W.each(t.order, function (t, e) {
                            r.aaSorting.push(e[0] >= l.length ? [0, e[1]] : e)
                        })), t.search !== z && W.extend(r.oPreviousSearch, Ft(t.search)), t.columns)
                            for (i = 0, s = t.columns.length; i < s; i++) {
                                var o = t.columns[i];
                                o.visible !== z && (l[i].bVisible = o.visible), o.search !== z && W.extend(r.aoPreSearchCols[i], Ft(o.search))
                            }
                        ue(r, "aoStateLoaded", "stateLoaded", [r, t]), a()
                    }
                } else a()
            } else a()
        }
        var i, s, l = r.aoColumns;
        if (r.oFeatures.bStateSave) {
            var n = r.fnStateLoadCallback.call(r.oInstance, r, e);
            n !== z && e(n)
        } else a()
    }

    function ae(t) {
        var e = I.settings,
            n = W.inArray(t, V(e, "nTable"));
        return -1 !== n ? e[n] : null
    }

    function ie(t, e, n, o) {
        if (n = "DataTables warning: " + (t ? "table id=" + t.sTableId + " - " : "") + n, o && (n += ". For more information about this error, please see http://datatables.net/tn/" + o), e) F.console && console.log && console.log(n);
        else {
            var r = I.ext,
                a = r.sErrMode || r.errMode;
            if (t && ue(t, null, "error", [t, o, n]), "alert" == a) alert(n);
            else {
                if ("throw" == a) throw new Error(n);
                "function" == typeof a && a(t, o, n)
            }
        }
    }

    function se(n, o, t, e) {
        W.isArray(t) ? W.each(t, function (t, e) {
            W.isArray(e) ? se(n, o, e[0], e[1]) : se(n, o, e)
        }) : (e === z && (e = t), o[t] !== z && (n[e] = o[t]))
    }

    function le(t, e, n) {
        var o;
        for (var r in e) e.hasOwnProperty(r) && (o = e[r], W.isPlainObject(o) ? (W.isPlainObject(t[r]) || (t[r] = {}), W.extend(!0, t[r], o)) : n && "data" !== r && "aaData" !== r && W.isArray(o) ? t[r] = o.slice() : t[r] = o);
        return t
    }

    function de(e, t, n) {
        W(e).on("click.DT", t, function (t) {
            W(e).blur(), n(t)
        }).on("keypress.DT", t, function (t) {
            13 === t.which && (t.preventDefault(), n(t))
        }).on("selectstart.DT", function () {
            return !1
        })
    }

    function ce(t, e, n, o) {
        n && t[e].push({
            fn: n,
            sName: o
        })
    }

    function ue(n, t, e, o) {
        var r = [];
        if (t && (r = W.map(n[t].slice().reverse(), function (t, e) {
            return t.fn.apply(n.oInstance, o)
        })), null !== e) {
            var a = W.Event(e + ".dt");
            W(n.nTable).trigger(a, o), r.push(a.result)
        }
        return r
    }

    function fe(t) {
        var e = t._iDisplayStart,
            n = t.fnDisplayEnd(),
            o = t._iDisplayLength;
        n <= e && (e = n - o), e -= e % o, (-1 === o || e < 0) && (e = 0), t._iDisplayStart = e
    }

    function he(t, e) {
        var n = t.renderer,
            o = I.ext.renderer[e];
        return W.isPlainObject(n) && n[e] ? o[n[e]] || o._ : "string" == typeof n && o[n] || o._
    }

    function pe(t) {
        return t.oFeatures.bServerSide ? "ssp" : t.ajax || t.sAjaxSource ? "ajax" : "dom"
    }
    var me = [],
        be = Array.prototype;
    y = function (t, e) {
        if (!(this instanceof y)) return new y(t, e);

        function n(t) {
            var e = function (t) {
                var e, n, o = I.settings,
                    r = W.map(o, function (t, e) {
                        return t.nTable
                    });
                return t ? t.nTable && t.oApi ? [t] : t.nodeName && "table" === t.nodeName.toLowerCase() ? -1 !== (e = W.inArray(t, r)) ? [o[e]] : null : t && "function" == typeof t.settings ? t.settings().toArray() : ("string" == typeof t ? n = W(t) : t instanceof W && (n = t), n ? n.map(function (t) {
                    return -1 !== (e = W.inArray(this, r)) ? o[e] : null
                }).toArray() : void 0) : []
            }(t);
            e && (o = o.concat(e))
        }
        var o = [];
        if (W.isArray(t))
            for (var r = 0, a = t.length; r < a; r++) n(t[r]);
        else n(t);
        this.context = w(o), e && W.merge(this, e), this.selector = {
            rows: null,
            cols: null,
            opts: null
        }, y.extend(this, this, me)
    }, I.Api = y, W.extend(y.prototype, {
        any: function () {
            return 0 !== this.count()
        },
        concat: be.concat,
        context: [],
        count: function () {
            return this.flatten().length
        },
        each: function (t) {
            for (var e = 0, n = this.length; e < n; e++) t.call(this, this[e], e, this);
            return this
        },
        eq: function (t) {
            var e = this.context;
            return e.length > t ? new y(e[t], this[t]) : null
        },
        filter: function (t) {
            var e = [];
            if (be.filter) e = be.filter.call(this, t, this);
            else
                for (var n = 0, o = this.length; n < o; n++) t.call(this, this[n], n, this) && e.push(this[n]);
            return new y(this.context, e)
        },
        flatten: function () {
            var t = [];
            return new y(this.context, t.concat.apply(t, this.toArray()))
        },
        join: be.join,
        indexOf: be.indexOf || function (t, e) {
            for (var n = e || 0, o = this.length; n < o; n++)
                if (this[n] === t) return n;
            return -1
        },
        iterator: function (t, e, n, o) {
            var r, a, i, s, l, d, c, u, f = [],
                h = this.context,
                p = this.selector;
            for ("string" == typeof t && (o = n, n = e, e = t, t = !1), a = 0, i = h.length; a < i; a++) {
                var m = new y(h[a]);
                if ("table" === e) (r = n.call(m, h[a], a)) !== z && f.push(r);
                else if ("columns" === e || "rows" === e) (r = n.call(m, h[a], this[a], a)) !== z && f.push(r);
                else if ("column" === e || "column-rows" === e || "row" === e || "cell" === e)
                    for (c = this[a], "column-rows" === e && (d = xe(h[a], p.opts)), s = 0, l = c.length; s < l; s++) u = c[s], (r = "cell" === e ? n.call(m, h[a], u.row, u.column, a, s) : n.call(m, h[a], u, a, s, d)) !== z && f.push(r)
            }
            if (f.length || o) {
                var b = new y(h, t ? f.concat.apply([], f) : f),
                    g = b.selector;
                return g.rows = p.rows, g.cols = p.cols, g.opts = p.opts, b
            }
            return this
        },
        lastIndexOf: be.lastIndexOf || function (t, e) {
            return this.indexOf.apply(this.toArray.reverse(), arguments)
        },
        length: 0,
        map: function (t) {
            var e = [];
            if (be.map) e = be.map.call(this, t, this);
            else
                for (var n = 0, o = this.length; n < o; n++) e.push(t.call(this, this[n], n));
            return new y(this.context, e)
        },
        pluck: function (e) {
            return this.map(function (t) {
                return t[e]
            })
        },
        pop: be.pop,
        push: be.push,
        reduce: be.reduce || function (t, e) {
            return T(this, t, e, 0, this.length, 1)
        },
        reduceRight: be.reduceRight || function (t, e) {
            return T(this, t, e, this.length - 1, -1, -1)
        },
        reverse: be.reverse,
        selector: null,
        shift: be.shift,
        slice: function () {
            return new y(this.context, this)
        },
        sort: be.sort,
        splice: be.splice,
        toArray: function () {
            return be.slice.call(this)
        },
        to$: function () {
            return W(this)
        },
        toJQuery: function () {
            return W(this)
        },
        unique: function () {
            return new y(this.context, w(this))
        },
        unshift: be.unshift
    }), y.extend = function (t, e, n) {
        if (n.length && e && (e instanceof y || e.__dt_wrapper)) {
            var o, r, a, i = function (e, n, o) {
                return function () {
                    var t = n.apply(e, arguments);
                    return y.extend(t, t, o.methodExt), t
                }
            };
            for (o = 0, r = n.length; o < r; o++) e[(a = n[o]).name] = "function" == typeof a.val ? i(t, a.val, a) : W.isPlainObject(a.val) ? {} : a.val, e[a.name].__dt_wrapper = !0, y.extend(t, e[a.name], a.propExt)
        }
    }, y.register = e = function (t, e) {
        if (W.isArray(t))
            for (var n = 0, o = t.length; n < o; n++) y.register(t[n], e);
        else {
            var r, a, i, s, l = t.split("."),
                d = me,
                c = function (t, e) {
                    for (var n = 0, o = t.length; n < o; n++)
                        if (t[n].name === e) return t[n];
                    return null
                };
            for (r = 0, a = l.length; r < a; r++) {
                var u = c(d, i = (s = -1 !== l[r].indexOf("()")) ? l[r].replace("()", "") : l[r]);
                u || (u = {
                    name: i,
                    val: {},
                    methodExt: [],
                    propExt: []
                }, d.push(u)), r === a - 1 ? u.val = e : d = s ? u.methodExt : u.propExt
            }
        }
    }, y.registerPlural = t = function (t, e, n) {
        y.register(t, n), y.register(e, function () {
            var t = n.apply(this, arguments);
            return t === this ? this : t instanceof y ? t.length ? W.isArray(t[0]) ? new y(t.context, t[0]) : t[0] : z : t
        })
    };
    e("tables()", function (t) {
        return t ? new y(function (t, n) {
            if ("number" == typeof t) return [n[t]];
            var o = W.map(n, function (t, e) {
                return t.nTable
            });
            return W(o).filter(t).map(function (t) {
                var e = W.inArray(this, o);
                return n[e]
            }).toArray()
        }(t, this.context)) : this
    }), e("table()", function (t) {
        var e = this.tables(t),
            n = e.context;
        return n.length ? new y(n[0]) : e
    }), t("tables().nodes()", "table().node()", function () {
        return this.iterator("table", function (t) {
            return t.nTable
        }, 1)
    }), t("tables().body()", "table().body()", function () {
        return this.iterator("table", function (t) {
            return t.nTBody
        }, 1)
    }), t("tables().header()", "table().header()", function () {
        return this.iterator("table", function (t) {
            return t.nTHead
        }, 1)
    }), t("tables().footer()", "table().footer()", function () {
        return this.iterator("table", function (t) {
            return t.nTFoot
        }, 1)
    }), t("tables().containers()", "table().container()", function () {
        return this.iterator("table", function (t) {
            return t.nTableWrapper
        }, 1)
    }), e("draw()", function (e) {
        return this.iterator("table", function (t) {
            "page" === e ? st(t) : ("string" == typeof e && (e = "full-hold" !== e), lt(t, !1 === e))
        })
    }), e("page()", function (e) {
        return e === z ? this.page.info().page : this.iterator("table", function (t) {
            jt(t, e)
        })
    }), e("page.info()", function (t) {
        if (0 === this.context.length) return z;
        var e = this.context[0],
            n = e._iDisplayStart,
            o = e.oFeatures.bPaginate ? e._iDisplayLength : -1,
            r = e.fnRecordsDisplay(),
            a = -1 === o;
        return {
            page: a ? 0 : Math.floor(n / o),
            pages: a ? 1 : Math.ceil(r / o),
            start: n,
            end: e.fnDisplayEnd(),
            length: o,
            recordsTotal: e.fnRecordsTotal(),
            recordsDisplay: r,
            serverSide: "ssp" === pe(e)
        }
    }), e("page.len()", function (e) {
        return e === z ? 0 !== this.context.length ? this.context[0]._iDisplayLength : z : this.iterator("table", function (t) {
            Ht(t, e)
        })
    });

    function ge(r, a, t) {
        if (t) {
            var e = new y(r);
            e.one("draw", function () {
                t(e.ajax.json())
            })
        }
        if ("ssp" == pe(r)) lt(r, a);
        else {
            qt(r, !0);
            var n = r.jqXHR;
            n && 4 !== n.readyState && n.abort(), ft(r, [], function (t) {
                Z(r);
                for (var e = bt(r, t), n = 0, o = e.length; n < o; n++) q(r, e[n]);
                lt(r, a), qt(r, !1)
            })
        }
    }
    e("ajax.json()", function () {
        var t = this.context;
        if (0 < t.length) return t[0].json
    }), e("ajax.params()", function () {
        var t = this.context;
        if (0 < t.length) return t[0].oAjaxData
    }), e("ajax.reload()", function (e, n) {
        return this.iterator("table", function (t) {
            ge(t, !1 === n, e)
        })
    }), e("ajax.url()", function (e) {
        var t = this.context;
        return e === z ? 0 === t.length ? z : (t = t[0]).ajax ? W.isPlainObject(t.ajax) ? t.ajax.url : t.ajax : t.sAjaxSource : this.iterator("table", function (t) {
            W.isPlainObject(t.ajax) ? t.ajax.url = e : t.ajax = e
        })
    }), e("ajax.url().load()", function (e, n) {
        return this.iterator("table", function (t) {
            ge(t, !1 === n, e)
        })
    });

    function ve(t, e, n, o, r) {
        var a, i, s, l, d, c, u = [],
            f = typeof e;
        for (e && "string" != f && "function" != f && e.length !== z || (e = [e]), s = 0, l = e.length; s < l; s++)
            for (d = 0, c = (i = e[s] && e[s].split && !e[s].match(/[\[\(:]/) ? e[s].split(",") : [e[s]]).length; d < c; d++)(a = n("string" == typeof i[d] ? W.trim(i[d]) : i[d])) && a.length && (u = u.concat(a));
        var h = g.selector[t];
        if (h.length)
            for (s = 0, l = h.length; s < l; s++) u = h[s](o, r, u);
        return w(u)
    }

    function ye(t) {
        return (t = t || {}).filter && t.search === z && (t.search = t.filter), W.extend({
            search: "none",
            order: "current",
            page: "all"
        }, t)
    }

    function we(t) {
        for (var e = 0, n = t.length; e < n; e++)
            if (0 < t[e].length) return t[0] = t[e], t[0].length = 1, t.length = 1, t.context = [t.context[e]], t;
        return t.length = 0, t
    }
    var xe = function (t, e) {
        var n, o = [],
            r = t.aiDisplay,
            a = t.aiDisplayMaster,
            i = e.search,
            s = e.order,
            l = e.page;
        if ("ssp" == pe(t)) return "removed" === i ? [] : p(0, a.length);
        if ("current" == l)
            for (c = t._iDisplayStart, u = t.fnDisplayEnd(); c < u; c++) o.push(r[c]);
        else if ("current" == s || "applied" == s) {
            if ("none" == i) o = a.slice();
            else if ("applied" == i) o = r.slice();
            else if ("removed" == i) {
                for (var d = {}, c = 0, u = r.length; c < u; c++) d[r[c]] = null;
                o = W.map(a, function (t) {
                    return d.hasOwnProperty(t) ? null : t
                })
            }
        } else if ("index" == s || "original" == s)
            for (c = 0, u = t.aoData.length; c < u; c++) "none" == i ? o.push(c) : (-1 === (n = W.inArray(c, r)) && "removed" == i || 0 <= n && "applied" == i) && o.push(c);
        return o
    };
    e("rows()", function (e, n) {
        e === z ? e = "" : W.isPlainObject(e) && (n = e, e = ""), n = ye(n);
        var t = this.iterator("table", function (t) {
            return function (l, t, d) {
                var c;
                return ve("row", t, function (n) {
                    var t = h(n),
                        o = l.aoData;
                    if (null !== t && !d) return [t];
                    if (c = c || xe(l, d), null !== t && -1 !== W.inArray(t, c)) return [t];
                    if (null === n || n === z || "" === n) return c;
                    if ("function" == typeof n) return W.map(c, function (t) {
                        var e = o[t];
                        return n(t, e._aData, e.nTr) ? t : null
                    });
                    if (n.nodeName) {
                        var e = n._DT_RowIndex,
                            r = n._DT_CellIndex;
                        if (e !== z) return o[e] && o[e].nTr === n ? [e] : [];
                        if (r) return o[r.row] && o[r.row].nTr === n ? [r.row] : [];
                        var a = W(n).closest("*[data-dt-row]");
                        return a.length ? [a.data("dt-row")] : []
                    }
                    if ("string" == typeof n && "#" === n.charAt(0)) {
                        var i = l.aIds[n.replace(/^#/, "")];
                        if (i !== z) return [i.idx]
                    }
                    var s = b(m(l.aoData, c, "nTr"));
                    return W(s).filter(n).map(function () {
                        return this._DT_RowIndex
                    }).toArray()
                }, l, d)
            }(t, e, n)
        }, 1);
        return t.selector.rows = e, t.selector.opts = n, t
    }), e("rows().nodes()", function () {
        return this.iterator("row", function (t, e) {
            return t.aoData[e].nTr || z
        }, 1)
    }), e("rows().data()", function () {
        return this.iterator(!0, "rows", function (t, e) {
            return m(t.aoData, e, "_aData")
        }, 1)
    }), t("rows().cache()", "row().cache()", function (o) {
        return this.iterator("row", function (t, e) {
            var n = t.aoData[e];
            return "search" === o ? n._aFilterData : n._aSortData
        }, 1)
    }), t("rows().invalidate()", "row().invalidate()", function (n) {
        return this.iterator("row", function (t, e) {
            et(t, e, n)
        })
    }), t("rows().indexes()", "row().index()", function () {
        return this.iterator("row", function (t, e) {
            return e
        }, 1)
    }), t("rows().ids()", "row().id()", function (t) {
        for (var e = [], n = this.context, o = 0, r = n.length; o < r; o++)
            for (var a = 0, i = this[o].length; a < i; a++) {
                var s = n[o].rowIdFn(n[o].aoData[this[o][a]]._aData);
                e.push((!0 === t ? "#" : "") + s)
            }
        return new y(n, e)
    }), t("rows().remove()", "row().remove()", function () {
        var f = this;
        return this.iterator("row", function (t, e, n) {
            var o, r, a, i, s, l, d = t.aoData,
                c = d[e];
            for (d.splice(e, 1), o = 0, r = d.length; o < r; o++)
                if (l = (s = d[o]).anCells, null !== s.nTr && (s.nTr._DT_RowIndex = o), null !== l)
                    for (a = 0, i = l.length; a < i; a++) l[a]._DT_CellIndex.row = o;
            tt(t.aiDisplayMaster, e), tt(t.aiDisplay, e), tt(f[n], e, !1), 0 < t._iRecordsDisplay && t._iRecordsDisplay-- , fe(t);
            var u = t.rowIdFn(c._aData);
            u !== z && delete t.aIds[u]
        }), this.iterator("table", function (t) {
            for (var e = 0, n = t.aoData.length; e < n; e++) t.aoData[e].idx = e
        }), this
    }), e("rows.add()", function (a) {
        var t = this.iterator("table", function (t) {
            var e, n, o, r = [];
            for (n = 0, o = a.length; n < o; n++)(e = a[n]).nodeName && "TR" === e.nodeName.toUpperCase() ? r.push(E(t, e)[0]) : r.push(q(t, e));
            return r
        }, 1),
            e = this.rows(-1);
        return e.pop(), W.merge(e, t), e
    }), e("row()", function (t, e) {
        return we(this.rows(t, e))
    }), e("row().data()", function (t) {
        var e = this.context;
        if (t === z) return e.length && this.length ? e[0].aoData[this[0]]._aData : z;
        var n = e[0].aoData[this[0]];
        return n._aData = t, W.isArray(t) && n.nTr.id && Y(e[0].rowId)(t, n.nTr.id), et(e[0], this[0], "data"), this
    }), e("row().node()", function () {
        var t = this.context;
        return t.length && this.length && t[0].aoData[this[0]].nTr || null
    }), e("row.add()", function (e) {
        e instanceof W && e.length && (e = e[0]);
        var t = this.iterator("table", function (t) {
            return e.nodeName && "TR" === e.nodeName.toUpperCase() ? E(t, e)[0] : q(t, e)
        });
        return this.row(t[0])
    });

    function _e(t, e) {
        var n = t.context;
        if (n.length) {
            var o = n[0].aoData[e !== z ? e : t[0]];
            o && o._details && (o._details.remove(), o._detailsShow = z, o._details = z)
        }
    }

    function Te(t, e) {
        var n = t.context;
        if (n.length && t.length) {
            var o = n[0].aoData[t[0]];
            o._details && ((o._detailsShow = e) ? o._details.insertAfter(o.nTr) : o._details.detach(), Ce(n[0]))
        }
    }
    var Ce = function (l) {
        var r = new y(l),
            t = ".dt.DT_details",
            e = "draw" + t,
            n = "column-visibility" + t,
            o = "destroy" + t,
            d = l.aoData;
        r.off(e + " " + n + " " + o), 0 < V(d, "_details").length && (r.on(e, function (t, e) {
            l === e && r.rows({
                page: "current"
            }).eq(0).each(function (t) {
                var e = d[t];
                e._detailsShow && e._details.insertAfter(e.nTr)
            })
        }), r.on(n, function (t, e, n, o) {
            if (l === e)
                for (var r, a = O(e), i = 0, s = d.length; i < s; i++)(r = d[i])._details && r._details.children("td[colspan]").attr("colspan", a)
        }), r.on(o, function (t, e) {
            if (l === e)
                for (var n = 0, o = d.length; n < o; n++) d[n]._details && _e(r, n)
        }))
    },
        Se = "row().child",
        De = Se + "()";
    e(De, function (t, e) {
        var n = this.context;
        return t === z ? n.length && this.length ? n[0].aoData[this[0]]._details : z : (!0 === t ? this.child.show() : !1 === t ? _e(this) : n.length && this.length && function (a, t, e, n) {
            var i = [],
                s = function (t, e) {
                    if (W.isArray(t) || t instanceof W)
                        for (var n = 0, o = t.length; n < o; n++) s(t[n], e);
                    else if (t.nodeName && "tr" === t.nodeName.toLowerCase()) i.push(t);
                    else {
                        var r = W("<tr><td/></tr>").addClass(e);
                        W("td", r).addClass(e).html(t)[0].colSpan = O(a), i.push(r[0])
                    }
                };
            s(e, n), t._details && t._details.detach(), t._details = W(i), t._detailsShow && t._details.insertAfter(t.nTr)
        }(n[0], n[0].aoData[this[0]], t, e), this)
    }), e([Se + ".show()", De + ".show()"], function (t) {
        return Te(this, !0), this
    }), e([Se + ".hide()", De + ".hide()"], function () {
        return Te(this, !1), this
    }), e([Se + ".remove()", De + ".remove()"], function () {
        return _e(this), this
    }), e(Se + ".isShown()", function () {
        var t = this.context;
        return t.length && this.length && t[0].aoData[this[0]]._detailsShow || !1
    });

    function Ie(t, e, n, o, r) {
        for (var a = [], i = 0, s = r.length; i < s; i++) a.push(D(t, r[i], e));
        return a
    }
    var Fe = /^([^:]+):(name|visIdx|visible)$/;
    e("columns()", function (e, n) {
        e === z ? e = "" : W.isPlainObject(e) && (n = e, e = ""), n = ye(n);
        var t = this.iterator("table", function (t) {
            return function (l, t, d) {
                var c = l.aoColumns,
                    u = V(c, "sName"),
                    f = V(c, "nTh");
                return ve("column", t, function (n) {
                    var t = h(n);
                    if ("" === n) return p(c.length);
                    if (null !== t) return [0 <= t ? t : c.length + t];
                    if ("function" == typeof n) {
                        var o = xe(l, d);
                        return W.map(c, function (t, e) {
                            return n(e, Ie(l, e, 0, 0, o), f[e]) ? e : null
                        })
                    }
                    var r = "string" == typeof n ? n.match(Fe) : "";
                    if (r) switch (r[2]) {
                        case "visIdx":
                        case "visible":
                            var e = parseInt(r[1], 10);
                            if (e < 0) {
                                var a = W.map(c, function (t, e) {
                                    return t.bVisible ? e : null
                                });
                                return [a[a.length + e]]
                            }
                            return [X(l, e)];
                        case "name":
                            return W.map(u, function (t, e) {
                                return t === r[1] ? e : null
                            });
                        default:
                            return []
                    }
                    if (n.nodeName && n._DT_CellIndex) return [n._DT_CellIndex.column];
                    var i = W(f).filter(n).map(function () {
                        return W.inArray(this, f)
                    }).toArray();
                    if (i.length || !n.nodeName) return i;
                    var s = W(n).closest("*[data-dt-column]");
                    return s.length ? [s.data("dt-column")] : []
                }, l, d)
            }(t, e, n)
        }, 1);
        return t.selector.cols = e, t.selector.opts = n, t
    }), t("columns().header()", "column().header()", function (t, e) {
        return this.iterator("column", function (t, e) {
            return t.aoColumns[e].nTh
        }, 1)
    }), t("columns().footer()", "column().footer()", function (t, e) {
        return this.iterator("column", function (t, e) {
            return t.aoColumns[e].nTf
        }, 1)
    }), t("columns().data()", "column().data()", function () {
        return this.iterator("column-rows", Ie, 1)
    }), t("columns().dataSrc()", "column().dataSrc()", function () {
        return this.iterator("column", function (t, e) {
            return t.aoColumns[e].mData
        }, 1)
    }), t("columns().cache()", "column().cache()", function (a) {
        return this.iterator("column-rows", function (t, e, n, o, r) {
            return m(t.aoData, r, "search" === a ? "_aFilterData" : "_aSortData", e)
        }, 1)
    }), t("columns().nodes()", "column().nodes()", function () {
        return this.iterator("column-rows", function (t, e, n, o, r) {
            return m(t.aoData, r, "anCells", e)
        }, 1)
    }), t("columns().visible()", "column().visible()", function (n, o) {
        var t = this.iterator("column", function (t, e) {
            if (n === z) return t.aoColumns[e].bVisible;
            ! function (t, e, n) {
                var o, r, a, i, s = t.aoColumns,
                    l = s[e],
                    d = t.aoData;
                if (n === z) return l.bVisible;
                if (l.bVisible !== n) {
                    if (n) {
                        var c = W.inArray(!0, V(s, "bVisible"), e + 1);
                        for (r = 0, a = d.length; r < a; r++) i = d[r].nTr, o = d[r].anCells, i && i.insertBefore(o[e], o[c] || null)
                    } else W(V(t.aoData, "anCells", e)).detach();
                    l.bVisible = n, it(t, t.aoHeader), it(t, t.aoFooter), t.aiDisplay.length || W(t.nTBody).find("td[colspan]").attr("colspan", O(t)), oe(t)
                }
            }(t, e, n)
        });
        return n !== z && (this.iterator("column", function (t, e) {
            ue(t, null, "column-visibility", [t, e, n, o])
        }), o !== z && !o || this.columns.adjust()), t
    }), t("columns().indexes()", "column().index()", function (n) {
        return this.iterator("column", function (t, e) {
            return "visible" === n ? C(t, e) : e
        }, 1)
    }), e("columns.adjust()", function () {
        return this.iterator("table", function (t) {
            $(t)
        }, 1)
    }), e("column.index()", function (t, e) {
        if (0 !== this.context.length) {
            var n = this.context[0];
            if ("fromVisible" === t || "toData" === t) return X(n, e);
            if ("fromData" === t || "toVisible" === t) return C(n, e)
        }
    }), e("column()", function (t, e) {
        return we(this.columns(t, e))
    });
    e("cells()", function (e, t, n) {
        if (W.isPlainObject(e) && (e.row === z ? (n = e, e = null) : (n = t, t = null)), W.isPlainObject(t) && (n = t, t = null), null === t || t === z) return this.iterator("table", function (t) {
            return function (o, t, e) {
                var r, a, i, s, l, d, c, u = o.aoData,
                    f = xe(o, e),
                    n = b(m(u, f, "anCells")),
                    h = W([].concat.apply([], n)),
                    p = o.aoColumns.length;
                return ve("cell", t, function (t) {
                    var e = "function" == typeof t;
                    if (null === t || t === z || e) {
                        for (a = [], i = 0, s = f.length; i < s; i++)
                            for (r = f[i], l = 0; l < p; l++) d = {
                                row: r,
                                column: l
                            }, e ? (c = u[r], t(d, D(o, r, l), c.anCells ? c.anCells[l] : null) && a.push(d)) : a.push(d);
                        return a
                    }
                    if (W.isPlainObject(t)) return t.column !== z && t.row !== z && -1 !== W.inArray(t.row, f) ? [t] : [];
                    var n = h.filter(t).map(function (t, e) {
                        return {
                            row: e._DT_CellIndex.row,
                            column: e._DT_CellIndex.column
                        }
                    }).toArray();
                    return n.length || !t.nodeName ? n : (c = W(t).closest("*[data-dt-row]")).length ? [{
                        row: c.data("dt-row"),
                        column: c.data("dt-column")
                    }] : []
                }, o, e)
            }(t, e, ye(n))
        });
        var o, r, a, i, s, l = this.columns(t),
            d = this.rows(e);
        this.iterator("table", function (t, e) {
            for (o = [], r = 0, a = d[e].length; r < a; r++)
                for (i = 0, s = l[e].length; i < s; i++) o.push({
                    row: d[e][r],
                    column: l[e][i]
                })
        }, 1);
        var c = this.cells(o, n);
        return W.extend(c.selector, {
            cols: t,
            rows: e,
            opts: n
        }), c
    }), t("cells().nodes()", "cell().node()", function () {
        return this.iterator("cell", function (t, e, n) {
            var o = t.aoData[e];
            return o && o.anCells ? o.anCells[n] : z
        }, 1)
    }), e("cells().data()", function () {
        return this.iterator("cell", function (t, e, n) {
            return D(t, e, n)
        }, 1)
    }), t("cells().cache()", "cell().cache()", function (o) {
        return o = "search" === o ? "_aFilterData" : "_aSortData", this.iterator("cell", function (t, e, n) {
            return t.aoData[e][o][n]
        }, 1)
    }), t("cells().render()", "cell().render()", function (o) {
        return this.iterator("cell", function (t, e, n) {
            return D(t, e, n, o)
        }, 1)
    }), t("cells().indexes()", "cell().index()", function () {
        return this.iterator("cell", function (t, e, n) {
            return {
                row: e,
                column: n,
                columnVisible: C(t, n)
            }
        }, 1)
    }), t("cells().invalidate()", "cell().invalidate()", function (o) {
        return this.iterator("cell", function (t, e, n) {
            et(t, e, o, n)
        })
    }), e("cell()", function (t, e, n) {
        return we(this.cells(t, e, n))
    }), e("cell().data()", function (t) {
        var e = this.context,
            n = this[0];
        return t === z ? e.length && n.length ? D(e[0], n[0].row, n[0].column) : z : (M(e[0], n[0].row, n[0].column, t), et(e[0], n[0].row, "data", n[0].column), this)
    }), e("order()", function (e, t) {
        var n = this.context;
        return e === z ? 0 !== n.length ? n[0].aaSorting : z : ("number" == typeof e ? e = [
            [e, t]
        ] : e.length && !W.isArray(e[0]) && (e = Array.prototype.slice.call(arguments)), this.iterator("table", function (t) {
            t.aaSorting = e.slice()
        }))
    }), e("order.listener()", function (e, n, o) {
        return this.iterator("table", function (t) {
            te(t, e, n, o)
        })
    }), e("order.fixed()", function (e) {
        if (e) return this.iterator("table", function (t) {
            t.aaSortingFixed = W.extend(!0, {}, e)
        });
        var t = this.context,
            n = t.length ? t[0].aaSortingFixed : z;
        return W.isArray(n) ? {
            pre: n
        } : n
    }), e(["columns().order()", "column().order()"], function (o) {
        var r = this;
        return this.iterator("table", function (t, e) {
            var n = [];
            W.each(r[e], function (t, e) {
                n.push([e, o])
            }), t.aaSorting = n
        })
    }), e("search()", function (e, n, o, r) {
        var t = this.context;
        return e === z ? 0 !== t.length ? t[0].oPreviousSearch.sSearch : z : this.iterator("table", function (t) {
            t.oFeatures.bFilter && vt(t, W.extend({}, t.oPreviousSearch, {
                sSearch: e + "",
                bRegex: null !== n && n,
                bSmart: null === o || o,
                bCaseInsensitive: null === r || r
            }), 1)
        })
    }), t("columns().search()", "column().search()", function (o, r, a, i) {
        return this.iterator("column", function (t, e) {
            var n = t.aoPreSearchCols;
            if (o === z) return n[e].sSearch;
            t.oFeatures.bFilter && (W.extend(n[e], {
                sSearch: o + "",
                bRegex: null !== r && r,
                bSmart: null === a || a,
                bCaseInsensitive: null === i || i
            }), vt(t, t.oPreviousSearch, 1))
        })
    }), e("state()", function () {
        return this.context.length ? this.context[0].oSavedState : null
    }), e("state.clear()", function () {
        return this.iterator("table", function (t) {
            t.fnStateSaveCallback.call(t.oInstance, t, {})
        })
    }), e("state.loaded()", function () {
        return this.context.length ? this.context[0].oLoadedState : null
    }), e("state.save()", function () {
        return this.iterator("table", function (t) {
            oe(t)
        })
    }), I.versionCheck = I.fnVersionCheck = function (t) {
        for (var e, n, o = I.version.split("."), r = t.split("."), a = 0, i = r.length; a < i; a++)
            if ((e = parseInt(o[a], 10) || 0) !== (n = parseInt(r[a], 10) || 0)) return n < e;
        return !0
    }, I.isDataTable = I.fnIsDataTable = function (t) {
        var r = W(t).get(0),
            a = !1;
        return t instanceof I.Api || (W.each(I.settings, function (t, e) {
            var n = e.nScrollHead ? W("table", e.nScrollHead)[0] : null,
                o = e.nScrollFoot ? W("table", e.nScrollFoot)[0] : null;
            e.nTable !== r && n !== r && o !== r || (a = !0)
        }), a)
    }, I.tables = I.fnTables = function (e) {
        var t = !1;
        W.isPlainObject(e) && (t = e.api, e = e.visible);
        var n = W.map(I.settings, function (t) {
            if (!e || e && W(t.nTable).is(":visible")) return t.nTable
        });
        return t ? new y(n) : n
    }, I.camelToHungarian = R, e("$()", function (t, e) {
        var n = this.rows(e).nodes(),
            o = W(n);
        return W([].concat(o.filter(t).toArray(), o.find(t).toArray()))
    }), W.each(["on", "one", "off"], function (t, n) {
        e(n + "()", function () {
            var t = Array.prototype.slice.call(arguments);
            t[0] = W.map(t[0].split(/\s/), function (t) {
                return t.match(/\.dt\b/) ? t : t + ".dt"
            }).join(" ");
            var e = W(this.tables().nodes());
            return e[n].apply(e, t), this
        })
    }), e("clear()", function () {
        return this.iterator("table", function (t) {
            Z(t)
        })
    }), e("settings()", function () {
        return new y(this.context, this.context)
    }), e("init()", function () {
        var t = this.context;
        return t.length ? t[0].oInit : null
    }), e("data()", function () {
        return this.iterator("table", function (t) {
            return V(t.aoData, "_aData")
        }).flatten()
    }), e("destroy()", function (p) {
        return p = p || !1, this.iterator("table", function (e) {
            var n, t = e.nTableWrapper.parentNode,
                o = e.oClasses,
                r = e.nTable,
                a = e.nTBody,
                i = e.nTHead,
                s = e.nTFoot,
                l = W(r),
                d = W(a),
                c = W(e.nTableWrapper),
                u = W.map(e.aoData, function (t) {
                    return t.nTr
                });
            e.bDestroying = !0, ue(e, "aoDestroyCallback", "destroy", [e]), p || new y(e).columns().visible(!0), c.off(".DT").find(":not(tbody *)").off(".DT"), W(F).off(".DT-" + e.sInstance), r != i.parentNode && (l.children("thead").detach(), l.append(i)), s && r != s.parentNode && (l.children("tfoot").detach(), l.append(s)), e.aaSorting = [], e.aaSortingFixed = [], ee(e), W(u).removeClass(e.asStripeClasses.join(" ")), W("th, td", i).removeClass(o.sSortable + " " + o.sSortableAsc + " " + o.sSortableDesc + " " + o.sSortableNone), d.children().detach(), d.append(u);
            var f = p ? "remove" : "detach";
            l[f](), c[f](), !p && t && (t.insertBefore(r, e.nTableReinsertBefore), l.css("width", e.sDestroyWidth).removeClass(o.sTable), (n = e.asDestroyStripes.length) && d.children().each(function (t) {
                W(this).addClass(e.asDestroyStripes[t % n])
            }));
            var h = W.inArray(e, I.settings); - 1 !== h && I.settings.splice(h, 1)
        })
    }), W.each(["column", "row", "cell"], function (t, l) {
        e(l + "s().every()", function (a) {
            var i = this.selector.opts,
                s = this;
            return this.iterator(l, function (t, e, n, o, r) {
                a.call(s[l](e, "cell" === l ? n : i, "cell" === l ? i : z), e, n, o, r)
            })
        })
    }), e("i18n()", function (t, e, n) {
        var o = this.context[0],
            r = K(t)(o.oLanguage);
        return r === z && (r = e), n !== z && W.isPlainObject(r) && (r = r[n] !== z ? r[n] : r._), r.replace("%d", n)
    }), I.version = "1.10.19", I.settings = [], I.models = {}, I.models.oSearch = {
        bCaseInsensitive: !0,
        sSearch: "",
        bRegex: !1,
        bSmart: !0
    }, I.models.oRow = {
        nTr: null,
        anCells: null,
        _aData: [],
        _aSortData: null,
        _aFilterData: null,
        _sFilterRow: null,
        _sRowStripe: "",
        src: null,
        idx: -1
    }, I.models.oColumn = {
        idx: null,
        aDataSort: null,
        asSorting: null,
        bSearchable: null,
        bSortable: null,
        bVisible: null,
        _sManualType: null,
        _bAttrSrc: !1,
        fnCreatedCell: null,
        fnGetData: null,
        fnSetData: null,
        mData: null,
        mRender: null,
        nTh: null,
        nTf: null,
        sClass: null,
        sContentPadding: null,
        sDefaultContent: null,
        sName: null,
        sSortDataType: "std",
        sSortingClass: null,
        sSortingClassJUI: null,
        sTitle: null,
        sType: null,
        sWidth: null,
        sWidthOrig: null
    }, I.defaults = {
        aaData: null,
        aaSorting: [
            [0, "asc"]
        ],
        aaSortingFixed: [],
        ajax: null,
        aLengthMenu: [10, 25, 50, 100],
        aoColumns: null,
        aoColumnDefs: null,
        aoSearchCols: [],
        asStripeClasses: null,
        bAutoWidth: !0,
        bDeferRender: !1,
        bDestroy: !1,
        bFilter: !0,
        bInfo: !0,
        bLengthChange: !0,
        bPaginate: !0,
        bProcessing: !1,
        bRetrieve: !1,
        bScrollCollapse: !1,
        bServerSide: !1,
        bSort: !0,
        bSortMulti: !0,
        bSortCellsTop: !1,
        bSortClasses: !0,
        bStateSave: !1,
        fnCreatedRow: null,
        fnDrawCallback: null,
        fnFooterCallback: null,
        fnFormatNumber: function (t) {
            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.oLanguage.sThousands)
        },
        fnHeaderCallback: null,
        fnInfoCallback: null,
        fnInitComplete: null,
        fnPreDrawCallback: null,
        fnRowCallback: null,
        fnServerData: null,
        fnServerParams: null,
        fnStateLoadCallback: function (t) {
            try {
                return JSON.parse((-1 === t.iStateDuration ? sessionStorage : localStorage).getItem("DataTables_" + t.sInstance + "_" + location.pathname))
            } catch (t) { }
        },
        fnStateLoadParams: null,
        fnStateLoaded: null,
        fnStateSaveCallback: function (t, e) {
            try {
                (-1 === t.iStateDuration ? sessionStorage : localStorage).setItem("DataTables_" + t.sInstance + "_" + location.pathname, JSON.stringify(e))
            } catch (t) { }
        },
        fnStateSaveParams: null,
        iStateDuration: 7200,
        iDeferLoading: null,
        iDisplayLength: 10,
        iDisplayStart: 0,
        iTabIndex: 0,
        oClasses: {},
        oLanguage: {
            oAria: {
                sSortAscending: ": ativar para classificar a coluna ascendente",
                sSortDescending: ": ativar para classificar a coluna descendente"
            },
            oPaginate: {
                sFirst: "First",
                sLast: "Last",
                sNext: "Next",
                sPrevious: "Previous"
            },
            sEmptyTable: "Sem dados disponíveis na tabela",
            sInfo: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
            sInfoEmpty: "Mostrando 0 a 0 de 0 entradas",
            sInfoFiltered: "(filtrado do total de entradas _MAX_)",
            sInfoPostFix: "",
            sDecimal: "",
            sThousands: ",",
            sLengthMenu: "Mostrar entradas _MENU_",
            sLoadingRecords: "Carregando...",
            sProcessing: "Em processamento...",
            sSearch: "Procurar:",
            sSearchPlaceholder: "",
            sUrl: "",
            sZeroRecords: "Nenhum registro correspondente encontrado"
        },
        oSearch: W.extend({}, I.models.oSearch),
        sAjaxDataProp: "data",
        sAjaxSource: null,
        sDom: "lfrtip",
        searchDelay: null,
        sPaginationType: "simple_numbers",
        sScrollX: "",
        sScrollXInner: "",
        sScrollY: "",
        sServerMethod: "GET",
        renderer: null,
        rowId: "DT_RowId"
    }, x(I.defaults), I.defaults.column = {
        aDataSort: null,
        iDataSort: -1,
        asSorting: ["asc", "desc"],
        bSearchable: !0,
        bSortable: !0,
        bVisible: !0,
        fnCreatedCell: null,
        mData: null,
        mRender: null,
        sCellType: "td",
        sClass: "",
        sContentPadding: "",
        sDefaultContent: null,
        sName: "",
        sSortDataType: "std",
        sTitle: null,
        sType: null,
        sWidth: null
    }, x(I.defaults.column), I.models.oSettings = {
        oFeatures: {
            bAutoWidth: null,
            bDeferRender: null,
            bFilter: null,
            bInfo: null,
            bLengthChange: null,
            bPaginate: null,
            bProcessing: null,
            bServerSide: null,
            bSort: null,
            bSortMulti: null,
            bSortClasses: null,
            bStateSave: null
        },
        oScroll: {
            bCollapse: null,
            iBarWidth: 0,
            sX: null,
            sXInner: null,
            sY: null
        },
        oLanguage: {
            fnInfoCallback: null
        },
        oBrowser: {
            bScrollOversize: !1,
            bScrollbarLeft: !1,
            bBounding: !1,
            barWidth: 0
        },
        ajax: null,
        aanFeatures: [],
        aoData: [],
        aiDisplay: [],
        aiDisplayMaster: [],
        aIds: {},
        aoColumns: [],
        aoHeader: [],
        aoFooter: [],
        oPreviousSearch: {},
        aoPreSearchCols: [],
        aaSorting: null,
        aaSortingFixed: [],
        asStripeClasses: null,
        asDestroyStripes: [],
        sDestroyWidth: 0,
        aoRowCallback: [],
        aoHeaderCallback: [],
        aoFooterCallback: [],
        aoDrawCallback: [],
        aoRowCreatedCallback: [],
        aoPreDrawCallback: [],
        aoInitComplete: [],
        aoStateSaveParams: [],
        aoStateLoadParams: [],
        aoStateLoaded: [],
        sTableId: "",
        nTable: null,
        nTHead: null,
        nTFoot: null,
        nTBody: null,
        nTableWrapper: null,
        bDeferLoading: !1,
        bInitialised: !1,
        aoOpenRows: [],
        sDom: null,
        searchDelay: null,
        sPaginationType: "two_button",
        iStateDuration: 0,
        aoStateSave: [],
        aoStateLoad: [],
        oSavedState: null,
        oLoadedState: null,
        sAjaxSource: null,
        sAjaxDataProp: null,
        bAjaxDataGet: !0,
        jqXHR: null,
        json: z,
        oAjaxData: z,
        fnServerData: null,
        aoServerParams: [],
        sServerMethod: null,
        fnFormatNumber: null,
        aLengthMenu: null,
        iDraw: 0,
        bDrawing: !1,
        iDrawError: -1,
        _iDisplayLength: 10,
        _iDisplayStart: 0,
        _iRecordsTotal: 0,
        _iRecordsDisplay: 0,
        oClasses: {},
        bFiltered: !1,
        bSorted: !1,
        bSortCellsTop: null,
        oInit: null,
        aoDestroyCallback: [],
        fnRecordsTotal: function () {
            return "ssp" == pe(this) ? 1 * this._iRecordsTotal : this.aiDisplayMaster.length
        },
        fnRecordsDisplay: function () {
            return "ssp" == pe(this) ? 1 * this._iRecordsDisplay : this.aiDisplay.length
        },
        fnDisplayEnd: function () {
            var t = this._iDisplayLength,
                e = this._iDisplayStart,
                n = e + t,
                o = this.aiDisplay.length,
                r = this.oFeatures,
                a = r.bPaginate;
            return r.bServerSide ? !1 === a || -1 === t ? e + o : Math.min(e + t, this._iRecordsDisplay) : !a || o < n || -1 === t ? o : n
        },
        oInstance: null,
        sInstance: null,
        iTabIndex: 0,
        nScrollHead: null,
        nScrollFoot: null,
        aLastSort: [],
        oPlugins: {},
        rowIdFn: null,
        rowId: null
    }, I.ext = g = {
        buttons: {},
        classes: {},
        builder: "-source-",
        errMode: "alert",
        feature: [],
        search: [],
        selector: {
            cell: [],
            column: [],
            row: []
        },
        internal: {},
        legacy: {
            ajax: null
        },
        pager: {},
        renderer: {
            pageButton: {},
            header: {}
        },
        order: {},
        type: {
            detect: [],
            search: {},
            order: {}
        },
        _unique: 0,
        fnVersionCheck: I.fnVersionCheck,
        iApiIndex: 0,
        oJUIClasses: {},
        sVersion: I.version
    }, W.extend(g, {
        afnFiltering: g.search,
        aTypes: g.type.detect,
        ofnSearch: g.type.search,
        oSort: g.type.order,
        afnSortData: g.order,
        aoFeatures: g.feature,
        oApi: g.internal,
        oStdClasses: g.classes,
        oPagination: g.pager
    }), W.extend(I.ext.classes, {
        sTable: "dataTable",
        sNoFooter: "no-footer",
        sPageButton: "paginate_button",
        sPageButtonActive: "current",
        sPageButtonDisabled: "disabled",
        sStripeOdd: "odd",
        sStripeEven: "even",
        sRowEmpty: "dataTables_empty",
        sWrapper: "dataTables_wrapper",
        sFilter: "dataTables_filter",
        sInfo: "dataTables_info",
        sPaging: "dataTables_paginate paging_",
        sLength: "dataTables_length",
        sProcessing: "dataTables_processing",
        sSortAsc: "sorting_asc",
        sSortDesc: "sorting_desc",
        sSortable: "sorting",
        sSortableAsc: "sorting_asc_disabled",
        sSortableDesc: "sorting_desc_disabled",
        sSortableNone: "sorting_disabled",
        sSortColumn: "sorting_",
        sFilterInput: "",
        sLengthSelect: "",
        sScrollWrapper: "dataTables_scroll",
        sScrollHead: "dataTables_scrollHead",
        sScrollHeadInner: "dataTables_scrollHeadInner",
        sScrollBody: "dataTables_scrollBody",
        sScrollFoot: "dataTables_scrollFoot",
        sScrollFootInner: "dataTables_scrollFootInner",
        sHeaderTH: "",
        sFooterTH: "",
        sSortJUIAsc: "",
        sSortJUIDesc: "",
        sSortJUI: "",
        sSortJUIAscAllowed: "",
        sSortJUIDescAllowed: "",
        sSortJUIWrapper: "",
        sSortIcon: "",
        sJUIHeader: "",
        sJUIFooter: ""
    });
    var Re = I.ext.pager;

    function Ae(t, e) {
        var n = [],
            o = Re.numbers_length,
            r = Math.floor(o / 2);
        return e <= o ? n = p(0, e) : t <= r ? ((n = p(0, o - 2)).push("ellipsis"), n.push(e - 1)) : (e - 1 - r <= t ? (n = p(e - (o - 2), e)).splice(0, 0, "ellipsis") : ((n = p(t - r + 2, t + r - 1)).push("ellipsis"), n.push(e - 1), n.splice(0, 0, "ellipsis")), n.splice(0, 0, 0)), n.DT_el = "span", n
    }
    W.extend(Re, {
        simple: function (t, e) {
            return ["previous", "next"]
        },
        full: function (t, e) {
            return ["first", "previous", "next", "last"]
        },
        numbers: function (t, e) {
            return [Ae(t, e)]
        },
        simple_numbers: function (t, e) {
            return ["previous", Ae(t, e), "next"]
        },
        full_numbers: function (t, e) {
            return ["first", "previous", Ae(t, e), "next", "last"]
        },
        first_last_numbers: function (t, e) {
            return ["first", Ae(t, e), "last"]
        },
        _numbers: Ae,
        numbers_length: 7
    }), W.extend(!0, I.ext.renderer, {
        pageButton: {
            _: function (s, t, l, e, d, c) {
                var u, f, n, h = s.oClasses,
                    p = s.oLanguage.oPaginate,
                    m = s.oLanguage.oAria.paginate || {},
                    b = 0,
                    g = function (t, e) {
                        function n(t) {
                            jt(s, t.data.action, !0)
                        }
                        var o, r, a;
                        for (o = 0, r = e.length; o < r; o++)
                            if (a = e[o], W.isArray(a)) {
                                var i = W("<" + (a.DT_el || "div") + "/>").appendTo(t);
                                g(i, a)
                            } else {
                                switch (u = null, f = "", a) {
                                    case "ellipsis":
                                        t.append('<span class="ellipsis">&#x2026;</span>');
                                        break;
                                    case "first":
                                        u = p.sFirst, f = a + (0 < d ? "" : " " + h.sPageButtonDisabled);
                                        break;
                                    case "previous":
                                        u = p.sPrevious, f = a + (0 < d ? "" : " " + h.sPageButtonDisabled);
                                        break;
                                    case "next":
                                        u = p.sNext, f = a + (d < c - 1 ? "" : " " + h.sPageButtonDisabled);
                                        break;
                                    case "last":
                                        u = p.sLast, f = a + (d < c - 1 ? "" : " " + h.sPageButtonDisabled);
                                        break;
                                    default:
                                        u = a + 1, f = d === a ? h.sPageButtonActive : ""
                                }
                                null !== u && (de(W("<a>", {
                                    class: h.sPageButton + " " + f,
                                    "aria-controls": s.sTableId,
                                    "aria-label": m[a],
                                    "data-dt-idx": b,
                                    tabindex: s.iTabIndex,
                                    id: 0 === l && "string" == typeof a ? s.sTableId + "_" + a : null
                                }).html(u).appendTo(t), {
                                    action: a
                                }, n), b++)
                            }
                    };
                try {
                    n = W(t).find(v.activeElement).data("dt-idx")
                } catch (t) { }
                g(W(t).empty(), e), n !== z && W(t).find("[data-dt-idx=" + n + "]").focus()
            }
        }
    }), W.extend(I.ext.type.detect, [function (t, e) {
        var n = e.oLanguage.sDecimal;
        return o(t, n) ? "num" + n : null
    }, function (t, e) {
        if (t && !(t instanceof Date) && !d.test(t)) return null;
        var n = Date.parse(t);
        return null !== n && !isNaN(n) || r(t) ? "date" : null
    }, function (t, e) {
        var n = e.oLanguage.sDecimal;
        return o(t, n, !0) ? "num-fmt" + n : null
    }, function (t, e) {
        var n = e.oLanguage.sDecimal;
        return i(t, n) ? "html-num" + n : null
    }, function (t, e) {
        var n = e.oLanguage.sDecimal;
        return i(t, n, !0) ? "html-num-fmt" + n : null
    }, function (t, e) {
        return r(t) || "string" == typeof t && -1 !== t.indexOf("<") ? "html" : null
    }]), W.extend(I.ext.type.search, {
        html: function (t) {
            return r(t) ? t : "string" == typeof t ? t.replace(s, " ").replace(l, "") : ""
        },
        string: function (t) {
            return r(t) ? t : "string" == typeof t ? t.replace(s, " ") : t
        }
    });
    var ke = function (t, e, n, o) {
        return 0 === t || t && "-" !== t ? (e && (t = a(t, e)), t.replace && (n && (t = t.replace(n, "")), o && (t = t.replace(o, ""))), 1 * t) : -1 / 0
    };

    function Ne(n) {
        W.each({
            num: function (t) {
                return ke(t, n)
            },
            "num-fmt": function (t) {
                return ke(t, n, u)
            },
            "html-num": function (t) {
                return ke(t, n, l)
            },
            "html-num-fmt": function (t) {
                return ke(t, n, l, u)
            }
        }, function (t, e) {
            g.type.order[t + n + "-pre"] = e, t.match(/^html\-/) && (g.type.search[t + n] = g.type.search.html)
        })
    }
    W.extend(g.type.order, {
        "date-pre": function (t) {
            var e = Date.parse(t);
            return isNaN(e) ? -1 / 0 : e
        },
        "html-pre": function (t) {
            return r(t) ? "" : t.replace ? t.replace(/<.*?>/g, "").toLowerCase() : t + ""
        },
        "string-pre": function (t) {
            return r(t) ? "" : "string" == typeof t ? t.toLowerCase() : t.toString ? t.toString() : ""
        },
        "string-asc": function (t, e) {
            return t < e ? -1 : e < t ? 1 : 0
        },
        "string-desc": function (t, e) {
            return t < e ? 1 : e < t ? -1 : 0
        }
    }), Ne(""), W.extend(!0, I.ext.renderer, {
        header: {
            _: function (a, i, s, l) {
                W(a.nTable).on("order.dt.DT", function (t, e, n, o) {
                    if (a === e) {
                        var r = s.idx;
                        i.removeClass(s.sSortingClass + " " + l.sSortAsc + " " + l.sSortDesc).addClass("asc" == o[r] ? l.sSortAsc : "desc" == o[r] ? l.sSortDesc : s.sSortingClass)
                    }
                })
            },
            jqueryui: function (a, i, s, l) {
                W("<div/>").addClass(l.sSortJUIWrapper).append(i.contents()).append(W("<span/>").addClass(l.sSortIcon + " " + s.sSortingClassJUI)).appendTo(i), W(a.nTable).on("order.dt.DT", function (t, e, n, o) {
                    if (a === e) {
                        var r = s.idx;
                        i.removeClass(l.sSortAsc + " " + l.sSortDesc).addClass("asc" == o[r] ? l.sSortAsc : "desc" == o[r] ? l.sSortDesc : s.sSortingClass), i.find("span." + l.sSortIcon).removeClass(l.sSortJUIAsc + " " + l.sSortJUIDesc + " " + l.sSortJUI + " " + l.sSortJUIAscAllowed + " " + l.sSortJUIDescAllowed).addClass("asc" == o[r] ? l.sSortJUIAsc : "desc" == o[r] ? l.sSortJUIDesc : s.sSortingClassJUI)
                    }
                })
            }
        }
    });

    function Le(t) {
        return "string" == typeof t ? t.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;") : t
    }

    function He(e) {
        return function () {
            var t = [ae(this[I.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
            return I.ext.internal[e].apply(this, t)
        }
    }
    return I.render = {
        number: function (a, i, s, l, d) {
            return {
                display: function (t) {
                    if ("number" != typeof t && "string" != typeof t) return t;
                    var e = t < 0 ? "-" : "",
                        n = parseFloat(t);
                    if (isNaN(n)) return Le(t);
                    n = n.toFixed(s), t = Math.abs(n);
                    var o = parseInt(t, 10),
                        r = s ? i + (t - o).toFixed(s).substring(2) : "";
                    return e + (l || "") + o.toString().replace(/\B(?=(\d{3})+(?!\d))/g, a) + r + (d || "")
                }
            }
        },
        text: function () {
            return {
                display: Le,
                filter: Le
            }
        }
    }, W.extend(I.ext.internal, {
        _fnExternApiFunc: He,
        _fnBuildAjax: ft,
        _fnAjaxUpdate: ht,
        _fnAjaxParameters: pt,
        _fnAjaxUpdateDraw: mt,
        _fnAjaxDataSrc: bt,
        _fnAddColumn: H,
        _fnColumnOptions: B,
        _fnAdjustColumnSizing: $,
        _fnVisibleToColumnIndex: X,
        _fnColumnIndexToVisible: C,
        _fnVisbleColumns: O,
        _fnGetColumns: j,
        _fnColumnTypes: S,
        _fnApplyColumnDefs: P,
        _fnHungarianMap: x,
        _fnCamelToHungarian: R,
        _fnLanguageCompat: A,
        _fnBrowserDetect: L,
        _fnAddData: q,
        _fnAddTr: E,
        _fnNodeToDataIndex: function (t, e) {
            return e._DT_RowIndex !== z ? e._DT_RowIndex : null
        },
        _fnNodeToColumnIndex: function (t, e, n) {
            return W.inArray(n, t.aoData[e].anCells)
        },
        _fnGetCellData: D,
        _fnSetCellData: M,
        _fnSplitObjNotation: J,
        _fnGetObjectDataFn: K,
        _fnSetObjectDataFn: Y,
        _fnGetDataMaster: Q,
        _fnClearTable: Z,
        _fnDeleteIndex: tt,
        _fnInvalidate: et,
        _fnGetRowElements: nt,
        _fnCreateTr: ot,
        _fnBuildHead: at,
        _fnDrawHead: it,
        _fnDraw: st,
        _fnReDraw: lt,
        _fnAddOptionsHtml: dt,
        _fnDetectHeader: ct,
        _fnGetUniqueThs: ut,
        _fnFeatureHtmlFilter: gt,
        _fnFilterComplete: vt,
        _fnFilterCustom: yt,
        _fnFilterColumn: wt,
        _fnFilter: xt,
        _fnFilterCreateSearch: _t,
        _fnEscapeRegex: Tt,
        _fnFilterData: Dt,
        _fnFeatureHtmlInfo: Rt,
        _fnUpdateInfo: At,
        _fnInfoMacros: kt,
        _fnInitialise: Nt,
        _fnInitComplete: Lt,
        _fnLengthChange: Ht,
        _fnFeatureHtmlLength: Bt,
        _fnFeatureHtmlPaginate: Ot,
        _fnPageChange: jt,
        _fnFeatureHtmlProcessing: Pt,
        _fnProcessingDisplay: qt,
        _fnFeatureHtmlTable: Et,
        _fnScrollDraw: Mt,
        _fnApplyToChildren: Wt,
        _fnCalculateColumnWidths: Vt,
        _fnThrottle: $t,
        _fnConvertToWidth: Xt,
        _fnGetWidestNode: Ut,
        _fnGetMaxLenString: Gt,
        _fnStringToCss: Jt,
        _fnSortFlatten: Kt,
        _fnSort: Yt,
        _fnSortAria: Qt,
        _fnSortListener: Zt,
        _fnSortAttachListener: te,
        _fnSortingClasses: ee,
        _fnSortData: ne,
        _fnSaveState: oe,
        _fnLoadState: re,
        _fnSettingsFromNode: ae,
        _fnLog: ie,
        _fnMap: se,
        _fnBindAction: de,
        _fnCallbackReg: ce,
        _fnCallbackFire: ue,
        _fnLengthOverflow: fe,
        _fnRenderer: he,
        _fnDataSource: pe,
        _fnRowAttributes: rt,
        _fnExtend: le,
        _fnCalculateEnd: function () { }
    }), ((W.fn.dataTable = I).$ = W).fn.dataTableSettings = I.settings, W.fn.dataTableExt = I.ext, W.fn.DataTable = function (t) {
        return W(this).dataTable(t).api()
    }, W.each(I, function (t, e) {
        W.fn.DataTable[t] = e
    }), W.fn.dataTable
}),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (y, t, o, r) {
        "use strict";
        var a = y.fn.dataTable;
        return y.extend(!0, a.defaults, {
            dom: "<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
            renderer: "bootstrap"
        }), y.extend(a.ext.classes, {
            sWrapper: "dataTables_wrapper dt-bootstrap4",
            sFilterInput: "form-control form-control-sm",
            sLengthSelect: "custom-select custom-select-sm form-control form-control-sm",
            sProcessing: "dataTables_processing card",
            sPageButton: "paginate_button page-item"
        }), a.ext.renderer.pageButton.bootstrap = function (s, t, l, e, d, c) {
            var u, f, n, h = new a.Api(s),
                p = s.oClasses,
                m = s.oLanguage.oPaginate,
                b = s.oLanguage.oAria.paginate || {},
                g = 0,
                v = function (t, e) {
                    function n(t) {
                        t.preventDefault(), y(t.currentTarget).hasClass("disabled") || h.page() == t.data.action || h.page(t.data.action).draw("page")
                    }
                    var o, r, a, i;
                    for (o = 0, r = e.length; o < r; o++)
                        if (i = e[o], y.isArray(i)) v(t, i);
                        else {
                            switch (f = u = "", i) {
                                case "ellipsis":
                                    u = "&#x2026;", f = "disabled";
                                    break;
                                case "first":
                                    u = m.sFirst, f = i + (0 < d ? "" : " disabled");
                                    break;
                                case "previous":
                                    u = m.sPrevious, f = i + (0 < d ? "" : " disabled");
                                    break;
                                case "next":
                                    u = m.sNext, f = i + (d < c - 1 ? "" : " disabled");
                                    break;
                                case "last":
                                    u = m.sLast, f = i + (d < c - 1 ? "" : " disabled");
                                    break;
                                default:
                                    u = i + 1, f = d === i ? "active" : ""
                            }
                            u && (a = y("<li>", {
                                class: p.sPageButton + " " + f,
                                id: 0 === l && "string" == typeof i ? s.sTableId + "_" + i : null
                            }).append(y("<a>", {
                                href: "#",
                                "aria-controls": s.sTableId,
                                "aria-label": b[i],
                                "data-dt-idx": g,
                                tabindex: s.iTabIndex,
                                class: "page-link"
                            }).html(u)).appendTo(t), s.oApi._fnBindAction(a, {
                                action: i
                            }, n), g++)
                        }
                };
            try {
                n = y(t).find(o.activeElement).data("dt-idx")
            } catch (t) { }
            v(y(t).empty().html('<ul class="pagination"/>').children("ul"), e), n !== r && y(t).find("[data-dt-idx=" + n + "]").focus()
        }, a
    }), $.extend(!0, $.fn.dataTableExt.oStdClasses, {
        sFilterInput: "form-control border-top-left-radius-0 border-bottom-left-radius-0 ml-0 width-lg shadow-inset-1",
        sLengthSelect: "form-control custom-select"
    }), $.extend(!0, $.fn.dataTable.defaults, {
        dom: "<'row mb-3'<'col-sm-12 col-md-6 d-flex align-items-center justify-content-start'f><'col-sm-12 col-md-6 d-flex align-items-center justify-content-end'l>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",
        lengthMenu: [
            [10, 15, 25, 50, 100, -1],
            [10, 15, 25, 50, 100, "All"]
        ],
        language: {
            paginate: {
                previous: "<i class='fal fa-chevron-left'></i>",
                next: "<i class='fal fa-chevron-right'></i>"
            },
            processing: '<div class="d-flex align-items-center justify-content-center fs-lg"><div class="spinner-border spinner-border-sm text-primary mr-2" role="status"><span class="sr-only"> Carregando...</span></div> Em processamento...</div>',
            search: '<div class="input-group-text d-inline-flex width-3 align-items-center justify-content-center border-bottom-right-radius-0 border-top-right-radius-0 border-right-0"><i class="fal fa-search"></i></div>',
            searchPlaceholder: "Procurar",
            zeroRecords: "Nenhum registro para exibir"
        },
        initComplete: function (t, e) {
            initApp.appForms(".dataTables_filter", "has-length", "has-disabled")
        }
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (b, i, p, v) {
        "use strict";
        var s = b.fn.dataTable,
            n = 0,
            l = function (t, e) {
                if (!s.versionCheck || !s.versionCheck("1.10.8")) throw "Warning: AutoFill requires DataTables 1.10.8 or greater";
                this.c = b.extend(!0, {}, s.defaults.autoFill, l.defaults, e), this.s = {
                    dt: new s.Api(t),
                    namespace: ".autoFill" + n++,
                    scroll: {},
                    scrollInterval: null,
                    handle: {
                        height: 0,
                        width: 0
                    },
                    enabled: !1
                }, this.dom = {
                    handle: b('<div class="dt-autofill-handle"/>'),
                    select: {
                        top: b('<div class="dt-autofill-select top"/>'),
                        right: b('<div class="dt-autofill-select right"/>'),
                        bottom: b('<div class="dt-autofill-select bottom"/>'),
                        left: b('<div class="dt-autofill-select left"/>')
                    },
                    background: b('<div class="dt-autofill-background"/>'),
                    list: b('<div class="dt-autofill-list">' + this.s.dt.i18n("autoFill.info", "") + "<ul/></div>"),
                    dtScroll: null,
                    offsetParent: null
                }, this._constructor()
            };
        b.extend(l.prototype, {
            enabled: function () {
                return this.s.enabled
            },
            enable: function (t) {
                var e = this;
                return !1 === t ? this.disable() : (this.s.enabled = !0, this._focusListener(), this.dom.handle.on("mousedown", function (t) {
                    return e._mousedown(t), !1
                }), this)
            },
            disable: function () {
                return this.s.enabled = !1, this._focusListenerRemove(), this
            },
            _constructor: function () {
                var t = this,
                    e = this.s.dt,
                    n = b("div.dataTables_scrollBody", this.s.dt.table().container());
                e.settings()[0].autoFill = this, n.length && "static" === (this.dom.dtScroll = n).css("position") && n.css("position", "relative"), !1 !== this.c.enable && this.enable(), e.on("destroy.autoFill", function () {
                    t._focusListenerRemove()
                })
            },
            _attach: function (t) {
                var e = this.s.dt,
                    n = e.cell(t).index(),
                    o = this.dom.handle,
                    r = this.s.handle;
                if (n && -1 !== e.columns(this.c.columns).indexes().indexOf(n.column)) {
                    this.dom.offsetParent || (this.dom.offsetParent = b(e.table().node()).offsetParent()), r.height && r.width || (o.appendTo("body"), r.height = o.outerHeight(), r.width = o.outerWidth());
                    var a = this._getPosition(t, this.dom.offsetParent);
                    this.dom.attachedTo = t, o.css({
                        top: a.top + t.offsetHeight - r.height,
                        left: a.left + t.offsetWidth - r.width
                    }).appendTo(this.dom.offsetParent)
                } else this._detach()
            },
            _actionSelector: function (n) {
                var o = this,
                    r = this.s.dt,
                    a = l.actions,
                    i = [];
                if (b.each(a, function (t, e) {
                    e.available(r, n) && i.push(t)
                }), 1 === i.length && !1 === this.c.alwaysAsk) {
                    var t = a[i[0]].execute(r, n);
                    this._update(t, n)
                } else {
                    var s = this.dom.list.children("ul").empty();
                    i.push("cancel"), b.each(i, function (t, e) {
                        s.append(b("<li/>").append('<div class="dt-autofill-question">' + a[e].option(r, n) + "<div>").append(b('<div class="dt-autofill-button">').append(b('<button class="' + l.classes.btn + '">' + r.i18n("autoFill.button", "&gt;") + "</button>").on("click", function () {
                            var t = a[e].execute(r, n, b(this).closest("li"));
                            o._update(t, n), o.dom.background.remove(), o.dom.list.remove()
                        }))))
                    }), this.dom.background.appendTo("body"), this.dom.list.appendTo("body"), this.dom.list.css("margin-top", this.dom.list.outerHeight() / 2 * -1)
                }
            },
            _detach: function () {
                this.dom.attachedTo = null, this.dom.handle.detach()
            },
            _drawSelection: function (t, e) {
                var n = this.s.dt,
                    o = this.s.start,
                    r = b(this.dom.start),
                    a = {
                        row: this.c.vertical ? n.rows({
                            page: "current"
                        }).nodes().indexOf(t.parentNode) : o.row,
                        column: this.c.horizontal ? b(t).index() : o.column
                    },
                    i = n.column.index("toData", a.column),
                    s = n.row(":eq(" + a.row + ")", {
                        page: "current"
                    }),
                    l = b(n.cell(s.index(), i).node());
                if (n.cell(l).any() && -1 !== n.columns(this.c.columns).indexes().indexOf(i)) {
                    var d, c, u, f, h, p;
                    this.s.end = a, d = o.row < a.row ? r : l, c = o.row < a.row ? l : r, u = o.column < a.column ? r : l, f = o.column < a.column ? l : r, d = this._getPosition(d.get(0)).top, u = this._getPosition(u.get(0)).left, h = this._getPosition(c.get(0)).top + c.outerHeight() - d, p = this._getPosition(f.get(0)).left + f.outerWidth() - u;
                    var m = this.dom.select;
                    m.top.css({
                        top: d,
                        left: u,
                        width: p
                    }), m.left.css({
                        top: d,
                        left: u,
                        height: h
                    }), m.bottom.css({
                        top: d + h,
                        left: u,
                        width: p
                    }), m.right.css({
                        top: d,
                        left: u + p,
                        height: h
                    })
                }
            },
            _editor: function (t) {
                var e = this.s.dt,
                    n = this.c.editor;
                if (n) {
                    for (var o = {}, r = [], a = n.fields(), i = 0, s = t.length; i < s; i++)
                        for (var l = 0, d = t[i].length; l < d; l++) {
                            var c = t[i][l],
                                u = e.settings()[0].aoColumns[c.index.column],
                                f = u.editField;
                            if (f === v)
                                for (var h = u.mData, p = 0, m = a.length; p < m; p++) {
                                    var b = n.field(a[p]);
                                    if (b.dataSrc() === h) {
                                        f = b.name();
                                        break
                                    }
                                }
                            if (!f) throw "Could not automatically determine field data. Please see https://datatables.net/tn/11";
                            o[f] || (o[f] = {});
                            var g = e.row(c.index.row).id();
                            o[f][g] = c.set, r.push(c.index)
                        }
                    n.bubble(r, !1).multiSet(o).submit()
                }
            },
            _emitEvent: function (n, o) {
                this.s.dt.iterator("table", function (t, e) {
                    b(t.nTable).triggerHandler(n + ".dt", o)
                })
            },
            _focusListener: function () {
                var o = this,
                    e = this.s.dt,
                    t = this.s.namespace,
                    n = null !== this.c.focus ? this.c.focus : e.init().keys || e.settings()[0].keytable ? "focus" : "hover";
                "focus" === n ? e.on("key-focus.autoFill", function (t, e, n) {
                    o._attach(n.node())
                }).on("key-blur.autoFill", function (t, e, n) {
                    o._detach()
                }) : "click" === n ? (b(e.table().body()).on("click" + t, "td, th", function (t) {
                    o._attach(this)
                }), b(p.body).on("click" + t, function (t) {
                    b(t.target).parents().filter(e.table().body()).length || o._detach()
                })) : b(e.table().body()).on("mouseenter" + t, "td, th", function (t) {
                    o._attach(this)
                }).on("mouseleave" + t, function (t) {
                    b(t.relatedTarget).hasClass("dt-autofill-handle") || o._detach()
                })
            },
            _focusListenerRemove: function () {
                var t = this.s.dt;
                t.off(".autoFill"), b(t.table().body()).off(this.s.namespace), b(p.body).off(this.s.namespace)
            },
            _getPosition: function (t, e) {
                var n, o = t,
                    r = 0,
                    a = 0;
                e = e || b(b(this.s.dt.table().node())[0].offsetParent);
                do {
                    var i = o.offsetTop,
                        s = o.offsetLeft;
                    if (r += i + (n = b(o.offsetParent)).scrollTop(), a += s + n.scrollLeft(), r += 1 * parseInt(n.css("margin-top")), r += 1 * parseInt(n.css("border-top-width")), "body" === o.nodeName.toLowerCase()) break;
                    o = n.get(0)
                } while (n.get(0) !== e.get(0));
                return {
                    top: r,
                    left: a
                }
            },
            _mousedown: function (t) {
                var e = this,
                    n = this.s.dt;
                this.dom.start = this.dom.attachedTo, this.s.start = {
                    row: n.rows({
                        page: "current"
                    }).nodes().indexOf(b(this.dom.start).parent()[0]),
                    column: b(this.dom.start).index()
                }, b(p.body).on("mousemove.autoFill", function (t) {
                    e._mousemove(t)
                }).on("mouseup.autoFill", function (t) {
                    e._mouseup(t)
                });
                var o = this.dom.select,
                    r = b(n.table().node()).offsetParent();
                o.top.appendTo(r), o.left.appendTo(r), o.right.appendTo(r), o.bottom.appendTo(r), this._drawSelection(this.dom.start, t), this.dom.handle.css("display", "none");
                var a = this.dom.dtScroll;
                this.s.scroll = {
                    windowHeight: b(i).height(),
                    windowWidth: b(i).width(),
                    dtTop: a ? a.offset().top : null,
                    dtLeft: a ? a.offset().left : null,
                    dtHeight: a ? a.outerHeight() : null,
                    dtWidth: a ? a.outerWidth() : null
                }
            },
            _mousemove: function (t) {
                this.s.dt;
                var e = t.target.nodeName.toLowerCase();
                "td" !== e && "th" !== e || (this._drawSelection(t.target, t), this._shiftScroll(t))
            },
            _mouseup: function (t) {
                b(p.body).off(".autoFill");
                var e = this,
                    i = this.s.dt,
                    n = this.dom.select;
                n.top.remove(), n.left.remove(), n.right.remove(), n.bottom.remove(), this.dom.handle.css("display", "block");
                var o = this.s.start,
                    r = this.s.end;
                if (o.row !== r.row || o.column !== r.column) {
                    var a = i.cell(":eq(" + o.row + ")", o.column + ":visible", {
                        page: "current"
                    });
                    if (b("div.DTE", a.node()).length) {
                        var s = i.editor();
                        return s.on("submitSuccess.dtaf close.dtaf", function () {
                            s.off(".dtaf"), setTimeout(function () {
                                e._mouseup(t)
                            }, 100)
                        }).on("submitComplete.dtaf preSubmitCancelled.dtaf close.dtaf", function () {
                            s.off(".dtaf")
                        }), void s.submit()
                    }
                    for (var l = this._range(o.row, r.row), d = this._range(o.column, r.column), c = [], u = i.settings()[0], f = u.aoColumns, h = 0; h < l.length; h++) c.push(b.map(d, function (t) {
                        var e = i.row(":eq(" + l[h] + ")", {
                            page: "current"
                        }),
                            n = i.cell(e.index(), t + ":visible"),
                            o = n.data(),
                            r = n.index(),
                            a = f[r.column].editField;
                        return a !== v && (o = u.oApi._fnGetObjectDataFn(a)(i.row(r.row).data())), {
                            cell: n,
                            data: o,
                            label: n.data(),
                            index: r
                        }
                    }));
                    this._actionSelector(c), clearInterval(this.s.scrollInterval), this.s.scrollInterval = null
                }
            },
            _range: function (t, e) {
                var n, o = [];
                if (t <= e)
                    for (n = t; n <= e; n++) o.push(n);
                else
                    for (n = t; e <= n; n--) o.push(n);
                return o
            },
            _shiftScroll: function (t) {
                var e, n, o, r, a = this,
                    i = (this.s.dt, this.s.scroll),
                    s = !1,
                    l = t.pageY - p.body.scrollTop,
                    d = t.pageX - p.body.scrollLeft;
                l < 65 ? e = -5 : l > i.windowHeight - 65 && (e = 5), d < 65 ? n = -5 : d > i.windowWidth - 65 && (n = 5), null !== i.dtTop && t.pageY < i.dtTop + 65 ? o = -5 : null !== i.dtTop && t.pageY > i.dtTop + i.dtHeight - 65 && (o = 5), null !== i.dtLeft && t.pageX < i.dtLeft + 65 ? r = -5 : null !== i.dtLeft && t.pageX > i.dtLeft + i.dtWidth - 65 && (r = 5), e || n || o || r ? (i.windowVert = e, i.windowHoriz = n, i.dtVert = o, i.dtHoriz = r, s = !0) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), this.s.scrollInterval = null), !this.s.scrollInterval && s && (this.s.scrollInterval = setInterval(function () {
                    if (i.windowVert && (p.body.scrollTop += i.windowVert), i.windowHoriz && (p.body.scrollLeft += i.windowHoriz), i.dtVert || i.dtHoriz) {
                        var t = a.dom.dtScroll[0];
                        i.dtVert && (t.scrollTop += i.dtVert), i.dtHoriz && (t.scrollLeft += i.dtHoriz)
                    }
                }, 20))
            },
            _update: function (t, e) {
                if (!1 !== t) {
                    var n, o = this.s.dt,
                        r = o.columns(this.c.columns).indexes();
                    if (this._emitEvent("preAutoFill", [o, e]), this._editor(e), null !== this.c.update ? this.c.update : !this.c.editor) {
                        for (var a = 0, i = e.length; a < i; a++)
                            for (var s = 0, l = e[a].length; s < l; s++) n = e[a][s], -1 !== r.indexOf(n.index.column) && n.cell.data(n.set);
                        o.draw(!1)
                    }
                    this._emitEvent("autoFill", [o, e])
                }
            }
        }), l.actions = {
            increment: {
                available: function (t, e) {
                    var n = e[0][0].label;
                    return !isNaN(n - parseFloat(n))
                },
                option: function (t, e) {
                    return t.i18n("autoFill.increment", 'Increment / decrement each cell by: <input type="number" value="1">')
                },
                execute: function (t, e, n) {
                    for (var o = 1 * e[0][0].data, r = 1 * b("input", n).val(), a = 0, i = e.length; a < i; a++)
                        for (var s = 0, l = e[a].length; s < l; s++) e[a][s].set = o, o += r
                }
            },
            fill: {
                available: function (t, e) {
                    return !0
                },
                option: function (t, e) {
                    return t.i18n("autoFill.fill", "Fill all cells with <i>" + e[0][0].label + "</i>")
                },
                execute: function (t, e, n) {
                    for (var o = e[0][0].data, r = 0, a = e.length; r < a; r++)
                        for (var i = 0, s = e[r].length; i < s; i++) e[r][i].set = o
                }
            },
            fillHorizontal: {
                available: function (t, e) {
                    return 1 < e.length && 1 < e[0].length
                },
                option: function (t, e) {
                    return t.i18n("autoFill.fillHorizontal", "Fill cells horizontally")
                },
                execute: function (t, e, n) {
                    for (var o = 0, r = e.length; o < r; o++)
                        for (var a = 0, i = e[o].length; a < i; a++) e[o][a].set = e[o][0].data
                }
            },
            fillVertical: {
                available: function (t, e) {
                    return 1 < e.length && 1 < e[0].length
                },
                option: function (t, e) {
                    return t.i18n("autoFill.fillVertical", "Fill cells vertically")
                },
                execute: function (t, e, n) {
                    for (var o = 0, r = e.length; o < r; o++)
                        for (var a = 0, i = e[o].length; a < i; a++) e[o][a].set = e[0][a].data
                }
            },
            cancel: {
                available: function () {
                    return !1
                },
                option: function (t) {
                    return t.i18n("autoFill.cancel", "Cancel")
                },
                execute: function () {
                    return !1
                }
            }
        }, l.version = "2.3.3", l.defaults = {
            alwaysAsk: !1,
            focus: null,
            columns: "",
            enable: !0,
            update: null,
            editor: null,
            vertical: !0,
            horizontal: !0
        }, l.classes = {
            btn: "btn"
        };
        var t = b.fn.dataTable.Api;
        return t.register("autoFill()", function () {
            return this
        }), t.register("autoFill().enabled()", function () {
            var t = this.context[0];
            return !!t.autoFill && t.autoFill.enabled()
        }), t.register("autoFill().enable()", function (e) {
            return this.iterator("table", function (t) {
                t.autoFill && t.autoFill.enable(e)
            })
        }), t.register("autoFill().disable()", function () {
            return this.iterator("table", function (t) {
                t.autoFill && t.autoFill.disable()
            })
        }), b(p).on("preInit.dt.autofill", function (t, e, n) {
            if ("dt" === t.namespace) {
                var o = e.oInit.autoFill,
                    r = s.defaults.autoFill;
                if (o || r) {
                    var a = b.extend({}, o, r);
                    !1 !== o && new l(e, a)
                }
            }
        }), s.AutoFill = l, s.AutoFill = l
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-autofill"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net-bs4")(t, e).$), e.fn.dataTable.AutoFill || require("datatables.net-autofill")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (t, e, n, o) {
        "use strict";
        var r = t.fn.dataTable;
        return r.AutoFill.classes.btn = "btn btn-primary", r
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (w, x, _, y) {
        "use strict";
        var r, o = w.fn.dataTable,
            n = 0,
            p = 0,
            d = o.ext.buttons,
            T = function (e, t) {
                if (!(this instanceof T)) return function (t) {
                    return new T(t, e).container()
                };
                void 0 === t && (t = {}), !0 === t && (t = {}), w.isArray(t) && (t = {
                    buttons: t
                }), this.c = w.extend(!0, {}, T.defaults, t), t.buttons && (this.c.buttons = t.buttons), this.s = {
                    dt: new o.Api(e),
                    buttons: [],
                    listenKeys: "",
                    namespace: "dtb" + n++
                }, this.dom = {
                    container: w("<" + this.c.dom.container.tag + "/>").addClass(this.c.dom.container.className)
                }, this._constructor()
            };
        w.extend(T.prototype, {
            action: function (t, e) {
                var n = this._nodeToButton(t);
                return e === y ? n.conf.action : (n.conf.action = e, this)
            },
            active: function (t, e) {
                var n = this._nodeToButton(t),
                    o = this.c.dom.button.active,
                    r = w(n.node);
                return e === y ? r.hasClass(o) : (r.toggleClass(o, e === y || e), this)
            },
            add: function (t, e) {
                var n = this.s.buttons;
                if ("string" == typeof e) {
                    for (var o = e.split("-"), r = this.s, a = 0, i = o.length - 1; a < i; a++) r = r.buttons[1 * o[a]];
                    n = r.buttons, e = 1 * o[o.length - 1]
                }
                return this._expandButton(n, t, !1, e), this._draw(), this
            },
            container: function () {
                return this.dom.container
            },
            disable: function (t) {
                var e = this._nodeToButton(t);
                return w(e.node).addClass(this.c.dom.button.disabled), this
            },
            destroy: function () {
                w("body").off("keyup." + this.s.namespace);
                var t, e, n = this.s.buttons.slice();
                for (t = 0, e = n.length; t < e; t++) this.remove(n[t].node);
                this.dom.container.remove();
                var o = this.s.dt.settings()[0];
                for (t = 0, e = o.length; t < e; t++)
                    if (o.inst === this) {
                        o.splice(t, 1);
                        break
                    } return this
            },
            enable: function (t, e) {
                if (!1 === e) return this.disable(t);
                var n = this._nodeToButton(t);
                return w(n.node).removeClass(this.c.dom.button.disabled), this
            },
            name: function () {
                return this.c.name
            },
            node: function (t) {
                if (!t) return this.dom.container;
                var e = this._nodeToButton(t);
                return w(e.node)
            },
            processing: function (t, e) {
                var n = this._nodeToButton(t);
                return e === y ? w(n.node).hasClass("processing") : (w(n.node).toggleClass("processing", e), this)
            },
            remove: function (t) {
                var e = this._nodeToButton(t),
                    n = this._nodeToHost(t),
                    o = this.s.dt;
                if (e.buttons.length)
                    for (var r = e.buttons.length - 1; 0 <= r; r--) this.remove(e.buttons[r].node);
                e.conf.destroy && e.conf.destroy.call(o.button(t), o, w(t), e.conf), this._removeKey(e.conf), w(e.node).remove();
                var a = w.inArray(e, n);
                return n.splice(a, 1), this
            },
            text: function (t, e) {
                function n(t) {
                    return "function" == typeof t ? t(i, s, o.conf) : t
                }
                var o = this._nodeToButton(t),
                    r = this.c.dom.collection.buttonLiner,
                    a = o.inCollection && r && r.tag ? r.tag : this.c.dom.buttonLiner.tag,
                    i = this.s.dt,
                    s = w(o.node);
                return e === y ? n(o.conf.text) : (o.conf.text = e, a ? s.children(a).html(n(e)) : s.html(n(e)), this)
            },
            _constructor: function () {
                var n = this,
                    t = this.s.dt,
                    o = t.settings()[0],
                    e = this.c.buttons;
                o._buttons || (o._buttons = []), o._buttons.push({
                    inst: this,
                    name: this.c.name
                });
                for (var r = 0, a = e.length; r < a; r++) this.add(e[r]);
                t.on("destroy", function (t, e) {
                    e === o && n.destroy()
                }), w("body").on("keyup." + this.s.namespace, function (t) {
                    if (!_.activeElement || _.activeElement === _.body) {
                        var e = String.fromCharCode(t.keyCode).toLowerCase(); - 1 !== n.s.listenKeys.toLowerCase().indexOf(e) && n._keypress(e, t)
                    }
                })
            },
            _addKey: function (t) {
                t.key && (this.s.listenKeys += w.isPlainObject(t.key) ? t.key.key : t.key)
            },
            _draw: function (t, e) {
                t || (t = this.dom.container, e = this.s.buttons), t.children().detach();
                for (var n = 0, o = e.length; n < o; n++) t.append(e[n].inserter), t.append(" "), e[n].buttons && e[n].buttons.length && this._draw(e[n].collection, e[n].buttons)
            },
            _expandButton: function (t, e, n, o) {
                for (var r = this.s.dt, a = w.isArray(e) ? e : [e], i = 0, s = a.length; i < s; i++) {
                    var l = this._resolveExtends(a[i]);
                    if (l)
                        if (w.isArray(l)) this._expandButton(t, l, n, o);
                        else {
                            var d = this._buildButton(l, n);
                            if (d) {
                                if (o !== y ? (t.splice(o, 0, d), o++) : t.push(d), d.conf.buttons) {
                                    var c = this.c.dom.collection;
                                    d.collection = w("<" + c.tag + "/>").addClass(c.className).attr("role", "menu"), d.conf._collection = d.collection, this._expandButton(d.buttons, d.conf.buttons, !0, o)
                                }
                                l.init && l.init.call(r.button(d.node), r, w(d.node), l), 0
                            }
                        }
                }
            },
            _buildButton: function (e, t) {
                function n(t) {
                    return "function" == typeof t ? t(i, c, e) : t
                }
                var o = this.c.dom.button,
                    r = this.c.dom.buttonLiner,
                    a = this.c.dom.collection,
                    i = this.s.dt;
                if (t && a.button && (o = a.button), t && a.buttonLiner && (r = a.buttonLiner), e.available && !e.available(i, e)) return !1;

                function s(t, e, n, o) {
                    o.action.call(e.button(n), t, e, n, o), w(e.table().node()).triggerHandler("buttons-action.dt", [e.button(n), e, n, o])
                }
                var l = e.tag || o.tag,
                    d = e.clickBlurs === y || e.clickBlurs,
                    c = w("<" + l + "/>").addClass(o.className).attr("tabindex", this.s.dt.settings()[0].iTabIndex).attr("aria-controls", this.s.dt.table().node().id).on("click.dtb", function (t) {
                        t.preventDefault(), !c.hasClass(o.disabled) && e.action && s(t, i, c, e), d && c.blur()
                    }).on("keyup.dtb", function (t) {
                        13 === t.keyCode && !c.hasClass(o.disabled) && e.action && s(t, i, c, e)
                    });
                if ("a" === l.toLowerCase() && c.attr("href", "#"), "button" === l.toLowerCase() && c.attr("type", "button"), r.tag) {
                    var u = w("<" + r.tag + "/>").html(n(e.text)).addClass(r.className);
                    "a" === r.tag.toLowerCase() && u.attr("href", "#"), c.append(u)
                } else c.html(n(e.text));
                !1 === e.enabled && c.addClass(o.disabled), e.className && c.addClass(e.className), e.titleAttr && c.attr("title", n(e.titleAttr)), e.attr && c.attr(e.attr), e.namespace || (e.namespace = ".dt-button-" + p++);
                var f, h = this.c.dom.buttonContainer;
                return f = h && h.tag ? w("<" + h.tag + "/>").addClass(h.className).append(c) : c, this._addKey(e), this.c.buttonCreated && (f = this.c.buttonCreated(e, f)), {
                    conf: e,
                    node: c.get(0),
                    inserter: f,
                    buttons: [],
                    inCollection: t,
                    collection: null
                }
            },
            _nodeToButton: function (t, e) {
                for (var n = 0, o = (e = e || this.s.buttons).length; n < o; n++) {
                    if (e[n].node === t) return e[n];
                    if (e[n].buttons.length) {
                        var r = this._nodeToButton(t, e[n].buttons);
                        if (r) return r
                    }
                }
            },
            _nodeToHost: function (t, e) {
                for (var n = 0, o = (e = e || this.s.buttons).length; n < o; n++) {
                    if (e[n].node === t) return e;
                    if (e[n].buttons.length) {
                        var r = this._nodeToHost(t, e[n].buttons);
                        if (r) return r
                    }
                }
            },
            _keypress: function (n, o) {
                if (!o._buttonsHandled) {
                    var r = function (t, e) {
                        if (t.key)
                            if (t.key === n) o._buttonsHandled = !0, w(e).click();
                            else if (w.isPlainObject(t.key)) {
                                if (t.key.key !== n) return;
                                if (t.key.shiftKey && !o.shiftKey) return;
                                if (t.key.altKey && !o.altKey) return;
                                if (t.key.ctrlKey && !o.ctrlKey) return;
                                if (t.key.metaKey && !o.metaKey) return;
                                o._buttonsHandled = !0, w(e).click()
                            }
                    },
                        a = function (t) {
                            for (var e = 0, n = t.length; e < n; e++) r(t[e].conf, t[e].node), t[e].buttons.length && a(t[e].buttons)
                        };
                    a(this.s.buttons)
                }
            },
            _removeKey: function (t) {
                if (t.key) {
                    var e = w.isPlainObject(t.key) ? t.key.key : t.key,
                        n = this.s.listenKeys.split(""),
                        o = w.inArray(e, n);
                    n.splice(o, 1), this.s.listenKeys = n.join("")
                }
            },
            _resolveExtends: function (n) {
                function t(t) {
                    for (var e = 0; !w.isPlainObject(t) && !w.isArray(t);) {
                        if (t === y) return;
                        if ("function" == typeof t) {
                            if (!(t = t(r, n))) return !1
                        } else if ("string" == typeof t) {
                            if (!d[t]) throw "Unknown button type: " + t;
                            t = d[t]
                        }
                        if (30 < ++e) throw "Buttons: Too many iterations"
                    }
                    return w.isArray(t) ? t : w.extend({}, t)
                }
                var e, o, r = this.s.dt;
                for (n = t(n); n && n.extend;) {
                    if (!d[n.extend]) throw "Cannot extend unknown button type: " + n.extend;
                    var a = t(d[n.extend]);
                    if (w.isArray(a)) return a;
                    if (!a) return !1;
                    var i = a.className;
                    n = w.extend({}, a, n), i && n.className !== i && (n.className = i + " " + n.className);
                    var s = n.postfixButtons;
                    if (s) {
                        for (n.buttons || (n.buttons = []), e = 0, o = s.length; e < o; e++) n.buttons.push(s[e]);
                        n.postfixButtons = null
                    }
                    var l = n.prefixButtons;
                    if (l) {
                        for (n.buttons || (n.buttons = []), e = 0, o = l.length; e < o; e++) n.buttons.splice(e, 0, l[e]);
                        n.prefixButtons = null
                    }
                    n.extend = a.extend
                }
                return n
            }
        }), T.background = function (t, e, n, o) {
            n === y && (n = 400), o = o || _.body, t ? w("<div/>").addClass(e).css("display", "none").insertAfter(o).stop().fadeIn(n) : w("div." + e).stop().fadeOut(n, function () {
                w(this).removeClass(e).remove()
            })
        }, T.instanceSelector = function (t, r) {
            if (!t) return w.map(r, function (t) {
                return t.inst
            });
            var a = [],
                i = w.map(r, function (t) {
                    return t.name
                }),
                s = function (t) {
                    if (w.isArray(t))
                        for (var e = 0, n = t.length; e < n; e++) s(t[e]);
                    else if ("string" == typeof t)
                        if (-1 !== t.indexOf(",")) s(t.split(","));
                        else {
                            var o = w.inArray(w.trim(t), i); - 1 !== o && a.push(r[o].inst)
                        }
                    else "number" == typeof t && a.push(r[t].inst)
                };
            return s(t), a
        }, T.buttonSelector = function (t, e) {
            for (var c = [], u = function (t, e, n) {
                for (var o, r, a = 0, i = e.length; a < i; a++)(o = e[a]) && (r = n !== y ? n + a : a + "", t.push({
                    node: o.node,
                    name: o.conf.name,
                    idx: r
                }), o.buttons && u(t, o.buttons, r + "-"))
            }, f = function (t, e) {
                var n, o, r = [];
                u(r, e.s.buttons);
                var a = w.map(r, function (t) {
                    return t.node
                });
                if (w.isArray(t) || t instanceof w)
                    for (n = 0, o = t.length; n < o; n++) f(t[n], e);
                else if (null === t || t === y || "*" === t)
                    for (n = 0, o = r.length; n < o; n++) c.push({
                        inst: e,
                        node: r[n].node
                    });
                else if ("number" == typeof t) c.push({
                    inst: e,
                    node: e.s.buttons[t].node
                });
                else if ("string" == typeof t)
                    if (-1 !== t.indexOf(",")) {
                        var i = t.split(",");
                        for (n = 0, o = i.length; n < o; n++) f(w.trim(i[n]), e)
                    } else if (t.match(/^\d+(\-\d+)*$/)) {
                        var s = w.map(r, function (t) {
                            return t.idx
                        });
                        c.push({
                            inst: e,
                            node: r[w.inArray(t, s)].node
                        })
                    } else if (-1 !== t.indexOf(":name")) {
                        var l = t.replace(":name", "");
                        for (n = 0, o = r.length; n < o; n++) r[n].name === l && c.push({
                            inst: e,
                            node: r[n].node
                        })
                    } else w(a).filter(t).each(function () {
                        c.push({
                            inst: e,
                            node: this
                        })
                    });
                else if ("object" == typeof t && t.nodeName) {
                    var d = w.inArray(t, a); - 1 !== d && c.push({
                        inst: e,
                        node: a[d]
                    })
                }
            }, n = 0, o = t.length; n < o; n++) {
                var r = t[n];
                f(e, r)
            }
            return c
        }, T.defaults = {
            buttons: ["copy", "excel", "csv", "pdf", "print"],
            name: "main",
            tabIndex: 0,
            dom: {
                container: {
                    tag: "div",
                    className: "dt-buttons"
                },
                collection: {
                    tag: "div",
                    className: "dt-button-collection"
                },
                button: {
                    tag: "ActiveXObject" in x ? "a" : "button",
                    className: "dt-button",
                    active: "active",
                    disabled: "disabled"
                },
                buttonLiner: {
                    tag: "span",
                    className: ""
                }
            }
        }, T.version = "1.5.6", w.extend(d, {
            collection: {
                text: function (t) {
                    return t.i18n("buttons.collection", "Collection")
                },
                className: "buttons-collection",
                init: function (t, e, n) {
                    e.attr("aria-expanded", !1)
                },
                action: function (t, e, n, o) {
                    function r() {
                        e.buttons('[aria-haspopup="true"][aria-expanded="true"]').nodes().each(function () {
                            var t = w(this).siblings(".dt-button-collection");
                            t.length && t.stop().fadeOut(o.fade, function () {
                                t.detach()
                            }), w(this).attr("aria-expanded", "false")
                        }), w("div.dt-button-background").off("click.dtb-collection"), T.background(!1, o.backgroundClassName, o.fade, u), w("body").off(".dtb-collection"), e.off("buttons-action.b-internal")
                    }
                    var a = "true" === n.attr("aria-expanded");
                    if (r(), !a) {
                        var i = n,
                            s = w(n).parents("div.dt-button-collection"),
                            l = i.position(),
                            d = w(e.table().container()),
                            c = !1,
                            u = i;
                        n.attr("aria-expanded", "true"), s.length && (c = w(".dt-button-collection").position(), u = s, w("body").trigger("click.dtb-collection")), u.parents("body")[0] !== _.body && (u = _.body.lastChild), o._collection.find(".dt-button-collection-title").remove(), o._collection.prepend('<div class="dt-button-collection-title">' + o.collectionTitle + "</div>"), o._collection.addClass(o.collectionLayout).css("display", "none").insertAfter(u).stop().fadeIn(o.fade);
                        var f = o._collection.css("position");
                        if (c && "absolute" === f) o._collection.css({
                            top: c.top,
                            left: c.left
                        });
                        else if ("absolute" === f) {
                            o._collection.css({
                                top: l.top + i.outerHeight(),
                                left: l.left
                            });
                            var h = d.offset().top + d.height(),
                                p = l.top + i.outerHeight() + o._collection.outerHeight() - h,
                                m = l.top - o._collection.outerHeight();
                            (d.offset().top - m < p || o.dropup) && o._collection.css("top", l.top - o._collection.outerHeight() - 5), o._collection.hasClass(o.rightAlignClassName) && o._collection.css("left", l.left + i.outerWidth() - o._collection.outerWidth());
                            var b = l.left + o._collection.outerWidth(),
                                g = d.offset().left + d.width();
                            g < b && o._collection.css("left", l.left - (b - g));
                            var v = i.offset().left + o._collection.outerWidth();
                            v > w(x).width() && o._collection.css("left", l.left - (v - w(x).width()))
                        } else {
                            var y = o._collection.height() / 2;
                            y > w(x).height() / 2 && (y = w(x).height() / 2), o._collection.css("marginTop", -1 * y)
                        }
                        o.background && T.background(!0, o.backgroundClassName, o.fade, u), setTimeout(function () {
                            w("div.dt-button-background").on("click.dtb-collection", function () { }), w("body").on("click.dtb-collection", function (t) {
                                var e = w.fn.addBack ? "addBack" : "andSelf";
                                w(t.target).parents()[e]().filter(o._collection).length || r()
                            }).on("keyup.dtb-collection", function (t) {
                                27 === t.keyCode && r()
                            }), o.autoClose && e.on("buttons-action.b-internal", function () {
                                r()
                            })
                        }, 10)
                    }
                },
                background: !0,
                collectionLayout: "",
                collectionTitle: "",
                backgroundClassName: "dt-button-background",
                rightAlignClassName: "dt-button-right",
                autoClose: !1,
                fade: 400,
                attr: {
                    "aria-haspopup": !0
                }
            },
            copy: function (t, e) {
                return d.copyHtml5 ? "copyHtml5" : d.copyFlash && d.copyFlash.available(t, e) ? "copyFlash" : void 0
            },
            csv: function (t, e) {
                return d.csvHtml5 && d.csvHtml5.available(t, e) ? "csvHtml5" : d.csvFlash && d.csvFlash.available(t, e) ? "csvFlash" : void 0
            },
            excel: function (t, e) {
                return d.excelHtml5 && d.excelHtml5.available(t, e) ? "excelHtml5" : d.excelFlash && d.excelFlash.available(t, e) ? "excelFlash" : void 0
            },
            pdf: function (t, e) {
                return d.pdfHtml5 && d.pdfHtml5.available(t, e) ? "pdfHtml5" : d.pdfFlash && d.pdfFlash.available(t, e) ? "pdfFlash" : void 0
            },
            pageLength: function (t) {
                var e = t.settings()[0].aLengthMenu,
                    n = w.isArray(e[0]) ? e[0] : e,
                    o = w.isArray(e[0]) ? e[1] : e;
                return {
                    extend: "collection",
                    text: function (t) {
                        return t.i18n("buttons.pageLength", {
                            "-1": "Show all rows",
                            _: "Show %d rows"
                        }, t.page.len())
                    },
                    className: "buttons-page-length",
                    autoClose: !0,
                    buttons: w.map(n, function (a, t) {
                        return {
                            text: o[t],
                            className: "button-page-length",
                            action: function (t, e) {
                                e.page.len(a).draw()
                            },
                            init: function (t, e, n) {
                                function o() {
                                    r.active(t.page.len() === a)
                                }
                                var r = this;
                                t.on("length.dt" + n.namespace, o), o()
                            },
                            destroy: function (t, e, n) {
                                t.off("length.dt" + n.namespace)
                            }
                        }
                    }),
                    init: function (t, e, n) {
                        var o = this;
                        t.on("length.dt" + n.namespace, function () {
                            o.text(n.text)
                        })
                    },
                    destroy: function (t, e, n) {
                        t.off("length.dt" + n.namespace)
                    }
                }
            }
        }), o.Api.register("buttons()", function (e, n) {
            n === y && (n = e, e = y), this.selector.buttonGroup = e;
            var t = this.iterator(!0, "table", function (t) {
                if (t._buttons) return T.buttonSelector(T.instanceSelector(e, t._buttons), n)
            }, !0);
            return t._groupSelector = e, t
        }), o.Api.register("button()", function (t, e) {
            var n = this.buttons(t, e);
            return 1 < n.length && n.splice(1, n.length), n
        }), o.Api.registerPlural("buttons().active()", "button().active()", function (e) {
            return e === y ? this.map(function (t) {
                return t.inst.active(t.node)
            }) : this.each(function (t) {
                t.inst.active(t.node, e)
            })
        }), o.Api.registerPlural("buttons().action()", "button().action()", function (e) {
            return e === y ? this.map(function (t) {
                return t.inst.action(t.node)
            }) : this.each(function (t) {
                t.inst.action(t.node, e)
            })
        }), o.Api.register(["buttons().enable()", "button().enable()"], function (e) {
            return this.each(function (t) {
                t.inst.enable(t.node, e)
            })
        }), o.Api.register(["buttons().disable()", "button().disable()"], function () {
            return this.each(function (t) {
                t.inst.disable(t.node)
            })
        }), o.Api.registerPlural("buttons().nodes()", "button().node()", function () {
            var e = w();
            return w(this.each(function (t) {
                e = e.add(t.inst.node(t.node))
            })), e
        }), o.Api.registerPlural("buttons().processing()", "button().processing()", function (e) {
            return e === y ? this.map(function (t) {
                return t.inst.processing(t.node)
            }) : this.each(function (t) {
                t.inst.processing(t.node, e)
            })
        }), o.Api.registerPlural("buttons().text()", "button().text()", function (e) {
            return e === y ? this.map(function (t) {
                return t.inst.text(t.node)
            }) : this.each(function (t) {
                t.inst.text(t.node, e)
            })
        }), o.Api.registerPlural("buttons().trigger()", "button().trigger()", function () {
            return this.each(function (t) {
                t.inst.node(t.node).trigger("click")
            })
        }), o.Api.registerPlural("buttons().containers()", "buttons().container()", function () {
            var r = w(),
                a = this._groupSelector;
            return this.iterator(!0, "table", function (t) {
                if (t._buttons)
                    for (var e = T.instanceSelector(a, t._buttons), n = 0, o = e.length; n < o; n++) r = r.add(e[n].container())
            }), r
        }), o.Api.register("button().add()", function (t, e) {
            var n = this.context;
            if (n.length) {
                var o = T.instanceSelector(this._groupSelector, n[0]._buttons);
                o.length && o[0].add(e, t)
            }
            return this.button(this._groupSelector, t)
        }), o.Api.register("buttons().destroy()", function () {
            return this.pluck("inst").unique().each(function (t) {
                t.destroy()
            }), this
        }), o.Api.registerPlural("buttons().remove()", "buttons().remove()", function () {
            return this.each(function (t) {
                t.inst.remove(t.node)
            }), this
        }), o.Api.register("buttons.info()", function (t, e, n) {
            var o = this;
            return !1 === t ? (w("#datatables_buttons_info").fadeOut(function () {
                w(this).remove()
            }), clearTimeout(r), r = null) : (r && clearTimeout(r), w("#datatables_buttons_info").length && w("#datatables_buttons_info").remove(), t = t ? "<h2>" + t + "</h2>" : "", w('<div id="datatables_buttons_info" class="dt-button-info"/>').html(t).append(w("<div/>")["string" == typeof e ? "html" : "append"](e)).css("display", "none").appendTo("body").fadeIn(), n !== y && 0 !== n && (r = setTimeout(function () {
                o.buttons.info(!1)
            }, n))), this
        }), o.Api.register("buttons.exportData()", function (t) {
            if (this.context.length) return l(new o.Api(this.context[0]), t)
        }), o.Api.register("buttons.exportInfo()", function (t) {
            return {
                filename: e(t = t || {}),
                title: i(t),
                messageTop: s(this, t.message || t.messageTop, "top"),
                messageBottom: s(this, t.messageBottom, "bottom")
            }
        });
        var e = function (t) {
            var e = "*" === t.filename && "*" !== t.title && t.title !== y && null !== t.title && "" !== t.title ? t.title : t.filename;
            if ("function" == typeof e && (e = e()), e === y || null === e) return null; - 1 !== e.indexOf("*") && (e = w.trim(e.replace("*", w("head > title").text()))), e = e.replace(/[^a-zA-Z0-9_\u00A1-\uFFFF\.,\-_ !\(\)]/g, "");
            var n = a(t.extension);
            return e + (n = n || "")
        },
            a = function (t) {
                return null === t || t === y ? null : "function" == typeof t ? t() : t
            },
            i = function (t) {
                var e = a(t.title);
                return null === e ? null : -1 !== e.indexOf("*") ? e.replace("*", w("head > title").text() || "Exported data") : e
            },
            s = function (t, e, n) {
                var o = a(e);
                if (null === o) return null;
                var r = w("caption", t.table().container()).eq(0);
                return "*" !== o ? o : r.css("caption-side") !== n ? null : r.length ? r.text() : ""
            },
            C = w("<textarea/>")[0],
            l = function (n, t) {
                var o = w.extend(!0, {}, {
                    rows: null,
                    columns: "",
                    modifier: {
                        search: "applied",
                        order: "applied"
                    },
                    orthogonal: "display",
                    stripHtml: !0,
                    stripNewlines: !0,
                    decodeEntities: !0,
                    trim: !0,
                    format: {
                        header: function (t) {
                            return e(t)
                        },
                        footer: function (t) {
                            return e(t)
                        },
                        body: function (t) {
                            return e(t)
                        }
                    },
                    customizeData: null
                }, t),
                    e = function (t) {
                        return "string" != typeof t || (t = (t = t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")).replace(/<!\-\-.*?\-\->/g, ""), o.stripHtml && (t = t.replace(/<[^>]*>/g, "")), o.trim && (t = t.replace(/^\s+|\s+$/g, "")), o.stripNewlines && (t = t.replace(/\n/g, " ")), o.decodeEntities && (C.innerHTML = t, t = C.value)), t
                    },
                    r = n.columns(o.columns).indexes().map(function (t) {
                        var e = n.column(t).header();
                        return o.format.header(e.innerHTML, t, e)
                    }).toArray(),
                    a = n.table().footer() ? n.columns(o.columns).indexes().map(function (t) {
                        var e = n.column(t).footer();
                        return o.format.footer(e ? e.innerHTML : "", t, e)
                    }).toArray() : null,
                    i = w.extend({}, o.modifier);
                n.select && "function" == typeof n.select.info && i.selected === y && n.rows(o.rows, w.extend({
                    selected: !0
                }, i)).any() && w.extend(i, {
                    selected: !0
                });
                for (var s = n.rows(o.rows, i).indexes().toArray(), l = n.cells(s, o.columns), d = l.render(o.orthogonal).toArray(), c = l.nodes().toArray(), u = r.length, f = [], h = 0, p = 0, m = 0 < u ? d.length / u : 0; p < m; p++) {
                    for (var b = [u], g = 0; g < u; g++) b[g] = o.format.body(d[h], p, g, c[h]), h++;
                    f[p] = b
                }
                var v = {
                    header: r,
                    footer: a,
                    body: f
                };
                return o.customizeData && o.customizeData(v), v
            };

        function t(t) {
            var e = new o.Api(t),
                n = e.init().buttons || o.defaults.buttons;
            return new T(e, n).container()
        }
        return w.fn.dataTable.Buttons = T, w.fn.DataTable.Buttons = T, w(_).on("init.dt plugin-init.dt", function (t, e) {
            if ("dt" === t.namespace) {
                var n = e.oInit.buttons || o.defaults.buttons;
                n && !e._buttons && new T(e, n).container()
            }
        }), o.ext.feature.push({
            fnInit: t,
            cFeature: "B"
        }), o.ext.features && o.ext.features.register("buttons", t), T
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-buttons"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net-bs4")(t, e).$), e.fn.dataTable.Buttons || require("datatables.net-buttons")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (n, t, e, o) {
        "use strict";
        var r = n.fn.dataTable;
        return n.extend(!0, r.Buttons.defaults, {
            dom: {
                container: {
                    className: "dt-buttons btn-group"
                },
                button: {
                    className: "btn btn-secondary"
                },
                collection: {
                    tag: "div",
                    className: "dt-button-collection dropdown-menu",
                    button: {
                        tag: "a",
                        className: "dt-button dropdown-item",
                        active: "active",
                        disabled: "disabled"
                    }
                }
            },
            buttonCreated: function (t, e) {
                return t.buttons ? n('<div class="btn-group"/>').append(e) : e
            }
        }), r.ext.buttons.collection.className += " dropdown-toggle", r.ext.buttons.collection.rightAlignClassName = "dropdown-menu-right", r.Buttons
    }),
    function (r) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (t) {
            return r(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e, n, o) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), e.fn.dataTable.Buttons || require("datatables.net-buttons")(t, e), r(e, t, t.document, n, o)
        } : r(jQuery, window, document)
    }(function (D, t, m, e, n, I) {
        "use strict";
        var o = D.fn.dataTable;

        function F() {
            return e || t.JSZip
        }

        function u() {
            return n || t.pdfMake
        }
        o.Buttons.pdfMake = function (t) {
            if (!t) return u();
            n = m_ake
        }, o.Buttons.jszip = function (t) {
            if (!t) return F();
            e = t
        };
        var R = function (s) {
            if (!(void 0 === s || "undefined" != typeof navigator && /MSIE [1-9]\./.test(navigator.userAgent))) {
                var t = s.document,
                    l = function () {
                        return s.URL || s.webkitURL || s
                    },
                    d = t.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                    c = "download" in d,
                    u = /constructor/i.test(s.HTMLElement) || s.safari,
                    f = /CriOS\/[\d]+/.test(navigator.userAgent),
                    h = function (t) {
                        (s.setImmediate || s.setTimeout)(function () {
                            throw t
                        }, 0)
                    },
                    p = function (t) {
                        setTimeout(function () {
                            "string" == typeof t ? l().revokeObjectURL(t) : t.remove()
                        }, 4e4)
                    },
                    m = function (t) {
                        return /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], {
                            type: t.type
                        }) : t
                    },
                    o = function (t, e, n) {
                        n || (t = m(t));

                        function o() {
                            ! function (t, e, n) {
                                for (var o = (e = [].concat(e)).length; o--;) {
                                    var r = t["on" + e[o]];
                                    if ("function" == typeof r) try {
                                        r.call(t, n || t)
                                    } catch (t) {
                                        h(t)
                                    }
                                }
                            }(a, "writestart progress write writeend".split(" "))
                        }
                        var r, a = this,
                            i = "application/octet-stream" === t.type;
                        if (a.readyState = a.INIT, c) return r = l().createObjectURL(t), void setTimeout(function () {
                            d.href = r, d.download = e,
                                function (t) {
                                    var e = new MouseEvent("click");
                                    t.dispatchEvent(e)
                                }(d), o(), p(r), a.readyState = a.DONE
                        });
                        ! function () {
                            if ((f || i && u) && s.FileReader) {
                                var e = new FileReader;
                                return e.onloadend = function () {
                                    var t = f ? e.result : e.result.replace(/^data:[^;]*;/, "data:attachment/file;");
                                    s.open(t, "_blank") || (s.location.href = t), t = I, a.readyState = a.DONE, o()
                                }, e.readAsDataURL(t), a.readyState = a.INIT
                            } (r = r || l().createObjectURL(t), i) ? s.location.href = r : s.open(r, "_blank") || (s.location.href = r);
                            a.readyState = a.DONE, o(), p(r)
                        }()
                    },
                    e = o.prototype;
                return "undefined" != typeof navigator && navigator.msSaveOrOpenBlob ? function (t, e, n) {
                    return e = e || t.name || "download", n || (t = m(t)), navigator.msSaveOrOpenBlob(t, e)
                } : (e.abort = function () { }, e.readyState = e.INIT = 0, e.WRITING = 1, e.DONE = 2, e.error = e.onwritestart = e.onprogress = e.onwrite = e.onabort = e.onerror = e.onwriteend = null, function (t, e, n) {
                    return new o(t, e || t.name || "download", n)
                })
            }
        }("undefined" != typeof self && self || void 0 !== t && t || this.content);
        o.fileSave = R;

        function A(t) {
            var e = "Sheet1";
            return t.sheetName && (e = t.sheetName.replace(/[\[\]\*\/\\\?\:]/g, "")), e
        }

        function b(t) {
            return t.newline ? t.newline : navigator.userAgent.match(/Windows/) ? "\r\n" : "\n"
        }

        function g(t, e) {
            for (var n = b(e), o = t.buttons.exportData(e.exportOptions), r = e.fieldBoundary, a = e.fieldSeparator, i = new RegExp(r, "g"), s = e.escapeChar !== I ? e.escapeChar : "\\", l = function (t) {
                for (var e = "", n = 0, o = t.length; n < o; n++) 0 < n && (e += a), e += r ? r + ("" + t[n]).replace(i, s + r) + r : t[n];
                return e
            }, d = e.header ? l(o.header) + n : "", c = e.footer && o.footer ? n + l(o.footer) : "", u = [], f = 0, h = o.body.length; f < h; f++) u.push(l(o.body[f]));
            return {
                str: d + u.join(n) + c,
                rows: u.length
            }
        }

        function f() {
            if (!(-1 !== navigator.userAgent.indexOf("Safari") && -1 === navigator.userAgent.indexOf("Chrome") && -1 === navigator.userAgent.indexOf("Opera"))) return !1;
            var t = navigator.userAgent.match(/AppleWebKit\/(\d+\.\d+)/);
            return !!(t && 1 < t.length && 1 * t[1] < 603.1)
        }

        function k(t) {
            for (var e = "A".charCodeAt(0), n = "Z".charCodeAt(0) - e + 1, o = ""; 0 <= t;) o = String.fromCharCode(t % n + e) + o, t = Math.floor(t / n) - 1;
            return o
        }
        try {
            var N, L = new XMLSerializer
        } catch (t) { }

        function H(t, e, n) {
            var o = t.createElement(e);
            return n && (n.attr && D(o).attr(n.attr), n.children && D.each(n.children, function (t, e) {
                o.appendChild(e)
            }), null !== n.text && n.text !== I && o.appendChild(t.createTextNode(n.text))), o
        }

        function B(t, e) {
            var n, o, r, a = t.header[e].length;
            t.footer && t.footer[e].length > a && (a = t.footer[e].length);
            for (var i = 0, s = t.body.length; i < s; i++) {
                var l = t.body[i][e];
                if (a < (n = -1 !== (r = null !== l && l !== I ? l.toString() : "").indexOf("\n") ? ((o = r.split("\n")).sort(function (t, e) {
                    return e.length - t.length
                }), o[0].length) : r.length) && (a = n), 40 < a) return 54
            }
            return 6 < (a *= 1.35) ? a : 6
        }
        var O = {
            "_rels/.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
            "xl/_rels/workbook.xml.rels": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>',
            "[Content_Types].xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="xml" ContentType="application/xml" /><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="jpeg" ContentType="image/jpeg" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" /></Types>',
            "xl/workbook.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="24816"/><workbookPr showInkAnnotation="0" autoCompressPictures="0"/><bookViews><workbookView xWindow="0" yWindow="0" windowWidth="25600" windowHeight="19020" tabRatio="500"/></bookViews><sheets><sheet name="Sheet1" sheetId="1" r:id="rId1"/></sheets><definedNames/></workbook>',
            "xl/worksheets/sheet1.xml": '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><sheetData/><mergeCells count="0"/></worksheet>',
            "xl/styles.xml": '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="6"><numFmt numFmtId="164" formatCode="#,##0.00_- [$$-45C]"/><numFmt numFmtId="165" formatCode="&quot;£&quot;#,##0.00"/><numFmt numFmtId="166" formatCode="[$€-2] #,##0.00"/><numFmt numFmtId="167" formatCode="0.0%"/><numFmt numFmtId="168" formatCode="#,##0;(#,##0)"/><numFmt numFmtId="169" formatCode="#,##0.00;(#,##0.00)"/></numFmts><fonts count="5" x14ac:knownFonts="1"><font><sz val="11" /><name val="Calibri" /></font><font><sz val="11" /><name val="Calibri" /><color rgb="FFFFFFFF" /></font><font><sz val="11" /><name val="Calibri" /><b /></font><font><sz val="11" /><name val="Calibri" /><i /></font><font><sz val="11" /><name val="Calibri" /><u /></font></fonts><fills count="6"><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="none" /></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD9D9D9" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFD99795" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6efce" /><bgColor indexed="64" /></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="ffc6cfef" /><bgColor indexed="64" /></patternFill></fill></fills><borders count="2"><border><left /><right /><top /><bottom /><diagonal /></border><border diagonalUp="false" diagonalDown="false"><left style="thin"><color auto="1" /></left><right style="thin"><color auto="1" /></right><top style="thin"><color auto="1" /></top><bottom style="thin"><color auto="1" /></bottom><diagonal /></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" /></cellStyleXfs><cellXfs count="67"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="0" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="0" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="2" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="3" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="4" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="1" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="2" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="3" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="4" fillId="5" borderId="1" applyFont="1" applyFill="1" applyBorder="1"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="left"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="center"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="right"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment horizontal="fill"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="9"   fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="165" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="166" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="167" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="168" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="169" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="3" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="4" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="1" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/><xf numFmtId="2" fontId="0" fillId="0" borderId="0" applyFont="1" applyFill="1" applyBorder="1" xfId="0" applyNumberFormat="1"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0" /></cellStyles><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4" /></styleSheet>'
        },
            j = [{
                match: /^\-?\d+\.\d%$/,
                style: 60,
                fmt: function (t) {
                    return t / 100
                }
            }, {
                match: /^\-?\d+\.?\d*%$/,
                style: 56,
                fmt: function (t) {
                    return t / 100
                }
            }, {
                match: /^\-?\$[\d,]+.?\d*$/,
                style: 57
            }, {
                match: /^\-?£[\d,]+.?\d*$/,
                style: 58
            }, {
                match: /^\-?€[\d,]+.?\d*$/,
                style: 59
            }, {
                match: /^\-?\d+$/,
                style: 65
            }, {
                match: /^\-?\d+\.\d{2}$/,
                style: 66
            }, {
                match: /^\([\d,]+\)$/,
                style: 61,
                fmt: function (t) {
                    return -1 * t.replace(/[\(\)]/g, "")
                }
            }, {
                match: /^\([\d,]+\.\d{2}\)$/,
                style: 62,
                fmt: function (t) {
                    return -1 * t.replace(/[\(\)]/g, "")
                }
            }, {
                match: /^\-?[\d,]+$/,
                style: 63
            }, {
                match: /^\-?[\d,]+\.\d{2}$/,
                style: 64
            }];
        return o.ext.buttons.copyHtml5 = {
            className: "buttons-copy buttons-html5",
            text: function (t) {
                return t.i18n("buttons.copy", "Copy")
            },
            action: function (t, e, n, o) {
                this.processing(!0);
                var r = this,
                    a = g(e, o),
                    i = e.buttons.exportInfo(o),
                    s = b(o),
                    l = a.str,
                    d = D("<div/>").css({
                        height: 1,
                        width: 1,
                        overflow: "hidden",
                        position: "fixed",
                        top: 0,
                        left: 0
                    });
                i.title && (l = i.title + s + s + l), i.messageTop && (l = i.messageTop + s + s + l), i.messageBottom && (l = l + s + s + i.messageBottom), o.customize && (l = o.customize(l, o, e));
                var c = D("<textarea readonly/>").val(l).appendTo(d);
                if (m.queryCommandSupported("copy")) {
                    d.appendTo(e.table().container()), c[0].focus(), c[0].select();
                    try {
                        var u = m.execCommand("copy");
                        if (d.remove(), u) return e.buttons.info(e.i18n("buttons.copyTitle", "Copy to clipboard"), e.i18n("buttons.copySuccess", {
                            1: "Copied one row to clipboard",
                            _: "Copied %d rows to clipboard"
                        }, a.rows), 2e3), void this.processing(!1)
                    } catch (t) { }
                }
                var f = D("<span>" + e.i18n("buttons.copyKeys", "Press <i>ctrl</i> or <i>⌘</i> + <i>C</i> to copy the table data<br>to your system clipboard.<br><br>To cancel, click this message or press escape.") + "</span>").append(d);
                e.buttons.info(e.i18n("buttons.copyTitle", "Copy to clipboard"), f, 0), c[0].focus(), c[0].select();

                function h() {
                    p.off("click.buttons-copy"), D(m).off(".buttons-copy"), e.buttons.info(!1)
                }
                var p = D(f).closest(".dt-button-info");
                p.on("click.buttons-copy", h), D(m).on("keydown.buttons-copy", function (t) {
                    27 === t.keyCode && (h(), r.processing(!1))
                }).on("copy.buttons-copy cut.buttons-copy", function () {
                    h(), r.processing(!1)
                })
            },
            exportOptions: {},
            fieldSeparator: "\t",
            fieldBoundary: "",
            header: !0,
            footer: !1,
            title: "*",
            messageTop: "*",
            messageBottom: "*"
        }, o.ext.buttons.csvHtml5 = {
            bom: !1,
            className: "buttons-csv buttons-html5",
            available: function () {
                return t.FileReader !== I && t.Blob
            },
            text: function (t) {
                return t.i18n("buttons.csv", "CSV")
            },
            action: function (t, e, n, o) {
                this.processing(!0);
                var r = g(e, o).str,
                    a = e.buttons.exportInfo(o),
                    i = o.charset;
                o.customize && (r = o.customize(r, o, e)), i = !1 !== i ? (i = i || (m.characterSet || m.charset)) && ";charset=" + i : "", o.bom && (r = "\ufeff" + r), R(new Blob([r], {
                    type: "text/csv" + i
                }), a.filename, !0), this.processing(!1)
            },
            filename: "*",
            extension: ".csv",
            exportOptions: {},
            fieldSeparator: ",",
            fieldBoundary: '"',
            escapeChar: '"',
            charset: null,
            header: !0,
            footer: !1
        }, o.ext.buttons.excelHtml5 = {
            className: "buttons-excel buttons-html5",
            available: function () {
                return t.FileReader !== I && F() !== I && !f() && L
            },
            text: function (t) {
                return t.i18n("buttons.excel", "Excel")
            },
            action: function (t, e, n, u) {
                this.processing(!0);

                function o(t) {
                    var e = O[t];
                    return D.parseXML(e)
                }

                function r(t) {
                    h = H(m, "row", {
                        attr: {
                            r: f = p + 1
                        }
                    });
                    for (var e = 0, n = t.length; e < n; e++) {
                        var o = k(e) + "" + f,
                            r = null;
                        if (null === t[e] || t[e] === I || "" === t[e]) {
                            if (!0 !== u.createEmptyCells) continue;
                            t[e] = ""
                        }
                        var a = t[e];
                        t[e] = D.trim(t[e]);
                        for (var i = 0, s = j.length; i < s; i++) {
                            var l = j[i];
                            if (t[e].match && !t[e].match(/^0\d+/) && t[e].match(l.match)) {
                                var d = t[e].replace(/[^\d\.\-]/g, "");
                                l.fmt && (d = l.fmt(d)), r = H(m, "c", {
                                    attr: {
                                        r: o,
                                        s: l.style
                                    },
                                    children: [H(m, "v", {
                                        text: d
                                    })]
                                });
                                break
                            }
                        }
                        if (!r)
                            if ("number" == typeof t[e] || t[e].match && t[e].match(/^-?\d+(\.\d+)?$/) && !t[e].match(/^0\d+/)) r = H(m, "c", {
                                attr: {
                                    t: "n",
                                    r: o
                                },
                                children: [H(m, "v", {
                                    text: t[e]
                                })]
                            });
                            else {
                                var c = a.replace ? a.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, "") : a;
                                r = H(m, "c", {
                                    attr: {
                                        t: "inlineStr",
                                        r: o
                                    },
                                    children: {
                                        row: H(m, "is", {
                                            children: {
                                                row: H(m, "t", {
                                                    text: c,
                                                    attr: {
                                                        "xml:space": "preserve"
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            } h.appendChild(r)
                    }
                    b.appendChild(h), p++
                }
                var a, i, f, h, s = this,
                    p = 0,
                    m = o("xl/worksheets/sheet1.xml"),
                    b = m.getElementsByTagName("sheetData")[0],
                    l = {
                        _rels: {
                            ".rels": o("_rels/.rels")
                        },
                        xl: {
                            _rels: {
                                "workbook.xml.rels": o("xl/_rels/workbook.xml.rels")
                            },
                            "workbook.xml": o("xl/workbook.xml"),
                            "styles.xml": o("xl/styles.xml"),
                            worksheets: {
                                "sheet1.xml": m
                            }
                        },
                        "[Content_Types].xml": o("[Content_Types].xml")
                    },
                    d = e.buttons.exportData(u.exportOptions);
                u.customizeData && u.customizeData(d);

                function c(t, e) {
                    var n = D("mergeCells", m);
                    n[0].appendChild(H(m, "mergeCell", {
                        attr: {
                            ref: "A" + t + ":" + k(e) + t
                        }
                    })), n.attr("count", parseFloat(n.attr("count")) + 1), D("row:eq(" + (t - 1) + ") c", m).attr("s", "51")
                }
                var g = e.buttons.exportInfo(u);
                g.title && (r([g.title]), c(p, d.header.length - 1)), g.messageTop && (r([g.messageTop]), c(p, d.header.length - 1)), u.header && (r(d.header), D("row:last c", m).attr("s", "2")), a = p;
                for (var v = 0, y = d.body.length; v < y; v++) r(d.body[v]);
                i = p, u.footer && d.footer && (r(d.footer), D("row:last c", m).attr("s", "2")), g.messageBottom && (r([g.messageBottom]), c(p, d.header.length - 1));
                var w = H(m, "cols");
                D("worksheet", m).prepend(w);
                for (var x = 0, _ = d.header.length; x < _; x++) w.appendChild(H(m, "col", {
                    attr: {
                        min: x + 1,
                        max: x + 1,
                        width: B(d, x),
                        customWidth: 1
                    }
                }));
                var T = l.xl["workbook.xml"];
                D("sheets sheet", T).attr("name", A(u)), u.autoFilter && (D("mergeCells", m).before(H(m, "autoFilter", {
                    attr: {
                        ref: "A" + a + ":" + k(d.header.length - 1) + i
                    }
                })), D("definedNames", T).append(H(T, "definedName", {
                    attr: {
                        name: "_xlnm._FilterDatabase",
                        localSheetId: "0",
                        hidden: 1
                    },
                    text: A(u) + "!$A$" + a + ":" + k(d.header.length - 1) + i
                }))), u.customize && u.customize(l, u, e), 0 === D("mergeCells", m).children().length && D("mergeCells", m).remove();
                var C = new (F()),
                    S = {
                        type: "blob",
                        mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                    };
                ! function c(u, t) {
                    N === I && (N = -1 === L.serializeToString(D.parseXML(O["xl/worksheets/sheet1.xml"])).indexOf("xmlns:r")), D.each(t, function (t, e) {
                        if (D.isPlainObject(e)) c(u.folder(t), e);
                        else {
                            if (N) {
                                var n, o, r = e.childNodes[0],
                                    a = [];
                                for (n = r.attributes.length - 1; 0 <= n; n--) {
                                    var i = r.attributes[n].nodeName,
                                        s = r.attributes[n].nodeValue; - 1 !== i.indexOf(":") && (a.push({
                                            name: i,
                                            value: s
                                        }), r.removeAttribute(i))
                                }
                                for (n = 0, o = a.length; n < o; n++) {
                                    var l = e.createAttribute(a[n].name.replace(":", "_dt_b_namespace_token_"));
                                    l.value = a[n].value, r.setAttributeNode(l)
                                }
                            }
                            var d = L.serializeToString(e);
                            N && (-1 === d.indexOf("<?xml") && (d = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + d), d = (d = d.replace(/_dt_b_namespace_token_/g, ":")).replace(/xmlns:NS[\d]+="" NS[\d]+:/g, "")), d = d.replace(/<([^<>]*?) xmlns=""([^<>]*?)>/g, "<$1 $2>"), u.file(t, d)
                        }
                    })
                }(C, l), C.generateAsync ? C.generateAsync(S).then(function (t) {
                    R(t, g.filename), s.processing(!1)
                }) : (R(C.generate(S), g.filename), this.processing(!1))
            },
            filename: "*",
            extension: ".xlsx",
            exportOptions: {},
            header: !0,
            footer: !1,
            title: "*",
            messageTop: "*",
            messageBottom: "*",
            createEmptyCells: !1,
            autoFilter: !1,
            sheetName: ""
        }, o.ext.buttons.pdfHtml5 = {
            className: "buttons-pdf buttons-html5",
            available: function () {
                return t.FileReader !== I && u()
            },
            text: function (t) {
                return t.i18n("buttons.pdf", "PDF")
            },
            action: function (t, e, n, o) {
                this.processing(!0);
                var r = e.buttons.exportData(o.exportOptions),
                    a = e.buttons.exportInfo(o),
                    i = [];
                o.header && i.push(D.map(r.header, function (t) {
                    return {
                        text: "string" == typeof t ? t : t + "",
                        style: "tableHeader"
                    }
                }));
                for (var s = 0, l = r.body.length; s < l; s++) i.push(D.map(r.body[s], function (t) {
                    return null !== t && t !== I || (t = ""), {
                        text: "string" == typeof t ? t : t + "",
                        style: s % 2 ? "tableBodyEven" : "tableBodyOdd"
                    }
                }));
                o.footer && r.footer && i.push(D.map(r.footer, function (t) {
                    return {
                        text: "string" == typeof t ? t : t + "",
                        style: "tableFooter"
                    }
                }));
                var d = {
                    pageSize: o.pageSize,
                    pageOrientation: o.orientation,
                    content: [{
                        table: {
                            headerRows: 1,
                            body: i
                        },
                        layout: "noBorders"
                    }],
                    styles: {
                        tableHeader: {
                            bold: !0,
                            fontSize: 11,
                            color: "white",
                            fillColor: "#2d4154",
                            alignment: "center"
                        },
                        tableBodyEven: {},
                        tableBodyOdd: {
                            fillColor: "#f3f3f3"
                        },
                        tableFooter: {
                            bold: !0,
                            fontSize: 11,
                            color: "white",
                            fillColor: "#2d4154"
                        },
                        title: {
                            alignment: "center",
                            fontSize: 15
                        },
                        message: {}
                    },
                    defaultStyle: {
                        fontSize: 10
                    }
                };
                a.messageTop && d.content.unshift({
                    text: a.messageTop,
                    style: "message",
                    margin: [0, 0, 0, 12]
                }), a.messageBottom && d.content.push({
                    text: a.messageBottom,
                    style: "message",
                    margin: [0, 0, 0, 12]
                }), a.title && d.content.unshift({
                    text: a.title,
                    style: "title",
                    margin: [0, 0, 0, 12]
                }), o.customize && o.customize(d, o, e);
                var c = u().createPdf(d);
                "open" !== o.download || f() ? c.download(a.filename) : c.open(), this.processing(!1)
            },
            title: "*",
            filename: "*",
            extension: ".pdf",
            exportOptions: {},
            orientation: "portrait",
            pageSize: "A4",
            header: !0,
            footer: !1,
            messageTop: "*",
            messageBottom: "*",
            customize: null,
            download: "download"
        }, o.Buttons
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), e.fn.dataTable.Buttons || require("datatables.net-buttons")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (p, m, t, b) {
        "use strict";
        var e = p.fn.dataTable,
            n = t.createElement("a"),
            g = function (t) {
                n.href = t;
                var e = n.host;
                return -1 === e.indexOf("/") && 0 !== n.pathname.indexOf("/") && (e += "/"), n.protocol + "//" + e + n.pathname + n.search
            };
        return e.ext.buttons.print = {
            className: "buttons-print",
            text: function (t) {
                return t.i18n("buttons.print", "Print")
            },
            action: function (t, e, n, o) {
                function r(t, e) {
                    for (var n = "<tr>", o = 0, r = t.length; o < r; o++) {
                        var a = null === t[o] || t[o] === b ? "" : t[o];
                        n += "<" + e + " " + (s[o] ? 'class="' + s[o] + '"' : "") + ">" + a + "</" + e + ">"
                    }
                    return n + "</tr>"
                }
                var a = e.buttons.exportData(p.extend({
                    decodeEntities: !1
                }, o.exportOptions)),
                    i = e.buttons.exportInfo(o),
                    s = e.columns(o.exportOptions.columns).flatten().map(function (t) {
                        return e.settings()[0].aoColumns[e.column(t).index()].sClass
                    }).toArray(),
                    l = '<table class="' + e.table().node().className + '">';
                o.header && (l += "<thead>" + r(a.header, "th") + "</thead>"), l += "<tbody>";
                for (var d = 0, c = a.body.length; d < c; d++) l += r(a.body[d], "td");
                l += "</tbody>", o.footer && a.footer && (l += "<tfoot>" + r(a.footer, "th") + "</tfoot>"), l += "</table>";
                var u = m.open("", "");
                u.document.close();
                var f = "<title>" + i.title + "</title>";
                p("style, link").each(function () {
                    f += function (t) {
                        var e = p(t).clone()[0];
                        return "link" === e.nodeName.toLowerCase() && (e.href = g(e.href)), e.outerHTML
                    }(this)
                });
                try {
                    u.document.head.innerHTML = f
                } catch (t) {
                    p(u.document.head).html(f)
                }
                u.document.body.innerHTML = "<h1>" + i.title + "</h1><div>" + (i.messageTop || "") + "</div>" + l + "<div>" + (i.messageBottom || "") + "</div>", p(u.document.body).addClass("dt-print-view"), p("img", u.document.body).each(function (t, e) {
                    e.setAttribute("src", g(e.getAttribute("src")))
                }), o.customize && o.customize(u, o, e);

                function h() {
                    o.autoPrint && (u.print(), u.close())
                }
                navigator.userAgent.match(/Trident\/\d.\d/) ? h() : u.setTimeout(h, 1e3)
            },
            title: "*",
            messageTop: "*",
            messageBottom: "*",
            exportOptions: {},
            header: !0,
            footer: !1,
            autoPrint: !0,
            customize: null
        }, e.Buttons
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net", "datatables.net-buttons"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), e.fn.dataTable.Buttons || require("datatables.net-buttons")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (i, t, e, s) {
        "use strict";
        var n = i.fn.dataTable;
        return i.extend(n.ext.buttons, {
            colvis: function (t, e) {
                return {
                    extend: "collection",
                    text: function (t) {
                        return t.i18n("buttons.colvis", "Column visibility")
                    },
                    className: "buttons-colvis",
                    buttons: [{
                        extend: "columnsToggle",
                        columns: e.columns,
                        columnText: e.columnText
                    }]
                }
            },
            columnsToggle: function (t, e) {
                return t.columns(e.columns).indexes().map(function (t) {
                    return {
                        extend: "columnToggle",
                        columns: t,
                        columnText: e.columnText
                    }
                }).toArray()
            },
            columnToggle: function (t, e) {
                return {
                    extend: "columnVisibility",
                    columns: e.columns,
                    columnText: e.columnText
                }
            },
            columnsVisibility: function (t, e) {
                return t.columns(e.columns).indexes().map(function (t) {
                    return {
                        extend: "columnVisibility",
                        columns: t,
                        visibility: e.visibility,
                        columnText: e.columnText
                    }
                }).toArray()
            },
            columnVisibility: {
                columns: s,
                text: function (t, e, n) {
                    return n._columnText(t, n)
                },
                className: "buttons-columnVisibility",
                action: function (t, e, n, o) {
                    var r = e.columns(o.columns),
                        a = r.visible();
                    r.visible(o.visibility !== s ? o.visibility : !(a.length && a[0]))
                },
                init: function (o, r, a) {
                    var n = this;
                    r.attr("data-cv-idx", a.columns), o.on("column-visibility.dt" + a.namespace, function (t, e) {
                        e.bDestroying || e.nTable != o.settings()[0].nTable || n.active(o.column(a.columns).visible())
                    }).on("column-reorder.dt" + a.namespace, function (t, e, n) {
                        1 === o.columns(a.columns).count() && (a.columns = i.inArray(a.columns, n.mapping), r.attr("data-cv-idx", a.columns), r.parent().children("[data-cv-idx]").sort(function (t, e) {
                            return 1 * t.getAttribute("data-cv-idx") - 1 * e.getAttribute("data-cv-idx")
                        }).appendTo(r.parent()))
                    }), this.active(o.column(a.columns).visible())
                },
                destroy: function (t, e, n) {
                    t.off("column-visibility.dt" + n.namespace).off("column-reorder.dt" + n.namespace)
                },
                _columnText: function (t, e) {
                    var n = t.column(e.columns).index(),
                        o = t.settings()[0].aoColumns[n].sTitle.replace(/\n/g, " ").replace(/<br\s*\/?>/gi, " ").replace(/<select(.*?)<\/select>/g, "").replace(/<!\-\-.*?\-\->/g, "").replace(/<.*?>/g, "").replace(/^\s+|\s+$/g, "");
                    return e.columnText ? e.columnText(t, n, o) : o
                }
            },
            colvisRestore: {
                className: "buttons-colvisRestore",
                text: function (t) {
                    return t.i18n("buttons.colvisRestore", "Restore visibility")
                },
                init: function (e, t, n) {
                    n._visOriginal = e.columns().indexes().map(function (t) {
                        return e.column(t).visible()
                    }).toArray()
                },
                action: function (t, n, e, o) {
                    n.columns().every(function (t) {
                        var e = n.colReorder && n.colReorder.transpose ? n.colReorder.transpose(t, "toOriginal") : t;
                        this.visible(o._visOriginal[e])
                    })
                }
            },
            colvisGroup: {
                className: "buttons-colvisGroup",
                action: function (t, e, n, o) {
                    e.columns(o.show).visible(!0, !1), e.columns(o.hide).visible(!1, !1), e.columns.adjust()
                },
                show: [],
                hide: []
            }
        }), n.Buttons
    }), $.extend(!0, $.fn.dataTable.Buttons.defaults, {
        dom: {
            container: {
                className: "dt-buttons"
            },
            button: {
                className: "btn"
            }
        }
    }), $.fn.dataTable.AutoFill.classes.btn = "btn btn-primary",
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (w, t, a, x) {
        "use strict";
        var i = w.fn.dataTable;

        function _(t) {
            for (var e = [], n = 0, o = t.length; n < o; n++) e[t[n]] = n;
            return e
        }

        function T(t, e, n) {
            var o = t.splice(e, 1)[0];
            t.splice(n, 0, o)
        }

        function C(t, e, n) {
            for (var o = [], r = 0, a = t.childNodes.length; r < a; r++) 1 == t.childNodes[r].nodeType && o.push(t.childNodes[r]);
            var i = o[e];
            null !== n ? t.insertBefore(i, o[n]) : t.appendChild(i)
        }
        w.fn.dataTableExt.oApi.fnColReorder = function (n, t, e, o, r) {
            function a(t, e, n) {
                if (t[e] && "function" != typeof t[e]) {
                    var o = t[e].split("."),
                        r = o.shift();
                    isNaN(1 * r) || (t[e] = n[1 * r] + "." + o.join("."))
                }
            }
            var i, s, l, d, c, u, f, h = n.aoColumns.length;
            if (t != e)
                if (t < 0 || h <= t) this.oApi._fnLog(n, 1, "ColReorder 'from' index is out of bounds: " + t);
                else if (e < 0 || h <= e) this.oApi._fnLog(n, 1, "ColReorder 'to' index is out of bounds: " + e);
                else {
                    var p = [];
                    for (i = 0, s = h; i < s; i++) p[i] = i;
                    T(p, t, e);
                    var m = _(p);
                    for (i = 0, s = n.aaSorting.length; i < s; i++) n.aaSorting[i][0] = m[n.aaSorting[i][0]];
                    if (null !== n.aaSortingFixed)
                        for (i = 0, s = n.aaSortingFixed.length; i < s; i++) n.aaSortingFixed[i][0] = m[n.aaSortingFixed[i][0]];
                    for (i = 0, s = h; i < s; i++) {
                        for (l = 0, d = (f = n.aoColumns[i]).aDataSort.length; l < d; l++) f.aDataSort[l] = m[f.aDataSort[l]];
                        f.idx = m[f.idx]
                    }
                    for (w.each(n.aLastSort, function (t, e) {
                        n.aLastSort[t].src = m[e.src]
                    }), i = 0, s = h; i < s; i++) "number" == typeof (f = n.aoColumns[i]).mData ? f.mData = m[f.mData] : w.isPlainObject(f.mData) && (a(f.mData, "_", m), a(f.mData, "filter", m), a(f.mData, "sort", m), a(f.mData, "type", m));
                    if (n.aoColumns[t].bVisible) {
                        var b = this.oApi._fnColumnIndexToVisible(n, t),
                            g = null;
                        for (i = e < t ? e : e + 1; null === g && i < h;) g = this.oApi._fnColumnIndexToVisible(n, i), i++;
                        for (i = 0, s = (u = n.nTHead.getElementsByTagName("tr")).length; i < s; i++) C(u[i], b, g);
                        if (null !== n.nTFoot)
                            for (i = 0, s = (u = n.nTFoot.getElementsByTagName("tr")).length; i < s; i++) C(u[i], b, g);
                        for (i = 0, s = n.aoData.length; i < s; i++) null !== n.aoData[i].nTr && C(n.aoData[i].nTr, b, g)
                    }
                    for (T(n.aoColumns, t, e), i = 0, s = h; i < s; i++) n.oApi._fnColumnOptions(n, i, {});
                    for (T(n.aoPreSearchCols, t, e), i = 0, s = n.aoData.length; i < s; i++) {
                        var v = n.aoData[i],
                            y = v.anCells;
                        if (y)
                            for (T(y, t, e), l = 0, c = y.length; l < c; l++) y[l] && y[l]._DT_CellIndex && (y[l]._DT_CellIndex.column = l);
                        "dom" !== v.src && w.isArray(v._aData) && T(v._aData, t, e)
                    }
                    for (i = 0, s = n.aoHeader.length; i < s; i++) T(n.aoHeader[i], t, e);
                    if (null !== n.aoFooter)
                        for (i = 0, s = n.aoFooter.length; i < s; i++) T(n.aoFooter[i], t, e);
                    for (!r && r !== x || w.fn.dataTable.Api(n).rows().invalidate(), i = 0, s = h; i < s; i++) w(n.aoColumns[i].nTh).off(".DT"), this.oApi._fnSortAttachListener(n, n.aoColumns[i].nTh, i);
                    w(n.oInstance).trigger("column-reorder.dt", [n, {
                        from: t,
                        to: e,
                        mapping: m,
                        drop: o,
                        iFrom: t,
                        iTo: e,
                        aiInvertMapping: m
                    }])
                }
        };
        var s = function (t, e) {
            var n = new w.fn.dataTable.Api(t).settings()[0];
            if (n._colReorder) return n._colReorder;
            !0 === e && (e = {});
            var o = w.fn.dataTable.camelToHungarian;
            return o && (o(s.defaults, s.defaults, !0), o(s.defaults, e || {})), this.s = {
                dt: null,
                enable: null,
                init: w.extend(!0, {}, s.defaults, e),
                fixed: 0,
                fixedRight: 0,
                reorderCallback: null,
                mouse: {
                    startX: -1,
                    startY: -1,
                    offsetX: -1,
                    offsetY: -1,
                    target: -1,
                    targetIndex: -1,
                    fromIndex: -1
                },
                aoTargets: []
            }, this.dom = {
                drag: null,
                pointer: null
            }, this.s.enable = this.s.init.bEnable, this.s.dt = n, (this.s.dt._colReorder = this)._fnConstruct(), this
        };
        return w.extend(s.prototype, {
            fnEnable: function (t) {
                if (!1 === t) return fnDisable();
                this.s.enable = !0
            },
            fnDisable: function () {
                this.s.enable = !1
            },
            fnReset: function () {
                return this._fnOrderColumns(this.fnOrder()), this
            },
            fnGetCurrentOrder: function () {
                return this.fnOrder()
            },
            fnOrder: function (t, e) {
                var n, o, r = [],
                    a = this.s.dt.aoColumns;
                if (t === x) {
                    for (n = 0, o = a.length; n < o; n++) r.push(a[n]._ColReorder_iOrigCol);
                    return r
                }
                if (e) {
                    var i = this.fnOrder();
                    for (n = 0, o = t.length; n < o; n++) r.push(w.inArray(t[n], i));
                    t = r
                }
                return this._fnOrderColumns(_(t)), this
            },
            fnTranspose: function (t, e) {
                e = e || "toCurrent";
                var n = this.fnOrder(),
                    o = this.s.dt.aoColumns;
                return "toCurrent" === e ? w.isArray(t) ? w.map(t, function (t) {
                    return w.inArray(t, n)
                }) : w.inArray(t, n) : w.isArray(t) ? w.map(t, function (t) {
                    return o[t]._ColReorder_iOrigCol
                }) : o[t]._ColReorder_iOrigCol
            },
            _fnConstruct: function () {
                var t, n = this,
                    e = this.s.dt.aoColumns.length,
                    o = this.s.dt.nTable;
                for (this.s.init.iFixedColumns && (this.s.fixed = this.s.init.iFixedColumns), this.s.init.iFixedColumnsLeft && (this.s.fixed = this.s.init.iFixedColumnsLeft), this.s.fixedRight = this.s.init.iFixedColumnsRight ? this.s.init.iFixedColumnsRight : 0, this.s.init.fnReorderCallback && (this.s.reorderCallback = this.s.init.fnReorderCallback), t = 0; t < e; t++) t > this.s.fixed - 1 && t < e - this.s.fixedRight && this._fnMouseListener(t, this.s.dt.aoColumns[t].nTh), this.s.dt.aoColumns[t]._ColReorder_iOrigCol = t;
                this.s.dt.oApi._fnCallbackReg(this.s.dt, "aoStateSaveParams", function (t, e) {
                    n._fnStateSave.call(n, e)
                }, "ColReorder_State");
                var r = null;
                if (this.s.init.aiOrder && (r = this.s.init.aiOrder.slice()), this.s.dt.oLoadedState && void 0 !== this.s.dt.oLoadedState.ColReorder && this.s.dt.oLoadedState.ColReorder.length == this.s.dt.aoColumns.length && (r = this.s.dt.oLoadedState.ColReorder), r)
                    if (n.s.dt._bInitComplete) {
                        var a = _(r);
                        n._fnOrderColumns.call(n, a)
                    } else {
                        var i = !1;
                        w(o).on("draw.dt.colReorder", function () {
                            if (!n.s.dt._bInitComplete && !i) {
                                i = !0;
                                var t = _(r);
                                n._fnOrderColumns.call(n, t)
                            }
                        })
                    }
                else this._fnSetColumnIndexes();
                w(o).on("destroy.dt.colReorder", function () {
                    w(o).off("destroy.dt.colReorder draw.dt.colReorder"), w.each(n.s.dt.aoColumns, function (t, e) {
                        w(e.nTh).off(".ColReorder"), w(e.nTh).removeAttr("data-column-index")
                    }), n.s.dt._colReorder = null, n.s = null
                })
            },
            _fnOrderColumns: function (t) {
                var e = !1;
                if (t.length == this.s.dt.aoColumns.length) {
                    for (var n = 0, o = t.length; n < o; n++) {
                        var r = w.inArray(n, t);
                        n != r && (T(t, r, n), this.s.dt.oInstance.fnColReorder(r, n, !0, !1), e = !0)
                    }
                    this._fnSetColumnIndexes(), e && (w.fn.dataTable.Api(this.s.dt).rows().invalidate(), "" === this.s.dt.oScroll.sX && "" === this.s.dt.oScroll.sY || this.s.dt.oInstance.fnAdjustColumnSizing(!1), this.s.dt.oInstance.oApi._fnSaveState(this.s.dt), null !== this.s.reorderCallback && this.s.reorderCallback.call(this))
                } else this.s.dt.oInstance.oApi._fnLog(this.s.dt, 1, "ColReorder - array reorder does not match known number of columns. Skipping.")
            },
            _fnStateSave: function (t) {
                var e, n, o, r = this.s.dt.aoColumns;
                if (t.ColReorder = [], t.aaSorting) {
                    for (e = 0; e < t.aaSorting.length; e++) t.aaSorting[e][0] = r[t.aaSorting[e][0]]._ColReorder_iOrigCol;
                    var a = w.extend(!0, [], t.aoSearchCols);
                    for (e = 0, n = r.length; e < n; e++) o = r[e]._ColReorder_iOrigCol, t.aoSearchCols[o] = a[e], t.abVisCols[o] = r[e].bVisible, t.ColReorder.push(o)
                } else if (t.order) {
                    for (e = 0; e < t.order.length; e++) t.order[e][0] = r[t.order[e][0]]._ColReorder_iOrigCol;
                    var i = w.extend(!0, [], t.columns);
                    for (e = 0, n = r.length; e < n; e++) o = r[e]._ColReorder_iOrigCol, t.columns[o] = i[e], t.ColReorder.push(o)
                }
            },
            _fnMouseListener: function (t, e) {
                var n = this;
                w(e).on("mousedown.ColReorder", function (t) {
                    n.s.enable && n._fnMouseDown.call(n, t, e)
                }).on("touchstart.ColReorder", function (t) {
                    n.s.enable && n._fnMouseDown.call(n, t, e)
                })
            },
            _fnMouseDown: function (t, e) {
                var n = this,
                    o = w(t.target).closest("th, td").offset(),
                    r = parseInt(w(e).attr("data-column-index"), 10);
                r !== x && (this.s.mouse.startX = this._fnCursorPosition(t, "pageX"), this.s.mouse.startY = this._fnCursorPosition(t, "pageY"), this.s.mouse.offsetX = this._fnCursorPosition(t, "pageX") - o.left, this.s.mouse.offsetY = this._fnCursorPosition(t, "pageY") - o.top, this.s.mouse.target = this.s.dt.aoColumns[r].nTh, this.s.mouse.targetIndex = r, this.s.mouse.fromIndex = r, this._fnRegions(), w(a).on("mousemove.ColReorder touchmove.ColReorder", function (t) {
                    n._fnMouseMove.call(n, t)
                }).on("mouseup.ColReorder touchend.ColReorder", function (t) {
                    n._fnMouseUp.call(n, t)
                }))
            },
            _fnMouseMove: function (t) {
                if (null === this.dom.drag) {
                    if (Math.pow(Math.pow(this._fnCursorPosition(t, "pageX") - this.s.mouse.startX, 2) + Math.pow(this._fnCursorPosition(t, "pageY") - this.s.mouse.startY, 2), .5) < 5) return;
                    this._fnCreateDragNode()
                }
                this.dom.drag.css({
                    left: this._fnCursorPosition(t, "pageX") - this.s.mouse.offsetX,
                    top: this._fnCursorPosition(t, "pageY") - this.s.mouse.offsetY
                });
                for (var e = !1, n = this.s.mouse.toIndex, o = 1, r = this.s.aoTargets.length; o < r; o++)
                    if (this._fnCursorPosition(t, "pageX") < this.s.aoTargets[o - 1].x + (this.s.aoTargets[o].x - this.s.aoTargets[o - 1].x) / 2) {
                        this.dom.pointer.css("left", this.s.aoTargets[o - 1].x), this.s.mouse.toIndex = this.s.aoTargets[o - 1].to, e = !0;
                        break
                    } e || (this.dom.pointer.css("left", this.s.aoTargets[this.s.aoTargets.length - 1].x), this.s.mouse.toIndex = this.s.aoTargets[this.s.aoTargets.length - 1].to), this.s.init.bRealtime && n !== this.s.mouse.toIndex && (this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex), this.s.mouse.fromIndex = this.s.mouse.toIndex, "" === this.s.dt.oScroll.sX && "" === this.s.dt.oScroll.sY || this.s.dt.oInstance.fnAdjustColumnSizing(!1), this._fnRegions())
            },
            _fnMouseUp: function (t) {
                w(a).off(".ColReorder"), null !== this.dom.drag && (this.dom.drag.remove(), this.dom.pointer.remove(), this.dom.drag = null, this.dom.pointer = null, this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex, this.s.mouse.toIndex, !0), this._fnSetColumnIndexes(), "" === this.s.dt.oScroll.sX && "" === this.s.dt.oScroll.sY || this.s.dt.oInstance.fnAdjustColumnSizing(!1), this.s.dt.oInstance.oApi._fnSaveState(this.s.dt), null !== this.s.reorderCallback && this.s.reorderCallback.call(this))
            },
            _fnRegions: function () {
                var t = this.s.dt.aoColumns;
                this.s.aoTargets.splice(0, this.s.aoTargets.length), this.s.aoTargets.push({
                    x: w(this.s.dt.nTable).offset().left,
                    to: 0
                });
                for (var e = 0, n = this.s.aoTargets[0].x, o = 0, r = t.length; o < r; o++) o != this.s.mouse.fromIndex && e++ , t[o].bVisible && "none" !== t[o].nTh.style.display && (n += w(t[o].nTh).outerWidth(), this.s.aoTargets.push({
                    x: n,
                    to: e
                }));
                0 !== this.s.fixedRight && this.s.aoTargets.splice(this.s.aoTargets.length - this.s.fixedRight), 0 !== this.s.fixed && this.s.aoTargets.splice(0, this.s.fixed)
            },
            _fnCreateDragNode: function () {
                var t = "" !== this.s.dt.oScroll.sX || "" !== this.s.dt.oScroll.sY,
                    e = this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh,
                    n = e.parentNode,
                    o = n.parentNode,
                    r = o.parentNode,
                    a = w(e).clone();
                this.dom.drag = w(r.cloneNode(!1)).addClass("DTCR_clonedTable").append(w(o.cloneNode(!1)).append(w(n.cloneNode(!1)).append(a[0]))).css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: w(e).outerWidth(),
                    height: w(e).outerHeight()
                }).appendTo("body"), this.dom.pointer = w("<div></div>").addClass("DTCR_pointer").css({
                    position: "absolute",
                    top: t ? w("div.dataTables_scroll", this.s.dt.nTableWrapper).offset().top : w(this.s.dt.nTable).offset().top,
                    height: t ? w("div.dataTables_scroll", this.s.dt.nTableWrapper).height() : w(this.s.dt.nTable).height()
                }).appendTo("body")
            },
            _fnSetColumnIndexes: function () {
                w.each(this.s.dt.aoColumns, function (t, e) {
                    w(e.nTh).attr("data-column-index", t)
                })
            },
            _fnCursorPosition: function (t, e) {
                return -1 !== t.type.indexOf("touch") ? t.originalEvent.touches[0][e] : t[e]
            }
        }), s.defaults = {
            aiOrder: null,
            bEnable: !0,
            bRealtime: !0,
            iFixedColumnsLeft: 0,
            iFixedColumnsRight: 0,
            fnReorderCallback: null
        }, s.version = "1.5.1", w.fn.dataTable.ColReorder = s, w.fn.DataTable.ColReorder = s, "function" == typeof w.fn.dataTable && "function" == typeof w.fn.dataTableExt.fnVersionCheck && w.fn.dataTableExt.fnVersionCheck("1.10.8") ? w.fn.dataTableExt.aoFeatures.push({
            fnInit: function (t) {
                var e = t.oInstance;
                if (t._colReorder) e.oApi._fnLog(t, 1, "ColReorder attempted to initialise twice. Ignoring second");
                else {
                    var n = t.oInit,
                        o = n.colReorder || n.oColReorder || {};
                    new s(t, o)
                }
                return null
            },
            cFeature: "R",
            sFeature: "ColReorder"
        }) : alert("Warning: ColReorder requires DataTables 1.10.8 or greater - www.datatables.net/download"), w(a).on("preInit.dt.colReorder", function (t, e) {
            if ("dt" === t.namespace) {
                var n = e.oInit.colReorder,
                    o = i.defaults.colReorder;
                if (n || o) {
                    var r = w.extend({}, n, o);
                    !1 !== n && new s(e, r)
                }
            }
        }), w.fn.dataTable.Api.register("colReorder.reset()", function () {
            return this.iterator("table", function (t) {
                t._colReorder.fnReset()
            })
        }), w.fn.dataTable.Api.register("colReorder.order()", function (e, n) {
            return e ? this.iterator("table", function (t) {
                t._colReorder.fnOrder(e, n)
            }) : this.context.length ? this.context[0]._colReorder.fnOrder() : null
        }), w.fn.dataTable.Api.register("colReorder.transpose()", function (t, e) {
            return this.context.length && this.context[0]._colReorder ? this.context[0]._colReorder.fnTranspose(t, e) : t
        }), w.fn.dataTable.Api.register("colReorder.move()", function (t, e, n, o) {
            return this.context.length && this.context[0]._colReorder.s.dt.oInstance.fnColReorder(t, e, n, o), this
        }), w.fn.dataTable.Api.register("colReorder.enable()", function (e) {
            return this.iterator("table", function (t) {
                t._colReorder && t._colReorder.fnEnable(e)
            })
        }), w.fn.dataTable.Api.register("colReorder.disable()", function () {
            return this.iterator("table", function (t) {
                t._colReorder && t._colReorder.fnDisable()
            })
        }), s
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-colreorder"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net-bs4")(t, e).$), e.fn.dataTable.ColReorder || require("datatables.net-colreorder")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (t, e, n, o) {
        return t.fn.dataTable
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (T, l, d, C) {
        "use strict";
        var e, a = T.fn.dataTable,
            c = function (t, e) {
                var n = this;
                if (this instanceof c) {
                    e !== C && !0 !== e || (e = {});
                    var o = T.fn.dataTable.camelToHungarian;
                    o && (o(c.defaults, c.defaults, !0), o(c.defaults, e));
                    var r = new T.fn.dataTable.Api(t).settings()[0];
                    if (this.s = {
                        dt: r,
                        iTableColumns: r.aoColumns.length,
                        aiOuterWidths: [],
                        aiInnerWidths: [],
                        rtl: "rtl" === T(r.nTable).css("direction")
                    }, this.dom = {
                        scroller: null,
                        header: null,
                        body: null,
                        footer: null,
                        grid: {
                            wrapper: null,
                            dt: null,
                            left: {
                                wrapper: null,
                                head: null,
                                body: null,
                                foot: null
                            },
                            right: {
                                wrapper: null,
                                head: null,
                                body: null,
                                foot: null
                            }
                        },
                        clone: {
                            left: {
                                header: null,
                                body: null,
                                footer: null
                            },
                            right: {
                                header: null,
                                body: null,
                                footer: null
                            }
                        }
                    }, r._oFixedColumns) throw "FixedColumns already initialised on this table";
                    r._oFixedColumns = this, r._bInitComplete ? this._fnConstruct(e) : r.oApi._fnCallbackReg(r, "aoInitComplete", function () {
                        n._fnConstruct(e)
                    }, "FixedColumns")
                } else alert("FixedColumns warning: FixedColumns must be initialised with the 'new' keyword.")
            };
        return T.extend(c.prototype, {
            fnUpdate: function () {
                this._fnDraw(!0)
            },
            fnRedrawLayout: function () {
                this._fnColCalc(), this._fnGridLayout(), this.fnUpdate()
            },
            fnRecalculateHeight: function (t) {
                delete t._DTTC_iHeight, t.style.height = "auto"
            },
            fnSetRowHeight: function (t, e) {
                t.style.height = e + "px"
            },
            fnGetPosition: function (t) {
                var e, n = this.s.dt.oInstance;
                if (T(t).parents(".DTFC_Cloned").length) {
                    if ("tr" === t.nodeName.toLowerCase()) return e = T(t).index(), n.fnGetPosition(T("tr", this.s.dt.nTBody)[e]);
                    var o = T(t).index();
                    return e = T(t.parentNode).index(), [n.fnGetPosition(T("tr", this.s.dt.nTBody)[e]), o, n.oApi._fnVisibleToColumnIndex(this.s.dt, o)]
                }
                return n.fnGetPosition(t)
            },
            _fnConstruct: function (t) {
                var a = this;
                if ("function" == typeof this.s.dt.oInstance.fnVersionCheck && !0 === this.s.dt.oInstance.fnVersionCheck("1.8.0"))
                    if ("" !== this.s.dt.oScroll.sX) {
                        this.s = T.extend(!0, this.s, c.defaults, t);
                        var e, n = this.s.dt.oClasses;
                        this.dom.grid.dt = T(this.s.dt.nTable).parents("div." + n.sScrollWrapper)[0], this.dom.scroller = T("div." + n.sScrollBody, this.dom.grid.dt)[0], this._fnColCalc(), this._fnGridSetup();
                        var o = !1;
                        T(this.s.dt.nTableWrapper).on("mousedown.DTFC", function (t) {
                            0 === t.button && (o = !0, T(d).one("mouseup", function () {
                                o = !1
                            }))
                        }), T(this.dom.scroller).on("mouseover.DTFC touchstart.DTFC", function () {
                            o || (e = "main")
                        }).on("scroll.DTFC", function (t) {
                            !e && t.originalEvent && (e = "main"), "main" === e && (0 < a.s.iLeftColumns && (a.dom.grid.left.liner.scrollTop = a.dom.scroller.scrollTop), 0 < a.s.iRightColumns && (a.dom.grid.right.liner.scrollTop = a.dom.scroller.scrollTop))
                        });
                        var r = "onwheel" in d.createElement("div") ? "wheel.DTFC" : "mousewheel.DTFC";
                        0 < a.s.iLeftColumns && T(a.dom.grid.left.liner).on("mouseover.DTFC touchstart.DTFC", function () {
                            o || (e = "left")
                        }).on("scroll.DTFC", function (t) {
                            !e && t.originalEvent && (e = "left"), "left" === e && (a.dom.scroller.scrollTop = a.dom.grid.left.liner.scrollTop, 0 < a.s.iRightColumns && (a.dom.grid.right.liner.scrollTop = a.dom.grid.left.liner.scrollTop))
                        }).on(r, function (t) {
                            var e = "wheel" === t.type ? -t.originalEvent.deltaX : t.originalEvent.wheelDeltaX;
                            a.dom.scroller.scrollLeft -= e
                        }), 0 < a.s.iRightColumns && T(a.dom.grid.right.liner).on("mouseover.DTFC touchstart.DTFC", function () {
                            o || (e = "right")
                        }).on("scroll.DTFC", function (t) {
                            !e && t.originalEvent && (e = "right"), "right" === e && (a.dom.scroller.scrollTop = a.dom.grid.right.liner.scrollTop, 0 < a.s.iLeftColumns && (a.dom.grid.left.liner.scrollTop = a.dom.grid.right.liner.scrollTop))
                        }).on(r, function (t) {
                            var e = "wheel" === t.type ? -t.originalEvent.deltaX : t.originalEvent.wheelDeltaX;
                            a.dom.scroller.scrollLeft -= e
                        }), T(l).on("resize.DTFC", function () {
                            a._fnGridLayout.call(a)
                        });
                        var i = !0,
                            s = T(this.s.dt.nTable);
                        s.on("draw.dt.DTFC", function () {
                            a._fnColCalc(), a._fnDraw.call(a, i), i = !1
                        }).on("column-sizing.dt.DTFC", function () {
                            a._fnColCalc(), a._fnGridLayout(a)
                        }).on("column-visibility.dt.DTFC", function (t, e, n, o, r) {
                            r !== C && !r || (a._fnColCalc(), a._fnGridLayout(a), a._fnDraw(!0))
                        }).on("select.dt.DTFC deselect.dt.DTFC", function (t, e, n, o) {
                            "dt" === t.namespace && a._fnDraw(!1)
                        }).on("destroy.dt.DTFC", function () {
                            s.off(".DTFC"), T(a.dom.scroller).off(".DTFC"), T(l).off(".DTFC"), T(a.s.dt.nTableWrapper).off(".DTFC"), T(a.dom.grid.left.liner).off(".DTFC " + r), T(a.dom.grid.left.wrapper).remove(), T(a.dom.grid.right.liner).off(".DTFC " + r), T(a.dom.grid.right.wrapper).remove()
                        }), this._fnGridLayout(), this.s.dt.oInstance.fnDraw(!1)
                    } else this.s.dt.oInstance.oApi._fnLog(this.s.dt, 1, "FixedColumns is not needed (no x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for column fixing when scrolling is not enabled");
                else alert("FixedColumns " + c.VERSION + " required DataTables 1.8.0 or later. Please upgrade your DataTables installation")
            },
            _fnColCalc: function () {
                var a = this,
                    i = 0,
                    s = 0;
                this.s.aiInnerWidths = [], this.s.aiOuterWidths = [], T.each(this.s.dt.aoColumns, function (t, e) {
                    var n, o = T(e.nTh);
                    if (o.filter(":visible").length) {
                        var r = o.outerWidth();
                        0 === a.s.aiOuterWidths.length && (r += "string" == typeof (n = T(a.s.dt.nTable).css("border-left-width")) && -1 === n.indexOf("px") ? 1 : parseInt(n, 10)), a.s.aiOuterWidths.length === a.s.dt.aoColumns.length - 1 && (r += "string" == typeof (n = T(a.s.dt.nTable).css("border-right-width")) && -1 === n.indexOf("px") ? 1 : parseInt(n, 10)), a.s.aiOuterWidths.push(r), a.s.aiInnerWidths.push(o.width()), t < a.s.iLeftColumns && (i += r), a.s.iTableColumns - a.s.iRightColumns <= t && (s += r)
                    } else a.s.aiInnerWidths.push(0), a.s.aiOuterWidths.push(0)
                }), this.s.iLeftWidth = i, this.s.iRightWidth = s
            },
            _fnGridSetup: function () {
                var t, e = this._fnDTOverflow();
                this.dom.body = this.s.dt.nTable, this.dom.header = this.s.dt.nTHead.parentNode, this.dom.header.parentNode.parentNode.style.position = "relative";
                var n = T('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;"><div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;" aria-hidden="true"><div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div><div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div></div><div class="DTFC_RightWrapper" style="position:absolute; top:0; right:0;" aria-hidden="true"><div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div><div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div></div></div>')[0],
                    o = n.childNodes[0],
                    r = n.childNodes[1];
                this.dom.grid.dt.parentNode.insertBefore(n, this.dom.grid.dt), n.appendChild(this.dom.grid.dt), this.dom.grid.wrapper = n, 0 < this.s.iLeftColumns && (this.dom.grid.left.wrapper = o, this.dom.grid.left.head = o.childNodes[0], this.dom.grid.left.body = o.childNodes[1], this.dom.grid.left.liner = T("div.DTFC_LeftBodyLiner", n)[0], n.appendChild(o)), 0 < this.s.iRightColumns && (this.dom.grid.right.wrapper = r, this.dom.grid.right.head = r.childNodes[0], this.dom.grid.right.body = r.childNodes[1], this.dom.grid.right.liner = T("div.DTFC_RightBodyLiner", n)[0], r.style.right = e.bar + "px", (t = T("div.DTFC_RightHeadBlocker", n)[0]).style.width = e.bar + "px", t.style.right = -e.bar + "px", this.dom.grid.right.headBlock = t, (t = T("div.DTFC_RightFootBlocker", n)[0]).style.width = e.bar + "px", t.style.right = -e.bar + "px", this.dom.grid.right.footBlock = t, n.appendChild(r)), this.s.dt.nTFoot && (this.dom.footer = this.s.dt.nTFoot.parentNode, 0 < this.s.iLeftColumns && (this.dom.grid.left.foot = o.childNodes[2]), 0 < this.s.iRightColumns && (this.dom.grid.right.foot = r.childNodes[2])), this.s.rtl && T("div.DTFC_RightHeadBlocker", n).css({
                    left: -e.bar + "px",
                    right: ""
                })
            },
            _fnGridLayout: function () {
                function t(t, e) {
                    i.bar ? n._firefoxScrollError() ? 34 < T(t).height() && (t.style.width = e + i.bar + "px") : t.style.width = e + i.bar + "px" : (t.style.width = e + 20 + "px", t.style.paddingRight = "20px", t.style.boxSizing = "border-box")
                }
                var e, n = this,
                    o = this.dom.grid,
                    r = (T(o.wrapper).width(), this.s.dt.nTable.parentNode.offsetHeight),
                    a = this.s.dt.nTable.parentNode.parentNode.offsetHeight,
                    i = this._fnDTOverflow(),
                    s = this.s.iLeftWidth,
                    l = this.s.iRightWidth,
                    d = "rtl" === T(this.dom.body).css("direction");
                i.x && (r -= i.bar), o.wrapper.style.height = a + "px", 0 < this.s.iLeftColumns && ((e = o.left.wrapper).style.width = s + "px", e.style.height = "1px", d ? (e.style.left = "", e.style.right = 0) : (e.style.left = 0, e.style.right = ""), o.left.body.style.height = r + "px", o.left.foot && (o.left.foot.style.top = (i.x ? i.bar : 0) + "px"), t(o.left.liner, s), o.left.liner.style.height = r + "px", o.left.liner.style.maxHeight = r + "px"), 0 < this.s.iRightColumns && ((e = o.right.wrapper).style.width = l + "px", e.style.height = "1px", this.s.rtl ? (e.style.left = i.y ? i.bar + "px" : 0, e.style.right = "") : (e.style.left = "", e.style.right = i.y ? i.bar + "px" : 0), o.right.body.style.height = r + "px", o.right.foot && (o.right.foot.style.top = (i.x ? i.bar : 0) + "px"), t(o.right.liner, l), o.right.liner.style.height = r + "px", o.right.liner.style.maxHeight = r + "px", o.right.headBlock.style.display = i.y ? "block" : "none", o.right.footBlock.style.display = i.y ? "block" : "none")
            },
            _fnDTOverflow: function () {
                var t = this.s.dt.nTable,
                    e = t.parentNode,
                    n = {
                        x: !1,
                        y: !1,
                        bar: this.s.dt.oScroll.iBarWidth
                    };
                return t.offsetWidth > e.clientWidth && (n.x = !0), t.offsetHeight > e.clientHeight && (n.y = !0), n
            },
            _fnDraw: function (t) {
                this._fnGridLayout(), this._fnCloneLeft(t), this._fnCloneRight(t), null !== this.s.fnDrawCallback && this.s.fnDrawCallback.call(this, this.dom.clone.left, this.dom.clone.right), T(this).trigger("draw.dtfc", {
                    leftClone: this.dom.clone.left,
                    rightClone: this.dom.clone.right
                })
            },
            _fnCloneRight: function (t) {
                if (!(this.s.iRightColumns <= 0)) {
                    var e, n = [];
                    for (e = this.s.iTableColumns - this.s.iRightColumns; e < this.s.iTableColumns; e++) this.s.dt.aoColumns[e].bVisible && n.push(e);
                    this._fnClone(this.dom.clone.right, this.dom.grid.right, n, t)
                }
            },
            _fnCloneLeft: function (t) {
                if (!(this.s.iLeftColumns <= 0)) {
                    var e, n = [];
                    for (e = 0; e < this.s.iLeftColumns; e++) this.s.dt.aoColumns[e].bVisible && n.push(e);
                    this._fnClone(this.dom.clone.left, this.dom.grid.left, n, t)
                }
            },
            _fnCopyLayout: function (t, e, n) {
                for (var o = [], r = [], a = [], i = 0, s = t.length; i < s; i++) {
                    var l = [];
                    l.nTr = T(t[i].nTr).clone(n, !1)[0];
                    for (var d = 0, c = this.s.iTableColumns; d < c; d++)
                        if (-1 !== T.inArray(d, e)) {
                            var u = T.inArray(t[i][d].cell, a);
                            if (-1 === u) {
                                var f = T(t[i][d].cell).clone(n, !1)[0];
                                r.push(f), a.push(t[i][d].cell), l.push({
                                    cell: f,
                                    unique: t[i][d].unique
                                })
                            } else l.push({
                                cell: r[u],
                                unique: t[i][d].unique
                            })
                        } o.push(l)
                }
                return o
            },
            _fnClone: function (t, e, r, n) {
                var o, a, i, s, l, d, c, u, f, h, p = this,
                    m = this.s.dt;
                if (n) {
                    for (T(t.header).remove(), t.header = T(this.dom.header).clone(!0, !1)[0], t.header.className += " DTFC_Cloned", t.header.style.width = "100%", e.head.appendChild(t.header), u = this._fnCopyLayout(m.aoHeader, r, !0), (f = T(">thead", t.header)).empty(), o = 0, a = u.length; o < a; o++) f[0].appendChild(u[o].nTr);
                    m.oApi._fnDrawHead(m, u, !0)
                } else
                    for (u = this._fnCopyLayout(m.aoHeader, r, !1), h = [], m.oApi._fnDetectHeader(h, T(">thead", t.header)[0]), o = 0, a = u.length; o < a; o++)
                        for (i = 0, s = u[o].length; i < s; i++) h[o][i].cell.className = u[o][i].cell.className, T("span.DataTables_sort_icon", h[o][i].cell).each(function () {
                            this.className = T("span.DataTables_sort_icon", u[o][i].cell)[0].className
                        });
                this._fnEqualiseHeights("thead", this.dom.header, t.header), "auto" == this.s.sHeightMatch && T(">tbody>tr", p.dom.body).css("height", "auto"), null !== t.body && (T(t.body).remove(), t.body = null), t.body = T(this.dom.body).clone(!0)[0], t.body.className += " DTFC_Cloned", t.body.style.paddingBottom = m.oScroll.iBarWidth + "px", t.body.style.marginBottom = 2 * m.oScroll.iBarWidth + "px", null !== t.body.getAttribute("id") && t.body.removeAttribute("id"), T(">thead>tr", t.body).empty(), T(">tfoot", t.body).remove();
                var b = T("tbody", t.body)[0];
                if (T(b).empty(), 0 < m.aiDisplay.length) {
                    var g = T(">thead>tr", t.body)[0];
                    for (c = 0; c < r.length; c++) {
                        l = r[c], (d = T(m.aoColumns[l].nTh).clone(!0)[0]).innerHTML = "";
                        var v = d.style;
                        v.paddingTop = "0", v.paddingBottom = "0", v.borderTopWidth = "0", v.borderBottomWidth = "0", v.height = 0, v.width = p.s.aiInnerWidths[l] + "px", g.appendChild(d)
                    }
                    T(">tbody>tr", p.dom.body).each(function (t) {
                        var e = !1 === p.s.dt.oFeatures.bServerSide ? p.s.dt.aiDisplay[p.s.dt._iDisplayStart + t] : t,
                            n = p.s.dt.aoData[e].anCells || T(this).children("td, th"),
                            o = this.cloneNode(!1);
                        for (o.removeAttribute("id"), o.setAttribute("data-dt-row", e), c = 0; c < r.length; c++) l = r[c], 0 < n.length && ((d = T(n[l]).clone(!0, !0)[0]).removeAttribute("id"), d.setAttribute("data-dt-row", e), d.setAttribute("data-dt-column", l), o.appendChild(d));
                        b.appendChild(o)
                    })
                } else T(">tbody>tr", p.dom.body).each(function (t) {
                    (d = this.cloneNode(!0)).className += " DTFC_NoData", T("td", d).html(""), b.appendChild(d)
                });
                if (t.body.style.width = "100%", t.body.style.margin = "0", t.body.style.padding = "0", m.oScroller !== C) {
                    var y = m.oScroller.dom.force;
                    e.forcer ? e.forcer.style.height = y.style.height : (e.forcer = y.cloneNode(!0), e.liner.appendChild(e.forcer))
                }
                if (e.liner.appendChild(t.body), this._fnEqualiseHeights("tbody", p.dom.body, t.body), null !== m.nTFoot) {
                    if (n) {
                        null !== t.footer && t.footer.parentNode.removeChild(t.footer), t.footer = T(this.dom.footer).clone(!0, !0)[0], t.footer.className += " DTFC_Cloned", t.footer.style.width = "100%", e.foot.appendChild(t.footer), u = this._fnCopyLayout(m.aoFooter, r, !0);
                        var w = T(">tfoot", t.footer);
                        for (w.empty(), o = 0, a = u.length; o < a; o++) w[0].appendChild(u[o].nTr);
                        m.oApi._fnDrawHead(m, u, !0)
                    } else {
                        u = this._fnCopyLayout(m.aoFooter, r, !1);
                        var x = [];
                        for (m.oApi._fnDetectHeader(x, T(">tfoot", t.footer)[0]), o = 0, a = u.length; o < a; o++)
                            for (i = 0, s = u[o].length; i < s; i++) x[o][i].cell.className = u[o][i].cell.className
                    }
                    this._fnEqualiseHeights("tfoot", this.dom.footer, t.footer)
                }
                var _ = m.oApi._fnGetUniqueThs(m, T(">thead", t.header)[0]);
                T(_).each(function (t) {
                    l = r[t], this.style.width = p.s.aiInnerWidths[l] + "px"
                }), null !== p.s.dt.nTFoot && (_ = m.oApi._fnGetUniqueThs(m, T(">tfoot", t.footer)[0]), T(_).each(function (t) {
                    l = r[t], this.style.width = p.s.aiInnerWidths[l] + "px"
                }))
            },
            _fnGetTrNodes: function (t) {
                for (var e = [], n = 0, o = t.childNodes.length; n < o; n++) "TR" == t.childNodes[n].nodeName.toUpperCase() && e.push(t.childNodes[n]);
                return e
            },
            _fnEqualiseHeights: function (t, e, n) {
                if ("none" != this.s.sHeightMatch || "thead" === t || "tfoot" === t) {
                    var o, r, a, i, s, l = e.getElementsByTagName(t)[0],
                        d = n.getElementsByTagName(t)[0],
                        c = T(">" + t + ">tr:eq(0)", e).children(":first"),
                        u = (c.outerHeight(), c.height(), this._fnGetTrNodes(l)),
                        f = this._fnGetTrNodes(d),
                        h = [];
                    for (o = 0, r = f.length; o < r; o++) a = (i = u[o].offsetHeight) < (s = f[o].offsetHeight) ? s : i, "semiauto" == this.s.sHeightMatch && (u[o]._DTTC_iHeight = a), h.push(a);
                    for (o = 0, r = f.length; o < r; o++) f[o].style.height = h[o] + "px", u[o].style.height = h[o] + "px"
                }
            },
            _firefoxScrollError: function () {
                if (e === C) {
                    var t = T("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        height: 10,
                        width: 50,
                        overflow: "scroll"
                    }).appendTo("body");
                    e = t[0].clientWidth === t[0].offsetWidth && 0 !== this._fnDTOverflow().bar, t.remove()
                }
                return e
            }
        }), c.defaults = {
            iLeftColumns: 1,
            iRightColumns: 0,
            fnDrawCallback: null,
            sHeightMatch: "semiauto"
        }, c.version = "3.2.6", a.Api.register("fixedColumns()", function () {
            return this
        }), a.Api.register("fixedColumns().update()", function () {
            return this.iterator("table", function (t) {
                t._oFixedColumns && t._oFixedColumns.fnUpdate()
            })
        }), a.Api.register("fixedColumns().relayout()", function () {
            return this.iterator("table", function (t) {
                t._oFixedColumns && t._oFixedColumns.fnRedrawLayout()
            })
        }), a.Api.register("rows().recalcHeight()", function () {
            return this.iterator("row", function (t, e) {
                t._oFixedColumns && t._oFixedColumns.fnRecalculateHeight(this.row(e).node())
            })
        }), a.Api.register("fixedColumns().rowIndex()", function (t) {
            return (t = T(t)).parents(".DTFC_Cloned").length ? this.rows({
                page: "current"
            }).indexes()[t.index()] : this.row(t).index()
        }), a.Api.register("fixedColumns().cellIndex()", function (t) {
            if ((t = T(t)).parents(".DTFC_Cloned").length) {
                var e, n = t.parent().index(),
                    o = this.rows({
                        page: "current"
                    }).indexes()[n];
                if (t.parents(".DTFC_LeftWrapper").length) e = t.index();
                else e = this.columns().flatten().length - this.context[0]._oFixedColumns.s.iRightColumns + t.index();
                return {
                    row: o,
                    column: this.column.index("toData", e),
                    columnVisible: e
                }
            }
            return this.cell(t).index()
        }), T(d).on("init.dt.fixedColumns", function (t, e) {
            if ("dt" === t.namespace) {
                var n = e.oInit.fixedColumns,
                    o = a.defaults.fixedColumns;
                if (n || o) {
                    var r = T.extend({}, n, o);
                    !1 !== n && new c(e, r)
                }
            }
        }), T.fn.dataTable.FixedColumns = c, T.fn.DataTable.FixedColumns = c
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-fixedcolumns"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net-bs4")(t, e).$), e.fn.dataTable.FixedColumns || require("datatables.net-fixedcolumns")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (t, e, n, o) {
        return t.fn.dataTable
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (s, r, l, a) {
        "use strict";
        var i = s.fn.dataTable,
            o = 0,
            d = function (t, e) {
                if (!(this instanceof d)) throw "FixedHeader must be initialised with the 'new' keyword.";
                !0 === e && (e = {}), t = new i.Api(t), this.c = s.extend(!0, {}, d.defaults, e), this.s = {
                    dt: t,
                    position: {
                        theadTop: 0,
                        tbodyTop: 0,
                        tfootTop: 0,
                        tfootBottom: 0,
                        width: 0,
                        left: 0,
                        tfootHeight: 0,
                        theadHeight: 0,
                        windowHeight: s(r).height(),
                        visible: !0
                    },
                    headerMode: null,
                    footerMode: null,
                    autoWidth: t.settings()[0].oFeatures.bAutoWidth,
                    namespace: ".dtfc" + o++,
                    scrollLeft: {
                        header: -1,
                        footer: -1
                    },
                    enable: !0
                }, this.dom = {
                    floatingHeader: null,
                    thead: s(t.table().header()),
                    tbody: s(t.table().body()),
                    tfoot: s(t.table().footer()),
                    header: {
                        host: null,
                        floating: null,
                        placeholder: null
                    },
                    footer: {
                        host: null,
                        floating: null,
                        placeholder: null
                    }
                }, this.dom.header.host = this.dom.thead.parent(), this.dom.footer.host = this.dom.tfoot.parent();
                var n = t.settings()[0];
                if (n._fixedHeader) throw "FixedHeader already initialised on table " + n.nTable.id;
                (n._fixedHeader = this)._constructor()
            };
        return s.extend(d.prototype, {
            enable: function (t) {
                this.s.enable = t, this.c.header && this._modeChange("in-place", "header", !0), this.c.footer && this.dom.tfoot.length && this._modeChange("in-place", "footer", !0), this.update()
            },
            headerOffset: function (t) {
                return t !== a && (this.c.headerOffset = t, this.update()), this.c.headerOffset
            },
            footerOffset: function (t) {
                return t !== a && (this.c.footerOffset = t, this.update()), this.c.footerOffset
            },
            update: function () {
                this._positions(), this._scroll(!0)
            },
            _constructor: function () {
                var t = this,
                    e = this.s.dt;
                s(r).on("scroll" + this.s.namespace, function () {
                    t._scroll()
                }).on("resize" + this.s.namespace, i.util.throttle(function () {
                    t.s.position.windowHeight = s(r).height(), t.update()
                }, 50));
                var n = s(".fh-fixedHeader");
                !this.c.headerOffset && n.length && (this.c.headerOffset = n.outerHeight());
                var o = s(".fh-fixedFooter");
                !this.c.footerOffset && o.length && (this.c.footerOffset = o.outerHeight()), e.on("column-reorder.dt.dtfc column-visibility.dt.dtfc draw.dt.dtfc column-sizing.dt.dtfc responsive-display.dt.dtfc", function () {
                    t.update()
                }), e.on("destroy.dtfc", function () {
                    t.c.header && t._modeChange("in-place", "header", !0), t.c.footer && t.dom.tfoot.length && t._modeChange("in-place", "footer", !0), e.off(".dtfc"), s(r).off(t.s.namespace)
                }), this._positions(), this._scroll()
            },
            _clone: function (t, e) {
                var n = this.s.dt,
                    o = this.dom[t],
                    r = "header" === t ? this.dom.thead : this.dom.tfoot;
                !e && o.floating ? o.floating.removeClass("fixedHeader-floating fixedHeader-locked") : (o.floating && (o.placeholder.remove(), this._unsize(t), o.floating.children().detach(), o.floating.remove()), o.floating = s(n.table().node().cloneNode(!1)).css("table-layout", "fixed").attr("aria-hidden", "true").removeAttr("id").append(r).appendTo("body"), o.placeholder = r.clone(!1), o.placeholder.find("*[id]").removeAttr("id"), o.host.prepend(o.placeholder), this._matchWidths(o.placeholder, o.floating))
            },
            _matchWidths: function (e, n) {
                function t(t) {
                    return s(t, e).map(function () {
                        return s(this).width()
                    }).toArray()
                }

                function o(t, e) {
                    s(t, n).each(function (t) {
                        s(this).css({
                            width: e[t],
                            minWidth: e[t]
                        })
                    })
                }
                var r = t("th"),
                    a = t("td");
                o("th", r), o("td", a)
            },
            _unsize: function (t) {
                var e = this.dom[t].floating;
                e && ("footer" === t || "header" === t && !this.s.autoWidth) ? s("th, td", e).css({
                    width: "",
                    minWidth: ""
                }) : e && "header" === t && s("th, td", e).css("min-width", "")
            },
            _horizontal: function (t, e) {
                var n = this.dom[t],
                    o = this.s.position,
                    r = this.s.scrollLeft;
                n.floating && r[t] !== e && (n.floating.css("left", o.left - e), r[t] = e)
            },
            _modeChange: function (t, e, n) {
                this.s.dt;
                var o = this.dom[e],
                    r = this.s.position,
                    a = this.dom["footer" === e ? "tfoot" : "thead"],
                    i = s.contains(a[0], l.activeElement) ? l.activeElement : null;
                i && i.blur(), "in-place" === t ? (o.placeholder && (o.placeholder.remove(), o.placeholder = null), this._unsize(e), "header" === e ? o.host.prepend(a) : o.host.append(a), o.floating && (o.floating.remove(), o.floating = null)) : "in" === t ? (this._clone(e, n), o.floating.addClass("fixedHeader-floating").css("header" === e ? "top" : "bottom", this.c[e + "Offset"]).css("left", r.left + "px").css("width", r.width + "px"), "footer" === e && o.floating.css("top", "")) : "below" === t ? (this._clone(e, n), o.floating.addClass("fixedHeader-locked").css("top", r.tfootTop - r.theadHeight).css("left", r.left + "px").css("width", r.width + "px")) : "above" === t && (this._clone(e, n), o.floating.addClass("fixedHeader-locked").css("top", r.tbodyTop).css("left", r.left + "px").css("width", r.width + "px")), i && i !== l.activeElement && setTimeout(function () {
                    i.focus()
                }, 10), this.s.scrollLeft.header = -1, this.s.scrollLeft.footer = -1, this.s[e + "Mode"] = t
            },
            _positions: function () {
                var t = this.s.dt.table(),
                    e = this.s.position,
                    n = this.dom,
                    o = s(t.node()),
                    r = o.children("thead"),
                    a = o.children("tfoot"),
                    i = n.tbody;
                e.visible = o.is(":visible"), e.width = o.outerWidth(), e.left = o.offset().left, e.theadTop = r.offset().top, e.tbodyTop = i.offset().top, e.theadHeight = e.tbodyTop - e.theadTop, a.length ? (e.tfootTop = a.offset().top, e.tfootBottom = e.tfootTop + a.outerHeight(), e.tfootHeight = e.tfootBottom - e.tfootTop) : (e.tfootTop = e.tbodyTop + i.outerHeight(), e.tfootBottom = e.tfootTop, e.tfootHeight = e.tfootTop)
            },
            _scroll: function (t) {
                var e, n, o = s(l).scrollTop(),
                    r = s(l).scrollLeft(),
                    a = this.s.position;
                this.s.enable && (this.c.header && (e = !a.visible || o <= a.theadTop - this.c.headerOffset ? "in-place" : o <= a.tfootTop - a.theadHeight - this.c.headerOffset ? "in" : "below", !t && e === this.s.headerMode || this._modeChange(e, "header", t), this._horizontal("header", r)), this.c.footer && this.dom.tfoot.length && (n = !a.visible || o + a.windowHeight >= a.tfootBottom + this.c.footerOffset ? "in-place" : a.windowHeight + o > a.tbodyTop + a.tfootHeight + this.c.footerOffset ? "in" : "above", !t && n === this.s.footerMode || this._modeChange(n, "footer", t), this._horizontal("footer", r)))
            }
        }), d.version = "3.1.5", d.defaults = {
            header: !0,
            footer: !1,
            headerOffset: 0,
            footerOffset: 0
        }, s.fn.dataTable.FixedHeader = d, s.fn.DataTable.FixedHeader = d, s(l).on("init.dt.dtfh", function (t, e, n) {
            if ("dt" === t.namespace) {
                var o = e.oInit.fixedHeader,
                    r = i.defaults.fixedHeader;
                if ((o || r) && !e._fixedHeader) {
                    var a = s.extend({}, r, o);
                    !1 !== o && new d(e, a)
                }
            }
        }), i.Api.register("fixedHeader()", function () { }), i.Api.register("fixedHeader.adjust()", function () {
            return this.iterator("table", function (t) {
                var e = t._fixedHeader;
                e && e.update()
            })
        }), i.Api.register("fixedHeader.enable()", function (n) {
            return this.iterator("table", function (t) {
                var e = t._fixedHeader;
                n = n === a || n, e && n !== e.s.enable && e.enable(n)
            })
        }), i.Api.register("fixedHeader.disable()", function () {
            return this.iterator("table", function (t) {
                var e = t._fixedHeader;
                e && e.s.enable && e.enable(!1)
            })
        }), s.each(["header", "footer"], function (t, o) {
            i.Api.register("fixedHeader." + o + "Offset()", function (n) {
                var t = this.context;
                return n === a ? t.length && t[0]._fixedHeader ? t[0]._fixedHeader[o + "Offset"]() : a : this.iterator("table", function (t) {
                    var e = t._fixedHeader;
                    e && e[o + "Offset"](n)
                })
            })
        }), d
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-fixedheader"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net-bs4")(t, e).$), e.fn.dataTable.FixedHeader || require("datatables.net-fixedheader")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (t, e, n, o) {
        return t.fn.dataTable
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (p, m, b, g) {
        "use strict";
        var i = p.fn.dataTable,
            s = function (t, e) {
                if (!i.versionCheck || !i.versionCheck("1.10.8")) throw "KeyTable requires DataTables 1.10.8 or newer";
                this.c = p.extend(!0, {}, i.defaults.keyTable, s.defaults, e), this.s = {
                    dt: new i.Api(t),
                    enable: !0,
                    focusDraw: !1,
                    waitingForDraw: !1,
                    lastFocus: null
                }, this.dom = {};
                var n = this.s.dt.settings()[0],
                    o = n.keytable;
                if (o) return o;
                (n.keytable = this)._constructor()
            };
        return p.extend(s.prototype, {
            blur: function () {
                this._blur()
            },
            enable: function (t) {
                this.s.enable = t
            },
            focus: function (t, e) {
                this._focus(this.s.dt.cell(t, e))
            },
            focused: function (t) {
                if (!this.s.lastFocus) return !1;
                var e = this.s.lastFocus.cell.index();
                return t.row === e.row && t.column === e.column
            },
            _constructor: function () {
                this._tabInput();
                var a = this,
                    i = this.s.dt,
                    t = p(i.table().node());
                if ("static" === t.css("position") && t.css("position", "relative"), p(i.table().body()).on("click.keyTable", "th, td", function (t) {
                    if (!1 !== a.s.enable) {
                        var e = i.cell(this);
                        e.any() && a._focus(e, null, !1, t)
                    }
                }), p(b).on("keydown.keyTable", function (t) {
                    a._key(t)
                }), this.c.blurable && p(b).on("mousedown.keyTable", function (t) {
                    p(t.target).parents(".dataTables_filter").length && a._blur(), p(t.target).parents().filter(i.table().container()).length || p(t.target).parents("div.DTE").length || p(t.target).parents("div.editor-datetime").length || p(t.target).parents().filter(".DTFC_Cloned").length || a._blur()
                }), this.c.editor) {
                    var o = this.c.editor;
                    o.on("open.keyTableMain", function (t, e, n) {
                        "inline" !== e && a.s.enable && (a.enable(!1), o.one("close.keyTable", function () {
                            a.enable(!0)
                        }))
                    }), this.c.editOnFocus && i.on("key-focus.keyTable key-refocus.keyTable", function (t, e, n, o) {
                        a._editor(null, o, !0)
                    }), i.on("key.keyTable", function (t, e, n, o, r) {
                        a._editor(n, r, !1)
                    }), p(i.table().body()).on("dblclick.keyTable", "th, td", function (t) {
                        !1 !== a.s.enable && i.cell(this).any() && a._editor(null, t, !0)
                    })
                }
                i.settings()[0].oFeatures.bStateSave && i.on("stateSaveParams.keyTable", function (t, e, n) {
                    n.keyTable = a.s.lastFocus ? a.s.lastFocus.cell.index() : null
                }), i.on("draw.keyTable", function (t) {
                    if (!a.s.focusDraw) {
                        var e = a.s.lastFocus;
                        if (e && e.node && p(e.node).closest("body") === b.body) {
                            var n = a.s.lastFocus.relative,
                                o = i.page.info(),
                                r = n.row + o.start;
                            if (0 === o.recordsDisplay) return;
                            r >= o.recordsDisplay && (r = o.recordsDisplay - 1), a._focus(r, n.column, !0, t)
                        }
                    }
                }), this.c.clipboard && this._clipboard(), i.on("destroy.keyTable", function () {
                    i.off(".keyTable"), p(i.table().body()).off("click.keyTable", "th, td"), p(b).off("keydown.keyTable").off("click.keyTable").off("copy.keyTable").off("paste.keyTable")
                });
                var e = i.state.loaded();
                e && e.keyTable ? i.one("init", function () {
                    var t = i.cell(e.keyTable);
                    t.any() && t.focus()
                }) : this.c.focus && i.cell(this.c.focus).focus()
            },
            _blur: function () {
                if (this.s.enable && this.s.lastFocus) {
                    var t = this.s.lastFocus.cell;
                    p(t.node()).removeClass(this.c.className), this.s.lastFocus = null, this._updateFixedColumns(t.index().column), this._emitEvent("key-blur", [this.s.dt, t])
                }
            },
            _clipboard: function () {
                var i = this.s.dt,
                    s = this;
                m.getSelection && (p(b).on("copy.keyTable", function (t) {
                    var e = t.originalEvent,
                        n = m.getSelection().toString(),
                        o = s.s.lastFocus;
                    !n && o && (e.clipboardData.setData("text/plain", o.cell.render(s.c.clipboardOrthogonal)), e.preventDefault())
                }), p(b).on("paste.keyTable", function (t) {
                    var e, n = t.originalEvent,
                        o = s.s.lastFocus,
                        r = b.activeElement,
                        a = s.c.editor;
                    !o || r && "body" !== r.nodeName.toLowerCase() || (n.preventDefault(), m.clipboardData && m.clipboardData.getData ? e = m.clipboardData.getData("Text") : n.clipboardData && n.clipboardData.getData && (e = n.clipboardData.getData("text/plain")), a ? a.inline(o.cell.index()).set(a.displayed()[0], e).submit() : (o.cell.data(e), i.draw(!1)))
                }))
            },
            _columns: function () {
                var t = this.s.dt,
                    e = t.columns(this.c.columns).indexes(),
                    n = [];
                return t.columns(":visible").every(function (t) {
                    -1 !== e.indexOf(t) && n.push(t)
                }), n
            },
            _editor: function (t, e, n) {
                var o = this,
                    r = this.s.dt,
                    a = this.c.editor,
                    i = this.s.lastFocus.cell;
                if (!(p("div.DTE", i.node()).length || null !== t && (0 <= t && t <= 9 || 11 === t || 12 === t || 14 <= t && t <= 31 || 112 <= t && t <= 123 || 127 <= t && t <= 159))) {
                    e.stopPropagation(), 13 === t && e.preventDefault();
                    var s = function () {
                        a.one("open.keyTable", function () {
                            a.off("cancelOpen.keyTable"), n || p("div.DTE_Field_InputControl input, div.DTE_Field_InputControl textarea").select(), r.keys.enable(n ? "tab-only" : "navigation-only"), r.on("key-blur.editor", function () {
                                a.displayed() && a.submit()
                            }), n && p(r.table().container()).addClass("dtk-focus-alt"), a.on("submitUnsuccessful.keyTable", function () {
                                o._focus(i, null, !1)
                            }), a.one("close", function () {
                                r.keys.enable(!0), r.off("key-blur.editor"), a.off(".keyTable"), p(r.table().container()).removeClass("dtk-focus-alt")
                            })
                        }).one("cancelOpen.keyTable", function () {
                            a.off(".keyTable")
                        }).inline(i.index())
                    };
                    13 === t ? (n = !0, p(b).one("keyup", function () {
                        s()
                    })) : s()
                }
            },
            _emitEvent: function (n, o) {
                this.s.dt.iterator("table", function (t, e) {
                    p(t.nTable).triggerHandler(n, o)
                })
            },
            _focus: function (t, e, n, o) {
                var r = this,
                    a = this.s.dt,
                    i = a.page.info(),
                    s = this.s.lastFocus;
                if (o = o || null, this.s.enable) {
                    if ("number" != typeof t) {
                        if (!t.any()) return;
                        var l = t.index();
                        if (e = l.column, (t = a.rows({
                            filter: "applied",
                            order: "applied"
                        }).indexes().indexOf(l.row)) < 0) return;
                        i.serverSide && (t += i.start)
                    }
                    if (-1 !== i.length && (t < i.start || t >= i.start + i.length)) return this.s.focusDraw = !0, this.s.waitingForDraw = !0, void a.one("draw", function () {
                        r.s.focusDraw = !1, r.s.waitingForDraw = !1, r._focus(t, e, g, o)
                    }).page(Math.floor(t / i.length)).draw(!1);
                    if (-1 !== p.inArray(e, this._columns())) {
                        i.serverSide && (t -= i.start);
                        var d = a.cells(null, e, {
                            search: "applied",
                            order: "applied"
                        }).flatten(),
                            c = a.cell(d[t]);
                        if (s) {
                            if (s.node === c.node()) return void this._emitEvent("key-refocus", [this.s.dt, c, o || null]);
                            this._blur()
                        }
                        var u = p(c.node());
                        if (u.addClass(this.c.className), this._updateFixedColumns(e), n === g || !0 === n) {
                            this._scroll(p(m), p(b.body), u, "offset");
                            var f = a.table().body().parentNode;
                            if (f !== a.table().header().parentNode) {
                                var h = p(f.parentNode);
                                this._scroll(h, h, u, "position")
                            }
                        }
                        this.s.lastFocus = {
                            cell: c,
                            node: c.node(),
                            relative: {
                                row: a.rows({
                                    page: "current"
                                }).indexes().indexOf(c.index().row),
                                column: c.index().column
                            }
                        }, this._emitEvent("key-focus", [this.s.dt, c, o || null]), a.state.save()
                    }
                }
            },
            _key: function (t) {
                if (this.s.waitingForDraw) t.preventDefault();
                else {
                    var e = this.s.enable,
                        n = !0 === e || "navigation-only" === e;
                    if (e)
                        if (!(0 === t.keyCode || t.ctrlKey || t.metaKey || t.altKey) || t.ctrlKey && t.altKey)
                            if (this.s.lastFocus) {
                                var o = this.s.dt,
                                    r = !!this.s.dt.settings()[0].oScroll.sY;
                                if (!this.c.keys || -1 !== p.inArray(t.keyCode, this.c.keys)) switch (t.keyCode) {
                                    case 9:
                                        this._shift(t, t.shiftKey ? "left" : "right", !0);
                                        break;
                                    case 27:
                                        this.s.blurable && !0 === e && this._blur();
                                        break;
                                    case 33:
                                    case 34:
                                        n && !r && (t.preventDefault(), o.page(33 === t.keyCode ? "previous" : "next").draw(!1));
                                        break;
                                    case 35:
                                    case 36:
                                        if (n) {
                                            t.preventDefault();
                                            var a = o.cells({
                                                page: "current"
                                            }).indexes(),
                                                i = this._columns();
                                            this._focus(o.cell(a[35 === t.keyCode ? a.length - 1 : i[0]]), null, !0, t)
                                        }
                                        break;
                                    case 37:
                                        n && this._shift(t, "left");
                                        break;
                                    case 38:
                                        n && this._shift(t, "up");
                                        break;
                                    case 39:
                                        n && this._shift(t, "right");
                                        break;
                                    case 40:
                                        n && this._shift(t, "down");
                                        break;
                                    default:
                                        !0 === e && this._emitEvent("key", [o, t.keyCode, this.s.lastFocus.cell, t])
                                }
                            }
                }
            },
            _scroll: function (t, e, n, o) {
                var r = n[o](),
                    a = n.outerHeight(),
                    i = n.outerWidth(),
                    s = e.scrollTop(),
                    l = e.scrollLeft(),
                    d = t.height(),
                    c = t.width();
                "position" === o && (r.top += parseInt(n.closest("table").css("top"), 10)), r.top < s && e.scrollTop(r.top), r.left < l && e.scrollLeft(r.left), r.top + a > s + d && a < d && e.scrollTop(r.top + a - d), r.left + i > l + c && i < c && e.scrollLeft(r.left + i - c)
            },
            _shift: function (t, e, n) {
                var o = this.s.dt,
                    r = o.page.info(),
                    a = r.recordsDisplay,
                    i = this.s.lastFocus.cell,
                    s = this._columns();
                if (i) {
                    var l = o.rows({
                        filter: "applied",
                        order: "applied"
                    }).indexes().indexOf(i.index().row);
                    r.serverSide && (l += r.start);
                    var d = o.columns(s).indexes().indexOf(i.index().column),
                        c = l,
                        u = s[d];
                    "right" === e ? u = d >= s.length - 1 ? (c++ , s[0]) : s[d + 1] : "left" === e ? u = 0 === d ? (c-- , s[s.length - 1]) : s[d - 1] : "up" === e ? c-- : "down" === e && c++ , 0 <= c && c < a && -1 !== p.inArray(u, s) ? (t.preventDefault(), this._focus(c, u, !0, t)) : n && this.c.blurable ? this._blur() : t.preventDefault()
                }
            },
            _tabInput: function () {
                var e = this,
                    n = this.s.dt,
                    t = null !== this.c.tabIndex ? this.c.tabIndex : n.settings()[0].iTabIndex; - 1 != t && p('<div><input type="text" tabindex="' + t + '"/></div>').css({
                        position: "absolute",
                        height: 1,
                        width: 0,
                        overflow: "hidden"
                    }).insertBefore(n.table().node()).children().on("focus", function (t) {
                        n.cell(":eq(0)", {
                            page: "current"
                        }).any() && e._focus(n.cell(":eq(0)", "0:visible", {
                            page: "current"
                        }), null, !0, t)
                    })
            },
            _updateFixedColumns: function (t) {
                var e = this.s.dt,
                    n = e.settings()[0];
                if (n._oFixedColumns) {
                    var o = n._oFixedColumns.s.iLeftColumns,
                        r = n.aoColumns.length - n._oFixedColumns.s.iRightColumns;
                    (t < o || r <= t) && e.fixedColumns().update()
                }
            }
        }), s.defaults = {
            blurable: !0,
            className: "focus",
            clipboard: !0,
            clipboardOrthogonal: "display",
            columns: "",
            editor: null,
            editOnFocus: !1,
            focus: null,
            keys: null,
            tabIndex: null
        }, s.version = "2.5.0", p.fn.dataTable.KeyTable = s, p.fn.DataTable.KeyTable = s, i.Api.register("cell.blur()", function () {
            return this.iterator("table", function (t) {
                t.keytable && t.keytable.blur()
            })
        }), i.Api.register("cell().focus()", function () {
            return this.iterator("cell", function (t, e, n) {
                t.keytable && t.keytable.focus(e, n)
            })
        }), i.Api.register("keys.disable()", function () {
            return this.iterator("table", function (t) {
                t.keytable && t.keytable.enable(!1)
            })
        }), i.Api.register("keys.enable()", function (e) {
            return this.iterator("table", function (t) {
                t.keytable && t.keytable.enable(e === g || e)
            })
        }), i.ext.selector.cell.push(function (t, e, n) {
            var o = e.focused,
                r = t.keytable,
                a = [];
            if (!r || o === g) return n;
            for (var i = 0, s = n.length; i < s; i++)(!0 === o && r.focused(n[i]) || !1 === o && !r.focused(n[i])) && a.push(n[i]);
            return a
        }), p(b).on("preInit.dt.dtk", function (t, e, n) {
            if ("dt" === t.namespace) {
                var o = e.oInit.keys,
                    r = i.defaults.keys;
                if (o || r) {
                    var a = p.extend({}, r, o);
                    !1 !== o && new s(e, a)
                }
            }
        }), s
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-keytable"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net-bs4")(t, e).$), e.fn.dataTable.KeyTable || require("datatables.net-keytable")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (t, e, n, o) {
        return t.fn.dataTable
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (p, h, i, f) {
        "use strict";
        var a = p.fn.dataTable,
            r = function (t, e) {
                if (!a.versionCheck || !a.versionCheck("1.10.10")) throw "DataTables Responsive requires DataTables 1.10.10 or newer";
                this.s = {
                    dt: new a.Api(t),
                    columns: [],
                    current: []
                }, this.s.dt.settings()[0].responsive || (e && "string" == typeof e.details ? e.details = {
                    type: e.details
                } : e && !1 === e.details ? e.details = {
                    type: !1
                } : e && !0 === e.details && (e.details = {
                    type: "inline"
                }), this.c = p.extend(!0, {}, r.defaults, a.defaults.responsive, e), (t.responsive = this)._constructor())
            };
        p.extend(r.prototype, {
            _constructor: function () {
                var o = this,
                    r = this.s.dt,
                    t = r.settings()[0],
                    e = p(h).width();
                r.settings()[0]._responsive = this, p(h).on("resize.dtr orientationchange.dtr", a.util.throttle(function () {
                    var t = p(h).width();
                    t !== e && (o._resize(), e = t)
                })), t.oApi._fnCallbackReg(t, "aoRowCreatedCallback", function (t, e, n) {
                    -1 !== p.inArray(!1, o.s.current) && p(">td, >th", t).each(function (t) {
                        var e = r.column.index("toData", t);
                        !1 === o.s.current[e] && p(this).css("display", "none")
                    })
                }), r.on("destroy.dtr", function () {
                    r.off(".dtr"), p(r.table().body()).off(".dtr"), p(h).off("resize.dtr orientationchange.dtr"), p.each(o.s.current, function (t, e) {
                        !1 === e && o._setColumnVis(t, !0)
                    })
                }), this.c.breakpoints.sort(function (t, e) {
                    return t.width < e.width ? 1 : t.width > e.width ? -1 : 0
                }), this._classLogic(), this._resizeAuto();
                var n = this.c.details;
                !1 !== n.type && (o._detailsInit(), r.on("column-visibility.dtr", function () {
                    o._timer && clearTimeout(o._timer), o._timer = setTimeout(function () {
                        o._timer = null, o._classLogic(), o._resizeAuto(), o._resize(), o._redrawChildren()
                    }, 100)
                }), r.on("draw.dtr", function () {
                    o._redrawChildren()
                }), p(r.table().node()).addClass("dtr-" + n.type)), r.on("column-reorder.dtr", function (t, e, n) {
                    o._classLogic(), o._resizeAuto(), o._resize()
                }), r.on("column-sizing.dtr", function () {
                    o._resizeAuto(), o._resize()
                }), r.on("preXhr.dtr", function () {
                    var t = [];
                    r.rows().every(function () {
                        this.child.isShown() && t.push(this.id(!0))
                    }), r.one("draw.dtr", function () {
                        o._resizeAuto(), o._resize(), r.rows(t).every(function () {
                            o._detailsDisplay(this, !1)
                        })
                    })
                }), r.on("init.dtr", function (t, e, n) {
                    o._resizeAuto(), o._resize(), p.inArray(!1, o.s.current) && r.columns.adjust()
                }), this._resize()
            },
            _columnsVisiblity: function (n) {
                var t, e, o = this.s.dt,
                    r = this.s.columns,
                    a = r.map(function (t, e) {
                        return {
                            columnIdx: e,
                            priority: t.priority
                        }
                    }).sort(function (t, e) {
                        return t.priority !== e.priority ? t.priority - e.priority : t.columnIdx - e.columnIdx
                    }),
                    i = p.map(r, function (t, e) {
                        return !1 === o.column(e).visible() ? "not-visible" : (!t.auto || null !== t.minWidth) && (!0 === t.auto ? "-" : -1 !== p.inArray(n, t.includeIn))
                    }),
                    s = 0;
                for (t = 0, e = i.length; t < e; t++) !0 === i[t] && (s += r[t].minWidth);
                var l = o.settings()[0].oScroll,
                    d = l.sY || l.sX ? l.iBarWidth : 0,
                    c = o.table().container().offsetWidth - d - s;
                for (t = 0, e = i.length; t < e; t++) r[t].control && (c -= r[t].minWidth);
                var u = !1;
                for (t = 0, e = a.length; t < e; t++) {
                    var f = a[t].columnIdx;
                    "-" === i[f] && !r[f].control && r[f].minWidth && (u || c - r[f].minWidth < 0 ? (u = !0, i[f] = !1) : i[f] = !0, c -= r[f].minWidth)
                }
                var h = !1;
                for (t = 0, e = r.length; t < e; t++)
                    if (!r[t].control && !r[t].never && !1 === i[t]) {
                        h = !0;
                        break
                    } for (t = 0, e = r.length; t < e; t++) r[t].control && (i[t] = h), "not-visible" === i[t] && (i[t] = !1);
                return -1 === p.inArray(!0, i) && (i[0] = !0), i
            },
            _classLogic: function () {
                function s(t, e) {
                    var n = u[t].includeIn; - 1 === p.inArray(e, n) && n.push(e)
                }

                function l(t, e, n, o) {
                    var r, a, i;
                    if (n) {
                        if ("max-" === n)
                            for (r = d._find(e).width, a = 0, i = c.length; a < i; a++) c[a].width <= r && s(t, c[a].name);
                        else if ("min-" === n)
                            for (r = d._find(e).width, a = 0, i = c.length; a < i; a++) c[a].width >= r && s(t, c[a].name);
                        else if ("not-" === n)
                            for (a = 0, i = c.length; a < i; a++) - 1 === c[a].name.indexOf(o) && s(t, c[a].name)
                    } else u[t].includeIn.push(e)
                }
                var d = this,
                    c = this.c.breakpoints,
                    a = this.s.dt,
                    u = a.columns().eq(0).map(function (t) {
                        var e = this.column(t),
                            n = e.header().className,
                            o = a.settings()[0].aoColumns[t].responsivePriority;
                        if (o === f) {
                            var r = p(e.header()).data("priority");
                            o = r !== f ? 1 * r : 1e4
                        }
                        return {
                            className: n,
                            includeIn: [],
                            auto: !1,
                            control: !1,
                            never: !!n.match(/\bnever\b/),
                            priority: o
                        }
                    });
                u.each(function (t, a) {
                    for (var e = t.className.split(" "), i = !1, n = 0, o = e.length; n < o; n++) {
                        var s = p.trim(e[n]);
                        if ("all" === s) return i = !0, void (t.includeIn = p.map(c, function (t) {
                            return t.name
                        }));
                        if ("none" === s || t.never) return void (i = !0);
                        if ("control" === s) return i = !0, void (t.control = !0);
                        p.each(c, function (t, e) {
                            var n = e.name.split("-"),
                                o = new RegExp("(min\\-|max\\-|not\\-)?(" + n[0] + ")(\\-[_a-zA-Z0-9])?"),
                                r = s.match(o);
                            r && (i = !0, r[2] === n[0] && r[3] === "-" + n[1] ? l(a, e.name, r[1], r[2] + r[3]) : r[2] !== n[0] || r[3] || l(a, e.name, r[1], r[2]))
                        })
                    }
                    i || (t.auto = !0)
                }), this.s.columns = u
            },
            _detailsDisplay: function (t, e) {
                var n = this,
                    o = this.s.dt,
                    r = this.c.details;
                if (r && !1 !== r.type) {
                    var a = r.display(t, e, function () {
                        return r.renderer(o, t[0], n._detailsObj(t[0]))
                    });
                    !0 !== a && !1 !== a || p(o.table().node()).triggerHandler("responsive-display.dt", [o, t, a, e])
                }
            },
            _detailsInit: function () {
                var o = this,
                    r = this.s.dt,
                    t = this.c.details;
                "inline" === t.type && (t.target = "td:first-child, th:first-child"), r.on("draw.dtr", function () {
                    o._tabIndexes()
                }), o._tabIndexes(), p(r.table().body()).on("keyup.dtr", "td, th", function (t) {
                    13 === t.keyCode && p(this).data("dtr-keyboard") && p(this).click()
                });
                var a = t.target,
                    e = "string" == typeof a ? a : "td, th";
                p(r.table().body()).on("click.dtr mousedown.dtr mouseup.dtr", e, function (t) {
                    if (p(r.table().node()).hasClass("collapsed") && -1 !== p.inArray(p(this).closest("tr").get(0), r.rows().nodes().toArray())) {
                        if ("number" == typeof a) {
                            var e = a < 0 ? r.columns().eq(0).length + a : a;
                            if (r.cell(this).index().column !== e) return
                        }
                        var n = r.row(p(this).closest("tr"));
                        "click" === t.type ? o._detailsDisplay(n, !1) : "mousedown" === t.type ? p(this).css("outline", "none") : "mouseup" === t.type && p(this).blur().css("outline", "")
                    }
                })
            },
            _detailsObj: function (n) {
                var o = this,
                    r = this.s.dt;
                return p.map(this.s.columns, function (t, e) {
                    if (!t.never && !t.control) return {
                        title: r.settings()[0].aoColumns[e].sTitle,
                        data: r.cell(n, e).render(o.c.orthogonal),
                        hidden: r.column(e).visible() && !o.s.current[e],
                        columnIndex: e,
                        rowIndex: n
                    }
                })
            },
            _find: function (t) {
                for (var e = this.c.breakpoints, n = 0, o = e.length; n < o; n++)
                    if (e[n].name === t) return e[n]
            },
            _redrawChildren: function () {
                var n = this,
                    o = this.s.dt;
                o.rows({
                    page: "current"
                }).iterator("row", function (t, e) {
                    o.row(e);
                    n._detailsDisplay(o.row(e), !0)
                })
            },
            _resize: function () {
                var t, e, n = this,
                    o = this.s.dt,
                    r = p(h).width(),
                    a = this.c.breakpoints,
                    i = a[0].name,
                    s = this.s.columns,
                    l = this.s.current.slice();
                for (t = a.length - 1; 0 <= t; t--)
                    if (r <= a[t].width) {
                        i = a[t].name;
                        break
                    } var d = this._columnsVisiblity(i);
                this.s.current = d;
                var c = !1;
                for (t = 0, e = s.length; t < e; t++)
                    if (!1 === d[t] && !s[t].never && !s[t].control && !1 == !o.column(t).visible()) {
                        c = !0;
                        break
                    } p(o.table().node()).toggleClass("collapsed", c);
                var u = !1,
                    f = 0;
                o.columns().eq(0).each(function (t, e) {
                    !0 === d[e] && f++ , d[e] !== l[e] && (u = !0, n._setColumnVis(t, d[e]))
                }), u && (this._redrawChildren(), p(o.table().node()).trigger("responsive-resize.dt", [o, this.s.current]), 0 === o.page.info().recordsDisplay && p("td", o.table().body()).eq(0).attr("colspan", f))
            },
            _resizeAuto: function () {
                var n = this.s.dt,
                    o = this.s.columns;
                if (this.c.auto && -1 !== p.inArray(!0, p.map(o, function (t) {
                    return t.auto
                }))) {
                    p.isEmptyObject(u) || p.each(u, function (t) {
                        var e = t.split("-");
                        c(n, 1 * e[0], 1 * e[1])
                    });
                    n.table().node().offsetWidth, n.columns;
                    var t = n.table().node().cloneNode(!1),
                        e = p(n.table().header().cloneNode(!1)).appendTo(t),
                        r = p(n.table().body()).clone(!1, !1).empty().appendTo(t),
                        a = n.columns().header().filter(function (t) {
                            return n.column(t).visible()
                        }).to$().clone(!1).css("display", "table-cell").css("min-width", 0);
                    p(r).append(p(n.rows({
                        page: "current"
                    }).nodes()).clone(!1)).find("th, td").css("display", "");
                    var i = n.table().footer();
                    if (i) {
                        var s = p(i.cloneNode(!1)).appendTo(t),
                            l = n.columns().footer().filter(function (t) {
                                return n.column(t).visible()
                            }).to$().clone(!1).css("display", "table-cell");
                        p("<tr/>").append(l).appendTo(s)
                    }
                    p("<tr/>").append(a).appendTo(e), "inline" === this.c.details.type && p(t).addClass("dtr-inline collapsed"), p(t).find("[name]").removeAttr("name"), p(t).css("position", "relative");
                    var d = p("<div/>").css({
                        width: 1,
                        height: 1,
                        overflow: "hidden",
                        clear: "both"
                    }).append(t);
                    d.insertBefore(n.table().node()), a.each(function (t) {
                        var e = n.column.index("fromVisible", t);
                        o[e].minWidth = this.offsetWidth || 0
                    }), d.remove()
                }
            },
            _setColumnVis: function (t, e) {
                var n = this.s.dt,
                    o = e ? "" : "none";
                p(n.column(t).header()).css("display", o), p(n.column(t).footer()).css("display", o), n.column(t).nodes().to$().css("display", o), p.isEmptyObject(u) || n.cells(null, t).indexes().each(function (t) {
                    c(n, t.row, t.column)
                })
            },
            _tabIndexes: function () {
                var t = this.s.dt,
                    e = t.cells({
                        page: "current"
                    }).nodes().to$(),
                    n = t.settings()[0],
                    o = this.c.details.target;
                e.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"), "number" == typeof o ? t.cells(null, o, {
                    page: "current"
                }).nodes().to$().attr("tabIndex", n.iTabIndex).data("dtr-keyboard", 1) : ("td:first-child, th:first-child" === o && (o = ">td:first-child, >th:first-child"), p(o, t.rows({
                    page: "current"
                }).nodes()).attr("tabIndex", n.iTabIndex).data("dtr-keyboard", 1))
            }
        }), r.breakpoints = [{
            name: "desktop",
            width: 1 / 0
        }, {
            name: "tablet-l",
            width: 1024
        }, {
            name: "tablet-p",
            width: 768
        }, {
            name: "mobile-l",
            width: 480
        }, {
            name: "mobile-p",
            width: 320
        }], r.display = {
            childRow: function (t, e, n) {
                return e ? p(t.node()).hasClass("parent") ? (t.child(n(), "child").show(), !0) : void 0 : t.child.isShown() ? (t.child(!1), p(t.node()).removeClass("parent"), !1) : (t.child(n(), "child").show(), p(t.node()).addClass("parent"), !0)
            },
            childRowImmediate: function (t, e, n) {
                return !e && t.child.isShown() || !t.responsive.hasHidden() ? (t.child(!1), p(t.node()).removeClass("parent"), !1) : (t.child(n(), "child").show(), p(t.node()).addClass("parent"), !0)
            },
            modal: function (a) {
                return function (t, e, n) {
                    if (e) p("div.dtr-modal-content").empty().append(n());
                    else {
                        var o = function () {
                            r.remove(), p(i).off("keypress.dtr")
                        },
                            r = p('<div class="dtr-modal"/>').append(p('<div class="dtr-modal-display"/>').append(p('<div class="dtr-modal-content"/>').append(n())).append(p('<div class="dtr-modal-close">&times;</div>').click(function () {
                                o()
                            }))).append(p('<div class="dtr-modal-background"/>').click(function () {
                                o()
                            })).appendTo("body");
                        p(i).on("keyup.dtr", function (t) {
                            27 === t.keyCode && (t.stopPropagation(), o())
                        })
                    }
                    a && a.header && p("div.dtr-modal-content").prepend("<h2>" + a.header(t) + "</h2>")
                }
            }
        };
        var u = {};

        function c(t, e, n) {
            var o = e + "-" + n;
            if (u[o]) {
                for (var r = t.cell(e, n).node(), a = u[o][0].parentNode.childNodes, i = [], s = 0, l = a.length; s < l; s++) i.push(a[s]);
                for (var d = 0, c = i.length; d < c; d++) r.appendChild(i[d]);
                u[o] = f
            }
        }
        r.renderer = {
            listHiddenNodes: function () {
                return function (n, t, e) {
                    var o = p('<ul data-dtr-index="' + t + '" class="dtr-details"/>'),
                        r = !1;
                    p.each(e, function (t, e) {
                        e.hidden && (p('<li data-dtr-index="' + e.columnIndex + '" data-dt-row="' + e.rowIndex + '" data-dt-column="' + e.columnIndex + '"><span class="dtr-title">' + e.title + "</span> </li>").append(p('<span class="dtr-data"/>').append(function (t, e, n) {
                            var o = e + "-" + n;
                            if (u[o]) return u[o];
                            for (var r = [], a = t.cell(e, n).node().childNodes, i = 0, s = a.length; i < s; i++) r.push(a[i]);
                            return u[o] = r
                        }(n, e.rowIndex, e.columnIndex))).appendTo(o), r = !0)
                    });
                    return !!r && o
                }
            },
            listHidden: function () {
                return function (t, e, n) {
                    var o = p.map(n, function (t) {
                        return t.hidden ? '<li data-dtr-index="' + t.columnIndex + '" data-dt-row="' + t.rowIndex + '" data-dt-column="' + t.columnIndex + '"><span class="dtr-title">' + t.title + '</span> <span class="dtr-data">' + t.data + "</span></li>" : ""
                    }).join("");
                    return !!o && p('<ul data-dtr-index="' + e + '" class="dtr-details"/>').append(o)
                }
            },
            tableAll: function (r) {
                return r = p.extend({
                    tableClass: ""
                }, r),
                    function (t, e, n) {
                        var o = p.map(n, function (t) {
                            return '<tr data-dt-row="' + t.rowIndex + '" data-dt-column="' + t.columnIndex + '"><td>' + t.title + ":</td> <td>" + t.data + "</td></tr>"
                        }).join("");
                        return p('<table class="' + r.tableClass + ' dtr-details" width="100%"/>').append(o)
                    }
            }
        }, r.defaults = {
            breakpoints: r.breakpoints,
            auto: !0,
            details: {
                display: r.display.childRow,
                renderer: r.renderer.listHidden(),
                target: 0,
                type: "inline"
            },
            orthogonal: "display"
        };
        var t = p.fn.dataTable.Api;
        return t.register("responsive()", function () {
            return this
        }), t.register("responsive.index()", function (t) {
            return {
                column: (t = p(t)).data("dtr-index"),
                row: t.parent().data("dtr-index")
            }
        }), t.register("responsive.rebuild()", function () {
            return this.iterator("table", function (t) {
                t._responsive && t._responsive._classLogic()
            })
        }), t.register("responsive.recalc()", function () {
            return this.iterator("table", function (t) {
                t._responsive && (t._responsive._resizeAuto(), t._responsive._resize())
            })
        }), t.register("responsive.hasHidden()", function () {
            var t = this.context[0];
            return !!t._responsive && -1 !== p.inArray(!1, t._responsive.s.current)
        }), t.registerPlural("columns().responsiveHidden()", "column().responsiveHidden()", function () {
            return this.iterator("column", function (t, e) {
                return !!t._responsive && t._responsive.s.current[e]
            }, 1)
        }), r.version = "2.2.3", p.fn.dataTable.Responsive = r, p.fn.DataTable.Responsive = r, p(i).on("preInit.dt.dtr", function (t, e, n) {
            if ("dt" === t.namespace && (p(e.nTable).hasClass("responsive") || p(e.nTable).hasClass("dt-responsive") || e.oInit.responsive || a.defaults.responsive)) {
                var o = e.oInit.responsive;
                !1 !== o && new r(e, p.isPlainObject(o) ? o : {})
            }
        }), r
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-responsive"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net-bs4")(t, e).$), e.fn.dataTable.Responsive || require("datatables.net-responsive")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (i, t, e, n) {
        "use strict";
        var o = i.fn.dataTable,
            r = o.Responsive.display,
            s = r.modal,
            l = i('<div class="modal fade dtr-bs-modal" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="modal-body"/></div></div></div>');
        return r.modal = function (a) {
            return function (t, e, n) {
                if (i.fn.modal) {
                    if (!e) {
                        if (a && a.header) {
                            var o = l.find("div.modal-header"),
                                r = o.find("button").detach();
                            o.empty().append('<h4 class="modal-title">' + a.header(t) + "</h4>").append(r)
                        }
                        l.find("div.modal-body").empty().append(n()), l.appendTo("body").modal()
                    }
                } else s(t, e, n)
            }
        }, o.Responsive
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (u, t, e, f) {
        "use strict";
        var h = u.fn.dataTable,
            i = function (t, e) {
                if (!h.versionCheck || !h.versionCheck("1.10.8")) throw "RowGroup requires DataTables 1.10.8 or newer";
                this.c = u.extend(!0, {}, h.defaults.rowGroup, i.defaults, e), this.s = {
                    dt: new h.Api(t)
                }, this.dom = {};
                var n = this.s.dt.settings()[0],
                    o = n.rowGroup;
                if (o) return o;
                (n.rowGroup = this)._constructor()
            };
        return u.extend(i.prototype, {
            dataSrc: function (t) {
                if (t === f) return this.c.dataSrc;
                var e = this.s.dt;
                return this.c.dataSrc = t, u(e.table().node()).triggerHandler("rowgroup-datasrc.dt", [e, t]), this
            },
            disable: function () {
                return this.c.enable = !1, this
            },
            enable: function (t) {
                return !1 === t ? this.disable() : (this.c.enable = !0, this)
            },
            _constructor: function () {
                var t = this,
                    e = this.s.dt;
                e.on("draw.dtrg", function () {
                    t.c.enable && t._draw()
                }), e.on("column-visibility.dt.dtrg responsive-resize.dt.dtrg", function () {
                    t._adjustColspan()
                }), e.on("destroy", function () {
                    e.off(".dtrg")
                }), e.on("responsive-resize.dt", function () {
                    t._adjustColspan()
                })
            },
            _adjustColspan: function () {
                u("tr." + this.c.className, this.s.dt.table().body()).find("td").attr("colspan", this._colspan())
            },
            _colspan: function () {
                return this.s.dt.columns().visible().reduce(function (t, e) {
                    return t + e
                }, 0)
            },
            _draw: function () {
                var t = this.s.dt,
                    e = this._group(0, t.rows({
                        page: "current"
                    }).indexes());
                this._groupDisplay(0, e)
            },
            _group: function (t, e) {
                for (var n, o = u.isArray(this.c.dataSrc) ? this.c.dataSrc : [this.c.dataSrc], r = h.ext.oApi._fnGetObjectDataFn(o[t]), a = this.s.dt, i = [], s = 0, l = e.length; s < l; s++) {
                    var d, c = e[s];
                    null !== (d = r(a.row(c).data())) && d !== f || (d = that.c.emptyDataGroup), n !== f && d === n || (i.push({
                        dataPoint: d,
                        rows: []
                    }), n = d), i[i.length - 1].rows.push(c)
                }
                if (o[t + 1] !== f)
                    for (s = 0, l = i.length; s < l; s++) i[s].children = this._group(t + 1, i[s].rows);
                return i
            },
            _groupDisplay: function (t, e) {
                for (var n, o = this.s.dt, r = 0, a = e.length; r < a; r++) {
                    var i, s = e[r],
                        l = s.dataPoint,
                        d = s.rows;
                    this.c.startRender && (n = this.c.startRender.call(this, o.rows(d), l, t), (i = this._rowWrap(n, this.c.startClassName, t)) && i.insertBefore(o.row(d[0]).node())), this.c.endRender && (n = this.c.endRender.call(this, o.rows(d), l, t), (i = this._rowWrap(n, this.c.endClassName, t)) && i.insertAfter(o.row(d[d.length - 1]).node())), s.children && this._groupDisplay(t + 1, s.children)
                }
            },
            _rowWrap: function (t, e, n) {
                return null !== t && "" !== t || (t = this.c.emptyDataGroup), t === f ? null : ("object" == typeof t && t.nodeName && "tr" === t.nodeName.toLowerCase() ? u(t) : t instanceof u && t.length && "tr" === t[0].nodeName.toLowerCase() ? t : u("<tr/>").append(u("<td/>").attr("colspan", this._colspan()).append(t))).addClass(this.c.className).addClass(e).addClass("dtrg-level-" + n)
            }
        }), i.defaults = {
            className: "dtrg-group",
            dataSrc: 0,
            emptyDataGroup: "No group",
            enable: !0,
            endClassName: "dtrg-end",
            endRender: null,
            startClassName: "dtrg-start",
            startRender: function (t, e) {
                return e
            }
        }, i.version = "1.1.0", u.fn.dataTable.RowGroup = i, u.fn.DataTable.RowGroup = i, h.Api.register("rowGroup()", function () {
            return this
        }), h.Api.register("rowGroup().disable()", function () {
            return this.iterator("table", function (t) {
                t.rowGroup && t.rowGroup.enable(!1)
            })
        }), h.Api.register("rowGroup().enable()", function (e) {
            return this.iterator("table", function (t) {
                t.rowGroup && t.rowGroup.enable(e === f || e)
            })
        }), h.Api.register("rowGroup().dataSrc()", function (e) {
            return e === f ? this.context[0].rowGroup.dataSrc() : this.iterator("table", function (t) {
                t.rowGroup && t.rowGroup.dataSrc(e)
            })
        }), u(e).on("preInit.dt.dtrg", function (t, e, n) {
            if ("dt" === t.namespace) {
                var o = e.oInit.rowGroup,
                    r = h.defaults.rowGroup;
                if (o || r) {
                    var a = u.extend({}, r, o);
                    !1 !== o && new i(e, a)
                }
            }
        }), i
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-rowgroup"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net-bs4")(t, e).$), e.fn.dataTable.RowGroup || require("datatables.net-rowgroup")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (t, e, n, o) {
        return t.fn.dataTable
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (v, s, y, t) {
        "use strict";
        var i = v.fn.dataTable,
            l = function (t, e) {
                if (!i.versionCheck || !i.versionCheck("1.10.8")) throw "DataTables RowReorder requires DataTables 1.10.8 or newer";
                this.c = v.extend(!0, {}, i.defaults.rowReorder, l.defaults, e), this.s = {
                    bodyTop: null,
                    dt: new i.Api(t),
                    getDataFn: i.ext.oApi._fnGetObjectDataFn(this.c.dataSrc),
                    middles: null,
                    scroll: {},
                    scrollInterval: null,
                    setDataFn: i.ext.oApi._fnSetObjectDataFn(this.c.dataSrc),
                    start: {
                        top: 0,
                        left: 0,
                        offsetTop: 0,
                        offsetLeft: 0,
                        nodes: []
                    },
                    windowHeight: 0,
                    documentOuterHeight: 0,
                    domCloneOuterHeight: 0
                }, this.dom = {
                    clone: null,
                    dtScroll: v("div.dataTables_scrollBody", this.s.dt.table().container())
                };
                var n = this.s.dt.settings()[0],
                    o = n.rowreorder;
                if (o) return o;
                (n.rowreorder = this)._constructor()
            };
        v.extend(l.prototype, {
            _constructor: function () {
                var o = this,
                    r = this.s.dt,
                    t = v(r.table().node());
                "static" === t.css("position") && t.css("position", "relative"), v(r.table().container()).on("mousedown.rowReorder touchstart.rowReorder", this.c.selector, function (t) {
                    if (o.c.enable) {
                        if (v(t.target).is(o.c.excludedChildren)) return !0;
                        var e = v(this).closest("tr"),
                            n = r.row(e);
                        return n.any() ? (o._emitEvent("pre-row-reorder", {
                            node: n.node(),
                            index: n.index()
                        }), o._mouseDown(t, e), !1) : void 0
                    }
                }), r.on("destroy.rowReorder", function () {
                    v(r.table().container()).off(".rowReorder"), r.off(".rowReorder")
                })
            },
            _cachePositions: function () {
                var n = this.s.dt,
                    o = v(n.table().node()).find("thead").outerHeight(),
                    t = v.unique(n.rows({
                        page: "current"
                    }).nodes().toArray()),
                    r = v.map(t, function (t, e) {
                        return v(t).position().top - o
                    }),
                    e = v.map(r, function (t, e) {
                        return r.length < e - 1 ? (t + r[e + 1]) / 2 : (t + t + v(n.row(":last-child").node()).outerHeight()) / 2
                    });
                this.s.middles = e, this.s.bodyTop = v(n.table().body()).offset().top, this.s.windowHeight = v(s).height(), this.s.documentOuterHeight = v(y).outerHeight()
            },
            _clone: function (t) {
                var e = this.s.dt,
                    n = v(e.table().node().cloneNode(!1)).addClass("dt-rowReorder-float").append("<tbody/>").append(t.clone(!1)),
                    o = t.outerWidth(),
                    r = t.outerHeight(),
                    a = t.children().map(function () {
                        return v(this).width()
                    });
                n.width(o).height(r).find("tr").children().each(function (t) {
                    this.style.width = a[t] + "px"
                }), n.appendTo("body"), this.dom.clone = n, this.s.domCloneOuterHeight = n.outerHeight()
            },
            _clonePosition: function (t) {
                var e, n = this.s.start,
                    o = this._eventToPage(t, "Y") - n.top,
                    r = this._eventToPage(t, "X") - n.left,
                    a = this.c.snapX,
                    i = o + n.offsetTop;
                e = !0 === a ? n.offsetLeft : "number" == typeof a ? n.offsetLeft + a : r + n.offsetLeft, i < 0 ? i = 0 : i + this.s.domCloneOuterHeight > this.s.documentOuterHeight && (i = this.s.documentOuterHeight - this.s.domCloneOuterHeight), this.dom.clone.css({
                    top: i,
                    left: e
                })
            },
            _emitEvent: function (n, o) {
                this.s.dt.iterator("table", function (t, e) {
                    v(t.nTable).triggerHandler(n + ".dt", o)
                })
            },
            _eventToPage: function (t, e) {
                return -1 !== t.type.indexOf("touch") ? t.originalEvent.touches[0]["page" + e] : t["page" + e]
            },
            _mouseDown: function (t, e) {
                var n = this,
                    o = this.s.dt,
                    r = this.s.start,
                    a = e.offset();
                r.top = this._eventToPage(t, "Y"), r.left = this._eventToPage(t, "X"), r.offsetTop = a.top, r.offsetLeft = a.left, r.nodes = v.unique(o.rows({
                    page: "current"
                }).nodes().toArray()), this._cachePositions(), this._clone(e), this._clonePosition(t), (this.dom.target = e).addClass("dt-rowReorder-moving"), v(y).on("mouseup.rowReorder touchend.rowReorder", function (t) {
                    n._mouseUp(t)
                }).on("mousemove.rowReorder touchmove.rowReorder", function (t) {
                    n._mouseMove(t)
                }), v(s).width() === v(y).width() && v(y.body).addClass("dt-rowReorder-noOverflow");
                var i = this.dom.dtScroll;
                this.s.scroll = {
                    windowHeight: v(s).height(),
                    windowWidth: v(s).width(),
                    dtTop: i.length ? i.offset().top : null,
                    dtLeft: i.length ? i.offset().left : null,
                    dtHeight: i.length ? i.outerHeight() : null,
                    dtWidth: i.length ? i.outerWidth() : null
                }
            },
            _mouseMove: function (t) {
                this._clonePosition(t);
                for (var e = this._eventToPage(t, "Y") - this.s.bodyTop, n = this.s.middles, o = null, r = this.s.dt, a = r.table().body(), i = 0, s = n.length; i < s; i++)
                    if (e < n[i]) {
                        o = i;
                        break
                    } if (null === o && (o = n.length), null === this.s.lastInsert || this.s.lastInsert !== o) {
                        if (0 === o) this.dom.target.prependTo(a);
                        else {
                            var l = v.unique(r.rows({
                                page: "current"
                            }).nodes().toArray());
                            o > this.s.lastInsert ? this.dom.target.insertAfter(l[o - 1]) : this.dom.target.insertBefore(l[o])
                        }
                        this._cachePositions(), this.s.lastInsert = o
                    }
                this._shiftScroll(t)
            },
            _mouseUp: function (t) {
                var e, n, o = this,
                    r = this.s.dt,
                    a = this.c.dataSrc;
                this.dom.clone.remove(), this.dom.clone = null, this.dom.target.removeClass("dt-rowReorder-moving"), v(y).off(".rowReorder"), v(y.body).removeClass("dt-rowReorder-noOverflow"), clearInterval(this.s.scrollInterval), this.s.scrollInterval = null;
                var i = this.s.start.nodes,
                    s = v.unique(r.rows({
                        page: "current"
                    }).nodes().toArray()),
                    l = {},
                    d = [],
                    c = [],
                    u = this.s.getDataFn,
                    f = this.s.setDataFn;
                for (e = 0, n = i.length; e < n; e++)
                    if (i[e] !== s[e]) {
                        var h = r.row(s[e]).id(),
                            p = r.row(s[e]).data(),
                            m = r.row(i[e]).data();
                        h && (l[h] = u(m)), d.push({
                            node: s[e],
                            oldData: u(p),
                            newData: u(m),
                            newPosition: e,
                            oldPosition: v.inArray(s[e], i)
                        }), c.push(s[e])
                    } var b = [d, {
                        dataSrc: a,
                        nodes: c,
                        values: l,
                        triggerRow: r.row(this.dom.target)
                    }];
                this._emitEvent("row-reorder", b);

                function g() {
                    if (o.c.update) {
                        for (e = 0, n = d.length; e < n; e++) {
                            var t = r.row(d[e].node).data();
                            f(t, d[e].newData), r.columns().every(function () {
                                this.dataSrc() === a && r.cell(d[e].node, this.index()).invalidate("data")
                            })
                        }
                        o._emitEvent("row-reordered", b), r.draw(!1)
                    }
                }
                this.c.editor ? (this.c.enable = !1, this.c.editor.edit(c, !1, v.extend({
                    submit: "changed"
                }, this.c.formOptions)).multiSet(a, l).one("preSubmitCancelled.rowReorder", function () {
                    o.c.enable = !0, o.c.editor.off(".rowReorder"), r.draw(!1)
                }).one("submitUnsuccessful.rowReorder", function () {
                    r.draw(!1)
                }).one("submitSuccess.rowReorder", function () {
                    g()
                }).one("submitComplete", function () {
                    o.c.enable = !0, o.c.editor.off(".rowReorder")
                }).submit()) : g()
            },
            _shiftScroll: function (t) {
                var e, n, o = this,
                    r = (this.s.dt, this.s.scroll),
                    a = !1,
                    i = t.pageY - y.body.scrollTop;
                i < 65 ? e = -5 : i > r.windowHeight - 65 && (e = 5), null !== r.dtTop && t.pageY < r.dtTop + 65 ? n = -5 : null !== r.dtTop && t.pageY > r.dtTop + r.dtHeight - 65 && (n = 5), e || n ? (r.windowVert = e, r.dtVert = n, a = !0) : this.s.scrollInterval && (clearInterval(this.s.scrollInterval), this.s.scrollInterval = null), !this.s.scrollInterval && a && (this.s.scrollInterval = setInterval(function () {
                    if (r.windowVert && (y.body.scrollTop += r.windowVert), r.dtVert) {
                        var t = o.dom.dtScroll[0];
                        r.dtVert && (t.scrollTop += r.dtVert)
                    }
                }, 20))
            }
        }), l.defaults = {
            dataSrc: 0,
            editor: null,
            enable: !0,
            formOptions: {},
            selector: "td:first-child",
            snapX: !1,
            update: !0,
            excludedChildren: "a"
        };
        var e = v.fn.dataTable.Api;
        return e.register("rowReorder()", function () {
            return this
        }), e.register("rowReorder.enable()", function (e) {
            return e === t && (e = !0), this.iterator("table", function (t) {
                t.rowreorder && (t.rowreorder.c.enable = e)
            })
        }), e.register("rowReorder.disable()", function () {
            return this.iterator("table", function (t) {
                t.rowreorder && (t.rowreorder.c.enable = !1)
            })
        }), l.version = "1.2.5", v.fn.dataTable.RowReorder = l, v.fn.DataTable.RowReorder = l, v(y).on("init.dt.dtr", function (t, e, n) {
            if ("dt" === t.namespace) {
                var o = e.oInit.rowReorder,
                    r = i.defaults.rowReorder;
                if (o || r) {
                    var a = v.extend({}, o, r);
                    !1 !== o && new l(e, a)
                }
            }
        }), l
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-rowreorder"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net-bs4")(t, e).$), e.fn.dataTable.RowReorder || require("datatables.net-rowreorder")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (t, e, n, o) {
        return t.fn.dataTable
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (g, i, o, a) {
        "use strict";
        var s = g.fn.dataTable,
            l = function (t, e) {
                if (this instanceof l) {
                    e === a && (e = {});
                    var n = g.fn.dataTable.Api(t);
                    this.s = {
                        dt: n.settings()[0],
                        dtApi: n,
                        tableTop: 0,
                        tableBottom: 0,
                        redrawTop: 0,
                        redrawBottom: 0,
                        autoHeight: !0,
                        viewportRows: 0,
                        stateTO: null,
                        drawTO: null,
                        heights: {
                            jump: null,
                            page: null,
                            virtual: null,
                            scroll: null,
                            row: null,
                            viewport: null,
                            labelFactor: 1
                        },
                        topRowFloat: 0,
                        scrollDrawDiff: null,
                        loaderVisible: !1,
                        forceReposition: !1,
                        baseRowTop: 0,
                        baseScrollTop: 0,
                        mousedown: !1,
                        lastScrollTop: 0
                    }, this.s = g.extend(this.s, l.oDefaults, e), this.s.heights.row = this.s.rowHeight, this.dom = {
                        force: o.createElement("div"),
                        label: g('<div class="dts_label">0</div>'),
                        scroller: null,
                        table: null,
                        loader: null
                    }, this.s.dt.oScroller || (this.s.dt.oScroller = this).construct()
                } else alert("Scroller warning: Scroller must be initialised with the 'new' keyword.")
            };
        g.extend(l.prototype, {
            measure: function (t) {
                this.s.autoHeight && this._calcRowHeight();
                var e = this.s.heights;
                e.row && (e.viewport = g.contains(o, this.dom.scroller) ? this.dom.scroller.clientHeight : this._parseHeight(g(this.dom.scroller).css("height")), e.viewport || (e.viewport = this._parseHeight(g(this.dom.scroller).css("max-height"))), this.s.viewportRows = parseInt(e.viewport / e.row, 10) + 1, this.s.dt._iDisplayLength = this.s.viewportRows * this.s.displayBuffer);
                var n = this.dom.label.outerHeight();
                e.labelFactor = (e.viewport - n) / e.scroll, t !== a && !t || this.s.dt.oInstance.fnDraw(!1)
            },
            pageInfo: function () {
                var t = this.s.dt,
                    e = this.dom.scroller.scrollTop,
                    n = t.fnRecordsDisplay(),
                    o = Math.ceil(this.pixelsToRow(e + this.s.heights.viewport, !1, this.s.ani));
                return {
                    start: Math.floor(this.pixelsToRow(e, !1, this.s.ani)),
                    end: n < o ? n - 1 : o - 1
                }
            },
            pixelsToRow: function (t, e, n) {
                var o = t - this.s.baseScrollTop,
                    r = n ? (this._domain("physicalToVirtual", this.s.baseScrollTop) + o) / this.s.heights.row : o / this.s.heights.row + this.s.baseRowTop;
                return e || e === a ? parseInt(r, 10) : r
            },
            rowToPixels: function (t, e, n) {
                var o, r = t - this.s.baseRowTop;
                return o = n ? this._domain("virtualToPhysical", this.s.baseScrollTop) : this.s.baseScrollTop, o += r * this.s.heights.row, e || e === a ? parseInt(o, 10) : o
            },
            scrollToRow: function (t, e) {
                var n = this,
                    o = !1,
                    r = this.rowToPixels(t),
                    a = t - (this.s.displayBuffer - 1) / 2 * this.s.viewportRows;
                a < 0 && (a = 0), (r > this.s.redrawBottom || r < this.s.redrawTop) && this.s.dt._iDisplayStart !== a && (o = !0, r = this._domain("virtualToPhysical", t * this.s.heights.row), this.s.redrawTop < r && r < this.s.redrawBottom && (e = !(this.s.forceReposition = !0))), void 0 === e || e ? (this.s.ani = o, g(this.dom.scroller).animate({
                    scrollTop: r
                }, function () {
                    setTimeout(function () {
                        n.s.ani = !1
                    }, 25)
                })) : g(this.dom.scroller).scrollTop(r)
            },
            construct: function () {
                var o = this,
                    t = this.s.dtApi;
                if (this.s.dt.oFeatures.bPaginate) {
                    this.dom.force.style.position = "relative", this.dom.force.style.top = "0px", this.dom.force.style.left = "0px", this.dom.force.style.width = "1px", this.dom.scroller = g("div." + this.s.dt.oClasses.sScrollBody, this.s.dt.nTableWrapper)[0], this.dom.scroller.appendChild(this.dom.force), this.dom.scroller.style.position = "relative", this.dom.table = g(">table", this.dom.scroller)[0], this.dom.table.style.position = "absolute", this.dom.table.style.top = "0px", this.dom.table.style.left = "0px", g(t.table().container()).addClass("dts DTS"), this.s.loadingIndicator && (this.dom.loader = g('<div class="dataTables_processing dts_loading">' + this.s.dt.oLanguage.sLoadingRecords + "</div>").css("display", "none"), g(this.dom.scroller.parentNode).css("position", "relative").append(this.dom.loader)), this.dom.label.appendTo(this.dom.scroller), this.s.heights.row && "auto" != this.s.heights.row && (this.s.autoHeight = !1), this.measure(!1), this.s.ingnoreScroll = !0, this.s.stateSaveThrottle = this.s.dt.oApi._fnThrottle(function () {
                        o.s.dtApi.state.save()
                    }, 500), g(this.dom.scroller).on("scroll.dt-scroller", function (t) {
                        o._scroll.call(o)
                    }), g(this.dom.scroller).on("touchstart.dt-scroller", function () {
                        o._scroll.call(o)
                    }), g(this.dom.scroller).on("mousedown.dt-scroller", function () {
                        o.s.mousedown = !0
                    }).on("mouseup.dt-scroller", function () {
                        o.s.mouseup = !1, o.dom.label.css("display", "none")
                    }), g(i).on("resize.dt-scroller", function () {
                        o.measure(!1), o._info()
                    });
                    var r = !0,
                        a = t.state.loaded();
                    t.on("stateSaveParams.scroller", function (t, e, n) {
                        n.scroller = {
                            topRow: r && a && a.scroller ? a.scroller.topRow : o.s.topRowFloat,
                            baseScrollTop: o.s.baseScrollTop,
                            baseRowTop: o.s.baseRowTop
                        }, r = !1
                    }), a && a.scroller && (this.s.topRowFloat = a.scroller.topRow, this.s.baseScrollTop = a.scroller.baseScrollTop, this.s.baseRowTop = a.scroller.baseRowTop), t.on("init.scroller", function () {
                        o.measure(!1), o._draw(), t.on("draw.scroller", function () {
                            o._draw()
                        })
                    }), t.on("preDraw.dt.scroller", function () {
                        o._scrollForce()
                    }), t.on("destroy.scroller", function () {
                        g(i).off("resize.dt-scroller"), g(o.dom.scroller).off(".dt-scroller"), g(o.s.dt.nTable).off(".scroller"), g(o.s.dt.nTableWrapper).removeClass("DTS"), g("div.DTS_Loading", o.dom.scroller.parentNode).remove(), o.dom.table.style.position = "", o.dom.table.style.top = "", o.dom.table.style.left = ""
                    })
                } else this.s.dt.oApi._fnLog(this.s.dt, 0, "Pagination must be enabled for Scroller")
            },
            _calcRowHeight: function () {
                var t = this.s.dt,
                    e = t.nTable,
                    n = e.cloneNode(!1),
                    o = g("<tbody/>").appendTo(n),
                    r = g('<div class="' + t.oClasses.sWrapper + ' DTS"><div class="' + t.oClasses.sScrollWrapper + '"><div class="' + t.oClasses.sScrollBody + '"></div></div></div>');
                g("tbody tr:lt(4)", e).clone().appendTo(o);
                var a = g("tr", o).length;
                if (1 === a) o.prepend("<tr><td>&#160;</td></tr>"), o.append("<tr><td>&#160;</td></tr>");
                else
                    for (; a < 3; a++) o.append("<tr><td>&#160;</td></tr>");
                g("div." + t.oClasses.sScrollBody, r).append(n);
                var i = this.s.dt.nHolding || e.parentNode;
                g(i).is(":visible") || (i = "body"), r.appendTo(i), this.s.heights.row = g("tr", o).eq(1).outerHeight(), r.remove()
            },
            _draw: function () {
                var t = this,
                    e = this.s.heights,
                    n = this.dom.scroller.scrollTop,
                    o = (e.viewport, g(this.s.dt.nTable).height()),
                    r = this.s.dt._iDisplayStart,
                    a = this.s.dt._iDisplayLength,
                    i = this.s.dt.fnRecordsDisplay();
                this.s.skip = !0, !this.s.dt.bSorted && !this.s.dt.bFiltered || 0 !== r || this.s.dt._drawHold || (this.s.topRowFloat = 0), n = "jump" === this.scrollType ? this._domain("physicalToVirtual", this.s.topRowFloat * e.row) : n, g(t.dom.scroller).scrollTop(n), this.s.baseScrollTop = n, this.s.baseRowTop = this.s.topRowFloat;
                var s = n - (this.s.topRowFloat - r) * e.row;
                0 === r ? s = 0 : i <= r + a && (s = e.scroll - o), this.dom.table.style.top = s + "px", this.s.tableTop = s, this.s.tableBottom = o + this.s.tableTop;
                var l = (n - this.s.tableTop) * this.s.boundaryScale;
                if (this.s.redrawTop = n - l, this.s.redrawBottom = n + l > e.scroll - e.viewport - e.row ? e.scroll - e.viewport - e.row : n + l, this.s.skip = !1, this.s.dt.oFeatures.bStateSave && null !== this.s.dt.oLoadedState && void 0 !== this.s.dt.oLoadedState.iScroller) {
                    var d = !(!this.s.dt.sAjaxSource && !t.s.dt.ajax || this.s.dt.oFeatures.bServerSide);
                    (d && 2 == this.s.dt.iDraw || !d && 1 == this.s.dt.iDraw) && setTimeout(function () {
                        g(t.dom.scroller).scrollTop(t.s.dt.oLoadedState.iScroller), t.s.redrawTop = t.s.dt.oLoadedState.iScroller - e.viewport / 2, setTimeout(function () {
                            t.s.ingnoreScroll = !1
                        }, 0)
                    }, 0)
                } else t.s.ingnoreScroll = !1;
                this.s.dt.oFeatures.bInfo && setTimeout(function () {
                    t._info.call(t)
                }, 0), this.dom.loader && this.s.loaderVisible && (this.dom.loader.css("display", "none"), this.s.loaderVisible = !1)
            },
            _domain: function (t, e) {
                var n, o = this.s.heights;
                if (o.virtual === o.scroll) return e;
                if (e < 1e4) return e;
                if ("virtualToPhysical" === t && e > o.virtual - 1e4) return n = o.virtual - e, o.scroll - n;
                if ("physicalToVirtual" === t && e > o.scroll - 1e4) return n = o.scroll - e, o.virtual - n;
                var r = "virtualToPhysical" === t ? o.virtual : o.scroll,
                    a = (("virtualToPhysical" === t ? o.scroll : o.virtual) - 1e4) / (r - 1e4);
                return a * e + (1e4 - 1e4 * a)
            },
            _info: function () {
                if (this.s.dt.oFeatures.bInfo) {
                    var t, e = this.s.dt,
                        n = e.oLanguage,
                        o = this.dom.scroller.scrollTop,
                        r = Math.floor(this.pixelsToRow(o, !1, this.s.ani) + 1),
                        a = e.fnRecordsTotal(),
                        i = e.fnRecordsDisplay(),
                        s = Math.ceil(this.pixelsToRow(o + this.s.heights.viewport, !1, this.s.ani)),
                        l = i < s ? i : s,
                        d = e.fnFormatNumber(r),
                        c = e.fnFormatNumber(l),
                        u = e.fnFormatNumber(a),
                        f = e.fnFormatNumber(i);
                    t = 0 === e.fnRecordsDisplay() && e.fnRecordsDisplay() == e.fnRecordsTotal() ? n.sInfoEmpty + n.sInfoPostFix : 0 === e.fnRecordsDisplay() ? n.sInfoEmpty + " " + n.sInfoFiltered.replace("_MAX_", u) + n.sInfoPostFix : e.fnRecordsDisplay() == e.fnRecordsTotal() ? n.sInfo.replace("_START_", d).replace("_END_", c).replace("_MAX_", u).replace("_TOTAL_", f) + n.sInfoPostFix : n.sInfo.replace("_START_", d).replace("_END_", c).replace("_MAX_", u).replace("_TOTAL_", f) + " " + n.sInfoFiltered.replace("_MAX_", e.fnFormatNumber(e.fnRecordsTotal())) + n.sInfoPostFix;
                    var h = n.fnInfoCallback;
                    h && (t = h.call(e.oInstance, e, r, l, a, i, t));
                    var p = e.aanFeatures.i;
                    if (void 0 !== p)
                        for (var m = 0, b = p.length; m < b; m++) g(p[m]).html(t);
                    g(e.nTable).triggerHandler("info.dt")
                }
            },
            _parseHeight: function (t) {
                var e, n = /^([+-]?(?:\d+(?:\.\d+)?|\.\d+))(px|em|rem|vh)$/.exec(t);
                if (null === n) return 0;
                var o = parseFloat(n[1]),
                    r = n[2];
                return "px" === r ? e = o : "vh" === r ? e = o / 100 * g(i).height() : "rem" === r ? e = o * parseFloat(g(":root").css("font-size")) : "em" === r && (e = o * parseFloat(g("body").css("font-size"))), e || 0
            },
            _scroll: function () {
                var t, e = this,
                    n = this.s.heights,
                    o = this.dom.scroller.scrollTop;
                if (!this.s.skip && !this.s.ingnoreScroll && o !== this.s.lastScrollTop)
                    if (this.s.dt.bFiltered || this.s.dt.bSorted) this.s.lastScrollTop = 0;
                    else {
                        if (this._info(), clearTimeout(this.s.stateTO), this.s.stateTO = setTimeout(function () {
                            e.s.dtApi.state.save()
                        }, 250), this.s.scrollType = Math.abs(o - this.s.lastScrollTop) > n.viewport ? "jump" : "cont", this.s.topRowFloat = "cont" === this.s.scrollType ? this.pixelsToRow(o, !1, !1) : this._domain("physicalToVirtual", o) / n.row, this.s.topRowFloat < 0 && (this.s.topRowFloat = 0), this.s.forceReposition || o < this.s.redrawTop || o > this.s.redrawBottom) {
                            var r = Math.ceil((this.s.displayBuffer - 1) / 2 * this.s.viewportRows);
                            if (t = parseInt(this.s.topRowFloat, 10) - r, this.s.forceReposition = !1, t <= 0 ? t = 0 : t + this.s.dt._iDisplayLength > this.s.dt.fnRecordsDisplay() ? (t = this.s.dt.fnRecordsDisplay() - this.s.dt._iDisplayLength) < 0 && (t = 0) : t % 2 != 0 && t++ , t != this.s.dt._iDisplayStart) {
                                this.s.tableTop = g(this.s.dt.nTable).offset().top, this.s.tableBottom = g(this.s.dt.nTable).height() + this.s.tableTop;
                                var a = function () {
                                    null === e.s.scrollDrawReq && (e.s.scrollDrawReq = o), e.s.dt._iDisplayStart = t, e.s.dt.oApi._fnDraw(e.s.dt)
                                };
                                this.s.dt.oFeatures.bServerSide ? (clearTimeout(this.s.drawTO), this.s.drawTO = setTimeout(a, this.s.serverWait)) : a(), this.dom.loader && !this.s.loaderVisible && (this.dom.loader.css("display", "block"), this.s.loaderVisible = !0)
                            }
                        } else this.s.topRowFloat = this.pixelsToRow(o, !1, !0);
                        this.s.lastScrollTop = o, this.s.stateSaveThrottle(), "jump" === this.s.scrollType && this.s.mousedown && this.dom.label.html(this.s.dt.fnFormatNumber(parseInt(this.s.topRowFloat, 10) + 1)).css("top", o + o * n.labelFactor).css("display", "block")
                    }
            },
            _scrollForce: function () {
                var t = this.s.heights;
                t.virtual = t.row * this.s.dt.fnRecordsDisplay(), t.scroll = t.virtual, 1e6 < t.scroll && (t.scroll = 1e6), this.dom.force.style.height = t.scroll > this.s.heights.row ? t.scroll + "px" : this.s.heights.row + "px"
            }
        }), l.defaults = {
            boundaryScale: .5,
            displayBuffer: 9,
            loadingIndicator: !1,
            rowHeight: "auto",
            serverWait: 200
        }, l.oDefaults = l.defaults, l.version = "2.0.0", g(o).on("preInit.dt.dtscroller", function (t, e) {
            if ("dt" === t.namespace) {
                var n = e.oInit.scroller,
                    o = s.defaults.scroller;
                if (n || o) {
                    var r = g.extend({}, n, o);
                    !1 !== n && new l(e, r)
                }
            }
        }), g.fn.dataTable.Scroller = l, g.fn.DataTable.Scroller = l;
        var t = g.fn.dataTable.Api;
        return t.register("scroller()", function () {
            return this
        }), t.register("scroller().rowToPixels()", function (t, e, n) {
            var o = this.context;
            if (o.length && o[0].oScroller) return o[0].oScroller.rowToPixels(t, e, n)
        }), t.register("scroller().pixelsToRow()", function (t, e, n) {
            var o = this.context;
            if (o.length && o[0].oScroller) return o[0].oScroller.pixelsToRow(t, e, n)
        }), t.register(["scroller().scrollToRow()", "scroller.toPosition()"], function (e, n) {
            return this.iterator("table", function (t) {
                t.oScroller && t.oScroller.scrollToRow(e, n)
            }), this
        }), t.register("row().scrollTo()", function (o) {
            var r = this;
            return this.iterator("row", function (t, e) {
                if (t.oScroller) {
                    var n = r.rows({
                        order: "applied",
                        search: "applied"
                    }).indexes().indexOf(e);
                    t.oScroller.scrollToRow(n, o)
                }
            }), this
        }), t.register("scroller.measure()", function (e) {
            return this.iterator("table", function (t) {
                t.oScroller && t.oScroller.measure(e)
            }), this
        }), t.register("scroller.page()", function () {
            var t = this.context;
            if (t.length && t[0].oScroller) return t[0].oScroller.pageInfo()
        }), l
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-scroller"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net-bs4")(t, e).$), e.fn.dataTable.Scroller || require("datatables.net-scroller")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (t, e, n, o) {
        return t.fn.dataTable
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (f, u, t, h) {
        "use strict";
        var p = f.fn.dataTable;

        function l(a, t, e) {
            function n(e, n) {
                if (n < e) {
                    var t = n;
                    n = e, e = t
                }
                var o = !1;
                return a.columns(":visible").indexes().filter(function (t) {
                    return t === e && (o = !0), t === n ? !(o = !1) : o
                })
            }

            function o(e, n) {
                var t = a.rows({
                    search: "applied"
                }).indexes();
                if (t.indexOf(e) > t.indexOf(n)) {
                    var o = n;
                    n = e, e = o
                }
                var r = !1;
                return t.filter(function (t) {
                    return t === e && (r = !0), t === n ? !(r = !1) : r
                })
            }
            var r, i, s;
            s = a.cells({
                selected: !0
            }).any() || e ? (i = n(e.column, t.column), o(e.row, t.row)) : (i = n(0, t.column), o(0, t.row)), r = a.cells(s, i).flatten(), a.cells(t, {
                selected: !0
            }).any() ? a.cells(r).deselect() : a.cells(r).select()
        }

        function o(t) {
            var e = t.settings()[0]._select.selector;
            f(t.table().container()).off("mousedown.dtSelect", e).off("mouseup.dtSelect", e).off("click.dtSelect", e), f("body").off("click.dtSelect" + t.table().node().id)
        }

        function r(d) {
            var c, e = f(d.table().container()),
                n = d.settings()[0],
                o = n._select.selector;
            e.on("mousedown.dtSelect", o, function (t) {
                (t.shiftKey || t.metaKey || t.ctrlKey) && e.css("-moz-user-select", "none").one("selectstart.dtSelect", o, function () {
                    return !1
                }), u.getSelection && (c = u.getSelection())
            }).on("mouseup.dtSelect", o, function () {
                e.css("-moz-user-select", "")
            }).on("click.dtSelect", o, function (t) {
                var e, n = d.select.items();
                if (c) {
                    var o = u.getSelection();
                    if ((!o.anchorNode || f(o.anchorNode).closest("table")[0] === d.table().node()) && o !== c) return
                }
                var r = d.settings()[0],
                    a = f.trim(d.settings()[0].oClasses.sWrapper).replace(/ +/g, ".");
                if (f(t.target).closest("div." + a)[0] == d.table().container()) {
                    var i = d.cell(f(t.target).closest("td, th"));
                    if (i.any()) {
                        var s = f.Event("user-select.dt");
                        if (m(d, s, [n, i, t]), !s.isDefaultPrevented()) {
                            var l = i.index();
                            "row" === n ? (e = l.row, b(t, d, r, "row", e)) : "column" === n ? (e = i.index().column, b(t, d, r, "column", e)) : "cell" === n && (e = i.index(), b(t, d, r, "cell", e)), r._select_lastCell = l
                        }
                    }
                }
            }), f("body").on("click.dtSelect" + d.table().node().id, function (t) {
                if (n._select.blurable) {
                    if (f(t.target).parents().filter(d.table().container()).length) return;
                    if (0 === f(t.target).parents("html").length) return;
                    if (f(t.target).parents("div.DTE").length) return;
                    i(n, !0)
                }
            })
        }

        function m(t, e, n, o) {
            o && !t.flatten().length || ("string" == typeof e && (e += ".dt"), n.unshift(t), f(t.table().node()).trigger(e, n))
        }

        function a(o) {
            var t = o.settings()[0];
            if (t._select.info && t.aanFeatures.i && "api" !== o.select.style()) {
                var r = o.rows({
                    selected: !0
                }).flatten().length,
                    a = o.columns({
                        selected: !0
                    }).flatten().length,
                    i = o.cells({
                        selected: !0
                    }).flatten().length,
                    s = function (t, e, n) {
                        t.append(f('<span class="select-item"/>').append(o.i18n("select." + e + "s", {
                            _: "%d " + e + "s selected",
                            0: "",
                            1: "1 " + e + " selected"
                        }, n)))
                    };
                f.each(t.aanFeatures.i, function (t, e) {
                    e = f(e);
                    var n = f('<span class="select-info"/>');
                    s(n, "row", r), s(n, "column", a), s(n, "cell", i);
                    var o = e.children("span.select-info");
                    o.length && o.remove(), "" !== n.text() && e.append(n)
                })
            }
        }

        function d(t, e, n, o) {
            var r = t[e + "s"]({
                search: "applied"
            }).indexes(),
                a = f.inArray(o, r),
                i = f.inArray(n, r);
            if (t[e + "s"]({
                selected: !0
            }).any() || -1 !== a) {
                if (i < a) {
                    var s = i;
                    i = a, a = s
                }
                r.splice(i + 1, r.length), r.splice(0, a)
            } else r.splice(f.inArray(n, r) + 1, r.length);
            t[e](n, {
                selected: !0
            }).any() ? (r.splice(f.inArray(n, r), 1), t[e + "s"](r).deselect()) : t[e + "s"](r).select()
        }

        function i(t, e) {
            if (e || "single" === t._select.style) {
                var n = new p.Api(t);
                n.rows({
                    selected: !0
                }).deselect(), n.columns({
                    selected: !0
                }).deselect(), n.cells({
                    selected: !0
                }).deselect()
            }
        }

        function b(t, e, n, o, r) {
            var a = e.select.style(),
                i = e[o](r, {
                    selected: !0
                }).any();
            if ("os" === a)
                if (t.ctrlKey || t.metaKey) e[o](r).select(!i);
                else if (t.shiftKey) "cell" === o ? l(e, r, n._select_lastCell || null) : d(e, o, r, n._select_lastCell ? n._select_lastCell[o] : null);
                else {
                    var s = e[o + "s"]({
                        selected: !0
                    });
                    i && 1 === s.flatten().length ? e[o](r).deselect() : (s.deselect(), e[o](r).select())
                } else "multi+shift" == a && t.shiftKey ? "cell" === o ? l(e, r, n._select_lastCell || null) : d(e, o, r, n._select_lastCell ? n._select_lastCell[o] : null) : e[o](r).select(!i)
        }
        p.select = {}, p.select.version = "1.3.0", p.select.init = function (t) {
            var e = t.settings()[0],
                n = e.oInit.select,
                o = p.defaults.select,
                r = n === h ? o : n,
                a = "row",
                i = "api",
                s = !1,
                l = !0,
                d = "td, th",
                c = "selected",
                u = !1;
            e._select = {}, !0 === r ? (i = "os", u = !0) : "string" == typeof r ? (i = r, u = !0) : f.isPlainObject(r) && (r.blurable !== h && (s = r.blurable), r.info !== h && (l = r.info), r.items !== h && (a = r.items), u = (i = r.style !== h ? r.style : "os", !0), r.selector !== h && (d = r.selector), r.className !== h && (c = r.className)), t.select.selector(d), t.select.items(a), t.select.style(i), t.select.blurable(s), t.select.info(l), e._select.className = c, f.fn.dataTable.ext.order["select-checkbox"] = function (e, t) {
                return this.api().column(t, {
                    order: "index"
                }).nodes().map(function (t) {
                    return "row" === e._select.items ? f(t).parent().hasClass(e._select.className) : "cell" === e._select.items && f(t).hasClass(e._select.className)
                })
            }, !u && f(t.table().node()).hasClass("selectable") && t.select.style("os")
        }, f.each([{
            type: "row",
            prop: "aoData"
        }, {
            type: "column",
            prop: "aoColumns"
        }], function (t, l) {
            p.ext.selector[l.type].push(function (t, e, n) {
                var o, r = e.selected,
                    a = [];
                if (!0 !== r && !1 !== r) return n;
                for (var i = 0, s = n.length; i < s; i++) o = t[l.prop][n[i]], (!0 === r && !0 === o._select_selected || !1 === r && !o._select_selected) && a.push(n[i]);
                return a
            })
        }), p.ext.selector.cell.push(function (t, e, n) {
            var o, r = e.selected,
                a = [];
            if (r === h) return n;
            for (var i = 0, s = n.length; i < s; i++) o = t.aoData[n[i].row], (!0 !== r || !o._selected_cells || !0 !== o._selected_cells[n[i].column]) && (!1 !== r || o._selected_cells && o._selected_cells[n[i].column]) || a.push(n[i]);
            return a
        });
        var e = p.Api.register,
            n = p.Api.registerPlural;

        function s(e, n) {
            return function (t) {
                return t.i18n("buttons." + e, n)
            }
        }

        function c(t) {
            var e = t._eventNamespace;
            return "draw.dt.DT" + e + " select.dt.DT" + e + " deselect.dt.DT" + e
        }
        e("select()", function () {
            return this.iterator("table", function (t) {
                p.select.init(new p.Api(t))
            })
        }), e("select.blurable()", function (e) {
            return e === h ? this.context[0]._select.blurable : this.iterator("table", function (t) {
                t._select.blurable = e
            })
        }), e("select.info()", function (e) {
            return a === h ? this.context[0]._select.info : this.iterator("table", function (t) {
                t._select.info = e
            })
        }), e("select.items()", function (e) {
            return e === h ? this.context[0]._select.items : this.iterator("table", function (t) {
                t._select.items = e, m(new p.Api(t), "selectItems", [e])
            })
        }), e("select.style()", function (n) {
            return n === h ? this.context[0]._select.style : this.iterator("table", function (t) {
                t._select.style = n, t._select_init || function (i) {
                    var n = new p.Api(i);
                    i.aoRowCreatedCallback.push({
                        fn: function (t, e, n) {
                            var o, r, a = i.aoData[n];
                            for (a._select_selected && f(t).addClass(i._select.className), o = 0, r = i.aoColumns.length; o < r; o++)(i.aoColumns[o]._select_selected || a._selected_cells && a._selected_cells[o]) && f(a.anCells[o]).addClass(i._select.className)
                        },
                        sName: "select-deferRender"
                    }), n.on("preXhr.dt.dtSelect", function () {
                        var t = n.rows({
                            selected: !0
                        }).ids(!0).filter(function (t) {
                            return t !== h
                        }),
                            e = n.cells({
                                selected: !0
                            }).eq(0).map(function (t) {
                                var e = n.row(t.row).id(!0);
                                return e ? {
                                    row: e,
                                    column: t.column
                                } : h
                            }).filter(function (t) {
                                return t !== h
                            });
                        n.one("draw.dt.dtSelect", function () {
                            n.rows(t).select(), e.any() && e.each(function (t) {
                                n.cells(t.row, t.column).select()
                            })
                        })
                    }), n.on("draw.dtSelect.dt select.dtSelect.dt deselect.dtSelect.dt info.dt", function () {
                        a(n)
                    }), n.on("destroy.dtSelect", function () {
                        o(n), n.off(".dtSelect")
                    })
                }(t);
                var e = new p.Api(t);
                o(e), "api" !== n && r(e), m(new p.Api(t), "selectStyle", [n])
            })
        }), e("select.selector()", function (e) {
            return e === h ? this.context[0]._select.selector : this.iterator("table", function (t) {
                o(new p.Api(t)), t._select.selector = e, "api" !== t._select.style && r(new p.Api(t))
            })
        }), n("rows().select()", "row().select()", function (t) {
            var n = this;
            return !1 === t ? this.deselect() : (this.iterator("row", function (t, e) {
                i(t), t.aoData[e]._select_selected = !0, f(t.aoData[e].nTr).addClass(t._select.className)
            }), this.iterator("table", function (t, e) {
                m(n, "select", ["row", n[e]], !0)
            }), this)
        }), n("columns().select()", "column().select()", function (t) {
            var n = this;
            return !1 === t ? this.deselect() : (this.iterator("column", function (t, e) {
                i(t), t.aoColumns[e]._select_selected = !0;
                var n = new p.Api(t).column(e);
                f(n.header()).addClass(t._select.className), f(n.footer()).addClass(t._select.className), n.nodes().to$().addClass(t._select.className)
            }), this.iterator("table", function (t, e) {
                m(n, "select", ["column", n[e]], !0)
            }), this)
        }), n("cells().select()", "cell().select()", function (t) {
            var n = this;
            return !1 === t ? this.deselect() : (this.iterator("cell", function (t, e, n) {
                i(t);
                var o = t.aoData[e];
                o._selected_cells === h && (o._selected_cells = []), o._selected_cells[n] = !0, o.anCells && f(o.anCells[n]).addClass(t._select.className)
            }), this.iterator("table", function (t, e) {
                m(n, "select", ["cell", n[e]], !0)
            }), this)
        }), n("rows().deselect()", "row().deselect()", function () {
            var n = this;
            return this.iterator("row", function (t, e) {
                t.aoData[e]._select_selected = !1, f(t.aoData[e].nTr).removeClass(t._select.className)
            }), this.iterator("table", function (t, e) {
                m(n, "deselect", ["row", n[e]], !0)
            }), this
        }), n("columns().deselect()", "column().deselect()", function () {
            var n = this;
            return this.iterator("column", function (o, t) {
                o.aoColumns[t]._select_selected = !1;
                var e = new p.Api(o),
                    n = e.column(t);
                f(n.header()).removeClass(o._select.className), f(n.footer()).removeClass(o._select.className), e.cells(null, t).indexes().each(function (t) {
                    var e = o.aoData[t.row],
                        n = e._selected_cells;
                    !e.anCells || n && n[t.column] || f(e.anCells[t.column]).removeClass(o._select.className)
                })
            }), this.iterator("table", function (t, e) {
                m(n, "deselect", ["column", n[e]], !0)
            }), this
        }), n("cells().deselect()", "cell().deselect()", function () {
            var n = this;
            return this.iterator("cell", function (t, e, n) {
                var o = t.aoData[e];
                o._selected_cells[n] = !1, o.anCells && !t.aoColumns[n]._select_selected && f(o.anCells[n]).removeClass(t._select.className)
            }), this.iterator("table", function (t, e) {
                m(n, "deselect", ["cell", n[e]], !0)
            }), this
        });
        var g = 0;
        return f.extend(p.ext.buttons, {
            selected: {
                text: s("selected", "Selected"),
                className: "buttons-selected",
                limitTo: ["rows", "columns", "cells"],
                init: function (t, e, n) {
                    var o = this;
                    n._eventNamespace = ".select" + g++ , t.on(c(n), function () {
                        o.enable(function (t, e) {
                            return !(-1 === f.inArray("rows", e.limitTo) || !t.rows({
                                selected: !0
                            }).any()) || (!(-1 === f.inArray("columns", e.limitTo) || !t.columns({
                                selected: !0
                            }).any()) || !(-1 === f.inArray("cells", e.limitTo) || !t.cells({
                                selected: !0
                            }).any()))
                        }(t, n))
                    }), this.disable()
                },
                destroy: function (t, e, n) {
                    t.off(n._eventNamespace)
                }
            },
            selectedSingle: {
                text: s("selectedSingle", "Selected single"),
                className: "buttons-selected-single",
                init: function (e, t, n) {
                    var o = this;
                    n._eventNamespace = ".select" + g++ , e.on(c(n), function () {
                        var t = e.rows({
                            selected: !0
                        }).flatten().length + e.columns({
                            selected: !0
                        }).flatten().length + e.cells({
                            selected: !0
                        }).flatten().length;
                        o.enable(1 === t)
                    }), this.disable()
                },
                destroy: function (t, e, n) {
                    t.off(n._eventNamespace)
                }
            },
            selectAll: {
                text: s("selectAll", "Select all"),
                className: "buttons-select-all",
                action: function () {
                    var t = this.select.items();
                    this[t + "s"]().select()
                }
            },
            selectNone: {
                text: s("selectNone", "Deselect all"),
                className: "buttons-select-none",
                action: function () {
                    i(this.settings()[0], !0)
                },
                init: function (e, t, n) {
                    var o = this;
                    n._eventNamespace = ".select" + g++ , e.on(c(n), function () {
                        var t = e.rows({
                            selected: !0
                        }).flatten().length + e.columns({
                            selected: !0
                        }).flatten().length + e.cells({
                            selected: !0
                        }).flatten().length;
                        o.enable(0 < t)
                    }), this.disable()
                },
                destroy: function (t, e, n) {
                    t.off(n._eventNamespace)
                }
            }
        }), f.each(["Row", "Column", "Cell"], function (t, e) {
            var r = e.toLowerCase();
            p.ext.buttons["select" + e + "s"] = {
                text: s("select" + e + "s", "Select " + r + "s"),
                className: "buttons-select-" + r + "s",
                action: function () {
                    this.select.items(r)
                },
                init: function (t) {
                    var o = this;
                    t.on("selectItems.dt.DT", function (t, e, n) {
                        o.active(n === r)
                    })
                }
            }
        }), f(t).on("preInit.dt.dtSelect", function (t, e) {
            "dt" === t.namespace && p.select.init(new p.Api(e))
        }), p.select
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net-bs4", "datatables.net-select"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net-bs4")(t, e).$), e.fn.dataTable.select || require("datatables.net-select")(t, e), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (t, e, n, o) {
        return t.fn.dataTable
    }),
    function (n) {
        "function" == typeof define && define.amd ? define(["jquery", "datatables.net"], function (t) {
            return n(t, window, document)
        }) : "object" == typeof exports ? module.exports = function (t, e) {
            return t = t || window, e && e.fn.dataTable || (e = require("datatables.net")(t, e).$), n(e, t, t.document)
        } : n(jQuery, window, document)
    }(function (c, t, n, e) {
        "use strict";
        var i = c.fn.dataTable,
            o = 0,
            s = function (t, e) {
                if (!i.versionCheck || !i.versionCheck("1.10.8")) throw "Warning: altEditor requires DataTables 1.10.8 or greater";
                this.c = c.extend(!0, {}, i.defaults.altEditor, s.defaults, e), this.s = {
                    dt: new i.Api(t),
                    namespace: ".altEditor" + o++
                }, this.dom = {
                    modal: c('<div class="dt-altEditor-handle"/>')
                }, this._constructor()
            };
        return c.extend(s.prototype, {
            _constructor: function () {
                var t = this,
                    e = this.s.dt;
                e.settings()[0].oInit.onAddRow && (t.onAddRow = e.settings()[0].oInit.onAddRow), e.settings()[0].oInit.onDeleteRow && (t.onDeleteRow = e.settings()[0].oInit.onDeleteRow), e.settings()[0].oInit.onEditRow && (t.onEditRow = e.settings()[0].oInit.onEditRow), this._setup(), e.on("destroy.altEditor", function () {
                    e.off(".altEditor"), c(e.table().body()).off(t.s.namespace), c(n.body).off(t.s.namespace)
                })
            },
            _setup: function () {
                var r = this,
                    t = this.s.dt,
                    e = "altEditor-modal-" + ("" + Math.random()).replace(".", "");
                this.modal_selector = "#" + e;
                var n = '<div class="modal fade" id="' + e + '" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 class="modal-title"></h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true"><i class="fal fa-times"></i></span></button></div><div class="modal-body"><p></p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button><input type="submit" form="altEditor-form" class="btn btn-primary"></input></div></div></div></div>';
                c("body").append(n), t.button("edit:name") && (t.button("edit:name").action(function (t, e, n, o) {
                    r._openEditModal()
                }), c(this.modal_selector).on("click", "#editRowBtn", function (t) {
                    r._inputValidation() && (t.preventDefault(), t.stopPropagation(), r._editRowData())
                })), t.button("delete:name") && (t.button("delete:name").action(function (t, e, n, o) {
                    r._openDeleteModal()
                }), c(this.modal_selector).on("click", "#deleteRowBtn", function (t) {
                    t.preventDefault(), t.stopPropagation(), r._deleteRow(), c(this).prop("disabled", !0)
                })), t.button("add:name") && (t.button("add:name").action(function (t, e, n, o) {
                    r._openAddModal()
                }), c(this.modal_selector).on("click", "#addRowBtn", function (t) {
                    r._inputValidation() && (t.preventDefault(), t.stopPropagation(), r._addRowData())
                })), this.s.dt.button("refresh:name") && this.s.dt.button("refresh:name").action(function (t, e, n, o) {
                    e.ajax && e.ajax.url() && e.ajax.reload()
                })
            },
            _emitEvent: function (n, o) {
                this.s.dt.iterator("table", function (t, e) {
                    c(t.nTable).triggerHandler(n + ".dt", o)
                })
            },
            _openEditModal: function () {
                var t = this,
                    e = this.s.dt,
                    n = [];
                for (var o in e.context[0].aoColumns) {
                    var r = e.context[0].aoColumns[o];
                    n[o] = {
                        title: r.sTitle,
                        name: r.data ? r.data : r.mData,
                        type: r.type ? r.type : "text",
                        options: r.options ? r.options : [],
                        msg: r.errorMsg ? r.errorMsg : "",
                        hoverMsg: r.hoverMsg ? r.hoverMsg : "",
                        pattern: r.pattern ? r.pattern : ".*",
                        special: r.special ? r.special : "",
                        unique: !!r.unique && r.unique,
                        uniqueMsg: r.uniqueMsg ? r.uniqueMsg : "",
                        placeholderMsg: r.placeholderMsg ? r.placeholderMsg : "",
                        maxLength: !!r.maxLength && r.maxLength,
                        multiple: !!r.multiple && r.multiple,
                        select2: !!r.select2 && r.select2,
                        datepicker: !!r.datepicker && r.datepicker
                    }
                }
                var a = e.rows({
                    selected: !0
                }),
                    i = "";
                for (var s in i += "<form name='altEditor-form' role='form' novalidate>", n)
                    if (0 <= n[s].type.indexOf("hidden")) i += "<input type='hidden' id='" + n[s].name + "' value='" + a.data()[0][n[s].name] + "'></input>";
                    else {
                        if (i += "<div class='form-group row'>", i += "<label for='" + n[s].name + "' class='col-lg-3 col-form-label form-label text-left text-lg-right'>" + n[s].title + ":</label>", i += "<div class='col-lg-9'>", (0 <= n[s].type.indexOf("text") || 0 <= n[s].type.indexOf("date") || 0 <= n[s].type.indexOf("email") || 0 <= n[s].type.indexOf("password") || 0 <= n[s].type.indexOf("number") || 0 <= n[s].type.indexOf("time")) && (i += "<input type='" + t._quoteattr(n[s].type) + "' id='" + t._quoteattr(n[s].name) + "'  pattern='" + t._quoteattr(n[s].pattern) + "'  title='" + t._quoteattr(n[s].hoverMsg) + "' name='" + t._quoteattr(n[s].title) + "' placeholder='" + t._quoteattr(n[s].placeholderMsg) + "' data-special='" + t._quoteattr(n[s].special) + "' data-errorMsg='" + t._quoteattr(n[s].msg) + "' data-uniqueMsg='" + t._quoteattr(n[s].uniqueMsg) + "' data-unique='" + n[s].unique + "'" + (0 == n[s].maxLength ? "" : " maxlength='" + n[s].maxLength + "'") + " style='overflow:hidden' class='form-control' value='" + t._quoteattr(a.data()[0][n[s].name]) + "'>", i += "<label id='" + n[s].name + "label' class='errorLabel help-block text-danger' style='display: none'></label>"), 0 <= n[s].type.indexOf("readonly") && (i += "<input type='text' readonly  id='" + n[s].name + "' name='" + n[s].title + "' placeholder='" + n[s].placeholderMsg + "' style='overflow:hidden' class='form-control' value='" + a.data()[0][n[s].name] + "'>"), 0 <= n[s].type.indexOf("select")) {
                            var l = "";
                            for (o = 0; o < n[s].options.length; o++) 0 <= a.data()[0][n[s].name].indexOf(n[s].options[o]) ? l += "<option value='" + n[s].options[o] + "'selected>" + n[s].options[o] + "</option>" : l += "<option value='" + n[s].options[o] + "'>" + n[s].options[o] + "</option>";
                            i += "<select class='custom-select form-control" + (n[s].select2 ? " select2" : "") + "' id='" + n[s].name + "' name='" + n[s].title + "' " + (n[s].multiple ? "multiple" : "") + ">" + l + "</select>"
                        }
                        i += "</div><div style='clear:both;'></div></div>"
                    } i += "</form>";
                var d = this.modal_selector;
                for (var s in c(d).on("show.bs.modal", function () {
                    c(d).find(".modal-title").html("Edit Record"), c(d).find(".modal-body").html(i), c(d).find(".modal-footer").html('<button type="button" data-content="remove" class="btn btn-default" data-dismiss="modal">Cancel</button><button type="button" data-content="remove" class="btn btn-primary" id="editRowBtn">Save</button>')
                }), c(d).modal("show"), c(d + " input[0]").focus(), n) n[s].select2 && c(d).find("select#" + n[s].name).select2(n[s].select2);
                for (var s in n) n[s].datepicker && c(d).find("#" + n[s].name).datepicker(n[s].datepicker)
            },
            _editRowData: function () {
                var a = this,
                    t = this.s.dt,
                    e = {};
                t.rows({
                    selected: !0
                });
                c('form[name="altEditor-form"] *').filter(":input").each(function (t) {
                    e[c(this).attr("id")] = c(this).val()
                }), console.log(e), a.onEditRow(a, e, function (t, e, n, o, r) {
                    a._editRowCallback(t, e, n, o, r)
                }, function (t) {
                    a._errorCallback(t)
                })
            },
            _openDeleteModal: function () {
                var t = this.s.dt,
                    e = [];
                for (var n in t.context[0].aoColumns) e.push({
                    title: t.context[0].aoColumns[n].sTitle,
                    type: t.context[0].aoColumns[n].type ? t.context[0].aoColumns[n].type : "text",
                    name: t.context[0].aoColumns[n].data ? t.context[0].aoColumns[n].data : t.context[0].aoColumns[n].mData
                });
                var o = t.rows({
                    selected: !0
                }),
                    r = "";
                for (var a in r += "<form name='altEditor-form' role='form'><div class='row'>", e) 0 <= e[a].type.indexOf("hidden") ? r += "<input type='hidden' id='" + e[a].title + "' value='" + o.data()[0][e[a].name] + "' readonly></input>" : r += "<div class='col-12 mb-2'><label class='form-label' for='" + this._quoteattr(e[a].name) + "'>" + e[a].title + ":&nbsp</label> <input  type='hidden'  id='" + this._quoteattr(e[a].title) + "' name='" + this._quoteattr(e[a].title) + "' placeholder='" + this._quoteattr(e[a].placeholderMsg) + "' style='overflow:hidden'  class='form-control' value='" + this._quoteattr(o.data()[0][e[a].name]) + "' >" + o.data()[0][e[a].name] + "</input></div>";
                r += "</div></form>";
                var i = this.modal_selector;
                c(i).on("show.bs.modal", function () {
                    c(i).find(".modal-title").html("Delete Record"), c(i).find(".modal-body").html(r), c(i).find(".modal-footer").html('<button type="button" data-content="remove" class="btn btn-default" data-dismiss="modal">Cancel</button><button type="button"  data-content="remove" class="btn btn-danger" id="deleteRowBtn"><i class="fal fa-times"></i> Delete</button>')
                }), c(i).modal("show"), c(i + " input[0]").focus()
            },
            _deleteRow: function () {
                for (var e = this, t = this.s.dt, n = {}, o = t.rows({
                    selected: !0
                }), r = 0; r < t.context[0].aoColumns.length; r++) {
                    var a = t.context[0].aoColumns[r].data ? t.context[0].aoColumns[r].data : t.context[0].aoColumns[r].mData ? t.context[0].aoColumns[r].mData : t.context[0].aoColumns[r].idx;
                    n[a] = o.data()[0][a]
                }
                e.onDeleteRow(e, n, function (t) {
                    e._deleteRowCallback(t)
                }, function (t) {
                    e._errorCallback(t)
                })
            },
            _openAddModal: function () {
                var t = this,
                    e = this.s.dt,
                    n = [];
                for (var o in e.context[0].aoColumns) {
                    var r = e.context[0].aoColumns[o];
                    n[o] = {
                        title: r.sTitle,
                        name: r.data ? r.data : r.mData,
                        type: r.type ? r.type : "text",
                        defaultValue: r.defaultValue ? r.defaultValue : "",
                        options: r.options ? r.options : [],
                        msg: r.errorMsg ? r.errorMsg : "",
                        hoverMsg: r.hoverMsg ? r.hoverMsg : "",
                        pattern: r.pattern ? r.pattern : ".*",
                        special: r.special ? r.special : "",
                        placeholderMsg: r.placeholderMsg ? r.placeholderMsg : "",
                        unique: !!r.unique && r.unique,
                        uniqueMsg: r.uniqueMsg ? r.uniqueMsg : "",
                        maxLength: !!r.maxLength && r.maxLength,
                        multiple: !!r.multiple && r.multiple,
                        select2: !!r.select2 && r.select2
                    }
                }
                var a = "";
                for (var i in a += "<form name='altEditor-form' role='form' class='needs-validation' novalidate=''>", n)
                    if (0 <= n[i].type.indexOf("hidden"));
                    else {
                        if (a += "<div class='form-group row'><label class='form-label col-sm-3 col-form-label text-left text-sm-right' for='" + n[i].name + "'>" + n[i].title + ":</label><div class='col-lg-9'>", (0 <= n[i].type.indexOf("text") || 0 <= n[i].type.indexOf("date") || 0 <= n[i].type.indexOf("email") || 0 <= n[i].type.indexOf("password") || 0 <= n[i].type.indexOf("number") || 0 <= n[i].type.indexOf("time")) && (a += "<input type='" + t._quoteattr(n[i].type) + "' id='" + t._quoteattr(n[i].name) + "'  pattern='" + t._quoteattr(n[i].pattern) + "'  title='" + t._quoteattr(n[i].hoverMsg) + "' name='" + t._quoteattr(n[i].title) + "' placeholder='" + t._quoteattr(n[i].placeholderMsg) + "' value='" + t._quoteattr(n[i].defaultValue) + "' data-special='" + n[i].special + "' data-errorMsg='" + t._quoteattr(n[i].msg) + "' data-uniqueMsg='" + t._quoteattr(n[i].uniqueMsg) + "' data-unique='" + n[i].unique + "'" + (0 == n[i].maxLength ? "" : " maxlength='" + n[i].maxLength + "'") + " style='overflow:hidden' class='form-control' value=''>", a += "<label id='" + t._quoteattr(n[i].name) + "label' class='errorLabel help-block text-danger' style='display:none'></label>"), 0 <= n[i].type.indexOf("readonly") && (a += "<input type='text' readonly  id='" + t._quoteattr(n[i].name) + "' name='" + t._quoteattr(n[i].title) + "' placeholder='" + t._quoteattr(n[i].placeholderMsg) + "' style='overflow:hidden' class='form-control' value=''>"), 0 <= n[i].type.indexOf("select")) {
                            var s = "";
                            for (o = 0; o < n[i].options.length; o++) s += "<option value='" + t._quoteattr(n[i].options[o]) + "'>" + n[i].options[o] + "</option>";
                            a += "<select class='custom-select form-control" + (n[i].select2 ? " select2" : "") + "' id='" + t._quoteattr(n[i].name) + "' name='" + t._quoteattr(n[i].title) + "' " + (n[i].multiple ? "multiple" : "") + ">" + s + "</select>"
                        }
                        a += "</div><div style='clear:both;'></div></div>"
                    } a += "</form>";
                var l = this.modal_selector;
                for (var i in c(l).on("show.bs.modal", function () {
                    c(l).find(".modal-title").html("Add Record"), c(l).find(".modal-body").html(a), c(l).find(".modal-footer").html('<button type="button" data-content="remove" class="btn btn-default" data-dismiss="modal">Cancel</button><button type="button"  data-content="remove" class="btn btn-primary" id="addRowBtn">Add</button>')
                }), c(l).modal("show"), c(l + " input[0]").focus(), n) n[i].select2 && c(l).find("select#" + n[i].name).select2(n[i].select2)
            },
            _addRowData: function () {
                var e = this,
                    n = (this.s.dt, {});
                c('form[name="altEditor-form"] *').filter(":input").each(function (t) {
                    n[c(this).attr("id")] = c(this).val()
                }), e.onAddRow(e, n, function (t) {
                    e._addRowCallback(t)
                }, function (t) {
                    e._errorCallback(t)
                })
            },
            _deleteRowCallback: function (t, e, n) {
                var o = this.modal_selector;
                c(o + " .modal-body .alert").remove();
                c(o + " .modal-body").append('<div class="alert alert-success" role="alert"><strong>Success!</strong></div>'), this.s.dt.row({
                    selected: !0
                }).remove(), this.s.dt.draw(), c("div" + o).find("button#addRowBtn").prop("disabled", !0), c("div" + o).find("button#editRowBtn").prop("disabled", !0), c("div" + o).find("button#deleteRowBtn").prop("disabled", !0), c(o).modal("hide")
            },
            _addRowCallback: function (t, e, n) {
                var o = "string" == typeof t ? JSON.parse(t) : t,
                    r = this.modal_selector;
                c(r + " .modal-body .alert").remove();
                c(r + " .modal-body").append('<div class="alert alert-success" role="alert"><strong>Success!</strong></div>'), this.s.dt.row.add(o).draw(!1), c("div" + r).find("button#addRowBtn").prop("disabled", !0), c("div" + r).find("button#editRowBtn").prop("disabled", !0), c("div" + r).find("button#deleteRowBtn").prop("disabled", !0), c(r).modal("hide")
            },
            _editRowCallback: function (t, e, n) {
                var o = "string" == typeof t ? JSON.parse(t) : t,
                    r = this.modal_selector;
                c(r + " .modal-body .alert").remove();
                c(r + " .modal-body").prepend('<div class="alert alert-success" role="alert"><strong>Success!</strong></div>'), this.s.dt.row({
                    selected: !0
                }).data(o), this.s.dt.draw(), c("div" + r).find("button#addRowBtn").prop("disabled", !0), c("div" + r).find("button#editRowBtn").prop("disabled", !0), c("div" + r).find("button#deleteRowBtn").prop("disabled", !0), c(r).modal("hide")
            },
            _errorCallback: function (t, e, n) {
                var o = t,
                    r = this.modal_selector;
                c(r + " .modal-body .alert").remove();
                var a = "There was an unknown error!";
                if (o.responseJSON && o.responseJSON.errors)
                    for (var i in a = "", o.responseJSON.errors) a += o.responseJSON.errors[i][0];
                var s = '<div class="alert alert-danger" role="alert"><strong>Error!</strong> ' + (null == o.status ? "" : "Response code: " + o.status) + " " + a + "</div>";
                c(r + " .modal-body").append(s)
            },
            onAddRow: function (t, e, n, o) {
                console.log("Missing AJAX configuration for INSERT"), n(e)
            },
            onEditRow: function (t, e, n, o) {
                console.log("Missing AJAX configuration for UPDATE"), n(e)
            },
            onDeleteRow: function (t, e, n, o) {
                console.log("Missing AJAX configuration for DELETE"), n(e)
            },
            _inputValidation: function () {
                var a = this.s.dt,
                    t = !1,
                    i = 0;
                return c('form[name="altEditor-form"] *').filter(":text").each(function (t) {
                    var e = "#" + c(this).attr("id") + "label";
                    if (c(e).hide(), c(e).empty(), c(this).val().match(c(this).attr("pattern"))) {
                        if ("true" == c(this).attr("data-unique")) {
                            var n = a.column("th:contains('" + c(this).attr("name") + "')").data(),
                                o = null;
                            for (var r in null != a.row({
                                selected: !0
                            }).index() && (o = a.cell(a.row({
                                selected: !0
                            }).index(), a.column("th:contains('" + c(this).attr("name") + "')").index()).data()), n) c(this).val() == n[r] && n[r] != o && (c(e).html(c(this).attr("data-uniqueMsg")), c(e).show(), i++)
                        }
                    } else c(e).html(c(this).attr("data-errorMsg")), c(e).show(), i++
                }), 0 == i && (t = !0), t
            },
            _quoteattr: function (t, e) {
                return null == t ? "" : (e = e ? "&#13;" : "\n", ("" + t).replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r\n/g, e).replace(/[\r\n]/g, e))
            }
        }), s.version = "2.0", s.defaults = {
            alwaysAsk: !1,
            focus: null,
            columns: "",
            update: null,
            editor: null
        }, s.classes = {
            btn: "btn"
        }, c(n).on("preInit.dt.altEditor", function (t, e, n) {
            if ("dt" === t.namespace) {
                var o = e.oInit.altEditor,
                    r = i.defaults.altEditor;
                if (o || r) {
                    var a = c.extend({}, o, r);
                    !1 !== o && new s(e, a)
                }
            }
        }), i.altEditor = s
    });