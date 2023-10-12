const ptePractice = document.querySelector(".ptePractice")
const onShowDropdown = () => {
    const onShowDropdown = document.querySelector(".showDropDown")
    onShowDropdown.style.display="block"
}
const hideDropDown = () => {
    const onShowDropdown = document.querySelector(".showDropDown")
    onShowDropdown.style.display="none"
}
const scoreTargetButtonOne = document.querySelector(".changeBg")
let selected = true;
scoreTargetButtonOne.addEventListener("click",()=>{
    if(selected){
        scoreTargetButtonOne.style.backgroundColor="#49DEFF"
    }
    else{
        scoreTargetButtonOne.style.backgroundColor="#f9fafb"
    }
    selected = !selected
})

const scoreTargetButtonTwo = document.querySelector(".changeBg2")
let selected2 = true;
scoreTargetButtonTwo.addEventListener("click",()=>{
    if(selected2){
        scoreTargetButtonTwo.style.backgroundColor="#49DEFF"
    }
    else{
        scoreTargetButtonTwo.style.backgroundColor="#f9fafb"
    }
    selected2 = !selected2
})

const scoreTargetButtonThree = document.querySelector(".changeBg3")
let selected3 = true;
scoreTargetButtonThree.addEventListener("click",()=>{
    if(selected3){
        scoreTargetButtonThree.style.backgroundColor="#49DEFF"
    }
    else{
        scoreTargetButtonThree.style.backgroundColor="#f9fafb"
    }
    selected3 = !selected3
})

const scoreTargetButtonFour = document.querySelector(".changeBg4")
let selected4 = true;
scoreTargetButtonFour.addEventListener("click",()=>{
    if(selected4){
        scoreTargetButtonFour.style.backgroundColor="#49DEFF"
    }
    else{
        scoreTargetButtonFour.style.backgroundColor="#f9fafb"
    }
    selected4 = !selected4
})

const onSelectedOverall = document.querySelector(".onSelectedOverall")
let selectOverall = true
onSelectedOverall.addEventListener("click",()=>{
    if(selectOverall){
        document.querySelector(".overallChangeNumbers").innerHTML="75"
        document.querySelector(".changeOverallBg").style.backgroundColor="#49DEFF"
    }
    else{
        document.querySelector(".overallChangeNumbers").innerHTML="0"
        document.querySelector(".changeOverallBg").style.backgroundColor="#e5e7eb"
    }
    selectOverall = !selectOverall
})

let calender = false
const onShowCalendner = () => {
    if(calender){
        document.querySelector(".showCalender").style.display="none" 
        document.querySelector(".rotateIcon").style.rotate="0deg"
    }
    else{
        document.querySelector(".showCalender").style.display="flex" 
        document.querySelector(".rotateIcon").style.rotate="-180deg"
    }
    calender = !calender
}