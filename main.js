


function render(path){

    templates.html(path).then(html => {

        root.innerHTML = html

        
        const oldScript = document.querySelector("#script")

        const oldStyle = document.querySelector("#style")


        const newScript = document.createElement("script")

        newScript.id = "script"

        newScript.src = templates.static(path).script
        
        
        const newStyle = document.createElement("link")

        newStyle.id = "style"

        newStyle.rel = "stylesheet"

        newStyle.href = templates.static(path).style

        
        document.body.appendChild(newScript)

        
        document.head.appendChild(newStyle)

        
        newScript.onload = () => {

            oldScript.remove()
        }

        newStyle.onload = () => {

            oldStyle.remove()
        }



        // document.querySelector("#script").replaceWith(script)
        
        // document.querySelector("#style").replaceWith(style)
    })

}



const root = document.querySelector("#root")

let currentPath = "/"

history.replaceState({path:currentPath}, "", currentPath)

render(currentPath)



root.addEventListener("click", e => {

    if(e.target.tagName == "A" && e.target.hostname == location.hostname){

        e.preventDefault()

        if(currentPath != e.target.pathname){

            currentPath = e.target.pathname

            history.pushState({path:currentPath}, "", currentPath)

           render(currentPath)
        }
    }
})



window.addEventListener("popstate", e => {

    currentPath = e.state.path

    render(e.state.path)

})


