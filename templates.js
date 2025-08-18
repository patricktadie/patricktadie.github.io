


// template parts
function header(){
    return `
        <div class="header"><a href="index.html">Free Html Templates</a></div>
    `
}
    
function footer(){
    return `
        <div class="footer"><a href="index.html">Devspot</a></div>
    `
}

function sites(sites){
    return `
        <div class="sites">
            <span>Our Recent Templates</span>
            <div>
                ${sites.map(site => `
                    <div class="site-item">
                        <div>
                            <img src="${site.img}">
                            <a href="sites/${site.slug}/index.html" target="_blank"><span>View</span></a>
                        </div>
                        <button slug="${site.slug}" class="download">${site.slug}</button>
                    </div>
                `).join(" ")}
            </div>
        </div>
    `
}

function desc(desc){
    return `
        <div class="desc">
            <span>Why Our HTML Templates Stands Out</span>
            <div>
                ${desc.map(item => `
                    <div class="desc-item">
                        <span>${item.title}</span>
                        <span>${item.content}</span>
                    </div>
                `).join(" ")}
            </div>
        </div>
    `
}



// inner root templates
function home(data){
    return `
        ${header()}
        <div class="main">
            ${desc(data.desc)}
            ${sites(data.sites)}
        </div>
        ${footer()}    
    `
}



// export templates
export const templates = {
    "index.html":home
}











