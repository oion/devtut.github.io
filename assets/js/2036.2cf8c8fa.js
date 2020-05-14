(window.webpackJsonp=window.webpackJsonp||[]).push([[2036],{2383:function(t,s,a){"use strict";a.r(s);var n=a(19),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"partitioning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#partitioning"}},[t._v("#")]),t._v(" Partitioning")]),t._v(" "),a("h2",{attrs:{id:"retrieve-partition-boundary-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-partition-boundary-values"}},[t._v("#")]),t._v(" Retrieve Partition Boundary Values")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("        ps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" PartitionScheme\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("FileGroup"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("            \n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" LAG"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("prv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OVER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("PARTITION")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" ps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" boundary_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" PreviousBoundaryValue\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v("        sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partition_schemes ps\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v("    sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("destination_data_spaces dds\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" dds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partition_scheme_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data_space_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v("    sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filegroups fg\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" dds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data_space_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data_space_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v("    sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partition_functions f\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("function_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("function_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v("    sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partition_range_values prv\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("function_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("function_id\n            "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" dds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("destination_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("boundary_id\n\n")])])]),a("h2",{attrs:{id:"switching-partitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#switching-partitions"}},[t._v("#")]),t._v(" Switching Partitions")]),t._v(" "),a("p",[t._v("According to this [TechNet Microsoft page][1],")]),t._v(" "),a("blockquote"),t._v(" "),a("p",[a("strong",[t._v("Partitioning data")]),t._v(" enables you to manage and access subsets of your data quickly and efficiently while maintaining the integrity of the entire data collection.")]),t._v(" "),a("p",[t._v("When you call the following query the data is not physically moved; only the metadata about the location of the data changes.")]),t._v(" "),a("p",[a("code",[t._v("ALTER TABLE [SourceTable] SWITCH TO [TargetTable]")])]),t._v(" "),a("p",[t._v("The tables must have the same columns with the same data types and NULL settings, they need to be in the same file group and the new target table must be empty. See the page link above for more info on switching partitions.")]),t._v(" "),a("p",[t._v("[1]: "),a("a",{attrs:{href:"https://technet.microsoft.com/en-us/library/ms191160(v=sql.105).aspx",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://technet.microsoft.com/en-us/library/ms191160(v=sql.105).aspx"),a("OutboundLink")],1),t._v("  The column "),a("code",[t._v("IDENTITY")]),t._v(" property may differ.")]),t._v(" "),a("h2",{attrs:{id:"retrieve-partition-table-column-scheme-function-total-and-min-max-boundry-values-using-single-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrieve-partition-table-column-scheme-function-total-and-min-max-boundry-values-using-single-query"}},[t._v("#")]),t._v(" Retrieve partition table,column, scheme, function, total and min-max boundry values using single query")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DISTINCT")]),t._v("\n    object_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Object Name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Partition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Column")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Partition")]),t._v(" Scheme"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    pf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Partition")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    prv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tot "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Partition")]),t._v(" Count"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    prv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("miVal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Min Boundry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    prv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maVal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Max Boundry "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("objects o \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("indexes i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("columns")]),t._v(" c "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("index_columns ic "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" ic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" o"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object_id\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" ic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("column_id\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" ic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partition_ordinal "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partition_schemes s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data_space_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data_space_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INNER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partition_functions pf "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" pf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("function_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("function_id\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("OUTER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("APPLY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" \n                "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("COUNT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" tot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MIN")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" miVal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("MAX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" maVal \n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" sys"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("partition_range_values prv \n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" prv"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("function_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("function_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" prv\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("--WHERE object_name(i.object_id) = 'table_name'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" OBJECT_NAME"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("object_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("p",[t._v("Just un-comment "),a("code",[t._v("where")]),t._v(" clause and replace "),a("code",[t._v("table_name")]),t._v(" with "),a("code",[t._v("actual table name")]),t._v(" to view the detail of desired object.")])])}),[],!1,null,null,null);s.default=e.exports}}]);