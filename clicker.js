console.log("page loaded...");
function login(element){
    if(element.innerText=="login"){
        element.innerText = "logout";
    }else{
        element.innerText ="login";
    }
}
function hide(el){
    el.remove();
}
function message(){
    alert("Ninja was liked!");
}