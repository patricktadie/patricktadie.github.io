



function carousel(carousel){
    // document.querySelectorAll(".carousel").forEach(carousel => {
        let currentPos = 0
        carousel.querySelector(".indicator-led").setAttribute("active","")
        carousel.setAttribute("transition", "")
        const slideCount = carousel.querySelectorAll(".slide").length
        const slider = [carousel.querySelector(".slider"), carousel.querySelector(".slider").cloneNode(true), carousel.querySelector(".slider").cloneNode(true)] 
        slider[0].style.left=-slideCount-currentPos*100+"%"
        slider[1].style.left=-currentPos*100+"%" // main slider
        slider[2].style.left=slideCount-currentPos*100+"%"
        carousel.appendChild(slider[1])
        carousel.appendChild(slider[2])
        carousel.addEventListener("click", (e)=>{
            if(e.target == carousel.querySelector(".next")){
                currentPos++
                slider[0].style.left=-slideCount-currentPos*100+"%"
                slider[1].style.left=-currentPos*100+"%"
                slider[2].style.left=slideCount-currentPos*100+"%"

                /// timeout semaphore

                if(currentPos == slideCount){ // going back to pos 0 
                    setTimeout(()=>{
                        carousel.removeAttribute("transition")
                        currentPos=0
                        slider[0].style.left=-slideCount-currentPos*100+"%"
                        slider[1].style.left=-currentPos*100+"%"
                        slider[2].style.left=slideCount-currentPos*100+"%"
                        setTimeout(()=>{
                            carousel.setAttribute("transition", "")
                        },1000)
                    },1000)
                }
            }
            else if(e.target == carousel.querySelector(".prev")){
                currentPos--
                slider[0].style.left=-slideCount-currentPos*100+"%"
                slider[1].style.left=-currentPos*100+"%"
                slider[2].style.left=slideCount-currentPos*100+"%"

                /// timeout semaphore


                if(currentPos == -1){ // going back to pos slideCount-1
                    setTimeout(()=>{
                        carousel.removeAttribute("transition")
                        currentPos=slideCount-1
                        slider[0].style.left=-slideCount-currentPos*100+"%"
                        slider[1].style.left=-currentPos*100+"%"
                        slider[2].style.left=slideCount-currentPos*100+"%"
                        setTimeout(()=>{
                            carousel.setAttribute("transition", "")
                        },1000)
                    },1000)
                }
            }
            else{
                carousel.querySelectorAll(".indicator-led").forEach((indicator, index) =>{
                    if(e.target == indicator && index >= 0 && index < slideCount){
                        slideCount = index
                        slider[0].style.left=-slideCount-currentPos*100+"%"
                        slider[1].style.left=-currentPos*100+"%"
                        slider[2].style.left=slideCount-currentPos*100+"%"
                        if(!indicator.hasAttribute("active")) indicator.setAttribute("active","")
                    }
                    else if(indicator.hasAttribute("active")) indicator.removeAttribute("active")
                })
            }
        })
    // })
}





export { carousel }



