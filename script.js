var countQues=0;
const CHOICES = [
    ["Tôi rất tự tin, cả trong công việc và cuộc sống", "Tôi là người rất coi trọng tính kỷ luật", "Tôi luôn chú ý đến những gì người khác nói", "Tôi có xu hướng tin tưởng mọi người"],
    ["Tôi là người có tính tự phát", "Tôi luôn cần nhiều lời khuyên trước khi đưa ra quyết định", "Tôi thuộc tuýp người thích mơ mộng", "Tôi giỏi phân tích tình huống"],
    ["Tôi rất năng nổ tham gia các hoạt động của công ty", "Tôi luôn nằm trong vị trí ban tổ chức các chương trình của công ty ", "Tôi thường thẳng thắn trao đổi vấn đề 1 cách trực tiếp", "Tôi là tuýp người thích khám phá"],
    ["Tôi khá bướng bỉnh", "Tôi không thích lắng nghe ý kiến của người khác", "Tôi thuộc tuýp người thích sự nổi loạn", "Tôi dễ bị xúc phạm"],
    ["Tôi luôn yêu cầu và đòi hỏi ở mọi người rất nhiều", "Tôi thích được bảo bọc", "Dù biết mình sai nhưng tôi rất khó để chấp nhận", "Tôi thích sự yên lặng"],
    ["Tôi thuộc tuýp người hoạt náo", "Mọi người bảo tôi luôn tiên phong trong ý tưởng", "Tôi không thích sự thay đổi ", "Tôi luôn có trách nhiệm với mọi việc"],
    ["Tôi luôn thận trọng với mọi việc", "Tôi hay có những hành vi và phản ứng thái quá", "Tôi yêu thích sự hài hoà", "Mọi người đánh giá tôi là người rất nghị lực"],
    ["Tôi luôn giúp đỡ mọi người", "Tôi luôn thẳng thắn đưa ra quan điểm của mình", "Tôi luôn kiên định với những sự lựa chọn của mình", "Tôi thuộc tuýp người điềm đạm và không nóng nảy"],
    ["Tôi đáng tin cậy", "Mọi người nói tôi có cá tính mạnh mẽ", " Hành vi của tôi rất   kỷ luật", "Tôi là người có tính sở hữu cao"],
    ["Dám nghĩ dám làm", "Duy tâm", "Nghiêm túc", "Vui tươi"],
    ["Tôi luôn sắp xếp công việc 1 cách logic", "Tôi luôn biết hài lòng với hiện tại", "Tôi luôn thân thiện với mọi người", "Tôi rất táo bạo, dám nghĩ, dám làm"],
    ["Tôi rất chăm chỉ", "Tôi thuộc tuýp người hay tưởng tượng", "Độ chính xác rất quan trong đối với tôi", "Tôi được mọi người yêu thích"],
    ["Tôi luôn dè dặt với mọi người", "Mọi người bảo tôi luôn tiên phong trong ý tưởng", "Dù tôi làm gì, mọi người cũng sẽ khó rời mắt khỏi tôi", "Tôi luôn lạc quan"],
    ["Tôi là người rất quyết đoán trong mọi vấn đề", "Tôi sẽ phát triển tốt khi làm việc nhóm", "Tôi sẽ phát triển tốt khi hoạt động độc lập", "Tôi thuộc tuýp người truyền thống"],
    ["Tôi thường được khen vì ăn nói có duyên", "Tôi luôn bất an với mọi việc", "Tôi luôn đặt “chữ tâm” trong những việc tôi làm", "Mọi người thường nói tôi khiêm tốn "],
    ["Lãnh đạo", "Cố vấn", "Thiết kế", "Quản lý"],
    ["Tôi rất tỉ mỉ trong mọi việc", "Nghiện công việc", "Tôi luôn sẵn lòng giúp đỡ", "Tôi luôn đặt ra mục tiêu cụ thể trước khi bắt đầu"],
    ["Cần cù là đặc điểm nổi trội của tôi", "Tôi là người rất chi tiết", "Tôi có óc tưởng tượng phong phú", "Tôi có thái độ rất tích cực"],
    ["Tôi luôn có định hướng công việc rõ ràng", "Mọi việc tôi làm luôn lấy yếu tố con người làm trọng tâm", "Tôi luôn định hướng ý tưởng rõ ràng", "Tôi là người hướng đến kết quả"],
    ["Tôi sống và làm việc theo cảm xúc", "Tôi thích ứng nhanh với mọi thay đổi", "Tôi luôn thu hút mọi ánh nhìn khi xuất hiện", "Tôi rất tỉ mỉ trong mọi việc"],
    ["Tôi hay cáu kỉnh và nóng nảy", "Tôi khá cứng nhắc trong mọi việc", "Tôi dễ bị coi thường", "Tôi dễ bị đe dọa"],
    ["Gián tiếp", "Tôi rất thẳng thắn", "Tôi rất cẩn thận", "Tôi thuộc tuýp người nghiêm khắc"],
    ["Tôi luôn đặt ra mục tiêu cụ thể trước khi bắt đầu", "Tôi luôn có trách nhiệm với những việc tôi làm", "Tôi luôn sẵn sàng giúp đỡ mọi người", "Khi làm việc tôi luôn dành thời gian để lên kế hoạch cụ thể"],
    ["Tôi luôn cố gắng làm mọi thứ để vượt qua khó khăn", "Tôi thích được khen ngợi", "Tôi là người khá hài hước ", "Tôi là người không thích bị người khác chú ý"],
    ["Tôi là người thích quan sát", "Mọi người hay nói về tôi là người có ý chí", "Tôi luôn hăng hái, tích cực trong các hoạt động", "Tôi thường tỉ mỉ đến mức cầu toàn"],
    ["Tôi rất tự tin", "Tôi có xu hướng là 1 người thận trọng", "Tôi thấu đáo", "Tôi rất thời thượng"],
    ["Tôi thích mọi thứ gọn gàng và ngăn nắp", "Tôi rất quan tâm đến ngoại hình", "Tôi luôn muốn “đứng ngoài” những cuộc xung đột", "Tôi là người khá bảo thủ"]
];

