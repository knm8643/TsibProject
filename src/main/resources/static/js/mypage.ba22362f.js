"use strict";(self["webpackChunktsibvue"]=self["webpackChunktsibvue"]||[]).push([[496],{707:function(e,l,r){r.r(l),r.d(l,{default:function(){return I}});var n=r(3396),a=r(6957);const s={class:"user-img-wrapper"},u={class:"img-container"},t=["src"],i={key:1,src:a,alt:"Default Image"},g=(0,n._)("label",{for:"user-img-upload",class:"upload-btn"}," Upload ",-1),d=(0,n._)("div",null,null,-1),m=(0,n._)("div",null,null,-1);function o(e,l,r,a,o,c){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n._)("div",s,[(0,n._)("div",u,[e.userImgUrl?((0,n.wg)(),(0,n.iD)("img",{key:0,src:e.userImgUrl,alt:"User Image"},null,8,t)):((0,n.wg)(),(0,n.iD)("img",i))]),g,(0,n._)("input",{type:"file",id:"user-img-upload",onChange:l[0]||(l[0]=(...l)=>e.handleUserImgChange&&e.handleUserImgChange(...l))},null,32)]),d,m])}var c={name:"MyPage",data(){return{userImgUrl:"",userImgFile:null}},methods:{handleUserImgChange(e){const l=e.target.files[0];if(!l)return;this.userImgFile=l;const r=new FileReader;r.onload=e=>{this.userImgUrl=e.target.result},r.readAsDataURL(l)}}},f=c,p=r(89);const h=(0,p.Z)(f,[["render",o]]);var I=h},6957:function(e,l,r){e.exports=r.p+"img/example11.770f1ffb.jpg"}}]);
//# sourceMappingURL=mypage.ba22362f.js.map