const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button)
  button.addEventListener("click", function(e){
    console.log(e)
    console.log(e.target)
    if(e.target.id === "gray"){
      body.style.backgroundColor = "gray"
      // or body.style.backgroundColor = e.target.id
    }
    if(e.target.id === "pink"){
      body.style.backgroundColor = "pink"
    }
    if(e.target.id === "green"){
      body.style.backgroundColor = "green"
    }
    if(e.target.id === "blue"){
      body.style.backgroundColor = "blue"
    }
  })

})
