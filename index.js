const express = require("express")
const app = express()
var logger = require("morgan")
var fs = require("fs")
const path = require("path")
const http = require("http").Server(app)
const expressSession = require("express-session")
const cookieParser = require("cookie-parser")
const bodyParser = require("body-parser")
const main = require("./routers/main")
const preparing = require("./routers/preparing")
const end = require("./routers/end")
const layer7 = require("./routers/layer7")
const unifox = require("./routers/unifox")
const nefus = require("./routers/nefus")
const teamlog = require("./routers/teamlog")
const emotion = require("./routers/emotion")
const login = require("./routers/login")
const view = require("./routers/view")
const detail = require("./routers/detail")

const PORT = process.env.PORT || 5000

const session = expressSession({
    secret: "my key",
    resave: true,
    saveUninitialized: true,
})

app.use(express.static(__dirname + "/"))
app.use(
    bodyParser.json({
        limit: "50mb",
    })
)
app.use(
    bodyParser.urlencoded({
        limit: "50mb",
        extended: false,
    })
)
app.use(cookieParser())
app.use(session)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname + "/routers/views"))
app.engine("html", require("ejs").renderFile)

app.use(logger("dev"))

if (Date.now() < Date.parse("2021-03-15")) {
    // before the applying period
    app.use("/", preparing)
} else if (Date.now() < Date.parse("2021-03-17 20:00")) {
    // in the applying period
    app.use("/", main)
    app.use("/layer7", layer7)
    app.use("/unifox", unifox)
    app.use("/nefus", nefus)
    app.use("/teamlog", teamlog)
    app.use("/emotion", emotion)
} else {
    app.use("/", end)
}
app.use("/login", login)
app.use("/admin", view)
app.use("/detail", detail)

app.all("*", function (req, res) {
    res.status(404).send("<h1> 404 Error </h1>")
})

http.listen(PORT, function () {
    console.log(`server on port ${PORT}!`)
})

module.exports = app
