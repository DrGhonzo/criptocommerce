(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[114],{324:function(e,c,t){"use strict";t.r(c);t(0);var a=t(1193),s=t(407),n=t(412),r=t(80),i=t(394),o=t(396),l=t(391),d=t(9);c.default=function(){var e="Icons",c="Icons of the template.";return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.a,{title:e,description:c}),Object(d.jsx)(a.a,{children:Object(d.jsx)(s.a,{children:Object(d.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(d.jsxs)("div",{className:"page-title-container",children:[Object(d.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(d.jsx)(o.a,{items:[{to:"",text:"Home"},{to:"interface",text:"Interface"},{to:"interface/content",text:"Content"}]})]}),Object(d.jsx)(n.a,{className:"mb-5",body:!0,children:Object(d.jsx)(n.a.Text,{children:c})})]})})}),Object(d.jsxs)(a.a,{xs:"1",sm:"2",xl:"3",className:"g-2",children:[Object(d.jsx)(s.a,{children:Object(d.jsx)(n.a,{className:"h-100",children:Object(d.jsxs)(n.a.Body,{className:"row gx-4",children:[Object(d.jsx)(s.a,{xs:"auto",children:Object(d.jsx)(l.a,{icon:"acorn",className:"text-primary"})}),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(r.c,{to:"/interface/content/icons/cs-line-icons",className:"heading stretched-link d-block",children:"CS Line Icons"}),Object(d.jsx)("div",{className:"text-muted",children:"A cute line icon set crafted exclusively for Acorn."})]})]})})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(n.a,{className:"h-100",children:Object(d.jsxs)(n.a.Body,{className:"row gx-4",children:[Object(d.jsx)(s.a,{xs:"auto",children:Object(d.jsx)(l.a,{icon:"acorn",className:"text-primary"})}),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(r.c,{to:"/interface/content/icons/cs-interface-icons",className:"heading stretched-link d-block",children:"CS Interface Icons"}),Object(d.jsx)("div",{className:"text-muted",children:"An essential and smaller version of CS Line icons in font format."})]})]})})}),Object(d.jsx)(s.a,{children:Object(d.jsx)(n.a,{className:"h-100",children:Object(d.jsxs)(n.a.Body,{className:"row gx-4",children:[Object(d.jsx)(s.a,{xs:"auto",children:Object(d.jsx)(l.a,{icon:"bootstrap",className:"text-primary"})}),Object(d.jsxs)(s.a,{children:[Object(d.jsx)(r.c,{to:"/interface/content/icons/bootstrap-icons",className:"heading stretched-link d-block",children:"Bootstrap Icons"}),Object(d.jsx)("div",{className:"text-muted",children:"Free, high quality, open source icon library with over 1,300 icons."})]})]})})})]})]})}},394:function(e,c,t){"use strict";var a=t(128),s=(t(0),t(9));c.a=function(e){var c=e.title,t=void 0===c?"":c,n=e.description,r=void 0===n?"":n,i=e.children,o=void 0===i?null:i;return Object(s.jsxs)(a.a,{children:[t&&Object(s.jsx)("title",{children:t}),r&&Object(s.jsx)("meta",{name:"description",content:r}),o&&o]})}},396:function(e,c,t){"use strict";t(0);var a=t(1210),s=t(80),n=t(1),r=t(9);c.a=function(e){var c=e.items,t=void 0===c?[{to:"/",text:"Home"}]:c,i=e.basePath,o=void 0===i?n.a.APP:i;return Object(r.jsx)(a.a,{className:"breadcrumb-container d-inline-block",children:t.map((function(e,c){return Object(r.jsx)(a.a.Item,{linkAs:s.b,linkProps:{to:"".concat(o).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(c))}))})}},398:function(e,c,t){"use strict";var a=t(0),s=a.createContext(null);s.displayName="CardHeaderContext",c.a=s},407:function(e,c,t){"use strict";var a=t(389),s=t(4),n=t(386),r=t(387),i=t.n(r),o=t(0),l=t(388),d=t(9),j=["as","bsPrefix","className"],b=["className"];var x=o.forwardRef((function(e,c){var t=function(e){var c=e.as,t=e.bsPrefix,a=e.className,r=Object(n.a)(e,j);t=Object(l.c)(t,"col");var o=Object(l.a)(),d=Object(l.b)(),b=[],x=[];return o.forEach((function(e){var c,a,s,n=r[e];delete r[e],"object"===typeof n&&null!=n?(c=n.span,a=n.offset,s=n.order):c=n;var i=e!==d?"-".concat(e):"";c&&b.push(!0===c?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(c)),null!=s&&x.push("order".concat(i,"-").concat(s)),null!=a&&x.push("offset".concat(i,"-").concat(a))})),[Object(s.a)(Object(s.a)({},r),{},{className:i.a.apply(void 0,[a].concat(b,x))}),{as:c,bsPrefix:t,spans:b}]}(e),r=Object(a.a)(t,2),o=r[0],x=o.className,O=Object(n.a)(o,b),m=r[1],h=m.as,f=void 0===h?"div":h,u=m.bsPrefix,v=m.spans;return Object(d.jsx)(f,Object(s.a)(Object(s.a)({},O),{},{ref:c,className:i()(x,!v.length&&u)}))}));x.displayName="Col",c.a=x},412:function(e,c,t){"use strict";var a=t(4),s=t(386),n=t(387),r=t.n(n),i=t(0),o=t(388),l=t(395),d=t(408),j=t(9),b=["bsPrefix","className","variant","as"],x=i.forwardRef((function(e,c){var t=e.bsPrefix,n=e.className,i=e.variant,l=e.as,d=void 0===l?"img":l,x=Object(s.a)(e,b),O=Object(o.c)(t,"card-img");return Object(j.jsx)(d,Object(a.a)({ref:c,className:r()(i?"".concat(O,"-").concat(i):O,n)},x))}));x.displayName="CardImg";var O=x,m=t(398),h=["bsPrefix","className","as"],f=i.forwardRef((function(e,c){var t=e.bsPrefix,n=e.className,l=e.as,d=void 0===l?"div":l,b=Object(s.a)(e,h),x=Object(o.c)(t,"card-header"),O=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:x}}),[x]);return Object(j.jsx)(m.a.Provider,{value:O,children:Object(j.jsx)(d,Object(a.a)(Object(a.a)({ref:c},b),{},{className:r()(n,x)}))})}));f.displayName="CardHeader";var u=f,v=["bsPrefix","className","bg","text","border","body","children","as"],N=Object(d.a)("h5"),p=Object(d.a)("h6"),y=Object(l.a)("card-body"),g=Object(l.a)("card-title",{Component:N}),C=Object(l.a)("card-subtitle",{Component:p}),P=Object(l.a)("card-link",{Component:"a"}),k=Object(l.a)("card-text",{Component:"p"}),I=Object(l.a)("card-footer"),w=Object(l.a)("card-img-overlay"),B=i.forwardRef((function(e,c){var t=e.bsPrefix,n=e.className,i=e.bg,l=e.text,d=e.border,b=e.body,x=void 0!==b&&b,O=e.children,m=e.as,h=void 0===m?"div":m,f=Object(s.a)(e,v),u=Object(o.c)(t,"card");return Object(j.jsx)(h,Object(a.a)(Object(a.a)({ref:c},f),{},{className:r()(n,u,i&&"bg-".concat(i),l&&"text-".concat(l),d&&"border-".concat(d)),children:x?Object(j.jsx)(y,{children:O}):O}))}));B.displayName="Card";c.a=Object.assign(B,{Img:O,Title:g,Subtitle:C,Body:y,Link:P,Text:k,Header:u,Footer:I,ImgOverlay:w})}}]);