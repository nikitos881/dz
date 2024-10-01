const create_button = document.querySelector(".button1")

create_button.addEventListener("click", ()=>{
    fetch("http://localhost:8000/post/create", {
        method:"POST",
        body:JSON.stringify(
            {
                id: "4",
                name: "post4", 
                author: "author4",
                description: "ddd4",
                time: "12:04"
            }),
        headers:{
            "Content-Type": "application/json"
        }
    })
})
