(this.webpackJsonpscida=this.webpackJsonpscida||[]).push([[0],{22:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n(1),i=n.n(a),o=n(24),r=n.n(o),c=n(4),d=n(7),l=n(8),m=n(15),u=n(10),p=n(9),h=n(12),j=n(2),g=n(46),b=n(25),O=n(16),f=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).handleInput=function(e){var t=e.target.name,n=e.target.value;s.setState(Object(O.a)({},t,n))},s.setColor=function(e){s.setState({color:e.target.id})},s.updateItem=function(){s.state.text.length>0&&s.props.onUpdateItem(Object(b.a)({},s.state))},s.state={id:"",text:"",number:1,color:"color0"},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.id&&this.setState({id:this.props.id,text:this.props.text,number:this.props.number,color:this.props.color})}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("section",{children:[Object(s.jsxs)("div",{className:"item",children:[Object(s.jsx)("input",{type:"text",name:"text",value:this.state.text,onChange:this.handleInput,className:"text"}),Object(s.jsx)("input",{type:"number",name:"number",min:"1",max:"35",value:this.state.number,onChange:this.handleInput,className:"number"}),Object(s.jsx)("button",{className:"color "+this.state.color}),Object(s.jsx)("button",{onClick:this.props.onCancelUpdate,className:"plus-sign delete",children:"+"})]}),Object(s.jsxs)("div",{className:"edit-box",children:[Object(s.jsx)("div",{className:"palette",children:this.props.colors.map((function(t){return Object(s.jsx)("div",{id:t,className:"palette-square "+t,onClick:e.setColor},t)}))}),Object(s.jsx)("div",{className:"edit-box-buttons",children:Object(s.jsx)("button",{onClick:this.updateItem,className:"edit-complete",children:"\u2713"})})]})]})}}]),n}(i.a.Component),k=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).startEdit=function(){s.setState({editing:!0})},s.cancelEdit=function(){s.setState({editing:!1})},s.editItem=function(e){var t=JSON.parse(localStorage.getItem("items")),n=t.findIndex((function(t){return t.id===e.id}));t[n]=e,localStorage.setItem("items",JSON.stringify(t)),s.props.onEditIteminState(t),s.setState({editing:!1})},s.state={editing:!1},s}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:this.state.editing?Object(s.jsx)(f,{id:this.props.id,text:this.props.text,number:this.props.number,color:this.props.color,colors:this.props.colors,onUpdateItem:this.editItem,onCancelUpdate:this.cancelEdit}):Object(s.jsxs)("div",{className:"item",children:[Object(s.jsx)("div",{onClick:this.startEdit,className:"text",children:this.props.text}),Object(s.jsx)("button",{onClick:this.startEdit,className:"number",children:this.props.number}),Object(s.jsx)("button",{onClick:this.startEdit,className:"color "+this.props.color}),Object(s.jsx)("button",{value:this.props.id,onClick:this.props.onDeleteItem,className:"plus-sign delete",children:"+"})]})})}}]),n}(i.a.Component),v=(n(33),function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).newItem=function(){s.setState({adding:!0})},s.cancelNewItem=function(){s.setState({adding:!1})},s.addItem=function(e){var t={id:Object(g.a)(),text:e.text,number:e.number,color:e.color,type:"boolean"},n=[];localStorage.getItem("items")&&(n=JSON.parse(localStorage.getItem("items"))),n.push(t),localStorage.setItem("items",JSON.stringify(n)),s.setState({adding:!1}),s.props.onNewItemToState(t)},s.editItemInState=function(e){s.props.onUpdateState(e)},s.deleteItem=function(e){if(window.confirm("Really delete?")){var t=JSON.parse(localStorage.getItem("items")).filter((function(t){return t.id!==e.target.value}));localStorage.setItem("items",JSON.stringify(t)),s.props.onUpdateState(t)}},s.state={adding:!1},s}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(s.jsxs)("main",{id:"items",children:[Object(s.jsx)("h1",{children:"Items"}),this.props.items.map((function(t){return Object(s.jsx)(k,{id:t.id,text:t.text,number:t.number,color:t.color,colors:e.props.colors,onEditIteminState:e.editItemInState,onDeleteItem:e.deleteItem},t.id)})),this.state.adding?Object(s.jsx)(f,{colors:this.props.colors,onUpdateItem:this.addItem,onCancelUpdate:this.cancelNewItem}):Object(s.jsx)("button",{onClick:this.newItem,className:"plus-sign add",children:"+"})]})}}]),n}(i.a.Component)),x=n(19),I=n.n(x),w=n(26);function N(e){var t=e.todo.reduce((function(e,t){return e+t}),0),n=e.thisWeek&&t>=e.number,a=!n&&t>+e.number,i=!n&&t<+e.number;return Object(s.jsxs)("tr",{draggable:!0,id:e.id+e.weekBeginning,"data-index":e.index,"data-dragid":e.id,"data-dragweek":e.weekBeginning,className:e.color,onDragStart:e.onDragStart,onDragOver:e.onDragOver,onDragLeave:e.onDragLeave,onDrop:e.onDrop,children:[Object(s.jsx)("td",{id:e.id,className:"week-item left-column",children:e.text}),Object(s.jsx)("td",{className:"week-item-number"+(a?" week-number-arrow-down":i?" week-number-arrow-up":""),children:e.number}),e.todo.map((function(t,n){return Object(s.jsx)("td",{id:e.id,"data-day":n,"data-week":e.weekBeginning,onClick:e.onChangeDay,className:"week-spots",children:Object(s.jsx)("div",{className:"spot"+(t>0?" open":"")})},e.id+n)}))]})}n(22);var S={},D=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).createWeek=Object(w.a)(I.a.mark((function e(){var t,n,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],n=Object(c.a)(s.props.scida.items),e.next=4,s.props.scida.weeks.find((function(e){return e.date===s.props.weekBeginning}));case 4:void 0!==(a=e.sent)&&a.items.forEach((function(e){if(n.find((function(t){return t.id===e[0]}))){var s=n.findIndex((function(t){return t.id===e[0]})),a=n.splice(s,1);a[0].todo=e[1],t.push(a[0])}})),s.setState({selected:[].concat(t),unselected:Object(c.a)(n)});case 7:case"end":return e.stop()}}),e)}))),s.saveWeek=function(e){s.props.onAddItemToWeek(e.currentTarget.id,s.props.weekBeginning)},s.onDragStart=function(e){S.item=e.currentTarget.id},s.onDragOver=function(e){e.preventDefault();var t=document.getElementById(S.item),n=e.currentTarget,s=n.parentNode;S.rect=n.getBoundingClientRect(),s.dataset.dragweek===n.dataset.dragweek&&(n===t?e.dataTransfer.dropEffect="none":t.dataset.dragweek===n.dataset.dragweek&&(n.classList.add("scooch"),e.dataTransfer.dropEffect="move"))},s.onDragLeave=function(e){(e.clientY<S.rect.top||e.clientY>S.rect.bottom)&&e.currentTarget.classList.remove("scooch")},s.onDrop=function(e){e.preventDefault(),e.currentTarget.parentNode.childNodes.forEach((function(e){return e.classList.remove("scooch")}));var t=document.getElementById(S.item),n=e.currentTarget;s.props.onMoveItemInWeek(+t.dataset.index,+n.dataset.index,n.dataset.dragweek)},s.removeItem=function(e){window.confirm("Really remove?")&&s.props.onRemoveItemFromWeek(e.currentTarget.id,s.props.weekBeginning)},s.saveDay=function(e){s.props.onChangeDay(e,s.props.weekBeginning)},s.state={selected:[{id:"",text:"",number:0,color:"",todo:[0,0,0,0,0,0,0]}],unselected:[],initialX:0,moveX:0,finalX:0},s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.createWeek().then()}},{key:"componentDidUpdate",value:function(e,t,n){e!==this.props&&this.createWeek().then()}},{key:"render",value:function(){var e=this;return Object(s.jsxs)("div",{className:"week",children:[Object(s.jsx)("h2",{children:this.props.weekName}),Object(s.jsx)("section",{children:Object(s.jsxs)("table",{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{className:"week-date left-column",children:this.props.weekBeginning}),Object(s.jsx)("td",{className:"week-date"}),this.props.scida.days.map((function(t,n){return Object(s.jsx)("td",{className:"day",children:t},t+n+e.props.weekBeginning)}))]})}),Object(s.jsx)("tbody",{"data-dragweek":this.props.weekBeginning,children:this.state.selected.map((function(t,n){return Object(s.jsx)(N,{id:t.id,index:n,text:t.text,number:t.number,color:t.color,todo:t.todo,weekBeginning:e.props.weekBeginning,onChangeDay:e.saveDay,onDragStart:e.onDragStart,onDragOver:e.onDragOver,onDragLeave:e.onDragLeave,onDrop:e.onDrop},t.id+e.props.weekBeginning)}))})]})}),this.state.unselected.length>0&&Object(s.jsx)("div",{className:"edit-box",children:Object(s.jsx)("div",{className:"items-list",children:this.state.unselected.map((function(t){return Object(s.jsx)("button",{id:t.id,className:"items-list-item "+t.color,onClick:e.saveWeek,children:t.text},t.id+e.props.weekBeginning+"u")}))})})]})}}]),n}(i.a.Component),y=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(s.jsxs)("main",{id:"arrange",children:[Object(s.jsx)("h1",{children:"Arrange"}),Object(s.jsx)(D,{weekName:"Next Week",scida:this.props.scida,weekBeginning:this.props.scida.nextWeekBeginning,onAddItemToWeek:this.props.onAddItemToWeek,onMoveItemInWeek:this.props.onMoveItemInWeek,onRemoveItemFromWeek:this.props.onRemoveItemFromWeek,onChangeDay:this.props.onChangeDay},"nextWeek"),Object(s.jsx)(D,{weekName:"This Week",scida:this.props.scida,weekBeginning:this.props.scida.thisWeekBeginning,onAddItemToWeek:this.props.onAddItemToWeek,onMoveItemInWeek:this.props.onMoveItemInWeek,onRemoveItemFromWeek:this.props.onRemoveItemFromWeek,onChangeDay:this.props.onChangeDay},"thisWeek")]})}}]),n}(i.a.Component);n(35);function W(e){return Object(s.jsx)("header",{children:Object(s.jsx)("img",{src:"tuttledot.svg",className:"logo",alt:"logo"})})}n(36);function C(){return Object(s.jsxs)("nav",{children:[Object(s.jsxs)(h.b,{to:"/Items",className:"menu-item",activeClassName:"here",children:[Object(s.jsx)("div",{className:"menu-icon",children:"+"}),Object(s.jsx)("div",{className:"menu-text",children:"Items"})]}),Object(s.jsxs)(h.b,{to:"/Arrange",className:"menu-item",activeClassName:"here",children:[Object(s.jsx)("div",{className:"menu-icon",children:Object(s.jsx)("span",{})}),Object(s.jsx)("div",{className:"menu-text",children:"Arrange"})]}),Object(s.jsxs)(h.b,{to:"/Week",className:"menu-item",activeClassName:"here",children:[Object(s.jsx)("div",{className:"menu-icon",children:Object(s.jsx)("span",{className:"done"})}),Object(s.jsx)("div",{className:"menu-text",children:"This week"})]}),Object(s.jsxs)(h.b,{to:"/History",className:"menu-item",activeClassName:"here",children:[Object(s.jsx)("div",{className:"menu-icon",children:"\u2190"}),Object(s.jsx)("div",{className:"menu-text",children:"History"})]})]})}function B(e){return e.sort((function(e,t){return e.color>t.color?1:-1}))}n(42);var T=function(e){Object(u.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(d.a)(this,n),(s=t.call(this,e)).newItemToState=function(e){s.setState({items:[].concat(Object(c.a)(s.state.items),[e])})},s.updateState=function(e){s.setState({items:Object(c.a)(e)})},s.getItems=function(){if(localStorage.getItem("items")){var e=JSON.parse(localStorage.getItem("items"));B(e),s.setState({items:Object(c.a)(e)})}},s.getWeeks=function(){if(localStorage.getItem("weeks")){var e=JSON.parse(localStorage.getItem("weeks"));s.setState({weeks:Object(c.a)(e)})}},s.getWeekBeginning=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new Date,n=t.getDay();function s(e){return e<10?"0"+e:e}return n>1?t.setDate(t.getDate()-n+1+e):0===n?t.setDate(t.getDate()-6+e):t.setDate(t.getDate()+e),t.getFullYear()+"/"+s(t.getMonth()+1)+"/"+s(t.getDate())},s.addItemToWeek=function(e,t){var n=Object(c.a)(s.state.weeks),a=n.find((function(e){return e.date===t}));if(void 0===a){var i={date:t,items:[[e,[0,0,0,0,0,0,0]]]};n.push(i)}else a.items.push([e,[0,0,0,0,0,0,0]]);localStorage.setItem("weeks",JSON.stringify(n)),s.setState({weeks:Object(c.a)(n)})},s.moveItemInWeek=function(e,t,n){var a,i=Object(c.a)(s.state.weeks),o=i.find((function(e){return e.date===n})),r=o.items.splice(e,1);console.log(o),(a=o.items).splice.apply(a,[t,0].concat(Object(c.a)(r))),s.setState({weeks:Object(c.a)(i)})},s.removeItemFromWeek=function(e,t){var n=Object(c.a)(s.state.weeks),a=n.find((function(e){return e.date===t})),i=a.items.filter((function(t){return t[0]!==e}));a.items=Object(c.a)(i),localStorage.setItem("weeks",JSON.stringify(n)),s.setState({weeks:Object(c.a)(n)})},s.changeDayInState=function(e,t){var n=Object(c.a)(s.state.weeks),a=n.find((function(e){return e.date===t})).items.find((function(t){return t[0]===e.currentTarget.id})),i=e.currentTarget.dataset.day;a[1][i]=a[1][i]>0?0:1,localStorage.setItem("weeks",JSON.stringify(n)),s.setState({weeks:Object(c.a)(n)})},s.state={items:[],weeks:[{date:"",items:[]}],lastWeekBeginning:s.getWeekBeginning(-7),thisWeekBeginning:s.getWeekBeginning(),nextWeekBeginning:s.getWeekBeginning(7),colors:["color0","color1","color2","color3","color4","color5","color6","color7","color8","color9"],days:["M","T","W","T","F","S","S"]},s.sortColor=B.bind(Object(m.a)(s)),s}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.getItems(),this.getWeeks()}},{key:"componentDidUpdate",value:function(e,t,n){e!==this.props&&(this.getItems(),this.getWeeks())}},{key:"render",value:function(){return Object(s.jsxs)(h.a,{children:[Object(s.jsx)(W,{}),Object(s.jsxs)(j.c,{children:[Object(s.jsx)(j.a,{path:"/Items",children:Object(s.jsx)(v,{items:this.state.items,colors:this.state.colors,onNewItemToState:this.newItemToState,onUpdateState:this.updateState})}),Object(s.jsx)(j.a,{path:"/Arrange",children:Object(s.jsx)(y,{scida:this.state,onChangeDay:this.changeDayInState,onAddItemToWeek:this.addItemToWeek,onMoveItemInWeek:this.moveItemInWeek,onRemoveItemFromWeek:this.removeItemFromWeek,onNewItemToState:this.newItemToState})})]}),Object(s.jsx)(C,{})]})}}]),n}(i.a.Component);n(43);r.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ee301505.chunk.js.map