(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[113],{323:function(e,a,c){"use strict";c.r(a);c(0);var t=c(1193),s=c(407),r=c(412),n=c(80),i=c(394),l=c(396),o=c(391),j=c(9);a.default=function(){var e="Content",a="Images, icons and typography used throughout the project.";return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.a,{title:e,description:a}),Object(j.jsx)(t.a,{children:Object(j.jsx)(s.a,{children:Object(j.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(j.jsxs)("div",{className:"page-title-container",children:[Object(j.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(j.jsx)(l.a,{items:[{to:"",text:"Home"},{to:"interface",text:"Interface"}]})]}),Object(j.jsx)(r.a,{className:"mb-5",body:!0,children:Object(j.jsx)(r.a.Text,{children:a})})]})})}),Object(j.jsxs)(t.a,{xs:"1",sm:"2",xl:"3",className:"g-2",children:[Object(j.jsx)(s.a,{children:Object(j.jsx)(r.a,{className:"h-100",children:Object(j.jsxs)(r.a.Body,{className:"row gx-4",children:[Object(j.jsx)(s.a,{xs:"auto",children:Object(j.jsx)(o.a,{icon:"acorn",className:"text-primary"})}),Object(j.jsxs)(s.a,{children:[Object(j.jsx)(n.c,{to:"/interface/content/icons",className:"heading stretched-link d-block",children:"Icons"}),Object(j.jsx)("div",{className:"text-muted",children:"Icons of the template."})]})]})})}),Object(j.jsx)(s.a,{children:Object(j.jsx)(r.a,{className:"h-100",children:Object(j.jsxs)(r.a.Body,{className:"row gx-4",children:[Object(j.jsx)(s.a,{xs:"auto",children:Object(j.jsx)(o.a,{icon:"image",className:"text-primary"})}),Object(j.jsxs)(s.a,{children:[Object(j.jsx)(n.c,{to:"/interface/content/images",className:"heading stretched-link d-block",children:"Images"}),Object(j.jsx)("div",{className:"text-muted",children:"Image usages with static sizes and responsive classes."})]})]})})}),Object(j.jsx)(s.a,{children:Object(j.jsx)(r.a,{className:"h-100",children:Object(j.jsxs)(r.a.Body,{className:"row gx-4",children:[Object(j.jsx)(s.a,{xs:"auto",children:Object(j.jsx)(o.a,{icon:"layout-3",className:"text-primary"})}),Object(j.jsxs)(s.a,{children:[Object(j.jsx)(n.c,{to:"/interface/content/tables",className:"heading stretched-link d-block",children:"Tables"}),Object(j.jsx)("div",{className:"text-muted",children:"Examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap."})]})]})})}),Object(j.jsx)(s.a,{children:Object(j.jsx)(r.a,{className:"h-100",children:Object(j.jsxs)(r.a.Body,{className:"row gx-4",children:[Object(j.jsx)(s.a,{xs:"auto",children:Object(j.jsx)(o.a,{icon:"text",className:"text-primary"})}),Object(j.jsxs)(s.a,{children:[Object(j.jsx)(n.c,{to:"/interface/content/typography",className:"heading stretched-link d-block",children:"Typography"}),Object(j.jsx)("div",{className:"text-muted",children:"Examples for typography, including global settings, headings, body text, lists, and more."})]})]})})}),Object(j.jsx)(s.a,{children:Object(j.jsx)(r.a,{className:"h-100",children:Object(j.jsxs)(r.a.Body,{className:"row gx-4",children:[Object(j.jsx)(s.a,{xs:"auto",children:Object(j.jsx)(o.a,{icon:"menu",className:"text-primary"})}),Object(j.jsxs)(s.a,{children:[Object(j.jsx)(n.c,{to:"/interface/content/menu",className:"heading stretched-link d-block",children:"Menu"}),Object(j.jsx)("div",{className:"text-muted",children:"Different menu types that can be configured further."})]})]})})})]})]})}},394:function(e,a,c){"use strict";var t=c(128),s=(c(0),c(9));a.a=function(e){var a=e.title,c=void 0===a?"":a,r=e.description,n=void 0===r?"":r,i=e.children,l=void 0===i?null:i;return Object(s.jsxs)(t.a,{children:[c&&Object(s.jsx)("title",{children:c}),n&&Object(s.jsx)("meta",{name:"description",content:n}),l&&l]})}},396:function(e,a,c){"use strict";c(0);var t=c(1210),s=c(80),r=c(1),n=c(9);a.a=function(e){var a=e.items,c=void 0===a?[{to:"/",text:"Home"}]:a,i=e.basePath,l=void 0===i?r.a.APP:i;return Object(n.jsx)(t.a,{className:"breadcrumb-container d-inline-block",children:c.map((function(e,a){return Object(n.jsx)(t.a.Item,{linkAs:s.b,linkProps:{to:"".concat(l).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(a))}))})}},398:function(e,a,c){"use strict";var t=c(0),s=t.createContext(null);s.displayName="CardHeaderContext",a.a=s},407:function(e,a,c){"use strict";var t=c(389),s=c(4),r=c(386),n=c(387),i=c.n(n),l=c(0),o=c(388),j=c(9),d=["as","bsPrefix","className"],b=["className"];var x=l.forwardRef((function(e,a){var c=function(e){var a=e.as,c=e.bsPrefix,t=e.className,n=Object(r.a)(e,d);c=Object(o.c)(c,"col");var l=Object(o.a)(),j=Object(o.b)(),b=[],x=[];return l.forEach((function(e){var a,t,s,r=n[e];delete n[e],"object"===typeof r&&null!=r?(a=r.span,t=r.offset,s=r.order):a=r;var i=e!==j?"-".concat(e):"";a&&b.push(!0===a?"".concat(c).concat(i):"".concat(c).concat(i,"-").concat(a)),null!=s&&x.push("order".concat(i,"-").concat(s)),null!=t&&x.push("offset".concat(i,"-").concat(t))})),[Object(s.a)(Object(s.a)({},n),{},{className:i.a.apply(void 0,[t].concat(b,x))}),{as:a,bsPrefix:c,spans:b}]}(e),n=Object(t.a)(c,2),l=n[0],x=l.className,m=Object(r.a)(l,b),h=n[1],O=h.as,u=void 0===O?"div":O,f=h.bsPrefix,p=h.spans;return Object(j.jsx)(u,Object(s.a)(Object(s.a)({},m),{},{ref:a,className:i()(x,!p.length&&f)}))}));x.displayName="Col",a.a=x},412:function(e,a,c){"use strict";var t=c(4),s=c(386),r=c(387),n=c.n(r),i=c(0),l=c(388),o=c(395),j=c(408),d=c(9),b=["bsPrefix","className","variant","as"],x=i.forwardRef((function(e,a){var c=e.bsPrefix,r=e.className,i=e.variant,o=e.as,j=void 0===o?"img":o,x=Object(s.a)(e,b),m=Object(l.c)(c,"card-img");return Object(d.jsx)(j,Object(t.a)({ref:a,className:n()(i?"".concat(m,"-").concat(i):m,r)},x))}));x.displayName="CardImg";var m=x,h=c(398),O=["bsPrefix","className","as"],u=i.forwardRef((function(e,a){var c=e.bsPrefix,r=e.className,o=e.as,j=void 0===o?"div":o,b=Object(s.a)(e,O),x=Object(l.c)(c,"card-header"),m=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:x}}),[x]);return Object(d.jsx)(h.a.Provider,{value:m,children:Object(d.jsx)(j,Object(t.a)(Object(t.a)({ref:a},b),{},{className:n()(r,x)}))})}));u.displayName="CardHeader";var f=u,p=["bsPrefix","className","bg","text","border","body","children","as"],N=Object(j.a)("h5"),v=Object(j.a)("h6"),g=Object(o.a)("card-body"),y=Object(o.a)("card-title",{Component:N}),k=Object(o.a)("card-subtitle",{Component:v}),P=Object(o.a)("card-link",{Component:"a"}),w=Object(o.a)("card-text",{Component:"p"}),C=Object(o.a)("card-footer"),I=Object(o.a)("card-img-overlay"),B=i.forwardRef((function(e,a){var c=e.bsPrefix,r=e.className,i=e.bg,o=e.text,j=e.border,b=e.body,x=void 0!==b&&b,m=e.children,h=e.as,O=void 0===h?"div":h,u=Object(s.a)(e,p),f=Object(l.c)(c,"card");return Object(d.jsx)(O,Object(t.a)(Object(t.a)({ref:a},u),{},{className:n()(r,f,i&&"bg-".concat(i),o&&"text-".concat(o),j&&"border-".concat(j)),children:x?Object(d.jsx)(g,{children:m}):m}))}));B.displayName="Card";a.a=Object.assign(B,{Img:m,Title:y,Subtitle:k,Body:g,Link:P,Text:w,Header:f,Footer:C,ImgOverlay:I})}}]);