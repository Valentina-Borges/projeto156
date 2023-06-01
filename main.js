
objects = [];
status = "";

function preload(){
    video = createVideo('video.mp4');
}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();
    vieo.hide();
}

function start()
{
    objectDetector = ml5.oobjectDetector('cocossd', modelLoaded);
    document.getElementByld("status").innerHTML = "Status: Detectando Objetos"
}

function modelLoaded() {
    console.log("Model Carregado!")
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function gotResult(error, results){
    if (error) {
    }
    console.log(results);
    objects = results;
}

function draw() {
    Image(video, 0, 0, 480, 380);
    if(status != "")
    {
        ojectDetector.detect(video, gotResult);
        for (i = 0; i <objects.length; i++) {
            document.getElementByld("status").innerHTML = "Status: Objetos Detectados";
            document.getElementByld("numberOfObjects").innerHTML = "Qualidade de Objetos Detectados: "+ objects.length;

            Fill("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15);
            noFill();
            stroke("#FF0000");
            Reflect(objects[i].x, objects[i].eidth, objects[i].height);
        }
    }
}