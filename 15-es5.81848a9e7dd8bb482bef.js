!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var e=t[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{SwR0:function(o,e,i){"use strict";i.r(e),i.d(e,"FeedPageModule",(function(){return C}));var r=i("ofXK"),b=i("3Pt+"),c=i("TEn/"),s=i("tyNb"),u=i("fXoL"),a=i("JZ6Q"),l=i("lGQG"),f=function(n){return["","story-detail",n]};function O(n,t){if(1&n&&(u.Ob(0,"ion-item",12),u.Ob(1,"ion-thumbnail",13),u.Kb(2,"img",14),u.Nb(),u.Ob(3,"ion-text"),u.Ob(4,"h3"),u.nc(5),u.Nb(),u.Ob(6,"p"),u.nc(7),u.Nb(),u.Nb(),u.Nb()),2&n){var o=t.$implicit;u.dc("routerLink",u.fc(4,f,o.id)),u.yb(2),u.dc("src",o.imageUrl,u.jc),u.yb(3),u.oc(o.title),u.yb(2),u.oc(o.description)}}var d,g,m,p=function(){return["/","feed"]},N=function(){return["/","profile"]},h=function(){return["/","favourites"]},y=function(){return["/","add-story"]},v=[{path:"",component:(d=function(){function o(t,e,i){n(this,o),this.storyService=t,this.authService=e,this.router=i,this.slideOpts={initialSlide:1,speed:200,autoplay:!0}}var e,i,r;return e=o,(i=[{key:"ngOnInit",value:function(){this.stories$=this.storyService.getAllStories()}},{key:"signout",value:function(){var n=this;this.authService.signout().then((function(){n.router.navigate(["","auth-page"])}))}}])&&t(e.prototype,i),r&&t(e,r),o}(),d.\u0275fac=function(n){return new(n||d)(u.Jb(a.a),u.Jb(l.a),u.Jb(s.g))},d.\u0275cmp=u.Db({type:d,selectors:[["app-feed"]],decls:51,vars:12,consts:[["side","start","menuId","first","contentId","main",1,"menuClass"],[1,"menuTitle"],["detail","",3,"routerLink"],["button","",3,"click"],["slot","start"],["menu","first"],["id","main"],["size-md","8","offset-md","2"],["mode","ios","pager","ios","scrollbar","ios",3,"options"],[1,"ion-text-center","header"],["id","heading"],["routerLinkActive","router-link-active","detail","",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","router-link-active","detail","",3,"routerLink"],[1,"ion-margin-end"],[3,"src"]],template:function(n,t){1&n&&(u.Ob(0,"ion-menu",0),u.Ob(1,"ion-header"),u.Ob(2,"ion-toolbar"),u.Ob(3,"ion-title",1),u.nc(4,"StoryBooks"),u.Nb(),u.Nb(),u.Nb(),u.Ob(5,"ion-content"),u.Ob(6,"ion-list"),u.Ob(7,"ion-menu-toggle"),u.Ob(8,"ion-item",2),u.Ob(9,"ion-label"),u.nc(10,"Home"),u.Nb(),u.Nb(),u.Nb(),u.Ob(11,"ion-menu-toggle"),u.Ob(12,"ion-item",2),u.Ob(13,"ion-label"),u.nc(14,"Profile"),u.Nb(),u.Nb(),u.Nb(),u.Ob(15,"ion-menu-toggle"),u.Ob(16,"ion-item",2),u.Ob(17,"ion-label"),u.nc(18,"Liked Stories"),u.Nb(),u.Nb(),u.Nb(),u.Ob(19,"ion-menu-toggle"),u.Ob(20,"ion-item",2),u.Ob(21,"ion-label"),u.nc(22,"Write a Story"),u.Nb(),u.Nb(),u.Nb(),u.Ob(23,"ion-menu-toggle"),u.Ob(24,"ion-item",3),u.Wb("click",(function(){return t.signout()})),u.Ob(25,"ion-label"),u.nc(26,"Logout"),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Ob(27,"ion-header"),u.Ob(28,"ion-toolbar"),u.Ob(29,"ion-title"),u.nc(30,"StoryBooks"),u.Nb(),u.Ob(31,"ion-buttons",4),u.Kb(32,"ion-menu-button",5),u.Nb(),u.Nb(),u.Nb(),u.Ob(33,"ion-content",6),u.Ob(34,"ion-grid"),u.Ob(35,"ion-row"),u.Ob(36,"ion-col",7),u.Ob(37,"ion-slides",8),u.Ob(38,"ion-slide"),u.Ob(39,"h1"),u.nc(40,"Story 1"),u.Nb(),u.Nb(),u.Ob(41,"ion-slide"),u.Ob(42,"h1"),u.nc(43,"Story 2"),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Nb(),u.Ob(44,"ion-row"),u.Ob(45,"ion-col",7),u.Ob(46,"ion-text",9),u.Ob(47,"h1",10),u.nc(48,"Featured Stories"),u.Nb(),u.Nb(),u.lc(49,O,8,6,"ion-item",11),u.Zb(50,"async"),u.Nb(),u.Nb(),u.Nb(),u.Nb()),2&n&&(u.yb(8),u.dc("routerLink",u.ec(8,p)),u.yb(4),u.dc("routerLink",u.ec(9,N)),u.yb(4),u.dc("routerLink",u.ec(10,h)),u.yb(4),u.dc("routerLink",u.ec(11,y)),u.yb(17),u.dc("options",t.slideOpts),u.yb(12),u.dc("ngForOf",u.ac(50,6,t.stories$)))},directives:[c.u,c.o,c.I,c.H,c.m,c.t,c.w,c.r,c.O,s.h,c.s,c.f,c.v,c.n,c.y,c.l,c.D,c.C,c.E,r.i,s.i,c.G],pipes:[r.b],styles:['@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");*[_ngcontent-%COMP%]{color:#fff}#heading[_ngcontent-%COMP%], .menuTitle[_ngcontent-%COMP%]{font-family:Lobster,cursive;font-size:1.5rem}ion-menu[_ngcontent-%COMP%]{--background:#26001b}.header[_ngcontent-%COMP%], ion-menu[_ngcontent-%COMP%], ion-menu-toggle[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], ion-menu-toggle[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:hover{color:#fff}.header[_ngcontent-%COMP%]{font-size:1.5rem}ion-icon[_ngcontent-%COMP%], ion-item[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{color:#fff}ion-slide[_ngcontent-%COMP%]{height:300px;width:100%;background:url(https://picsum.photos/200) no-repeat 50%/cover;border-radius:10px}']}),d)}],k=((m=function t(){n(this,t)}).\u0275mod=u.Hb({type:m}),m.\u0275inj=u.Gb({factory:function(n){return new(n||m)},imports:[[s.j.forChild(v)],s.j]}),m),C=((g=function t(){n(this,t)}).\u0275mod=u.Hb({type:g}),g.\u0275inj=u.Gb({factory:function(n){return new(n||g)},imports:[[r.c,b.f,c.J,k]]}),g)}}])}();