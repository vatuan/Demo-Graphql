(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{72:function(e,c,s){},84:function(e,c,s){},85:function(e,c,s){},87:function(e,c,s){"use strict";s.r(c);var n=s(4),a=s(2),t=s.n(a),l=s(61),r=s.n(l),i=s(19),u=(s(72),s(34)),j=s(35),h=s.n(j),o=s(62),m=s.n(o),d=s(24),b=function(e){var c=e.launch;console.log("launch : ",{launch:c});var s=c.flight_number,a=c.mission_name,t=(c.launch_year,c.launch_date_local),l=c.launch_success;return Object(n.jsx)("div",{className:"card card-body mb-3",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-9",children:[Object(n.jsxs)("h4",{children:["Mission : ",Object(n.jsx)("span",{className:h()({"text-success":l,"text-danger":!l}),children:a})]}),Object(n.jsxs)("p",{children:["Date : ",Object(n.jsx)(m.a,{format:"DD/MM/YYYY HH:mm",children:t})]})]}),Object(n.jsx)("div",{className:"col-md-3",children:Object(n.jsx)(d.b,{to:"/launch/".concat(s),className:"btn btn-primary",children:"Launch Details"})})]})})};function x(){return Object(n.jsxs)("div",{className:"my-3",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"px-3 mr-2 bg-success"})," = Success"]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("span",{className:"px-3 mr-2 bg-danger"})," = Fail"]})]})}function O(){var e=Object(u.a)(["\nquery LaunchesQuery {\n    launches(limit : 6){\n        mission_name\n        flight_number\n        launch_year\n        launch_date_local\n        launch_success\n      }\n  }\n"]);return O=function(){return e},e}var p=Object(i.gql)(O()),g=function(){var e=Object(i.useQuery)(p),c=e.loading,s=e.error,t=e.data;return s?Object(n.jsx)("div",{className:"alert alert-dismissible alert-danger col-3",children:s.message}):Object(n.jsx)(a.Fragment,{children:Object(n.jsxs)("div",{className:"launches",children:[Object(n.jsx)("h2",{children:"Launches"}),Object(n.jsx)(x,{}),c?Object(n.jsx)("div",{className:"alert alert-dismissible alert-primary col-3 mr-auto",children:"Loading..."}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:"launches",children:t.launches.map((function(e,c){return Object(n.jsx)(b,{launch:e},c)}))})})]})})},N=s(9);function _(){var e=Object(u.a)(["\nquery LaunchQuery($flight_number :Int!){\n    launch (flight_number : $flight_number){\n      flight_number\n      mission_name\n      launch_year\n      launch_date_local\n      launch_success\n      rocket{\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return _=function(){return e},e}var f=Object(i.gql)(_());function v(e){var c=e.match.params.flight_number;c=parseInt(c);var s=Object(i.useQuery)(f,{variables:{flight_number:c}}),a=s.loading,t=s.error,l=s.data;if(a)return Object(n.jsx)("div",{className:"alert alert-dismissible alert-primary col-3 mr-auto",children:"Loading..."});if(t)return Object(n.jsx)("span",{className:"badge badge-pill badge-danger px-5 py-2 col-3",children:t.message});var r=l.launch,u=r.mission_name,j=r.launch_year,o=(r.launch_date_local,r.launch_success),m=r.rocket,b=m.rocket_id,x=m.rocket_name,O=m.rocket_type;return Object(n.jsxs)("div",{className:"launch",children:[Object(n.jsxs)("h3",{className:"display-4 my-3",children:[Object(n.jsx)("span",{className:"text-primary",children:"Mission :"}),u]}),Object(n.jsx)("h4",{className:"mb-3",children:"Launch Details"}),Object(n.jsx)("ul",{className:"list-group",children:Object(n.jsxs)("li",{className:"list-group-item",children:["Fight Number: ",c]})}),Object(n.jsx)("ul",{className:"list-group",children:Object(n.jsxs)("li",{className:"list-group-item",children:["Launch Year: ",j]})}),Object(n.jsx)("ul",{className:"list-group",children:Object(n.jsxs)("li",{className:"list-group-item",children:["Launch Successful: ",Object(n.jsx)("span",{className:h()({"text-danger":!o,"text-success":o," font-weight-bold":!0}),children:o?"Yes":"No"})]})}),Object(n.jsx)("h3",{className:"mb-3",children:"Rocket Details"}),Object(n.jsxs)("ul",{className:"list-group",children:[Object(n.jsxs)("li",{className:"list-group-item",children:["Rocket ID : ",b]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Rocket Name : ",x]}),Object(n.jsxs)("li",{className:"list-group-item",children:["Rocket Type : ",O]})]}),Object(n.jsx)("hr",{}),Object(n.jsx)(d.b,{to:"/",className:"btn btn-secondary",children:"Back"})]})}var y=new i.ApolloClient({uri:"http://localhost:5555/graphql",cache:new i.InMemoryCache}),k=function(){return Object(n.jsx)(i.ApolloProvider,{client:y,children:Object(n.jsx)(d.a,{children:Object(n.jsxs)("div",{className:"app container",children:[Object(n.jsx)("h1",{children:"SpaceX"}),Object(n.jsx)(N.a,{exact:!0,path:"/",component:g}),Object(n.jsx)(N.a,{path:"/launch/:flight_number",component:v})]})})})},L=(s(84),s(85),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,88)).then((function(c){var s=c.getCLS,n=c.getFID,a=c.getFCP,t=c.getLCP,l=c.getTTFB;s(e),n(e),a(e),t(e),l(e)}))});r.a.render(Object(n.jsx)(t.a.StrictMode,{children:Object(n.jsx)(k,{})}),document.getElementById("root")),L()}},[[87,1,2]]]);
//# sourceMappingURL=main.cc54fc27.chunk.js.map