const circular_slider=document.querySelector(".wrapper"),
 slides=document.querySelectorAll(".slides"),
 images=document.querySelectorAll(".slides img")
 item_name=document.getElementById("name"),
 item=document.getElementById("itemid")
const images_name=["image 1","image 2","image 3","image 4","image 5"]
const item_description=[
    {name:"bracelet",desc:"very costly"},
    {name:"ring",desc:"very costly"},
    {name:"earring",desc:"very lorem"},
    {name:"diamond",desc:"very clorem"},
    {name:"amber",desc:"very cheap"}
]
slides.forEach((slide,i)=>{
    slide.onclick=()=>{
     item.firstElementChild.innerHTML=item_description[i].name;
    // item.lastElementClid.innerHTML=item_description[i].desc
    
    item_name.innerHTML=images_name[i]
    circular_slider.style.transform=`rotateZ(-${360/5*(i+2)}deg)` 
   images.forEach((img,i)=>{
    img.style.setProperty('--img-no',2)
    img.classList.remove("active")

   })
  slide.querySelector(img).classList.add("active")


}
})
