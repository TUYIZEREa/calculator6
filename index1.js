let display=document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName('button'));
buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case "C":
                display.innerText ="";
                break;
                case "←":
                    if(display.innerText){
                        display.innerText=display.innerText.slice(0,-1);
                    }
                    
                    case "=":
                        try{
                            display.innerHTML=eval(display.innerText);
                        }catch{
                            display.innerText="HARIMO IKOSA!";
                        }
                        
                    break;
            default:
                display.innerText += e.target.innerText;
            }
    });
});