/**Selecting Important Tags */

const input = document.querySelector('.inputfield input');
const addButton=document.querySelector('.inputfield button');
const todolist = document.querySelector('.todolist');
const pending = document.querySelector('span');
const clear= document.querySelector('.footer button');
//console.log(clear);

input.onkeyup = ()=>{
    let userData=input.value;
    //console.log(userData);
}
show();
addButton.onclick=()=>{
    let userData=input.value;
    let localstore=localStorage.getItem("newtodo");
    if(localstore==null){
        listArr=[];
    }
    else{
        listArr=JSON.parse(localstore);
    }
    listArr.push(userData);
    localStorage.setItem("newtodo",JSON.stringify(listArr));
    show();
}
function show(){
    let localstore=localStorage.getItem("newtodo");
    if(localstore==null){
        listArr=[];
    }
    else{
        listArr=JSON.parse(localstore);
    }
    pending.innerHTML=`You have ${listArr.length} pending tasks`;
    let code='';
    listArr.forEach((element,index) => {
        code+='<li> ' + element + ' <span onclick="deleteA('+index+')"><i class="fas fa-trash"></i></span></li>'       
    });
    todolist.innerHTML=code;
    input.value="";
}

function deleteA(index) {
    let localstore=localStorage.getItem("newtodo");
    listArr=JSON.parse(localstore);
    listArr.splice(index,1);
    localStorage.setItem("newtodo",JSON.stringify(listArr));
    show();
}

clear.onclick=()=>{
    listArr=[];
    localStorage.setItem("newtodo",JSON.stringify(listArr));
    show();
}