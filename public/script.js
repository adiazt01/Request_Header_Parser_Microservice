document.addEventListener("DOMContentLoaded", () => {
    // Obtener una referencia a los elementos HTML donde mostraremos la información
    const ipAddressElement = document.getElementById("ip-address");
    const languageElement = document.getElementById("language");
    const softwareElement = document.getElementById("software");

    // Realizar una solicitud a la API para obtener la información del encabezado
    fetch("/api/whoami")
        .then((response) => response.json())
        .then((data) => {
            // Mostrar la información obtenida en los elementos HTML
            ipAddressElement.textContent = data.ipaddress;
            languageElement.textContent = data.language;
            softwareElement.textContent = data.software;
        })
        .catch((error) => {
            console.error(error);
        });
});
