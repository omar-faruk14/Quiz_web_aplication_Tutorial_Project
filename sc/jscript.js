const MyBtn=document.querySelector(".MyBtn button");
const RulesBox=document.querySelector(".RulesBox");
const exitButton=document.querySelector(".Buttons .ExitButton");

MyBtn.onclick = ()=>{
    RulesBox.classList.add("activeInfo"); 
    }
    
exitButton.onclick = ()=>{
        RulesBox.classList.remove("activeInfo"); 
}
