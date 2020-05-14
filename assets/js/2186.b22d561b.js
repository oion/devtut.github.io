(window.webpackJsonp=window.webpackJsonp||[]).push([[2186],{2532:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"eventloop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eventloop"}},[t._v("#")]),t._v(" Eventloop")]),t._v(" "),s("p",[t._v("In this post we are going to discuss how the concept of Eventloop emerged and how it can be used for high performance servers and event driven applications like GUIs.")]),t._v(" "),s("h2",{attrs:{id:"how-the-concept-of-event-loop-evolved"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-the-concept-of-event-loop-evolved"}},[t._v("#")]),t._v(" How the concept of event loop evolved.")]),t._v(" "),s("h3",{attrs:{id:"eventloop-in-pseudo-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eventloop-in-pseudo-code"}},[t._v("#")]),t._v(" Eventloop in pseudo code")]),t._v(" "),s("p",[t._v("An event loop is a loop that waits for events and then reacts to those events")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    wait "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" something to happen\n    react to whatever happened\n\n")])])]),s("h3",{attrs:{id:"example-of-a-single-threaded-http-server-with-no-event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-of-a-single-threaded-http-server-with-no-event-loop"}},[t._v("#")]),t._v(" Example of a single-threaded HTTP server with no event loop")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\n   while true:\n    socket = wait for the next TCP connection\n    read the HTTP request headers from (socket)\n    file_contents = fetch the requested file from disk\n    write the HTTP response headers to (socket)\n    write the (file_contents) to (socket)\n    close(socket)\n\n")])])]),s("p",[t._v("Here's a simple form of a HTTP server which is a single threaded but no event loop. The problem here is that it waits until each request is finished before starting to process the next one. If it takes a while to read the HTTP request headers or to fetch the file from disk, we should be able to start processing the next request while we wait for that to finish.")]),t._v(" "),s("p",[t._v("The most common solution is to make the program multi-threaded.")]),t._v(" "),s("h3",{attrs:{id:"example-of-a-multi-threaded-http-server-with-no-event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-of-a-multi-threaded-http-server-with-no-event-loop"}},[t._v("#")]),t._v(" Example of a multi-threaded HTTP server with no event loop")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("socket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    read the "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v(" request headers "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    file_contents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fetch the requested file "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" disk\n    write the "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v(" response headers "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    write "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("the")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file_contents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    socket "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wait "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the next "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TCP")]),t._v(" connection\n    spawn a "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("thread")]),t._v(" doing "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("handle_connection")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Now we have made our little HTTP server multi threaded. This way, we can immediately move on to the next request because the current request is running in a background thread. Many servers, including Apache, use this approach.")]),t._v(" "),s("p",[t._v("But it's not perfect. One limitation is that you can only spawn so many threads. For workloads where you have a huge number of connections, but each connection only requires attention every once in a while, the multi-threaded model won't perform very well. The solution for those cases is to use an event loop:")]),t._v(" "),s("h3",{attrs:{id:"example-of-a-http-server-with-event-loop"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-of-a-http-server-with-event-loop"}},[t._v("#")]),t._v(" Example of a HTTP server with event loop")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    event "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wait "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the next event to happen\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NEW_TCP_CONNECTION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Connection")]),t._v("\n        conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket\n        start reading "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v(" request headers "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" userdata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FINISHED_READING_FROM_SOCKET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userdata\n        start fetching the requested file "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" disk "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" userdata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FINISHED_READING_FROM_DISK")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userdata\n        conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file_contents "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" the data we fetched "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" disk\n        conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"writing headers"')]),t._v("\n        start writing the "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("HTTP")]),t._v(" response headers "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" userdata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FINISHED_WRITING_TO_SOCKET")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        conn "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("userdata\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"writing headers"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"writing file contents"')]),t._v("\n            start "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writing")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("file_contents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("to")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("with")]),t._v(" userdata "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("current_state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"writing file contents"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("conn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("p",[t._v("Hopefully this pseudocode is intelligible. Here's what's going on: We wait for things to happen. Whenever a new connection is created or an existing connection needs our attention, we go deal with it, then go back to waiting. That way, we perform well when there are many connections and each one only rarely requires attention.")]),t._v(" "),s("p",[t._v('In a real application (not pseudocode) running on Linux, the "wait for the next event to happen" part would be implemented by calling the poll() or epoll() system call. The "start reading/writing something to a socket" parts would be implemented by calling the recv() or send() system calls in non-blocking mode.')]),t._v(" "),s("p",[s("strong",[t._v("Reference:")])]),t._v(" "),s("p",[t._v('[1]. "How does an event loop work?" [Online]. Available : '),s("a",{attrs:{href:"https://www.quora.com/How-does-an-event-loop-work",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.quora.com/How-does-an-event-loop-work"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);