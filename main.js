noseX = 0;
noseY = 0;

function preload() {
}

function setup(){
    canvas = createCanvas(350, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded ()
{
    console.log ("poseNet is intialised");
}
function draw() {
    image(video, 0, 0, 350, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(noseX, noseY, 20);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        console.log("noseX = "+results[0].pose.nose.x);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("noseY = "+results[0].pose.nose.y);
    }
}


    