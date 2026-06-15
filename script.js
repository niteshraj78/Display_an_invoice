document.addEventListener("DOMContentLoaded", function () {

    fetch("http://localhost:5176/api/invoice")
        .then(response => response.json())
        .then(data => {

            let html = "<ul>";

            data.items.forEach(item => {
                html += `<li>${item.name} - $${item.price}</li>`;
            });

            html += "</ul>";

            document.getElementById("invoice-container").innerHTML = html;
        })
        .catch(error => {
            console.error("Failed to load invoice:", error);
        });
});