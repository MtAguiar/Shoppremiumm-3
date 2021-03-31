(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var i=n(3),a=n(7),o=(n(0),n(96)),r={title:"Build Command"},c={unversionedId:"executors/build",id:"executors/build",isDocsHomePage:!1,title:"Build Command",description:"Builds a theme to be uploaded to Shopify",source:"@site/docs/executors/build.md",slug:"/executors/build",permalink:"/nx-shopify/docs/executors/build",editUrl:"https://github.com/trafilea/nx-shopify/edit/master/docs/docs/executors/build.md",version:"current",sidebar:"docs",previous:{title:"Snippet Generator",permalink:"/nx-shopify/docs/generators/snippet"},next:{title:"Serve Command",permalink:"/nx-shopify/docs/executors/serve"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Options",id:"options",children:[{value:"--outputPath",id:"--outputpath",children:[]},{value:"--main",id:"--main",children:[]},{value:"--tsConfig",id:"--tsconfig",children:[]},{value:"--themekitConfig",id:"--themekitconfig",children:[]},{value:"--postcssConfig",id:"--postcssconfig",children:[]},{value:"--watch",id:"--watch",children:[]},{value:"--poll",id:"--poll",children:[]},{value:"--sourceMap",id:"--sourcemap",children:[]},{value:"--progress",id:"--progress",children:[]},{value:"--assets",id:"--assets",children:[]},{value:"--analyze",id:"--analyze",children:[]},{value:"--statsJson",id:"--statsjson",children:[]},{value:"--verbose",id:"--verbose",children:[]},{value:"--extractLicenses",id:"--extractlicenses",children:[]},{value:"--optimization",id:"--optimization",children:[]},{value:"--showCircularDependencies",id:"--showcirculardependencies",children:[]},{value:"--memoryLimit",id:"--memorylimit",children:[]},{value:"--fileReplacements",id:"--filereplacements",children:[]},{value:"--webpackConfig",id:"--webpackconfig",children:[]}]}],p={toc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Builds a theme to be uploaded to Shopify"),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"$ nx build <theme-name> [options,...]\n")),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"build")," command is configured as a project target in the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace.json")," file at your workspace root. By default, the target configuration should look similar to this:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "projects": {\n    "my-theme": {\n      "targets": {\n        "build": {\n          "executor": "@trafilea/nx-shopify:build",\n          "outputs": ["{options.outputPath}"],\n          "options": {\n            "outputPath": "dist/apps/my-theme",\n            "main": "apps/my-theme/src/main.ts",\n            "tsConfig": "apps/my-theme/tsconfig.app.json",\n            "postcssConfig": "apps/my-theme/postcss.config.js",\n            "themekitConfig": "apps/my-theme/config.yml",\n            "sourceMap": true,\n            "assets": ["apps/my-theme/src/assets"]\n          },\n          "configurations": {\n            "production": {\n              "optimization": true,\n              "sourceMap": false,\n              "fileReplacements": [\n                {\n                  "replace": "apps/my-theme/src/environments/environment.ts",\n                  "with": "apps/my-theme/src/environments/environment.prod.ts"\n                }\n              ]\n            }\n          }\n        }\n      }\n    }\n  }\n}\n')),Object(o.b)("p",null,"The build target comes with a default ",Object(o.b)("inlineCode",{parentName:"p"},"production")," configuration that can be executed with:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"nx build <theme-name> --configuration=production\nnx build <theme-name> --c=production # same\nnx build <theme-name> --prod # same, only works for the 'production' named config\n")),Object(o.b)("p",null,"You can add additional configurations that define new options or override the ones defined in the default options object."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Learn more about Nx targets configurations at the ",Object(o.b)("a",{parentName:"p",href:"https://nx.dev"},"Nx website")))),Object(o.b)("p",null,"You can also override/define options passing them as CLI arguments, these will take precedence over the ",Object(o.b)("inlineCode",{parentName:"p"},"workspace.json")," configurations."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"nx build <theme-name> --prod --optimization false\n")),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--outputpath"},"--outputPath"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"The output path of the generated files"),Object(o.b)("h3",{id:"--main"},"--main"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"The main application file path"),Object(o.b)("h3",{id:"--tsconfig"},"--tsConfig"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"The path to the Typescript configuration file"),Object(o.b)("h3",{id:"--themekitconfig"},"--themekitConfig"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"The path to the themekit config.yml configuration file"),Object(o.b)("h3",{id:"--postcssconfig"},"--postcssConfig"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"The path to the PostCSS configuration file"),Object(o.b)("h3",{id:"--watch"},"--watch"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Run build when files change"),Object(o.b)("h3",{id:"--poll"},"--poll"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"number")),Object(o.b)("p",null,"Frequency of file watcher in ms"),Object(o.b)("h3",{id:"--sourcemap"},"--sourceMap"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Produce source maps (default: true)"),Object(o.b)("h3",{id:"--progress"},"--progress"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Log progress to the console while building"),Object(o.b)("h3",{id:"--assets"},"--assets"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"Array<string or AssetPattern>")),Object(o.b)("p",null,"List of static theme assets (default: [])"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="AssetPattern"',title:'"AssetPattern"'},"interface AssetPattern {\n  // The pattern to match.\n  glob: string;\n\n  //The input directory path in which to apply 'glob'. Defaults to the project root.\n  input: string;\n\n  // An array of globs to ignore.\n  ignore: Array<string>;\n\n  //Absolute path within the output.\n  output: string;\n}\n")),Object(o.b)("h3",{id:"--analyze"},"--analyze"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Analyze the generated bundle and open webpack-bundle-analyzer in the browser"),Object(o.b)("h3",{id:"--statsjson"},"--statsJson"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Generates a 'stats.json' file which can be analyzed using tools such as: #webpack-bundle-analyzer' or ",Object(o.b)("a",{parentName:"p",href:"https://webpack.github.io/analyse"},"https://webpack.github.io/analyse")),Object(o.b)("h3",{id:"--verbose"},"--verbose"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Emits verbose output"),Object(o.b)("h3",{id:"--extractlicenses"},"--extractLicenses"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Extract all licenses in a separate file, in the case of production builds only."),Object(o.b)("h3",{id:"--optimization"},"--optimization"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Defines the optimization level of the build."),Object(o.b)("h3",{id:"--showcirculardependencies"},"--showCircularDependencies"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"boolean")),Object(o.b)("p",null,"Show circular dependency warnings on builds. (default: true)"),Object(o.b)("h3",{id:"--memorylimit"},"--memoryLimit"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"number")),Object(o.b)("p",null,"Memory limit for type checking service process in MB. (defaults to 2048)"),Object(o.b)("h3",{id:"--filereplacements"},"--fileReplacements"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"Array<FileReplacementPattern>")),Object(o.b)("p",null,"Replace files with other files in the build. (default: [])"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-typescript",metastring:'title="FileReplacementPattern"',title:'"FileReplacementPattern"'},"interface FileReplacementPattern {\n  // File to replace its content.\n  replace: string;\n\n  // File with the new content\n  with: string;\n}\n")),Object(o.b)("h3",{id:"--webpackconfig"},"--webpackConfig"),Object(o.b)("p",null,"Type: ",Object(o.b)("inlineCode",{parentName:"p"},"string")),Object(o.b)("p",null,"Path to a function which takes a webpack config, context and returns the resulting webpack config. See ",Object(o.b)("a",{parentName:"p",href:"../guides/extend-webpack"},"Extend Webpack Configuration")," to learn more."))}s.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),s=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=s(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=i,m=b["".concat(r,".").concat(d)]||b[d]||u[d]||o;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);