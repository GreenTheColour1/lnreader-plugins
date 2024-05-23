var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(i,o){function r(e){try{l(n.next(e))}catch(e){o(e)}}function s(e){try{l(n.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,s)}l((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,n,i,o,r={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(l){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(r=0)),r;)try{if(a=1,n&&(i=2&s[0]?n.return:s[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,s[1])).done)return i;switch(n=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return r.label++,{value:s[1],done:0};case 5:r.label++,n=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(i=r.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){r=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){r.label=s[1];break}if(6===s[0]&&r.label<i[1]){r.label=i[1],i=s;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(s);break}i[2]&&r.ops.pop(),r.trys.pop();continue}s=t.call(e,r)}catch(e){s=[6,e],n=0}finally{a=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:1}}([s,l])}}};Object.defineProperty(exports,"__esModule",{value:1});var a=require("@libs/fetch"),n=require("@libs/filterInputs"),i=require("@libs/novelStatus"),o=new(function(){function n(e){var t,n=this;this.fetchImage=a.fetchFile,this.resolveUrl=function(e,t){return n.site+"/"+e},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/hotnovelpub/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite,this.apiSite=e.sourceSite.replace("://","://api."),this.version="1.0.1",this.filters=e.filters,this.lang=(null===(t=e.options)||void 0===t?void 0:t.lang)||"en"}return n.prototype.popularNovels=function(n,i){var o,r,s,l=i.filters,u=i.showLatestNovels;return e(this,void 0,void 0,(function(){var e,i,c,h=this;return t(this,(function(t){switch(t.label){case 0:return e=this.apiSite+"/books/",e+=u?"new":(null===(o=null==l?void 0:l.sort)||void 0===o?void 0:o.value)||"hot",(null===(r=null==l?void 0:l.category)||void 0===r?void 0:r.value)&&(e=this.apiSite+"/category/"+l.category.value),e+="/?page="+(n-1)+"&limit=20",[4,(0,a.fetchApi)(e,{headers:{lang:this.lang}}).then((function(e){return e.json()}))];case 1:return i=t.sent(),c=[],i.status&&(null===(s=i.data.books.data)||void 0===s?void 0:s.length)&&i.data.books.data.forEach((function(e){return c.push({name:e.name,cover:h.site+e.image,path:e.slug})})),[2,c]}}))}))},n.prototype.parseNovel=function(n){var o,r;return e(this,void 0,void 0,(function(){var e,s,l;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.apiSite+"/book/"+n,{headers:{lang:this.lang}}).then((function(e){return e.json()}))];case 1:return e=t.sent(),s={name:e.data.book.name,path:n,cover:this.site+e.data.book.image,summary:e.data.book.authorize.description,author:e.data.book.authorize.name,status:"updating"===e.data.book.status?i.NovelStatus.Ongoing:i.NovelStatus.Completed},(null===(o=e.data.tags.tags_name)||void 0===o?void 0:o.length)&&(s.genres=e.data.tags.tags_name.join(",")),(null===(r=e.data.chapters)||void 0===r?void 0:r.length)&&(l=[],e.data.chapters.forEach((function(e,t){return l.push({name:e.title,path:e.slug,releaseTime:void 0,chapterNumber:(e.index||t)+1})})),s.chapters=l),[2,s]}}))}))},n.prototype.parseChapter=function(n){var i;return e(this,void 0,void 0,(function(){var e,o,r;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.resolveUrl(n)).then((function(e){return e.text()}))];case 1:return e=t.sent(),(o=(null===(i=e.match(/<div id="content-item" ([\s\S]*?)<\/div>/g))||void 0===i?void 0:i[0])||"")?[4,(0,a.fetchApi)(this.site+"/server/getContent?slug="+n)]:[3,4];case 2:return[4,t.sent().json()];case 3:(r=t.sent()).data&&(o+=r.data.map((function(e){return"<p>"+e+"</p>"})).join("").replace(/\n/g,"</p><p>").replace(/\s/g," ")),t.label=4;case 4:return[2,o.replace(/\.copy right hot novel pub/g,"")]}}))}))},n.prototype.searchNovels=function(n,i){var o;return e(this,void 0,void 0,(function(){var e,i;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.apiSite+"/search",{headers:{"Content-Type":"application/json;charset=utf-8",Referer:this.site,Origin:this.site,lang:this.lang},method:"POST",body:JSON.stringify({key_search:n})}).then((function(e){return e.json()}))];case 1:return e=t.sent(),i=[],e.status&&(null===(o=e.data.books)||void 0===o?void 0:o.length)&&e.data.books.forEach((function(e){return i.push({name:e.name,path:e.slug})})),[2,i]}}))}))},n}())({id:"lanovels",sourceSite:"https://lanovels.com",sourceName:"LaNovels",filters:{sort:{type:n.FilterTypes.Picker,label:"Order",value:"hot",options:[{label:"História quente",value:"hot"},{label:"Nova estória",value:"new"},{label:"História completa",value:"full"}]},category:{type:n.FilterTypes.Picker,label:"Categoria",value:"",options:[{label:"NONE",value:""},{label:"Aventura",value:"aventura"},{label:"Erótico",value:"erotico"},{label:"Fantasia",value:"fantasia"},{label:"Ficção adolescente",value:"ficcao-adolescente"},{label:"Ficção científica",value:"ficcao-cientifica"},{label:"Lobisomens/Vampiros",value:"lobisomens-vampiros"},{label:"Mistério",value:"misterio"},{label:"Paranormal",value:"paranormal"},{label:"Romance",value:"romance"},{label:"Suspense/Terror",value:"suspense-terror"}]}},options:{lang:"pt"}});exports.default=o;