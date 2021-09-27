const body = document.getElementById('mainbody');
const bodyorg = document.getElementById('body');
const box = document.getElementById('imgbox');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
changetheme=()=>{
    
    if(body.classList.contains("bg1")){
        console.log("hii it have bg1 ");
        body.classList.add("bg2");
        body.classList.remove("bg1");
        bodyorg.classList.remove("darkbg");
        // box.classList.add("demod");
        // box.classList.remove("demol");
        btn1.style.visibility="visible";
        btn2.style.visibility="hidden";
    }
    else if(body.classList.contains("bg2")){
        body.classList.remove("bg2");
        body.classList.add("bg1");
        bodyorg.classList.add("darkbg");
        // box.classList.add("demol");
        // box.classList.remove("demod");
        btn2.style.visibility="visible";
        btn1.style.visibility="hidden";
        
    }
}
show = ()=>{
  document.getElementById('txt').style.visibility="visible";
}

hide = ()=>{
    document.getElementById('txt').style.visibility="hidden";
  }
  
  fn1 = ()=>{
      btn3.classList.add("buttons");
  }
  fn2 = ()=>{
    btn3.classList.remove("buttons");
}
  
fn3 = ()=>{
    btn4.classList.add("buttons");
}
fn4 = ()=>{
  btn4.classList.remove("buttons");
}
  
fn5 = ()=>{
    btn5.classList.add("buttons");
}
fn6 = ()=>{
    btn5.classList.remove("buttons");
}