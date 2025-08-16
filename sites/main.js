





let currentPath = "/"

history.replaceState({path:currentPath}, "", currentPath)

siteTemplates.renderRoot(currentPath)


document.body.addEventListener("click", e => {

    if(e.target.tagName == "A" && e.target.hostname == location.hostname){

        e.preventDefault()

        if(currentPath != e.target.pathname){

            currentPath = e.target.pathname

            history.pushState({path:currentPath}, "", currentPath)

            siteTemplates.renderRoot(currentPath)
        }
    }
})


window.addEventListener("popstate", e => {

    currentPath = e.state.path

    siteTemplates.renderRoot(e.state.path)

})


