function compOption(){
    let arr=['r','p','s'];
    let random = Math.floor(Math.random()*3);
    document.querySelector(".c"+arr[random]).style.opacity="100%";
    document.querySelector(".c"+arr[random]).style.transform="scale(1.1)";
    console.log("random = "+random);
    return arr[random];
}

function userOption(u){
    
    for(let i in document.querySelectorAll("img"))
    for(let i in [0,1,2,3,4,5]){
        document.querySelectorAll("img")[i].style.opacity="25%";
        document.querySelectorAll("img")[i].style.cursor="default";
        document.querySelectorAll("img")[i].style.transform="scale(1)";
        document.querySelectorAll("img")[i].style.border="5px solid black";
        document.querySelectorAll("img")[i].setAttribute("onclick","");
    }

    document.querySelector(".head3").style.cursor="pointer";
    document.querySelector(".head3").addEventListener("click",function(){
        document.location.reload();
    });
    document.querySelector(".head3").classList.add("btn");
    
    document.querySelector(".u"+u).style.opacity="100%";
    document.querySelector(".u"+u).style.transform="scale(1.1)";


    let c = compOption();
    let res1 ;
    let res3 ;
    switch(u+c){
        case "rs" :
        case "pr" :
        case "sp" : res = 'You WON'
                    break
        case "rr" :
        case "pp" :
        case "ss" : res = "It's a TIE"
                    break
        case "sr" :
        case "rp" :
        case "ps" : res = "You LOSE"
                    break
    }
    res3="Play AGAIN"
    changeHtml(res,res3);
}

function changeHtml(res,res3){

    document.querySelector(".head1").textContent=res;    
    document.querySelector(".head3").textContent=res3;   
    if(res==="You WON")
        document.querySelector(".container").classList.add("won"); 
    else if(res==="You LOSE")
        document.querySelector(".container").classList.add("lose"); 
    else if(res==="It's a TIE")
        document.querySelector(".container").classList.add("tie"); 
}

if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then(reg=>{
        console.log(reg);
    }).catch(err=>{
        console.log("SW Failed");
        console.log(err);
    });
}