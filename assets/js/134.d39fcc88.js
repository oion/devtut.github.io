(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{479:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[t._v("#")]),t._v(" Context")]),t._v(" "),s("p",[t._v('Per Google documentation: "Interface to global information about an application environment. It allows access to application-specific resources and classes, as well as up-calls for application-level operations such as launching activities, broadcasting and receiving intents, etc."')]),t._v(" "),s("p",[t._v("More simply put, Context is the current state of your application. It allows you to provide information to objects so that they can be aware of what is going on in other parts of your application.")]),t._v(" "),s("h2",{attrs:{id:"basic-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-examples"}},[t._v("#")]),t._v(" Basic Examples")]),t._v(" "),s("p",[t._v("Standard usage in Activity:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Standard usage in Fragment:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Context")]),t._v(" context "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApplicationContext")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n")])])]),s("p",[s("code",[t._v("this")]),t._v(" (when in a class that extends from Context, such as the Application, Activity, Service and IntentService classes)")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextView")]),t._v(" textView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("another "),s("code",[t._v("this")]),t._v(" example:")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),t._v(" intent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Intent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startActivity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("intent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h4",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("getApplicationContext()")])]),t._v(" "),s("li",[s("code",[t._v("getBaseContext()")])]),t._v(" "),s("li",[s("code",[t._v("getContext()")])]),t._v(" "),s("li",[s("code",[t._v("this")])])]),t._v(" "),s("h4",{attrs:{id:"remarks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),s("p",[t._v("This StackOverflow page has several comprehensive and well written explanations of the concept of Context:")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://stackoverflow.com/questions/3572463/what-is-context-on-android",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is Context?"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);