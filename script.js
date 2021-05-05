let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

//fullscreen the canvas
canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.clearRect(0, 0, canvas.width, canvas.height)
ctx.beginPath()
ctx.fillStyle = "rgb(255,128,255)"
ctx.arc(canvas.width / 2, canvas.height / 2, //x y (center of circle)
    Math.min(canvas.width, canvas.height) / 2, //radius
    0, Math.PI * 2) //pizza
ctx.fill()