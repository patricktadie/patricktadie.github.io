




const resize = new ResizeObserver(entries => {
    entries.forEach(entry => {
        if(document.body == entry.target){
            if(entry.target.offsetWidth <= 700){
                if(!entry.target.hasAttribute("mobile")){
                    entry.target.setAttribute("mobile", "")
                }
            }
            else{
                if(entry.target.hasAttribute("mobile")){
                    entry.target.removeAttribute("mobile")
                    if(entry.target.hasAttribute("side")) entry.target.removeAttribute("side")
                }
            }
        }
    })
})

resize.observe(document.body)


document.querySelector(".close-side").addEventListener("click",()=>{
    document.body.removeAttribute("side")
})

document.querySelector(".open-side").addEventListener("click",()=>{
    document.body.setAttribute("side", "")
})

document.querySelector(".main-transparent").addEventListener("click",()=>{
    document.body.removeAttribute("side")
})



