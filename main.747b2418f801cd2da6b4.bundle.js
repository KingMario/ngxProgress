webpackJsonp([2],{0:function(l,n,u){l.exports=u("cDNt")},cDNt:function(l,n,u){"use strict";function t(){return{start:function(){NProgress.start()},stop:function(){NProgress.done()}}}function e(l,n){var u=this;this.pending=!0,l.get("//httpstat.us/200?sleep="+ +n).subscribe(function(l){u.pending=!1})}function i(l){return _._26(0,[(l()(),_._9(0,0,null,null,6,"div",[["class","alert col-xs-3 col-sm-offset-1"]],null,null,null,null,null)),_._7(1,278528,null,0,p.c,[_.u,_.v,_.l,_.G],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),_._22(2,{"alert-warning":0,"alert-success":1}),(l()(),_._25(-1,null,["\n        "])),(l()(),_._9(4,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),_._25(5,null,[" Http Request Status: ",""])),(l()(),_._25(-1,null,["\n    "]))],function(l,n){l(n,1,0,"alert col-xs-3 col-sm-offset-1",l(n,2,0,n.context.$implicit.pending,!n.context.$implicit.pending))},function(l,n){l(n,5,0,n.context.$implicit.pending?"pending":"done")})}function o(l){return _._26(0,[(l()(),_._25(-1,null,["\n  "])),(l()(),_._9(1,0,null,null,7,"div",[["class","navbar navbar-expand-lg fixed-top navbar-dark bg-primary"]],null,null,null,null,null)),(l()(),_._25(-1,null,["\n    "])),(l()(),_._9(3,0,null,null,4,"div",[["class","container"]],null,null,null,null,null)),(l()(),_._25(-1,null,["\n      "])),(l()(),_._9(5,0,null,null,1,"a",[["class","navbar-brand"],["href","https://github.com/wizardnet972/ngxProgress"]],null,null,null,null,null)),(l()(),_._25(-1,null,["NgxProgress"])),(l()(),_._25(-1,null,["\n    "])),(l()(),_._25(-1,null,["\n  "])),(l()(),_._25(-1,null,["\n  "])),(l()(),_._9(10,0,null,null,39,"div",[["class","jumbotron"]],null,null,null,null,null)),(l()(),_._25(-1,null,["\n    "])),(l()(),_._9(12,0,null,null,36,"div",[["class","container"]],null,null,null,null,null)),(l()(),_._25(-1,null,["\n      "])),(l()(),_._9(14,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),_._9(15,0,null,null,1,"small",[],null,null,null,null,null)),(l()(),_._25(-1,null,["nProgressJS Example"])),(l()(),_._25(-1,null,["\n      "])),(l()(),_._9(18,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),_._25(-1,null,["NgxProgress"])),(l()(),_._25(-1,null,["\n      "])),(l()(),_._9(21,0,null,null,5,"p",[],null,null,null,null,null)),(l()(),_._25(-1,null,["\n        Progress loader for Angular 4+ include interceptor.\n        Can be integrate with 3rd parties javascript library."])),(l()(),_._9(23,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),_._25(-1,null,["\n        "])),(l()(),_._9(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),_._25(-1,null,["\n        > npm install ngxprogress\n      "])),(l()(),_._25(-1,null,["\n      "])),(l()(),_._9(28,0,null,null,19,"div",[["class","social"]],null,null,null,null,null)),(l()(),_._25(-1,null,["\n        "])),(l()(),_._9(30,0,null,null,16,"ul",[["class","list-inline"]],null,null,null,null,null)),(l()(),_._25(-1,null,["\n          "])),(l()(),_._9(32,0,null,null,1,"li",[],null,null,null,null,null)),(l()(),_._9(33,0,null,null,0,"span",[["id","ghbtns-badge"]],null,null,null,null,null)),(l()(),_._25(-1,null,["\n          "])),(l()(),_._9(35,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),_._9(36,0,null,null,1,"a",[["class","twitter-follow-button"],["href","https://twitter.com/wizardnet972"]],null,null,null,null,null)),(l()(),_._25(-1,null,["Follow @wizardnet972"])),(l()(),_._25(-1,null,["\n          "])),(l()(),_._9(39,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),_._9(40,0,null,null,1,"a",[["class","github-follow-button"],["href","https://github.com/wizardnet972/ngxProgress"]],null,null,null,null,null)),(l()(),_._25(-1,null,["NgxProgress@Github"])),(l()(),_._25(-1,null,["\n          "])),(l()(),_._9(43,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),_._9(44,0,null,null,1,"a",[["class","github-report-button"],["href","https://github.com/wizardnet972/ngxProgress/issues"]],null,null,null,null,null)),(l()(),_._25(-1,null,["Report Bug"])),(l()(),_._25(-1,null,["\n        "])),(l()(),_._25(-1,null,["\n      "])),(l()(),_._25(-1,null,["\n    "])),(l()(),_._25(-1,null,["\n  "])),(l()(),_._25(-1,null,["\n  "])),(l()(),_._9(51,0,null,null,26,"div",[["class","container"]],null,null,null,null,null)),(l()(),_._25(-1,null,["\n    "])),(l()(),_._9(53,0,null,null,20,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),_._25(-1,null,["\n      "])),(l()(),_._9(55,0,null,null,3,"label",[["for","miliseconds"]],null,null,null,null,null)),(l()(),_._25(-1,null,["Sets the amount of time you would "])),(l()(),_._9(57,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),_._25(-1,null,["like the\n      response to be delayed, in miliseconds"])),(l()(),_._25(-1,null,["\n      "])),(l()(),_._9(60,0,null,null,12,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),_._25(-1,null,["\n        "])),(l()(),_._9(62,0,null,null,6,"input",[["class","form-control"],["id","miliseconds"],["type","number"],["value","miliseconds"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var t=!0,e=l.component;if("input"===n){t=!1!==_._21(l,63)._handleInput(u.target.value)&&t}if("blur"===n){t=!1!==_._21(l,63).onTouched()&&t}if("compositionstart"===n){t=!1!==_._21(l,63)._compositionStart()&&t}if("compositionend"===n){t=!1!==_._21(l,63)._compositionEnd(u.target.value)&&t}if("change"===n){t=!1!==_._21(l,64).onChange(u.target.value)&&t}if("input"===n){t=!1!==_._21(l,64).onChange(u.target.value)&&t}if("blur"===n){t=!1!==_._21(l,64).onTouched()&&t}if("ngModelChange"===n){t=!1!==(e.miliseconds=u)&&t}return t},null,null)),_._7(63,16384,null,0,f.b,[_.H,_.l,[2,f.a]],null,null),_._7(64,16384,null,0,f.i,[_.H,_.l],null,null),_._23(1024,null,f.d,function(l,n){return[l,n]},[f.b,f.i]),_._7(66,671744,null,0,f.g,[[8,null],[8,null],[8,null],[2,f.d]],{model:[0,"model"]},{update:"ngModelChange"}),_._23(2048,null,f.e,null,[f.g]),_._7(68,16384,null,0,f.f,[f.e],null,null),(l()(),_._25(-1,null,["\n        "])),(l()(),_._9(70,0,null,null,1,"button",[["class","btn btn-primary"]],null,[[null,"click"]],function(l,n,u){var t=!0,e=l.component;if("click"===n){t=!1!==e.makeRequest()&&t}return t},null,null)),(l()(),_._25(-1,null,["Make Request"])),(l()(),_._25(-1,null,["\n      "])),(l()(),_._25(-1,null,["\n    "])),(l()(),_._25(-1,null,["\n\n    "])),(l()(),_._3(16777216,null,null,1,null,i)),_._7(76,802816,null,0,p.d,[_.R,_.O,_.u],{ngForOf:[0,"ngForOf"]},null),(l()(),_._25(-1,null,["\n\n  "])),(l()(),_._25(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,66,0,u.miliseconds),l(n,76,0,u.requests)},function(l,n){l(n,62,0,_._21(n,68).ngClassUntouched,_._21(n,68).ngClassTouched,_._21(n,68).ngClassPristine,_._21(n,68).ngClassDirty,_._21(n,68).ngClassValid,_._21(n,68).ngClassInvalid,_._21(n,68).ngClassPending)})}function s(l){return _._26(0,[(l()(),_._9(0,0,null,null,1,"app-root",[],null,null,null,o,h)),_._7(1,49152,null,0,g,[c.c],null,null)],null,null)}Object.defineProperty(n,"__esModule",{value:!0});var _=u("/oeL"),r={production:!0},a=function(){function l(){}return l}(),c=u("XKz0"),g=function(){function l(l){this.http=l,this.title="app",this.miliseconds=1e4,this.requests=[]}return l.prototype.makeRequest=function(){this.requests.push(new e(this.http,this.miliseconds))},l.ctorParameters=function(){return[{type:c.c}]},l}(),d=u("YTwB"),p=u("qbdv"),f=u("bm2B"),b=[".navbar[_ngcontent-%COMP%] {margin-bottom:0;}"],h=_._6({encapsulation:0,styles:b,data:{}}),m=_._4("app-root",g,s,{},{},[]),v=u("GeAF"),w=u("NRxx"),x=u("JjEr"),P=u("fc+i"),C=u("ikhg"),j=_._5(a,[g],function(l){return _._19([_._20(512,_.j,_._1,[[8,[d.a,m]],[3,_.j],_.y]),_._20(5120,v.a,t,[]),_._20(4608,c.h,c.m,[p.b,_.D,c.k]),_._20(4608,c.n,c.n,[c.h,c.l]),_._20(5120,c.a,function(l,n,u){return[new w.a(l,n),u]},[v.a,x.a,c.n]),_._20(5120,_.w,_._18,[[3,_.w]]),_._20(4608,p.f,p.e,[_.w]),_._20(4608,_.h,_.h,[]),_._20(5120,_.a,_._10,[]),_._20(5120,_.u,_._15,[]),_._20(5120,_.v,_._16,[]),_._20(4608,P.b,P.s,[p.b]),_._20(6144,_.K,null,[P.b]),_._20(4608,P.e,P.f,[]),_._20(5120,P.c,function(l,n,u,t){return[new P.k(l),new P.o(n),new P.n(u,t)]},[p.b,p.b,p.b,P.e]),_._20(4608,P.d,P.d,[P.c,_.A]),_._20(135680,P.m,P.m,[p.b]),_._20(4608,P.l,P.l,[P.d,P.m]),_._20(6144,_.I,null,[P.l]),_._20(6144,P.p,null,[P.m]),_._20(4608,_.P,_.P,[_.A]),_._20(4608,P.g,P.g,[p.b]),_._20(4608,P.i,P.i,[p.b]),_._20(4608,f.j,f.j,[]),_._20(4608,c.j,c.j,[]),_._20(6144,c.i,null,[c.j]),_._20(4608,c.g,c.g,[c.i]),_._20(6144,c.b,null,[c.g]),_._20(5120,c.f,c.o,[c.b,[2,c.a]]),_._20(4608,c.c,c.c,[c.f]),_._20(512,C.a,C.a,[[3,C.a]]),_._20(512,p.a,p.a,[]),_._20(1024,_.m,P.q,[]),_._20(1024,_.b,function(l,n){return[P.r(l,n)]},[[2,P.h],[2,_.z]]),_._20(512,_.c,_.c,[[2,_.b]]),_._20(131584,_._8,_._8,[_.A,_._2,_.s,_.m,_.j,_.c]),_._20(2048,_.e,null,[_._8]),_._20(512,_.d,_.d,[_.e]),_._20(512,P.a,P.a,[[3,P.a]]),_._20(512,f.h,f.h,[]),_._20(512,f.c,f.c,[]),_._20(512,c.e,c.e,[]),_._20(512,c.d,c.d,[]),_._20(512,a,a,[]),_._20(256,x.a,3e3,[]),_._20(256,c.k,"XSRF-TOKEN",[]),_._20(256,c.l,"X-XSRF-TOKEN",[])])});r.production&&Object(_.V)(),Object(P.j)().bootstrapModuleFactory(j).catch(function(l){return console.log(l)})},gFIY:function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id="gFIY"}},[0]);