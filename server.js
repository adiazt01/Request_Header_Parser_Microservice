const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.get("/api/whoami", (req, res) => {
    const ipaddress = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];

    res.json({ ipaddress, language, software });
});


const listener = app.listen(port, () => {
    console.log(`La aplicación está escuchando en el puerto ${listener.address().port}`);
});
