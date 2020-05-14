(window.webpackJsonp=window.webpackJsonp||[]).push([[3055],{3400:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"command-line-apps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#command-line-apps"}},[t._v("#")]),t._v(" Command Line Apps")]),t._v(" "),a("h2",{attrs:{id:"how-to-write-a-command-line-tool-to-get-the-weather-by-zip-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-write-a-command-line-tool-to-get-the-weather-by-zip-code"}},[t._v("#")]),t._v(" How to write a command line tool to get the weather by zip code")]),t._v(" "),a("p",[t._v("This will be a relatively comprehensive tutorial of how to write a command line tool to print the weather from the zip code provided to the command line tool. The first step is to write the program in ruby to do this action. Let's start by writing a method "),a("code",[t._v("weather(zip_code)")]),t._v(" (This method requires the "),a("code",[t._v("yahoo_weatherman")]),t._v(" gem. If you do not have this gem you can install it by typing "),a("code",[t._v("gem install yahoo_weatherman")]),t._v(" from the command line)")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yahoo_weatherman'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("weather")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zip_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Weatherman")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("\n  client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lookup_by_location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zip_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'temp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])]),a("p",[t._v("We now have a very basic method that gives the weather when a zip code is provided to it. Now we need to make this into a command line tool. Very quickly let's go over how a command line tool is called from the shell and the associated variables. When a tool is called like this "),a("code",[t._v("tool argument other_argument")]),t._v(", in ruby there is a variable "),a("code",[t._v("ARGV")]),t._v(" which is an array equal to "),a("code",[t._v("['argument', 'other_argument']")]),t._v(". Now let us implement this in our application")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/ruby")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yahoo_weatherman'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token method-definition"}},[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("weather")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zip_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  client "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Weatherman")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v("\n  client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lookup_by_location"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("zip_code"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'temp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v(" \n \nputs weather"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ARGV")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Good! Now we have a command line application that can be run. Notice the "),a("strong",[t._v("she-bang")]),t._v(" line at the beginning of the file ("),a("code",[t._v("#!/usr/bin/ruby")]),t._v("). This allows the file to become an executable. We can save this file as "),a("code",[t._v("weather")]),t._v(". ("),a("strong",[t._v("Note")]),t._v(": Do not save this as "),a("code",[t._v("weather.rb")]),t._v(", there is no need for the file extension and the she-bang tells whatever you need to tell that this is a ruby file). Now we can run these commands in the shell (do not type in the "),a("code",[t._v("$")]),t._v(").")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("$ chmod a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("x weather\n$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("weather "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ZIPCODE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("p",[t._v("After testing that this works, we can now sym-link this to the "),a("code",[t._v("/usr/bin/local/")]),t._v(" by running this command")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("$ sudo ln "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("s weather "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("local"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("weather\n\n")])])]),a("p",[t._v("Now "),a("code",[t._v("weather")]),t._v(" can be called on the command line no matter the directory you are in.")])])}),[],!1,null,null,null);e.default=n.exports}}]);