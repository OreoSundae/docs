const e=JSON.parse('{"key":"v-629e50ca","path":"/front-end/JavaScript.html","title":"JavaScript","lang":"zh-CN","frontmatter":{"title":"JavaScript","icon":"javascript","date":"2024-01-31T00:00:00.000Z","description":"强制转换 Number() 参数为基本类型，按基本转换规则转换。 参数为对象，调用 valueOf 方法（默认情况下返回对象本身）：\\r如果 valueOf 返回基本类型值，则对该值使用 Number 函数；; \\r如果 valueOf 返回的是对象，则改为调用 toString 方法。; \\r如果 toString 返回基本类型值，则对该值使用 Numbe...","head":[["meta",{"property":"og:url","content":"https://cholez.gitee.io/docs/docs/front-end/JavaScript.html"}],["meta",{"property":"og:title","content":"JavaScript"}],["meta",{"property":"og:description","content":"强制转换 Number() 参数为基本类型，按基本转换规则转换。 参数为对象，调用 valueOf 方法（默认情况下返回对象本身）：\\r如果 valueOf 返回基本类型值，则对该值使用 Number 函数；; \\r如果 valueOf 返回的是对象，则改为调用 toString 方法。; \\r如果 toString 返回基本类型值，则对该值使用 Numbe..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-04T15:11:37.000Z"}],["meta",{"property":"article:author","content":"俞文健"}],["meta",{"property":"article:published_time","content":"2024-01-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-04T15:11:37.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-01-31T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-04T15:11:37.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"俞文健\\",\\"url\\":\\"https://github.com/choIez\\"}]}"]]},"headers":[{"level":2,"title":"强制转换","slug":"强制转换","link":"#强制转换","children":[{"level":3,"title":"Number()","slug":"number","link":"#number","children":[]},{"level":3,"title":"String()","slug":"string","link":"#string","children":[]}]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[{"level":3,"title":"执行上下文","slug":"执行上下文","link":"#执行上下文","children":[]},{"level":3,"title":"变量提升","slug":"变量提升","link":"#变量提升","children":[]},{"level":3,"title":"作用域链","slug":"作用域链","link":"#作用域链","children":[]},{"level":3,"title":"闭包","slug":"闭包","link":"#闭包","children":[]}]},{"level":2,"title":"函数（ES6）","slug":"函数-es6","link":"#函数-es6","children":[{"level":3,"title":"rest 参数","slug":"rest-参数","link":"#rest-参数","children":[]},{"level":3,"title":"name 属性","slug":"name-属性","link":"#name-属性","children":[]},{"level":3,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[]}]},{"level":2,"title":"对象","slug":"对象","link":"#对象","children":[{"level":3,"title":"new 关键字","slug":"new-关键字","link":"#new-关键字","children":[]},{"level":3,"title":"descriptor","slug":"descriptor","link":"#descriptor","children":[]},{"level":3,"title":"Object.create","slug":"object-create","link":"#object-create","children":[]},{"level":3,"title":"Object.defineProperty","slug":"object-defineproperty","link":"#object-defineproperty","children":[]},{"level":3,"title":"Object.defineProperties","slug":"object-defineproperties","link":"#object-defineproperties","children":[]},{"level":3,"title":"继承","slug":"继承","link":"#继承","children":[]}]},{"level":2,"title":"对象（ES6）","slug":"对象-es6","link":"#对象-es6","children":[{"level":3,"title":"Object.keys","slug":"object-keys","link":"#object-keys","children":[]},{"level":3,"title":"Object.values","slug":"object-values","link":"#object-values","children":[]},{"level":3,"title":"Object.entries","slug":"object-entries","link":"#object-entries","children":[]},{"level":3,"title":"Object.assign","slug":"object-assign","link":"#object-assign","children":[]},{"level":3,"title":"Object.freeze","slug":"object-freeze","link":"#object-freeze","children":[]},{"level":3,"title":"Object.is","slug":"object-is","link":"#object-is","children":[]},{"level":3,"title":"Object.hasOwn","slug":"object-hasown","link":"#object-hasown","children":[]}]},{"level":2,"title":"数组","slug":"数组","link":"#数组","children":[{"level":3,"title":"arr.push","slug":"arr-push","link":"#arr-push","children":[]},{"level":3,"title":"arr.pop","slug":"arr-pop","link":"#arr-pop","children":[]},{"level":3,"title":"arr.unshift","slug":"arr-unshift","link":"#arr-unshift","children":[]},{"level":3,"title":"arr.shift","slug":"arr-shift","link":"#arr-shift","children":[]},{"level":3,"title":"arr.splice","slug":"arr-splice","link":"#arr-splice","children":[]},{"level":3,"title":"arr.sort","slug":"arr-sort","link":"#arr-sort","children":[]},{"level":3,"title":"arr.reverse","slug":"arr-reverse","link":"#arr-reverse","children":[]},{"level":3,"title":"arr.slice","slug":"arr-slice","link":"#arr-slice","children":[]},{"level":3,"title":"arr.concat","slug":"arr-concat","link":"#arr-concat","children":[]},{"level":3,"title":"arr.join","slug":"arr-join","link":"#arr-join","children":[]},{"level":3,"title":"arr.indexOf","slug":"arr-indexof","link":"#arr-indexof","children":[]},{"level":3,"title":"arr.lastIndexOf","slug":"arr-lastindexof","link":"#arr-lastindexof","children":[]},{"level":3,"title":"arr.forEach","slug":"arr-foreach","link":"#arr-foreach","children":[]},{"level":3,"title":"arr.filter","slug":"arr-filter","link":"#arr-filter","children":[]},{"level":3,"title":"arr.map","slug":"arr-map","link":"#arr-map","children":[]},{"level":3,"title":"arr.reduce","slug":"arr-reduce","link":"#arr-reduce","children":[]}]},{"level":2,"title":"数组（ES6）","slug":"数组-es6","link":"#数组-es6","children":[{"level":3,"title":"Array.of","slug":"array-of","link":"#array-of","children":[]},{"level":3,"title":"Array.from","slug":"array-from","link":"#array-from","children":[]},{"level":3,"title":"arr.includes","slug":"arr-includes","link":"#arr-includes","children":[]},{"level":3,"title":"arr.fill","slug":"arr-fill","link":"#arr-fill","children":[]},{"level":3,"title":"arr.flat","slug":"arr-flat","link":"#arr-flat","children":[]},{"level":3,"title":"arr.find","slug":"arr-find","link":"#arr-find","children":[]},{"level":3,"title":"arr.findIndex","slug":"arr-findindex","link":"#arr-findindex","children":[]}]},{"level":2,"title":"字符串","slug":"字符串","link":"#字符串","children":[{"level":3,"title":"str.indexOf","slug":"str-indexof","link":"#str-indexof","children":[]},{"level":3,"title":"str.lastIndexOf","slug":"str-lastindexof","link":"#str-lastindexof","children":[]},{"level":3,"title":"str.slice","slug":"str-slice","link":"#str-slice","children":[]},{"level":3,"title":"str.substring","slug":"str-substring","link":"#str-substring","children":[]},{"level":3,"title":"str.substr","slug":"str-substr","link":"#str-substr","children":[]},{"level":3,"title":"str.toUpperCase","slug":"str-touppercase","link":"#str-touppercase","children":[]},{"level":3,"title":"str.toLowerCase","slug":"str-tolowercase","link":"#str-tolowercase","children":[]},{"level":3,"title":"str.trim","slug":"str-trim","link":"#str-trim","children":[]},{"level":3,"title":"str.split","slug":"str-split","link":"#str-split","children":[]},{"level":3,"title":"str.search","slug":"str-search","link":"#str-search","children":[]},{"level":3,"title":"str.match","slug":"str-match","link":"#str-match","children":[]},{"level":3,"title":"str.replace","slug":"str-replace","link":"#str-replace","children":[]}]},{"level":2,"title":"字符串（ES6）","slug":"字符串-es6","link":"#字符串-es6","children":[{"level":3,"title":"str.includes","slug":"str-includes","link":"#str-includes","children":[]},{"level":3,"title":"str.startsWith","slug":"str-startswith","link":"#str-startswith","children":[]},{"level":3,"title":"str.endsWith","slug":"str-endswith","link":"#str-endswith","children":[]},{"level":3,"title":"str.repeat","slug":"str-repeat","link":"#str-repeat","children":[]},{"level":3,"title":"str.padStart","slug":"str-padstart","link":"#str-padstart","children":[]},{"level":3,"title":"str.padEnd","slug":"str-padend","link":"#str-padend","children":[]},{"level":3,"title":"str.trimStart","slug":"str-trimstart","link":"#str-trimstart","children":[]},{"level":3,"title":"str.trimEnd","slug":"str-trimend","link":"#str-trimend","children":[]}]},{"level":2,"title":"正则","slug":"正则","link":"#正则","children":[]},{"level":2,"title":"正则（ES6）","slug":"正则-es6","link":"#正则-es6","children":[]},{"level":2,"title":"Set & Map","slug":"set-map","link":"#set-map","children":[{"level":3,"title":"Set","slug":"set","link":"#set","children":[]},{"level":3,"title":"WeakSet","slug":"weakset","link":"#weakset","children":[]},{"level":3,"title":"Map","slug":"map","link":"#map","children":[]},{"level":3,"title":"WeakMap","slug":"weakmap","link":"#weakmap","children":[]}]},{"level":2,"title":"Proxy","slug":"proxy","link":"#proxy","children":[]},{"level":2,"title":"Reflect","slug":"reflect","link":"#reflect","children":[]},{"level":2,"title":"Promise","slug":"promise","link":"#promise","children":[{"level":3,"title":"Promise.resolve","slug":"promise-resolve","link":"#promise-resolve","children":[]},{"level":3,"title":"Promise.reject","slug":"promise-reject","link":"#promise-reject","children":[]},{"level":3,"title":"Promise.all","slug":"promise-all","link":"#promise-all","children":[]},{"level":3,"title":"Promise.allSettled","slug":"promise-allsettled","link":"#promise-allsettled","children":[]},{"level":3,"title":"Promise.any","slug":"promise-any","link":"#promise-any","children":[]},{"level":3,"title":"Promise.race","slug":"promise-race","link":"#promise-race","children":[]},{"level":3,"title":"then 的返回值","slug":"then-的返回值","link":"#then-的返回值","children":[]},{"level":3,"title":"异常穿透","slug":"异常穿透","link":"#异常穿透","children":[]},{"level":3,"title":"中断 Promise 链","slug":"中断-promise-链","link":"#中断-promise-链","children":[]},{"level":3,"title":"任务队列","slug":"任务队列","link":"#任务队列","children":[]}]},{"level":2,"title":"Iterator","slug":"iterator","link":"#iterator","children":[{"level":3,"title":"基本使用","slug":"基本使用","link":"#基本使用","children":[]},{"level":3,"title":"实现原理","slug":"实现原理","link":"#实现原理","children":[]},{"level":3,"title":"for...of","slug":"for-of","link":"#for-of","children":[]},{"level":3,"title":"自定义可迭代对象","slug":"自定义可迭代对象","link":"#自定义可迭代对象","children":[]}]},{"level":2,"title":"Generator","slug":"generator","link":"#generator","children":[{"level":3,"title":"基本使用","slug":"基本使用-1","link":"#基本使用-1","children":[]}]},{"level":2,"title":"async & await","slug":"async-await","link":"#async-await","children":[{"level":3,"title":"async 函数","slug":"async-函数","link":"#async-函数","children":[]},{"level":3,"title":"await 表达式","slug":"await-表达式","link":"#await-表达式","children":[]}]},{"level":2,"title":"Class","slug":"class","link":"#class","children":[]},{"level":2,"title":"DOM","slug":"dom","link":"#dom","children":[{"level":3,"title":"元素节点","slug":"元素节点","link":"#元素节点","children":[]},{"level":3,"title":"查询元素节点","slug":"查询元素节点","link":"#查询元素节点","children":[]},{"level":3,"title":"操作元素节点","slug":"操作元素节点","link":"#操作元素节点","children":[]},{"level":3,"title":"操作元素样式","slug":"操作元素样式","link":"#操作元素样式","children":[]},{"level":3,"title":"操作元素类名","slug":"操作元素类名","link":"#操作元素类名","children":[]},{"level":3,"title":"操作元素属性","slug":"操作元素属性","link":"#操作元素属性","children":[]},{"level":3,"title":"获取元素宽高","slug":"获取元素宽高","link":"#获取元素宽高","children":[]},{"level":3,"title":"获取元素偏移量","slug":"获取元素偏移量","link":"#获取元素偏移量","children":[]},{"level":3,"title":"宽高偏移量函数","slug":"宽高偏移量函数","link":"#宽高偏移量函数","children":[]}]},{"level":2,"title":"事件","slug":"事件","link":"#事件","children":[{"level":3,"title":"事件类型","slug":"事件类型","link":"#事件类型","children":[]},{"level":3,"title":"事件传播","slug":"事件传播","link":"#事件传播","children":[]},{"level":3,"title":"事件委派","slug":"事件委派","link":"#事件委派","children":[]}]}],"git":{"createdTime":1701336017000,"updatedTime":1707059497000,"contributors":[{"name":"choIez","email":"galaxy.nebula2021@gmail.com","commits":4}]},"readingTime":{"minutes":25.89,"words":7768},"filePathRelative":"front-end/JavaScript.md","localizedDate":"2024年1月31日","autoDesc":true}');export{e as data};