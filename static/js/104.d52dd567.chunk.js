(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[104],{363:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1193),l=c(407),s=c(412),a=c(575),o=c(403),r=c(736),d=c(396),b=c(394),u=(c(610),c(9)),j=function(){var e=Object(a.a)({theme:"bubble",modules:{toolbar:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],active:{}},formats:["bold","italic","underline","strike"]}),t=e.quill,c=e.quillRef;return Object(n.useEffect)((function(){t&&t.on("text-change",(function(){}))}),[t]),Object(u.jsx)("div",{ref:c,className:"sh-19 html-editor-bubble"})},m=c(391),h=function(){var e=Object(a.a)({theme:"bubble",modules:{toolbar:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],active:{}},formats:["bold","italic","underline","strike"],placeholder:"Editor"}),t=e.quill,c=e.quillRef;return Object(n.useEffect)((function(){t&&t.on("text-change",(function(){}))}),[t]),Object(u.jsxs)("div",{className:"filled custom-control-container editor-container",children:[Object(u.jsx)("div",{ref:c,className:"sh-9 html-editor"}),Object(u.jsx)(m.a,{icon:"notebook-1"})]})},f=(c(969),function(){var e=Object(a.a)({theme:"snow",modules:{toolbar:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],active:{}},formats:["bold","italic","underline","strike"]}),t=e.quillRef,c=e.quill;return Object(n.useEffect)((function(){c&&c.on("text-change",(function(){}))}),[c]),Object(u.jsx)("div",{ref:t,className:"sh-19 html-editor"})}),x=function(){var e=Object(a.a)({theme:"bubble",modules:{toolbar:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],active:{}},formats:["bold","italic","underline","strike"]}),t=e.quill,c=e.quillRef;return Object(n.useEffect)((function(){t&&t.on("text-change",(function(){}))}),[t]),Object(u.jsxs)("div",{className:"top-label custom-control-container editor-container",children:[Object(u.jsx)("div",{ref:c,className:"sh-12 html-editor"}),Object(u.jsx)("span",{children:"EDITOR"})]})},O=function(){var e=Object(a.a)({theme:"bubble",modules:{toolbar:[["bold","italic","underline","strike"],[{list:"ordered"},{list:"bullet"},{indent:"-1"},{indent:"+1"}],["link","image"],["clean"]],active:{}},formats:["bold","italic","underline","strike"]}),t=e.quill,c=e.quillRef;return Object(n.useEffect)((function(){t&&(t.on("text-change",(function(){})),t.on("editor-change",(function(){console.log(t.container),t.getLength()>1?t.container.classList.add("full"):t.container.classList.remove("full")})))}),[t]),Object(u.jsxs)("div",{className:"form-floating",children:[Object(u.jsx)("div",{ref:c,className:"sh-12 html-editor"}),Object(u.jsx)("label",{children:"Editor"})]})};t.default=function(){var e="Quill Editor",t="A Quill component for React.",c=Object(a.a)(),n=c.Quill,m=c.quill;return n&&!m&&(n.debug("error"),n.register("modules/active",r.a)),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b.a,{title:e,description:t}),Object(u.jsxs)(i.a,{children:[Object(u.jsxs)(l.a,{children:[Object(u.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(u.jsxs)("div",{className:"page-title-container",children:[Object(u.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(u.jsx)(d.a,{items:[{to:"",text:"Home"},{to:"interface",text:"Interface"},{to:"interface/forms",title:"Forms"},{to:"interface/forms/controls",title:"Controls"}]})]}),Object(u.jsx)(s.a,{className:"mb-5",body:!0,children:Object(u.jsx)(s.a.Text,{children:t})})]}),Object(u.jsxs)("section",{className:"scroll-section",id:"bubble",children:[Object(u.jsx)("h2",{className:"small-title",children:"Quill Bubble"}),Object(u.jsx)(s.a,{body:!0,className:"mb-5",children:Object(u.jsx)(j,{})})]}),Object(u.jsxs)("section",{className:"scroll-section",id:"snow",children:[Object(u.jsx)("h2",{className:"small-title",children:"Quill Snow"}),Object(u.jsx)(s.a,{className:"mb-5",children:Object(u.jsx)(s.a.Body,{className:"editor-container",children:Object(u.jsx)(f,{})})})]}),Object(u.jsxs)("section",{className:"scroll-section",id:"filled",children:[Object(u.jsx)("h2",{className:"small-title",children:"Filled"}),Object(u.jsx)(s.a,{className:"mb-5",children:Object(u.jsx)(s.a.Body,{className:"editor-container",children:Object(u.jsx)(h,{})})})]}),Object(u.jsxs)("section",{className:"scroll-section",id:"topLabel",children:[Object(u.jsx)("h2",{className:"small-title",children:"Top Label"}),Object(u.jsx)(s.a,{className:"mb-5",children:Object(u.jsx)(s.a.Body,{className:"editor-container",children:Object(u.jsx)(x,{})})})]}),Object(u.jsxs)("section",{className:"scroll-section",id:"floatingLabel",children:[Object(u.jsx)("h2",{className:"small-title",children:"Floating Label"}),Object(u.jsx)(s.a,{children:Object(u.jsx)(s.a.Body,{className:"editor-container",children:Object(u.jsx)(O,{})})})]})]}),Object(u.jsx)(o.a,{items:[{id:"title",text:"Title"},{id:"bubble",text:"Bubble"},{id:"snow",text:"Snow"},{id:"filled",text:"Filled"},{id:"topLabel",text:"Top Label"},{id:"floatingLabel",text:"Floating Label"}]})]})]})}},394:function(e,t,c){"use strict";var n=c(128),i=(c(0),c(9));t.a=function(e){var t=e.title,c=void 0===t?"":t,l=e.description,s=void 0===l?"":l,a=e.children,o=void 0===a?null:a;return Object(i.jsxs)(n.a,{children:[c&&Object(i.jsx)("title",{children:c}),s&&Object(i.jsx)("meta",{name:"description",content:s}),o&&o]})}},396:function(e,t,c){"use strict";c(0);var n=c(1210),i=c(80),l=c(1),s=c(9);t.a=function(e){var t=e.items,c=void 0===t?[{to:"/",text:"Home"}]:t,a=e.basePath,o=void 0===a?l.a.APP:a;return Object(s.jsx)(n.a,{className:"breadcrumb-container d-inline-block",children:c.map((function(e,t){return Object(s.jsx)(n.a.Item,{linkAs:i.b,linkProps:{to:"".concat(o).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(t))}))})}},402:function(e,t,c){"use strict";var n=c(0),i=c.n(n),l=c(391),s=c(9),a=i.a.memo((function(e){var t=e.items;return Object(s.jsx)("ul",{className:"nav flex-column",children:t.map((function(e,t){return Object(s.jsxs)("li",{children:[Object(s.jsxs)("a",{className:"nav-link",href:"#".concat(e.id),children:[Object(s.jsx)(l.a,{icon:"chevron-right"}),Object(s.jsx)("span",{className:"align-middle",children:e.text})]}),e.subs&&Object(s.jsx)("ul",{className:"nav flex-column",children:e.subs.map((function(e,t){return Object(s.jsx)("li",{children:Object(s.jsx)("a",{className:"nav-link",href:"#".concat(e.id),children:e.text})},t)}))})]},t)}))})}));a.displayName="ScrollspyContent",t.a=a},403:function(e,t,c){"use strict";var n=c(0),i=c.n(n),l=c(407),s=c(81),a=c(18),o=c(129),r=c(402),d=c(9),b=function(e){var t=e.items,c=void 0===t?[]:t,i=e.width,b=void 0===i?"":i,u=Object(s.b)(),j=Object(a.h)().hash;return Object(n.useEffect)((function(){return document.documentElement.setAttribute("data-scrollspy","true"),j&&setTimeout((function(){try{document.querySelector(j).scrollIntoView()}catch(e){console.info("[".concat(j,"] element not found."))}}),30),function(){document.documentElement.removeAttribute("data-scrollspy")}}),[j]),Object(n.useEffect)((function(){return u(Object(o.b)(c)),function(){u(Object(o.b)([]))}}),[c,u]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.a,{md:"auto",className:"d-none d-lg-block",id:"scrollSpyMenu",style:{width:b},children:Object(d.jsx)(r.a,{items:c})})})};t.a=i.a.memo(b)},736:function(e,t,c){"use strict";c.d(t,"a",(function(){return i}));var n=c(405),i=function e(t){Object(n.a)(this,e),t.on("selection-change",(function(e,c){null===e&&null!==c?t.container.parentNode.classList.contains("editor-container")?t.container.parentNode.classList.remove("active"):t.container.classList.remove("active"):null!==e&&null===c&&(t.container.parentNode.classList.contains("editor-container")?t.container.parentNode.classList.add("active"):t.container.classList.add("active"))}))}}}]);