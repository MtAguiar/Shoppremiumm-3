(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),l=(n(0),n(98)),o={title:"Template Generator"},p={unversionedId:"cli-usage/generators/template",id:"cli-usage/generators/template",isDocsHomePage:!1,title:"Template Generator",description:"Create a theme template",source:"@site/docs/cli-usage/generators/template.md",slug:"/cli-usage/generators/template",permalink:"/nx-shopify/docs/cli-usage/generators/template",editUrl:"https://github.com/trafilea/nx-shopify/edit/master/docs/docs/cli-usage/generators/template.md",version:"current",sidebar:"docs",previous:{title:"Layout Generator",permalink:"/nx-shopify/docs/cli-usage/generators/layout"},next:{title:"Section Generator",permalink:"/nx-shopify/docs/cli-usage/generators/section"}},i=[{value:"Usage",id:"usage",children:[{value:"Examples",id:"examples",children:[]}]},{value:"Options",id:"options",children:[{value:"--name",id:"--name",children:[]},{value:"--project",id:"--project",children:[]},{value:"--directory",id:"--directory",children:[]},{value:"--flat",id:"--flat",children:[]},{value:"--liquidOnly",id:"--liquidonly",children:[]},{value:"--skipTests",id:"--skiptests",children:[]}]}],c={toc:i};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Create a theme template"),Object(l.b)("h2",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ nx generate template [options,...]\n")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ nx g t [options,...] # same\n")),Object(l.b)("p",null,"By default, Nx will search for the ",Object(l.b)("inlineCode",{parentName:"p"},"template")," generator in the default collection provisioned in ",Object(l.b)("inlineCode",{parentName:"p"},"workspace.json"),"."),Object(l.b)("p",null,"You can specify the collection explicitly as follows:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ nx g @trafilea/nx-shopify:template [options,...]\n")),Object(l.b)("p",null,"Show what will be generated without writing to disk:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ nx g template [options,...] --dry-run\n")),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("p",null,"Generate a template in the my-theme theme:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash"},"$ nx g template my-template --project=my-theme\n")),Object(l.b)("p",null,"This creates the following files:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-diff"},"apps\n\u2514\u2500\u2500 my-theme\n    \u2514\u2500\u2500 src\n     \xa0\xa0 \u2514\u2500\u2500 theme\n     \xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 layout\n     \xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 sections\n     \xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 snippets\n     \xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 templates\n+    \xa0\xa0  \xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 my-template\n+    \xa0\xa0  \xa0\xa0  \xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 my-template.template.scss\n+    \xa0\xa0  \xa0\xa0  \xa0\xa0  \xa0\xa0 \u251c\u2500\u2500 my-template.template.ts\n+    \xa0\xa0  \xa0\xa0  \xa0\xa0  \xa0\xa0 \u2514\u2500\u2500 my-template.liquid\n")),Object(l.b)("p",null,"Then you should add the generated template to the ",Object(l.b)("inlineCode",{parentName:"p"},"apps/my-theme/src/theme/templates/theme-templates.ts")," exported ",Object(l.b)("inlineCode",{parentName:"p"},"themeTemplates")," object so the new template is loaded in the bootstrap process:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-diff",metastring:'title="theme-templates.ts"',title:'"theme-templates.ts"'},"export const themeTemplates = {\n  ...,\n  '404': () => import('./404/404.template').then((m) => m.NotFound404Template),\n  index: () => import('./index/index.template').then((m) => m.IndexTemplate),PageTemplate),\n  product: () =>\n    import('./product/product.template').then((m) => m.ProductTemplate),\n+ 'my-template': () =>\n+   import('./my-template/my-template.template').then((m) => m.MyTemplateTemplate),\n};\n")),Object(l.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"If want to know more about how the ",Object(l.b)("inlineCode",{parentName:"p"},"theme-templates.ts")," file works, head to the ",Object(l.b)("a",{parentName:"p",href:"../../fundamentals/theme-bootstrap"},"Theme Boostrap Process")," doc"))),Object(l.b)("h2",{id:"options"},"Options"),Object(l.b)("h3",{id:"--name"},"--name"),Object(l.b)("p",null,"Type: ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",null,"The name of the template."),Object(l.b)("h3",{id:"--project"},"--project"),Object(l.b)("p",null,"Alias(es): p"),Object(l.b)("p",null,"Type: ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",null,"The name of the project where the template will be generated."),Object(l.b)("h3",{id:"--directory"},"--directory"),Object(l.b)("p",null,"Alias(es): d"),Object(l.b)("p",null,"Type: ",Object(l.b)("inlineCode",{parentName:"p"},"string")),Object(l.b)("p",null,"Create the template under this directory relative to src/theme/templates (can be nested)."),Object(l.b)("h3",{id:"--flat"},"--flat"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("p",null,"Create template files at the directory root rather than its own directory."),Object(l.b)("h3",{id:"--liquidonly"},"--liquidOnly"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("p",null,"When true, does not create files other than the liquid file for the new template."),Object(l.b)("h3",{id:"--skiptests"},"--skipTests"),Object(l.b)("p",null,"Default: ",Object(l.b)("inlineCode",{parentName:"p"},"false")),Object(l.b)("p",null,"Type: ",Object(l.b)("inlineCode",{parentName:"p"},"boolean")),Object(l.b)("p",null,'When true, does not create \\"spec.ts\\" test files for the new template.'))}s.isMDXComponent=!0},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},m=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,d=m["".concat(o,".").concat(u)]||m[u]||b[u]||l;return n?r.a.createElement(d,p(p({ref:t},c),{},{components:n})):r.a.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);