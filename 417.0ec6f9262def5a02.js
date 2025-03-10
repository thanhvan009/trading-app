"use strict";(self.webpackChunkEasyAngular=self.webpackChunkEasyAngular||[]).push([[417],{1798:(U,f,i)=>{i.r(f),i.d(f,{SettingsComponent:()=>q});var d=i(177),r=i(9417),c=i(3955),h=i(2767),C=i(944),e=i(4438),m=i(4710),g=i(1315),v=i(2840);const p=t=>({"is-invalid":t});function E(t,a){1&t&&(e.j41(0,"div",27),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&t&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"FIELD_REQUIRED")," "))}function y(t,a){1&t&&(e.j41(0,"div",27),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&t&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"FIELD_REQUIRED")," "))}function I(t,a){1&t&&(e.j41(0,"div",27),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&t&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"FIELD_REQUIRED")," "))}function x(t,a){1&t&&(e.j41(0,"div",27),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&t&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"FIELD_REQUIRED")," "))}let G=(()=>{class t{constructor(n,s,o,u){this.router=n,this.storeService=s,this.activatedRoute=o,this.toastManager=u,this.selectedIndex=1,this.formGroup=new r.gE({cardType:new r.MJ({value:"",disabled:!1},{validators:[r.k0.required],nonNullable:!0}),nameOnCard:new r.MJ({value:"",disabled:!1},{validators:[r.k0.required],nonNullable:!0}),cardNumber:new r.MJ({value:"",disabled:!1},{validators:[r.k0.required],nonNullable:!0}),expirationDate:new r.MJ({value:"",disabled:!1},{validators:[r.k0.required],nonNullable:!0})})}ngAfterViewInit(){this.selectedIndex=this.activatedRoute.snapshot.queryParams.tab||1}onClickSubmit(){this.formGroup.markAllAsTouched(),!this.formGroup.invalid&&(this.storeService.isLoading.set(!0),setTimeout(n=>{this.storeService.isLoading.set(!1)},1e3),this.toastManager.quickShow("Payment was added successfully","success",!0),this.router.navigateByUrl("/settings?tab=1"))}static{this.\u0275fac=function(s){return new(s||t)(e.rXU(m.Ix),e.rXU(g.n),e.rXU(m.nX),e.rXU(v.t))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["setting-payments"]],standalone:!0,features:[e.aNF],decls:45,vars:17,consts:[[1,"payments"],[1,"my-cards"],[1,"title"],[1,"card-list","row"],[1,"card-item","col-lg-3","col-md-4","col-sm-12","col-xs-12"],["src","assets/img/project/card-1.png"],["src","assets/img/project/card-2.png"],["src","assets/img/project/card-3.png"],[1,"add-card","row"],[1,"col-lg-9","col-md-12","col-sm-12","col-xs-12"],[1,"description"],[3,"formGroup"],[1,"row"],[1,"col-lg-6","col-md-6","col-sm-12","col-xs-12","mb-4"],["for","cardType",1,"form-label","text-start","w-100"],["type","text","id","cardType","formControlName","cardType","placeholder","Enter your card type",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","nameOnCard",1,"form-label","text-start","w-100"],["type","text","id","nameOnCard","formControlName","nameOnCard","placeholder","Enter your name on card",1,"form-control",3,"ngClass"],[1,"row","mb-5"],["for","cardNumber",1,"form-label","text-start","w-100"],["type","text","id","cardNumber","formControlName","cardNumber","placeholder","Enter your card number",1,"form-control",3,"ngClass"],["for","expirationDate",1,"form-label","text-start","w-100"],["type","date","id","expirationDate","formControlName","expirationDate","placeholder","Enter your expiration date",1,"form-control",3,"ngClass"],[1,"col-lg-6","col-md-6","col-sm-12","col-xs-12"],[1,"action-buttons","col-lg-6","col-md-6"],["type","submit",1,"primary",3,"click"],[1,"invalid-feedback"]],template:function(s,o){1&s&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2),e.EFF(3,"My cards"),e.k0s(),e.j41(4,"div",3)(5,"div",4),e.nrm(6,"img",5),e.k0s(),e.j41(7,"div",4),e.nrm(8,"img",6),e.k0s(),e.j41(9,"div",4),e.nrm(10,"img",7),e.k0s()()(),e.j41(11,"div",8)(12,"div",9)(13,"div",2),e.EFF(14,"Add Card"),e.k0s(),e.j41(15,"div",10),e.EFF(16," Credit Card generally means a plastic card issued by Scheduled Commercial Banks assigned to a Cardholder, with a credit limit, that can be used to purchase goods and services on credit or obtain cash advances. "),e.k0s(),e.j41(17,"form",11)(18,"div",12)(19,"div",13)(20,"label",14),e.EFF(21,"Card Type"),e.k0s(),e.nrm(22,"input",15),e.DNE(23,E,3,3,"div",16),e.k0s(),e.j41(24,"div",13)(25,"label",17),e.EFF(26,"Name On Card"),e.k0s(),e.nrm(27,"input",18),e.DNE(28,y,3,3,"div",16),e.k0s()(),e.j41(29,"div",19)(30,"div",13)(31,"label",20),e.EFF(32,"Card Number"),e.k0s(),e.nrm(33,"input",21),e.DNE(34,I,3,3,"div",16),e.k0s(),e.j41(35,"div",13)(36,"label",22),e.EFF(37,"Expiration Date"),e.k0s(),e.nrm(38,"input",23),e.DNE(39,x,3,3,"div",16),e.k0s()(),e.j41(40,"div",12),e.nrm(41,"div",24),e.j41(42,"div",25)(43,"button",26),e.bIt("click",function(){return o.onClickSubmit()}),e.EFF(44,"Add card"),e.k0s()()()()()()()),2&s&&(e.R7$(17),e.Y8G("formGroup",o.formGroup),e.R7$(5),e.Y8G("ngClass",e.eq3(9,p,o.formGroup.controls.cardType.errors&&o.formGroup.controls.cardType.touched)),e.R7$(),e.Y8G("ngIf",o.formGroup.controls.cardType.hasError("required")),e.R7$(4),e.Y8G("ngClass",e.eq3(11,p,o.formGroup.controls.nameOnCard.errors&&o.formGroup.controls.nameOnCard.touched)),e.R7$(),e.Y8G("ngIf",o.formGroup.controls.nameOnCard.hasError("required")),e.R7$(5),e.Y8G("ngClass",e.eq3(13,p,o.formGroup.controls.cardNumber.errors&&o.formGroup.controls.cardNumber.touched)),e.R7$(),e.Y8G("ngIf",o.formGroup.controls.cardNumber.hasError("required")),e.R7$(4),e.Y8G("ngClass",e.eq3(15,p,o.formGroup.controls.expirationDate.errors&&o.formGroup.controls.expirationDate.touched)),e.R7$(),e.Y8G("ngIf",o.formGroup.controls.expirationDate.hasError("required")))},dependencies:[r.YN,r.qT,r.me,r.BC,r.cb,r.X1,r.j4,r.JD,d.YU,d.bT,c.h,c.D9],styles:[".payments[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#333b69;font-size:22px;font-weight:600;margin-bottom:20px}.payments[_ngcontent-%COMP%]   .add-card[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:#718ebf;font-size:16px;font-weight:400;margin-bottom:30px}.action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:end}.card-list[_ngcontent-%COMP%]{display:flex;margin-bottom:20px}.card-list[_ngcontent-%COMP%]   .card-item[_ngcontent-%COMP%]{margin-bottom:35px;padding-right:30px}.card-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}"]})}}return t})();var k=i(6850),F=i(1732);const _=t=>({active:t}),b=t=>({"tab-content":t}),l=t=>({"is-invalid":t});function R(t,a){1&t&&e.nrm(0,"app-progress-bar")}function M(t,a){if(1&t&&(e.j41(0,"div",29)(1,"label",30),e.EFF(2,"License Number"),e.k0s(),e.j41(3,"div",31),e.EFF(4),e.k0s()()),2&t){const n=e.XpG(3);e.R7$(4),e.JRh(n.model.licenseNumber)}}function N(t,a){1&t&&(e.j41(0,"div",32),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&t&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"FIELD_REQUIRED")," "))}function T(t,a){1&t&&(e.j41(0,"div",32),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&t&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"FIELD_REQUIRED")," "))}function w(t,a){1&t&&(e.j41(0,"div",32),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&t&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"FIELD_REQUIRED")," "))}function S(t,a){1&t&&(e.j41(0,"div",32),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&t&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"FIELD_EMAIL")," "))}function j(t,a){1&t&&(e.j41(0,"div",32),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&t&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"FIELD_REQUIRED")," "))}function D(t,a){1&t&&(e.j41(0,"div",32),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&t&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"FIELD_REQUIRED")," "))}function O(t,a){1&t&&(e.j41(0,"div",32),e.EFF(1),e.nI1(2,"translate"),e.k0s()),2&t&&(e.R7$(),e.SpI(" ",e.bMT(2,1,"FIELD_REQUIRED")," "))}function P(t,a){if(1&t){const n=e.RV6();e.j41(0,"div",7)(1,"div",8)(2,"form",9)(3,"div",10)(4,"div",11),e.DNE(5,M,5,1,"div",12),e.k0s()(),e.j41(6,"div",10)(7,"div",11)(8,"div",13)(9,"label",14),e.EFF(10,"Your Name"),e.k0s(),e.nrm(11,"input",15),e.DNE(12,N,3,3,"div",16),e.k0s()(),e.j41(13,"div",11)(14,"div",13)(15,"label",17),e.EFF(16,"User Name"),e.k0s(),e.nrm(17,"input",18),e.DNE(18,T,3,3,"div",16),e.k0s()()(),e.j41(19,"div",10)(20,"div",11)(21,"div",13)(22,"label",19),e.EFF(23,"Email"),e.k0s(),e.nrm(24,"input",20),e.DNE(25,w,3,3,"div",16)(26,S,3,3,"div",16),e.k0s()(),e.j41(27,"div",11)(28,"div",13)(29,"label",21),e.EFF(30,"Password"),e.k0s(),e.nrm(31,"input",22),e.DNE(32,j,3,3,"div",16),e.k0s()()(),e.j41(33,"div",10)(34,"div",11)(35,"div",13)(36,"label",23),e.EFF(37,"Date of Birth"),e.k0s(),e.nrm(38,"input",24),e.DNE(39,D,3,3,"div",16),e.k0s()(),e.j41(40,"div",11)(41,"div",13)(42,"label",25),e.EFF(43,"Address"),e.k0s(),e.nrm(44,"input",26),e.DNE(45,O,3,3,"div",16),e.k0s()()(),e.j41(46,"div",27)(47,"button",28),e.bIt("click",function(){e.eBV(n);const o=e.XpG(2);return e.Njj(o.onClickSubmit())}),e.EFF(48," Save Profile "),e.k0s()()()()()}if(2&t){const n=e.XpG(2);e.Y8G("ngClass",e.eq3(16,b,0==n.selectedIndex)),e.R7$(2),e.Y8G("formGroup",n.formGroup),e.R7$(3),e.Y8G("ngIf","Customer"!==n.role),e.R7$(6),e.Y8G("ngClass",e.eq3(18,l,n.formGroup.controls.yourname.errors&&n.formGroup.controls.yourname.touched)),e.R7$(),e.Y8G("ngIf",n.formGroup.controls.yourname.hasError("required")),e.R7$(5),e.Y8G("ngClass",e.eq3(20,l,n.formGroup.controls.username.errors&&n.formGroup.controls.username.touched)),e.R7$(),e.Y8G("ngIf",n.formGroup.controls.username.hasError("required")),e.R7$(6),e.Y8G("ngClass",e.eq3(22,l,n.formGroup.controls.email.errors&&n.formGroup.controls.email.touched)),e.R7$(),e.Y8G("ngIf",n.formGroup.controls.email.hasError("required")),e.R7$(),e.Y8G("ngIf",n.formGroup.controls.email.hasError("email")),e.R7$(5),e.Y8G("ngClass",e.eq3(24,l,n.formGroup.controls.password.errors&&n.formGroup.controls.password.touched)),e.R7$(),e.Y8G("ngIf",n.formGroup.controls.password.hasError("required")),e.R7$(6),e.Y8G("ngClass",e.eq3(26,l,n.formGroup.controls.dateOfBirth.errors&&n.formGroup.controls.dateOfBirth.touched)),e.R7$(),e.Y8G("ngIf",n.formGroup.controls.dateOfBirth.hasError("required")),e.R7$(5),e.Y8G("ngClass",e.eq3(28,l,n.formGroup.controls.address.errors&&n.formGroup.controls.address.touched)),e.R7$(),e.Y8G("ngIf",n.formGroup.controls.address.hasError("required"))}}function $(t,a){if(1&t&&(e.j41(0,"div",7),e.nrm(1,"setting-payments"),e.k0s()),2&t){const n=e.XpG(2);e.Y8G("ngClass",e.eq3(1,b,1==n.selectedIndex))}}function Y(t,a){if(1&t){const n=e.RV6();e.qex(0),e.j41(1,"div",2)(2,"div",3)(3,"div",4)(4,"div",5),e.bIt("click",function(){e.eBV(n);const o=e.XpG();return e.Njj(o.onClickTab(0))}),e.EFF(5," Edit Profile "),e.k0s(),e.j41(6,"div",5),e.bIt("click",function(){e.eBV(n);const o=e.XpG();return e.Njj(o.onClickTab(1))}),e.EFF(7,"Payments"),e.k0s()(),e.DNE(8,P,49,30,"div",6)(9,$,2,3,"div",6),e.k0s()(),e.bVm()}if(2&t){const n=e.XpG();e.R7$(4),e.Y8G("ngClass",e.eq3(4,_,0==n.selectedIndex)),e.R7$(2),e.Y8G("ngClass",e.eq3(6,_,1==n.selectedIndex)),e.R7$(2),e.Y8G("ngIf",0==n.selectedIndex),e.R7$(),e.Y8G("ngIf",1==n.selectedIndex)}}let q=(()=>{class t{constructor(n,s,o,u){this.storeService=n,this.router=s,this.activatedRoute=o,this.toastManager=u,this.appName=h.c.appName,this.model={},this.role="",this.selectedIndex=0,this.storeService.isLoading.set(!0)}initForm(){this.formGroup=new r.gE({yourname:new r.MJ({value:this.model.yourname,disabled:!1},{validators:[r.k0.required],nonNullable:!0}),email:new r.MJ({value:this.model.email,disabled:!1},{validators:[r.k0.required,r.k0.email],nonNullable:!0}),dateOfBirth:new r.MJ({value:(0,d.Yq)(this.model.dateOfBirth??null,"yyyy-MM-dd","en"),disabled:!1},{validators:[r.k0.required],nonNullable:!0}),username:new r.MJ({value:this.model.username,disabled:!1},{validators:[r.k0.required],nonNullable:!0}),password:new r.MJ({value:this.model.password,disabled:!1},{validators:[r.k0.required],nonNullable:!0}),address:new r.MJ({value:this.model.address,disabled:!1},{validators:[r.k0.required],nonNullable:!0})})}ngOnInit(){setTimeout(n=>{this.storeService.isLoading.set(!1)},1e3),this.role=localStorage.getItem("role")??"",this.model=JSON.parse(localStorage.getItem("user")??"")}onClickTab(n){this.selectedIndex=n}ngAfterViewInit(){this.initForm(),this.selectedIndex=this.activatedRoute.snapshot.queryParams.tab||0}onClickSubmit(){this.formGroup.markAllAsTouched(),!this.formGroup.invalid&&(this.storeService.isLoading.set(!0),setTimeout(n=>{this.storeService.isLoading.set(!1)},1e3),this.toastManager.quickShow("Setting was saved successfully","success",!0),this.router.navigateByUrl("/settings?tab=0"))}static{this.\u0275fac=function(s){return new(s||t)(e.rXU(g.n),e.rXU(m.Ix),e.rXU(m.nX),e.rXU(v.t))}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-setting"]],standalone:!0,features:[e.aNF],decls:4,vars:2,consts:[[1,"settings"],[4,"ngIf"],[1,"settings-wrapper"],[1,"settings-inner"],[1,"tab-labels"],[3,"click","ngClass"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],[1,"container"],[3,"formGroup"],[1,"row"],[1,"col-lg-6","col-md-6","col-sm-12","col-xs-12"],["class","mb-4",4,"ngIf"],[1,"mb-5"],["for","yourname",1,"form-label","text-start","w-100"],["type","text","id","yourname","formControlName","yourname","placeholder","Enter your name",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","username",1,"form-label","text-start","w-100"],["type","text","id","username","formControlName","username","placeholder","Enter your user name",1,"form-control",3,"ngClass"],["for","email",1,"form-label","text-start","w-100"],["type","email","id","email","formControlName","email","placeholder","Enter your email",1,"form-control",3,"ngClass"],["for","password",1,"form-label","text-start","w-100"],["type","password","id","password","formControlName","password","placeholder","Enter your password",1,"form-control",3,"ngClass"],["for","dateOfBirth",1,"form-label","text-start","w-100"],["type","date","id","dateOfBirth","formControlName","dateOfBirth","placeholder","Enter your Date of Birth",1,"form-control",3,"ngClass"],["for","address",1,"form-label","text-start","w-100"],["type","address","id","address","formControlName","address","placeholder","Enter your address",1,"form-control",3,"ngClass"],[1,"action-buttons"],["type","submit",1,"primary",3,"click"],[1,"mb-4"],["for","licenseNumber",1,"form-label","text-start","w-100"],[1,"value"],[1,"invalid-feedback"]],template:function(s,o){1&s&&(e.j41(0,"app-page-layout")(1,"div",0),e.DNE(2,R,1,0,"app-progress-bar",1)(3,Y,10,8,"ng-container",1),e.k0s()()),2&s&&(e.R7$(2),e.Y8G("ngIf",o.storeService.isLoading()),e.R7$(),e.Y8G("ngIf",!o.storeService.isLoading()))},dependencies:[C.J,r.YN,r.qT,r.me,r.BC,r.cb,r.X1,r.j4,r.JD,d.YU,d.bT,c.h,c.D9,k.RI,G,F.a],styles:[".settings[_ngcontent-%COMP%]{background:#f5f7fa;padding:0;margin:0}.settings-wrapper[_ngcontent-%COMP%]{padding:50px 20x}.settings-inner[_ngcontent-%COMP%]{background:#fff;border-radius:10px;padding:20px}form[_ngcontent-%COMP%]{padding:30px 0}form[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{color:#718ebf}.action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:end}.tab-labels[_ngcontent-%COMP%]{border-bottom:1px solid #e0e2ec}.tab-labels[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding-right:30px}@media only screen and (min-width: 768px){form[_ngcontent-%COMP%]{padding:10px 0}.settings-wrapper[_ngcontent-%COMP%]{height:100vh;overflow-y:auto}.settings-inner[_ngcontent-%COMP%]{padding:50px}}@media only screen and (min-width: 992px){.settings-inner[_ngcontent-%COMP%]{padding:50px}}@media only screen and (min-width: 1024px){form[_ngcontent-%COMP%]{padding:0 30px}.settings-wrapper[_ngcontent-%COMP%]{padding:50px}}@media only screen and (min-width: 1440px){.settings-wrapper[_ngcontent-%COMP%]{padding:50px 100px}form[_ngcontent-%COMP%]{padding:0 50px}}"]})}}return t})()}}]);