var questions;

var body = document.getElementsByTagName('body')[0];
var index = undefined;
var selectFor = false;
document.getElementById('youranswer').addEventListener('keyup', function(evt) {
    evt.stopPropagation();
    return false;
});
body.addEventListener('keyup', function(evt) {
    if (index===undefined) return;
    switch (evt.keyCode) {
        case 37:
        case 38:
        case 75:
            goPrev();
            break;
        case 39:
        case 40:
        case 74:
            goNext();
            break;
    }
});

function goPrev() {
    console.clear();
    if (index <=0) return;
    answerME(index, document.getElementById('youranswer').value);
    show(questions[--index]);
}

function showResult() {
    var rs = 0;
    var tmp = 0;
    var len = questions.length;
    for (var i=0,l=len; i<l; i++) {
        tmp = parseInt(getScore(i), 10);
        if (tmp===0) {
            len -= 1;
            continue;
        }
        rs += tmp;
    }
    console.log('平均得分: '+rs/len);
};

function goNext() {
    console.clear();
    var last = questions.length - 1;
    if (index >= last) return showResult();
    answerME(index, document.getElementById('youranswer').value);
    show(questions[++index]);
}

document.getElementById('prev').addEventListener('click', function() {
    goPrev();
});
document.getElementById('next').addEventListener('click', function() {
    goNext();
});

function hideEle(ele) {
    ele.style.display = 'none';
    return ele;
}
function showEle(ele) {
    ele.style.display = 'block';
    return ele;
}

function show(qs) {
    var q = qs.title,
        d = qs.description,
        a = qs.answers,
        r = qs.answer,
        i = parseInt(getScore(index), 10),
        m = getAnswer(index);
    var eQ = document.getElementById('question'),
        eD = document.getElementById('questionDescription'),
        eA = document.getElementById('answersList'),
        eS = document.getElementById('score'),
        eM = document.getElementById('youranswer');
    eM.value = m;
    var tH = '';
    for (var j=5; j>0; j--) {
        i--;
        tH += '<span' + (i>=0 ? ' class="selected"' : '') + '></span>';
        eS.innerHTML = tH;
    }
    var tH = questions.length + '-' + (index+1) + '：' ;
    if (selectFor) {
        if (isSelected(index)) {
            tH += '<input type="checkbox" checked="checked" onclick="selectMe(this, '+index+')"/>';
        }
        else {
            tH += '<input type="checkbox" onclick="selectMe(this, '+index+')"/>';
        }
    }
    eQ.innerHTML = tH + q;
    if (!d) {
        hideEle(eD);
    }
    else {
        if (d instanceof Array) {
            showEle(eD).innerHTML = d.join('<br/>');
        }
        else {
            showEle(eD).innerHTML = d;
        }
    }
    if (!a) {
        hideEle(eA);
    }
    else {
        showEle(eA).innerHTML = (function(data) {
            var str = '';
            if (data instanceof Array) {
                for (var i=0,l=data.length; i<l; i++) {
                    str += '<li>' + data[i] + '</li>';
                }
            }
            else {
                str = data;
            }
            return str;
        })(a);
    }
    if (r) {
        if (r instanceof Array) {
            for (var i=0,l=r.length; i<l; i++) {
                console.log((i+1)+': '+r[i]);
            }
        }
        else {
            console.log(r);
        }
    }
    console.warn('基本打分标准：1、3、5');
}

function selectQuestions(name) {
    selectFor = name;
}
function isSelected(i) {
    var json = JSON.parse(localStorage.getItem('questions')) || {};
    json[selectFor] = json[selectFor] || [];
    if (json[selectFor].indexOf(i)===-1) return false;
    return true;
}
function selectMe(ele, i) {
    var json = JSON.parse(localStorage.getItem('questions')) || {};
    json[selectFor] = json[selectFor] || [];
    var ipos = json[selectFor].indexOf(i);
    if (ele.checked) {
        if (ipos===-1) {
            json[selectFor].push(i);
        }
    }
    else {
        if (ipos!==-1) {
            json[selectFor].splice(ipos, 1);
        }
    }
    json[selectFor].sort(function(a, b) {return a-b;});
    localStorage.setItem('questions', JSON.stringify(json));
}
function getQuestions(name) {
    var result = [];
    try {
        var json = JSON.parse(localStorage.getItem('questions')) || {};
        var arr = json[name];
        for (var i=0,l=arr.length; i<l; i++) {
            result.push(questionsDB[arr[i]]);
        }
    }
    catch (e) {
    }
    return result;
}

function fillUsers() {
    var json = JSON.parse(localStorage.getItem('questions')) || {};
    var html = [];
    for (var i in json) {
        html.push('<li>'+i+'</li>');
    }
    document.getElementById('users').innerHTML = html.join('');
}

fillUsers();

var name;
document.getElementById('select').addEventListener('click', function() {
    var input = document.getElementById('name');
    if (!input.value) return;
    document.title = input.value;
    name = input.value;
    selectQuestions(name);
    questions = questionsDB;
    hideEle(document.getElementById('form'));
    index = 0;
    show(questions[index]);
    showEle(document.getElementById('main'));
});
document.getElementById('users').addEventListener('click', function(evt) {
    var target = evt.target;
    if (target.nodeName!=='LI') return;
    name = target.textContent;
    document.title = name;
    questions = getQuestions(name);
    if (!questions.length) {
        return alert('请先为'+name+'选题');
    }
    hideEle(document.getElementById('form'));
    index = 0;
    show(questions[index]);
    showEle(document.getElementById('main'));
});

function getScore(i) {
    var key = name;
    var i = 'index[' + i + ']';
    var json = JSON.parse(localStorage.getItem(key)) || {};
    return json[i] ? (json[i].score || 0) : 0;
}
function save(i, score) {
    var key = name;
    var i = 'index[' + i + ']';
    var json = JSON.parse(localStorage.getItem(key)) || {};
    json[i] = json[i] || {};
    json[i].score = score;
    localStorage.setItem(key, JSON.stringify(json));
}

function getAnswer(i) {
    var key = name;
    var i = 'index[' + i + ']';
    var json = JSON.parse(localStorage.getItem(key)) || {};
    return json[i] ? (json[i].answer || '') : '';
}
function answerME(i, answer) {
    if (selectFor) return;
    var key = name;
    var i = 'index[' + i + ']';
    var json = JSON.parse(localStorage.getItem(key)) || {};
    json[i] = json[i] || {};
    json[i].answer= answer;
    localStorage.setItem(key, JSON.stringify(json));
}

document.getElementById('score').addEventListener('click', function(evt) {
    if (evt.target.nodeName!=='SPAN') return;
    var j = 1;
    var target = evt.target;
    while (target.nextElementSibling) {
        target = target.nextElementSibling;
        target.className = '';
    };
    target.className = '';
    var target = evt.target;
    while (target.previousElementSibling) {
        target.className = 'selected';
        target = target.previousElementSibling;
        j++;
        if (j>4) break;
    }
    target.className = 'selected';
    save(index, j);
});

