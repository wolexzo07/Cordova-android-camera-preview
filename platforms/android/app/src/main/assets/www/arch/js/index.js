document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Device is ready');

    var startCameraPreviewButton = document.getElementById('startCameraPreview');
    var stopCameraPreviewButton = document.getElementById('stopCameraPreview');
    var cameraPreviewDiv = document.getElementById('cameraPreview');

    startCameraPreviewButton.addEventListener('click', function() {
        startCameraPreview();
    });

    stopCameraPreviewButton.addEventListener('click', function() {
        stopCameraPreview();
    });

    function startCameraPreview() {
        var cameraPreviewOpts = {
            x: 0,
            y: 0,
            width: window.innerWidth,
            height: window.innerHeight,
            camera: 'rear',
            tapPhoto: false,
            previewDrag: false,
            toBack: true,
            alpha: 1
        };

        window['CameraPreview'].startCamera(cameraPreviewOpts);
        cameraPreviewDiv.style.display = 'block';
    }

    function stopCameraPreview() {
        window['CameraPreview'].stopCamera();
        cameraPreviewDiv.style.display = 'none';
    }
}
