// Allow accessing the camera

var video = document.querySelector("#videoElement");
var cloick = false;
var cyka = document.getElementById('timer');
var picture;
var tigger = 600;
var dominant = document.getElementById('selectionh');
//mediaDevice and userMedia to navigate the access for camera

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
            // after allowing the camera start the video stream
    }).then(function(stream) {
        video.srcObject = stream
            //play the video
        video.play();
    }).catch(function(error) {
        console.log(error);
    });
}

// capture Images

var image = document.getElementById('image'),
    context = image.getContext('2d'); //setting for resolution of image

var imagee = document.getElementById('sadge'),
    sadge = imagee.getContext('2d');

document.getElementById('capture').addEventListener('click', function() {
    // draw a image when the button clicked on the canvas

});



function disppic() {
    context.drawImage(video, image.width / 2, image.height / 2, 200, 200, 0, 0, 300, 300);
    picture = sadge.drawImage(video, image.width / 2, image.height / 2, 200, 200, 0, 0, 28, 28);
}

function oink() {
    if (cloick === false) {
        cloick = true;
    } else {
        cloick = false;
    }
}
var sel = dominant.options[dominant.selectedIndex].value;

setInterval(() => {
    if (cloick === true) {
        tigger -= 1;
        if (tigger === 1) {
            if (sel === 'lh') {
                context.scale(-1, 1);
                sadge.scale(-1, 1);
                context.drawImage(video, image.width / 2, image.height / 2, 200, 200, 0, 0, 300 * -1, 300);
                picture = sadge.drawImage(video, image.width / 2, image.height / 2, 200, 200, 0, 0, 100 * -1, 100);
            } else {
                context.scale(1, 1);
                sadge.scale(1, 1);
                context.drawImage(video, image.width / 2, image.height / 2, 200, 200, 0, 0, 300, 300);
                picture = sadge.drawImage(video, image.width / 2, image.height / 2, 200, 200, 0, 0, 64, 64);

                function runPyScript(){
                  var jqXHR = $.ajax({
                      type: "POST",
                      url: "/upload/",
                      async: false,
                      data: { file: imagee.toDataURL("image/png", 0).split(",")[1]}
                  });

                  return jqXHR.responseText;
              }

              result = runPyScript();
              document.getElementById('outBox').innerHTML += result;
            }
            tigger = 600;
        }
        cyka.innerHTML = tigger / 1000;
    } else {
        tigger = 600;
        cyka.innerHTML = tigger / 1000;
    }
}, 1);

//Done.....!!