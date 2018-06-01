webpackJsonp([1],{EWZU:function(t,e){},FnL2:function(t,e){},H7rN:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("nav",{staticClass:"navbar navbar-light top-header"},[i("div",[i("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[i("a",[t._v("Home")])])],1),t._v(" "),t.user._id?t._e():i("a",{staticClass:"navbar-brand",on:{click:t.login}},[t._v("Sign up/Login")]),t._v(" "),t.user._id?i("div",{staticClass:"d-flex flex-column"},[i("a",{staticClass:"navbar-brand"},[t._v("User: "+t._s(t.user.displayName))]),t._v(" "),i("a",{staticClass:"navbar-brand",on:{click:t.signOut}},[t._v("Sign out")])]):t._e()]),t._v(" "),i("router-view")],1)},staticRenderFns:[]};var n=i("VU/8")({name:"App",computed:{user:function(){return this.$store.state.user}},methods:{login:function(){this.$router.push({name:"User"})},signOut:function(){this.$store.dispatch("signOut")}}},a,!1,function(t){i("H7rN")},null,null).exports,o=i("/ocq"),r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"user"},[t.showLogin?i("div",{staticClass:"login"},[i("h1",[t._v("Login")]),t._v(" "),i("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"input",attrs:{type:"email",name:"email",placeholder:" email",id:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input",attrs:{type:"text",name:"email",placeholder:" password",id:"name"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"submit"}},[t._v("Login")])]),t._v(" "),i("p",{staticClass:"user"},[t._v("Not a user ?\n      "),i("em",{on:{click:t.toggle}},[t._v("Register")])])]):t._e(),t._v(" "),t.showLogin?t._e():i("div",{staticClass:"register"},[i("h1",[t._v("Register")]),t._v(" "),i("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"input",attrs:{type:"email",name:"email",placeholder:" email",id:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.displayName,expression:"user.displayName"}],staticClass:"input",attrs:{type:"text",name:"name",placeholder:" Name",id:"name"},domProps:{value:t.user.displayName},on:{input:function(e){e.target.composing||t.$set(t.user,"displayName",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"input",attrs:{type:"text",name:"email",placeholder:" password",id:"name"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"submit"}},[t._v("Register")])]),t._v(" "),i("p",[t._v("Already a user?\n      "),i("em",{on:{click:t.toggle}},[t._v("Login")])])])])},staticRenderFns:[]};var d=i("VU/8")({name:"",mounted:function(){this.$store.dispatch("authenticate")},data:function(){return{user:{email:"",displayName:"",password:""},showLogin:!0}},computed:{},methods:{login:function(){this.$store.dispatch("login",this.user)},register:function(){this.$store.dispatch("register",this.user)},toggle:function(){this.showLogin=!this.showLogin}}},r,!1,function(t){i("Um7D")},null,null).exports,c={name:"Board",props:{board:{type:Object,required:!0}},data:function(){return{editBoard:!1,edit:{title:"",description:"",_id:""}}},computed:{},methods:{removeBoard:function(t){this.$store.dispatch("deleteBoard",t)},toggleEdit:function(t){this.edit.title=t.title,this.edit.description=t.description,this.edit._id=t._id,this.editBoard=!this.editBoard},changeBoard:function(){this.$store.dispatch("editBoard",this.edit),this.edit=!this.edit}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("router-link",{attrs:{to:{name:"Lists",params:{id:t.board._id}}}},[i("h2",[t._v(t._s(t.board.title))]),t._v(" "),i("h4",[t._v("description: "+t._s(t.board.description))]),t._v(" "),i("h5",[t._v("lists: "+t._s(t.board.lists.length))]),t._v(" "),i("h6",[t._v("author: "+t._s(t.board.author))])]),t._v(" "),i("button",{on:{click:function(e){t.removeBoard(t.board._id)}}},[t._v("Detlz itz")]),t._v(" "),i("button",{on:{click:function(e){t.toggleEdit(t.board)}}},[t._v("edit")]),t._v(" "),t.editBoard?i("form",{on:{submit:function(e){return e.preventDefault(),t.changeBoard(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.title,expression:"edit.title"}],attrs:{type:"text"},domProps:{value:t.edit.title},on:{input:function(e){e.target.composing||t.$set(t.edit,"title",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.description,expression:"edit.description"}],attrs:{type:"text"},domProps:{value:t.edit.description},on:{input:function(e){e.target.composing||t.$set(t.edit,"description",e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"submit"}},[t._v("Submit")])]):t._e()],1)},staticRenderFns:[]};var l={name:"Boards",components:{board:i("VU/8")(c,u,!1,function(t){i("EWZU")},null,null).exports},mounted:function(){this.$store.dispatch("getBoards")},data:function(){return{toggleBoard:!1,board:{title:"",description:""}}},computed:{boards:function(){return this.$store.state.boards}},methods:{toggleAdd:function(){this.toggleBoard=!this.toggleBoard},addBoard:function(){var t={title:this.board.title,description:this.board.description};this.$store.dispatch("addBoard",t),this.board.title="",this.board.description="",this.toggleBoard=!this.toggleBoard}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"boards"},[i("button",{on:{click:t.toggleAdd}},[t._v("Adz Bordz")]),t._v(" "),t.toggleBoard?i("form",{on:{submit:function(e){return e.preventDefault(),t.addBoard(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.board.title,expression:"board.title"}],attrs:{type:"text"},domProps:{value:t.board.title},on:{input:function(e){e.target.composing||t.$set(t.board,"title",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.board.description,expression:"board.description"}],attrs:{type:"text"},domProps:{value:t.board.description},on:{input:function(e){e.target.composing||t.$set(t.board,"description",e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"submit"}},[t._v("Submit")])]):t._e(),t._v(" "),i("div",{staticClass:"row d-flex justify-content-center"},t._l(t.boards,function(t){return i("div",{key:t._id,staticClass:"col-md-3 col-sm-12 card d-flex justify-content-around board"},[i("board",{attrs:{board:t}})],1)}))])},staticRenderFns:[]};var p={components:{boards:i("VU/8")(l,m,!1,function(t){i("wRRR")},null,null).exports},name:"Home",mounted:function(){this.$store.state.user._id||N.push({name:"User"})},data:function(){return{}},computed:{},methods:{}},v={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("boards")],1)},staticRenderFns:[]};var f=i("VU/8")(p,v,!1,function(t){i("egUP")},null,null).exports,g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"add-list"},[i("button",{on:{click:t.toggleAdd}},[t._v("Add Lists")]),t._v(" "),t.toggleList?i("div",[i("form",{on:{submit:function(e){return e.preventDefault(),t.addList(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.list.title,expression:"list.title"}],attrs:{type:"text"},domProps:{value:t.list.title},on:{input:function(e){e.target.composing||t.$set(t.list,"title",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.list.description,expression:"list.description"}],attrs:{type:"text"},domProps:{value:t.list.description},on:{input:function(e){e.target.composing||t.$set(t.list,"description",e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"submit"}},[t._v("Submit")])])]):t._e()])},staticRenderFns:[]};var h=i("VU/8")({name:"AddList",data:function(){return{toggleList:!1,list:{title:"",description:""}}},computed:{},methods:{toggleAdd:function(){this.toggleList=!this.toggleList},addList:function(){this.$store.dispatch("addList",this.list)}}},g,!1,function(t){i("FnL2")},null,null).exports,_=i("DAYN"),b=i.n(_),k={name:"Tasks",props:{task:{type:Object,required:!0}},data:function(){return{editToggle:!1,edit:{description:"",comment:"",listId:"",_id:""}}},computed:{tasks:function(){return this.$store.state.activeList.tasks}},methods:{removeTask:function(t){this.$store.dispatch("deleteTask",t)},toggleEdit:function(t){this.edit.description=t.description,this.edit.comment=t.comment,this.edit._id=t._id,this.edit.listId=t.listId,this.editToggle=!this.editToggle},editTask:function(){this.$store.dispatch("editTask",this.edit),this.editToggle=!this.editToggle}}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tasks"},[i("p",[t._v(t._s(t.task.description))]),t._v(" "),i("p",[t._v(t._s(t.task.comment))]),t._v(" "),i("button",{on:{click:function(e){t.removeTask(t.task)}}},[t._v("Iz completez")]),t._v(" "),i("button",{on:{click:function(e){t.toggleEdit(t.task)}}},[t._v("edit")]),t._v(" "),t.editToggle?i("form",{on:{submit:function(e){return e.preventDefault(),t.editTask(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.description,expression:"edit.description"}],attrs:{type:"text"},domProps:{value:t.edit.description},on:{input:function(e){e.target.composing||t.$set(t.edit,"description",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.comment,expression:"edit.comment"}],attrs:{type:"text"},domProps:{value:t.edit.comment},on:{input:function(e){e.target.composing||t.$set(t.edit,"comment",e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"submit"}},[t._v("submit")])]):t._e()])},staticRenderFns:[]};var x=i("VU/8")(k,B,!1,function(t){i("lkRb")},null,null).exports,w={name:"List",components:{tasks:x,draggable:b.a},props:{list:{type:Object,required:!0},index:{type:Number,required:!0}},data:function(){return{toggleTask:!1,editToggle:!1,task:{comment:"",description:""},edit:{title:"",description:"",_id:""},draggedTask:""}},computed:{lists:function(){return this.$store.state.activeBoard.lists},activeBoard:function(){return this.$store.state.activeBoard},tasks:{get:function(){return this.$store.state.activeBoard.lists[this.index].tasks},set:function(){}}},methods:{taskToggle:function(){this.toggleTask=!this.toggleTask},addTask:function(t){this.task.listId=t;var e={comment:this.task.comment,description:this.task.description,listId:t};this.$store.dispatch("addTask",e),this.task.description="",this.task.comment="",this.task.listId="",this.toggleTask=!this.toggleTask},removeList:function(t){this.$store.dispatch("deleteList",t)},toggleEdit:function(t){this.edit.title=t.title,this.edit.description=t.description,this.edit._id=t._id,this.editToggle=!this.editToggle},editList:function(){this.$store.dispatch("editList",this.edit),this.editToggle=!this.editToggle},onMove:function(t,e){this.draggedTask||(this.draggedTask=t.draggedContext.element)},onEnd:function(){}}},$={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h2",[t._v(t._s(t.list.title))]),t._v(" "),i("h4",[t._v("description: "+t._s(t.list.description))]),t._v(" "),i("h6",[t._v("author: "+t._s(t.list.author))]),t._v(" "),i("button",{on:{click:t.taskToggle}},[t._v("Add Task")]),t._v(" "),t.toggleTask?i("form",{on:{submit:function(e){e.preventDefault(),t.addTask(t.list._id)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.task.description,expression:"task.description"}],attrs:{type:"text"},domProps:{value:t.task.description},on:{input:function(e){e.target.composing||t.$set(t.task,"description",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.task.comment,expression:"task.comment"}],attrs:{type:"text"},domProps:{value:t.task.comment},on:{input:function(e){e.target.composing||t.$set(t.task,"comment",e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"submit"}},[t._v("submit")])]):t._e(),t._v(" "),i("h5",[t._v("Tasks")]),t._v(" "),i("draggable",{attrs:{move:t.onMove}},t._l(t.tasks,function(t){return i("div",[i("tasks",{attrs:{task:t}})],1)})),t._v(" "),i("button",{on:{click:function(e){t.removeList(t.list._id)}}},[t._v("All donez")]),t._v(" "),i("button",{on:{click:function(e){t.toggleEdit(t.list)}}},[t._v("edit")]),t._v(" "),t.editToggle?i("form",{on:{submit:function(e){return e.preventDefault(),t.editList(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.title,expression:"edit.title"}],attrs:{type:"text"},domProps:{value:t.edit.title},on:{input:function(e){e.target.composing||t.$set(t.edit,"title",e.target.value)}}}),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.description,expression:"edit.description"}],attrs:{type:"text"},domProps:{value:t.edit.description},on:{input:function(e){e.target.composing||t.$set(t.edit,"description",e.target.value)}}}),t._v(" "),i("button",{attrs:{type:"submit"}},[t._v("submit")])]):t._e()],1)},staticRenderFns:[]};var y={name:"Lists",components:{addList:h,list:i("VU/8")(w,$,!1,function(t){i("ynjU")},null,null).exports,draggable:b.a},mounted:function(){this.$store.dispatch("selectBoard",this.$route.params.id)},data:function(){return{}},computed:{activeBoard:function(){return this.$store.state.activeBoard},lists:{get:function(){return this.$store.state.activeBoard.lists},set:function(t){this.editBoard(t)}}},methods:{editBoard:function(t){this.activeBoard.lists=t;var e=this.activeBoard;this.$store.dispatch("editBoard",e)}}},T={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lists"},[t.activeBoard._id?i("h2",[t._v(t._s(t.activeBoard.title))]):t._e(),t._v(" "),i("addList"),t._v(" "),i("div",{staticClass:"row d-flex justify-content-center"},[i("draggable",{staticClass:"d-flex flex-row",model:{value:t.lists,callback:function(e){t.lists=e},expression:"lists"}},t._l(t.lists,function(e,s){return t.activeBoard._id?i("div",{key:e._id,staticClass:"col-md-4 d-flex justify-content-around card list"},[i("list",{attrs:{list:e,index:s}})],1):t._e()}))],1)],1)},staticRenderFns:[]};var L=i("VU/8")(y,T,!1,function(t){i("seaw")},null,null).exports;s.a.use(o.a);var N=new o.a({routes:[{path:"/",name:"Home",component:f},{path:"/login",name:"User",component:d},{path:"/board/:id",name:"Lists",component:L},{path:"/list/:listId",name:"Tasks",component:x}]}),U=i("NYxO"),C=i("mtWM"),I=i.n(C),R=!window.location.host.includes("localhost")?"//kanban-ramsey-maddy.herokuapp.com/":"//localhost:3000/";s.a.use(U.a);var P=I.a.create({baseURL:R,timeout:3e3,withCredentials:!0}),A=new U.a.Store({state:{user:{},boards:[],activeBoard:{}},mutations:{setUser:function(t,e){t.user=e},setBoards:function(t,e){var i=e.sort(function(t,e){return e.created-t.created});t.boards=i},setActiveBoard:function(t,e){t.activeBoard=e},setBoard:function(t,e){t.boards.unshift(e)},updateBoards:function(t,e){var i=t.boards.findIndex(function(t){return t._id==e});t.boards.splice(i,1)},updateLists:function(t,e){var i=t.activeBoard.lists.findIndex(function(t){return t._id==e});t.activeBoard.lists.splice(i,1)},updateTasks:function(t,e){var i=t.activeBoard.lists.findIndex(function(t){return t._id==e.listId}),s=t.activeBoard.lists[i].tasks.findIndex(function(t){return t._id==t._id});t.activeBoard.lists[i].tasks.splice(s,1)}},actions:{login:function(t,e){t.dispatch;var i=t.commit;P.post("/login",e).then(function(t){N.push("/"),i("setUser",t)}).catch(function(t){console.log(t.data)})},register:function(t,e){t.dispatch;var i=t.commit;P.post("/register",e).then(function(t){N.push("/"),i("setUser",t)}).catch(function(t){console.log(t.data)})},authenticate:function(t){var e=t.commit;t.dispatch;P.get("/authenticate").then(function(t){e("setUser",t.data.data),N.push("/")}).catch(function(t){console.log(t.data)})},getBoards:function(t){var e=t.commit;t.dispatch;P.get("/boards").then(function(t){e("setBoards",t.data)}).catch(function(t){console.log(t.data)})},selectBoard:function(t,e){var i=t.commit,s=(t.dispatch,t.state),a=s.boards.findIndex(function(t){return t._id==e});i("setActiveBoard",s.boards[a])},selectList:function(t,e){var i=t.commit,s=(t.dispatch,t.state),a=s.activeBoard.lists.findIndex(function(t){return t._id==e});i("setActiveList",s.activeBoard.lists[a])},signOut:function(t){var e=t.commit;t.dispatch,t.state;P.delete("/logout").then(function(t){e("setUser",{}),N.push({name:"User"})}).catch(function(t){console.log(t.data)})},addBoard:function(t,e){t.dispatch;var i=t.commit,s=t.state;e.author=s.user.displayName;var a=new Date;e.created=a.getTime(),P.post("/board",e).then(function(t){i("setBoard",t.data)}).catch(function(t){console.log(t)})},addTask:function(t,e){t.dispatch;var i=t.commit,s=t.state;e.author=s.user.displayName;var a=new Date;e.created=a.getTime(),P.put("/board/"+s.activeBoard._id+"/list/"+e.listId+"/task/",e).then(function(t){i("setActiveBoard",t.data)}).catch(function(t){console.log(t)})},addList:function(t,e){t.dispatch;var i=t.commit,s=t.state;e.author=s.user.displayName;var a=new Date;e.created=a.getTime(),P.put("/board/"+s.activeBoard._id+"/list/",e).then(function(t){i("setActiveBoard",t.data)}).catch(function(t){console.log(t)})},deleteBoard:function(t,e){t.dispatch;var i=t.commit;P.delete("/board/"+e).then(function(t){i("updateBoards",e)}).catch(function(t){console.log(t)})},deleteList:function(t,e){t.dispatch;var i=t.commit,s=t.state;P.delete("/board/"+s.activeBoard._id+"/list/"+e).then(function(t){i("updateLists",e)}).catch(function(t){console.log(t)})},deleteTask:function(t,e){t.dispatch;var i=t.commit,s=t.state;P.delete("/board/"+s.activeBoard._id+"/list/"+e.listId+"/task/"+e._id).then(function(t){i("updateTasks",e)}).catch(function(t){console.log(t)})},editBoard:function(t,e){t.dispatch;var i=t.commit,s=t.state,a=s.boards.findIndex(function(t){return t._id==e._id});s.boards.splice(a,1),P.put("/board/"+e._id,e).then(function(t){i("setBoard",t.data)}).catch(function(t){console.log(t)})},editList:function(t,e){var i=t.dispatch,s=(t.commit,t.state),a=s.activeBoard.lists.findIndex(function(t){return t._id==e._id});e.tasks=s.activeBoard.lists[a].tasks,s.activeBoard.lists.splice(a,1),e.author=s.user.displayName;var n=new Date;e.created=n.getTime(),s.activeBoard.lists.unshift(e),i("editBoard",s.activeBoard)},editTask:function(t,e){var i=t.dispatch,s=(t.commit,t.state),a=s.activeBoard.lists.findIndex(function(t){return t._id==e.listId}),n=s.activeBoard.lists[a].tasks.findIndex(function(t){return t._id==e._id});s.activeBoard.lists[a].tasks.splice(n,1),e.author=s.user.displayName;var o=new Date;e.created=o.getTime(),s.activeBoard.lists[a].tasks.unshift(e),i("editBoard",s.activeBoard)}}});s.a.config.productionTip=!1,new s.a({el:"#app",router:N,store:A,components:{App:n},template:"<App/>"})},Um7D:function(t,e){},egUP:function(t,e){},lkRb:function(t,e){},seaw:function(t,e){},wRRR:function(t,e){},ynjU:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.09eaf5ae173dfb96e784.js.map