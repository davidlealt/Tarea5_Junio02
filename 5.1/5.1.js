//Esta me la piratée de internet para generar un color random...
function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (x= 0; x< 6; x++ ) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

//Esto ya es mío
var fig = {x:0, y:0, width: 0, height: 0, color: getRandomColor()}

xStartPos = 0
fig.x = xStartPos
fig.width = Math.random()*20 + 10
deltaX = fig.width*1.33

yStartPos = 0
fig.y = yStartPos
fig.height = Math.random()*20 + 10
deltaY = fig.height*1.33

// Area para determinar cuantas veces ejecutar el for
area = Math.ceil(canvas.width/deltaX)*Math.ceil(canvas.height/deltaY)

for (i=0; i<=(area); i++){
  rect(fig)
  if (fig.x >= (canvas.width - (fig.width+deltaX))){
    fig.x = 0 - deltaX
    fig.y += deltaY
  }
  fig.x += deltaX
  fig.color= getRandomColor()
}
