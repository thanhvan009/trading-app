"use strict";(self.webpackChunkEasyAngular=self.webpackChunkEasyAngular||[]).push([[482],{5482:(h,a,n)=>{n.r(a),n.d(a,{RoleSelectionComponent:()=>g});var s=n(467),o=n(9417),d=n(3955),u=n(2767),e=n(4438),_=n(4710),m=n(1315),p=n(1140);let g=(()=>{class l{constructor(t,r,i){this.router=t,this.storeService=r,this.appService=i,this.appName=u.c.appName,this.initFormGroup()}initFormGroup(){this.formGroup=new o.gE({email:new o.MJ({value:"",disabled:!1},{validators:[o.k0.required,o.k0.email],nonNullable:!0}),password:new o.MJ({value:"",disabled:!1},{validators:[o.k0.required],nonNullable:!0})})}onSelectRole(t){localStorage.setItem("role",t),this.router.navigate(["/auth/user-information"])}onClickSubmit(){var t=this;return(0,s.A)(function*(){yield t.authenticate()})()}authenticate(){var t=this;return(0,s.A)(function*(){t.storeService.isLoading.set(!0);const r=t.formGroup.controls.email.getRawValue(),i=t.formGroup.controls.password.getRawValue(),c=yield t.appService.authenticate(r,i);t.storeService.isLoading.set(!1),c&&t.router.navigate(["/dashboard"])})()}static{this.\u0275fac=function(r){return new(r||l)(e.rXU(_.Ix),e.rXU(m.n),e.rXU(p.d))}}static{this.\u0275cmp=e.VBU({type:l,selectors:[["role-selection"]],standalone:!0,features:[e.aNF],decls:37,vars:4,consts:[[1,"role-selection"],[1,"header"],["alt","logo",1,"logo-app",3,"src"],[1,"role-selection-wrapper","container"],[1,"title"],[1,"wrapper","row"],[1,"col-lg-4","col-md-4","col-sm-12","col-xs-12","mb-5"],[1,"role-item"],["alt","Role Image",3,"src"],[1,"content"],[1,"subtitle"],[1,"content-wrapper"],[3,"click"]],template:function(r,i){1&r&&(e.j41(0,"div",0)(1,"div",1),e.nrm(2,"img",2),e.k0s(),e.j41(3,"div",3)(4,"h1",4),e.EFF(5,"Please select your role to continue!"),e.k0s(),e.j41(6,"div",5)(7,"div",6)(8,"div",7),e.nrm(9,"img",8),e.j41(10,"div",9)(11,"h2",10),e.EFF(12," Customer "),e.k0s(),e.j41(13,"div",11),e.EFF(14," Some quick example text to build on the card title and make up the bulk of the card's content. make up the bulk of the card's content. "),e.k0s(),e.j41(15,"button",12),e.bIt("click",function(){return i.onSelectRole("Customer")}),e.EFF(16,"Select"),e.k0s()()()(),e.j41(17,"div",6)(18,"div",7),e.nrm(19,"img",8),e.j41(20,"div",9)(21,"h2",10),e.EFF(22," Trade "),e.k0s(),e.j41(23,"div",11),e.EFF(24," Some quick example text to build on the card title and make up the bulk of the card's content. make up the bulk of the card's content. "),e.k0s(),e.j41(25,"button",12),e.bIt("click",function(){return i.onSelectRole("Trade")}),e.EFF(26,"Select"),e.k0s()()()(),e.j41(27,"div",6)(28,"div",7),e.nrm(29,"img",8),e.j41(30,"div",9)(31,"h2",10),e.EFF(32," Adjudicator "),e.k0s(),e.j41(33,"div",11),e.EFF(34," Some quick example text to build on the card title and make up the bulk of the card's content. make up the bulk of the card's content. "),e.k0s(),e.j41(35,"button",12),e.bIt("click",function(){return i.onSelectRole("Adjudicator")}),e.EFF(36,"Select"),e.k0s()()()()()()()),2&r&&(e.R7$(2),e.Y8G("src","assets/img/project/logo-app.png",e.B4B),e.R7$(7),e.Y8G("src","assets/img/project/role-image.png",e.B4B),e.R7$(10),e.Y8G("src","assets/img/project/role-image.png",e.B4B),e.R7$(10),e.Y8G("src","assets/img/project/role-image.png",e.B4B))},dependencies:[o.YN,o.X1,d.h],styles:[".role-selection[_ngcontent-%COMP%]{background:#f5f7fa}.role-selection[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]{background:#fff;padding:20px 30px}.role-selection[_ngcontent-%COMP%]   .role-selection-wrapper[_ngcontent-%COMP%]{padding:50px 0}.role-selection[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{color:#092c4c;font-size:22px;text-align:center;font-weight:500;margin-bottom:50px}.role-selection[_ngcontent-%COMP%]   .role-item[_ngcontent-%COMP%]{background-color:#fff;border-radius:6px;transition:.1s}.role-selection[_ngcontent-%COMP%]   .role-item[_ngcontent-%COMP%]:hover{opacity:.8;box-shadow:0 1px 1px 1px #ddd}.role-selection[_ngcontent-%COMP%]   .role-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:auto}.role-selection[_ngcontent-%COMP%]   .role-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:20px 20px 30px}.role-selection[_ngcontent-%COMP%]   .role-item[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{color:#092c4c;font-size:24px;margin-bottom:5px}.role-selection[_ngcontent-%COMP%]   .role-item[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]{font-size:16px;color:#4f4f4f;font-weight:400;margin-bottom:15px}.role-selection[_ngcontent-%COMP%]   .role-item[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#092c4c;color:#fff;width:100%;height:55px;font-weight:400;border:none;border-radius:5px}@media only screen and (min-width: 768px){.role-selection[_ngcontent-%COMP%]{height:100vh;overflow-y:auto}.role-item[_ngcontent-%COMP%]{margin:0 10px}.role-selection-wrapper[_ngcontent-%COMP%]{padding:50px 0}}@media only screen and (min-width: 992px){.role-item[_ngcontent-%COMP%]{margin:0 15px}}"]})}}return l})()}}]);