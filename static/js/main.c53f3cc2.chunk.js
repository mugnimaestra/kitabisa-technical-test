(this["webpackJsonpkitabisa-technical-test-cra"]=this["webpackJsonpkitabisa-technical-test-cra"]||[]).push([[0],{12:function(e,t,n){e.exports=n(21)},17:function(e,t,n){},18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(8),u=n.n(l),i=(n(17),n(18),n(3)),c=n(1),m=n(2),g=function(e,t){return parseInt(e)+parseInt(t)},s=function(e,t){return parseInt(e)*parseInt(t)},o=function(e){if(e<2)return!1;for(var t=parseInt(Math.sqrt(e)),n=2;n<=t;n++)if(e%n===0)return!1;return!0};function p(){var e=Object(c.a)(["\n  margin: 0 auto;\n  max-width: 400px;\n  text-align: left;\n  .input-container {\n    max-width: 50%;\n    padding: 0 0.75rem;\n    input {\n      margin: 0.25rem 0 1rem;\n    }\n  }\n  .text-container {\n    max-width: 50%;\n    padding: 0 0.75rem;\n  }\n  .wrapper {\n    display: flex;\n    margin: 0 -0.75rem;\n  }\n"]);return p=function(){return e},e}var h=m.a.div(p()),v=function(){var e=r.a.useRef(),t=r.a.useRef(),n=r.a.useState(0),a=Object(i.a)(n,2),l=a[0],u=a[1];return r.a.createElement(h,null,r.a.createElement("h3",null,"Sum X & Y, and print the result!"),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"input-container"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"firstInput"},"First Input"),r.a.createElement("input",{type:"number",name:"firstInput",placeholder:"1, 3, 5 (max 7 digits)",ref:e,onChange:function(n){n.target.maxLength&&n.target.value.length>n.target.maxLength&&(n.target.value=n.target.value.slice(0,n.target.maxLength)),""!==e.current.value&&""!==t.current.value&&u(g(e.current.value,t.current.value))},maxLength:"7"})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"firstInput"},"Second Input"),r.a.createElement("input",{type:"number",name:"secondInput",placeholder:"1, 3, 5 (max 7 digits)",ref:t,onChange:function(n){n.target.maxLength&&n.target.value.length>n.target.maxLength&&(n.target.value=n.target.value.slice(0,n.target.maxLength)),""!==e.current.value&&""!==t.current.value&&u(g(e.current.value,t.current.value))},maxLength:"7"}))),r.a.createElement("div",{className:"text-container"},r.a.createElement("div",null,"Result:"),r.a.createElement("span",null,l))))};function d(){var e=Object(c.a)(["\n  margin: 0 auto;\n  max-width: 400px;\n  text-align: left;\n  .input-container {\n    max-width: 50%;\n    padding: 0 0.75rem;\n    input {\n      margin: 0.25rem 0 1rem;\n    }\n  }\n  .text-container {\n    max-width: 50%;\n    padding: 0 0.75rem;\n  }\n  .wrapper {\n    display: flex;\n    margin: 0 -0.75rem;\n  }\n"]);return d=function(){return e},e}var f=m.a.div(d()),x=function(){var e=r.a.useRef(),t=r.a.useRef(),n=r.a.useState(0),a=Object(i.a)(n,2),l=a[0],u=a[1];return r.a.createElement(f,null,r.a.createElement("h3",null,"Multiply X & Y, and print the result!"),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"firstInput"},"First Input"),r.a.createElement("input",{type:"number",name:"firstInput",placeholder:"1, 3, 5 (max: 7 digits)",ref:e,onChange:function(n){n.target.maxLength&&n.target.value.length>n.target.maxLength&&(n.target.value=n.target.value.slice(0,n.target.maxLength)),""!==e.current.value&&""!==t.current.value&&u(s(e.current.value,t.current.value))},maxLength:"7"}),r.a.createElement("label",{htmlFor:"firstInput"},"Second Input"),r.a.createElement("input",{type:"number",name:"secondInput",placeholder:"1, 3, 5 (max: 7 digits)",ref:t,onChange:function(n){n.target.maxLength&&n.target.value.length>n.target.maxLength&&(n.target.value=n.target.value.slice(0,n.target.maxLength)),""!==e.current.value&&""!==t.current.value&&u(s(e.current.value,t.current.value))},maxLength:"7"})),r.a.createElement("div",{className:"text-container"},r.a.createElement("div",null,"Result:"),r.a.createElement("span",null,l))))};function E(){var e=Object(c.a)(["\n  margin: 0 auto;\n  max-width: 400px;\n  text-align: left;\n  .input-container {\n    max-width: 50%;\n    padding: 0 0.75rem;\n    input {\n      margin: 0.25rem 0 1rem;\n    }\n  }\n  .text-container {\n    max-width: 50%;\n    padding: 0 0.75rem;\n  }\n  .wrapper {\n    display: flex;\n    margin: 0 -0.75rem;\n  }\n"]);return E=function(){return e},e}var b=m.a.div(E()),w=function(){var e=r.a.useRef(),t=r.a.useState([]),n=Object(i.a)(t,2),a=n[0],l=n[1];return r.a.createElement(b,null,r.a.createElement("h3",null,"Find first N prime number, and print the result!"),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"firstInput"},"Input N Number"),r.a.createElement("input",{type:"number",name:"firstInput",placeholder:"Positive number (max 50)",ref:e,onChange:function(t){t.target.maxLength&&t.target.value.length>t.target.maxLength&&(t.target.value=t.target.value.slice(0,t.target.maxLength)),t.target.value>50&&(t.target.value=50),t.target.value<0&&(t.target.value=0),""!==e.current.value&&l(function(e){for(var t=[],n=1;t.length<e;)o(n)&&t.push(n),n++;return t}(e.current.value))},maxLength:"2"})),r.a.createElement("div",{className:"text-container"},r.a.createElement("div",null,"Result:"),r.a.createElement("span",null,1===a.length?a:a.map((function(e,t){return r.a.createElement(r.a.Fragment,null,e,a.length-1===t?"":", ")}))))))};function I(){var e=Object(c.a)(["\n  margin: 0 auto;\n  max-width: 400px;\n  text-align: left;\n  .input-container {\n    max-width: 50%;\n    padding: 0 0.75rem;\n    input {\n      margin: 0.25rem 0 1rem;\n    }\n  }\n  .text-container {\n    max-width: 50%;\n    padding: 0 0.75rem;\n  }\n  .wrapper {\n    display: flex;\n    margin: 0 -0.75rem;\n  }\n"]);return I=function(){return e},e}var L=m.a.div(I()),N=function(){var e=r.a.useRef(),t=r.a.useState([]),n=Object(i.a)(t,2),a=n[0],l=n[1];return r.a.createElement(L,null,r.a.createElement("h3",null,"Find the first N Fibonacci sequence, and print the result"),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"input-container"},r.a.createElement("label",{htmlFor:"firstInput"},"Input N Number"),r.a.createElement("input",{type:"number",name:"firstInput",placeholder:"Positive number (max 50)",ref:e,onChange:function(t){t.target.maxLength&&t.target.value.length>t.target.maxLength&&(t.target.value=t.target.value.slice(0,t.target.maxLength)),t.target.value>50&&(t.target.value=50),t.target.value<0&&(t.target.value=0),""!==e.current.value&&l(function(e){for(var t,n=0,a=1,r=[];r.length<e;)r.push(n),t=n,n+=a,a=t;return r}(e.current.value))},maxLength:"2"})),r.a.createElement("div",{className:"text-container"},r.a.createElement("div",null,"Result:"),r.a.createElement("span",null,1===a.length?a:a.map((function(e,t){return r.a.createElement(r.a.Fragment,null,e,a.length-1===t?"":", ")}))))))};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Kitabisa.com Technical Test"),r.a.createElement(v,null),r.a.createElement(x,null),r.a.createElement(w,null),r.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.c53f3cc2.chunk.js.map