(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{641:function(t,n,e){"use strict";e.r(n);var a=e(19),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"sign-your-android-app-for-release"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sign-your-android-app-for-release"}},[t._v("#")]),t._v(" Sign your Android App for Release")]),t._v(" "),e("p",[t._v("Android requires that all APKs be signed for release.")]),t._v(" "),e("h2",{attrs:{id:"sign-your-app"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sign-your-app"}},[t._v("#")]),t._v(" Sign your App")]),t._v(" "),e("li",[t._v("\nIn the menu bar, click Build > Generate Signed APK.\n")]),t._v(" "),e("li",[t._v("\nSelect the module you would like to release from the drop down and click Next.\n")]),t._v(" "),e("li",[t._v("\nTo Create a new keystore, click Create new. Now fill the required information and press ok in New Key Store.\n")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://i.stack.imgur.com/LcUK6.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://i.stack.imgur.com/LcUK6.png",alt:"New Key Store"}}),e("OutboundLink")],1)]),t._v(" "),e("p",[e("a",{attrs:{href:"https://i.stack.imgur.com/am4I5.png",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{src:"https://i.stack.imgur.com/am4I5.png",alt:"Generate Signed APK"}}),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("\nOn the Generate Signed APK Wizard fields are already populated for you if you just created new key store otherwise fill it and click next.\n")]),t._v(" "),e("li",[e("p",[t._v("On the next window, select a destination for the signed APK, select the build type\nand click finish.")])]),t._v(" "),e("h2",{attrs:{id:"configure-the-build-gradle-with-signing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-the-build-gradle-with-signing-configuration"}},[t._v("#")]),t._v(" Configure the build.gradle with signing configuration")]),t._v(" "),e("p",[t._v("You can define the  signing configuration to sign the apk in the "),e("code",[t._v("build.gradle")]),t._v(" file.")]),t._v(" "),e("p",[t._v("You can define:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("storeFile")]),t._v(" : the keystore file")]),t._v(" "),e("li",[e("code",[t._v("storePassword")]),t._v(": the keystore password")]),t._v(" "),e("li",[e("code",[t._v("keyAlias")]),t._v(": a key alias name")]),t._v(" "),e("li",[e("code",[t._v("keyPassword")]),t._v(": A key alias password")])]),t._v(" "),e("p",[t._v("You have to "),e("strong",[t._v("define")]),t._v(" the "),e("code",[t._v("signingConfigs")]),t._v(" block to create a signing configuration:")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("android "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    signingConfigs "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        myConfig "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            storeFile "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myFile.keystore"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            storePassword "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),t._v("\n            keyAlias "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),t._v("\n            keyPassword "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxx"')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//....")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),e("p",[t._v("Then you can "),e("strong",[t._v("assign")]),t._v(" it to one or more build types.")]),t._v(" "),e("div",{staticClass:"language-java extra-class"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("android "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    buildTypes "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        release "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            signingConfig signingConfigs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myConfig\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])])}),[],!1,null,null,null);n.default=s.exports}}]);