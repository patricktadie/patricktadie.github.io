

(() => {

    const ob = new IntersectionObserver((entries, observer) =>{

        entries.forEach(entry => {

            if(entry.isIntersecting) entry.target.setAttribute("intersected", "")
        })

    },{
        root:null,

        threshold:0.7
    })

    document.querySelectorAll(".template-description li").forEach(item =>{

        ob.observe(item)
    })

    document.querySelectorAll(".template-list li").forEach(item =>{

        ob.observe(item)
    })








    
})()