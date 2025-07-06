



function slideShow(slideShow){

    // current position
    let currentPos = 0
    
    // number of slides
    const slideCount = slideShow.querySelectorAll(".slide").length
    
    // initialize sliders, slider[1] is the main slider
    const slider = [slideShow.querySelector(".slider"), slideShow.querySelector(".slider").cloneNode(true), slideShow.querySelector(".slider").cloneNode(true)] 

    // slider position
    const sliderPos = [-100, 0, 100]

    // activate default indicator
    slideShow.querySelector(".slide-indicator > button").setAttribute("active","")
    
    // initialize each slider position
    slider[0].style.transform="translate("+sliderPos[0]+"%, 0%)"
    slider[1].style.transform="translate("+sliderPos[1]+"%, -100%)"
    slider[2].style.transform="translate("+sliderPos[2]+"%, -200%)"

    // add transition to each slider
    slider[0].style.transition="transform 1s"
    slider[1].style.transition="transform 1s"
    slider[2].style.transition="transform 1s"

    //slider width
    slider[0].style.width="calc(100% * "+slideCount+")"
    slider[1].style.width="calc(100% * "+slideCount+")"
    slider[2].style.width="calc(100% * "+slideCount+")"

    // slider height
    slider[0].style.height="100%"
    slider[1].style.height="100%"
    slider[2].style.height="100%"

    // slider display
    slider[0].style.display="flex"
    slider[1].style.display="flex"
    slider[2].style.display="flex"

    // add extra slider
    slideShow.querySelector(".slider-wrapper").appendChild(slider[1])
    slideShow.querySelector(".slider-wrapper").appendChild(slider[2])

    // slides width
    slideShow.querySelectorAll(".slide").forEach(item => {
        item.style.width="calc(100% / "+slideCount+")"
    })

    //slider wrapper
    slideShow.querySelector(".slider-wrapper").style.overflow="hidden"

    slideShow.addEventListener("click", e =>{

        // <-
        if(slideShow.querySelector(".next").contains(e.target)){ 

            // update current pos
            currentPos++

            // update indicator
            slideShow.querySelectorAll(".slide-indicator button").forEach((item, index) =>{
                if(index == currentPos) item.setAttribute("active", "")
                else if(item.hasAttribute("active")) item.removeAttribute("active")
            })

            // update slider position
            sliderPos[0]=sliderPos[0] - 100/slideCount
            sliderPos[1]=sliderPos[1] - 100/slideCount
            sliderPos[2]=sliderPos[2] - 100/slideCount

            // update nodes
            slider[0].style.transform="translate("+sliderPos[0]+"%, 0%)"
            slider[1].style.transform="translate("+sliderPos[1]+"%, -100%)"
            slider[2].style.transform="translate("+sliderPos[2]+"%, -200%)"

            if(currentPos == slideCount){

                // update current pos
                currentPos = 0
                    
                // go back to the initial position
                sliderPos[0]=-100
                sliderPos[1]=0
                sliderPos[2]=100

                // update indicator
                slideShow.querySelectorAll(".slide-indicator button").forEach((item, index) =>{
                    if(index == currentPos) item.setAttribute("active", "")
                    else if(item.hasAttribute("active")) item.removeAttribute("active")
                })
        
                // wait for the previous transition to settle 
                setTimeout(()=>{

                    // remove transition on each slider
                    slider[0].style.transition=""
                    slider[1].style.transition=""
                    slider[2].style.transition=""
    
                    // update nodes
                    slider[0].style.transform="translate("+sliderPos[0]+"%, 0%)"
                    slider[1].style.transform="translate("+sliderPos[1]+"%, -100%)"
                    slider[2].style.transform="translate("+sliderPos[2]+"%, -200%)"
                    
                    // wait for the current position to fully etablish before reactivate the transition
                    setTimeout(()=>{
    
                        // add transition to each slider
                        slider[0].style.transition="transform 1s"
                        slider[1].style.transition="transform 1s"
                        slider[2].style.transition="transform 1s"
    
                    },100)
    
                },1000)

            }
           
        }

        // ->
        else if(slideShow.querySelector(".prev").contains(e.target)){

            // update current pos
            currentPos--

            // update indicator
            slideShow.querySelectorAll(".slide-indicator button").forEach((item, index) =>{
                if(index == currentPos) item.setAttribute("active", "")
                else if(item.hasAttribute("active")) item.removeAttribute("active")
            })

            // update slider position
            sliderPos[0]=sliderPos[0] + 100/slideCount
            sliderPos[1]=sliderPos[1] + 100/slideCount
            sliderPos[2]=sliderPos[2] + 100/slideCount

            // update nodes
            slider[0].style.transform="translate("+sliderPos[0]+"%, 0%)"
            slider[1].style.transform="translate("+sliderPos[1]+"%, -100%)"
            slider[2].style.transform="translate("+sliderPos[2]+"%, -200%)"

            if(currentPos == -1){

                // update current pos
                currentPos = slideCount-1

                // update indicator
                slideShow.querySelectorAll(".slide-indicator button").forEach((item, index) =>{
                    if(index == currentPos) item.setAttribute("active", "")
                    else if(item.hasAttribute("active")) item.removeAttribute("active")
                })
                
                // go back to the last position 
                sliderPos[0]=-100 - (slideCount-1)*100/slideCount
                sliderPos[1]=0 - (slideCount-1)*100/slideCount
                sliderPos[2]=100 - (slideCount-1)*100/slideCount
        
                // wait for the previous transition to settle 
                setTimeout(()=>{

                    // remove transition on each slider
                    slider[0].style.transition=""
                    slider[1].style.transition=""
                    slider[2].style.transition=""
    
                    // update nodes
                    slider[0].style.transform="translate("+sliderPos[0]+"%, 0%)"
                    slider[1].style.transform="translate("+sliderPos[1]+"%, -100%)"
                    slider[2].style.transform="translate("+sliderPos[2]+"%, -200%)"

                    // wait for the current position to fully etablish before reactivate the transition
                    setTimeout(()=>{
    
                        // add transition to each slider
                        slider[0].style.transition="transform 1s"
                        slider[1].style.transition="transform 1s"
                        slider[2].style.transition="transform 1s"
    
                    },100)
    
                },1000)

            }
        }

        // indicators
        else{

            // loop throught all slide indicator
            slideShow.querySelectorAll(".slide-indicator > button").forEach((indicator, index) =>{
                
                if(e.target == indicator && index >= 0 && index < slideCount){

                    // next <-
                    if(index - currentPos > 0){

                        // update slider position
                        sliderPos[0]=sliderPos[0] - (index-currentPos)*100/slideCount
                        sliderPos[1]=sliderPos[1] - (index-currentPos)*100/slideCount
                        sliderPos[2]=sliderPos[2] - (index-currentPos)*100/slideCount

                        // update nodes
                        slider[0].style.transform="translate("+sliderPos[0]+"%, 0%)"
                        slider[1].style.transform="translate("+sliderPos[1]+"%, -100%)"
                        slider[2].style.transform="translate("+sliderPos[2]+"%, -200%)"

                        // upadate current position
                        currentPos = index

                        // set indicator as active
                        indicator.setAttribute("active","")
                    }

                    // prev ->
                    else if(index - currentPos < 0){

                        // update slider position
                        sliderPos[0]=sliderPos[0] - (index-currentPos)*100/slideCount
                        sliderPos[1]=sliderPos[1] - (index-currentPos)*100/slideCount
                        sliderPos[2]=sliderPos[2] - (index-currentPos)*100/slideCount

                        // update nodes
                        slider[0].style.transform="translate("+sliderPos[0]+"%, 0%)"
                        slider[1].style.transform="translate("+sliderPos[1]+"%, -100%)"
                        slider[2].style.transform="translate("+sliderPos[2]+"%, -200%)"

                        // upadate current position
                        currentPos = index

                        // set indicator as active
                        indicator.setAttribute("active","")
                    }

                }
                else if(indicator.hasAttribute("active")) indicator.removeAttribute("active")
            })
        }
    })
    
}





export { slideShow }



