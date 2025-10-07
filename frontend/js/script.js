function uploadData() {
    var formData = new FormData();
    formData.append("textFile", document.getElementById("textFile").files[0]);
    formData.append("imageFile", document.getElementById("imageFile").files[0]);
    formData.append("hrvFile", document.getElementById("hrvFile").files[0]);

    fetch("/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
}

function checkDepression() {
    fetch("/check_depression")
    .then(response => response.text())
    .then(data => {
        document.getElementById("result").innerText = data;
    })
    .catch(error => console.error("Error:", error));
}
