"use strict";(self["webpackChunktsibvue"]=self["webpackChunktsibvue"]||[]).push([[1],{1326:function(t,e,o){o.r(e),o.d(e,{default:function(){return D}});var n=o(3396),l=o(7139),a=o(9242);const i=t=>((0,n.dD)("data-v-780a9c2a"),t=t(),(0,n.Cn)(),t),s={class:"goBackButtonDiv"},c={class:"row row-cols-2"},r={class:"col",style:{"background-color":"ghostwhite","min-height":"150px",padding:"0"}},u=i((()=>(0,n._)("p",{style:{margin:"2% 0 2% 0"}},"(임시) 미리보기 구역",-1))),d={class:"col-10",id:"preview-title",style:{"background-color":"#ece1be",margin:"auto"}},m={class:"col-10",id:"preview-media",style:{"background-color":"beige",margin:"auto"}},p={class:"col-10",id:"preview-tag",style:{"background-color":"lightyellow",margin:"auto"}},g={class:"col-10",id:"preview-content",style:{"background-color":"lemonchiffon",margin:"auto"}},h={class:"col",style:{"background-color":"whitesmoke",padding:"0"}},f=i((()=>(0,n._)("p",{style:{margin:"2% 0 2% 0"}},"(임시) 글쓰기 구역",-1))),v={style:{margin:"0 10% 0 10%"}},b={class:"form-floating mb-3"},y=i((()=>(0,n._)("label",null,"제목",-1))),_={class:"mb-3"},w={class:"form-floating mb-3"},k=i((()=>(0,n._)("label",null,"태그",-1))),B={class:"form-floating mb-3"},C=i((()=>(0,n._)("label",null,"내용",-1)));function P(t,e,o,i,P,N){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",s,[(0,n._)("button",{type:"button",onClick:e[0]||(e[0]=(...e)=>t.goBack&&t.goBack(...e)),class:"btn btn-outline-primary",id:"goBackButton"},"나가기")]),(0,n._)("div",c,[(0,n._)("div",r,[u,(0,n._)("div",d,(0,l.zw)(t.title),1),(0,n._)("div",m,(0,l.zw)(t.media),1),(0,n._)("div",p,(0,l.zw)(t.tag),1),(0,n._)("div",g,(0,l.zw)(t.content),1)]),(0,n._)("div",h,[f,(0,n._)("form",v,[(0,n._)("div",b,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",placeholder:"","onUpdate:modelValue":e[1]||(e[1]=e=>t.title=e)},null,512),[[a.nr,t.title]]),y]),(0,n._)("div",_,[(0,n._)("input",{class:"form-control form-control-sm",id:"formFileSm",type:"file",onChange:e[2]||(e[2]=e=>t.inputMedia()),multiple:"multiple",ref:"medias"},null,544)]),(0,n._)("div",w,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",placeholder:"","onUpdate:modelValue":e[3]||(e[3]=e=>t.tag=e)},null,512),[[a.nr,t.tag]]),k]),(0,n._)("div",B,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",placeholder:"","onUpdate:modelValue":e[4]||(e[4]=e=>t.content=e)},null,512),[[a.nr,t.content]]),C]),(0,n._)("button",{type:"button",onClick:e[5]||(e[5]=(...e)=>t.savePostTmp&&t.savePostTmp(...e)),class:"btn btn-outline-secondary",id:"tmpSaveButton"},"임시저장하기"),(0,n._)("button",{type:"button",onClick:e[6]||(e[6]=(...e)=>t.savePost&&t.savePost(...e)),class:"btn btn-outline-primary",id:"saveButton"},"저장하기")])])])],64)}o(7658);var N={name:"PostPage",components:{},data(){return{title:"",media:"",tag:"",content:""}},mounted(){this.hideNavi()},watch:{$route(t){console.log(t)}},beforeRouteLeave(t,e,o){confirm("게시물이 저장되지 않았습니다. 나가시겠습니까?")?(this.showNavi(),o()):o(!1)},methods:{hideNavi:function(){document.getElementsByClassName("header-container")[0].style.display="none"},showNavi:function(){document.getElementsByClassName("header-container")[0].style.display=""},goBack:function(t){t&&this.$router.push("/")},inputMedia:function(){let t=this.$refs.medias.files,e=Object.keys(t);e.forEach((function(e){console.log("↓↓ 테스트 중 입니다. "+(Number(e)+1)+"번 째 파일 정보 ↓↓"),console.log(t[e])}))},savePost:function(t){if(t){let t={title:this.title,media:this.media,tag:this.tag,content:this.content};this.$axios({url:"/board",method:"post",params:t}).then((function(t){alert("success"),t&&console.log(t)})).catch((function(t){alert("fail"),t&&console.log(t)}))}},savePostTmp:function(t){if(t){let t={title:this.title,media:this.media,tag:this.tag,content:this.content};this.$axios({url:"/board/tmp",method:"post",params:t}).then((function(t){alert("success"),t&&console.log(t)})).catch((function(t){alert("fail"),t&&console.log(t)}))}}}},x=N,$=o(89);const z=(0,$.Z)(x,[["render",P],["__scopeId","data-v-780a9c2a"]]);var D=z}}]);
//# sourceMappingURL=post.45143014.js.map