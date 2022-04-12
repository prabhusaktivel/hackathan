
var label=document.createElement("label");
label.innerHTML="Enter the country name";
label.setAttribute("for","text");

var br=document.createElement("br");

var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","text");
input.setAttribute("required","text");

var br1=document.createElement("br");

var button=document.createElement("button");
button.addEventListener("click",foo);
button.innerHTML="Search";

document.body.append(label,br,input,br1,button);
async function foo(){
  try{  
    let cc=document.getElementById("text").value;
    let res=await fetch(`https://api.nationalize.io?name=${cc}`);
    let res1=await res.json();
    console.log(res1);
    for(var i=0;i<res1.length;i++){
     
       var ele=document.createElement("div");
       ele.style.color="green";
       ele.style.fontSize="32px";
       ele.innerText=`"country":${res1[i].country} "probability":${res1[i].probability}`
       document.body.append(ele);
    
     
    }
    
    }catch (error) {
    console.log(error)
    }
}
foo()