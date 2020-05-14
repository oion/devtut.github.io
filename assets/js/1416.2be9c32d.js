(window.webpackJsonp=window.webpackJsonp||[]).push([[1416],{1763:function(t,e,a){"use strict";a.r(e);var n=a(19),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nsinvocation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsinvocation"}},[t._v("#")]),t._v(" NSInvocation")]),t._v(" "),a("h2",{attrs:{id:"nsinvocation-objective-c"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nsinvocation-objective-c"}},[t._v("#")]),t._v(" NSInvocation Objective-C")]),t._v(" "),a("p",[t._v("Refer to this "),a("a",{attrs:{href:"http://stackoverflow.com/questions/313400/nsinvocation-for-dummies",target:"_blank",rel:"noopener noreferrer"}},[t._v("original Post"),a("OutboundLink")],1),t._v(" by "),a("a",{attrs:{href:"http://stackoverflow.com/users/33686/e-james",target:"_blank",rel:"noopener noreferrer"}},[t._v("e.James"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("According to "),a("a",{attrs:{href:"http://developer.apple.com/documentation/Cocoa/Reference/Foundation/Classes/NSInvocation_Class/Reference/Reference.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple's NSInvocation class reference"),a("OutboundLink")],1),t._v(":")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[t._v("An "),a("code",[t._v("NSInvocation")]),t._v(" is an Objective-C message rendered static, that is, it is an action turned into an object.")]),t._v(" "),a("p",[t._v("And, in a "),a("strong",[t._v("little")]),t._v(" more detail:")]),t._v(" "),a("p",[t._v("The concept of messages is central to the objective-c philosophy. Any time you call a method, or access a variable of some object, you are sending it a message. "),a("code",[t._v("NSInvocation")]),t._v(" comes in handy when you want to send a message to an object at a different point in time, or send the same message several times. "),a("code",[t._v("NSInvocation")]),t._v(" allows you to "),a("strong",[t._v("describe")]),t._v(" the message you are going to send, and then "),a("strong",[t._v("invoke")]),t._v(" it (actually send it to the target object) later on.")]),t._v(" "),a("p",[t._v("For example, let's say you want to add a string to an array. You would normally send the "),a("code",[t._v("addObject:")]),t._v(" message as follows:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myArray addObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("myString"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Now, let's say you want to use "),a("code",[t._v("NSInvocation")]),t._v(" to send this message at some other point in time:")]),t._v(" "),a("p",[t._v("First, you would prepare an "),a("code",[t._v("NSInvocation")]),t._v(" object for use with "),a("code",[t._v("NSMutableArray")]),t._v("'s "),a("code",[t._v("addObject:")]),t._v(" selector:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSMethodSignature")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" mySignature "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSMutableArray")]),t._v("\n    instanceMethodSignatureForSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSInvocation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" myInvocation "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSInvocation")]),t._v("\n    invocationWithMethodSignature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mySignature"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Next, you would specify which object to send the message to:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myInvocation setTarget"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("myArray"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Specify the message you wish to send to that object:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myInvocation setSelector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("addObject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("And fill in any arguments for that method:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myInvocation setArgument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("myString atIndex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("Note that object arguments must be passed by pointer. Thank you to "),a("a",{attrs:{href:"http://stackoverflow.com/users/53790/ryan-mccuaig",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ryan McCuaig"),a("OutboundLink")],1),t._v(" for pointing that out, and please see "),a("a",{attrs:{href:"http://developer.apple.com/mac/library/documentation/cocoa/reference/foundation/Classes/NSInvocation_Class/Reference/Reference.html#//apple_ref/occ/instm/NSInvocation/setArgument:atIndex:",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apple's documentation"),a("OutboundLink")],1),t._v(" for more details.")]),t._v(" "),a("p",[t._v("At this point, "),a("code",[t._v("myInvocation")]),t._v(" is a complete object, describing a message that can be sent. To actually send the message, you would call:")]),t._v(" "),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("myInvocation invoke"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("p",[t._v("This final step will cause the message to be sent, essentially executing "),a("code",[t._v("[myArray addObject:myString];")]),t._v(".")]),t._v(" "),a("p",[t._v("Think of it like sending an email. You open up a new email ("),a("code",[t._v("NSInvocation")]),t._v(" object), fill in the address of the person (object) who you want to send it to, type in a message for the recipient (specify a "),a("code",[t._v("selector")]),t._v(' and arguments), and then click "send" (call '),a("code",[t._v("invoke")]),t._v(").")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"http://developer.apple.com/DOCUMENTATION/Cocoa/Conceptual/DistrObjects/Tasks/invocations.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Using NSInvocation"),a("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),a("p",[a("code",[t._v("NSUndoManager")]),t._v(" uses "),a("code",[t._v("NSInvocation")]),t._v(" objects so that it can "),a("strong",[t._v("reverse")]),t._v(" commands. Essentially, what you are doing is creating an "),a("code",[t._v("NSInvocation")]),t._v(' object to say: "Hey, if you want to undo what I just did, send this message to that object, with these arguments". You give the '),a("code",[t._v("NSInvocation")]),t._v(" object to the "),a("code",[t._v("NSUndoManager")]),t._v(', and it adds that object to an array of undoable actions. If the user calls "Undo", '),a("code",[t._v("NSUndoManager")]),t._v(" simply looks up the most recent action in the array, and invokes the stored "),a("code",[t._v("NSInvocation")]),t._v(" object to perform the necessary action.")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"http://developer.apple.com/documentation/Cocoa/Conceptual/UndoArchitecture/Tasks/RegisteringUndo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Registering Undo Operations"),a("OutboundLink")],1),t._v(" for more details.")])])}),[],!1,null,null,null);e.default=s.exports}}]);