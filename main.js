let x,y,z,mouseX,mouseY,iserase;
    iserase = false;
    let main = document.getElementById("main")
    let turnon = false
    let button = document.getElementById("button")
    let timecontrol = 0
    let shape = document.getElementById("shape")
    main.addEventListener("mouseup",()=>{
        turnon = false
    })
    main.addEventListener("mousedown",()=>{
        turnon = true
    })
    let bounds = main.getBoundingClientRect()
    main.addEventListener("mousemove",(event)=>{
        if(turnon){
            let timenow  =  new Date().getTime()
            if(timenow-timecontrol>25){
                let shapeselector = Math.floor(Math.random()*4)
                console.log("shapeselector : "+shapeselector)
                let p = document.createElement("p")
                main.append(p)
                mouseX = event.x
                mouseY = event.y
                p.style.left = (mouseX-8)+"px"
                p.style.top = (mouseY-95)+"px" 
                console.log(mouseX,mouseY)
                x =Math.floor(Math.random()*255)
                y = Math.floor(Math.random()*255)
                z = Math.floor(Math.random()*255)
                if(shape.value == "square"){
                   p.className = "content"
                   p.style.background = "rgb("+x+","+y+","+z+")"
                }
                else if(shape.value == "circle"){
                    p.className = "content2"
                    p.style.background = "rgb("+x+","+y+","+z+")"
                }
                else if(shape.value =="triangle"){
                    p.className=  "content3"
                    p.style.borderBottomColor = "rgb(" + x + "," + y + "," + z + ")"
                }
                else if(shape.value =="inverted-triangle"){
                    p.className=  "content4"
                    p.style.borderBottomColor = "rgb(" + x + "," + y + "," + z + ")"
                }
                else if(shape.value == "mixed"){
                    if(shapeselector ==0){
                        p.className = "content4"
                        p.style.background = "rgb("+x+","+y+","+z+")"
                    }
                    else if(shapeselector == 1){
                        p.className = "content2"
                        p.style.background = "rgb("+x+","+y+","+z+")"
                    }
                    else if(shapeselector ==2){
                        p.className=  "content3"
                        p.style.borderBottomColor = "rgb(" + x + "," + y + "," + z + ")";
                    }
                    else if(shapeselector ==3){
                        p.className=  "content4"
                        p.style.borderBottomColor = "rgb(" + x + "," + y + "," + z + ")";
                    }
                }
                console.log(x+" "+y+" "+z)
                console.log("working") 
                timecontrol =  timenow
        }
        }
    })
    button.addEventListener("click",()=>{
                 while(main.firstChild){
                    main.removeChild(main.firstChild)
                 }
            })
