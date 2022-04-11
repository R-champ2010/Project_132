function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

img="";
objects=[];

function preload(){
    img= loadImage('fruits.jpg');
    
}

function draw(){
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("fruits", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 630, 410);


}

function gotResults(error, results){
    if (error) {
        console.log(error);
    }
    objects=results;
}

function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img, gotResults);
}