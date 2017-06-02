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

fig.width = Math.random()*20 + 10
xStartPos = 0
fig.x = xStartPos
deltaX = fig.width*2

fig.height = Math.random()*20 + 10
yStartPos = canvas.height + fig.height
fig.y = yStartPos
deltaY = fig.height*2

for (i=0; i<=(canvas.width - (fig.width+deltaX)); i++){
  fig.y = yStartPos

  for (j=0; j<=i; j++){
    rect(fig)
    fig.color= getRandomColor()
    fig.y -= deltaY
    if (fig.y <= -fig.height){break}
  }

  fig.x += deltaX
  fig.color= getRandomColor()
}