const RESULTS = [
    ["red", "green", "blue", "yellow"],
    ["red", "yellow", "blue", "green"],
    ["yellow", "green", "red", "blue"],
    ["green", "red", "yellow", "blue"],
    ["red", "yellow", "green", "blue"],
    ["yellow", "blue", "green", "red"],
    ["green", "blue", "yellow", "red"],
    ["yellow", "red", "green", "blue"],
    ["yellow", "red", "green", "blue"],
    ["red", "blue", "green", "yellow"],
    ["green", "blue", "yellow", "red"],
    ["red", "blue", "green", "yellow"],
    ["green", "blue", "red", "yellow"],
    ["red", "yellow", "blue", "green"],
    ["yellow", "red", "green", "blue"],
    ["red", "yellow", "blue", "green"],
    ["green", "red", "yellow", "blue"],
    ["red", "green", "blue", "yellow"],
    ["green", "yellow", "blue", "red"],
    ["blue", "yellow", "red", "green"],
    ["red", "green", "blue", "yellow"],
    ["yellow", "red", "blue", "green"],
    ["red", "blue", "yellow", "green"],
    ["red", "yellow", "blue", "green"],
    ["blue", "red", "yellow", "green"],
    ["red", "blue", "green", "yellow"],
    ["green", "yellow", "blue", "red"],
];

let SCORES = {
    "red" : 0,
    "green" : 0,
    "blue": 0,
    "yellow": 0
};

//alert(questions.length);
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";


document.querySelector(".choose-lang").addEventListener("click",function(){

    document.getElementById("ques-left").textContent="Câu hỏi : " + (countQues+1) + "/" + CHOICES.length;
    document.querySelector(".quiz").style.display="block";
    document.querySelector(".question").innerHTML = "<h1> Chọn tính cách mà bạn thấy giống với bản thân nhất: </h1>";
    for (let i = 0; i <= 3; i++) {
        document.getElementById("lb" + i).innerHTML = CHOICES[countQues][i];
    }
    document.querySelector('input[name="options"]:checked').checked = false
});


document.querySelector(".submit-answer").addEventListener("click",function(){
    let answerEl = document.querySelector('input[name="options"]:checked');
    if (!answerEl) {
        alert('Vui lòng chọn 1 đáp án!');
    }
    let selected = answerEl.value;

    let result = RESULTS[countQues][selected];
    SCORES[result] = SCORES[result] + 1;

    if (countQues < CHOICES.length - 1) {
    // if (countQues < 2 - 1) {
        countQues++;
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";

    }

    document.getElementById("ques-left").textContent = "Câu hỏi : " + (countQues + 1) + "/" + CHOICES.length;
    for (let i = 0; i <= 3; i++) {
        document.getElementById("lb" + i).innerHTML = CHOICES[countQues][i];
    }

    document.querySelector('input[name="options"]:checked').checked = false
});

document.querySelector(".view-results").addEventListener("click",function(){
    document.querySelector(".final-result").style.display="block";
    renderResult();

});

function renderResult() {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
            text: ""
        },
        data: [{
            type: "pie",
            startAngle: 120,
            yValueFormatString: "##",
            indexLabel: "{label} {y}",
            dataPoints: [
                // {y: SCORES["red"], label: "Red", color:"#FF0000"},
                // {y: SCORES["yellow"], label: "Yellow", color: "#FFFF00"},
                // {y: SCORES["blue"], label: "Blue", color: "#0000FF"},
                // {y: SCORES["green"], label: "Green", color: "#008000"}
                {y: SCORES["red"], label: "Red", color:"#EA2E25"},
                {y: SCORES["yellow"], label: "Yellow", color: "#FEC106"},
                {y: SCORES["blue"], label: "Blue", color: "#0071C1"},
                {y: SCORES["green"], label: "Green", color: "#008001"}
            ]
        }]

    });
    chart.render();
}

document.getElementById("restart").addEventListener("click",function(){
    location.reload();
});


/*Smooth Scroll*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);

});
/*Smooth Scroll End*/