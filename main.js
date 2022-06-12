var cam=document.getElementById("camera")
Webcam.set({
    width:350,height:300,image_format:"png",png_quality:90,
    constraints:{facingMode:"environment"}
})
Webcam.attach("#camera")
function take_snapshot(){
    Webcam.snap(
        function (snap){
            document.getElementById("result").innerHTML='<img id="captured_image" src="'+snap+'"/> ';
        }
    )
}
console.log(ml5.version)
classifier=ml5.imageClassifier("MobileNet",mobileNetLoaded)
function mobileNetLoaded(){
    console.log("model loaded")
}
function check(){
    var img=document.getElementById("captured_image");
    classifier.classify(img,identify)
}
function identify(error,result){
    if (error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label
    }

}