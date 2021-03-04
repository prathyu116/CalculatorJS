var elmnt = document.getElementById("result");
var ans = document.getElementById("ans");
var hist = document.getElementById("hist");

function equalOp(){
    ans.innerHTML = eval(elmnt.value);
    hist.innerHTML = elmnt.value + '=' + ans.innerHTML;
    if(ans.innerHTML === "undefined"){
        hist.innerHTML = "0=0";
    }
    clearAll();
}
function clearAll(){
    document.getElementById("result").value = "";
    document.getElementById("ans").innerHTML = "0";
    setSizeLg();
}
function clearEl(){
    var strng = document.getElementById("result").value;
    document.getElementById("result").value = strng.substring(0,strng.length-1)
    if(elmnt.value)
        ans.innerHTML = eval(elmnt.value);
    else
        ans.innerHTML = "0";
    if(((ans.innerHTML).toString()).length <= 7){
        setSizeLg();
    }
}
function writeNum(num){
    if(num === 'x')
        num = '*';
    if(num === '%'){
        setSizeLg();
        var res1 = eval(elmnt.value) * 100;
        if(!isNaN(res1)){
            ans.innerHTML = res1;
            hist.innerHTML = elmnt.value + '=' + res1 + "%";
            clearAll();
        }
        else
            ans.innerHTML = "0";
    }
    else{
        elmnt.value += num;
        if(!isNaN(num)){
            var res = eval(elmnt.value);
            if((res.toString()).length>7){
                var style = document.createElement('style');
                document.head.appendChild(style);
                style.sheet.insertRule('#ans {font-size:18px !important;}');
                style.sheet.insertRule('#eqSign {font-size:18px !important;}');
            }
            else{
                setSizeLg();
            }
            ans.innerHTML = res;
        }
    }
}
function setSizeLg(){
    var style = document.createElement('style');
    document.head.appendChild(style);
    style.sheet.insertRule('#ans {font-size:50px !important;}');
    style.sheet.insertRule('#eqSign {font-size:50px !important;}');
}