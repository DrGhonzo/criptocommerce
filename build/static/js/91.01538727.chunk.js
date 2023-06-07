(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[91],{325:function(e,t,c){"use strict";c.r(t);c(0);var s=c(1193),a=c(407),i=c(412),r=c(394),n=c(396),l=c(403),o=c(9);t.default=function(){var e="Images",t="Examples for opting images into responsive behavior (so they never become larger than their parent elements) and add lightweight styles to them\u2014all via classes.";return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.a,{title:e,description:t}),Object(o.jsxs)(s.a,{children:[Object(o.jsxs)(a.a,{children:[Object(o.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(o.jsxs)("div",{className:"page-title-container",children:[Object(o.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(o.jsx)(n.a,{items:[{to:"",text:"Home"},{to:"interface",title:"Interface"},{to:"interface/content",title:"Content"}]})]}),Object(o.jsx)(i.a,{className:"mb-5",body:!0,children:Object(o.jsx)(i.a.Text,{children:t})})]}),Object(o.jsxs)("section",{className:"scroll-section",id:"responsive",children:[Object(o.jsx)("h2",{className:"small-title",children:"Responsive"}),Object(o.jsx)(s.a,{children:Object(o.jsx)(a.a,{xs:"6",children:Object(o.jsx)(i.a,{className:"mb-5",children:Object(o.jsx)(i.a.Body,{children:Object(o.jsx)("img",{src:"/img/product/large/product-1.webp",className:"img-fluid rounded",alt:"Responsive image"})})})})})]}),Object(o.jsxs)("section",{className:"scroll-section",id:"fixedWidth",children:[Object(o.jsx)("h2",{className:"small-title",children:"Fixed Width"}),Object(o.jsxs)(i.a,{body:!0,className:"mb-5",children:[Object(o.jsx)("img",{src:"/img/product/small/product-2.webp",className:"img-fluid rounded mb-1 me-1 sw-6",alt:"Responsive image"}),Object(o.jsx)("img",{src:"/img/product/small/product-2.webp",className:"img-fluid rounded mb-1 me-1 sw-9",alt:"Responsive image"}),Object(o.jsx)("img",{src:"/img/product/small/product-2.webp",className:"img-fluid rounded mb-1 me-1 sw-13",alt:"Responsive image"}),Object(o.jsx)("img",{src:"/img/product/small/product-2.webp",className:"img-fluid rounded mb-1 me-1 sw-19",alt:"Responsive image"}),Object(o.jsx)("img",{src:"/img/product/small/product-2.webp",className:"img-fluid rounded mb-1 me-1 sw-35",alt:"Responsive image"})]})]}),Object(o.jsxs)("section",{className:"scroll-section",id:"fixedHeight",children:[Object(o.jsx)("h2",{className:"small-title",children:"Fixed Height"}),Object(o.jsxs)(i.a,{body:!0,className:"mb-5",children:[Object(o.jsx)("img",{src:"/img/product/small/product-3.webp",className:"img-fluid rounded mb-1 me-1 sh-6",alt:"Responsive image"}),Object(o.jsx)("img",{src:"/img/product/small/product-3.webp",className:"img-fluid rounded mb-1 me-1 sh-9",alt:"Responsive image"}),Object(o.jsx)("img",{src:"/img/product/small/product-3.webp",className:"img-fluid rounded mb-1 me-1 sh-13",alt:"Responsive image"}),Object(o.jsx)("img",{src:"/img/product/small/product-3.webp",className:"img-fluid rounded mb-1 me-1 sh-19",alt:"Responsive image"}),Object(o.jsx)("img",{src:"/img/product/small/product-3.webp",className:"img-fluid rounded mb-1 me-1 sh-35",alt:"Responsive image"})]})]}),Object(o.jsxs)("section",{className:"scroll-section",id:"aligning",children:[Object(o.jsx)("h2",{className:"small-title",children:"Aligning"}),Object(o.jsxs)(i.a,{body:!0,className:"mb-5",children:[Object(o.jsx)("img",{src:"/img/product/small/product-4.webp",className:"rounded mb-1 me-1 float-start sw-19",alt:"card image"}),Object(o.jsx)("img",{src:"/img/product/small/product-4.webp",className:"rounded mb-1 me-1 float-end sw-19",alt:"card image"}),Object(o.jsx)("img",{src:"/img/product/small/product-4.webp",className:"rounded mb-1 mx-auto d-block sw-19",alt:"card image"})]})]})]}),Object(o.jsx)(l.a,{items:[{id:"title",text:"Title"},{id:"responsive",text:"Responsive"},{id:"fixedWidth",text:"Fixed Width"},{id:"fixedHeight",text:"Fixed Height"},{id:"aligning",text:"Aligning"}]})]})]})}},394:function(e,t,c){"use strict";var s=c(128),a=(c(0),c(9));t.a=function(e){var t=e.title,c=void 0===t?"":t,i=e.description,r=void 0===i?"":i,n=e.children,l=void 0===n?null:n;return Object(a.jsxs)(s.a,{children:[c&&Object(a.jsx)("title",{children:c}),r&&Object(a.jsx)("meta",{name:"description",content:r}),l&&l]})}},396:function(e,t,c){"use strict";c(0);var s=c(1210),a=c(80),i=c(1),r=c(9);t.a=function(e){var t=e.items,c=void 0===t?[{to:"/",text:"Home"}]:t,n=e.basePath,l=void 0===n?i.a.APP:n;return Object(r.jsx)(s.a,{className:"breadcrumb-container d-inline-block",children:c.map((function(e,t){return Object(r.jsx)(s.a.Item,{linkAs:a.b,linkProps:{to:"".concat(l).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(t))}))})}},398:function(e,t,c){"use strict";var s=c(0),a=s.createContext(null);a.displayName="CardHeaderContext",t.a=a},402:function(e,t,c){"use strict";var s=c(0),a=c.n(s),i=c(391),r=c(9),n=a.a.memo((function(e){var t=e.items;return Object(r.jsx)("ul",{className:"nav flex-column",children:t.map((function(e,t){return Object(r.jsxs)("li",{children:[Object(r.jsxs)("a",{className:"nav-link",href:"#".concat(e.id),children:[Object(r.jsx)(i.a,{icon:"chevron-right"}),Object(r.jsx)("span",{className:"align-middle",children:e.text})]}),e.subs&&Object(r.jsx)("ul",{className:"nav flex-column",children:e.subs.map((function(e,t){return Object(r.jsx)("li",{children:Object(r.jsx)("a",{className:"nav-link",href:"#".concat(e.id),children:e.text})},t)}))})]},t)}))})}));n.displayName="ScrollspyContent",t.a=n},403:function(e,t,c){"use strict";var s=c(0),a=c.n(s),i=c(407),r=c(81),n=c(18),l=c(129),o=c(402),d=c(9),m=function(e){var t=e.items,c=void 0===t?[]:t,a=e.width,m=void 0===a?"":a,b=Object(r.b)(),j=Object(n.h)().hash;return Object(s.useEffect)((function(){return document.documentElement.setAttribute("data-scrollspy","true"),j&&setTimeout((function(){try{document.querySelector(j).scrollIntoView()}catch(e){console.info("[".concat(j,"] element not found."))}}),30),function(){document.documentElement.removeAttribute("data-scrollspy")}}),[j]),Object(s.useEffect)((function(){return b(Object(l.b)(c)),function(){b(Object(l.b)([]))}}),[c,b]),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(i.a,{md:"auto",className:"d-none d-lg-block",id:"scrollSpyMenu",style:{width:m},children:Object(d.jsx)(o.a,{items:c})})})};t.a=a.a.memo(m)},407:function(e,t,c){"use strict";var s=c(389),a=c(4),i=c(386),r=c(387),n=c.n(r),l=c(0),o=c(388),d=c(9),m=["as","bsPrefix","className"],b=["className"];var j=l.forwardRef((function(e,t){var c=function(e){var t=e.as,c=e.bsPrefix,s=e.className,r=Object(i.a)(e,m);c=Object(o.c)(c,"col");var l=Object(o.a)(),d=Object(o.b)(),b=[],j=[];return l.forEach((function(e){var t,s,a,i=r[e];delete r[e],"object"===typeof i&&null!=i?(t=i.span,s=i.offset,a=i.order):t=i;var n=e!==d?"-".concat(e):"";t&&b.push(!0===t?"".concat(c).concat(n):"".concat(c).concat(n,"-").concat(t)),null!=a&&j.push("order".concat(n,"-").concat(a)),null!=s&&j.push("offset".concat(n,"-").concat(s))})),[Object(a.a)(Object(a.a)({},r),{},{className:n.a.apply(void 0,[s].concat(b,j))}),{as:t,bsPrefix:c,spans:b}]}(e),r=Object(s.a)(c,2),l=r[0],j=l.className,u=Object(i.a)(l,b),x=r[1],p=x.as,O=void 0===p?"div":p,f=x.bsPrefix,g=x.spans;return Object(d.jsx)(O,Object(a.a)(Object(a.a)({},u),{},{ref:t,className:n()(j,!g.length&&f)}))}));j.displayName="Col",t.a=j},412:function(e,t,c){"use strict";var s=c(4),a=c(386),i=c(387),r=c.n(i),n=c(0),l=c(388),o=c(395),d=c(408),m=c(9),b=["bsPrefix","className","variant","as"],j=n.forwardRef((function(e,t){var c=e.bsPrefix,i=e.className,n=e.variant,o=e.as,d=void 0===o?"img":o,j=Object(a.a)(e,b),u=Object(l.c)(c,"card-img");return Object(m.jsx)(d,Object(s.a)({ref:t,className:r()(n?"".concat(u,"-").concat(n):u,i)},j))}));j.displayName="CardImg";var u=j,x=c(398),p=["bsPrefix","className","as"],O=n.forwardRef((function(e,t){var c=e.bsPrefix,i=e.className,o=e.as,d=void 0===o?"div":o,b=Object(a.a)(e,p),j=Object(l.c)(c,"card-header"),u=Object(n.useMemo)((function(){return{cardHeaderBsPrefix:j}}),[j]);return Object(m.jsx)(x.a.Provider,{value:u,children:Object(m.jsx)(d,Object(s.a)(Object(s.a)({ref:t},b),{},{className:r()(i,j)}))})}));O.displayName="CardHeader";var f=O,g=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(d.a)("h5"),v=Object(d.a)("h6"),N=Object(o.a)("card-body"),w=Object(o.a)("card-title",{Component:h}),y=Object(o.a)("card-subtitle",{Component:v}),R=Object(o.a)("card-link",{Component:"a"}),P=Object(o.a)("card-text",{Component:"p"}),C=Object(o.a)("card-footer"),k=Object(o.a)("card-img-overlay"),H=n.forwardRef((function(e,t){var c=e.bsPrefix,i=e.className,n=e.bg,o=e.text,d=e.border,b=e.body,j=void 0!==b&&b,u=e.children,x=e.as,p=void 0===x?"div":x,O=Object(a.a)(e,g),f=Object(l.c)(c,"card");return Object(m.jsx)(p,Object(s.a)(Object(s.a)({ref:t},O),{},{className:r()(i,f,n&&"bg-".concat(n),o&&"text-".concat(o),d&&"border-".concat(d)),children:j?Object(m.jsx)(N,{children:u}):u}))}));H.displayName="Card";t.a=Object.assign(H,{Img:u,Title:w,Subtitle:y,Body:N,Link:R,Text:P,Header:f,Footer:C,ImgOverlay:k})}}]);