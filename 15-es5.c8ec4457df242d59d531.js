!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{SwR0:function(e,i,o){"use strict";o.r(i),o.d(i,"FeedPageModule",(function(){return L}));var r=o("ofXK"),b=o("3Pt+"),c=o("TEn/"),s=o("tyNb"),a=o("fXoL"),l=o("JZ6Q"),u=o("lGQG"),f=function(n){return["","story-detail",n]};function O(n,t){if(1&n&&(a.Ob(0,"ion-item",13),a.Ob(1,"ion-thumbnail",14),a.Kb(2,"img",15),a.Nb(),a.Ob(3,"ion-text"),a.Ob(4,"h3"),a.nc(5),a.Nb(),a.Ob(6,"p"),a.nc(7),a.Nb(),a.Nb(),a.Nb()),2&n){var e=t.$implicit;a.dc("routerLink",a.fc(4,f,e.id)),a.yb(2),a.dc("src",e.imageUrl,a.jc),a.yb(3),a.oc(e.title),a.yb(2),a.oc(e.description)}}function g(n,t){if(1&n&&(a.Ob(0,"ion-col",9),a.Ob(1,"ion-text",10),a.Ob(2,"h1",11),a.nc(3,"Recent Stories"),a.Nb(),a.Nb(),a.lc(4,O,8,6,"ion-item",12),a.Nb()),2&n){var e=t.$implicit;a.yb(4),a.dc("ngForOf",e)}}function d(n,t){1&n&&(a.Ob(0,"ion-item"),a.Ob(1,"ion-thumbnail"),a.Kb(2,"ion-skeleton-text",17),a.Nb(),a.Ob(3,"ion-text",18),a.Ob(4,"h3"),a.Kb(5,"ion-skeleton-text",19),a.Nb(),a.Ob(6,"p"),a.Kb(7,"ion-skeleton-text",19),a.Nb(),a.Nb(),a.Nb())}var m=function(){return[1,2]};function N(n,t){1&n&&(a.Ob(0,"ion-col",9),a.lc(1,d,8,0,"ion-item",16),a.Nb()),2&n&&(a.yb(1),a.dc("ngForOf",a.ec(1,m)))}function h(n,t){if(1&n&&(a.Ob(0,"ion-item",13),a.Ob(1,"ion-thumbnail",14),a.Kb(2,"img",15),a.Nb(),a.Ob(3,"ion-text"),a.Ob(4,"h3"),a.nc(5),a.Nb(),a.Ob(6,"p"),a.nc(7),a.Nb(),a.Nb(),a.Nb()),2&n){var e=t.$implicit;a.dc("routerLink",a.fc(4,f,e.id)),a.yb(2),a.dc("src",e.imageUrl,a.jc),a.yb(3),a.oc(e.title),a.yb(2),a.oc(e.description)}}var p,y,v,k=function(){return["/","feed"]},C=function(){return["/","profile"]},P=function(){return["/","favourites"]},M=function(){return["/","add-story"]},w=[{path:"",component:(p=function(){function e(t,i,o){n(this,e),this.storyService=t,this.authService=i,this.router=o,this.slideOpts={initialSlide:0,speed:200,autoplay:!0}}var i,o,r;return i=e,(o=[{key:"ngOnInit",value:function(){this.stories$=this.storyService.getAllStories(),this.recentStories$=this.storyService.getRecentStories()}},{key:"signout",value:function(){var n=this;this.authService.signout().then((function(){n.router.navigate(["","auth-page"])}))}}])&&t(i.prototype,o),r&&t(i,r),e}(),p.\u0275fac=function(n){return new(n||p)(a.Jb(l.a),a.Jb(u.a),a.Jb(s.g))},p.\u0275cmp=a.Db({type:p,selectors:[["app-feed"]],decls:47,vars:15,consts:[["side","start","menuId","first","contentId","main",1,"menuClass"],[1,"menuTitle"],["detail","",3,"routerLink"],["button","",3,"click"],["slot","start"],["menu","first"],["id","main"],["size-md","8","offset-md","2",4,"ngIf","ngIfElse"],["slideLoading",""],["size-md","8","offset-md","2"],[1,"ion-text-center","header"],["id","heading"],["routerLinkActive","router-link-active","detail","",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","router-link-active","detail","",3,"routerLink"],[1,"ion-margin-end"],[3,"src"],[4,"ngFor","ngForOf"],["animated",""],[1,"ion-margin",2,"width","100%"],["animated","",2,"width","100%"]],template:function(n,t){if(1&n&&(a.Ob(0,"ion-menu",0),a.Ob(1,"ion-header"),a.Ob(2,"ion-toolbar"),a.Ob(3,"ion-title",1),a.nc(4,"StoryBooks"),a.Nb(),a.Nb(),a.Nb(),a.Ob(5,"ion-content"),a.Ob(6,"ion-list"),a.Ob(7,"ion-menu-toggle"),a.Ob(8,"ion-item",2),a.Ob(9,"ion-label"),a.nc(10,"Home"),a.Nb(),a.Nb(),a.Nb(),a.Ob(11,"ion-menu-toggle"),a.Ob(12,"ion-item",2),a.Ob(13,"ion-label"),a.nc(14,"Profile"),a.Nb(),a.Nb(),a.Nb(),a.Ob(15,"ion-menu-toggle"),a.Ob(16,"ion-item",2),a.Ob(17,"ion-label"),a.nc(18,"Liked Stories"),a.Nb(),a.Nb(),a.Nb(),a.Ob(19,"ion-menu-toggle"),a.Ob(20,"ion-item",2),a.Ob(21,"ion-label"),a.nc(22,"Write a Story"),a.Nb(),a.Nb(),a.Nb(),a.Ob(23,"ion-menu-toggle"),a.Ob(24,"ion-item",3),a.Wb("click",(function(){return t.signout()})),a.Ob(25,"ion-label"),a.nc(26,"Logout"),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Nb(),a.Ob(27,"ion-header"),a.Ob(28,"ion-toolbar"),a.Ob(29,"ion-title"),a.nc(30,"StoryBooks"),a.Nb(),a.Ob(31,"ion-buttons",4),a.Kb(32,"ion-menu-button",5),a.Nb(),a.Nb(),a.Nb(),a.Ob(33,"ion-content",6),a.Ob(34,"ion-grid"),a.Ob(35,"ion-row"),a.lc(36,g,5,1,"ion-col",7),a.Zb(37,"async"),a.lc(38,N,2,2,"ng-template",null,8,a.mc),a.Nb(),a.Ob(40,"ion-row"),a.Ob(41,"ion-col",9),a.Ob(42,"ion-text",10),a.Ob(43,"h1",11),a.nc(44,"Featured Stories"),a.Nb(),a.Nb(),a.lc(45,h,8,6,"ion-item",12),a.Zb(46,"async"),a.Nb(),a.Nb(),a.Nb(),a.Nb()),2&n){var e=a.hc(39);a.yb(8),a.dc("routerLink",a.ec(11,k)),a.yb(4),a.dc("routerLink",a.ec(12,C)),a.yb(4),a.dc("routerLink",a.ec(13,P)),a.yb(4),a.dc("routerLink",a.ec(14,M)),a.yb(16),a.dc("ngIf",a.ac(37,7,t.recentStories$))("ngIfElse",e),a.yb(9),a.dc("ngForOf",a.ac(46,9,t.stories$))}},directives:[c.u,c.o,c.G,c.F,c.m,c.t,c.w,c.r,c.M,s.h,c.s,c.f,c.v,c.n,c.y,r.j,c.l,c.C,r.i,s.i,c.E,c.B],pipes:[r.b],styles:['@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");*[_ngcontent-%COMP%]{color:#fff}#heading[_ngcontent-%COMP%], .menuTitle[_ngcontent-%COMP%]{font-family:Lobster,cursive;font-size:1.5rem}ion-menu[_ngcontent-%COMP%]{--background:#26001b}.header[_ngcontent-%COMP%], ion-menu[_ngcontent-%COMP%], ion-menu-toggle[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], ion-menu-toggle[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:hover{color:#fff}.header[_ngcontent-%COMP%]{font-size:1.5rem}ion-icon[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:#fff}ion-slide[_ngcontent-%COMP%]{height:300px;width:100%;border-radius:10px;position:relative}ion-slide[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{position:absolute;top:42%;left:34%;text-align:center;max-width:200px}ion-slide[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0}']}),p)}],_=((v=function t(){n(this,t)}).\u0275mod=a.Hb({type:v}),v.\u0275inj=a.Gb({factory:function(n){return new(n||v)},imports:[[s.j.forChild(w)],s.j]}),v),L=((y=function t(){n(this,t)}).\u0275mod=a.Hb({type:y}),y.\u0275inj=a.Gb({factory:function(n){return new(n||y)},imports:[[r.c,b.f,c.H,_]]}),y)}}])}();