

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



    const live = document.querySelector(".live")
    
    live.addEventListener("click", () => {

        window.open("/sites/"+live.getAttribute("slug"), "_blank")
    })
    


    const download = document.querySelector(".download")

    download.addEventListener("click", () => {

        const script = document.createElement("script")

        script.id = "site-templates"
        
        script.src = "/sites/"+download.getAttribute("slug")+"/templates.js"

        document.querySelector("#site-templates").replaceWith(script)

        script.onload = function(){

            const zip = new JSZip()

            fetch("/sites/"+download.getAttribute("slug")+"/site_map.json").then(res => res.json()).then(async (data) => {

                for(let i=0; i<data.length; i++){

                    if(data[i].type == "template"){
                        
                        const page = await siteTemplates.renderPage(data[i].path)
    
                        const formatted = await prettier.format(page, {parser: "html",  plugins: prettierPlugins})

                        zip.file(data[i].path.slice(1), formatted)
                    }
                    else{

                        const file = await fetch("/sites/"+download.getAttribute("slug")+data[i].path).then(res => res.text())

                        zip.file(data[i].path.slice(1), file)
                    }
                }
                
                const blob = await zip.generateAsync({ type: "blob" });
                
                const link = document.createElement("a");

                link.style.display = "none"
                
                link.href = URL.createObjectURL(blob);
                
                link.download = download.getAttribute("slug")+".zip";
                
                link.click();
            })
        }

    })

})()


