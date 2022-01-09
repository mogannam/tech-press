
async function openDropDown(event){
    //console.log("button triggered")
    const element = this.querySelector(".card-body")
    //const myCollapse = new bootstrap.Collapse(element);
    


    
}


const allPosts = document.querySelectorAll('.card')
console.log(`allPosts ${JSON.stringify(allPosts)}`)

allPosts.forEach(aPost => {
    aPost.addEventListener('click', openDropDown)
})