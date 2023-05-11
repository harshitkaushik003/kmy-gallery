var ellipse = document.getElementById("ellipsis");
var ellipseList = document.getElementsByClassName("ellipse-list");
var body = document.getElementsByTagName("body");
var kizuki = document.getElementsByClassName("kizukis-img");
var save = document.getElementsByClassName("save");
var bookmark = document.getElementsByClassName("fa-bookmark");

var flag = false;
ellipse.addEventListener('click', ()=>{
    flag = !flag;
    if(flag){
        ellipseList[0].style = "transform:translateX(0px); z-index:1;";
        kizuki[5].style = "transform:translateY(100px);"
    }else{
        ellipseList[0].style = "transform:translateX(210px);";
        kizuki[5].style = "transform:translateY(0px);"  
    }
});


for (let i = 0; i < save.length; i++) {
    var flag2 = false;
    save[i].addEventListener('click', ()=>{
       
        if(!flag2){
            bookmark[i].style="color:black";
            flag2 = !flag2;
        }else{
            bookmark[i].style="color:white";
            flag2 = !flag2;
        }
        
    })
}
