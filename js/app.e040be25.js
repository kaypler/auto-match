(function(e){function t(t){for(var n,c,i=t[0],o=t[1],l=t[2],h=0,d=[];h<i.length;h++)c=i[h],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&d.push(r[c][0]),r[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},s=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/auto-match/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=o;s.push([1,"chunk-vendors"]),a()})({0:function(e,t){},1:function(e,t,a){e.exports=a("56d7")},2:function(e,t){},2395:function(e,t,a){},3:function(e,t){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("keep-alive",[a("router-view")],1)],1)},s=[],c=(a("7c55"),a("2877")),i={},o=Object(c["a"])(i,r,s,!1,null,null,null),l=o.exports,u=a("8c4f"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"home",staticClass:"home"},[a("div",{staticClass:"table-top"},[a("div",{staticClass:"table-query"},[a("div",{staticClass:"query-item"},[a("label",[e._v("项目")]),a("el-select",{attrs:{filterable:"",clearable:"",placeholder:"请选择项目"},on:{change:e.handleProjectChange},model:{value:e.search.projectId,callback:function(t){e.$set(e.search,"projectId",t)},expression:"search.projectId"}},e._l(e.projectList,(function(e){return a("el-option",{key:e.communityId,attrs:{label:e.name,value:e.communityId}})})),1)],1),a("div",{staticClass:"query-item"},[a("label",[e._v("车场")]),a("el-select",{staticStyle:{width:"180px"},attrs:{filterable:"",clearable:"",placeholder:"请选择车场"},on:{change:e.handlePlaceChange},model:{value:e.search.placeId,callback:function(t){e.$set(e.search,"placeId",t)},expression:"search.placeId"}},e._l(e.placeList,(function(e){return a("el-option",{key:e.placeId,attrs:{label:e.placeName,value:e.placeId}})})),1)],1),a("div",{staticClass:"query-item"},[a("label",[e._v("月卡类型")]),a("el-select",{staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"请选择"},on:{change:e.resetMatch},model:{value:e.search.typeName,callback:function(t){e.$set(e.search,"typeName",t)},expression:"search.typeName"}},e._l(e.cardTypes,(function(e){return a("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})})),1)],1),a("div",{staticClass:"query-item"},[a("label",[e._v("是否已暂存")]),a("el-select",{staticStyle:{width:"100px"},attrs:{clearable:"",placeholder:"请选择"},on:{change:e.resetMatch},model:{value:e.search.hasMatch,callback:function(t){e.$set(e.search,"hasMatch",t)},expression:"search.hasMatch"}},e._l(e.boolOptions,(function(e){return a("el-option",{key:e.value,attrs:{label:e.text,value:e.value}})})),1)],1)]),a("div",{staticClass:"table-btns"},[a("el-upload",{staticClass:"btn",attrs:{action:"",accept:".xlsx, .xls","auto-upload":!1,"show-file-list":!1,"on-change":e.chooseFile}},[a("el-button",{attrs:{slot:"trigger",type:"primary",loading:e.fetching},slot:"trigger"},[e._v("开始匹配")])],1),a("el-button",{staticClass:"btn",attrs:{type:"primary",loading:e.saving},nativeOn:{click:function(t){return e.saveAllStage(t)}}},[e._v("暂存所有")]),a("el-button",{staticClass:"btn",attrs:{type:"primary"},nativeOn:{click:function(t){return e.exportErrors(t)}}},[e._v("导出错误列表")])],1)]),a("div",{staticClass:"table-body"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.fetching,expression:"fetching"}],ref:"table",attrs:{border:"",height:"calc(100vh - 149px)","element-loading-text":"数据匹配中",data:e.tableData}},[a("el-table-column",{attrs:{fixed:"",prop:"name",label:"车主姓名",width:"80"}}),a("el-table-column",{attrs:{fixed:"",prop:"phone",label:"联系方式",width:"100"}}),a("el-table-column",{attrs:{fixed:"",prop:"typeName",label:"月卡类型",width:"100",filters:e.cardTypes,"filter-multiple":!1,"filtered-value":e.filter.typeName}}),a("el-table-column",{attrs:{prop:"mainCarnos",label:"主数据车牌",width:"90"}}),a("el-table-column",{attrs:{prop:"sourceCarnos",label:"台账车牌",width:"90"}}),a("el-table-column",{attrs:{label:"主数据房屋",width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-radio-group",{model:{value:t.row.houseId,callback:function(a){e.$set(t.row,"houseId",a)},expression:"scope.row.houseId"}},e._l(t.row.mainHouses,(function(t){return a("el-radio",{key:t.houseId,attrs:{label:t.houseId,disabled:""}},[e._v(e._s(t.houseName))])})),1)]}}])}),a("el-table-column",{attrs:{prop:"sourceHouse",label:"台账房屋",width:"240"}}),a("el-table-column",{attrs:{label:"主数据车位",width:"240"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-checkbox-group",{model:{value:t.row.parkingIds,callback:function(a){e.$set(t.row,"parkingIds",a)},expression:"scope.row.parkingIds"}},e._l(t.row.mainPlaces,(function(t){return a("el-checkbox",{key:t.parkingId,attrs:{label:t.parkingId,disabled:""}},[e._v(e._s(t.code))])})),1)]}}])}),a("el-table-column",{attrs:{prop:"sourcePlace",label:"台账车位",width:"180"}}),a("el-table-column",{attrs:{label:"是否已暂存",width:"100",filters:e.boolOptions,"filter-multiple":!1,"filtered-value":e.filter.hasMatch},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.hasMatch?a("i",{staticClass:"el-icon-check"}):e._e()]}}])}),a("el-table-column",{attrs:{label:"匹配状态",width:"100",filters:[{text:"成功",value:1},{text:"失败",value:0}],"filter-multiple":!1,"filtered-value":e.filter.matchStatus},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:t.row.matchStatus?"success":"error"}},[e._v(" "+e._s(t.row.matchStatus?"成功":"失败")+" ")])]}}])}),a("el-table-column",{attrs:{prop:"msg",label:"错误信息","min-width":"240"}})],1),a("div",{staticClass:"table-page"},[a("el-pagination",{attrs:{"current-page":e.pageNum,"page-sizes":[10,20,50,100,200],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.filterData.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)])},d=[],p=a("1da1"),f=a("5530"),m=a("ade3"),g=a("2909"),b=a("3835"),v=(a("96cf"),a("498a"),a("8ba4"),a("a9e3"),a("13d5"),a("b64b"),a("4de4"),a("841c"),a("ac1f"),a("d3b7"),a("3ca3"),a("ddb0"),a("d81d"),a("b0c0"),a("99af"),a("1276"),a("caad"),a("2532"),a("7db0"),a("dca8"),a("fb6a"),a("a15b"),a("1146")),y=a.n(v),I=a("bc3a"),k=a.n(I),x=k.a.create({baseURL:"",timeout:3e4});x.interceptors.request.use((function(e){return e})),x.interceptors.response.use((function(e){var t=e.data;return 200==t.code?t.body:Promise.reject(t)}),(function(e){return e.message.includes("timeout")&&(e.message="请求超时"),Promise.reject(e)}));var w=function(){return x.get("/park/segiu/selectProject")},P=function(e){return x.get("/park/segiu/selectPlaceByCommunityId?communityId=".concat(e))},j=function(e){return x.post("/park/segiu/selectFixParks",e)},_=function(e){return x.post("/park/card/list",e)},C=function(e){return x.post("/park/card/saveCardExt",e)};a("5319"),a("4d63"),a("25f0"),a("4d90");function S(e){return new Promise((function(t){var a=new FileReader;a.readAsBinaryString(e),a.onload=function(e){t(e.target.result)}}))}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd";if(e){"string"!==typeof e&&"number"!==typeof e||(e=new Date(e));var a={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds(),"q+":Math.floor((e.getMonth()+3)/3),S:e.getMilliseconds()};for(var n in/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length))),a)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?a[n]:(a[n]+"").padStart(2,"0")));return t}}var M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0,r=e.find((function(e){return e[a]==t}))||{};return r[n]||""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return e.find(t)},D=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2?arguments[2]:void 0,n=!0,r=function(r){if(!e.find((function(e){return a?e[a]===t[r]:e===t[r]})))return n=!1,"break"},s=0;s<t.length;s++){var c=r(s);if("break"===c)break}return n},$={"车主姓名（只能1个）":"name","联系电话（1个）":"phone","楼栋":"buildName","单元":"unit","房号":"roomNo","月卡类型":"typeName","车牌号码（可以多个车牌号码）":"carnos","车位编号（可以多个车位号）":"placeCodes"},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"".concat(e.trim())},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return Number.isInteger(parseInt(t))&&(t+="栋"),e===t},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"/"===e&&(e="1单元"),"/"===t?t="1单元":Number.isInteger(parseInt(t))&&(t+="单元"),e===t},T={name:"Home",data:function(){return{fetching:!1,saving:!1,search:{projectId:"",placeId:"",typeName:"",hasMatch:""},filter:{typeName:[],hasMatch:[],matchStatus:[]},pageNum:1,pageSize:20,cardTypes:[{text:"产权月卡",value:"产权月卡"},{text:"固定月卡",value:"固定月卡"},{text:"临时月卡",value:"临时月卡"}],boolOptions:[{text:"是",value:1},{text:"否",value:0}],projectList:[],placeList:[],fixParks:[],tableData:[],sourceMap:{},resultData:[],filterData:[],usedHouseIds:[],usedParkingIds:[]}},watch:{filter:{handler:function(e){console.log("filter",e),this.filterData=Object.keys(e).reduce((function(t,a){return t.filter((function(t){return 0===e[a].length||-1!=e[a].indexOf(t[a])}))}),this.resultData),this.fetchTable(!0)},deep:!0}},methods:{init:function(){var e=this;w().then((function(t){e.projectList=t}))},clearData:function(){this.search.placeId="",this.placeList=[],this.fixParks=[]},handleProjectChange:function(e){var t=this;this.clearData(),e&&P(e).then((function(e){t.placeList=e}))},handlePlaceChange:function(e){var t=this;e?j({pageNum:1,pageSize:9999,projectId:this.search.projectId,placeId:e}).then((function(e){t.fixParks=e.records})).catch((function(e){t.$message.error(e.message||"查询固定车位报错")})):this.fixParks=[]},chooseFile:function(e){var t=this;if(this.search.placeId){var a=e.raw;a&&(this.fetching=!0,Promise.all([this.parseExcel(a),this.fetchMainData()]).then((function(e){t.fetching=!1;var a=Object(b["a"])(e,2),n=a[0],r=a[1];t.startMatch(n,r)})).catch((function(e){console.log(e),t.fetching=!1,t.$message.error(e.message||"系统开小差了")})))}else this.$message.error("请先选择项目车场")},resetMatch:function(){var e=this;this.fetching=!0,this.fetchMainData().then((function(t){e.fetching=!1,e.startMatch(e.sourceMap,t)})).catch((function(t){e.fetching=!1,e.$message.error(t.message||"系统开小差了")}))},startMatch:function(e,t){var a=this,n=t.map((function(t,n){var r=t.name,s=t.phone,c=t.cardId,i=t.typeName,o=t.carnos,l=t.hasMatch,u=t.cardExtVo,h=t.updateDate,d=u.houses,p=u.ownerParkPlaces,f=u.memberParkPlaces,m=u.fixParkPlace,g={name:r,phone:s,cardId:c,typeName:i,mainCarnos:o,mainHouses:d,mainPlaces:p.concat(f).concat(m),sourceCarnos:"",sourceHouse:"",sourcePlace:"",houseId:"",parkingIds:[],hasMatch:l,matchStatus:0,matchData:null,msg:"",updateDate:h},b=H(r),v=e[b];return a.matchItem(g,v,(function(e){return Object.assign(g,e)})),g}));this.resultData=n,this.filterData=n,this.$refs.table.clearFilter(),this.fetchTable(!0)},matchItem:function(e,t,a){var n=Object.create(null);t?this.matchPhone(e,t,n,a):(n.msg="台账查不到此数据",a(n))},matchPhone:function(e,t,a,n){var r=t.filter((function(t){return t.phone==e.phone}));r.length?this.matchTypename(e,r,a,n):(a.msg="联系方式不匹配",n(a))},matchTypename:function(e,t,a,n){var r=t.filter((function(t){return t.typeName===e.typeName}));r.length?this.matchCarno(e,r,a,n):(a.msg="月卡类型不匹配",n(a))},matchCarno:function(e,t,a,n){var r=O(t,(function(t){return t.carnos.length===e.mainCarnos.length&&D(t.carnos.split("|"),e.mainCarnos.split("|"))}));r?(a.sourceCarnos=r.carnos,this.matchHouse(e,r,a,n)):(a.msg="车牌不匹配",1===t.length&&(a.sourceCarnos=t[0].carnos),n(a))},matchHouse:function(e,t,a,n){var r=this,s=e.hasMatch?e.mainHouses.filter((function(e){return e.selected})):e.mainHouses.filter((function(e){return!e.selectedByOther&&!r.usedHouseIds.includes[e.houseId]})),c=O(s,(function(e){return z(e.buildName,t.buildName)&&E(e.unit,t.unit)&&parseInt(e.roomNo)===parseInt(t.roomNo)}));a.sourceHouse="".concat(t.buildName,"_").concat(t.unit,"_").concat(t.roomNo),c?this.matchPlace(e,t,c,a,n):(a.msg="房屋不匹配",n(a))},matchPlace:function(e,t,a,n,r){var s=this;n.sourcePlace=t.placeCodes,n.houseId=a.houseId;var c=(t.placeCodes+"").split("|"),i=c.length&&Number.isInteger(parseInt(c[0]));if(i&&(c=c.map((function(e){return parseInt(e)}))),e.hasMatch){var o=e.mainPlaces.filter((function(e){return 1==e.selected})),l=o.map((function(e){if(i){var t=e.code.split("-");return parseInt(t[t.length-1])}return e.code}));D(l,c)?(n.matchStatus=1,n.parkingIds=o.map((function(e){return e.parkingId})),r(n)):(n.msg="车位不匹配",r(n))}else{var u="产权月卡"===e.typeName?e.mainPlaces:this.fixParks;u=u.filter((function(e){return!e.selectedByOther&&!s.usedParkingIds.includes[e.parkingId]}));var h,d=c.reduce((function(e,t){var a=u.find((function(e){if(i){var a=e.code.split("-");return parseInt(a[a.length-1])===t}return e.code===t}));return a&&e.push(a),e}),[]);if(d.length!==c.length)n.msg="车位不匹配",r(n);else n.matchStatus=1,n.parkingIds=d.map((function(e){return e.parkingId})),"产权月卡"!==e.typeName&&(n.mainPlaces=d),n.matchData={houseIds:[a.houseId],selectedParkingIds:n.parkingIds},this.usedHouseIds.push(a.houseId),(h=this.usedParkingIds).push.apply(h,Object(g["a"])(n.parkingIds)),r(n)}},parseExcel:function(e){var t=this;return new Promise((function(a,n){S(e).then((function(e){var n=y.a.read(e,{type:"binary"}),r=n.Sheets[n.SheetNames[0]],s=y.a.utils.sheet_to_json(r),c=Object.keys($),i=s.reduce((function(e,t){var a=c.reduce((function(e,a){return Object.assign(e,Object(m["a"])({},$[a],t[a]))}),Object.create(null)),n=H(a.name),r=e[n]||[];return r.push(a),e[n]=r,e}),Object.create(null));t.sourceMap=Object.freeze(i),console.log(i),a(i)})).catch(n)}))},fetchMainData:function(){var e=this,t=Object.keys(this.search).filter((function(t){return""!==e.search[t]})).reduce((function(t,a){return Object.assign(t,Object(m["a"])({},a,e.search[a]))}),{}),a=Object(f["a"])({pageNum:1,pageSize:9999},t);return new Promise((function(e,t){_(a).then((function(t){e(t.records)})).catch(t)}))},handleSizeChange:function(e){this.pageSize=e,this.fetchTable(!0)},handleCurrentChange:function(e){this.pageNum=e,this.fetchTable()},fetchTable:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(this.pageNum=1),this.tableData=this.filterData.slice((this.pageNum-1)*this.pageSize,this.pageNum*this.pageSize),console.log(this.tableData)},batchSaveStage:function(e){return Promise.all(e.map((function(e){return C(Object(f["a"])({cardId:e.cardId},e.matchData))})))},saveAllStage:function(){var e=this;return Object(p["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.filterData.filter((function(e){return e.matchData})),a.length){t.next=4;break}return e.$message.info("没有可以暂存的数据"),t.abrupt("return");case 4:e.saving=!0,n=0;case 6:if(!(n<a.length)){t.next=21;break}return console.log(n),t.prev=8,t.next=11,e.batchSaveStage(a.slice(n,n+3));case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](8),console.log(t.t0);case 16:return t.prev=16,n+=3,t.finish(16);case 19:t.next=6;break;case 21:return t.next=23,e.resetMatch();case 23:e.saving=!1;case 24:case"end":return t.stop()}}),t,null,[[8,13,16,19]])})))()},exportErrors:function(){var e=this.filterData.filter((function(e){return!!e.msg}));if(e.length){e=e.map((function(e){return{"车主姓名":e.name,"联系方式":e.phone,"月卡类型":e.typeName,"主数据车牌":e.mainCarnos,"台账车牌":e.sourceCarnos,"主数据房屋":e.mainHouses.map((function(e){return e.houseName})).join("|"),"台账房屋":e.sourceHouse,"主数据车位":e.mainPlaces.map((function(e){return e.code})).join("|"),"台账车位":e.sourcePlace,"错误信息":e.msg}}));var t=M(this.projectList,this.search.projectId,"communityId","name"),a=y.a.utils.json_to_sheet(e),n=y.a.utils.book_new();y.a.utils.book_append_sheet(n,a,"sheet1"),y.a.writeFile(n,"".concat(t,"主数据匹配结果表").concat(N(Date.now(),"yyyyMMdd-hhmmss"),".xls"))}else this.$message.info("无错误数据")}},created:function(){this.init()},mounted:function(){console.log("mounted")}},L=T,R=(a("de16"),Object(c["a"])(L,h,d,!1,null,null,null)),q=R.exports;n["default"].use(u["a"]);var F=[{path:"/",name:"Home",component:q},{path:"*",redirect:"/"}],B=new u["a"]({mode:"hash",routes:F}),A=B,J=(a("b059"),a("9dd5"),a("5c96")),U=a.n(J);a("0fae");n["default"].use(U.a,{size:"small"}),n["default"].config.productionTip=!1,new n["default"]({router:A,render:function(e){return e(l)}}).$mount("#app")},"7c55":function(e,t,a){"use strict";a("2395")},"8d91":function(e,t,a){},"9dd5":function(e,t,a){},b059:function(e,t,a){},de16:function(e,t,a){"use strict";a("8d91")}});