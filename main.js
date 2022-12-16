function preload(){
    img=loadImage('tv.jpg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
}
img="";
status="";
image=[];

function modelLoaded(){
    console.log("Model Loaded")
    status=true;
    objectDetector.detect(img, gotResult);
}

function gotResult(){
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects=results;
}

function draw(){
    image (img, 0, 0, 640, 420);

    if(status= !="")
    {
        for(i=0; i< image.length; i++)
            {
                document.getElementById("status").innerHTML = "Status: Image Detected";

                fill("#FF0000");
                percent= floor(images[i].confidence * 100);
                text(images[i].label + "" + percent + "%", images[i].x, images[i].y);
                noFill();
                stroke("#FF0000");
                rect(images[i].x, images[i].y, images[i].width, images[i].height);
            }
    }
    fill("#FF0000");
    text("TV", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 200);
}

