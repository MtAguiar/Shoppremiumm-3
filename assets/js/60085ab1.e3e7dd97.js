(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{81:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),i=n(7),o=(n(0),n(96)),r={title:"Creating a Theme"},c={unversionedId:"creating-a-theme",id:"creating-a-theme",isDocsHomePage:!1,title:"Creating a Theme",description:"If this is your first experience developing Shopify themes, we recommend you to start by reading the basics of Shopify themes development at the Shopify's Themekit documentation.",source:"@site/docs/creating-a-theme.md",slug:"/creating-a-theme",permalink:"/nx-shopify/docs/creating-a-theme",editUrl:"https://github.com/trafilea/nx-shopify/edit/master/docs/docs/creating-a-theme.md",version:"current",sidebar:"docs",previous:{title:"Installation",permalink:"/nx-shopify/docs/installation"},next:{title:"Theme Structure",permalink:"/nx-shopify/docs/theme-structure"}},s=[{value:"Generating Themes",id:"generating-themes",children:[]},{value:"Theme Configuration",id:"theme-configuration",children:[]},{value:"Theme Commands",id:"theme-commands",children:[{value:"build",id:"build",children:[]},{value:"serve",id:"serve",children:[]},{value:"deploy",id:"deploy",children:[]}]}],m={toc:s};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"If this is your first experience developing Shopify themes, we recommend you to start by reading the basics of Shopify themes development at the ",Object(o.b)("a",{parentName:"p",href:"https://shopify.dev/tools/theme-kit"},"Shopify's Themekit documentation"),"."))),Object(o.b)("h2",{id:"generating-themes"},"Generating Themes"),Object(o.b)("p",null,"Generating new themes can be done with the following:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ nx generate @trafilea/nx-shopify:theme <theme-name>\n")),Object(o.b)("p",null,"This creates the following theme structure:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-treeview"},"apps\n\u2514\u2500\u2500 my-theme\n    \u251c\u2500\u2500 browserslist\n    \u251c\u2500\u2500 config.example.yml\n    \u251c\u2500\u2500 config.yml\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 postcss.config.js\n    \u251c\u2500\u2500 src\n    \u2502\xa0\xa0 \u251c\u2500\u2500 assets\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 favicon\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 fonts\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 images\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 svg\n    \u2502\xa0\xa0 \u251c\u2500\u2500 config\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 settings_data.json\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 settings_schema.json\n    \u2502\xa0\xa0 \u251c\u2500\u2500 core\n    \u2502\xa0\xa0 \u251c\u2500\u2500 locales\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 en.default.json\n    \u2502\xa0\xa0 \u251c\u2500\u2500 main.ts\n    \u2502\xa0\xa0 \u251c\u2500\u2500 theme\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 layout\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 sections\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 snippets\n    \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 templates\n    \u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 customers\n    \u2502\xa0\xa0 \u2514\u2500\u2500 typings.d.ts\n    \u251c\u2500\u2500 tsconfig.app.json\n    \u251c\u2500\u2500 tsconfig.json\n    \u2514\u2500\u2500 tsconfig.spec.json\n")),Object(o.b)("p",null,"The main.ts content should look similar to this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="src/main.ts"',title:'"src/main.ts"'},"__webpack_public_path__ = window['__webpack_public_path__'];\n\nimport { themeBootstrapFactory } from '@my-org/my-theme/core/theme-bootstrap';\nimport { themeLayouts } from '@my-org/my-theme/theme/layout';\nimport { themeTemplates } from '@my-org/my-theme/theme/templates';\n\nwindow['themeBootstrap'] = themeBootstrapFactory(themeLayouts, themeTemplates);\n")),Object(o.b)("p",null,"Note that the ",Object(o.b)("inlineCode",{parentName:"p"},"@my-org/my-theme")," in the import paths are an alias to the ",Object(o.b)("inlineCode",{parentName:"p"},"apps/my-theme/src")," path configured in your workspace root ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.base.json")," file."),Object(o.b)("h2",{id:"theme-configuration"},"Theme Configuration"),Object(o.b)("p",null,"After generating your theme, the next step is to configure the themekit's ",Object(o.b)("inlineCode",{parentName:"p"},"apps/my-theme/config.yml")," file."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"To know more about configuring the themekit's ",Object(o.b)("inlineCode",{parentName:"p"},"config.yml")," file, see the ",Object(o.b)("a",{parentName:"p",href:"https://shopify.dev/tools/theme-kit/configuration-reference"},"Themekit Configuration Reference"),"."))),Object(o.b)("h2",{id:"theme-commands"},"Theme Commands"),Object(o.b)("p",null,"When a Shopify theme is added to the workspace.json, the following targets are available for execution:"),Object(o.b)("h3",{id:"build"},"build"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ nx build <theme-name>\n")),Object(o.b)("p",null,"The build command will compile the application using Webpack. It supports a production configuration by building with the following command:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ nx build <theme-name> --configuration=production\n$ nx build <theme-name> -c=production # same\n")),Object(o.b)("p",null,"Additional configurations can be added in the workspace.json. Changing the --configuration flag with the new configuration name will run that config."),Object(o.b)("p",null,"For the specific configuration named ",Object(o.b)("inlineCode",{parentName:"p"},"production"),", nx provides the following alias:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ nx build <theme-name> --prod\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Learn more about the build command at the ",Object(o.b)("a",{parentName:"p",href:"./executors/build"},"Build Executor")," doc."))),Object(o.b)("h3",{id:"serve"},"serve"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ nx serve <theme-name>\n")),Object(o.b)("p",null,"Builds and servers the theme using a local assets server and a runs a BrowserSync instance that proxies your theme preview."),Object(o.b)("p",null,"The serve command will run in watch mode. This allows code to be changed, and the theme will be rebuilt automatically."),Object(o.b)("p",null,"Different build configurations can be used when serving a theme, they can be configured in the target options inside the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace.json")," file or using cli options."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Learn more about the serve command at the ",Object(o.b)("a",{parentName:"p",href:"./executors/serve"},"Serve Executor")," doc."))),Object(o.b)("h3",{id:"deploy"},"deploy"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ nx deploy <theme-name>\n")),Object(o.b)("p",null,"Deploys the theme's last build to the themekit environment configured in the ",Object(o.b)("inlineCode",{parentName:"p"},"apps/<theme-name>/config.yml")," file. It will use the ",Object(o.b)("inlineCode",{parentName:"p"},"development")," environment by default."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Learn more about the deploy command at the ",Object(o.b)("a",{parentName:"p",href:"./executors/deploy"},"Deploy Executor")," doc."))))}l.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=i.a.createContext({}),l=function(e){var t=i.a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return i.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,h=p["".concat(r,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(h,c(c({ref:t},m),{},{components:n})):i.a.createElement(h,c({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var m=2;m<o;m++)r[m]=n[m];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);