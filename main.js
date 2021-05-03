Webcam.set({
    width: 350,
    height: 300,
    img_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach(camera);

function take_snapshot() {
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_url + '"/>'
    });
}
console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Abzu6JPJz/model.json', model_loaded);

function model_loaded() {
    console.log('model_loaded');
}
prediction1 = results[0].labels
prediction2 = results[1].label

function speak() {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "And the second prediction is" + prediction_2;
    var utter_this = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2)
    synth.speak(utter_this)
}

function check() {
    img = document.getElementById('captured_image')
    classifier.classify(img, gotResult)
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML = results[0].label;
        document.getElementById("result_emotion_name2").innerHTML = results[1].label;


        speak()
        if (results[0].label == "best") { document.getElementById("update_emoji").innerHTML = "&#128077;"; }
        if (results[0].label == "amazing") { document.getElementById("update_emoji").innerHTML = "&#128076;"; }
        if (results[0].label == "victory") { document.getElementById("update_emoji").innerHTML = "&#128406;"; }
        if (results[1].label == "best") { document.getElementById("update_emoji2").innerHTML = "&#128077;"; }
        if (results[1].label == "amazing") { document.getElementById("update_emoji2").innerHTML = "&#128076;"; }
        if (results[1].label == "victory") { document.getElementById("update_emoji2").innerHTML = "&#128406;"; }
        if (results[0].label == "best") { document.getElementById("update_emoji").innerHTML = "&#128077;"; }
        if (results[0].label == "amazing") { document.getElementById("update_emoji").innerHTML = "&#128076;"; }
        if (results[0].label == "victory") { document.getElementById("update_emoji").innerHTML = "&#128406;"; }
        if (results[1].label == "best") { document.getElementById("update_emoji2").innerHTML = "&#128077;"; }
        if (results[1].label == "amazing") { document.getElementById("update_emoji2").innerHTML = "&#128076;"; }
        if (results[1].label == "victory") { document.getElementById("update_emoji2").innerHTML = "&#128406;"; }
    }
}