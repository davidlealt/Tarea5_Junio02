var shotImage = new Image();
shotImage.src = 'shot.png';

canvas.addEventListener ('click',
                          function myFunction(click) {
                            context.drawImage(shotImage, click.clientX-shotImage.width/2, click.clientY-shotImage.height/2)
                          }
                        );
