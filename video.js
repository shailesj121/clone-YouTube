const portion = document.getElementById("videoPortion")


function videostart() {
portion.addEventListener("mouseover", (e) => {
    if (e.target.id === "") return;

    let videoplayback = document.getElementById(String(e.target.id))

    let innervideo = videoplayback.getElementsByTagName("video-yt")[0]

    videoplayback.addEventListener("mouseenter", async (e) => {

            innervideo.innerHTML =`<video controls autoplay style="width:100%; heigth:100%" class="opacity-0" >
            <source src="${responsData[e.target.id - 1]}" type="video/mp4">
           </video>`
            let hovervideo =  document.getElementsByTagName("video")[0]
            console.log(hovervideo) 
            hovervideo.classList.replace("opacity-0", "opacitytransition-1")
            
    })
    videoplayback.addEventListener("mouseleave", () => {
        innervideo.innerHTML = ""
    })

})
}

let interval = setInterval(() => {
    if (fatched === true) {
        videostart()
        clearInterval(interval)
    }

}, 10)