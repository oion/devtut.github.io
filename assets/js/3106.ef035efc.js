(window.webpackJsonp=window.webpackJsonp||[]).push([[3106],{3452:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"regular-expressions-and-regex-based-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regular-expressions-and-regex-based-operations"}},[t._v("#")]),t._v(" Regular Expressions and Regex Based Operations")]),t._v(" "),a("h2",{attrs:{id:"operator"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#operator"}},[t._v("#")]),t._v(" =~ operator")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("hay"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'haystack'")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"There is hay in the word haystack"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Note:")]),t._v(" The order "),a("strong",[t._v("is significant")]),t._v(". Though "),a("code",[t._v("'haystack' =~ /hay/")]),t._v(" is in most cases an equivalent, side effects might differ:")]),t._v(" "),a("ul",[a("li",[t._v("Strings captured from named capture groups are assigned to local variables only when "),a("code",[t._v("Regexp#=~")]),t._v(" is called ("),a("a",{attrs:{href:"http://ruby-doc.org/core-2.3.1/String.html#method-i-3D-7E",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("regexp =~ str")]),a("OutboundLink")],1),t._v(");")]),t._v(" "),a("li",[t._v("Since the right operand might be is an arbitrary object, for "),a("code",[t._v("regexp =~ str")]),t._v(" there will be called either "),a("code",[t._v("Regexp#=~")]),t._v(" or "),a("code",[t._v("String#=~")]),t._v(".")])]),t._v(" "),a("p",[t._v("Note that this does not return a true/false value, it instead returns either the index of the match if found, or nil if not found. Because all integers in ruby are truthy (including 0) and nil is falsy, this works. If you want a boolean value, use "),a("code",[t._v("#===")]),t._v(" as shown in "),a("a",{attrs:{href:"http://stackoverflow.com/documentation/ruby/1357/regular-expressions-and-regex-based-operations/4424/simple-regex-match#t=201607221936139047493",target:"_blank",rel:"noopener noreferrer"}},[t._v("another example"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"regular-expressions-in-case-statements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regular-expressions-in-case-statements"}},[t._v("#")]),t._v(" Regular Expressions in Case Statements")]),t._v(" "),a("p",[t._v("You can test if a string matches several regular expressions using a switch statement.")]),t._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ruby is #1!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\APython/")]),t._v("\n    puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Boooo."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\ARuby/")]),t._v("\n    puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"You are right."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" \n    puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Sorry, I didn\'t understand that."')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])]),a("p",[t._v("This works because case statements are checked for equality using the "),a("code",[t._v("===")]),t._v(" operator, not the "),a("code",[t._v("==")]),t._v(" operator. When a regex is on the left hand side of a comparison using "),a("code",[t._v("===")]),t._v(", it will test a string to see if it matches.")]),t._v(" "),a("h2",{attrs:{id:"groups-named-and-otherwise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#groups-named-and-otherwise"}},[t._v("#")]),t._v(" Groups, named and otherwise.")]),t._v(" "),a("p",[t._v("Ruby extends the standard group syntax "),a("code",[t._v("(...)")]),t._v(" with a named group, "),a("code",[t._v("(?<name>...)")]),t._v(". This allows for extraction by name instead of having to count how many groups you have.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("name_reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("ello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" my name is "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("i "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#i means case insensitive")]),t._v("\n\nname_input "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hi, my name is Zaphod Beeblebrox"')]),t._v("\n\nmatch_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name_reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name_input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#returns either a MatchData object or nil")]),t._v("\nmatch_data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name_input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("name_reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#works either way")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" match_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Always check for nil! Common error.")]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"No match"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v("\n  match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "Hi, my name is Zaphod Beeblebrox"')]),t._v("\n  match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "i" #the first group, (i|ello)')]),t._v("\n  match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "Zaphod Beeblebrox"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Because it was a named group, we can get it by name")]),t._v("\n  match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "Zaphod Beeblebrox"')]),t._v("\n  match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "Zaphod Beeblebrox"')]),t._v("\n  puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello '),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("#{")]),t._v("match"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token symbol"}},[t._v(":name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token delimiter tag"}},[t._v("}")])]),t._v('!"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])]),a("p",[t._v("The index of the match is counted based on the order of the left parentheses (with the entire regex being the first group at index 0)")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(((a)b)c)(d)/")]),t._v("\nmatch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("match "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcd'")]),t._v("\nmatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "abcd"')]),t._v("\nmatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "abc"')]),t._v("\nmatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "ab"')]),t._v("\nmatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "a"')]),t._v("\nmatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#=> "d"')]),t._v("\n\n")])])]),a("h2",{attrs:{id:"quantifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quantifiers"}},[t._v("#")]),t._v(" Quantifiers")]),t._v(" "),a("p",[t._v("Quantifiers allows to specify count of repeated strings.")]),t._v(" "),a("li",[t._v("\nZero or one:\n"),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/a?/")]),t._v("\n\n")])])])]),t._v(" "),a("li",[t._v("\nZero or many:\n"),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/a*/")]),t._v("\n\n")])])])]),t._v(" "),a("li",[t._v("\nOne or many:\n"),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/a+/")]),t._v("\n\n")])])])]),t._v(" "),a("li",[t._v("\nExact number:\n"),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Two, three or four")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Two or more")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Less than four (including zero)")]),t._v("\n\n")])])])]),t._v(" "),a("p",[t._v("By default, "),a("a",{attrs:{href:"https://ruby-doc.org/core-2.1.0/Regexp.html#class-Regexp-label-Repetition",target:"_blank",rel:"noopener noreferrer"}},[t._v("quantifiers are greedy"),a("OutboundLink")],1),t._v(", which means they take as many characters as they can while still making a match. Normally this is not noticeable:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("site"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Stack")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Exchange")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Motor Vehicle Maintenance & Repair Stack Exchange'")]),t._v("\n\n")])])]),a("p",[t._v("The named capture group "),a("code",[t._v("site")]),t._v(" will be set to ''Motor Vehicle Maintenance & Repair' as expected. But if 'Stack Exchange' is an optional part of the string (because it could be 'Stack Overflow' instead), the naive solution will not work as expected:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(?<site>.*)( Stack Exchange)?/")]),t._v("\n\n")])])]),a("p",[t._v("This version will still match, but the named capture will include 'Stack Exchange' since "),a("code",[t._v("*")]),t._v(" greedily eats those characters. The solution is to add another question mark to make the "),a("code",[t._v("*")]),t._v(" lazy:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(?<site>.*?)( Stack Exchange)?/")]),t._v("\n\n")])])]),a("p",[a("strong",[t._v("Appending "),a("code",[t._v("?")]),t._v(" to any quantifier will make it lazy.")])]),t._v(" "),a("h2",{attrs:{id:"character-classes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#character-classes"}},[t._v("#")]),t._v(" Character classes")]),t._v(" "),a("p",[t._v("Describes ranges of symbols")]),t._v(" "),a("p",[t._v("You can enumerate symbols explicitly")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("abc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'a' or 'b' or 'c'")]),t._v("\n\n")])])]),a("p",[t._v("Or use ranges")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# from 'a' to 'z'")]),t._v("\n\n")])])]),a("p",[t._v("It is possible to combine ranges and single symbols")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("cz"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'a' or 'b' or 'c' or 'z'")]),t._v("\n\n")])])]),a("p",[t._v("Leading dash ("),a("code",[t._v("-")]),t._v(") is treated as charachter")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# '-' or 'a' or 'b' or 'c'")]),t._v("\n\n")])])]),a("p",[t._v("Classes can be negative when preceding symbols with "),a("code",[t._v("^")])]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Not 'a', 'b' or 'c'")]),t._v("\n\n")])])]),a("p",[t._v("There are some shortcuts for widespread classes and special charachters, plus line endings")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start of line")]),t._v("\n$  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# End of line")]),t._v("\n\\"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Start of string")]),t._v("\n\\"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Z")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# End of string, excluding any new line at the end of string")]),t._v("\n\\z "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# End of string")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Any single character")]),t._v("\n\\s "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Any whitespace character")]),t._v("\n\\"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("S")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Any non-whitespace character")]),t._v("\n\\d "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Any digit")]),t._v("\n\\"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("D")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Any non-digit")]),t._v("\n\\w "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Any word character (letter, number, underscore)")]),t._v("\n\\"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("W")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Any non-word character")]),t._v("\n\\b "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Any word boundary")]),t._v("\n\n")])])]),a("p",[a("code",[t._v("\\n")]),t._v(" will be understood simply as new line")]),t._v(" "),a("p",[t._v("To escape any reserved charachter, such as "),a("code",[t._v("/")]),t._v(" or "),a("code",[t._v("[]")]),t._v(" and others use backslash (left slash)")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("\\\\ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => \\")]),t._v("\n\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\\"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => []")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"defining-a-regexp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defining-a-regexp"}},[t._v("#")]),t._v(" Defining a Regexp")]),t._v(" "),a("p",[t._v("A Regexp can be created in three different ways in Ruby.")]),t._v(" "),a("li",[t._v("\nusing slashes: `/ /`\n")]),t._v(" "),a("li",[t._v("\nusing `%r{}`\n")]),t._v(" "),a("li",[t._v("\nusing `Regex.new`\n"),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#The following forms are equivalent")]),t._v("\nregexp_slash "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/hello/")]),t._v("\nregexp_bracket "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("%r{hello}")]),t._v("\nregexp_new "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Regexp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nstring_to_match "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world!"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#All of these will return a truthy value")]),t._v("\nstring_to_match "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" regexp_slash    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 0")]),t._v("\nstring_to_match "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" regexp_bracket  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 0")]),t._v("\nstring_to_match "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" regexp_new      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# => 0")]),t._v("\n\n")])])])]),t._v(" "),a("h2",{attrs:{id:"match-boolean-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#match-boolean-result"}},[t._v("#")]),t._v(" match? - Boolean Result")]),t._v(" "),a("p",[t._v("Returns "),a("code",[t._v("true")]),t._v(" or "),a("code",[t._v("false")]),t._v(", which indicates whether the regexp is matched or not without updating "),a("code",[t._v("$~")]),t._v(" and other related variables. If the second parameter is present, it specifies the position in the string to begin the search.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/R.../")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("match"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ruby"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/R.../")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("match"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ruby"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> false")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/P.../")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("match"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Ruby"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#=> false")]),t._v("\n\n")])])]),a("p",[t._v("Ruby 2.4+")]),t._v(" "),a("h2",{attrs:{id:"common-quick-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-quick-usage"}},[t._v("#")]),t._v(" Common quick usage")]),t._v(" "),a("p",[t._v("Regular expressions are often used in methods as parameters to check if other strings are present or to search and/or replace strings.")]),t._v(" "),a("p",[t._v("You'll often see the following:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("string "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"My not so long string"')]),t._v("\nstring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("so"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gives so")]),t._v("\nstring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("present"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gives nil")]),t._v("\nstring"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("present"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gives true")]),t._v("\n\n")])])]),a("p",[t._v("So you can simply use this as a check if a string contains a substring")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("puts "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"found"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("so"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),a("p",[t._v("More advanced but still short and quick: search for a specific group by using the second parameter, 2 is the second in this example because numbering starts at 1 and not 0, a group is what is enclosed in parentheses.")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(n.t).+(l.ng)/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gives long")]),t._v("\n\n")])])]),a("p",[t._v("Also often used: search and replace with "),a("code",[t._v("sub")]),t._v(" or "),a("code",[t._v("gsub")]),t._v(", "),a("code",[t._v("\\1")]),t._v(" gives the first found group, "),a("code",[t._v("\\2")]),t._v(" the second:")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("string"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("gsub"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/(n.t).+(l.ng)/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\1 very \\2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# My not very long string")]),t._v("\n\n")])])]),a("p",[t._v("The last result is remembered and can be used on the following lines")]),t._v(" "),a("div",{staticClass:"language-ruby extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ruby"}},[a("code",[t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gives long")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);