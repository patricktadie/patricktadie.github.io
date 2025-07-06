

import { slideShow } from "/static/js/carousel.js"

slideShow(document.querySelector(".slide-show"))


// read post data
fetch("/post_data.json")
.then(res => res.json())
.then(posts => {
    document.querySelector(".post-list").innerHTML = posts.map(post => `
        <div class="post-preview">
            <a href="/${post.content}">${post.title}</a>
            <span>${post.date}</span>
        </div>
    `).join("")

    document.querySelector(".root").dispatchEvent(new CustomEvent("post-list-ready", {bubbles:true}))
})


// load post content
document.querySelector(".root").addEventListener("post-list-ready",()=>{
    document.querySelectorAll(".post-preview :first-child").forEach(item =>{
        item.addEventListener("click", e => {
            e.preventDefault()
            fetch("/post_content/"+item.getAttribute("href").split("/")[1])
            .then(res => res.text())
            .then(content => {
                document.querySelector(".post-content").innerHTML=content
                document.querySelector(".post-wrapper").setAttribute("show", "")
                document.querySelector(".root").dispatchEvent(new CustomEvent("post-content-ready", {bubbles:true}))
            })
        })
    })
})

document.querySelector(".post-wrapper").addEventListener("click",e =>{
    if(e.target == document.querySelector(".post-wrapper"))
        document.querySelector(".post-wrapper").removeAttribute("show")
})

document.querySelector(".post > button").addEventListener("click",()=>{
    document.querySelector(".post-wrapper").removeAttribute("show")
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
                    if(entry.target.hasAttribute("side-open")) entry.target.removeAttribute("side-open")
                }
            }
        }
    })
})

resize.observe(document.body)



// nav
document.querySelector(".side-content > button").addEventListener("click",()=>{
    document.body.removeAttribute("side-open")
})

document.querySelector(".main-content > button").addEventListener("click",()=>{
    document.body.setAttribute("side-open", "")
})

document.querySelector(".transparent").addEventListener("click",()=>{
    document.body.removeAttribute("side-open")
})

document.querySelectorAll("a[nav-item]").forEach(item => {
    item.addEventListener("click", e =>{
        e.preventDefault()
        const origin=20
        const top=document.querySelector("."+item.getAttribute("href").split("/")[1]).getBoundingClientRect().top - origin
        window.scrollTo({top: window.scrollY + top ,behavior: "smooth"})
        if(document.body.hasAttribute("side-open")) document.body.removeAttribute("side-open")
    })
})


// blog content
document.querySelector(".root").addEventListener("post-list-ready", ()=>{
    const limit = 10
    const posts = document.querySelectorAll(".post-preview")
    if(posts.length > limit) for(let i=limit; i<posts.length; i++) posts[i].setAttribute("not-show", "")
    else document.querySelector(".blog-content > button").setAttribute("not-show", "")
})

document.querySelector(".blog-content > button").addEventListener("click", e =>{
    document.querySelectorAll(".post-preview").forEach(item => {
        if(item.hasAttribute("not-show")) item.removeAttribute("not-show")
    })

    e.target.setAttribute("not-show", "")
})



// education
let current = null
document.querySelectorAll(".education-item").forEach(item => {
    item.addEventListener("click", e => {
        if(e.target == item.querySelector("button")){
            if(current != item){
                if(current) current.removeAttribute("active")
                current = item
                current.setAttribute("active", "")
            }
            else{
                current.removeAttribute("active")
                current = null
            }
        }
    })
})



// section tracker
let active = null
document.addEventListener("scroll", ()=>{
    const origin = 20 // section height must be greater than this to avoid multiple selection at once
    let section = null
    document.querySelectorAll(".main-content > div:not(.transparent, .post-wrapper)").forEach(item => {
        if(item.getBoundingClientRect().top - origin <= 0){
            if(!section) section = item
            else if(item.getBoundingClientRect().top - origin > section.getBoundingClientRect().top - origin) section = item
        }
    })
    if(active != section){
        if(active) document.querySelector('a[nav-item][href="/'+active.classList[0]+'"]').removeAttribute("active")
        active = section
        document.querySelector('a[nav-item][href="/'+active.classList[0]+'"]').setAttribute("active", "")
    }
})



// contact form
const contactInfo={
    name:"",
    email:"",
    subject:"",
    message:""
}


document.querySelector(".contact-form button").addEventListener("click", ()=>{

    const name = document.querySelector(".contact-form :first-child")
    const email = document.querySelector(".contact-form :nth-child(2)")
    const subject = document.querySelector(".contact-form :nth-child(3)")
    const message = document.querySelector(".contact-form :nth-child(4)")

    let valid = true

    if(/abc/.test(name.value)) contactInfo.name = name.value
    else valid=false
  
    if(/abc/.test(email.value)) contactInfo.email = email.value
    else valid=false

    if(/abc/.test(subject.value)) contactInfo.subject = subject.value
    else valid=false;

    if(/abc/.test(message.value)) contactInfo.message = message.value
    else valid=false
    

    if(valid){

        // message

        window.alert("message sent")
    }

    else window.alert("form invalid")

})




// emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
//   user_name: 'John Doe',
//   user_email: 'john@example.com',
//   message: 'Hello from JavaScript!'
// })

// emailjs.init("YOUR_USER_ID")



