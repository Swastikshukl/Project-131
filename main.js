function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);

}
img="";
objects=[];
function preload(){
img=loadImage("https://cdn.downtoearth.org.in/library/large/2021-02-25/0.91829600_1614263117_tiger.jpg");
status="";
}
function draw(){
    image(img,0 , 0, 640, 420);
    fill("#FF0000");
    text("dog",45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
    fill("#FF0000");
    text("cat",320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320)
}
function modelLoaded(){
    console.log("modelloaded");
    status=true;
    objectDetector.detect(ing,gotResult);

}
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
}
}