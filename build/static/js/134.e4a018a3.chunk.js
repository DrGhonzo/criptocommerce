(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[134],{365:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1193),s=c(407),l=c(412),i=c(487),r=c(391),o=c(396),j=c(394),d=c(403),b=c(17),m=c(389),u=c(507),x=c.n(u),O=c(9),h=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),c=t[0],a=t[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(x.a,{tags:c,allowNew:!0,onDelete:function(e){var t=Object(b.a)(c);t.splice(e,1),a(t)},onAddition:function(e){a((function(){return[].concat(Object(b.a)(c),[e])}))},placeholderText:""})})},f=c(6),g=c.n(f),p=c(1),N=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),c=t[0],l=t[1],i=Object(n.useState)([]),r=Object(m.a)(i,2),o=r[0],j=r[1];Object(n.useEffect)((function(){g.a.get("".concat(p.h,"/users")).then((function(e){j(e.data)}))}),[]);return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(x.a,{tags:c,onDelete:function(e){var t=Object(b.a)(c);t.splice(e,1),l(t)},suggestions:o,onAddition:function(e){l((function(){return[].concat(Object(b.a)(c),[e])}))},placeholderText:"",minQueryLength:1,suggestionComponent:function(e){var t=e.item,c=e.query;return Object(O.jsxs)(a.a,{className:"g-0 position-relative ".concat(t.name===c?"match":"no-match"),id:t.id,children:[Object(O.jsx)(s.a,{xs:"auto",children:Object(O.jsx)("img",{src:t.thumb,alt:t.name,className:"sw-3 me-2 rounded-xl"})}),Object(O.jsx)(s.a,{className:"d-flex align-items-center",children:Object(O.jsx)("div",{className:"stretched-link body-link",children:t.name})})]})}})})},v=function(e){var t=e.label,c=Object(n.useState)([]),a=Object(m.a)(c,2),s=a[0],l=a[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"form-floating ".concat(s.length>0?"tag-added":"tag-not-added"),children:[Object(O.jsx)(x.a,{tags:s,allowNew:!0,onDelete:function(e){var t=Object(b.a)(s);t.splice(e,1),l(t)},onAddition:function(e){l((function(){return[].concat(Object(b.a)(s),[e])}))},placeholderText:""}),Object(O.jsx)("label",{children:t})]})})},y=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),c=t[0],a=t[1];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(x.a,{tags:c,allowNew:!0,onDelete:function(e){var t=Object(b.a)(c);t.splice(e,1),a(t)},onAddition:function(e){a((function(){return[].concat(Object(b.a)(c),[e])}))},placeholderText:"Tag"})})},T=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([{id:"Anpan",name:"Anpan"},{id:"Breadstick",name:"Breadstick"},{id:"Boule",name:"Boule"},{id:"Cornbread",name:"Cornbread"},{id:"Fougasse",name:"Fougasse"},{id:"Guernsey Gache",name:"Guernsey Gache"},{id:"Lefse",name:"Lefse"},{id:"Melonpan",name:"Melonpan"},{id:"Naan",name:"Naan"},{id:"Panbrioche",name:"Panbrioche"},{id:"Rewena",name:"Rewena"},{id:"Shirmal",name:"Shirmal"},{id:"Tunnbr\xf6d",name:"Tunnbr\xf6d"},{id:"V\xe1no\u010dka",name:"V\xe1no\u010dka"},{id:"Zopf",name:"Zopf"}]),l=Object(m.a)(s,1)[0];return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(x.a,{tags:c,onDelete:function(e){var t=Object(b.a)(c);t.splice(e,1),a(t)},suggestions:l,onAddition:function(e){a((function(){return[].concat(Object(b.a)(c),[e])}))},placeholderText:"",minQueryLength:1})})};t.default=function(){var e="A fantastically simple tagging component for your React projects.";return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(j.a,{title:"Tag",description:e}),Object(O.jsxs)(a.a,{children:[Object(O.jsxs)(s.a,{children:[Object(O.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(O.jsxs)("div",{className:"page-title-container",children:[Object(O.jsx)("h1",{className:"mb-0 pb-0 display-4",children:"Tag"}),Object(O.jsx)(o.a,{items:[{to:"",text:"Home"},{to:"interface",text:"Interface"},{to:"interface/forms",title:"Forms"},{to:"interface/forms/controls",title:"Controls"}]})]}),Object(O.jsx)(l.a,{className:"mb-5",body:!0,children:Object(O.jsx)(l.a.Text,{children:e})})]}),Object(O.jsxs)("section",{className:"scroll-section",id:"basic",children:[Object(O.jsx)("h2",{className:"small-title",children:"Basic"}),Object(O.jsx)(l.a,{body:!0,className:"mb-5",children:Object(O.jsx)(a.a,{children:Object(O.jsxs)(s.a,{xs:"12",lg:"6",children:[Object(O.jsx)(i.a.Label,{className:"d-block",children:"Tags"}),Object(O.jsx)(h,{})]})})})]}),Object(O.jsxs)("section",{className:"scroll-section",id:"suggestions",children:[Object(O.jsx)("h2",{className:"small-title",children:"Suggestions"}),Object(O.jsx)(l.a,{body:!0,className:"mb-5",children:Object(O.jsx)(a.a,{children:Object(O.jsxs)(s.a,{xs:"12",lg:"6",children:[Object(O.jsx)(i.a.Label,{className:"d-block",children:"Tags"}),Object(O.jsx)(T,{})]})})})]}),Object(O.jsxs)("section",{className:"scroll-section",id:"placeholder",children:[Object(O.jsx)("h2",{className:"small-title",children:"Placeholder"}),Object(O.jsx)(l.a,{body:!0,className:"mb-5",children:Object(O.jsx)(a.a,{children:Object(O.jsxs)(s.a,{xs:"12",lg:"6",children:[Object(O.jsx)(i.a.Label,{className:"d-block",children:"Tags"}),Object(O.jsx)(y,{})]})})})]}),Object(O.jsxs)("section",{className:"scroll-section",id:"customRender",children:[Object(O.jsx)("h2",{className:"small-title",children:"Custom Render"}),Object(O.jsx)(l.a,{body:!0,className:"mb-5",children:Object(O.jsx)(a.a,{children:Object(O.jsxs)(s.a,{xs:"12",lg:"6",children:[Object(O.jsx)(i.a.Label,{className:"d-block",children:"Tags"}),Object(O.jsx)(N,{})]})})})]}),Object(O.jsxs)("section",{className:"scroll-section",id:"topLabel",children:[Object(O.jsx)("h2",{className:"small-title",children:"Top Label"}),Object(O.jsx)(l.a,{body:!0,className:"mb-5",children:Object(O.jsx)(a.a,{children:Object(O.jsx)(s.a,{xs:"12",lg:"6",children:Object(O.jsxs)("div",{className:"top-label",children:[Object(O.jsx)(h,{}),Object(O.jsx)("span",{children:"TAGS"})]})})})})]}),Object(O.jsxs)("section",{className:"scroll-section",id:"filled",children:[Object(O.jsx)("h2",{className:"small-title",children:"Filled"}),Object(O.jsx)(l.a,{body:!0,className:"mb-5",children:Object(O.jsx)(a.a,{children:Object(O.jsx)(s.a,{xs:"12",lg:"6",children:Object(O.jsxs)("div",{className:"filled",children:[Object(O.jsx)(r.a,{icon:"loaf"}),Object(O.jsx)(y,{})]})})})})]}),Object(O.jsxs)("section",{className:"scroll-section",id:"floatingLabel",children:[Object(O.jsx)("h2",{className:"small-title",children:"Floating Label"}),Object(O.jsx)(l.a,{body:!0,className:"mb-5",children:Object(O.jsx)(a.a,{children:Object(O.jsx)(s.a,{xs:"12",lg:"6",children:Object(O.jsx)(v,{label:"Search"})})})})]})]}),Object(O.jsx)(d.a,{items:[{id:"title",text:"Title"},{id:"basic",text:"Basic"},{id:"suggestions",text:"Suggestions"},{id:"placeholder",text:"Placeholder"},{id:"customRender",text:"Custom Render"},{id:"topLabel",text:"Top Label"},{id:"filled",text:"Filled"},{id:"floatingLabel",text:"Floating Label"}]})]})]})}},394:function(e,t,c){"use strict";var n=c(128),a=(c(0),c(9));t.a=function(e){var t=e.title,c=void 0===t?"":t,s=e.description,l=void 0===s?"":s,i=e.children,r=void 0===i?null:i;return Object(a.jsxs)(n.a,{children:[c&&Object(a.jsx)("title",{children:c}),l&&Object(a.jsx)("meta",{name:"description",content:l}),r&&r]})}},396:function(e,t,c){"use strict";c(0);var n=c(1210),a=c(80),s=c(1),l=c(9);t.a=function(e){var t=e.items,c=void 0===t?[{to:"/",text:"Home"}]:t,i=e.basePath,r=void 0===i?s.a.APP:i;return Object(l.jsx)(n.a,{className:"breadcrumb-container d-inline-block",children:c.map((function(e,t){return Object(l.jsx)(n.a.Item,{linkAs:a.b,linkProps:{to:"".concat(r).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(t))}))})}},402:function(e,t,c){"use strict";var n=c(0),a=c.n(n),s=c(391),l=c(9),i=a.a.memo((function(e){var t=e.items;return Object(l.jsx)("ul",{className:"nav flex-column",children:t.map((function(e,t){return Object(l.jsxs)("li",{children:[Object(l.jsxs)("a",{className:"nav-link",href:"#".concat(e.id),children:[Object(l.jsx)(s.a,{icon:"chevron-right"}),Object(l.jsx)("span",{className:"align-middle",children:e.text})]}),e.subs&&Object(l.jsx)("ul",{className:"nav flex-column",children:e.subs.map((function(e,t){return Object(l.jsx)("li",{children:Object(l.jsx)("a",{className:"nav-link",href:"#".concat(e.id),children:e.text})},t)}))})]},t)}))})}));i.displayName="ScrollspyContent",t.a=i},403:function(e,t,c){"use strict";var n=c(0),a=c.n(n),s=c(407),l=c(81),i=c(18),r=c(129),o=c(402),j=c(9),d=function(e){var t=e.items,c=void 0===t?[]:t,a=e.width,d=void 0===a?"":a,b=Object(l.b)(),m=Object(i.h)().hash;return Object(n.useEffect)((function(){return document.documentElement.setAttribute("data-scrollspy","true"),m&&setTimeout((function(){try{document.querySelector(m).scrollIntoView()}catch(e){console.info("[".concat(m,"] element not found."))}}),30),function(){document.documentElement.removeAttribute("data-scrollspy")}}),[m]),Object(n.useEffect)((function(){return b(Object(r.b)(c)),function(){b(Object(r.b)([]))}}),[c,b]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(s.a,{md:"auto",className:"d-none d-lg-block",id:"scrollSpyMenu",style:{width:d},children:Object(j.jsx)(o.a,{items:c})})})};t.a=a.a.memo(d)}}]);