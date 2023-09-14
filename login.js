//    document.getElementById('sign').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
// });

document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "none";
}); 
// document.querySelector('.bg-modal').addEventListener("click", function() {
// 	document.querySelector('.bg-modal').style.display = "none";
// }); 
document.querySelector('#form').addEventListener("submit",inputs)



function inputs(event){
    event.preventDefault();
    let phone=document.querySelector('#phonenum').value;   
    let modi=Math.floor(phone);
    //console.log(modi.length)
    if(typeof(modi)==='number'){
        if(phone.length===10){
            //console.log(modi)
            //document.getElementById("phonenum").innerHTML="";
            newdiss(event)
            //document.querySelector('#newdis').a
        }
        else{
            // console.log("wrong number")
            // var card=document.createElement("div");
            document.querySelector('#display').innerText="Wrong number";
        }
    }
    else{
        //console.log("wrong character")
        document.querySelector('#display').innerText="Wrong character";
    }
}

//document.querySelector('.button').addEventListener('click',newdiss)

function newdiss(event){
    document.querySelector('form').innerHTML="";
    
    event.preventDefault()
    
    var card=document.createElement("div")

    var heading=document.createElement("h2")
    heading.innerText="Enter OTP to continue";

    var innercard=document.createElement("div");
    var inputotp1=document.createElement("input");
    inputotp1.innerText="";
    var inputotp2=document.createElement("input");
    inputotp2.innerText="";
    var inputotp3=document.createElement("input");
    inputotp3.innerText="";
    var inputotp4=document.createElement("input");
    inputotp4.innerText="";

    innercard.append(inputotp1,inputotp2,inputotp3,inputotp4);

    var innercardtext=document.createElement("div");
    var leftw=document.createElement("p")
    leftw.innerText="Change Number";

    var rightw=document.createElement("p")
    rightw.innerText="Resend Otp";

    innercardtext.append(leftw,rightw);

    var inputsubmit=document.createElement("input");
    inputsubmit.innerText="Continue";
    inputsubmit.setAttribute("type","submit")
    inputsubmit.setAttribute("id","continuebtn")
    inputsubmit.setAttribute("class","button1")
    
    var alertMessage = document.createElement("p");
    alertMessage.innerText = "Enter the OTP: 8864";
    alertMessage.style.color = "red"; 
    

    var underbuttontext=document.createElement("p")
    underbuttontext.innerText="By clicking continue, you agree to our Privacy Policy";

    card.append(heading,innercard,innercardtext,inputsubmit,underbuttontext)
    document.querySelector("#newdis").append(card)

    document.querySelector('#continuebtn').addEventListener("click",savelogin)
    function savelogin(event){
        event.preventDefault();
     localStorage.setItem("checkLogin","Yes");
    window.location.href="index.html"
    // console.log("eeeee")
    }

}
let cross = document.querySelector(".close");
cross.addEventListener("click",function(){
    window.location.href = "index.html";
});