const express = require("express")
const router = express.Router()
const request = require("request")

router.get("/", function (req, res) {
    console.log("[GET] /emotion")
    res.sendFile(__dirname + "/views/index.html")
})

router.post("/", function (req, res) {
    console.log("[POST] /emotion")
    let club = "em"
    let name = req.body.name
    let number = req.body.number
    let phone_number = req.body.phone
    let email = req.body.email
    let content01 =
        "질문 1 자기소개 : " +
        "<br/>" +
        req.body.textarea01
            .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("&lt;br/&gt;", "<br/>")
    let content02 =
        "질문 2 지원동기 : " +
        "<br/>" +
        req.body.textarea02
            .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("&lt;br/&gt;", "<br/>")
    let content03 =
        "질문 3 자신의 장단점 : " +
        "<br/>" +
        req.body.textarea03
            .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("&lt;br/&gt;", "<br/>")
    let content04 =
        "질문 4 이루고 싶은 목표 : " +
        "<br/>" +
        req.body.textarea04
            .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("&lt;br/&gt;", "<br/>")
    let content05 =
        "질문 5 노력했던 경험 : " +
        "<br/>" +
        req.body.textarea05
            .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("&lt;br/&gt;", "<br/>")
    var formData = {
        club: club,
        name: name.slice(0, 5),
        number: number.slice(0, 5),
        phone_number: phone_number.slice(0, 11),
        email: email,
        content: JSON.stringify([
            content01,
            content02,
            content03,
            content04,
            content05,
        ]),
    }
    request.post(
        {
            url: "https://clubapi.sunrinsecurity.com/application/apply/",
            form: formData,
        },
        function (err, httpResponse, body) {
            if (
                !err &&
                (httpResponse.statusCode == 200 ||
                    httpResponse.statusCode == 201)
            ) {
                console.log(httpResponse.statusCode)
                res.send(
                    '<script type="text/javascript">alert("제출 완료 되었습니다.");window.location.href = "/"</script>'
                )
            } else {
                console.log(err)
                res.send(
                    '<script type="text/javascript">alert("[서버 오류] 제출 실패.");window.location.href = "/"</script>'
                )
            }
        }
    )
})

module.exports = router
