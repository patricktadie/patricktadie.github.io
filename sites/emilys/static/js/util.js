


export function rootResize(){

    const root = document.querySelector("#root")

    root.setAttribute("size", "")

    const resizeObserver = new ResizeObserver(entries => {

        entries.forEach(entry => {

            if(entry.target.offsetWidth >= 800){

                if(entry.target.getAttribute("size")!="large")

                    entry.target.setAttribute("size", "large")
            }
            else if(entry.target.offserWidth > 500 && entry.target.offsetWidth < 800 ){

                if(entry.target.getAttribute("size")!="medium")

                    entry.target.setAttribute("size", "medium")
            }
            else{

                if(entry.target.getAttribute("size")!="small")

                    entry.target.setAttribute("size", "small")
            }
        })
    })

    resizeObserver.observe(root)
}


export function navEvent(){

    const navControl = document.querySelector(".nav-control")

    const nav = document.querySelector(".nav")

    navControl.addEventListener("click", ()=>{

        if(nav.hasAttribute("open")) nav.removeAttribute("open")
        
        else nav.setAttribute("open", "")
    })
}



export function slideShow(slideShow){
    
    const count = slideShow.querySelectorAll(".slide").length
    const slider = slideShow.querySelector(".slider")
    const sliderWrapper = slideShow.querySelector(".slider-wrapper")
    const next = slideShow.querySelector(".next")
    const  prev = slideShow.querySelector(".previous")

    let busy = false
    
    // current position 
    let pos = 0

    // sliders
    const sliders = [
        slider.cloneNode(true),
        slider,
        slider.cloneNode(true)
    ]

    // sliders initial position
    const sliderPos = [- count * 100, 0, count * 100]

    // initialize sliders
    sliders.forEach((slider, index) => {
        slider.style.left = sliderPos[index] + "%"
        slider.style.width = 100 * count + "%"
        slider.style.transition = "left 0.5s"
    })

    // initialize slides
    slideShow.querySelectorAll(".slide").forEach(slide => {
        slide.style.width = 100/count + "%"
    })

    // add sliders to the wrapper
    sliderWrapper.appendChild(sliders[0])
    sliderWrapper.appendChild(sliders[2])

    // <-
    next.addEventListener("click", ()=>{

        if(!busy){

            busy = true

            pos++
    
            if(pos == count){
    
                sliders.forEach((slider, index) => {
                    sliderPos[index] -= 100
                    slider.style.left = sliderPos[index] + "%"
                })
    
                // wait for sliders to reach the indicated position
                setTimeout(()=>{
    
                    // deactivate transition
                    sliders.forEach(slider => {
                        slider.style.transition = ""
                    })
    
                    // reset position to 0
                    pos = 0
    
                    sliderPos[0] = -count * 100
                    sliderPos[1] = 0
                    sliderPos[2] = count * 100
    
                    sliders.forEach((slider, index) => {
                        slider.style.left = sliderPos[index] + "%"
                    })
    
    
                    // wait for slider to reach the indicated position
                    setTimeout(()=>{
    
                        // reactivate transition
                        sliders.forEach(slider => {
                            slider.style.transition = "left 0.5s"
                        })
    
                    }, 100)
    
                },600)
    
            }
            else{
                sliders.forEach((slider, index) => {
                    sliderPos[index] -= 100
                    slider.style.left = sliderPos[index] + "%"
                })
            }

            setTimeout(()=>{
                busy = false
            }, 600)

        }

    })

    // ->
    prev.addEventListener("click", ()=>{

        if(!busy){

            busy = true

            pos--
    
            if(pos == -1){
    
                sliders.forEach((slider, index) => {
                    sliderPos[index] += 100
                    slider.style.left = sliderPos[index] + "%"
                })
    
                // wait for sliders to reach the indicated position
                setTimeout(()=>{
    
                    // deactivate transition
                    sliders.forEach(slider => {
                        slider.style.transition = ""
                    })
    
                    // reset position to count - 1
                    pos = count - 1
    
                    sliderPos[0] = -(count * 100) - (count - 1) * 100
                    sliderPos[1] = - (count - 1) * 100
                    sliderPos[2] = (count * 100) - (count - 1) * 100
    
                    sliders.forEach((slider, index) => {
                        slider.style.left = sliderPos[index] + "%"
                    })
    
                    // wait for slider to reach the indicated position
                    setTimeout(()=>{
    
                        // reactivate transition
                        sliders.forEach(slider => {
                            slider.style.transition = "left 0.5s"
                        })
    
                    }, 100)
    
                },600)
    
            }
            else{
                sliders.forEach((slider, index) => {
                    sliderPos[index] += 100
                    slider.style.left = sliderPos[index] + "%"
                })
            }

            setTimeout(()=>{
                busy = false
            }, 600)

        }

    })


    // end of transition
    // sliders[0].addEventListener("transitionend", ()=>{

    //     busy = false
    // })

}


