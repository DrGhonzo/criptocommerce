(this["webpackJsonpacorn-react"]=this["webpackJsonpacorn-react"]||[]).push([[100],{331:function(e,t,a){"use strict";a.r(t);a(0);var c=a(1193),n=a(407),r=a(412),o=a(36),i=a(394),s=a(396),l=a(503),b=a(9);t.default=function(){var e="Vertical No Hidden Menu",t="A vertical menu that never gets into semi-hidden state and switches to mobile view directly after desktop view.";return Object(l.a)({placement:o.d.Vertical,behaviour:o.c.Pinned,breakpoints:{verticalUnpinned:1200,verticalMobile:1200},pinEnable:!1}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{title:e,description:t}),Object(b.jsx)(c.a,{children:Object(b.jsx)(n.a,{children:Object(b.jsxs)("section",{className:"scroll-section",id:"title",children:[Object(b.jsxs)("div",{className:"page-title-container",children:[Object(b.jsx)("h1",{className:"mb-0 pb-0 display-4",children:e}),Object(b.jsx)(s.a,{items:[{to:"",text:"Home"},{to:"interface",text:"Interface"},{to:"interface/content",text:"Content"},{to:"interface/content/menu",text:"Menu"}]})]}),Object(b.jsx)(r.a,{className:"mb-5",body:!0,children:Object(b.jsx)(r.a.Text,{children:t})})]})})})]})}},394:function(e,t,a){"use strict";var c=a(128),n=(a(0),a(9));t.a=function(e){var t=e.title,a=void 0===t?"":t,r=e.description,o=void 0===r?"":r,i=e.children,s=void 0===i?null:i;return Object(n.jsxs)(c.a,{children:[a&&Object(n.jsx)("title",{children:a}),o&&Object(n.jsx)("meta",{name:"description",content:o}),s&&s]})}},396:function(e,t,a){"use strict";a(0);var c=a(1210),n=a(80),r=a(1),o=a(9);t.a=function(e){var t=e.items,a=void 0===t?[{to:"/",text:"Home"}]:t,i=e.basePath,s=void 0===i?r.a.APP:i;return Object(o.jsx)(c.a,{className:"breadcrumb-container d-inline-block",children:a.map((function(e,t){return Object(o.jsx)(c.a.Item,{linkAs:n.b,linkProps:{to:"".concat(s).concat(e.to)},children:e.title||e.text},"breadCrumb.".concat(t))}))})}},398:function(e,t,a){"use strict";var c=a(0),n=c.createContext(null);n.displayName="CardHeaderContext",t.a=n},407:function(e,t,a){"use strict";var c=a(389),n=a(4),r=a(386),o=a(387),i=a.n(o),s=a(0),l=a(388),b=a(9),d=["as","bsPrefix","className"],u=["className"];var j=s.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,o=Object(r.a)(e,d);a=Object(l.c)(a,"col");var s=Object(l.a)(),b=Object(l.b)(),u=[],j=[];return s.forEach((function(e){var t,c,n,r=o[e];delete o[e],"object"===typeof r&&null!=r?(t=r.span,c=r.offset,n=r.order):t=r;var i=e!==b?"-".concat(e):"";t&&u.push(!0===t?"".concat(a).concat(i):"".concat(a).concat(i,"-").concat(t)),null!=n&&j.push("order".concat(i,"-").concat(n)),null!=c&&j.push("offset".concat(i,"-").concat(c))})),[Object(n.a)(Object(n.a)({},o),{},{className:i.a.apply(void 0,[c].concat(u,j))}),{as:t,bsPrefix:a,spans:u}]}(e),o=Object(c.a)(a,2),s=o[0],j=s.className,O=Object(r.a)(s,u),v=o[1],f=v.as,m=void 0===f?"div":f,p=v.bsPrefix,x=v.spans;return Object(b.jsx)(m,Object(n.a)(Object(n.a)({},O),{},{ref:t,className:i()(j,!x.length&&p)}))}));j.displayName="Col",t.a=j},412:function(e,t,a){"use strict";var c=a(4),n=a(386),r=a(387),o=a.n(r),i=a(0),s=a(388),l=a(395),b=a(408),d=a(9),u=["bsPrefix","className","variant","as"],j=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.variant,l=e.as,b=void 0===l?"img":l,j=Object(n.a)(e,u),O=Object(s.c)(a,"card-img");return Object(d.jsx)(b,Object(c.a)({ref:t,className:o()(i?"".concat(O,"-").concat(i):O,r)},j))}));j.displayName="CardImg";var O=j,v=a(398),f=["bsPrefix","className","as"],m=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,l=e.as,b=void 0===l?"div":l,u=Object(n.a)(e,f),j=Object(s.c)(a,"card-header"),O=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:j}}),[j]);return Object(d.jsx)(v.a.Provider,{value:O,children:Object(d.jsx)(b,Object(c.a)(Object(c.a)({ref:t},u),{},{className:o()(r,j)}))})}));m.displayName="CardHeader";var p=m,x=["bsPrefix","className","bg","text","border","body","children","as"],h=Object(b.a)("h5"),N=Object(b.a)("h6"),y=Object(l.a)("card-body"),g=Object(l.a)("card-title",{Component:h}),C=Object(l.a)("card-subtitle",{Component:N}),k=Object(l.a)("card-link",{Component:"a"}),P=Object(l.a)("card-text",{Component:"p"}),E=Object(l.a)("card-footer"),w=Object(l.a)("card-img-overlay"),H=i.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.bg,l=e.text,b=e.border,u=e.body,j=void 0!==u&&u,O=e.children,v=e.as,f=void 0===v?"div":v,m=Object(n.a)(e,x),p=Object(s.c)(a,"card");return Object(d.jsx)(f,Object(c.a)(Object(c.a)({ref:t},m),{},{className:o()(r,p,i&&"bg-".concat(i),l&&"text-".concat(l),b&&"border-".concat(b)),children:j?Object(d.jsx)(y,{children:O}):O}))}));H.displayName="Card";t.a=Object.assign(H,{Img:O,Title:g,Subtitle:C,Body:y,Link:k,Text:P,Header:p,Footer:E,ImgOverlay:w})},503:function(e,t,a){"use strict";var c=a(0),n=a(81),r=a(130),o=a(131);t.a=function(e){var t=e.placement,a=void 0===t?null:t,i=e.behaviour,s=void 0===i?null:i,l=e.layout,b=void 0===l?null:l,d=e.radius,u=void 0===d?null:d,j=e.color,O=void 0===j?null:j,v=e.navColor,f=void 0===v?null:v,m=e.useSidebar,p=void 0===m?null:m,x=e.pinEnable,h=void 0===x?null:x,N=e.fullpage,y=void 0===N?null:N,g=e.breakpoints,C=void 0===g?null:g,k=Object(n.b)(),P=Object(n.c)((function(e){return e.menu})),E=P.placement,w=P.behaviour,H=P.breakpoints,S=P.pinButtonEnable,A=P.useSidebar,I=Object(n.c)((function(e){return e.settings})),M=I.layout,R=I.radius,B=I.color,T=I.navColor,F={placement:a||E,behaviour:s||w,layout:b||M,radius:u||R,color:O||B,navColor:f||T,breakpoints:C||H,useSidebar:p||A};return Object(c.useEffect)((function(){var e={placement:!1,behaviour:!1,layout:!1,radius:!1,color:!1,navColor:!1,breakpoints:!1,pinEnable:!1,useSidebar:!1};return a&&(e.placement=!0,k(Object(r.k)(a))),s&&(e.behaviour=!0,k(Object(r.d)(s))),b&&(e.layout=!0,k(Object(o.d)(b))),u&&(e.radius=!0,k(Object(o.f)(u))),O&&(e.color=!0,k(Object(o.c)(O))),f&&(e.navColor=!0,k(Object(o.e)(f))),C&&(e.breakpoints=!0,k(Object(r.f)(C))),null!==h&&(e.pinEnable=!0,k(Object(r.j)(h))),null!==p&&(e.useSidebar=!0,k(Object(r.m)(p))),null!==y&&(e.fullpage=!0,document.documentElement.setAttribute("data-fullpage",y)),function(){e.placement&&k(Object(r.k)(E)),e.behaviour&&k(Object(r.d)(w)),e.layout&&k(Object(o.g)()),e.radius&&k(Object(o.f)(R)),e.color&&k(Object(o.c)(B)),e.navColor&&k(Object(o.e)(T)),e.breakpoints&&k(Object(r.n)()),e.pinEnable&&k(Object(r.j)(S)),e.useSidebar&&k(Object(r.o)()),e.fullpage&&document.documentElement.removeAttribute("data-fullpage")}}),[]),F}}}]);