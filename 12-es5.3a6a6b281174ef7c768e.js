!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{cs8U:function(i,n,o){"use strict";o.r(n),o.d(n,"AddStoryPageModule",(function(){return S}));var r=o("ofXK"),c=o("3Pt+"),s=o("TEn/"),a=o("tyNb"),l=o("fXoL"),d=o("JZ6Q"),b=o("lGQG");function u(t,e){1&t&&(l.Ob(0,"ion-card-header"),l.Ob(1,"ion-card-title",14),l.nc(2,"The New Story Awaits...."),l.Nb(),l.Nb())}function y(t,e){if(1&t&&l.Kb(0,"ion-img",15),2&t){var i=l.Yb();l.dc("src",i.edit&&!i.file?i.editStory.imageUrl:i.storyImage)}}function f(t,e){1&t&&(l.Ob(0,"ion-text",16),l.Ob(1,"small"),l.nc(2,"Please enter valid title(min 4 characters)."),l.Nb(),l.Nb())}function m(t,e){1&t&&(l.Ob(0,"ion-text",16),l.Ob(1,"small"),l.nc(2,"Please enter valid description(min 10 characters)."),l.Nb(),l.Nb())}function g(t,e){1&t&&(l.Ob(0,"ion-text",16),l.Ob(1,"small"),l.nc(2,"Please enter valid story(min 10 characters)."),l.Nb(),l.Nb())}var h,p,v,O=[{path:"",component:(h=function(){function i(e,n,o,r,s){var a=this;t(this,i),this.storyService=e,this.authService=n,this.loading=o,this.router=r,this.route=s,this.file=null,this.storyImage=null,this.edit=!1,this.storyForm=new c.d({title:new c.b(null,[c.l.required,c.l.minLength(4)]),description:new c.b(null,[c.l.required,c.l.minLength(10),c.l.maxLength(40)]),story:new c.b(null,[c.l.required,c.l.minLength(10),c.l.maxLength(500)])}),this.route.queryParams.subscribe((function(t){t&&(a.edit=t.edit,a.storyId=t.id,a.subsciption=a.storyService.getStory(a.storyId).subscribe((function(t){a.storyImage=t.imageUrl,a.editStory=t})))}))}var n,o,r;return n=i,(o=[{key:"ngOnInit",value:function(){}},{key:"submit",value:function(){var t=this;this.loading.create({message:this.edit?"Making the changes...":"Adding the story..."}).then((function(t){return t.present()})).then((function(){t.edit?t.storyService.editStory(t.storyId,Object.assign(Object.assign({},t.storyForm.value),{image:t.file?t.file:"",authorId:t.authService.user,path:t.editStory.imagePath})):t.storyService.addStory(Object.assign(Object.assign({},t.storyForm.value),{image:t.file,authorid:t.authService.user}))})).then((function(){console.log("story uploaded successfully"),t.storyImage=null,t.storyForm.reset(),t.loading.dismiss(),t.router.navigate(["","feed"])})).catch((function(t){console.log(t)}))}},{key:"openFileSelector",value:function(){document.getElementById("uploadBtn").click()}},{key:"previewFile",value:function(t){var e=this;if(this.file=t[0],t&&t[0]){var i=new FileReader;i.onload=function(t){e.storyImage=t.target.result},i.readAsDataURL(t[0])}}},{key:"ionViewWillLeave",value:function(){this.subsciption.unsubscribe()}},{key:"title",get:function(){return this.storyForm.get("title")}},{key:"description",get:function(){return this.storyForm.get("description")}},{key:"story",get:function(){return this.storyForm.get("story")}}])&&e(n.prototype,o),r&&e(n,r),i}(),h.\u0275fac=function(t){return new(t||h)(l.Jb(d.a),l.Jb(b.a),l.Jb(s.L),l.Jb(a.g),l.Jb(a.a))},h.\u0275cmp=l.Db({type:h,selectors:[["app-add-story"]],decls:35,vars:13,consts:[["slot","start"],["defaultHref","/feed"],["size-md","10","offset-md","1"],[4,"ngIf"],[3,"src",4,"ngIf"],["expand","block","shape","round",3,"click"],["id","uploadBtn","type","file",1,"upload",3,"hidden","change"],[3,"formGroup","ngSubmit"],["position","floating"],["type","text","formControlName","title",3,"value"],["color","danger",4,"ngIf"],["type","text","formControlName","description",3,"value"],["formControlName","story","rows","5",3,"value"],["type","submit","expand","block",3,"disabled"],["id","msg"],[3,"src"],["color","danger"]],template:function(t,e){1&t&&(l.Ob(0,"ion-header"),l.Ob(1,"ion-toolbar"),l.Ob(2,"ion-title"),l.nc(3),l.Nb(),l.Ob(4,"ion-buttons",0),l.Kb(5,"ion-back-button",1),l.Nb(),l.Nb(),l.Nb(),l.Ob(6,"ion-content"),l.Ob(7,"ion-grid"),l.Ob(8,"ion-row"),l.Ob(9,"ion-col",2),l.Ob(10,"ion-card"),l.lc(11,u,3,0,"ion-card-header",3),l.Ob(12,"ion-card-content"),l.lc(13,y,1,1,"ion-img",4),l.Ob(14,"ion-button",5),l.Wb("click",(function(){return e.openFileSelector()})),l.nc(15),l.Ob(16,"input",6),l.Wb("change",(function(t){return e.previewFile(t.target.files)})),l.Nb(),l.Nb(),l.Ob(17,"form",7),l.Wb("ngSubmit",(function(){return e.submit()})),l.Ob(18,"ion-item"),l.Ob(19,"ion-label",8),l.nc(20,"Title"),l.Nb(),l.Kb(21,"ion-input",9),l.Nb(),l.lc(22,f,3,0,"ion-text",10),l.Ob(23,"ion-item"),l.Ob(24,"ion-label",8),l.nc(25,"Description"),l.Nb(),l.Kb(26,"ion-input",11),l.Nb(),l.lc(27,m,3,0,"ion-text",10),l.Ob(28,"ion-item"),l.Ob(29,"ion-label",8),l.nc(30,"Enter the Story"),l.Nb(),l.Kb(31,"ion-textarea",12),l.Nb(),l.lc(32,g,3,0,"ion-text",10),l.Ob(33,"ion-button",13),l.nc(34," Submit "),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb(),l.Nb()),2&t&&(l.yb(3),l.oc(e.edit?"Edit Story":"Add Story"),l.yb(8),l.dc("ngIf",!e.edit),l.yb(2),l.dc("ngIf",e.storyImage),l.yb(2),l.pc(" ",e.file||e.edit?"Change Image":"Select Image"," "),l.yb(1),l.dc("hidden",!0),l.yb(1),l.dc("formGroup",e.storyForm),l.yb(4),l.dc("value",e.edit&&e.editStory?e.editStory.title:""),l.yb(1),l.dc("ngIf",e.title.invalid&&(e.title.dirty||e.title.touched)),l.yb(4),l.dc("value",e.edit&&e.editStory?e.editStory.description:""),l.yb(1),l.dc("ngIf",e.description.invalid&&(e.description.dirty||e.description.touched)),l.yb(4),l.dc("value",e.edit&&e.editStory?e.editStory.story:""),l.yb(1),l.dc("ngIf",e.story.invalid&&(e.story.dirty||e.story.touched)),l.yb(1),l.dc("disabled",e.title.invalid||e.description.invalid||e.story.invalid))},directives:[s.o,s.I,s.H,s.f,s.c,s.d,s.m,s.n,s.y,s.l,s.g,r.j,s.h,s.e,c.m,c.j,c.e,s.r,s.s,s.q,s.Q,c.i,c.c,s.F,s.i,s.k,s.p,s.E],styles:['@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");#msg[_ngcontent-%COMP%]{font-family:Lobster,cursive}*[_ngcontent-%COMP%]{color:#fff}']}),h)}],N=((v=function e(){t(this,e)}).\u0275mod=l.Hb({type:v}),v.\u0275inj=l.Gb({factory:function(t){return new(t||v)},imports:[[a.j.forChild(O)],a.j]}),v),S=((p=function e(){t(this,e)}).\u0275mod=l.Hb({type:p}),p.\u0275inj=l.Gb({factory:function(t){return new(t||p)},imports:[[r.c,c.f,s.J,c.k,N]]}),p)}}])}();