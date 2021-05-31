canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_araay = ["nasa_image_1.jpg", "nasa_image_2.jpeg", "nasa_image_3.jpg", "nasa_image_4.jpg"];

rnadom_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_widht = 100;
rover_height = 90;

background_image = nasa_mars_images_araay[random_number];
console.log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uplodrover;
    rover_imagTga.src = rover_imgage;
}

window.addEventListener("keydown" ,mykeydown);

function mykeydown(e) {
    keyPressed = e.keycode;
if(keyPressed == '87')
{
    up();
    console.log("w");
}
if(keyPressed == '83')
{
    down();
    console.log("s");
}
if(keyPressed == '65')
{
    screenLeft();
    console.log("a");
}
if(keyPressed == '68')
{
    right();
    console.log("d");
}
}
 function up()
 {
     if(rover_y >=0)
     {
         rover_y = rover_y - 10;
         console.log("When up arrow is pressed x=" + rover_x + "| y = " +rover_y );
         uploadBackground();
         uplodrover();
     }
 }
 function down()
 {
     if(rover_y >=500)
     {
         rover_y = rover_y - 10;
         console.log("When down arrow is pressed x=" + rover_x + "| y = " +rover_y );
         uploadBackground();
         uplodrover();
     }
 }
 function left()
 {
     if(rover_y >=0)
     {
         rover_y = rover_y - 10;
         console.log("When left arrow is pressed x=" + rover_x + "| y = " +rover_y );
         uploadBackground();
         uplodrover();
     }
 }
  function right()
 {
     if(rover_y >=700)
     {
         rover_y = rover_y - 10;
         console.log("When right arrow is pressed x=" + rover_x + "| y = " +rover_y );
         uploadBackground();
         uplodrover();
     }
 }
