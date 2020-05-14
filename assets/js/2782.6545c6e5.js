(window.webpackJsonp=window.webpackJsonp||[]).push([[2782],{3129:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"python-http-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-http-server"}},[t._v("#")]),t._v(" Python HTTP Server")]),t._v(" "),a("h2",{attrs:{id:"running-a-simple-http-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#running-a-simple-http-server"}},[t._v("#")]),t._v(" Running a simple HTTP server")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("python "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m SimpleHTTPServer "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\n\n")])])]),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("python "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("m http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("9000")]),t._v("\n\n")])])]),a("p",[t._v("Running this command serves the files of the current directory at port "),a("code",[t._v("9000")]),t._v(".")]),t._v(" "),a("p",[t._v("If no argument is provided as port number then server will run on default port "),a("code",[t._v("8000")]),t._v(".")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("-m")]),t._v(" flag will search "),a("code",[t._v("sys.path")]),t._v(" for the corresponding "),a("code",[t._v(".py")]),t._v(" file to run as a module.")]),t._v(" "),a("p",[t._v("If you want to only serve on localhost you'll need to write a custom Python program such as:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sys\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BaseHTTPServer\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" SimpleHTTPServer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SimpleHTTPRequestHandler\n\nHandlerClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SimpleHTTPRequestHandler\nServerClass  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BaseHTTPServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPServer\nProtocol     "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP/1.0"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n   port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v("\nserver_address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'127.0.0.1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nHandlerClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocol_version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Protocol\nhttpd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ServerClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HandlerClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" httpd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getsockname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Serving HTTP on"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\nhttpd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serve_forever"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"serving-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serving-files"}},[t._v("#")]),t._v(" Serving files")]),t._v(" "),a("p",[t._v("Assuming you have the following directory of files:")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/61fLG.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/61fLG.jpg",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("You can setup a web server to serve these files as follows:")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SimpleHTTPServer\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" SocketServer\n\nPORT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v("\n\nhandler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SimpleHTTPServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SimpleHTTPRequestHandler\nhttpd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SocketServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TCPServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Serving files at port {}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhttpd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serve_forever"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socketserver\n\nPORT "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v("\n\nhandler "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SimpleHTTPRequestHandler\nhttpd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socketserver"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("TCPServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"serving at port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" PORT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nhttpd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serve_forever"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("The "),a("code",[t._v("SocketServer")]),t._v(" module provides the classes and functionalities to setup a network server.")]),t._v(" "),a("p",[a("code",[t._v("SocketServer")]),t._v("'s "),a("code",[t._v("TCPServer")]),t._v(" class sets up a server using the TCP protocol. The constructor accepts\na tuple representing the address of the server (i.e. the IP address and port) and the class that\nhandles the server requests.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("SimpleHTTPRequestHandler")]),t._v(" class of the "),a("code",[t._v("SimpleHTTPServer")]),t._v(" module allows\nthe files at the current directory to be served.")]),t._v(" "),a("p",[t._v("Save the script at the same directory and run it.")]),t._v(" "),a("p",[t._v("Run the HTTP Server :")]),t._v(" "),a("p",[t._v("python -m SimpleHTTPServer 8000")]),t._v(" "),a("p",[t._v("python -m http.server 8000")]),t._v(" "),a("p",[t._v("The '-m' flag will search 'sys.path' for the corresponding '.py' file to run as a module.")]),t._v(" "),a("p",[t._v("Open "),a("a",{attrs:{href:"http://localhost:8000",target:"_blank",rel:"noopener noreferrer"}},[t._v("localhost:8000"),a("OutboundLink")],1),t._v(" in the browser, it will give you the following:")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://i.stack.imgur.com/FfhnV.jpg",target:"_blank",rel:"noopener noreferrer"}},[a("img",{attrs:{src:"http://i.stack.imgur.com/FfhnV.jpg",alt:"enter image description here"}}),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"programmatic-api-of-simplehttpserver"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#programmatic-api-of-simplehttpserver"}},[t._v("#")]),t._v(" Programmatic API of SimpleHTTPServer")]),t._v(" "),a("p",[t._v("What happens when we execute "),a("code",[t._v("python -m SimpleHTTPServer 9000")]),t._v("?")]),t._v(" "),a("p",[t._v("To answer this question we should understand the construct of SimpleHTTPServer ("),a("a",{attrs:{href:"https://hg.python.org/cpython/file/2.7/Lib/SimpleHTTPServer.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hg.python.org/cpython/file/2.7/Lib/SimpleHTTPServer.py)"),a("OutboundLink")],1),t._v(") and BaseHTTPServer("),a("a",{attrs:{href:"https://hg.python.org/cpython/file/2.7/Lib/BaseHTTPServer.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hg.python.org/cpython/file/2.7/Lib/BaseHTTPServer.py)"),a("OutboundLink")],1),t._v(").")]),t._v(" "),a("p",[t._v("Firstly, Python invokes the "),a("code",[t._v("SimpleHTTPServer")]),t._v(" module with "),a("code",[t._v("9000")]),t._v(" as an argument. Now observing the SimpleHTTPServer code,")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HandlerClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SimpleHTTPRequestHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         ServerClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BaseHTTPServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HTTPServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    BaseHTTPServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HandlerClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ServerClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" __name__ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__main__'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("The test function is invoked following request handlers and ServerClass. Now BaseHTTPServer.test is invoked")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HandlerClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BaseHTTPRequestHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         ServerClass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" HTTPServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HTTP/1.0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v('"""Test the HTTP request handler class.\n\nThis runs an HTTP server on port 8000 (or the first command line\nargument).\n\n"""')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    port "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v("\nserver_address "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nHandlerClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("protocol_version "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" protocol\nhttpd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ServerClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("server_address"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HandlerClass"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nsa "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" httpd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getsockname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Serving HTTP on"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"..."')]),t._v("\nhttpd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serve_forever"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Hence here the port number, which the user passed as argument is parsed and is bound to the host address. Further basic steps of socket programming with given port and protocol is carried out. Finally socket server is initiated.")]),t._v(" "),a("p",[t._v("This is a basic overview of inheritance from SocketServer class to other classes:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n   +------------+\n    | BaseServer |\n    +------------+\n          |\n          v\n    +-----------+        +------------------+\n    | TCPServer |---|---|---|---|---|---|---|---|---|----\x3e| UnixStreamServer |\n    +-----------+        +------------------+\n          |\n          v\n    +-----------+        +--------------------+\n    | UDPServer |---|---|---|---|---|---|---|---|---|----\x3e| UnixDatagramServer |\n    +-----------+        +--------------------+\n\n")])])]),a("p",[t._v("The links\n"),a("a",{attrs:{href:"https://hg.python.org/cpython/file/2.7/Lib/BaseHTTPServer.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hg.python.org/cpython/file/2.7/Lib/BaseHTTPServer.py"),a("OutboundLink")],1),t._v(" and "),a("a",{attrs:{href:"https://hg.python.org/cpython/file/2.7/Lib/SocketServer.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hg.python.org/cpython/file/2.7/Lib/SocketServer.py"),a("OutboundLink")],1),t._v(" are useful for finding further information.")]),t._v(" "),a("h2",{attrs:{id:"basic-handling-of-get-post-put-using-basehttprequesthandler"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-handling-of-get-post-put-using-basehttprequesthandler"}},[t._v("#")]),t._v(" Basic handling of GET, POST, PUT using BaseHTTPRequestHandler")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# from BaseHTTPServer import BaseHTTPRequestHandler, HTTPServer # python2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" BaseHTTPRequestHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HTTPServer "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# python3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HandleRequests")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BaseHTTPRequestHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_set_headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send_response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("send_header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text/html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("end_headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_GET")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_set_headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"received get request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_POST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token triple-quoted-string string"}},[t._v("'''Reads post request body'''")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_set_headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        content_len "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("getheader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'content-length'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        post_body "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content_len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wfile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"received post request:<br>{}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("post_body"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("do_PUT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("do_POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\nport "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\nHTTPServer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" HandleRequests"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("serve_forever"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Example output using "),a("code",[t._v("curl")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[t._v("$ curl http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nreceived get request"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("                                                                                                                                                                                       \n\n$ curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("X POST http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nreceived post request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("br"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("                                                                                                                                                                                 \n\n$ curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("X PUT http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nreceived post request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("br"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("                                                                                                                                                                                 \n\n$ echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" curl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("binary @"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("//")]),t._v("localhost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\nreceived post request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("br"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("hello world\n\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);