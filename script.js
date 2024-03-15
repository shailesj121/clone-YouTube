const sidebarToggleButton = document.getElementById("toggleButton")

let toggle = true
let intervals
let pos = 0;
let fatched;
let responsData;


sidebarToggleButton.addEventListener('click', () => {

    const sidebar = document.getElementsByTagName("sidebar")[0]
    sidebar.setAttribute("id", "sidebar");
    sidebar.setAttribute("style", "transition: .7s margin ease-in-out;");

    let sidebarId = document.getElementById("sidebar")
    if (toggle) {
        toggle = false;
        sidebarId.style.marginLeft = -235 + "px"
    }
    else {
        toggle = true;
        sidebarId.style.marginLeft = pos + "px"
    }

});

// const videoPotion = ;
const responsedata = async function () {
    try{
    const fatchingData = fetch("https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json")

    const data = await fatchingData
    const response = await data.json()
    console.log("success")
    console.log(response);
    responsData = response.map((data)=> data.videoUrl)

    if (!response) return console.log("unable to fatch daata");
    const mainVideoPortion = document.getElementById("videoPortion")
    // mainVideoPortion.innerHTML = videoPotion
    response.map((eventdata) => {
        mainVideoPortion.innerHTML += `<div id = "${eventdata.id}"class="flot-lft outervideodiv relative padd-20px border-box">
        <div class="relative">
        <video-yt class="absolute top-0 wid-100per"></video-yt>
        <img class="thumbnailVideo" title="video" src = "${eventdata.thumbnailUrl}">
        </div>

        <div class="flex">
        
          <img title="userimage" class="userimage" src="https://yt3.ggpht.com/VLelNLYpv8sEHNqbZmGji1USVxnlg3IIDqQEiZ6qGHzMXO6nOBJYX7dmIoF2FlEq5PiAN2VDmQ=s68-c-k-c0x00ffffff-no-rj">
         
          <div class="videoinfo mar-top-15px">
            <p class="line-hight-20px">${eventdata.title}</p>
            <p class="color-gray line-hight-25px font-dot88rem ">${eventdata.author}</p>
            <p class="color-gray line-hight-25px font-dot88rem "><span>${eventdata.views}</span><span>${eventdata.uploadTime}</span></p>
          </div>
        </div>
        </div>`
    })
    
    // return response
}
catch{
    console.log("errorrrrrrr.......")
}

}
const datasss = responsedata().then((datas) => {
    fatched = true;
})





const mainWidth = document.getElementsByTagName("main")[0]
const videoPortion = document.getElementById("videoPortion")
window.addEventListener('resize', () => {
    let mainwidthinner = mainWidth.offsetWidth;
    console.log(mainwidthinner)
    if (mainwidthinner >= 1034) {
        videoPortion.classList.remove = "grid-item-3"
        videoPortion.classList = "grid-item-4"
    }
    if (mainwidthinner < 1034 && mainwidthinner >= 1009.6) {
        videoPortion.classList.remove = "grid-item-2"
        videoPortion.classList.remove = "grid-item-4"
        videoPortion.classList = "grid-item-3"
    }
    if (mainwidthinner < 1009.6) {
        videoPortion.classList.remove = "grid-item-3"
        videoPortion.classList = "grid-item-2"
    }

    let dosods = window.innerWidth;
    const sidebar = document.getElementsByTagName("sidebar")[0]
    if (dosods < 1312) {
        console.log(dosods)
        console.log("success2")
        sidebar.classList.add("absolute")
        sidebar.classList.add("dark")
    }
    if (dosods > 1312) {
        sidebar.classList.remove("absolute")
        console.log("success3")

    }
})


