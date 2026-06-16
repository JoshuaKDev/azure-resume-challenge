document.addEventListener("DOMContentLoaded", function () {
    fetch("https://jkcloud-visits-func-fcbzgag3b9btd0fr.westus-01.azurewebsites.net/api/visits")
        .then(res => res.json())
        .then(data => {
            document.getElementById("counter").innerText = data.count;
        })
        .catch(err => {
            console.error(err);
            document.getElementById("counter").innerText = "Unavailable";
        });
});