img = "";
Status = "";
objects=[];

function preload() {
    img = loadImage("bedroom.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    imagedetector = ml5.objectDetector('cocossd',modelloaded)
    document.getElementById("status").innerHTML = "Status - Detecting Object"
}

function draw() {
    image(img, 0, 0, 640, 420);
    if(Status != ""){
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status : object detected";
        fill("red");
        percent=floor(objects[i].confidence * 100);
        text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    }
}

function modelloaded() {
    console.log("cocossd is initialized");
    Status = true;
    imagedetector.detect(img, gotresult);
}

function gotresult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        objects=results;
    }
}