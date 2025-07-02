




// read post data
fetch("/post_data.json")
.then(res => res.json())
.then(posts => {
    document.querySelector(".blog .content").innerHTML = posts.map(post => `
        <div class="post-preview">
            <span content="${post.content}">${post.title}</span>
            <span>${post.date}</span>
        </div>
    `).join("")

    document.querySelector(".root").dispatchEvent(new CustomEvent("post-ready", {bubbles:true}))
})


// load post content
document.querySelector(".root").addEventListener("post-ready",()=>{
    document.querySelectorAll(".post-preview :first-child").forEach(item =>{
        item.addEventListener("click", () => {
            fetch("/post_content/"+item.getAttribute("content"))
            .then(res => res.text())
            .then(content => {
                document.querySelector(".post-content").innerHTML=content
                document.querySelector(".root-transparent").setAttribute("show", "")
                document.querySelector(".root").dispatchEvent(new CustomEvent("post-content-ready", {bubbles:true}))
            })
        })
    })
})

document.querySelector(".root-transparent").addEventListener("click",e =>{
    if(e.target == document.querySelector(".root-transparent"))
        document.querySelector(".root-transparent").removeAttribute("show")
})

document.querySelector(".back").addEventListener("click",()=>{
    document.querySelector(".root-transparent").removeAttribute("show")
})



// mobile
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



// nav
document.querySelector(".close-side").addEventListener("click",()=>{
    document.body.removeAttribute("side")
})

document.querySelector(".open-side").addEventListener("click",()=>{
    document.body.setAttribute("side", "")
})

document.querySelector(".main-transparent").addEventListener("click",()=>{
    document.body.removeAttribute("side")
})

document.querySelectorAll(".nav").forEach(item => {
    item.addEventListener("click", ()=>{
        const origin=20
        const top=document.querySelector("."+item.getAttribute("section")).getBoundingClientRect().top - origin
        window.scrollTo({top: window.scrollY + top ,behavior: "smooth"})
        if(document.body.hasAttribute("side")) document.body.removeAttribute("side")
    })
})


// expand box
document.querySelector(".root").addEventListener("post-ready", ()=>{
    const limit = 4
    const posts = document.querySelectorAll(".post-preview")
    if(posts.length > limit) for(let i=limit; i<posts.length; i++) posts[i].setAttribute("not-show", "")
    else document.querySelector(".control").setAttribute("not-show", "")
})

document.querySelector(".control").addEventListener("click", e =>{
    document.querySelectorAll(".post-preview").forEach(item => {
        if(item.hasAttribute("not-show")) item.removeAttribute("not-show")
    })

    e.target.setAttribute("not-show", "")
})



// accordion
let current = null
document.querySelectorAll(".accordion-item").forEach(item => {
    item.addEventListener("click", e => {
        if(e.target == item.querySelector(".accordion-item-title")){
            if(current != item){
                if(current) current.removeAttribute("active")
                current = item
                current.setAttribute("active", "")
            }
        }
    })
})



// section tracker
let active = null
document.addEventListener("scroll", ()=>{
    const origin = 20 // section height must be greater than this to avoid multiple selection at once
    let section = null
    document.querySelectorAll(".section").forEach(item => {
        if(item.getBoundingClientRect().top - origin <= 0){
            if(!section) section = item
            else if(item.getBoundingClientRect().top - origin > section.getBoundingClientRect().top - origin) section = item
        }
    })
    if(active != section){
        if(active) document.querySelector('.nav[section="'+active.classList[0]+'"]').removeAttribute("active")
        active = section
        document.querySelector('.nav[section="'+active.classList[0]+'"]').setAttribute("active", "")
    }
})





// contact form




// download cv



