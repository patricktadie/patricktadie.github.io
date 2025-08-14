

(()=>{

    util.rootResize()


    const mobile = document.querySelector(".mobile")

    const desktop = document.querySelector(".desktop")

    const iframe = document.querySelector("iframe")

    mobile.addEventListener("click", ()=>{

        if(!iframe.hasAttribute("mobile")) iframe.setAttribute("mobile", "")
    })

    desktop.addEventListener("click", ()=>{

        if(iframe.hasAttribute("mobile")) iframe.removeAttribute("mobile")
    })


})()


