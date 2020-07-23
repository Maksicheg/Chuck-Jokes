function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2WFe":function(e,r,t){"use strict";t.r(r),t.d(r,"RegisterModule",(function(){return d}));var i=t("PCNd"),s=t("3Pt+"),n=t("tyNb"),a=t("fXoL"),o=t("IYfF"),c=t("ofXK");function l(e,r){1&e&&(a.Qb(0,"span",14),a.Qb(1,"small"),a.sc(2,"First Name is required!"),a.Pb(),a.Pb())}function b(e,r){1&e&&(a.Qb(0,"span",14),a.Qb(1,"small"),a.sc(2,"Please, enter valid email!"),a.Pb(),a.Pb())}function m(e,r){1&e&&(a.Qb(0,"span",14),a.Qb(1,"small"),a.sc(2,"Please, enter valid password!"),a.Pb(),a.Pb())}function u(e,r){if(1&e&&(a.Qb(0,"span",15),a.sc(1),a.Pb()),2&e){var t=a.bc();a.zb(1),a.tc(t.errorMessage)}}var f,g,p=[{path:"",component:(f=function(){function e(r,t,i){_classCallCheck(this,e),this.authService=r,this.router=t,this.formBuilder=i,this.errorMessage=""}return _createClass(e,[{key:"ngOnInit",value:function(){this.initForm()}},{key:"initForm",value:function(){this.registerForm=this.formBuilder.group({firstName:["",[s.m.required,s.m.minLength(3)]],lastName:["",s.m.minLength(3)],email:["",[s.m.required,s.m.email]],password:["",[s.m.required,s.m.minLength(6)]]})}},{key:"register",value:function(){var e=this;this.registerForm.valid&&this.authService.register(this.registerForm.value).subscribe((function(){e.authService.login({email:e.registerForm.value.email,password:e.registerForm.value.password}).subscribe((function(){return e.router.navigate(["/"])}))}),(function(r){return e.errorMessage=r}))}}]),e}(),f.\u0275fac=function(e){return new(e||f)(a.Lb(o.a),a.Lb(n.b),a.Lb(s.b))},f.\u0275cmp=a.Fb({type:f,selectors:[["app-register"]],decls:28,vars:5,consts:[[1,"authentication"],[1,"modal"],[1,"modal__title"],[1,"modal__subtitle"],[1,"form",3,"formGroup","ngSubmit"],[1,"form__control"],["formControlName","firstName","type","text","placeholder","First Name"],["class","error-message",4,"ngIf"],["formControlName","lastName","type","text","placeholder","Last Name"],["formControlName","email","type","email","placeholder","Email"],["formControlName","password","type","password","placeholder","Password"],["class","error",4,"ngIf"],["type","submit",1,"btn"],["routerLink","/login"],[1,"error-message"],[1,"error"]],template:function(e,r){1&e&&(a.Qb(0,"div",0),a.Qb(1,"div",1),a.Qb(2,"div",2),a.sc(3,"Chuck"),a.Qb(4,"span"),a.sc(5,"Jokes"),a.Pb(),a.Pb(),a.Qb(6,"div",3),a.Qb(7,"h4"),a.sc(8,"Create a new account"),a.Pb(),a.Pb(),a.Qb(9,"form",4),a.Xb("ngSubmit",(function(){return r.register()})),a.Qb(10,"div",5),a.Mb(11,"input",6),a.qc(12,l,3,0,"span",7),a.Pb(),a.Qb(13,"div",5),a.Mb(14,"input",8),a.Pb(),a.Qb(15,"div",5),a.Mb(16,"input",9),a.qc(17,b,3,0,"span",7),a.Pb(),a.Qb(18,"div",5),a.Mb(19,"input",10),a.qc(20,m,3,0,"span",7),a.Pb(),a.qc(21,u,2,1,"span",11),a.Qb(22,"button",12),a.sc(23,"Register"),a.Pb(),a.Pb(),a.Qb(24,"p"),a.sc(25,"or"),a.Pb(),a.Qb(26,"a",13),a.sc(27,"Log In"),a.Pb(),a.Pb(),a.Pb()),2&e&&(a.zb(9),a.gc("formGroup",r.registerForm),a.zb(3),a.gc("ngIf",!r.registerForm.get("firstName").valid&&r.registerForm.get("firstName").touched),a.zb(5),a.gc("ngIf",!r.registerForm.get("email").valid&&r.registerForm.get("email").touched),a.zb(3),a.gc("ngIf",!r.registerForm.get("password").valid&&r.registerForm.get("password").touched),a.zb(1),a.gc("ngIf",r.errorMessage))},directives:[s.n,s.h,s.e,s.a,s.g,s.d,c.j,n.d],styles:[""]}),f)}],d=((g=function e(){_classCallCheck(this,e)}).\u0275mod=a.Jb({type:g}),g.\u0275inj=a.Ib({factory:function(e){return new(e||g)},imports:[[i.a,s.l,n.e.forChild(p)],n.e]}),g)}}]);