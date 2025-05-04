document.addEventListener("DOMContentLoaded", function(){
    console.log("Warning this is a developer-only tool.");
    const CookieButton = document.getElementById("CookieButton");
    const CookieCounterElement = document.getElementById("CookieCounter");
    const SelectBtn1 = document.getElementById("SelectBtn1");
    const SelectBtn2 = document.getElementById("SelectBtn2");
    const SelectBtn3 = document.getElementById("SelectBtn3");
    const SelectBtn4 = document.getElementById("SelectBtn4");
    const SelectBtn5 = document.getElementById("SelectBtn5");
    const SelectBtn6 = document.getElementById("SelectBtn6");
    let NumberofGrannies = 0;
    let NumberofCM = 0;
    let NumberofCC = 0;
    let NumberofCookieClicker = 0;
    let NumberofFastClicker = 0;
    let Numberof1B = 0;
    const NumbGranElement = document.getElementById("GranNumb");
    const NumbCMElement = document.getElementById("CMNumb");
    const NumbCCElement = document.getElementById("CCNumb");
    const NumbCClickElement = document.getElementById("ClickNumb");
    const NumbFCElement = document.getElementById("DragClickNumb");
    const Numb1BElement = document.getElementById("1BNumb");
    let CookieCounter = parseInt(CookieCounterElement.textContent) || 0;
    function CookieAdder(){
        if(NumberofGrannies > 0) CookieCounter = CookieCounter + NumberofGrannies;
        if(NumberofCM > 0) CookieCounter = CookieCounter + NumberofCM * 10;
        if(NumberofCC > 0) CookieCounter = CookieCounter + NumberofCC * 100;
        else CookieCounter += 1; 
        CookieCounterElement.textContent = CookieCounter; 
    };
    CookieButton.onclick = CookieAdder;
    SelectBtn1.onclick = function(){
        if(CookieCounter >= Math.floor(75 + NumberofGrannies * 1.2 + CookieCounter * 0.002)){
            CookieCounter -= Math.floor(75 + NumberofGrannies * 1.2 + CookieCounter * 0.002); 
            CookieCounterElement.textContent = CookieCounter;
            NumberofGrannies += 1;
            NumbGranElement.textContent = NumberofGrannies;
        } 
        else{
            window.alert("Not enough cookies");
        }
    };
    SelectBtn2.onclick = function(){
        if(CookieCounter >= Math.floor(3000 + NumberofCM * 1.2 + CookieCounter * 0.002)){
            CookieCounter -= Math.floor(3000 + NumberofCM * 1.2 + CookieCounter * 0.002); 
            CookieCounterElement.textContent = CookieCounter;
            NumberofCM += 1;
            NumbCMElement.textContent = NumberofCM;
        } 
        else{
            window.alert("Not enough cookies");
        }
    };
    SelectBtn3.onclick = function(){
        if(CookieCounter >= Math.floor(20000 + NumberofCC * 1.2 + CookieCounter * 0.002)){
            CookieCounter -= Math.floor(20000 + NumberofCC * 1.2 + CookieCounter * 0.002); 
            CookieCounterElement.textContent = CookieCounter;
            NumberofCC += 1;
            NumbCCElement.textContent = NumberofCC;
        } 
        else{
            window.alert("Not enough cookies");
        }
    };
    SelectBtn4.onclick = function(){
        if(CookieCounter >= Math.floor(2000000 + NumberofCookieClicker * 1.2 + CookieCounter * 0.002)){
            CookieCounter -= Math.floor(2000000 + NumberofCookieClicker * 1.2 + CookieCounter * 0.002); 
            CookieCounterElement.textContent = CookieCounter;
            NumberofCookieClicker += 1;
            NumbCClickElement.textContent = NumberofCookieClicker; 
            setInterval(CookieAdder, 1000);
        }
        else{
            window.alert("Not enough cookies");
        }
    };
    SelectBtn5.onclick = function(){
        if(CookieCounter >= Math.floor(100000000 + NumberofFastClicker * 1.2 + CookieCounter * 0.002)){
            CookieCounter -= Math.floor(100000000 + NumberofFastClicker * 1.2 + CookieCounter * 0.002); 
            CookieCounterElement.textContent = CookieCounter;
            NumberofFastClicker += 1; 
            NumbFCElement.textContent = NumberofFastClicker;
            setInterval(CookieAdder, 100);
        } 
        else{
            window.alert("Not enough cookies");
        }
    };
    SelectBtn6.onclick = function(){
        if(CookieCounter >= Math.floor(10000000000 + Numberof1B * 1.2 + CookieCounter * 0.002)){
            CookieCounter -= Math.floor(10000000000 + Numberof1B * 1.2 + CookieCounter * 0.002); 
            CookieCounterElement.textContent = CookieCounter;
            Numberof1B += 1;
            Numb1BElement.textContent = Numberof1B;
            setInterval(CookieAdder, 1);
        } 
        else{
            window.alert("Not enough cookies");
        }
    };
});


