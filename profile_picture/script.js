const imageTag = document.querySelector(".img-tag")
const inputTag = document.querySelector(".input-tag")

inputTag.addEventListener("change", (e)=>{

    imageTag.src = URL.createObjectURL(e.target.files[0])
    console.log(e.target.files)
})