function nextPage(path){
    window.location = path
}
let pic = ["2013_1","2015_1","2016_1","2017_1"
,"2015_2","2015_3","2017_2","2018_1","2018_2",
"2018_3","2018_4","2018_5","2018_6","2018_7"]

let pic_container = document.getElementById("pic-container")

let ip = 0;
let pic_card = document.createElement("div")
let img = document.createElement("img")
pic_card.className = "pic-card"
function display_pic(i){
    pic_container.innerHTML =""
    pic_card.innerHTML = ""
    img.src = "../img/"+pic[i] + ".jpg"
    img.id= "img" 
    pic_card.appendChild(img)
    pic_container.appendChild(pic_card)
}
function next_pic(){
   ip +=1
   if(ip == pic.length - 1){
        ip = 0
    }
    display_pic(ip)
}

function back_pic(){ 
    ip -= 1;

    if(ip <= 0){
        ip = pic.length - 1
    }
     display_pic(ip)
    
}