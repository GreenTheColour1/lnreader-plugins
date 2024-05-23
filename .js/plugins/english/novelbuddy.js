var t=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(i,a){function o(t){try{c(r.next(t))}catch(t){a(t)}}function s(t){try{c(r.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,s)}c((r=r.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,s[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:0};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:1}}([s,c])}}};Object.defineProperty(exports,"__esModule",{value:1});var n=require("cheerio"),r=require("@libs/fetch"),i=function(){function i(){this.id="novelbuddy",this.name="NovelBuddy.io",this.site="https://novelbuddy.io/",this.version="1.0.0",this.icon="src/en/novelbuddy/icon.png"}return i.prototype.parseNovels=function(t){var e=[];return t(".book-item").each((function(n,r){var i,a=t(r).find(".title").text(),o="https:"+t(r).find("img").attr("data-src"),s=null===(i=t(r).find(".title a").attr("href"))||void 0===i?void 0:i.substring(1);if(s){var c={name:a,cover:o,path:s};e.push(c)}})),e},i.prototype.popularNovels=function(i,a){return t(this,void 0,void 0,(function(){var t,a,o;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site,"popular?page=").concat(i),[4,(0,r.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return a=e.sent(),o=(0,n.load)(a),[2,this.parseNovels(o)]}}))}))},i.prototype.parseNovel=function(i){return t(this,void 0,void 0,(function(){var a,o,s,c,u,h,l,f=this;return e(this,(function(p){switch(p.label){case 0:return[4,(0,r.fetchApi)(this.site+i)];case 1:return[4,p.sent().text()];case 2:return a=p.sent(),o=(0,n.load)(a),s={path:i,name:o(".name h1").text().trim()||"Untitled",cover:"https:"+o(".img-cover img").attr("data-src"),summary:o(".section-body.summary").text().trim(),chapters:[]},o(".meta.box p").each((function(t,e){var n=o(e).find("strong").text(),r=o(e).find("a");switch(n){case"Authors :":s.author=r.find("span").map((function(t,e){return o(e).text()})).toArray().join(", ");break;case"Status :":s.status=r.text();break;case"Genres :":s.genres=r.text().trim()}})),c=o("script").text().match(/bookId = (\d+);/)[1],u=[],h=function(i){return t(f,void 0,void 0,(function(){var t,a;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site,"api/manga/").concat(i,"/chapters?source=detail"),[4,(0,r.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return a=e.sent(),(o=(0,n.load)(a))("li").each((function(t,e){var n,r=o(e).find(".chapter-title").text().trim(),i=o(e).find(".chapter-update").text().trim(),a=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"].join("|"),s=new RegExp("(".concat(a,") (\\d{1,2}), (\\d{4})"),"i").exec(i);if(s){var c=+s[3],h=a.indexOf(s[1].toLowerCase()),l=+s[2],f=null===(n=o(e).find("a").attr("href"))||void 0===n?void 0:n.slice(1);f&&u.push({name:r,releaseTime:new Date(c,h,l).toISOString(),path:f})}})),[2,u]}}))}))},l=s,[4,h(c)];case 3:return l.chapters=p.sent().reverse(),[2,s]}}))}))},i.prototype.parseChapter=function(i){return t(this,void 0,void 0,(function(){var t,a;return e(this,(function(e){switch(e.label){case 0:return[4,(0,r.fetchApi)(this.site+i)];case 1:return[4,e.sent().text()];case 2:return t=e.sent(),(a=(0,n.load)(t))("#listen-chapter").remove(),a("#google_translate_element").remove(),[2,a(".chapter__content").html()||""]}}))}))},i.prototype.searchNovels=function(i,a){return t(this,void 0,void 0,(function(){var t,o,s;return e(this,(function(e){switch(e.label){case 0:return t="".concat(this.site,"search?q=").concat(i,"&page=").concat(a),[4,(0,r.fetchApi)(t)];case 1:return[4,e.sent().text()];case 2:return o=e.sent(),s=(0,n.load)(o),[2,this.parseNovels(s)]}}))}))},i.prototype.fetchImage=function(n){return t(this,void 0,void 0,(function(){return e(this,(function(t){return[2,(0,r.fetchFile)(n)]}))}))},i}();exports.default=new i;