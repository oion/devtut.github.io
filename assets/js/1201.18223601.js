(window.webpackJsonp=window.webpackJsonp||[]).push([[1201],{1547:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[t._v("#")]),t._v(" Modules")]),t._v(" "),a("h2",{attrs:{id:"defining-your-own-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-your-own-module"}},[t._v("#")]),t._v(" Defining Your Own Module")]),t._v(" "),a("p",[t._v("If we have a file called "),a("code",[t._v("Business.hs")]),t._v(", we can define a "),a("code",[t._v("Business")]),t._v(" module that can be "),a("code",[t._v("import")]),t._v("-ed, like so:")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Business")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- ^ Export the Person type and all its constructors and field names")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("employees")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- ^ Export the employees function")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- begin types, function definitions, etc")]),t._v("\n\n")])])]),a("p",[t._v("A deeper hierarchy is of course possible; see the "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/haskell/5234/modules/24772/hierarchical-module-names#t=201610180746509844539",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hierarchical module names"),a("OutboundLink")],1),t._v(" example.")]),t._v(" "),a("h2",{attrs:{id:"exporting-constructors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exporting-constructors"}},[t._v("#")]),t._v(" Exporting Constructors")]),t._v(" "),a("p",[t._v("To export the type and all its constructors, one must use the following syntax:")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n\n")])])]),a("p",[t._v("So, for the following top-level definitions in a file called "),a("code",[t._v("People.hs")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("data")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Friend")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Foe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("deriving")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Eq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Ord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("isFoe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Foe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("True")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("isFoe")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("_")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("False")]),t._v("\n\n")])])]),a("p",[t._v("This module declaration at the top:")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("People")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Person")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n\n")])])]),a("p",[t._v("would only export "),a("code",[t._v("Person")]),t._v(" and its constructors "),a("code",[t._v("Friend")]),t._v(" and "),a("code",[t._v("Foe")]),t._v(".")]),t._v(" "),a("p",[t._v("If the export list following the module keyword is omitted, all of the names bound at the top level of the module would be exported:")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("People")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n\n")])])]),a("p",[t._v("would export "),a("code",[t._v("Person")]),t._v(", its constructors, and the "),a("code",[t._v("isFoe")]),t._v(" function.")]),t._v(" "),a("h2",{attrs:{id:"importing-specific-members-of-a-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#importing-specific-members-of-a-module"}},[t._v("#")]),t._v(" Importing Specific Members of a Module")]),t._v(" "),a("p",[t._v("Haskell supports importing a subset of items from a module.")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token import_statement"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("qualified")]),t._v(" Data.Stream")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("as")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v("\n\n")])])]),a("p",[t._v("would only import "),a("code",[t._v("map")]),t._v(" from "),a("code",[t._v("Data.Stream")]),t._v(", and calls to this function would require "),a("code",[t._v("D.")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("odd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("p",[t._v("otherwise the compiler will try to use "),a("code",[t._v("Prelude")]),t._v("'s "),a("code",[t._v("map")]),t._v(" function.")]),t._v(" "),a("h2",{attrs:{id:"hiding-imports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hiding-imports"}},[t._v("#")]),t._v(" Hiding Imports")]),t._v(" "),a("p",[t._v("Prelude often defines functions whose names are used elsewhere. Not hiding such imports (or using qualified imports where clashes occur) will cause compilation errors.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://hackage.haskell.org/package/Stream-0.4.7.2/docs/Data-Stream.html",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Data.Stream")]),a("OutboundLink")],1),t._v(" defines functions named "),a("code",[t._v("map")]),t._v(", "),a("code",[t._v("head")]),t._v(" and "),a("code",[t._v("tail")]),t._v(" which normally clashes with those defined in Prelude. We can hide those imports from Prelude using "),a("code",[t._v("hiding")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token import_statement"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Data.Stream")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- everything from Data.Stream")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token import_statement"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Prelude "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("hiding")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("tail")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("scan")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("foldl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("foldr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("filter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("dropWhile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("take")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- etc")]),t._v("\n\n")])])]),a("p",[t._v("In reality, it would require too much code to hide Prelude clashes like this, so you would in fact use a "),a("code",[t._v("qualified")]),t._v(" import of "),a("code",[t._v("Data.Stream")]),t._v(" instead.")]),t._v(" "),a("h2",{attrs:{id:"qualifying-imports"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qualifying-imports"}},[t._v("#")]),t._v(" Qualifying Imports")]),t._v(" "),a("p",[t._v("When multiple modules define the same functions by name, the compiler will complain. In such cases (or to improve readability), we can use a "),a("code",[t._v("qualified")]),t._v(" import:")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token import_statement"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("qualified")]),t._v(" Data.Stream "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" D")]),t._v("\n\n")])])]),a("p",[t._v("Now we can prevent ambiguity compiler errors when we use "),a("code",[t._v("map")]),t._v(", which is defined in "),a("code",[t._v("Prelude")]),t._v(" and "),a("code",[t._v("Data.Stream")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- will use Prelude.map")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("map")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("odd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("fromList")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- will use Data.Stream.map")]),t._v("\n\n")])])]),a("p",[t._v("It is also possible to import a module with only the clashing names being qualified via "),a("code",[t._v("import Data.Text as T")]),t._v(", which allows one to have "),a("code",[t._v("Text")]),t._v(" instead of "),a("code",[t._v("T.Text")]),t._v(" etc.")]),t._v(" "),a("h2",{attrs:{id:"hierarchical-module-names"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hierarchical-module-names"}},[t._v("#")]),t._v(" Hierarchical module names")]),t._v(" "),a("p",[t._v("The names of modules follow the filesystem's hierarchical structure. With the following file layout:")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Foo")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n├── "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Baz")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n│   └── "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("Quux.hs")]),t._v("\n└── "),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("Bar.hs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("Foo.hs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token hvariable"}},[t._v("Bar.hs")]),t._v("\n\n")])])]),a("p",[t._v("the module headers would look like this:")]),t._v(" "),a("div",{staticClass:"language-hs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-hs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- file Foo.hs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Foo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- file Bar.hs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- file Foo/Bar.hs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Foo.Bar")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- file Foo/Baz/Quux.hs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Foo.Baz.Quux")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v("\n\n")])])]),a("p",[t._v("Note that:")]),t._v(" "),a("ul",[a("li",[t._v("the module name is based on the path of the file declaring the module")]),t._v(" "),a("li",[t._v("Folders may share a name with a module, which gives a naturally hierarchical naming structure to modules")])]),t._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[t._v("#")]),t._v(" Syntax")]),t._v(" "),a("li",[t._v("\nmodule Name where  -- export all names declared in this file\n")]),t._v(" "),a("li",[t._v("\nmodule Name (functionOne, Type (..)) where  -- export only functionOne, Type, and Type's constructors\n")]),t._v(" "),a("li",[t._v("\nimport Module  -- import all of Module's exported names\n")]),t._v(" "),a("li",[t._v("\nimport qualified Module as MN  -- qualified import\n")]),t._v(" "),a("li",[t._v("\nimport Module (justThisFunction)  -- import only certain names from a module\n")]),t._v(" "),a("li",[t._v("\nimport Module hiding (functionName, Type)  -- import all names from a module except functionName and Type\n")]),t._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("Haskell has support for modules:")]),t._v(" "),a("li",[t._v("\na module can export all, or a subset of its member types & functions\n")]),t._v(" "),a("li",[t._v('\na module can "re-export" names it imported from other modules\n')]),t._v(" "),a("p",[t._v("On the consumer end of a module, one can:")]),t._v(" "),a("li",[t._v("\nimport all, or a subset of module members\n")]),t._v(" "),a("li",[t._v("\nhide imports of a particular member or set of members\n")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.haskell.org/tutorial/modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("haskell.org"),a("OutboundLink")],1),t._v(" has a great chapter on module definition.")])])}),[],!1,null,null,null);s.default=n.exports}}]);