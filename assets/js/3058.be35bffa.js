(window.webpackJsonp=window.webpackJsonp||[]).push([[3058],{3403:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"constants"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constants"}},[s._v("#")]),s._v(" Constants")]),s._v(" "),a("h2",{attrs:{id:"define-a-constant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-a-constant"}},[s._v("#")]),s._v(" Define a constant")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MY_CONSTANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# constant")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Constant")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'This is also constant'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# constant")]),s._v("\nmy_variable "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, venus"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# not constatn")]),s._v("\n\n")])])]),a("p",[s._v("Constant name start with capital letter. Everything that start with capital letter are considered as "),a("code",[s._v("constant")]),s._v(" in Ruby. So "),a("code",[s._v("class")]),s._v(" and "),a("code",[s._v("module")]),s._v(" are also constant.\nBest practice is use all capital letter for declaring constant.")]),s._v(" "),a("h2",{attrs:{id:"modify-a-constant"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modify-a-constant"}},[s._v("#")]),s._v(" Modify a Constant")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MY_CONSTANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, world"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MY_CONSTANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hullo, world"')]),s._v("\n\n")])])]),a("p",[s._v("The above code results in a warning, because you should be using variables if you want to change their values. However it is possible to change one letter at a time in a constant without a warning, like this:")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MY_CONSTANT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, world"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MY_CONSTANT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"u"')]),s._v("\n\n")])])]),a("p",[s._v("Now, after changing the second letter of "),a("code",[s._v("MY_CONSTANT")]),s._v(", it becomes "),a("code",[s._v('"Hullo, world"')]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"constants-cannot-be-defined-in-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#constants-cannot-be-defined-in-methods"}},[s._v("#")]),s._v(" Constants cannot be defined in methods")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("say_hi")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MESSAGE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello"')]),s._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MESSAGE")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])])]),a("p",[s._v("The above code results in an error: "),a("code",[s._v("SyntaxError: (irb):2: dynamic constant assignment")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"define-and-change-constants-in-a-class"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#define-and-change-constants-in-a-class"}},[s._v("#")]),s._v(" Define and change constants in a class")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Message")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEFAULT_MESSAGE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello, world"')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("speak")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("message "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" message\n      puts message\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),s._v("\n      puts "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEFAULT_MESSAGE")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])])]),a("p",[s._v("The constant "),a("code",[s._v("DEFAULT_MESSAGE")]),s._v(" can be changed with the following code:")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Message")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("DEFAULT_MESSAGE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hullo, world"')]),s._v("\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("ul",[a("li",[s._v('MY_CONSTANT_NAME = "my value"')])]),s._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[s._v("#")]),s._v(" Remarks")]),s._v(" "),a("p",[s._v("Constants are useful in Ruby when you have values that you do not want to be mistakenly changed in a program, such as API keys.")])])}),[],!1,null,null,null);t.default=e.exports}}]);