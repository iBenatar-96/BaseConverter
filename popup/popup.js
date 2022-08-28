var src = 2;
var dst = 2;

var gen = document.getElementById('generate');
if(gen){
    gen.addEventListener('click', generate);
}
var sr = document.getElementById('src');
if(sr){
    sr.addEventListener('change',changeSrc);
}
var ds = document.getElementById('dst');
if(ds){
    addEventListener('change',changeDst);
}

function generate(){
    var checkBox = document.getElementById("otherSrc");
    if(checkBox.checked === true){
        src = parseInt(document.getElementById("otherBsrc").value);
    }
    var checkBox2 = document.getElementById("otherDst");
    if(checkBox2.checked === true){
        dst = parseInt(document.getElementById("otherBdst").value);
    }
    var srcVal = document.getElementById('srcVal').value;
    if(src<=10){
        for(let i=0; i<srcVal.length; i++){
            if(srcVal[i]>=src || srcVal[i]<0){
                throw alert("Please enter valid input");
            }
        }
  }
    let semi = parseInt(srcVal,src);
    let res = semi.toString(dst);
   // if(isNaN(res)){
   //     throw alert("Please enter valid input");
   // }
    throw alert(res.toUpperCase());

}

function changeSrc(){
    src = parseInt(document.getElementById('src').value);
}
function changeDst() {
    dst = parseInt(document.getElementById('dst').value);
}
