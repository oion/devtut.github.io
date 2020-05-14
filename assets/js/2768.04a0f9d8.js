(window.webpackJsonp=window.webpackJsonp||[]).push([[2768],{3113:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"postgresql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[t._v("#")]),t._v(" PostgreSQL")]),t._v(" "),a("h2",{attrs:{id:"getting-started"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[t._v("#")]),t._v(" Getting Started")]),t._v(" "),a("p",[t._v("PostgreSQL is an actively developed and mature open source database. Using the "),a("code",[t._v("psycopg2")]),t._v(" module, we can execute queries on the database.")]),t._v(" "),a("h3",{attrs:{id:"installation-using-pip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-using-pip"}},[t._v("#")]),t._v(" Installation using pip")]),t._v(" "),a("p",[a("code",[t._v("pip install psycopg2")])]),t._v(" "),a("h3",{attrs:{id:"basic-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-usage"}},[t._v("#")]),t._v(" Basic usage")]),t._v(" "),a("p",[t._v("Lets assume we have a table "),a("code",[t._v("my_table")]),t._v(" in the database "),a("code",[t._v("my_database")]),t._v(" defined as follows.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("id")]),t._v(" "),a("th",[t._v("first_name")]),t._v(" "),a("th",[t._v("last_name")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("John")]),t._v(" "),a("td",[t._v("Doe")])])])]),t._v(" "),a("p",[t._v("We can use the "),a("code",[t._v("psycopg2")]),t._v(" module to run queries on the database in the following fashion.")]),t._v(" "),a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" psycopg2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Establish a connection to the existing database 'my_database' using")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# the user 'my_user' with password 'my_password'")]),t._v("\ncon "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" psycopg2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("connect"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"host=localhost dbname=my_database user=my_user password=my_password"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create a cursor")]),t._v("\ncur "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" con"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cursor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Insert a record into 'my_table'")]),t._v("\ncur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"INSERT INTO my_table(id, first_name, last_name) VALUES (2, 'Jane', 'Doe');\"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Commit the current transaction")]),t._v("\ncon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Retrieve all records from 'my_table'")]),t._v("\ncur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("execute"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SELECT * FROM my_table;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nresults "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fetchall"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Close the database connection")]),t._v("\ncon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Print the results")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("results"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# OUTPUT: [(1, 'John', 'Doe'), (2, 'Jane', 'Doe')]")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);