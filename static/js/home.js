
if(window.pageReady) await window.pageReady



const ob = new IntersectionObserver((entries, observer) =>{

    entries.forEach(entry => {

        if(entry.isIntersecting) entry.target.setAttribute("intersected", "")
    })

},{
    root:null,

    threshold:0.7
})

document.querySelectorAll(".desc-item").forEach(item =>{

    ob.observe(item)
})

document.querySelectorAll(".site-item").forEach(item =>{

    ob.observe(item)
})



const download = document.querySelectorAll(".download")

download.forEach(item => {

    item.addEventListener("click", async (e) => {
    
        const slug = e.target.getAttribute("slug")
       
        const pageTemplates = await import("/sites/"+slug+"/templates.js").then(mod => mod.pageTemplates)
    
        const data = await fetch("/sites/"+slug+"/data.json").then(res => res.json())
    
        const siteMap = await fetch("/sites/"+slug+"/site_map.json").then(res => res.json())
    
        const zip = new JSZip()
    
        for(let i=0; i<siteMap.length; i++){
    
            if(siteMap[i].type == "template"){
                
                const page = pageTemplates[siteMap[i].route](data)
    
                const formatted = await prettier.format(page, {parser: "html",  plugins: prettierPlugins})
    
                zip.file(siteMap[i].route, formatted)
            }
            else{
    
                const file = await fetch("/sites/"+slug+"/"+siteMap[i].route).then(res => res.text())
    
                zip.file(siteMap[i].route, file)
            }
        }
                
        const blob = await zip.generateAsync({ type: "blob" });
        
        const link = document.createElement("a");
        
        link.href = URL.createObjectURL(blob);
        
        link.download = slug+".zip";
        
        link.click()
    
    })

})



