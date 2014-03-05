var questionsDB = [
/*
 * {
 *  title: ''
 *  ,description: ''
 *  ,answers: [] || ''
 *  ,answer: [] || ''
 * }
 */
    {
        title: '自我介绍'
        ,answer: [
            '表述能力'
            ,'工作信息获取'
            ,'重点关注信息'
        ]
    }
    // html && css
    ,{
        title: '简单介绍CSS盒模型'
        ,answer: [
            '总宽度:  width + padding-left + padding-right + border-left + border-right'
            ,'IE总宽度:  width'
            ,'CSS3 box-sizing: border-box|content-box(default)'
        ]
    }
    ,{
        title: 'CSS样式优先级'
        ,description: '几个不同的css样式规则都指向同一个dom元素时，哪个样式生效？'
        ,answer: [
            '内联样式 [1.0.0.0]'
            ,'ID选择器 [0.1.0.0]'
            ,'类，属性，伪类 选择器 [0.0.1.0]'
            ,'元素标签，伪元素 选择器 [0.0.0.1]'
        ]
    }
    ,{
        title: '介绍所知道的浏览器hack技巧'
        ,answer: [
            'IE6: _property: value'
            ,'IE6+: property: value\\9'
            ,'IE6/7: *property: value'
            ,'IE8: @media \\0screen {}'
            ,'IE条件注释'
        ]
    }
    ,{
        title: '讲讲inline,inline-block有什么区别？IE低端版本的inline-block如何实现?'
        ,answer: [
            'hasLayout: 有哪些触发方式?'
            ,'height: (any value except auto)'
            ,'float: (left or right)'
            ,'position: absolute'
            ,'width: (any value except auto)'
            ,'writing-mode: tb-rl'
            ,'zoom: (any value except normal)'
        ]
    }
    ,{
        title: 'CSS清除浮动方法, 及使用场景'
        ,answer: [
            'clear:both;'
            ,'overflow:auto;_zoom:1'
            ,'overflow:hidden'
            ,':after 伪类元素'
        ]
    }
    ,{
        title: 'css3'
        ,answers: [
            'transition是干什么用的:  transition: width 2s;'
            ,'animation创建一个loading动画, 请写出关键代码'
            ,'js如何在css动作或者动画结束后执行callback'
        ]
        ,answer: [
            '    animation-name: myfirst;'
            ,'    animation-duration: 5s;'
            ,'    animation-timing-function: linear;'
            ,'    animation-delay: 2s;'
            ,'    animation-iteration-count: infinite;'
            ,'    animation-direction: alternate;'
            ,'    animation-play-state: running;'
            ,'    transform:rotate(7deg)'
            ,'transitionend'
            ,'animationstart'
            ,'animationiteration'
            ,'animationstart'
        ]
    }
    // javascript 库或框架的了解检查
    ,{
        title: 'jQuery'
        ,answers: [
            '$.ready()可以在domready之后队列化的执行回调函数。如果我希望延后$.ready的执行（比如，我希望在某张图片加载完之后才能执行；而图片加载完和domready的顺序不能确定）'
            ,'讲讲你对jQuery.Deferred的理解？'
        ]
        ,answer: [
            'jQuery.holdReady()'
            ,'jQuery.Callbacks()：请介绍其使用方法'
            ,'toggleClass: 方法介绍'
            ,'简单说，deferred对象就是jQuery的回调函数解决方案。在英语中，defer的意思是"延迟"，所以deferred对象的含义就是"延迟"到未来某个点再执行。'
        ]
    }
    // javascript 原生语法检查
    ,{
        title: '在指定的dom元素上hover时显示tooltip'
        ,answers: [
            '将该功能扩展成jQuery插件的关键代码？'
        ]
        ,answer: [
            'jQuery offset()'
            ,'element.offsetParent'
            ,'element.offsetLeft'
            ,'element.offsetTop'
        ]
    }
    ,{
        title: '数组a=[0,1,2]，数组b=[a,b,c]'
        ,answers: [
            '合并这2个数组'
            ,'删除新数组中的第二个元素'
        ]
        ,answer: [
            'concat'
            ,'splice'
            ,'ES5新增了一些方法，简单列举？'
            ,'forEach, map, filter, some, every'
            ,'indexOf, lastIndexOf'
            ,'reduce, reduceRight'
        ]
    }
    ,{
        title: 'javascript的本地存储'
        ,answers: [
            '场景一：希望统计从baidu搜索导入的用户，为网站实际贡献了多少PV'
            ,'场景二：提供一个本地的草稿箱功能，防止用户输入过程中由于页面误关闭导致重复输入的问题'
        ]
        ,answer: [
            'cookie: cookie的属性有哪些？path/domain/Expires'
            ,'userdata'
            ,'flash'
            ,'localStorage: 列举几个方法？setItem/getItem'
            ,'sessionStorage'
        ]
    }
    ,{
        title: '"12~12345元": 用javascript检测价格区间是否符合预期'
        ,description: [
            '是一个正整数区间'
            ,'前后的大小需要考虑'
        ]
        ,answer: [
            '如果没用正则匹配的思路，做出来也只能给3分'
            ,'RegExp.test'
            ,'RegExp.exec / RegExp.lastIndex'
            ,'String.indexOf'
            ,'String.lastIndexOf'
            ,'String.match'
            ,'String.replace'
            ,'String.substr'
            ,'String.slice'
            ,'String.substring与slice基本一致; 但是If start > stop, substring will swap the 2 arguments'
        ]
    }
    ,{
        title: '产生10个0~100的随机整数, 并按大小进行排序后输出'
        ,answers: [
            '包含0'
            ,'包含100'
            ,'如果不是10个300w个整数(~=3MB)，又该如何操作?'
            ,' transferable objects 有没有听说过？'
        ]
        ,answer: [
            'parseInt(Math.random()*((100-0)+1), 10)'
            ,'超大数组的管理'
            ,'javascript模拟并行的：setTimeout, xhr'
        ]
    }
    ,{
        title: 'html5为javascript引入的线程技术：web worker'
        ,answers: [
            '使用场景'
            ,'使用注意事项'
        ]
        ,answer: [
            '无法使用：DOM、window对象、document对象、parent对象'
            ,'同源策略'
        ]
    }
    ,{
        title: '执行结果'
        ,description: [
            'var value = 500;'
            ,'var obj = {'
            ,'&#160;&#160;&#160;&#160;value: 0'
            ,'&#160;&#160;&#160;&#160;increment: function() {'
            ,'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;this.value++;'
            ,'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;var ifunc = function() {'
            ,'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;alert(this.value);'
            ,'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;};'
            ,'&#160;&#160;&#160;&#160;&#160;&#160;&#160;&#160;ifunc();'
            ,'&#160;&#160;&#160;&#160;}'
            ,'}'
            ,'obj.increment();'
        ]
        ,answer: [
            '500'
        ]
    }
    ,{
        title: '你们是如何管理前端代码的？'
        ,answers: [
            '为什么会考虑使用gruntjs？gruntjs可以为我们做哪些事情？'
            ,'有没有尝试开发gruntjs plugin?'
        ]
    }
    ,{
        title: 'backboneJS'
    }
    ,{
        title: 'angularJS'
    }
    ,{
        title: '挑选一个做过的项目给我介绍一下？'
        ,answers: [
            '项目内容，对应的技术方案'
            ,'项目中都有哪些角色？你担任什么角色?'
            ,'有哪些难点或者亮点？'
            ,'如果让你来负责重构项目有哪些问题可以处理的更完美？'
        ]
        ,answer: [
            '通过对负责项目了解程度的咨询，侧面了解其工作态度和工作热情' 
            ,'了解项目的开发周期、人力安排以及自己所担任角色'
        ]
    }
    ,{
        title: '哪个项目中用到的JS最复杂，实现了什么功能？遇到的问题，怎么解决'
        ,answer: [
            '功能'
            ,'问题'
            ,'解决问题能力'
        ]
    }
    ,{
        title: '设计一个分页插件'
        ,answers: [
            '异步分页功能'
            ,'需要考虑SEO'
            ,'不同内容展现类型的页面均调用该插件'
        ]
    }
    ,{
        title: 'http状态码解释'
        ,answers: [
            '200', '301', '302', '304'
        ]
        ,answer: [
            '301/302是在server端还是client端实现的跳转？有何区别?'
            ,'server端如何实现：nginx || php'
        ]
    }
    ,{
        title: '用户信息或者行为收集的手段及实现'
        ,answers: [
            '辅助页面性能优化，需要收集哪些信息？如何收集？'
            ,'webapp开发中，更关注哪些问题？'
        ]
        ,answer: [
            '请求发出'
            ,'dns解析'
            ,'服务器响应'
            ,'数据接收完成'
            ,'页面可交互'
            ,'页面加载完成'
            ,'用户浏览器信息: 如何收集用户的UA'
            ,'用户点击行为: 如何通过js跟踪用户点击？'
        ]
    }
    ,{
        title: '了解哪些后端语言？'
        ,answers: [
            'smarty模板有了解吗？include和extends的用法？'
            ,'php使用json的相关函数有哪些？'
            ,'php数组转字符串的函数'
            ,'介绍php的flush的作用和使用场景'
            ,'如果新学一门语言，你认为该如何入门？应该有哪些注意事项？' 
        ]
    }
    ,{
        title: '前端跨域: 请简述原理, 及使用场景'
        ,answers: [
            'jsonp'
            ,'document.domain + iframe'
            ,'postMessage'
            ,'Cross-Origin Resource Sharing'
        ]
        ,answer: [
            'jsonp: 跨多个域'
            ,'document.domain + iframe: 跨多个子域'
            ,'postMessage: 跨多个域，高级浏览器'
            ,'Cross-Origin Resource Sharing: 跨多个域，高级浏览器，需要服务端的支持'
        ]
    }
    ,{
        title: 'xss: Cross-site scripting'
        ,answers: [
            '名词解释'
            ,'场景描述'
        ]
    }
    ,{
        title: 'csrf: Cross-site request forgery'
        ,answers: [
            '名词解释'
            ,'场景描述'
        ]
    }
    ,{
        title: '平台与工具使用'
        ,answers: [
            'Linux使用过吗？有哪些常用的工具和命令？'
        ]
        ,answer: [
            'scp, svn, git, grep, cat, tail'
        ]
    }
    ,{
        title: '研究过哪些开源的代码？requireJS/seaJS了解吗？简单介绍一下？'
        ,answers: [
            '如何定义一个module：define'
            ,'如何引用一个module: require'
            ,'AMD: Asynchronous Module Definition'
            ,'通过什么方式异步的将依赖的js文件引入？这样做有什么好处？'
        ]
    }
    ,{
        title: '如何理解前端测试？了解哪些前端测试的技术或者方法？'
        ,answer: [
            '黑盒测试：比较可靠，但是比较耗时，且很难全覆盖'
            ,'单元测试：产品线的代码进行单元测试的成本比较高'
            ,'功能测试：phantomJS的测试比较片面，watir的测试比较全面'
            ,'phantomjs, watir'
        ]
    }
    , {
        title: '你用哪种编辑器？有没有实现javascript.css.html的autocomplete功能？如何实现的？'
        ,answer: '主要考察在提升工作效率方面的思考'
    }
];
