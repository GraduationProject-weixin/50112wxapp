(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"1ccd":function(i,t,e){"use strict";e.r(t);var n=e("c768"),a=e("d140");for(var r in a)"default"!==r&&function(i){e.d(t,i,(function(){return a[i]}))}(r);e("92d9");var u,s=e("f0c5"),o=Object(s["a"])(a["default"],n["b"],n["c"],!1,null,"168fb9ea",null,!1,n["a"],u);t["default"]=o.exports},"92d9":function(i,t,e){"use strict";var n=e("b9f2"),a=e.n(n);a.a},b70f:function(i,t,e){"use strict";(function(i){e("d3af"),e("921b");n(e("66fd"));var t=n(e("1ccd"));function n(i){return i&&i.__esModule?i:{default:i}}i(t.default)}).call(this,e("543d")["createPage"])},b9f2:function(i,t,e){},c768:function(i,t,e){"use strict";var n,a=function(){var i=this,t=i.$createElement;i._self._c},r=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return n}))},d0e0:function(i,t,e){"use strict";(function(i){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(e("a34a"));function a(i){return i&&i.__esModule?i:{default:i}}function r(i,t,e,n,a,r,u){try{var s=i[r](u),o=s.value}catch(l){return void e(l)}s.done?t(o):Promise.resolve(o).then(n,a)}function u(i){return function(){var t=this,e=arguments;return new Promise((function(n,a){var u=i.apply(t,e);function s(i){r(u,n,a,s,o,"next",i)}function o(i){r(u,n,a,s,o,"throw",i)}s(void 0)}))}}var s={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,jiaolianxingbieOptions:[],jiaolianxingbieIndex:0,jiaoliandengjiOptions:[],jiaoliandengjiIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var t=u(n.default.mark((function t(){var e;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],e=i.getStorageSync("loginTable"),this.tableName=e,"yonghu"==this.tableName&&(this.yonghuxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.yonghuxingbieOptions[0]),"jiaolian"==this.tableName&&(this.jiaolianxingbieOptions="男,女".split(","),this.ruleForm.xingbie=this.jiaolianxingbieOptions[0]),"jiaolian"==this.tableName&&(this.jiaoliandengjiOptions="初级,中级,高级".split(","),this.ruleForm.dengji=this.jiaoliandengjiOptions[0]),this.styleChange();case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{yonghuxingbieChange:function(i){this.yonghuxingbieIndex=i.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},jiaolianxingbieChange:function(i){this.jiaolianxingbieIndex=i.target.value,this.ruleForm.xingbie=this.jiaolianxingbieOptions[this.jiaolianxingbieIndex]},jiaoliandengjiChange:function(i){this.jiaoliandengjiIndex=i.target.value,this.ruleForm.dengji=this.jiaoliandengjiOptions[this.jiaoliandengjiIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var i=u(n.default.mark((function i(){return n.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(this.ruleForm.yonghuming||"yonghu"!=this.tableName){i.next=3;break}return this.$utils.msg("用户名不能为空"),i.abrupt("return");case 3:if(this.ruleForm.mima||"yonghu"!=this.tableName){i.next=6;break}return this.$utils.msg("密码不能为空"),i.abrupt("return");case 6:if(this.ruleForm.xingming||"yonghu"!=this.tableName){i.next=9;break}return this.$utils.msg("姓名不能为空"),i.abrupt("return");case 9:if("yonghu"!=this.tableName||!this.ruleForm.lianxidianhua||this.$validate.isMobile(this.ruleForm.lianxidianhua)){i.next=12;break}return this.$utils.msg("联系电话应输入手机格式"),i.abrupt("return");case 12:if(this.ruleForm.jiaoliangonghao||"jiaolian"!=this.tableName){i.next=15;break}return this.$utils.msg("教练工号不能为空"),i.abrupt("return");case 15:if(this.ruleForm.mima||"jiaolian"!=this.tableName){i.next=18;break}return this.$utils.msg("密码不能为空"),i.abrupt("return");case 18:if("jiaolian"!=this.tableName||!this.ruleForm.nianling||this.$validate.isIntNumer(this.ruleForm.nianling)){i.next=21;break}return this.$utils.msg("年龄应输入整数"),i.abrupt("return");case 21:if("jiaolian"!=this.tableName||!this.ruleForm.lianxifangshi||this.$validate.isMobile(this.ruleForm.lianxifangshi)){i.next=24;break}return this.$utils.msg("联系方式应输入手机格式"),i.abrupt("return");case 24:if("jiaolian"!=this.tableName||!this.ruleForm.shenfenzheng||this.$validate.checkIdCard(this.ruleForm.shenfenzheng)){i.next=27;break}return this.$utils.msg("身份证应输入身份证格式"),i.abrupt("return");case 27:return i.next=29,this.$api.register("".concat(this.tableName),this.ruleForm);case 29:this.$utils.msgBack("注册成功");case 31:case"end":return i.stop()}}),i,this)})));function t(){return i.apply(this,arguments)}return t}()}};t.default=s}).call(this,e("543d")["default"])},d140:function(i,t,e){"use strict";e.r(t);var n=e("d0e0"),a=e.n(n);for(var r in n)"default"!==r&&function(i){e.d(t,i,(function(){return n[i]}))}(r);t["default"]=a.a}},[["b70f","common/runtime","common/vendor"]]]);