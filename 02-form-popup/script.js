let closeForm = document.querySelector("#closeForm");
let contactForm = document.querySelector("#contactForm");
let main = document.querySelector("main")
let openForm = document.querySelector("#openForm")

closeForm.addEventListener("click",()=>{
    main.classList.add("hidee");
})

openForm.addEventListener("click",()=>{
    main.classList.remove("hidee")
})