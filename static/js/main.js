




fetch("/post_data.json")
.then(res => res.json())
.then(posts => {
    document.querySelector(".blog .content").innerHTML = posts.map(post => `
        <div class="post-preview">
            <span content="${post.content}">${post.title}</span>
            <span>${post.date}</span>
        </div>
    `).join("")

    document.querySelectorAll(".post-preview :first-child").forEach(item =>{
        item.addEventListener("click", () => {
            fetch("/post_content/"+item.getAttribute("content"))
            .then(res => res.text())
            .then(content => {
                document.querySelector(".post-content").innerHTML=content
                document.querySelector(".root-transparent").setAttribute("show", "")
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




// navigation 



// expand box



// accordion





