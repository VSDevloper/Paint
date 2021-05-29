canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_araay = ["nasa_image_1.jpg", "nasa_image_2.jpg", "nasa_image_3.jpg", "nasa_image_4.jpg"];

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
