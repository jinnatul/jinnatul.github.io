(this["webpackJsonpjinnatul.github.io"]=this["webpackJsonpjinnatul.github.io"]||[]).push([[6],{146:function(e,a,t){"use strict";var c=t(9),r=t(2),n=t(3),s=t(4),i=t.n(s),o=t(0),b=t(7),d=t(1),l=["as","bsPrefix","className"],j=["className"];var f=o.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,s=Object(n.a)(e,l);t=Object(b.c)(t,"col");var o=Object(b.a)(),d=Object(b.b)(),j=[],f=[];return o.forEach((function(e){var a,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(a=n.span,c=n.offset,r=n.order):a=n;var i=e!==d?"-".concat(e):"";a&&j.push(!0===a?"".concat(t).concat(i):"".concat(t).concat(i,"-").concat(a)),null!=r&&f.push("order".concat(i,"-").concat(r)),null!=c&&f.push("offset".concat(i,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:i.a.apply(void 0,[c].concat(j,f))}),{as:a,bsPrefix:t,spans:j}]}(e),s=Object(c.a)(t,2),o=s[0],f=o.className,O=Object(n.a)(o,j),u=s[1],x=u.as,m=void 0===x?"div":x,v=u.bsPrefix,p=u.spans;return Object(d.jsx)(m,Object(r.a)(Object(r.a)({},O),{},{ref:a,className:i()(f,!p.length&&v)}))}));f.displayName="Col",a.a=f},164:function(e,a,t){"use strict";var c=t(2),r=t(9),n=t(3),s=t(4),i=t.n(s),o=t(0),b=t(38),d=t(7),l=t(1),j=["as","bsPrefix","variant","size","active","className"],f=o.forwardRef((function(e,a){var t=e.as,s=e.bsPrefix,o=e.variant,f=e.size,O=e.active,u=e.className,x=Object(n.a)(e,j),m=Object(d.c)(s,"btn"),v=Object(b.b)(Object(c.a)({tagName:t},x)),p=Object(r.a)(v,2),g=p[0],y=p[1].tagName;return Object(l.jsx)(y,Object(c.a)(Object(c.a)(Object(c.a)({},g),x),{},{ref:a,className:i()(u,m,O&&"active",o&&"".concat(m,"-").concat(o),f&&"".concat(m,"-").concat(f),x.href&&x.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=f},89:function(e,a,t){"use strict";t.r(a);var c=t(2),r=t(0),n=t(146),s=t(3),i=t(4),o=t.n(i),b=t(7),d=t(25),l=t(65),j=t(1),f=["bsPrefix","className","variant","as"],O=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.variant,i=e.as,d=void 0===i?"img":i,l=Object(s.a)(e,f),O=Object(b.c)(t,"card-img");return Object(j.jsx)(d,Object(c.a)({ref:a,className:o()(n?"".concat(O,"-").concat(n):O,r)},l))}));O.displayName="CardImg";var u=O,x=t(66),m=["bsPrefix","className","as"],v=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.as,d=void 0===i?"div":i,l=Object(s.a)(e,m),f=Object(b.c)(t,"card-header"),O=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return Object(j.jsx)(x.a.Provider,{value:O,children:Object(j.jsx)(d,Object(c.a)(Object(c.a)({ref:a},l),{},{className:o()(n,f)}))})}));v.displayName="CardHeader";var p=v,g=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(l.a)("h5"),h=Object(l.a)("h6"),N=Object(d.a)("card-body"),P=Object(d.a)("card-title",{Component:y}),S=Object(d.a)("card-subtitle",{Component:h}),C=Object(d.a)("card-link",{Component:"a"}),k=Object(d.a)("card-text",{Component:"p"}),w=Object(d.a)("card-footer"),B=Object(d.a)("card-img-overlay"),T=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.bg,i=e.text,d=e.border,l=e.body,f=e.children,O=e.as,u=void 0===O?"div":O,x=Object(s.a)(e,g),m=Object(b.c)(t,"card");return Object(j.jsx)(u,Object(c.a)(Object(c.a)({ref:a},x),{},{className:o()(r,m,n&&"bg-".concat(n),i&&"text-".concat(i),d&&"border-".concat(d)),children:l?Object(j.jsx)(N,{children:f}):f}))}));T.displayName="Card",T.defaultProps={body:!1};var R=Object.assign(T,{Img:u,Title:P,Subtitle:S,Body:N,Link:C,Text:k,Header:p,Footer:w,ImgOverlay:B}),I=t(164),V=["bsPrefix","bg","pill","text","className","as"],z=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bg,n=e.pill,i=e.text,d=e.className,l=e.as,f=void 0===l?"span":l,O=Object(s.a)(e,V),u=Object(b.c)(t,"badge");return Object(j.jsx)(f,Object(c.a)(Object(c.a)({ref:a},O),{},{className:o()(d,u,n&&"rounded-pill",i&&"text-".concat(i),r&&"bg-".concat(r))}))}));z.displayName="Badge",z.defaultProps={bg:"primary",pill:!1};var F=z,H=t(20),J=t(169),L={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};a.default=function(e){var a,t,s=Object(r.useContext)(H.a),i=e.project;return Object(j.jsx)(n.a,{children:Object(j.jsxs)(R,{style:Object(c.a)(Object(c.a)({},L.cardStyle),{},{backgroundColor:s.cardBackground,borderColor:s.cardBorderColor}),text:s.bsSecondaryVariant,children:[Object(j.jsx)(R.Img,{variant:"top",src:null===i||void 0===i?void 0:i.image}),Object(j.jsxs)(R.Body,{children:[Object(j.jsx)(R.Title,{style:L.cardTitleStyle,children:i.title}),Object(j.jsx)(R.Text,{style:L.cardTextStyle,children:(t=i.bodyText,Object(j.jsx)(J.a,{children:t}))})]}),Object(j.jsx)(R.Body,{children:null===i||void 0===i||null===(a=i.links)||void 0===a?void 0:a.map((function(e){return Object(j.jsx)(I.a,{style:L.buttonStyle,variant:"outline-"+s.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),i.tags&&Object(j.jsx)(R.Footer,{style:{backgroundColor:s.cardFooterBackground},children:i.tags.map((function(e){return Object(j.jsx)(F,{pill:!0,bg:s.bsSecondaryVariant,text:s.bsPrimaryVariant,style:L.badgeStyle,children:e},e)}))})]})})}}}]);
//# sourceMappingURL=6.da61976d.chunk.js.map