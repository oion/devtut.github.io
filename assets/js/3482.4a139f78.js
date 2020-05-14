(window.webpackJsonp=window.webpackJsonp||[]).push([[3482],{3827:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"option-infer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#option-infer"}},[t._v("#")]),t._v(" Option Infer")]),t._v(" "),s("h2",{attrs:{id:"how-to-enable-disable-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-to-enable-disable-it"}},[t._v("#")]),t._v(" How to enable/disable it")]),t._v(" "),s("p",[s("strong",[t._v("Document level")])]),t._v(" "),s("p",[t._v("It is on by default, but you can set it by placing "),s("code",[t._v("Option Infer On|Off")]),t._v(" at the top of the code file. The option will apply to the whole document.")]),t._v(" "),s("p",[s("strong",[t._v("Project level")])]),t._v(" "),s("p",[t._v("You can switch it on/off via the menu in Visual Studio:")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("Project > [Project] Properties > Compile Tab > Option infer")]),t._v(" "),s("p",[t._v("Choose "),s("code",[t._v("On|Off")]),t._v(" in the drop-down menu. The option will apply to the whole document.")]),t._v(" "),s("p",[s("strong",[t._v("All new projects")])]),t._v(" "),s("p",[t._v("You can switch it On by default for all new Projects by selecting:")]),t._v(" "),s("blockquote"),t._v(" "),s("p",[t._v("Tools > Options > Projects and Solutions > VB defaults > Option Infer")]),t._v(" "),s("p",[t._v("Choose "),s("code",[t._v("On|Off")]),t._v(" in the drop-down menu.")]),t._v(" "),s("h2",{attrs:{id:"what-is-it"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#what-is-it"}},[t._v("#")]),t._v(" What is it?")]),t._v(" "),s("p",[t._v("Enables the use of local type inference in declaring variables.")]),t._v(" "),s("p",[s("strong",[t._v("What is type inference?")])]),t._v(" "),s("p",[t._v("You can declare local variables without explicitly stating a data type. The compiler infers the data type of a variable from the type of its initialization expression.")]),t._v(" "),s("p",[s("strong",[t._v("Option Infer On")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" aString  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'--\x3e Will be treated as String by the compiler")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" aNumber  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4711")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'--\x3e Will be treated as Integer by the compiler")]),t._v("\n\n")])])]),s("p",[t._v("vs. explicit type declaration:")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'State a type explicitly")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" aString "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" aNumber "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Integer")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4711")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Option Infer Off:")]),s("br"),t._v("\nThe compiler behavior with "),s("code",[t._v("Option Infer Off")]),t._v(" depends on the "),s("code",[t._v("Option Strict")]),t._v(" setting\nwhich is already "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/vb.net/4022/option-strict#t=201608031033503223787",target:"_blank",rel:"noopener noreferrer"}},[t._v("documented here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[s("p",[t._v("**Option Infer Off - Option Strict Off**"),s("br"),t._v("\nAll variables without explicit type declarations are declared as `Object`.")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" aString  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'--\x3e Will be treated as Object by the compiler")]),t._v("\n\n")])])])]),t._v(" "),s("li",[s("p",[t._v("**Option Infer Off - Option Strict On**"),s("br"),t._v("\nThe compiler won´t let you declare a variable without an explicit type.")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'Dim aString  = \"1234\" '--\x3e Will not compile due to missing type in declaration")]),t._v("\n\n")])])])]),t._v(" "),s("h2",{attrs:{id:"when-to-use-type-inference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#when-to-use-type-inference"}},[t._v("#")]),t._v(" When to use type inference")]),t._v(" "),s("p",[t._v("Basically you can use type inference whenever it is possible."),s("br"),t._v("\nHowever, be careful when combining "),s("code",[t._v("Option Infer Off")]),t._v(" and "),s("code",[t._v("Option Strict Off")]),t._v(", as this  can lead to undesired run-time behavior:")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" someVar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\nsomeVar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GetType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'--\x3e System.Int32")]),t._v("\nsomeVar "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),t._v("\nsomeVar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GetType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ToString"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'--\x3e System.String")]),t._v("\n\n")])])]),s("p",[s("strong",[t._v("Anonymous Type")]),s("br"),t._v("\nAnonymous types can "),s("strong",[t._v("only")]),t._v(" be declared with "),s("code",[t._v("Option Infer On")]),t._v("."),s("br"),t._v("\nThey are often used when dealing with "),s("a",{attrs:{href:"http://stackoverflow.com/documentation/vb.net/3111/linq#t=201608031014104425303",target:"_blank",rel:"noopener noreferrer"}},[t._v("LINQ"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" countryCodes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Of")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncountryCodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en-US"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncountryCodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"en-GB"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncountryCodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"de-DE"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncountryCodes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Add"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"de-AT"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" q "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" From code "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("In")]),t._v(" countryCodes\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Let")]),t._v(" split "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-"c')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("New")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("With")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Language "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Country "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" split"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("li",[s("p",[t._v("**Option Infer On**"),s("br"),t._v("\nThe compiler will recognize the anonymous type:\n["),s("img",{attrs:{src:"http://i.stack.imgur.com/TtgR0.png",alt:"Anonymous Type - Option Infer On"}}),t._v("](http://i.stack.imgur.com/TtgR0.png)")])]),t._v(" "),s("li",[s("p",[t._v("**Option Infer Off**"),s("br"),t._v("\nThe compiler will either throw an error (with `Option Strict On`)"),s("br"),t._v("\nor will consider `q` as type `object` (with `Option Strict Off`)."),s("br"),t._v("\nBoth cases will produce the outcome that you cannot use the anonymous type.")])]),t._v(" "),s("p",[s("strong",[t._v("Doubles/Decimals")]),s("br"),t._v("\nNumeric variables with decimal places will be infered as "),s("code",[t._v("Double")]),t._v(" by default:")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" aNumber "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("44.11")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'--\x3e Will be treated as type `Double` by the compiler")]),t._v("\n\n")])])]),s("p",[t._v("If another type like "),s("code",[t._v("Decimal")]),t._v(" is desired the value which initialized the variable needs to be marked:")]),t._v(" "),s("div",{staticClass:"language-vb extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vb"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dim")]),t._v(" mDecimal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("47.11D")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("'--\x3e Will be treated as type `Decimal` by the compiler")]),t._v("\n\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);