const express = require("express")
const router = express.Router()
const request = require("request")

router.get("/", function (req, res) {
    console.log("[GET] /teamlog")
    res.sendFile(__dirname + "/views/teamlog.html")
})

router.post("/", function (req, res) {
    console.log("[POST] /teamlog")
    let club = "tl"
    let name = req.body.name
    let number = req.body.number
    let phone_number = req.body.phone
    let email = req.body.email
    let content01 =
        "질문 1 본인의 강점과 약점, 성격, 특기 등을 포함하여 자기소개서를 작성해 주세요. : " +
        "<br/>" +
        req.body.textarea01
            .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("&lt;br/&gt;", "<br/>")
    let content02 =
        "질문 2 팀로그에 지원한 동기를 작성해 주세요. : " +
        "<br/>" +
        req.body.textarea02
            .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("&lt;br/&gt;", "<br/>")
    let content03 =
        "질문 3 본인이 전공을 어디까지 공부하였는지 작성해 주세요. : " +
        "<br/>" +
        req.body.textarea03
            .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("&lt;br/&gt;", "<br/>")
    let content04 =
        "질문 4 팀로그에서 진행하고 싶은 프로젝트를 이유와 함께 서술하시고, 팀로그 9기 내부 및 프로젝트에서 어떤 역할을 하고 싶은지 작성해 주세요. : " +
        "<br/>" +
        req.body.textarea04
            .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("&lt;br/&gt;", "<br/>")
    let content05 =
        "‘네트워크란 무엇인가’라는 주제로 자유롭게 이야기를 작성해 주세요. : " +
        "<br/>" +
        req.body.textarea05
            .replace(/(?:\r\n|\r|\n)/g, "<br/>")
            .replace("<", "&lt;")
            .replace(">", "&gt;")
            .replace("&lt;br/&gt;", "<br/>")
    let content06 =
        "질문 5 포트폴리오가 있으시다면 이 문항에 구글 드라이브 링크를 기재해 주세요. (없을 시 없음 입력) : " +
        "<br/>" +
        req.body.textarea06
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
            content06,
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
