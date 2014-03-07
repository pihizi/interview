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
        title: '右边栏现在被挤到内容的下面。给我一些不同的方法解决这个问题'
        ,description: [
            '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAf0AAAEGCAIAAADg+9sFAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAFVklEQVR4nO3d0W7iSBRAQbzKf0f58t4HVqzHGA+MMnbwqXqIADfEUqRD64KcaYxxASDjn6NPAIBd6T5Ay8fi/jR9HXIeAPxVY3xebyy7Pz8GwDnM9/TmPAAtug/QovsALboP0KL7AC26D9Ci+wAtug/QovsALboP0KL7AC26D9Ci+wAtug/QovsALboP0KL7AC26D9Ci+wAtug/QovsALboP0PJx5C+fpl/ujvH/47fbG8/aWAPAA0fv96/tXhT8Pujzd4gxFB/gjx3a/Xm+pRxgF0fv9+9N03L+c727ePCZJwJw5+d1/37jvzoLWrh+JDCG9ANsO/Rz3e+l+ABPOFH3fUIA8ISj5zz3s/vVaf51gHM7tLgxX2DXD7Dp6P3+o2n+xsrfLgDgsaP3+wDsS/cBWnQfoEX3AVp0H6BF9wFadB+gRfcBWnQfoEX3AVp0H6BF9wFadB+gRfcBWnQfoEX3AVp0H6BF9wFadB+gRfcBWlb+r/o0fe1/HgDsYxpjHH0OAOzHnAegRfcBWnQfoEX3AVp0H6BF9wFadB+gRfcBWnQfoGXlOg0Xl2oA/o4xPo8+BR50/+LPA3w3G8ofwpwHoEX3AVp0H6BF9wFadB+gRfcBWnQfoEX3AVp0H6BF9wFadB+gRfcBWnQfoEX3AVp0H6BF9wFadB+gRfcBWnQfoEX3AVp0H6BF9wFadB+gRfcBWnQfoEX3AVp0H6BF9wFadB+gRfcBWnQfoEX3AVp0H6BF9wFadB+gRfcBWnQfoEX3AVp0H6BF9wFadB+g5ePRgWn62vM8ANjHNMY4+hwA2I85D0CL7gO06D5Ai+4DtOg+QIvuA7ToPkCL7gO06D5Ai+4DtLg+D7CrMT6PPoW6h92/+PMA382G8icw5wFo0X2AFt0HaNF9gBbdB2jRfYAW3Qdo0X2AFt0HaNF9gBbdB2jRfYAW3Qdo0X2AFt0HaNF9gBbdB2jRfYAW3Qdo0X2AFt0HaNF9gBbdB2jRfYAW3Qdo0X2AFt0HaNF9gBbdB2jRfYAW3Qdo0X2AFt0HaNF9gBbdB2j52Dg2TV+7nQcA+5jGGEefAwD7MecBaNF9gBbdB2jRfYAW3Qdo0X2AFt0HaNF9gBbdB2jZuk4DwLdzAZjdjPG5+rjuA3t71CO+0cb7qzkPQIvuA7ToPkCL7gO06D5Ai+4DtOg+QIvuA7ToPkCL7gO06D5Ai+4DtOg+QIvuA7ToPkCL7gNnNE3PHnq08vb4fMHGy74P3Qdixngt36+u//H8vy3gLH67kR9jeePV1/+zJ/4wug+cxTzKzzR6dZIz391fX+R69/bz/dOv+8DpbNT51vQx/lszX3w9unj8/UO/YL4PlNxyv+1cA/0F+33gjDaG+y+9yOk2+xfdB85mMbfZDvfqgttY/zbwmXv/dwLdB/jVouzvH/oF3QdO5KXJzP2O/nSJX6X7wFk8Gf3FGOdSyf2N7gNnsTqOv/9u/u3bmatf2lm8Bzyz5t3oPnAu21GeH31m5ZsnfpXv7wO06D5Ai+4DtOg+QIvuA7ToPkCL7gO06D5Ai+4DtOg+QIvuA7ToPkCL67IBe5umr6NPIW0aZ7zaHACPmPMAtOg+QIvuA7ToPkCL7gO06D5Ai+4DtOg+QIvuA7ToPkCL7gO06D5Ai+4DtOg+QIvuA7ToPkCL7gO06D5Ai+4DtOg+QIvuA7ToPkCL7gO06D5Ai+4DtOg+QIvuA7ToPkCL7gO06D5Ai+4DtOg+QIvuA7ToPkCL7gO06D5Ai+4DtOg+QIvuA7ToPkCL7gO06D5Ai+4DtOg+QIvuA7ToPkCL7gO06D5Ay7/UErc5qtFnCQAAAABJRU5ErkJggg=="/>'
        ]
    }
    ,{
        title: '分别实现以下两种页面排版'
        ,description: '<img src="data:image/png;base64,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"/>'
        ,answer: [
            '考察CSS清除浮动方法'
            ,'clear:both;'
            ,'overflow:auto;_zoom:1'
            ,'overflow:hidden'
            ,':after 伪类元素'
        ]
    }
    ,{
        title: 'css3'
        ,description: [
            '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKQAAACfCAIAAAD4auV4AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACqklEQVR4nO3d0U6DQBQG4cX0/V8ZL0iIqSURYdn/7Mx3WY1ipofuUhuWdV2bGL5GH4CeY2wQY4MYG8TYIMYGMTaIsUGMDWJsEGODGBvE2CDGBjE2iLFBjA1ibBBjgxgbxNggxgYxNoixQYwNYmwQY4MYG8TYIMYGMTaIsUGMDWJsEGODGBvE2CDGBjE2iLFBjA1ibBBjgxgbxNggxgYxNoixQYwNYmwQY4MYG8TYIMYGMTaIsUHmjb0sh48ffWl2r9EHcJ+3hEd3Itwe37+ZdMPC+rH/l43UeFc2dtfRXJYpnw2LN17lmHeBpl+MDVIhdshOKeQwLoiPnbNWWtfqvbNj55TeRB3MecGx00rXlxrb0h2kxrZ0B6mx1YGxrym1Pjf2NaX2Y8a+rE5vY9+hyHIyI3aRyaguILZb6qcExNZTRsd2rB80OrYeNDT2lGMdvNh0skGGxp5vrLM52XcLvqBmbBBjgxi7g9QzubFBBsWOfOJPz8kGMTbIiNhTXiV9E7lGc7JBjA3ih/FBnGwQY4MYG8TYIMYGMTaIsfvIu3zWfNcLxckGMTaIsUEGxY58B/BOke84ONkgxgYZF3v6M3keJxvE2CCjP8U52Zk8+88ZPdmRW5RZjY49k/h/kTY2iLFvEj/Wzdi3iS/djI1ibJCw2Nn71OrCYs93mSVJWOxm747yYrcKK9uaT8fI2OEqbKk/MvZJZUs3Y59WtnQzNkqd2DXXRFHqxN62ZCa/4DX6AM7YXi+33r1fO5/5Lc8qFXvzM3m7u0enH5uhYOzNHuOWvdDUjXdlY++u5GE03tWPfeRtKfcxJ6Pxbt7YsJB/UWfrpcuMDWJsEGODGBvE2CDGBjE2iLFBjA1ibBBjgxgbxNggxgYxNoixQYwNYmwQY4MYG8TYIMYG+QadjHZDFF2AUAAAAABJRU5ErkJggg=="/>'
        ]
        ,answers: [
            '先画一个圆形，不用canvas'
            ,'让圆形转起来'
        ]
        ,answer: [
            'transition是干什么用的:  transition: width 2s;'
            ,'transfrom使用'
            ,'animation创建一个loading动画, 请写出关键代码'
            ,'js如何在css动作或者动画结束后执行callback'
            ,'    animation-name: myfirst;'
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
        title: '综合考题：随机数、数组、算法'
        ,answers: [
            '[大于等于0，小于等于100]的随机整数'
            ,'产生100个'
            ,'去重'
            ,'排序'
            ,'同样的操作，针对300w个整数(~=3MB)，又该如何操作?'
        ]
        ,answer: [
            'parseInt(Math.random()*((100-0)+1), 10)'
            ,'超大数组的管理'
            ,'javascript模拟并行的：setTimeout, xhr'
            ,'transferable objects 有没有听说过？'
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
            ,'scope & this'
            ,'变量作用域，函数声明阶段'
            ,'this, 调用阶段'
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
    ,{
        title: '补充问题'
    }
];
