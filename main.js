
import { templates } from "./templates.js"

window.render = {

    pageReady(){

        return fetch("data.json").then(res => res.json()).then(data => {
        
            const root = document.querySelector("#root")
            
            const path = window.location.pathname
            
            const route = path.split("/")
            
            root.innerHTML = templates[route[1] || "index.html"](data)
        
        })   
    }
}






