(this.webpackJsonpscida=this.webpackJsonpscida||[]).push([[0],{16:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),o=n(25),c=n.n(o),r=n(3),d=n(5),l=n(6),m=n(17),u=n(8),j=n(7),p=n(12),h=n(2),b=n(47),g=n(26),O=n(18),k=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).handleInput=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(O.a)({},t,n))},a.setColor=function(e){a.setState({color:e.target.id})},a.updateItem=function(){a.state.text.length>0&&a.props.onUpdateItem(Object(g.a)({},a.state))},a.state={id:"",text:"",number:1,color:"color0"},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.id&&this.setState({id:this.props.id,text:this.props.text,number:this.props.number,color:this.props.color})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("section",{children:[Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("input",{type:"text",name:"text",value:this.state.text,onChange:this.handleInput,className:"text"}),Object(a.jsx)("input",{type:"number",name:"number",min:"1",max:"35",value:this.state.number,onChange:this.handleInput,className:"number"}),Object(a.jsx)("button",{className:"color "+this.state.color}),Object(a.jsx)("button",{onClick:this.props.onCancelUpdate,className:"plus-sign delete",children:"+"})]}),Object(a.jsxs)("div",{className:"edit-box",children:[Object(a.jsx)("div",{className:"palette",children:this.props.colors.map((function(t){return Object(a.jsx)("div",{id:t,className:"palette-square "+t,onClick:e.setColor},t)}))}),Object(a.jsx)("div",{className:"edit-box-buttons",children:Object(a.jsx)("button",{onClick:this.updateItem,className:"edit-complete",children:"\u2713"})})]})]})}}]),n}(i.a.Component),f=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).startEdit=function(){a.setState({editing:!0})},a.cancelEdit=function(){a.setState({editing:!1})},a.editItem=function(e){var t=JSON.parse(localStorage.getItem("items")),n=t.findIndex((function(t){return t.id===e.id}));t[n]=e,localStorage.setItem("items",JSON.stringify(t)),a.props.onEditIteminState(t),a.setState({editing:!1})},a.state={editing:!1},a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{children:this.state.editing?Object(a.jsx)(k,{id:this.props.id,text:this.props.text,number:this.props.number,color:this.props.color,colors:this.props.colors,onUpdateItem:this.editItem,onCancelUpdate:this.cancelEdit}):Object(a.jsxs)("div",{className:"item",children:[Object(a.jsx)("div",{onClick:this.startEdit,className:"text",children:this.props.text}),Object(a.jsx)("button",{onClick:this.startEdit,className:"number",children:this.props.number}),Object(a.jsx)("button",{onClick:this.startEdit,className:"color "+this.props.color}),Object(a.jsx)("button",{value:this.props.id,onClick:this.props.onDeleteItem,className:"plus-sign delete",children:"+"})]})})}}]),n}(i.a.Component),x=(n(33),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).newItem=function(){a.setState({adding:!0})},a.cancelNewItem=function(){a.setState({adding:!1})},a.addItem=function(e){var t={id:Object(b.a)(),text:e.text,number:e.number,color:e.color,type:"boolean"},n=[];localStorage.getItem("items")&&(n=JSON.parse(localStorage.getItem("items"))),n.push(t),localStorage.setItem("items",JSON.stringify(n)),a.setState({adding:!1}),a.props.onNewItemToState(t)},a.editItemInState=function(e){a.props.onUpdateState(e)},a.deleteItem=function(e){if(window.confirm("Really delete?")){var t=JSON.parse(localStorage.getItem("items")).filter((function(t){return t.id!==e.target.value}));localStorage.setItem("items",JSON.stringify(t)),a.props.onUpdateState(t)}},a.state={adding:!1},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("main",{id:"items",children:[Object(a.jsx)("h1",{children:"Items"}),this.props.items.map((function(t){return Object(a.jsx)(f,{id:t.id,text:t.text,number:t.number,color:t.color,colors:e.props.colors,onEditIteminState:e.editItemInState,onDeleteItem:e.deleteItem},t.id)})),this.state.adding?Object(a.jsx)(k,{colors:this.props.colors,onUpdateItem:this.addItem,onCancelUpdate:this.cancelNewItem}):Object(a.jsx)("button",{onClick:this.newItem,className:"plus-sign add",children:"+"})]})}}]),n}(i.a.Component)),v=n(14),w=n.n(v),I=n(19);function N(e){var t=e.todo.map((function(e){return e>=1?1:0})).reduce((function(e,t){return e+t}),0),n=t>+e.number,s=t<+e.number;return Object(a.jsxs)("tr",{draggable:!0,id:e.id+e.weekBeginning,"data-index":e.index,"data-dragid":e.id,"data-dragweek":e.weekBeginning,className:e.color,onDragStart:e.onDragStart,onDragOver:e.onDragOver,onDragLeave:e.onDragLeave,onDrop:e.onDrop,onTouchStart:e.onBeginRemove,onMouseDown:e.onBeginRemove,onTouchCancel:e.onEndRemove,onMouseUp:e.onEndRemove,children:[Object(a.jsx)("td",{id:e.id,className:"week-item left-column",children:e.text}),Object(a.jsx)("td",{className:"week-item-number"+(n?" week-number-arrow-down":s?" week-number-arrow-up":""),children:e.number}),e.todo.map((function(t,n){return Object(a.jsx)("td",{id:e.id,"data-day":n,"data-week":e.weekBeginning,onClick:e.onChangeDay,className:"week-spots",children:Object(a.jsx)("div",{className:"spot"+(t>0?" grey":"")})},e.id+n)}))]})}n(16);var S,D={},W=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.createWeek().then()},a.componentDidUpdate=function(e,t,n){e!==a.props&&a.createWeek().then()},a.createWeek=Object(I.a)(w.a.mark((function e(){var t,n,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=Object(r.a)(a.props.scida.items),e.next=4,a.props.scida.weeks.find((function(e){return e.date===a.props.weekBeginning}));case 4:void 0!==(s=e.sent)&&s.items.forEach((function(e){if(n.find((function(t){return t.id===e[0]}))){var a=n.findIndex((function(t){return t.id===e[0]})),s=n.splice(a,1);s[0].todo=e[1],t.push(s[0])}})),a.setState({selected:[].concat(t),unselected:Object(r.a)(n)});case 7:case"end":return e.stop()}}),e)}))),a.saveWeek=function(e){a.props.onAddItemToWeek(e.currentTarget.id,a.props.weekBeginning)},a.onDragStart=function(e){D.item=e.currentTarget.id},a.onDragOver=function(e){e.preventDefault();var t=document.getElementById(D.item),n=e.currentTarget,a=n.parentNode;D.rect=n.getBoundingClientRect(),a.dataset.dragweek===n.dataset.dragweek&&(n===t?e.dataTransfer.dropEffect="none":t.dataset.dragweek===n.dataset.dragweek&&(n.classList.add("scooch"),e.dataTransfer.dropEffect="move"))},a.onDragLeave=function(e){(e.clientY<D.rect.top||e.clientY>D.rect.bottom)&&e.currentTarget.classList.remove("scooch")},a.onDrop=function(e){e.preventDefault(),e.currentTarget.parentNode.childNodes.forEach((function(e){return e.classList.remove("scooch")}));var t=document.getElementById(D.item),n=e.currentTarget;a.props.onMoveItemInWeek(+t.dataset.index,+n.dataset.index,n.dataset.dragweek)},a.beginRemove=function(e){S=setTimeout((function(){return a.removeItem(e)}),700)},a.endRemove=function(){S&&clearTimeout(S)},a.removeItem=function(e){console.log(e.target.parentNode.dataset.dragid)},a.saveDay=function(e){a.props.onChangeDay(e,a.props.weekBeginning)},a.state={selected:[{id:"",text:"",number:0,color:"",todo:[0,0,0,0,0,0,0]}],unselected:[]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"week",children:[Object(a.jsx)("h2",{children:this.props.weekName}),Object(a.jsx)("section",{children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"week-date left-column",children:this.props.weekBeginning}),Object(a.jsx)("td",{className:"week-date"}),this.props.scida.days.map((function(t,n){return Object(a.jsx)("td",{className:"day",children:t},t+n+e.props.weekBeginning)}))]})}),Object(a.jsx)("tbody",{"data-dragweek":this.props.weekBeginning,children:this.state.selected.map((function(t,n){return Object(a.jsx)(N,{id:t.id,index:n,text:t.text,number:t.number,color:t.color,todo:t.todo,weekBeginning:e.props.weekBeginning,onChangeDay:e.saveDay,onDragStart:e.onDragStart,onDragOver:e.onDragOver,onDragLeave:e.onDragLeave,onDrop:e.onDrop,onBeginRemove:e.beginRemove,onEndRemove:e.endRemove},t.id+e.props.weekBeginning)}))})]})}),this.state.unselected.length>0&&Object(a.jsx)("div",{className:"edit-box",children:Object(a.jsx)("div",{className:"items-list",children:this.state.unselected.map((function(t){return Object(a.jsx)("button",{id:t.id,className:"items-list-item "+t.color,onClick:e.saveWeek,children:t.text},t.id+e.props.weekBeginning+"u")}))})})]})}}]),n}(i.a.Component),y=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("main",{id:"arrange",children:[Object(a.jsx)("h1",{children:"Arrange"}),Object(a.jsx)(W,{weekName:"Next Week",scida:this.props.scida,weekBeginning:this.props.scida.nextWeekBeginning,onAddItemToWeek:this.props.onAddItemToWeek,onMoveItemInWeek:this.props.onMoveItemInWeek,onRemoveItemFromWeek:this.props.onRemoveItemFromWeek,onChangeDay:this.props.onChangeDay},"nextWeek"),Object(a.jsx)(W,{weekName:"This Week",scida:this.props.scida,weekBeginning:this.props.scida.thisWeekBeginning,onAddItemToWeek:this.props.onAddItemToWeek,onMoveItemInWeek:this.props.onMoveItemInWeek,onRemoveItemFromWeek:this.props.onRemoveItemFromWeek,onChangeDay:this.props.onChangeDay},"thisWeek")]})}}]),n}(i.a.Component);function C(e){var t=e.todo.reduce((function(e,t){return e+t}),0)>=100*+e.number;return Object(a.jsxs)("tr",{id:e.id+e.weekBeginning,className:t?"allDone":e.color,children:[Object(a.jsx)("td",{id:e.id,className:"week-item left-column",children:e.text}),Object(a.jsx)("td",{className:"week-item-number",children:e.number}),e.todo.map((function(t,n){return Object(a.jsx)("td",{id:e.id,"data-day":n,"data-week":e.weekBeginning,onClick:e.onDoDay,className:"week-spots",children:Object(a.jsx)("div",{className:"spot"+(100===t?" closed":1===t?" open":"")})},e.id+n)}))]})}var B=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.createWeek().then()},a.componentDidUpdate=function(e,t,n){e!==a.props&&a.createWeek().then()},a.createWeek=Object(I.a)(w.a.mark((function e(){var t,n,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=Object(r.a)(a.props.scida.items),e.next=3,a.props.scida.weeks.find((function(e){return e.date===a.props.weekBeginning}));case 3:void 0!==(s=e.sent)&&s.items.forEach((function(e){var a=n.findIndex((function(t){return t.id===e[0]})),s=n.splice(a,1);s[0].todo=e[1],t.push(s[0])})),a.setState({items:[].concat(t)});case 6:case"end":return e.stop()}}),e)}))),a.doDay=function(e){a.props.onChangeDay(e,a.props.weekBeginning,1)},a.state={items:[{id:"",text:"",number:0,color:"",todo:[0,0,0,0,0,0,0]}]},a}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"week",children:[Object(a.jsx)("h2",{children:this.props.weekName}),Object(a.jsx)("section",{children:Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"week-date left-column",children:this.props.weekBeginning}),Object(a.jsx)("td",{className:"week-date"}),this.props.scida.days.map((function(t,n){return Object(a.jsx)("td",{className:"day",children:t},t+n+e.props.weekBeginning)}))]})}),Object(a.jsx)("tbody",{children:this.state.items.map((function(t,n){return Object(a.jsx)(C,{id:t.id,index:n,text:t.text,number:t.number,color:t.color,todo:t.todo,weekBeginning:e.props.weekBeginning,onDoDay:e.props.editable&&e.doDay},t.id+e.props.weekBeginning)}))})]})})]})}}]),n}(i.a.Component),T=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("main",{id:"arrange",children:[Object(a.jsx)("h1",{children:"Doit"}),Object(a.jsx)(B,{weekName:"This Week",editable:!0,scida:this.props.scida,weekBeginning:this.props.scida.thisWeekBeginning,onChangeDay:this.props.onChangeDay},"thisWeek"),Object(a.jsx)(B,{weekName:"Last Week",editable:!1,scida:this.props.scida,weekBeginning:this.props.scida.lastWeekBeginning},"lastWeek")]})}}]),n}(i.a.Component);n(35);function R(e){return Object(a.jsx)("main",{children:Object(a.jsxs)("section",{className:"clear",children:[Object(a.jsx)("button",{className:"clear-button",onClick:e.onClearItems,children:"clear items"}),Object(a.jsx)("button",{className:"clear-button",onClick:e.onClearWeeks,children:"clear weeks"}),Object(a.jsx)("button",{className:"clear-button",onClick:e.onClearAll,children:"clear all"})]})})}var E=n.p+"static/media/tuttledot.c912f53d.svg";n(36);function M(e){return Object(a.jsx)("header",{children:Object(a.jsx)("img",{src:E,className:"logo",alt:"logo"})})}n(37);function A(){return Object(a.jsxs)("nav",{children:[Object(a.jsxs)(p.b,{to:"/Items",className:"menu-item",activeClassName:"here",children:[Object(a.jsx)("div",{className:"menu-icon",children:"+"}),Object(a.jsx)("div",{className:"menu-text",children:"Items"})]}),Object(a.jsxs)(p.b,{to:"/Arrange",className:"menu-item",activeClassName:"here",children:[Object(a.jsx)("div",{className:"menu-icon",children:Object(a.jsx)("span",{})}),Object(a.jsx)("div",{className:"menu-text",children:"Arrange"})]}),Object(a.jsxs)(p.b,{to:"/Doit",className:"menu-item",activeClassName:"here",children:[Object(a.jsx)("div",{className:"menu-icon",children:Object(a.jsx)("span",{className:"done"})}),Object(a.jsx)("div",{className:"menu-text",children:"Doit!"})]}),Object(a.jsxs)(p.b,{to:"/Clear",className:"menu-item",activeClassName:"here",children:[Object(a.jsx)("div",{className:"menu-icon delete",children:"+"}),Object(a.jsx)("div",{className:"menu-text",children:"Clear"})]})]})}function J(e){return e.sort((function(e,t){return e.color>t.color?1:-1}))}n(43);var U=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){a.getItems(),a.getWeeks()},a.componentDidUpdate=function(e,t,n){e!==a.props&&(a.getItems(),a.getWeeks())},a.newItemToState=function(e){a.setState({items:[].concat(Object(r.a)(a.state.items),[e])})},a.updateState=function(e){a.setState({items:Object(r.a)(e)})},a.getItems=function(){if(localStorage.getItem("items")){var e=JSON.parse(localStorage.getItem("items"));J(e),a.setState({items:Object(r.a)(e)})}},a.getWeeks=function(){if(localStorage.getItem("weeks")){var e=JSON.parse(localStorage.getItem("weeks"));a.setState({weeks:Object(r.a)(e)})}},a.getWeekBeginning=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new Date,n=t.getDay();function a(e){return e<10?"0"+e:e}return n>1?t.setDate(t.getDate()-n+1+e):0===n?t.setDate(t.getDate()-6+e):t.setDate(t.getDate()+e),t.getFullYear()+"/"+a(t.getMonth()+1)+"/"+a(t.getDate())},a.addItemToWeek=function(e,t){var n=Object(r.a)(a.state.weeks),s=n.find((function(e){return e.date===t}));if(void 0===s){var i={date:t,items:[[e,[0,0,0,0,0,0,0]]]};n.push(i)}else s.items.push([e,[0,0,0,0,0,0,0]]);localStorage.setItem("weeks",JSON.stringify(n)),a.setState({weeks:Object(r.a)(n)})},a.moveItemInWeek=function(e,t,n){var s,i=Object(r.a)(a.state.weeks),o=i.find((function(e){return e.date===n})),c=o.items.splice(e,1);console.log(o),(s=o.items).splice.apply(s,[t,0].concat(Object(r.a)(c))),localStorage.setItem("weeks",JSON.stringify(i)),a.setState({weeks:Object(r.a)(i)})},a.removeItemFromWeek=function(e,t){var n=Object(r.a)(a.state.weeks),s=n.find((function(e){return e.date===t})),i=s.items.filter((function(t){return t[0]!==e}));s.items=Object(r.a)(i),localStorage.setItem("weeks",JSON.stringify(n)),a.setState({weeks:Object(r.a)(n)})},a.changeDay=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=Object(r.a)(a.state.weeks),i=s.find((function(e){return e.date===t})),o=i.items.find((function(t){return t[0]===e.currentTarget.id})),c=e.currentTarget.dataset.day;n>0?o[1][c]>0&&(o[1][c]=1===o[1][c]?100:1):o[1][c]=o[1][c]>0?0:1,localStorage.setItem("weeks",JSON.stringify(s)),a.setState({weeks:Object(r.a)(s)})},a.clearItems=function(){window.confirm("Really delete all items? This cannot be undone!")&&(localStorage.removeItem("items"),a.setState({items:[]}))},a.clearWeeks=function(){window.confirm("Really delete all weeks? This cannot be undone!")&&(localStorage.removeItem("weeks"),a.setState({weeks:[{date:"",items:[]}]}))},a.clearAll=function(){window.confirm("Really delete all data? This cannot be undone!")&&(localStorage.clear(),a.setState({items:[],weeks:[{date:"",items:[]}]}))},a.state={items:[],weeks:[{date:"",items:[]}],lastWeekBeginning:a.getWeekBeginning(-7),thisWeekBeginning:a.getWeekBeginning(),nextWeekBeginning:a.getWeekBeginning(7),colors:["color0","color1","color2","color3","color4","color5","color6","color7","color8","color9"],days:["M","T","W","T","F","S","S"]},a.sortColor=J.bind(Object(m.a)(a)),a}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(p.a,{children:[Object(a.jsx)(M,{}),Object(a.jsxs)(h.d,{children:[Object(a.jsx)(h.b,{path:"/Items",children:Object(a.jsx)(x,{items:this.state.items,colors:this.state.colors,onNewItemToState:this.newItemToState,onUpdateState:this.updateState})}),Object(a.jsx)(h.b,{path:"/Arrange",children:Object(a.jsx)(y,{scida:this.state,onChangeDay:this.changeDay,onAddItemToWeek:this.addItemToWeek,onMoveItemInWeek:this.moveItemInWeek,onRemoveItemFromWeek:this.removeItemFromWeek,onNewItemToState:this.newItemToState})}),Object(a.jsx)(h.b,{path:"/Doit",children:Object(a.jsx)(T,{scida:this.state,onChangeDay:this.changeDay,onAddItemToWeek:this.addItemToWeek,onMoveItemInWeek:this.moveItemInWeek,onRemoveItemFromWeek:this.removeItemFromWeek,onNewItemToState:this.newItemToState})}),Object(a.jsx)(h.b,{path:"/Clear",children:Object(a.jsx)(R,{onClearItems:this.clearItems,onClearWeeks:this.clearWeeks,onClearAll:this.clearAll})}),Object(a.jsx)(h.b,{exact:!0,path:"/",children:Object(a.jsx)(h.a,{to:"/Doit"})})]}),Object(a.jsx)(A,{})]})}}]),n}(i.a.Component);n(44);c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(U,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c401f1ca.chunk.js.map