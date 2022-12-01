(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{290:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"templating"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templating"}},[t._v("#")]),t._v(" Templating")]),t._v(" "),s("p",[t._v("Les templates utilisés sont des templates utilisant le moteur de template principal de PrestaShop: "),s("code",[t._v("Smarty")])]),t._v(" "),s("p",[t._v("Chaque template doit être enregistré en utilisant la nouvelle syntaxe de PrestaShop:")]),t._v(" "),s("p",[t._v("Exemple: "),s("code",[t._v("module:modulemodule/views/templates/hook/front.tpl")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[s("strong",[t._v("TOUS les templates peuvent être overridés par un thème parent ou enfant.")])])]),t._v(" "),s("p",[t._v("Ex: pour un template localisé dans: "),s("code",[t._v("/modules/modulemodule/views/templates/hook/front.tpl")]),t._v("\nutlisant la syntaxe: "),s("code",[t._v("module:modulemodule/views/templates/hook/front.tpl")])]),t._v(" "),s("p",[t._v("Ce dernier peut être surclassé en le plaçant dans un thème:\n"),s("code",[t._v("/themes/montheme/modules/modulemodule/views/templates/hook/front.tpl")])]),t._v(" "),s("h2",{attrs:{id:"utiliser-les-donnees-du-bloc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#utiliser-les-donnees-du-bloc"}},[t._v("#")]),t._v(" Utiliser les données du bloc")]),t._v(" "),s("p",[s("strong",[t._v("PrettyBlocks")]),t._v(" renvoie dans chaque block, une variable nommée: "),s("code",[t._v("$block")])]),t._v(" "),s("h3",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),s("p",[t._v("Toutes les données définies dans la section "),s("code",[t._v("config")]),t._v(" peuvent être exploitées sous cette forme:")]),t._v(" "),s("p",[s("code",[t._v("{$block.settings.{$nom_de_la_cle}}")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exemple")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'config'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'fields'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type of field")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'label'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// label to display")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Customer reviews'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default value ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'color'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'color'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type of field")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'label'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Choose a background color'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// label to display")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'#121212'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default value ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("p",[t._v("Pour récupérer "),s("code",[t._v("title")]),t._v(" placez dans vos templates: "),s("code",[t._v("{$block.settings.title}")])]),t._v(" "),s("p",[t._v("Pour "),s("code",[t._v("color")]),t._v(" => "),s("code",[t._v("{$block.settings.color}")]),t._v(" etc...")]),t._v(" "),s("h3",{attrs:{id:"champs-par-defaut"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#champs-par-defaut"}},[t._v("#")]),t._v(" Champs par défaut")]),t._v(" "),s("p",[t._v("Il existe 2 champs par défaut que tous les blocks peuvent utiliser.")]),t._v(" "),s("p",[s("code",[t._v("container")]),t._v(" Utilisé pour placer dans un container ou non (à vous de l'utiliser de cette manière)")]),t._v(" "),s("div",{staticClass:"language-smarty extra-class"},[s("pre",{pre:!0,attrs:{class:"language-smarty"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token smarty language-smarty"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$block")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("container")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}")])]),t._v(" container "),s("span",{pre:!0,attrs:{class:"token smarty language-smarty"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("bg_color")]),t._v(" pour utiliser un "),s("code",[t._v("background-color")])]),t._v(" "),s("div",{staticClass:"language-smarty extra-class"},[s("pre",{pre:!0,attrs:{class:"language-smarty"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[s("span",{pre:!0,attrs:{class:"token smarty language-smarty"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$block")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("bg_color")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}")])]),t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token smarty language-smarty"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$block")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("settings")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("bg_color")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token smarty language-smarty"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}")])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" ... "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"champs-repetables"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#champs-repetables"}},[t._v("#")]),t._v(" Champs répétables")]),t._v(" "),s("p",[t._v("Comme pour les champs de configuration, les champs répétables ("),s("code",[t._v("repeater")]),t._v(") sont également présents dans chaque block\nVous pouvez les utiliser avec cette variable: "),s("code",[t._v("{$block.states}")])]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// exemple")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'repeater'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'name'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Element repeated'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'nameFrom'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'groups'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'title'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'text'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type of field")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'label'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Title'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// label to display")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Customer reviews'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default value ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'color'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'type'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'color'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// type of field")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'label'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Choose à background color'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// label to display")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'default'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'#121212'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// default value ")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),s("p",[t._v("Exemple pour utiliser les éléments répétables dans ses templates.")]),t._v(" "),s("div",{staticClass:"language-smarty extra-class"},[s("pre",{pre:!0,attrs:{class:"language-smarty"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token smarty language-smarty"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$block")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("states")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$state")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token smarty language-smarty"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("title")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token smarty language-smarty"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token smarty language-smarty"}},[s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("{/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),s("span",{pre:!0,attrs:{class:"token delimiter punctuation"}},[t._v("}")])]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);