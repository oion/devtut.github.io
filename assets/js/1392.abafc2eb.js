(window.webpackJsonp=window.webpackJsonp||[]).push([[1392],{1739:function(e,t,a){"use strict";a.r(t);var n=a(19),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ios-implementation-of-xmpp-with-robbie-hanson-framework"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-implementation-of-xmpp-with-robbie-hanson-framework"}},[e._v("#")]),e._v(" iOS - Implementation of XMPP with Robbie Hanson framework")]),e._v(" "),a("h2",{attrs:{id:"ios-xmpp-robbie-hanson-example-with-openfire"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios-xmpp-robbie-hanson-example-with-openfire"}},[e._v("#")]),e._v(" iOS XMPP Robbie Hanson Example with Openfire")]),e._v(" "),a("h3",{attrs:{id:"srxmppdemo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#srxmppdemo"}},[e._v("#")]),e._v(" "),a("strong",[e._v("SRXMPPDemo")])]),e._v(" "),a("h3",{attrs:{id:"download-the-example-and-all-the-classes-here-https-github-com-sahebroy92-srxmppdemo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-the-example-and-all-the-classes-here-https-github-com-sahebroy92-srxmppdemo"}},[e._v("#")]),e._v(" Download the example and all the classes here - "),a("a",{attrs:{href:"https://github.com/SahebRoy92/SRXMPPDemo",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/SahebRoy92/SRXMPPDemo"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("A demo on XMPP in Objective C, with various simple and complex features implemented in it. All the features of XMPP is done by "),a("strong",[e._v('"in band"')]),e._v(" xmpp functions.\nFew features this project contains are --")]),e._v(" "),a("p",[a("strong",[e._v("SRXMPP")]),e._v(" - A wrapper Singleton class that almost has all features needed for one-to-one chat application.")]),e._v(" "),a("ul",[a("li",[e._v("one to one chat")]),e._v(" "),a("li",[e._v("Core data implementation of chat (text message) thus having saving of previous messages, offline messages.")]),e._v(" "),a("li",[e._v("implementation of vCard(profile information of user, own and others too) from XML and Core Data provided by Robbie Hanson's own framework.")]),e._v(" "),a("li",[e._v("availability of friends status (online/offline/typing)")])]),e._v(" "),a("h3",{attrs:{id:"steps-to-follow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#steps-to-follow"}},[e._v("#")]),e._v(" "),a("strong",[e._v("Steps to follow")])]),e._v(" "),a("p",[e._v("You want to use this project as a reference then you can do the following--")]),e._v(" "),a("p",[a("strong",[e._v("1. Installed Openfire in a live server")]),e._v("     - Rent a server, install openfire.")]),e._v(" "),a("p",[a("strong",[e._v("2. Want to try it out without a hassle in your own computer")]),e._v(" -\nYou need to download, install and setup 3 things to start")]),e._v(" "),a("p",[a("strong",[e._v("a. Java -")])]),e._v(" "),a("ul",[a("li",[e._v("Download and install Java for Mac.")])]),e._v(" "),a("p",[a("strong",[e._v("b. XAMPP")]),e._v(" -")]),e._v(" "),a("ul",[a("li",[e._v("Install XAMPP is relatively easy.\n")]),a("li",[e._v("After installation just start the XAMPP and start "),a("strong",[e._v("Database(SQL)")]),e._v(" and "),a("strong",[e._v("Apache Server")]),e._v(".\n"),a("img",{attrs:{src:"http://i.imgur.com/mXQmnhh.png?1",alt:"image reference"}})]),e._v(" "),a("li",[e._v("Then open browser and paste this URL\n"),a("a",{attrs:{href:"http://localhost/phpmyadmin/",target:"_blank",rel:"noopener noreferrer"}},[a("strong",[e._v("[http://localhost/phpmyadmin/]")]),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v(". Create a new DB from the left hand side panel.")]),e._v(" "),a("li",[a("strong",[e._v("Name the DB anything but remember this name, suppose we name it ChatDB")])])]),e._v(" "),a("p",[a("strong",[e._v("c. Openfire")]),e._v(" -")]),e._v(" "),a("li",[e._v('Install Openfire and run the application and "Start Openfire"\n'),a("img",{attrs:{src:"http://i.imgur.com/Ct8ft15.png?1",alt:"image reference"}})]),e._v("\n- Open Browser and Paste this URL - [[http://localhost:9090/setup/index.jsp](http://localhost:9090/setup/index.jsp)](http://localhost:9090/setup/index.jsp%5D(http://localhost:9090/setup/index.jsp))\n"),a("li",[e._v("Do normal setup\n"),a("ul",[e._v('\n- Select Language >\n- Server settings, leave as it is, just do continue >\n- Database Settings, leave as it is as "Standard Database Connection as selected >\n- Database Settings - Standard Connection". Now remember the name of the DB you set was **ChatDB**.\n'),a("li",[e._v('Select Database Driver Presets as ***"'),a("em",[e._v('MySQL"**')]),e._v('. Leave JDBC Driver Class as it is. Now in the Database URL you can see, brackets mentioning hostname and Database Name. Just change Hostname to **"localhost"**, and database name to **"ChatDB"**, or any other name of DB you have set earlier, while seting up XAMPP.\nLeave the Username and password as blank.Fill up details like the image here\n'),a("img",{attrs:{src:"http://i.imgur.com/BKRBG3c.png?1",alt:"image reference"}}),e._v(".")]),e._v(" "),a("li",[e._v("Next complete setup by giving a username and password and reconfirming it.\nThats it your done Setting up Openfire.")]),e._v(" "),a("p",[e._v("Now the part comes when you have to change a tiny detail in the code.")]),e._v(" "),a("p",[e._v("#"),a("strong",[e._v("Important")]),e._v("\nWe need to go to the class - "),a("strong",[e._v("SRXMPP.m")]),e._v(", locate the NSString extern "),a("strong",[e._v("SRXMPP_Hostname")]),e._v(" (in the top) and overwrite the value of it to the")]),e._v(" "),a("li",[e._v("IP of the server where OpenFire is installed ,\n**OR**")]),e._v(" "),a("li",[e._v('if you have installed it locally, overwrite the value to -\n**"localhost"**.')]),e._v(" "),a("p",[e._v("Thats it, you are ready to use this example project and start coding and making it into a better project of your own.")]),e._v(" "),a("p",[e._v("This starter pack will help you in understanding XMPP structure better as well as getting a grasp into XMPP protocols.")]),e._v(" "),a("p",[e._v("You can find other XMPP protocols here in this site - ["),a("a",{attrs:{href:"https://xmpp.org/rfcs/rfc3920.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://xmpp.org/rfcs/rfc3920.html"),a("OutboundLink")],1),e._v("](https://xmpp.org/rfcs/rfc3920.html%5D(https://xmpp.org/rfcs/rfc3920.html))")]),e._v(" "),a("p",[e._v("Development is still left and parts where I hope to include them later on")]),e._v(" "),a("ol",[a("li",[e._v("Group Chat")]),e._v(" "),a("li",[e._v("Image sending support")])]),e._v(" "),a("p",[e._v("In short this example project along with the singleton has almost all features that are needed for a One-to-One chat application to have.")])])])])}),[],!1,null,null,null);t.default=o.exports}}]);