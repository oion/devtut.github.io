(window.webpackJsonp=window.webpackJsonp||[]).push([[3093],{3439:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"modules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[s._v("#")]),s._v(" Modules")]),s._v(" "),a("h2",{attrs:{id:"a-simple-mixin-with-include"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-simple-mixin-with-include"}},[s._v("#")]),s._v(" A simple mixin with include")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SomeMixin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")])]),s._v("\n    puts "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo!"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bar")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SomeMixin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("baz")])]),s._v("\n    puts "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"baz!"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("baz         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# => "baz!"')]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# => "foo!"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# works thanks to the mixin")]),s._v("\n\n")])])]),a("p",[s._v("Now "),a("code",[s._v("Bar")]),s._v(" is a mix of its own methods and the methods from "),a("code",[s._v("SomeMixin")]),s._v(".")]),s._v(" "),a("p",[s._v("Note that how a mixin is used in a class depends on how it is added:")]),s._v(" "),a("ul",[a("li",[s._v("the "),a("code",[s._v("include")]),s._v(" keyword evaluates the module code in the class context (eg. method definitions will be methods on instances of the class),")]),s._v(" "),a("li",[a("code",[s._v("extend")]),s._v(" will evaluate the module code in the context of the singleton class of the object (methods are available directly on the extended object).")])]),s._v(" "),a("h2",{attrs:{id:"modules-and-class-composition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modules-and-class-composition"}},[s._v("#")]),s._v(" Modules and Class Composition")]),s._v(" "),a("p",[s._v("You can use Modules to build more complex classes through "),a("strong",[s._v("composition")]),s._v(".  The "),a("code",[s._v("include ModuleName")]),s._v(" directive incorporates a module's methods into a class.")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Foo")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo_method")])]),s._v("\n    puts "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'foo_method called!'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Bar")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bar_method")])]),s._v("\n    puts "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bar_method called!'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Baz")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Foo")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Bar")]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("baz_method")])]),s._v("\n    puts "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'baz_method called!'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])])]),a("p",[a("code",[s._v("Baz")]),s._v(" now contains methods from both "),a("code",[s._v("Foo")]),s._v(" and "),a("code",[s._v("Bar")]),s._v(" in addition to its own methods.")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[s._v("new_baz "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Baz")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v("\nnew_baz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("baz_method "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#=> 'baz_method called!'")]),s._v("\nnew_baz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bar_method "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#=> 'bar_method called!'")]),s._v("\nnew_baz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo_method "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#=> 'foo_method called!'")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"module-as-namespace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-as-namespace"}},[s._v("#")]),s._v(" Module as Namespace")]),s._v(" "),a("p",[s._v("Modules can contain other modules and classes:")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Namespace")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Child")]),s._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Foo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# module Child")]),s._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Foo can now be accessed as:")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Foo")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# module Namespace")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Foo must now be accessed as:")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Foo")]),s._v("\n\n")])])]),a("h2",{attrs:{id:"a-simple-mixin-with-extend"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#a-simple-mixin-with-extend"}},[s._v("#")]),s._v(" A simple mixin with extend")]),s._v(" "),a("p",[s._v("A mixin is just a module that can be added (mixed in) to a class. one way to do it is with the extend method. The "),a("code",[s._v("extend")]),s._v(" method adds methods of the mixin as class methods.")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SomeMixin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("foo")])]),s._v("\n    puts "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"foo!"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Bar")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extend")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("SomeMixin")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("baz")])]),s._v("\n    puts "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"baz!"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\nb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("baz         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# => "baz!"')]),s._v("\nb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo         "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NoMethodError, as the method was NOT added to the instance")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Bar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("foo       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# => "foo!"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# works only on the class itself ")]),s._v("\n\n")])])]),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("li",[s._v("\nDeclaration\n"),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("Name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    any ruby expressions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v("\n\n")])])])]),s._v(" "),a("h4",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[s._v("#")]),s._v(" Remarks")]),s._v(" "),a("p",[s._v("Module names in Ruby are constants, so they have to start with a capital letter.")]),s._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("module")]),s._v(" foo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("end")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Syntax error: class/module name must be CONSTANT")]),s._v("\n\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);