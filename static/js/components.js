

function accordion(){
    document.querySelectorAll(".accordion").forEach(accordion => {
        accordion.addEventListener("click", (e)=>{
            accordion.querySelectorAll(".accordion-item-title").forEach(title =>{
                if(title == e.target && !title.parentNode.hasAttribute("open")) title.parentNode.setAttribute("open", "")
                else if(title.parentNode.hasAttribute("open")) item.removeAttribute("open")
            })
        })

    })
}




function carousel(){
    document.querySelectorAll(".carousel").forEach(carousel => {
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
    })
}


function sectionTracker(list){
    const max = 20  //this require each section to be at least 20px height
    let current = null //initialize current section
    document.addEventListener("scroll", ()=>{

        //semaphore

        if(current) current.tracker.removeAttribute("current")
        list.forEach(item => {
            if(item.section.getBoundingClientRect().top <= max){
                if(!current) current = item
                else if(current.section.getBoundingClientRect().top < item.section.getBoundingClientRect().top) current = item
            }
        })
        current.tracker.setAttribute("current", "")
    })
}



function scrollToSection(list){
    let current = null
    list.forEach(item => {
        item.tracker.addEventListener("click", ()=>{
            if(current) current.tracker.removeAttribute("current")
            current=item 
            const top = current.section.getBoundingClientRect().top
            if(top > 0) window.scrollTo(0, top+window.scrollY, {behavior: "smooth"})
            else if(top < 0) window.scrollTo(0, -top+window.scrollY, {behavior: "smooth"})
            current.tracker.setAttribute("current", "")
        })
    })
}



function expandBox(){


}



export {accordion, carousel, sectionTracker, scrollToSection, expandBox}



