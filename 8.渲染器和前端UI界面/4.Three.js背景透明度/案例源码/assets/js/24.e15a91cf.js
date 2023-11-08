(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{349:function(a,s,t){"use strict";t.r(s);var e=t(7),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"高光网格材质meshphongmaterial"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高光网格材质meshphongmaterial"}},[a._v("#")]),a._v(" 高光网格材质"),s("code",[a._v("MeshPhongMaterial")])]),a._v(" "),s("p",[a._v("高光网格材质"),s("code",[a._v("MeshPhongMaterial")]),a._v("和基础网格材质"),s("code",[a._v("MeshBasicMaterial")]),a._v("、漫反射网格材质"),s("code",[a._v("MeshLambertMaterial")]),a._v("一样都是网格模型的"),s("code",[a._v("Mesh")]),a._v("的材质。")]),a._v(" "),s("p",[a._v("高光网格材质MeshPhongMaterial和漫反射网格材质MeshLambertMaterial一样会受到光照的影响。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/threejs/%E7%BD%91%E6%A0%BC%E6%9D%90%E8%B4%A8.svg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"meshphongmaterial对光照反射特点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#meshphongmaterial对光照反射特点"}},[a._v("#")]),a._v(" "),s("code",[a._v("MeshPhongMaterial")]),a._v("对光照反射特点")]),a._v(" "),s("p",[s("code",[a._v("MeshPhongMaterial")]),a._v("和"),s("code",[a._v("MeshLambertMaterial")]),a._v("都会收到光照的影响区别在于，对光线反射方式有差异。")]),a._v(" "),s("p",[s("code",[a._v("MeshPhongMaterial")]),a._v("可以实现"),s("code",[a._v("MeshLambertMaterial")]),a._v("不能实现的高光反射效果。对于高光效果，你可以想象一下，你在太阳下面观察一辆车，你会发现在特定角度和位置，你可以看到车表面某个局部区域非常高亮。")]),a._v(" "),s("h3",{attrs:{id:"镜面反射与漫反射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜面反射与漫反射"}},[a._v("#")]),a._v(" 镜面反射与漫反射")]),a._v(" "),s("p",[s("code",[a._v("MeshPhongMaterial")]),a._v("可以提供一个镜面反射效果,可以类比你生活中拿一面镜子，放在太阳光下，调整角度，可以把太阳光反射到其它地方，如果反射光对着眼睛，也就是反射光线和视线平行的时候，会非常刺眼。")]),a._v(" "),s("p",[s("code",[a._v("MeshLambertMaterial")]),a._v("对应的Mesh受到光线照射，没有镜面反射的效果，只是一个漫反射，也就是光线向四周反射。")]),a._v(" "),s("p",[s("img",{attrs:{src:"/threejs/%E6%BC%AB%E5%8F%8D%E5%B0%84.jpg",alt:""}})]),a._v(" "),s("h3",{attrs:{id:"高光亮度属性-shininess"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高光亮度属性-shininess"}},[a._v("#")]),a._v(" 高光亮度属性"),s("code",[a._v(".shininess")])]),a._v(" "),s("p",[a._v("通过"),s("code",[a._v("MeshPhongMaterial")]),a._v("的高光亮度"),s("code",[a._v(".shininess")]),a._v("属性,可以控制高光反射效果。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 模拟镜面反射，产生一个高光效果")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" material "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("MeshPhongMaterial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0xff0000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("shininess")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//高光部分的亮度，默认30")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h3",{attrs:{id:"高光颜色属性-specular"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#高光颜色属性-specular"}},[a._v("#")]),a._v(" 高光颜色属性"),s("code",[a._v(".specular")])]),a._v(" "),s("p",[a._v("可以给颜色属性"),s("code",[a._v(".specular")]),a._v("设置不同的值，比如"),s("code",[a._v("0x444444")]),a._v("、"),s("code",[a._v("0xfffffff")]),a._v(" 查看渲染效果变化。")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 模拟镜面反射，产生一个高光效果")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" material "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("THREE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("MeshPhongMaterial")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0xff0000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("shininess")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//高光部分的亮度，默认30")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[a._v("specular")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0x444444")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//高光部分的颜色")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);