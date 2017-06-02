//Esto ya es mío
// SORT FUNCTION
function sortArray(myArray){
  var tempval
  for (j=0; j<myArray.length; j++){
    for (i=0; i<myArray.length; i++){
      if(myArray[i] > myArray[i+1]) {
        tempval = myArray[i]
        myArray[i]=myArray[i+1]
        myArray[i+1] = tempval
      }
    }
  }
  return(myArray)
}

var myArray = [
  Math.ceil(Math.random()*10),
  Math.ceil(Math.random()*10),
  Math.ceil(Math.random()*10),
  Math.ceil(Math.random()*10),
  Math.ceil(Math.random()*10),
  Math.ceil(Math.random()*10),
  Math.ceil(Math.random()*10),
  Math.ceil(Math.random()*10),
  Math.ceil(Math.random()*10),
  Math.ceil(Math.random()*10)
]

var fig = {x:0, y:0, width: 0, height: 0, color:"white"}

// PRINT IN DISORDER
fig.width = canvas.height/30
deltaX = fig.width*1.33
xStartPos = fig.width
fig.x = xStartPos

fig.height = canvas.height/30
deltaY = fig.height*1.33
yStartPos = 10*deltaY
fig.y = yStartPos

for(i=0; i<myArray.length; i++){
  fig.y = yStartPos
  for(j=0; j<myArray[i]; j++){
      rect(fig)
      fig.y -= deltaY
  }
  fig.x += deltaX
}

//
sortArray(myArray)

// PRINT ORDERED ARRAY
xStartPos = fig.width
fig.x = xStartPos

deltaY = fig.height*1.33
yStartPos = 21*deltaY
fig.y = yStartPos


for(i=0; i<myArray.length; i++){
  fig.y = yStartPos
  for(j=0; j<myArray[i]; j++){
      rect(fig)
      fig.y -= deltaY
  }
  fig.x += deltaX
}
