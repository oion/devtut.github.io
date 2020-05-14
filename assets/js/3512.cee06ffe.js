(window.webpackJsonp=window.webpackJsonp||[]).push([[3512],{3861:function(t,e,a){"use strict";a.r(e);var r=a(19),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"binding-swift-libraries"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binding-swift-libraries"}},[t._v("#")]),t._v(" Binding Swift Libraries")]),t._v(" "),a("p",[t._v("An easy to follow guide that will lead you through the process of binding Swift .framework files for use in a Xamarin project.")]),t._v(" "),a("h2",{attrs:{id:"binding-a-swift-library-in-xamarin-ios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binding-a-swift-library-in-xamarin-ios"}},[t._v("#")]),t._v(" Binding a Swift Library in Xamarin.iOS")]),t._v(" "),a("p",[t._v("Binding a Swift Library in Xamarin.iOS follows the same process for Objective-C as shown in "),a("a",{attrs:{href:"https://developer.xamarin.com/guides/ios/advanced_topics/binding_objective-c/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.xamarin.com/guides/ios/advanced_topics/binding_objective-c/"),a("OutboundLink")],1),t._v(", but with some caveats.")]),t._v(" "),a("ol",[a("li",[t._v("A swift class must inherit from NSObject to be binded.")]),t._v(" "),a("li",[t._v("Swift compiler will translate class and protocol names into something else unless you use the "),a("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/Swift/Conceptual/BuildingCocoaApps/InteractingWithObjective-CAPIs.html#//apple_ref/doc/uid/TP40014216-CH4-ID35",target:"_blank",rel:"noopener noreferrer"}},[t._v("@objc"),a("OutboundLink")],1),t._v(" annotation (e.g. @objc(MyClass)) in your swift classes to specify the explicit objective c name.")]),t._v(" "),a("li",[t._v("In runtime your APP must include some swift core libraries alongside your binded framework in a folder called Frameworks;")]),t._v(" "),a("li",[t._v("When the App is pushed to AppStore it must include a SwiftSupport folder alongside your Payload folder. Those are inside the IPA file.")])]),t._v(" "),a("p",[t._v("Here you can find a simple sample binding: "),a("a",{attrs:{href:"https://github.com/Flash3001/Xamarin.BindingSwiftLibrarySample",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Flash3001/Xamarin.BindingSwiftLibrarySample"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("And a full binding sample: "),a("a",{attrs:{href:"https://github.com/Flash3001/iOSCharts.Xamarin",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Flash3001/iOSCharts.Xamarin"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Please find steps below:")]),t._v(" "),a("h3",{attrs:{id:"_1-1-prepare-the-swift-classes-you-want-to-export"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-prepare-the-swift-classes-you-want-to-export"}},[t._v("#")]),t._v(" 1.1 Prepare the Swift classes you want to export")]),t._v(" "),a("p",[t._v("For any Swift class you want to use you either have to inherit from NSObject and make the Objective-C name explicit using the objc annotation. Otherwise the Swift compiler will generate different names. Below is an example code of how a Swift class could look like. Note that it doesn't matter which class it inherits as long as the root class inherits from NSObject.")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Add this to specify explicit objective c name")]),t._v("\n@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("objc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("MyClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nopen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObject")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    open "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v(" String\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Value came from MyClass.swift!"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"_1-2-build-the-framework"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-build-the-framework"}},[t._v("#")]),t._v(" 1.2 Build the framework")]),t._v(" "),a("p",[t._v("Disable Bitcode. *")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/LStuW.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/LStuW.png",alt:"Disable Bitcode"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Build for release for Device and Simulator. *\n"),a("a",{attrs:{href:"https://i.stack.imgur.com/0kbTg.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/0kbTg.png",alt:"Set it as Release in Xcode Schemes"}}),a("OutboundLink")],1),t._v(" "),a("a",{attrs:{href:"https://i.stack.imgur.com/d9doz.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/d9doz.png",alt:"Build for Device"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/8bW84.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/8bW84.png",alt:"Build for Simulator"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/MXUnB.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/MXUnB.png",alt:"Find frameworks"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/OZotY.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/OZotY.png",alt:"Frameworks"}}),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Not related only to Swift binding.")])]),t._v(" "),a("h3",{attrs:{id:"_2-create-a-fat-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-a-fat-library"}},[t._v("#")]),t._v(" 2. Create a fat library")]),t._v(" "),a("p",[t._v("A framework contains several files, the one that needs to eat a little is NAME.framework/NAME (without extension).")]),t._v(" "),a("ul",[a("li",[t._v("Copy Release-iphoneos/NAME.framework to NAME.framework\n")]),a("li",[t._v("Create the FAT library using:\n"),a("ul",[a("li",[a("strong",[t._v("lipo -create Release-iphonesimulator/NAME.framework/NAME\nRelease-iphoneos/NAME.framework/NAME -output NAME.framework/NAME")])])])])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/0XE0b.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/0XE0b.png",alt:"Create fat library"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/zmmCf.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/zmmCf.png",alt:"Copy pending files"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/BYtfy.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/BYtfy.png",alt:"Files copied"}}),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_3-import-the-library"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-import-the-library"}},[t._v("#")]),t._v(" 3. Import the library")]),t._v(" "),a("p",[t._v("I’ll assume you already created the Binding project in File -> New -> iOS -> Binding Library.")]),t._v(" "),a("p",[t._v("Xamarin support importing .frameworks. Just right click ‘Native References’ and click in ‘Add native reference’. Find the newly created fat framework and add it.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/DVoC8.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/DVoC8.png",alt:"Add Native Reference"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/y0qai.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/y0qai.png",alt:"Select .framework"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/DCveu.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/DCveu.png",alt:"Reference"}}),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_4-create-the-apidefinition-based-on-library-swift-h-file-inside-headers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-create-the-apidefinition-based-on-library-swift-h-file-inside-headers"}},[t._v("#")]),t._v(" 4. Create the ApiDefinition based on LIBRARY-Swift.h file inside headers.")]),t._v(" "),a("p",[t._v("You can do it manually, but it won’t be nice. You can use Objetive Sharpie. The tool Xamarin uses to bind its own libraries.")]),t._v(" "),a("p",[t._v("How to use it on "),a("a",{attrs:{href:"https://developer.xamarin.com/guides/cross-platform/macios/binding/objective-sharpie/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.xamarin.com/guides/cross-platform/macios/binding/objective-sharpie/"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("The basic command will be something like: "),a("strong",[a("strong",[t._v("sharpie bind -sdk iphoneos9.3 NAME-Swift.h")])])]),t._v(" "),a("p",[t._v("If you get a "),a("code",[t._v("System.Reflection.TargetInvocationException")]),t._v(" it is probably because you have a different SDK version installed. Run the following command to check with iPhone OS SDK you have installed:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[t._v("sharpie xcode "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("sdks\n\n")])])]),a("p",[t._v("The file "),a("strong",[a("strong",[t._v("NAME-Swift.h")])]),t._v(" is located in "),a("strong",[a("strong",[t._v("NAME.framework/Headers/NAME-Swift.h")])])]),t._v(" "),a("p",[t._v('Note: The swift classes must inherit from "NSObject", otherwise '),a("strong",[a("strong",[t._v("NAME-Swift.h")])]),t._v(" won't import your classes and Objetive Sharpie will convert nothing.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/DCveu.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/DCveu.png",alt:"Sharpie"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Replace the contents of your binding project ApiDefinition.cs with the newly created one.\n"),a("a",{attrs:{href:"https://i.stack.imgur.com/Sq9TQ.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/Sq9TQ.png",alt:"Replace file contents"}}),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_5-change-all-protocol-and-basetype-to-include-the-class-name-in-objective-c-runtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-change-all-protocol-and-basetype-to-include-the-class-name-in-objective-c-runtime"}},[t._v("#")]),t._v(" 5. Change all [Protocol] and [BaseType] to include the class’ name in Objective-C runtime.")]),t._v(" "),a("p",[t._v("In case the original Swift class or protocol doesn't include the @objc(MyClass) annotation as specified in step 1.1 they will have its internal Objective-C names changed, so you need to map it to the right one.")]),t._v(" "),a("p",[t._v("All names are available in the file NAME-Swift.h in the following format:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SWIFT_CLASS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_TtC11SwiftSample7MyClass"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token type-list"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSObject")])]),t._v("\n\n")])])]),a("p",[t._v("And")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SWIFT_PROTOCOL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_TtP6Charts17ChartDataProvider_"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@protocol ChartDataProvider\n\n")])])]),a("p",[t._v("To set the name you use BaseTypeAttribute.Name "),a("a",{attrs:{href:"https://developer.xamarin.com/guides/cross-platform/macios/binding/binding-types-reference/#BaseType.Name",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.xamarin.com/guides/cross-platform/macios/binding/binding-types-reference/#BaseType.Name"),a("OutboundLink")],1),t._v(" property for classes and ProcotolAttribute.Name "),a("a",{attrs:{href:"https://developer.xamarin.com/api/property/MonoTouch.Foundation.ProtocolAttribute.Name/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developer.xamarin.com/api/property/MonoTouch.Foundation.ProtocolAttribute.Name/"),a("OutboundLink")],1),t._v(" for protocols.")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token attribute"}},[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BaseType")]),a("span",{pre:!0,attrs:{class:"token attribute-arguments"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token type-expression class-name"}},[t._v("NSObject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"_TtC11SwiftSample7MyClass"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyClass")]),t._v("\n\n")])])]),a("p",[t._v("Doing it manually is not cool. You can use this tool "),a("a",{attrs:{href:"https://github.com/Flash3001/SwiftClassify",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Flash3001/SwiftClassify"),a("OutboundLink")],1),t._v(" to insert all the names. (It’s work in progress. But it’s quite simple, just by looking at the code you will get how it works).")]),t._v(" "),a("h3",{attrs:{id:"_6-1-include-all-swift-dependencies-to-run"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-include-all-swift-dependencies-to-run"}},[t._v("#")]),t._v(" 6.1 Include all Swift dependencies to run.")]),t._v(" "),a("p",[t._v("If you try to consume the library in an App and try to run it right now it will crash. The error is due to the lack of libswiftCore.dylib")]),t._v(" "),a("p",[t._v("Something like this:")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[t._v("Dyld "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Error")]),t._v(" Message"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  Library "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("not")]),t._v(" loaded"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" @rpath"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("libswiftCore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dylib\n  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Referenced")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Users"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("USER"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Library"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Developer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("CoreSimulator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Devices"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("AC440891"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("C819"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4050")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("8CAB"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("CE15AB4B3830"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Containers"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Bundle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Application"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("27D2EC87"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5042")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("4FA7"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("9B80"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("A24A8971FB48"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("SampleUsing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("app"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Frameworks"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("SwiftSample"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("framework"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwiftSample")]),t._v("\n  Reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" image not found\n\n")])])]),a("p",[t._v("Xamarin.iOS doesn’t give official support for binding a Swift library. So you must manually include the swift core libraries in the Frameworks and SwiftSupport folders. The files for the Frameworks folder are different for Simulator and Device. They can be found in /Applications/Xcode.app/Contents/Developer//XcodeDefault.xctoolchain/usr/lib/swift.Toolchains")]),t._v(" "),a("p",[t._v("Instead of manually copying the files inside the Framework folder you can use this library "),a("a",{attrs:{href:"https://github.com/Flash3001/Xamarin.Swift3.Support",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Flash3001/Xamarin.Swift3.Support"),a("OutboundLink")],1),t._v(" . It includes every single dependency Swift 3.1 needs, each one in a single NuGet package.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/Hye5k.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/Hye5k.png",alt:"Add NuGet Package"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("As you can see, the Nuget Package is included in the consumer App, not in the binding itself. If you try to include it in the binding you will get compile errors.")]),t._v(" "),a("p",[t._v("If you are building a Nuget Package you can instruct Nuget to include it as a dependency.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/Fx0GW.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/Fx0GW.png",alt:"App Running"}}),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_6-2-finding-out-which-swift-dependencies-to-include"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-finding-out-which-swift-dependencies-to-include"}},[t._v("#")]),t._v(" 6.2. Finding out which Swift dependencies to include.")]),t._v(" "),a("p",[t._v("An important thing to do is to figure out each package you need to include in your project. A simple binding will usually need:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n    libswiftCore.dylib\n     libswiftCoreGraphics.dylib\n     libswiftCoreImage.dylib\n     libswiftDarwin.dylib\n     libswiftDispatch.dylib\n     libswiftFoundation.dylib\n     libswiftObjectiveC.dylib\n     libswiftQuartzCore.dylib\n     libswiftUIKit.dylib   \n\n")])])]),a("p",[t._v("To list each dependency you can run the following command inside your LibraryName.framework")]),t._v(" "),a("div",{staticClass:"language-cs extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cs"}},[a("code",[t._v("otool "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("l "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("arch armv7 LibraryName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" grep libswift\n\n")])])]),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/dlZKB.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/dlZKB.png",alt:"List dependencies"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Do not include every package available in NuGet for Swift3 as they might grow your app size.")]),t._v(" "),a("h3",{attrs:{id:"_7-include-swiftsupport-to-push-app-to-appstore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7-include-swiftsupport-to-push-app-to-appstore"}},[t._v("#")]),t._v(" 7. Include SwiftSupport to push App to AppStore.")]),t._v(" "),a("p",[t._v("Apple requires your App to be sent with a SwiftSupport folder alongside your Payload folder. Both are inside your IPA package.")]),t._v(" "),a("p",[t._v("You can use this script "),a("a",{attrs:{href:"https://github.com/bq/ipa-packager",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/bq/ipa-packager"),a("OutboundLink")],1),t._v(" to do this work for you.")]),t._v(" "),a("p",[t._v("This process is the only one the library consumer will have to do manually. Every time he/she tries to push the App to AppStore.")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://i.stack.imgur.com/1MkHy.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/1MkHy.png",alt:"Archive for Publishing"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Click 'Sign and Distribute' and Save to Disk\n"),a("a",{attrs:{href:"https://i.stack.imgur.com/azNYM.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/azNYM.png",alt:"Sign and Distribute"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Unzip your .IPA\n"),a("a",{attrs:{href:"https://i.stack.imgur.com/IVSGg.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/IVSGg.png",alt:"Unzip"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Create the new IPA using the script before mentioned\n"),a("a",{attrs:{href:"https://i.stack.imgur.com/v4ckT.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/v4ckT.png",alt:"New API"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("If you Unzip the file know, it will contain the SwiftSupport folder.\n"),a("a",{attrs:{href:"https://i.stack.imgur.com/7qT8K.png",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"https://i.stack.imgur.com/7qT8K.png",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"remarks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("p",[t._v("When building a library in Xcode it has an option to include the swift libraries. Don’t! They will be included in your final app as NAME.app/Frameworks/LIBRARY.framework/Frameworks/libswift*.dylib but they must be included as NAME.app/Frameworks/libswift*.dylib")]),t._v(" "),a("p",[t._v("You can find this information elsewhere, but it’s worth mention: Don’t include Bitcode in the library. As of right now Xamarin don’t include Bitcode for iOS and Apple requires all libraries to support the same architectures.")]),t._v(" "),a("h3",{attrs:{id:"disclaimer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disclaimer"}},[t._v("#")]),t._v(" Disclaimer")]),t._v(" "),a("p",[t._v("This guide is originally created by "),a("a",{attrs:{href:"http://stackoverflow.com/users/1698917/lucas-teixeira",target:"_blank",rel:"noopener noreferrer"}},[t._v("Lucas Teixeira"),a("OutboundLink")],1),t._v(".\nAll credits belong to him. Thank you, Lucas.")]),t._v(" "),a("h4",{attrs:{id:"remarks-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks-2"}},[t._v("#")]),t._v(" Remarks")]),t._v(" "),a("li",[t._v("\nWhen building a library in Xcode it has an option to include the swift libraries. Don’t! They will be included in your final app as NAME.app/Frameworks/LIBRARY.framework/Frameworks/libswift*.dylib but they must be included as NAME.app/Frameworks/libswift*.dylib\n")]),t._v(" "),a("li",[t._v("\nYou can find this information elsewhere, but it’s worth mention: Don’t include Bitcode in the library. As of right now Xamarin don’t include Bitcode for iOS and Apple requires all libraries to support the same architectures.\n")])])}),[],!1,null,null,null);e.default=s.exports}}]);