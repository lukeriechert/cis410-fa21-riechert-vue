(function(e){function t(t){for(var r,o,l=t[0],s=t[1],i=t[2],b=0,p=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},c=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"container-fluid"},c={class:"row-justify-content-center"},o={class:"col-md-10 col-lg-7"};function l(e,t,n,l,s,i){var u=Object(r["w"])("my-header"),b=Object(r["w"])("router-view");return Object(r["q"])(),Object(r["e"])(r["a"],null,[Object(r["h"])(u),Object(r["f"])("div",a,[Object(r["f"])("div",c,[Object(r["f"])("div",o,[Object(r["h"])(b)])])])],64)}var s=function(e){return Object(r["t"])("data-v-55e8d96c"),e=e(),Object(r["r"])(),e},i={class:"navbar navbar-expand-lg navbar-light bg-light"},u={class:"container-fluid"},b=Object(r["g"])("Riechert Reports"),p=s((function(){return Object(r["f"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["f"])("span",{class:"navbar-toggler-icon"})],-1)})),f={class:"collapse navbar-collapse",id:"navbarNav"},d={class:"navbar-nav ms-auto"},O={class:"nav-item"},j=Object(r["g"])("Players"),m={class:"nav-item"},v=Object(r["g"])("My Account"),g={class:"nav-item"},h=s((function(){return Object(r["f"])("button",{class:"btn btn-warning"},"Login",-1)})),y={class:"nav-item"},w=s((function(){return Object(r["f"])("button",{class:"btn btn-outline-warning text-dark"},"Sign Up",-1)})),q=s((function(){return Object(r["f"])("li",{class:"nav-item"},[Object(r["f"])("button",{class:"btn btn-warning"},"Logout")],-1)}));function k(e,t){var n=Object(r["w"])("router-link");return Object(r["q"])(),Object(r["e"])("nav",i,[Object(r["f"])("div",u,[Object(r["h"])(n,{class:"navbar-brand",to:"/"},{default:Object(r["C"])((function(){return[b]})),_:1}),p,Object(r["f"])("div",f,[Object(r["f"])("ul",d,[Object(r["f"])("li",O,[Object(r["h"])(n,{class:"nav-link active","aria-current":"page",to:"/players"},{default:Object(r["C"])((function(){return[j]})),_:1})]),Object(r["f"])("li",m,[Object(r["h"])(n,{class:"nav-link active","aria-current":"page",to:"/account"},{default:Object(r["C"])((function(){return[v]})),_:1})]),Object(r["f"])("li",g,[Object(r["h"])(n,{class:"nav-link active","aria-current":"page",to:"/login"},{default:Object(r["C"])((function(){return[h]})),_:1})]),Object(r["f"])("li",y,[Object(r["h"])(n,{class:"nav-link active","aria-current":"page",to:"/signup"},{default:Object(r["C"])((function(){return[w]})),_:1})]),q])])])])}n("d465");var S=n("6b0d"),x=n.n(S);const E={},P=x()(E,[["render",k],["__scopeId","data-v-55e8d96c"]]);var A=P,_={name:"App",components:{"my-header":A}};n("bc14");const U=x()(_,[["render",l]]);var L=U,C=n("bc3a"),z=n.n(C),D=n("6c02"),F=Object(r["f"])("h1",null,"Home",-1),M=[F];function V(e,t,n,a,c,o){return Object(r["q"])(),Object(r["e"])("div",null,M)}var I={};const T=x()(I,[["render",V]]);var $=T,N=Object(r["f"])("h1",null,"Login",-1),R={key:0,class:"alert alert-success"},J={class:"mb-3"},H=Object(r["f"])("label",{for:"email-input",class:"form-label"},"Email",-1),B={class:"mb-3"},G=Object(r["f"])("label",{for:"password-input",class:"form-label"},"Password",-1),K=Object(r["f"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Q={key:0,class:"form-text text-danger"},W={key:1,class:"form-text text-danger"};function X(e,t,n,a,c,o){return Object(r["q"])(),Object(r["e"])("div",null,[N,this.$route.query.signupsuccess?(Object(r["q"])(),Object(r["e"])("div",R,"Thanks for signing up, please log in now.")):Object(r["d"])("",!0),Object(r["f"])("form",{onSubmit:t[2]||(t[2]=Object(r["E"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(r["f"])("div",J,[H,Object(r["D"])(Object(r["f"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.email=e})},null,512),[[r["A"],c.email]])]),Object(r["f"])("div",B,[G,Object(r["D"])(Object(r["f"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.password=e})},null,512),[[r["A"],c.password]])]),K,c.credentialsError?(Object(r["q"])(),Object(r["e"])("p",Q,"Invalid Credentials")):Object(r["d"])("",!0),c.loginError?(Object(r["q"])(),Object(r["e"])("p",W,"Could not log you in at this time please try again later")):Object(r["d"])("",!0)],32)])}n("ac1f"),n("5319");var Y={data:function(){return{email:"",password:"",loginError:!1,credentialsError:!1}},methods:{onSubmit:function(){var e=this,t={email:this.email,password:this.password};z.a.post("/scouts/login",t).then((function(t){e.$store.commit("storeTokenInApp",t.data.token),e.$store.commit("storeUserInApp",t.data.user),e.$router.replace("/account")})).catch((function(t){console.log("error in /contacts/login",t),401==t.response.status?e.credentialsError=!0:e.loginError=!0}))}}};const Z=x()(Y,[["render",X]]);var ee=Z,te=Object(r["f"])("h1",null,"Player Details",-1),ne=[te];function re(e,t,n,a,c,o){return Object(r["q"])(),Object(r["e"])("div",null,ne)}var ae={};const ce=x()(ae,[["render",re]]);var oe=ce,le=Object(r["f"])("h1",null,"Players",-1),se=[le];function ie(e,t,n,a,c,o){return Object(r["q"])(),Object(r["e"])("div",null,se)}var ue={};const be=x()(ue,[["render",ie]]);var pe=be,fe=Object(r["f"])("h1",null,"Not Found",-1),de=Object(r["f"])("h4",null,"Sorry this page can't be found",-1),Oe=[fe,de];function je(e,t,n,a,c,o){return Object(r["q"])(),Object(r["e"])("div",null,Oe)}var me={};const ve=x()(me,[["render",je]]);var ge=ve,he=Object(r["f"])("h1",null,"Create a Scouting Report",-1),ye=[he];function we(e,t,n,a,c,o){return Object(r["q"])(),Object(r["e"])("div",null,ye)}var qe={};const ke=x()(qe,[["render",we]]);var Se=ke,xe=Object(r["f"])("h1",null,"Sign Up",-1),Ee={class:"mb-3"},Pe=Object(r["f"])("label",{for:"fname-input",class:"form-label"},"First name",-1),Ae={key:0,class:"text-danger"},_e={class:"mb-3"},Ue=Object(r["f"])("label",{for:"lname-input",class:"form-label"},"Last name",-1),Le={class:"mb-3"},Ce=Object(r["f"])("label",{for:"email-input",class:"form-label"},"Email",-1),ze={class:"mb-3"},De=Object(r["f"])("label",{for:"password-input",class:"form-label"},"Password",-1),Fe={class:"mb-3"},Me=Object(r["f"])("label",{for:"org-input",class:"form-label"},"Organization",-1),Ve=Object(r["f"])("button",{type:"submit",class:"btn btn-primary"},"Submit",-1),Ie={id:"error-signup",class:"text-danger"};function Te(e,t,n,a,c,o){return Object(r["q"])(),Object(r["e"])("div",null,[xe,Object(r["f"])("form",{onSubmit:t[5]||(t[5]=Object(r["E"])((function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)}),["prevent"]))},[Object(r["f"])("div",Ee,[Pe,Object(r["D"])(Object(r["f"])("input",{type:"text",class:"form-control",id:"fname-input",required:"",placeholder:"First name","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.nameFirst=e})},null,512),[[r["A"],c.nameFirst]]),c.dupEmail?(Object(r["q"])(),Object(r["e"])("small",Ae,"Please choose a different emial")):Object(r["d"])("",!0)]),Object(r["f"])("div",_e,[Ue,Object(r["D"])(Object(r["f"])("input",{type:"text",class:"form-control",id:"lname-input",required:"",placeholder:"Last name","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.nameLast=e})},null,512),[[r["A"],c.nameLast]])]),Object(r["f"])("div",Le,[Ce,Object(r["D"])(Object(r["f"])("input",{type:"email",class:"form-control",id:"email-input",required:"",placeholder:"Enter email","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.email=e})},null,512),[[r["A"],c.email]])]),Object(r["f"])("div",ze,[De,Object(r["D"])(Object(r["f"])("input",{type:"password",class:"form-control",id:"password-input",placeholder:"Password",required:"","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.password=e})},null,512),[[r["A"],c.password]])]),Object(r["f"])("div",Fe,[Me,Object(r["D"])(Object(r["f"])("input",{type:"text",class:"form-control",id:"org-input",placeholder:"Organization",required:"","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.organization=e})},null,512),[[r["A"],c.organization]])]),Ve,Object(r["f"])("p",Ie,Object(r["y"])(c.errorMessage),1)],32)])}var $e={data:function(){return{nameFirst:"",nameLast:"",email:"",password:"",organization:"",errorMessage:"",dupEmail:!1}},methods:{onSubmit:function(){var e=this,t={nameFirst:this.nameFirst,nameLast:this.nameLast,email:this.email,password:this.password,organization:this.organization};z.a.post("/scouts",t).then((function(t){console.log("the response",t),e.$router.replace("/login?signupsuccess=true")})).catch((function(t){409===t.response.status?e.dupEmail=!0:e.errorMessage="Cannot sign you up, please try again later"}))}}};const Ne=x()($e,[["render",Te]]);var Re=Ne,Je=Object(r["f"])("h1",null,"Account",-1),He=[Je];function Be(e,t,n,a,c,o){return Object(r["q"])(),Object(r["e"])("div",null,He)}var Ge={};const Ke=x()(Ge,[["render",Be]]);var Qe=Ke,We=Object(D["a"])({history:Object(D["b"])(),routes:[{path:"/",component:$},{path:"/account",component:Qe},{path:"/login",component:ee},{path:"/players",component:pe},{path:"/players/:pk",component:oe,children:[{path:"report",component:Se}]},{path:"/signup",component:Re},{path:"/:invalidroute(.*)",component:ge}]}),Xe=We,Ye=n("5502"),Ze=Object(Ye["a"])({state:{token:null,user:null,players:[]},mutations:{storeTokenInApp:function(e,t){e.token=t},storeUserInApp:function(e,t){e.user=t}},actions:{}});z.a.defaults.baseURL="https://cis410-fa21-riechert-api.azurewebsites.net";var et=Object(r["c"])(L);et.use(Xe),et.use(Ze),et.mount("#app")},"7dec":function(e,t,n){},bc14:function(e,t,n){"use strict";n("7dec")},d465:function(e,t,n){"use strict";n("f07f")},f07f:function(e,t,n){}});
//# sourceMappingURL=app.03bf438c.js.map