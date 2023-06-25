const creat = document.querySelector(".sub");
const display= document.querySelector(".display-det");
const box= document.querySelectorAll(".student-box");
const data= document.querySelectorAll(".para");
creat.addEventListener("click",(event)=>
{
    event.preventDefault();
    let a=document.getElementById('name').value;
    let b=document.getElementById('number').value;
    let c=document.getElementById('email').value;
    let d=document.getElementById('age').value;
    let e=document.getElementById('add').value;
    let f=document.querySelector('input[name="gender"]:checked').value;
    let g=document.querySelector('#img');

    if(!a || !b || !c || !d || !e || !f || !g )
    {
        alert('FILL ALL THE BOX');
        return;
    }
    let inp=document.createElement("div");
    inp.className = "student-box";
    let par=document.createElement("p");
    let par2=document.createElement("p");
    let par3=document.createElement("p");
    let par4=document.createElement("p");
    let par5=document.createElement("p");
    let par6=document.createElement("p");
    par.className="para";
    par2.className="para2";
    par3.className="para3";
    par4.className="para4";
    par5.className="para5";
    par6.className="para6";
    par.innerHTML="Name = "+a;
    par2.innerHTML="Phone No.= "+b;
    par3.innerHTML="Email Id = "+c;
    par4.innerHTML="Age = "+d;
    par5.innerHTML="Address = "+e;
    par6.innerHTML="Gender = "+f;
    display.appendChild(inp).appendChild(par).appendChild(par2).appendChild(par3).appendChild(par4).appendChild(par5).appendChild(par6);
    let img=document.createElement("img");
    img.className="picimg";
    img.src=g;
    display.appendChild(inp).appendChild(img);
    let image = document.querySelector('.picimg');
    let file = document.querySelector('#img').files[0];
  
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
      image.src = reader.result;
    });
})