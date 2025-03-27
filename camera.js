navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        document.getElementById("camera").srcObject = stream;
    })
    .catch(() => {
        alert("Bạn cần bật camera để làm bài thi!");
    });
