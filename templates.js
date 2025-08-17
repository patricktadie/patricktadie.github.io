


// template parts
function header(){
    return `
        <header><a href="index.html"><h1>Free Html Templates</h1></a></header>
    `
}
    
function footer(){
    return `
        <footer><a href="index.html"><small>Devspot</small></a></footer>
    `
}

function sites(sites){
    return `
        <section class="sites">
            <h2>Our Recent Templates</h2>
            <ul>
                ${sites.map(site => `
                    <li>
                        <div>
                            <img src="${site.img}">
                            <a href="sites/${site.slug}/index.html" target="_blank"><span>View</span></a>
                        </div>
                        <a href="download/${site.slug}" class="download">${site.slug}</a>
                    </li>
                `).join(" ")}
            </ul>
        </section>
    `
}

function desc(desc){
    return `
        <section class="desc">
            <h2>Why Our HTML Templates Stands Out</h2>
            <ul>
                ${desc.map(item => `
                    <li>
                        <h3>${item.title}</h3>
                        <p>${item.content}</p>
                    </li>
                `).join(" ")}
            </ul>
        </section>
    `
}



// inner root templates
function home(data){
    return `
        ${header()}
        <main>
            ${desc(data.desc)}
            ${sites(data.sites)}
        </main>
        ${footer()}    
    `
}



// export templates
export const templates = {
    "index.html":home
}











