webpackJsonp([29],{l5IF:function(v,_,l){"use strict";Object.defineProperty(_,"__esModule",{value:!0});var i={name:"DebounceThrottleTest",methods:{onScroll:function(){this.trueOnScroll||(this.trueOnScroll=this.$throttle(function(){},1e3)),this.trueOnScroll()},onClick:function(){this.trueOnClick||(this.trueOnClick=this.$debounce(function(){},1e3,!1)),this.trueOnClick()}}},t={render:function(){var v=this,_=v.$createElement,l=v._self._c||_;return l("div",{staticClass:"c-DebounceThrottleTest"},[l("ul",{staticStyle:{height:"200px",overflow:"auto"},on:{scroll:v.onScroll}},[l("li",[v._v("验证节流throttle函数，滚动并查看控制台")]),v._v(" "),l("li",[v._v("1")]),v._v(" "),l("li",[v._v("2")]),v._v(" "),l("li",[v._v("3")]),v._v(" "),l("li",[v._v("4")]),v._v(" "),l("li",[v._v("5")]),v._v(" "),l("li",[v._v("6")]),v._v(" "),l("li",[v._v("7")]),v._v(" "),l("li",[v._v("8")]),v._v(" "),l("li",[v._v("9")]),v._v(" "),l("li",[v._v("10")]),v._v(" "),l("li",[v._v("11")]),v._v(" "),l("li",[v._v("12")]),v._v(" "),l("li",[v._v("13")]),v._v(" "),l("li",[v._v("14")]),v._v(" "),l("li",[v._v("15")]),v._v(" "),l("li",[v._v("16")]),v._v(" "),l("li",[v._v("17")]),v._v(" "),l("li",[v._v("18")]),v._v(" "),l("li",[v._v("19")]),v._v(" "),l("li",[v._v("20")]),v._v(" "),l("li",[v._v("21")]),v._v(" "),l("li",[v._v("22")]),v._v(" "),l("li",[v._v("23")]),v._v(" "),l("li",[v._v("24")]),v._v(" "),l("li",[v._v("25")]),v._v(" "),l("li",[v._v("26")]),v._v(" "),l("li",[v._v("27")]),v._v(" "),l("li",[v._v("28")]),v._v(" "),l("li",[v._v("29")]),v._v(" "),l("li",[v._v("30")]),v._v(" "),l("li",[v._v("31")]),v._v(" "),l("li",[v._v("32")]),v._v(" "),l("li",[v._v("33")]),v._v(" "),l("li",[v._v("34")]),v._v(" "),l("li",[v._v("35")]),v._v(" "),l("li",[v._v("36")]),v._v(" "),l("li",[v._v("37")]),v._v(" "),l("li",[v._v("38")]),v._v(" "),l("li",[v._v("39")]),v._v(" "),l("li",[v._v("40")]),v._v(" "),l("li",[v._v("41")]),v._v(" "),l("li",[v._v("42")]),v._v(" "),l("li",[v._v("43")]),v._v(" "),l("li",[v._v("44")]),v._v(" "),l("li",[v._v("45")]),v._v(" "),l("li",[v._v("46")]),v._v(" "),l("li",[v._v("47")]),v._v(" "),l("li",[v._v("48")]),v._v(" "),l("li",[v._v("49")]),v._v(" "),l("li",[v._v("50")]),v._v(" "),l("li",[v._v("51")]),v._v(" "),l("li",[v._v("52")]),v._v(" "),l("li",[v._v("53")]),v._v(" "),l("li",[v._v("54")]),v._v(" "),l("li",[v._v("55")]),v._v(" "),l("li",[v._v("56")]),v._v(" "),l("li",[v._v("57")]),v._v(" "),l("li",[v._v("58")]),v._v(" "),l("li",[v._v("59")]),v._v(" "),l("li",[v._v("60")]),v._v(" "),l("li",[v._v("61")]),v._v(" "),l("li",[v._v("62")]),v._v(" "),l("li",[v._v("63")]),v._v(" "),l("li",[v._v("64")]),v._v(" "),l("li",[v._v("65")]),v._v(" "),l("li",[v._v("66")]),v._v(" "),l("li",[v._v("67")]),v._v(" "),l("li",[v._v("68")]),v._v(" "),l("li",[v._v("69")]),v._v(" "),l("li",[v._v("70")]),v._v(" "),l("li",[v._v("71")]),v._v(" "),l("li",[v._v("72")]),v._v(" "),l("li",[v._v("73")]),v._v(" "),l("li",[v._v("74")]),v._v(" "),l("li",[v._v("75")]),v._v(" "),l("li",[v._v("76")]),v._v(" "),l("li",[v._v("77")]),v._v(" "),l("li",[v._v("78")]),v._v(" "),l("li",[v._v("79")]),v._v(" "),l("li",[v._v("80")]),v._v(" "),l("li",[v._v("81")]),v._v(" "),l("li",[v._v("82")]),v._v(" "),l("li",[v._v("83")]),v._v(" "),l("li",[v._v("84")]),v._v(" "),l("li",[v._v("85")]),v._v(" "),l("li",[v._v("86")]),v._v(" "),l("li",[v._v("87")]),v._v(" "),l("li",[v._v("88")]),v._v(" "),l("li",[v._v("89")]),v._v(" "),l("li",[v._v("90")]),v._v(" "),l("li",[v._v("91")]),v._v(" "),l("li",[v._v("92")]),v._v(" "),l("li",[v._v("93")]),v._v(" "),l("li",[v._v("94")]),v._v(" "),l("li",[v._v("95")]),v._v(" "),l("li",[v._v("96")]),v._v(" "),l("li",[v._v("97")]),v._v(" "),l("li",[v._v("98")]),v._v(" "),l("li",[v._v("99")]),v._v(" "),l("li",[v._v("100")])]),v._v(" "),l("div",{on:{click:v.onClick}},[v._v("验证去抖debounce函数，请疯狂点我，并查看控制台(首次点击不会触发)")])])},staticRenderFns:[]},e=l("VU/8")(i,t,!1,null,null,null);_.default=e.exports}});