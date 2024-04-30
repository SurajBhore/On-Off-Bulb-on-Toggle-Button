
let bulb1 = document.querySelector(".off");
let bulb2 = document.querySelector(".on");
let btn = document.querySelector(".Btn");

   bulb1.classList.remove("bulboff");

    let mode = "off";

      btn.addEventListener("click", () =>{
      
       if(mode==="off"){
        mode ="on";
        btn.innerText =  "TURN OFF";
        bulb2.classList.remove("bulbon");
        bulb1.classList.add("bulboff");
        btn.style.backgroundColor =  "green";
       }else{
        mode ="off";
        btn.innerText =  "TURN ON";
        bulb1.classList.remove("bulboff");
        bulb2.classList.add("bulbon");
        btn.style.backgroundColor =  "black";

       }
})
