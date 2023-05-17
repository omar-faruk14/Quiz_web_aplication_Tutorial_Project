const MyBtn=document.querySelector(".MyBtn button");
const RulesBox=document.querySelector(".RulesBox");
const exitButton=document.querySelector(".Buttons .ExitButton");
const ContinueButton = document.querySelector(".Buttons .ContinueButton");
const Questions = document.querySelector(".Questions")

MyBtn.onclick = ()=>{
    RulesBox.classList.add("activeInfo"); 
    }
    
exitButton.onclick = ()=>{
        RulesBox.classList.remove("activeInfo"); 
}

ContinueButton.onclick=()=>{
    Questions.classList.add("activeInfo")
}
