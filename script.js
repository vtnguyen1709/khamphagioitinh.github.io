var countQues=0;
const CHOICES = [
    "Các thành viên trong nhóm thừa nhận sai lầm của họ.",
    "Các thành viên trong nhóm hăng hái và cởi mở khi thảo luận về các vấn đề cần giải quyết.",
    "Các thành viên trong nhóm nhanh chóng nhận ra những đóng góp và thành tích của những người khác.",
    "Trong các cuộc họp nhóm, những vấn đề quan trọng nhất và khó khăn nhất được mang ra thảo luận.",
    "Các thành viên trong nhóm thừa nhận những điểm yếu của họ với nhau.",
    "Các thành viên trong nhóm dám bày tỏ ý kiến của mình ngay cả khi có nguy cơ gây ra bất đồng ý kiến.",
    "Các thành viên trong nhóm không ngại chỉ ra những hành vi cản trở sự phát triển của nhóm đến từ những thành viên khác. ",
    "Nhóm bạn thường xuyên đạt kết quả tích cực trong công việc & đạt sự tin cậy của mọi người trong việc đạt kết quả cao ",
    "Các thành viên trong nhóm yêu cầu được giúp đỡ mà không do dự.",
    "Các thành viên trong nhóm rời khỏi cuộc họp với sự tự tin rằng mọi người đều cam kết thực hiện các quyết định đã được thống nhất.",
    "Trong quá trình thảo luận, các thành viên trong nhóm thẳng thắng hỏi & làm rõ về cách các thành viên khác đưa ra kết luận và ý kiến của họ.",
    "Các thành viên trong nhóm sẵn sàng hỏi & tham khảo ý kiến từ các thành viên khác.",
    "Khi nhóm không đạt được mục tiêu chung, mỗi thành viên đều nhận trách nhiệm để cải thiện hiệu suất của nhóm.",
    "Các thành viên trong nhóm sẵn sàng hy sinh lợi ích cá nhân của mình vì lợi ích chung của nhóm.",
    "Các thành viên trong nhóm thẳng thắn hỏi đồng nghiệp  về các vấn đề thuộc lĩnh vực chịu trách nhiệm của họ.",
    "Các thành viên trong nhóm đánh giá cao, học hỏi và tận dụng các kỹ năng và chuyên môn của nhau.",
    "Các thành viên trong nhóm tham khảo ý kiến của nhau trong các cuộc họp.",
    "Các thành viên trong nhóm kết thúc thảo luận với các giải pháp và KH hành động rõ ràng, cụ thể.",
    "Các thành viên trong nhóm sẵn sàng xin lỗi nhau.",
    "Các thành viên trong nhóm sẵn sàng chia sẻ những ý tưởng khác biệt cho nhóm.",
    "Nhóm có định hướng rõ ràng & ưu tiên.",
    "Các thành viên trong nhóm khiêm tốn về những đóng góp của họ cho nhóm.",
    "Khi xung đột xảy ra, nhóm không né tránh mà tập trung giải quyết vấn đề trước khi chuyển sang chủ đề khác.",
    "Nhóm cùng tập trung vào việc đạt được các mục tiêu chung. ",
    "Nhóm rất quyết đoán, ngay cả khi không có tất cả đầy đủ thông tin. ",
    "Các thành viên trong nhóm cởi mở và chân thành với nhau.",
    "Các thành viên trong nhóm thoải mái chia sẻ về cuộc sống cá nhân của họ với nhau.",
    "Nhóm luôn theo sát các quyết định của mình.",
    "Các thành viên trong nhóm sẵn sàng đưa ra phản hồi mang tính xây dựng cho nhau.",
    "Các thành viên trong nhóm ủng hộ các quyết định của nhóm ngay cả khi họ ban đầu không đồng ý.",
    "Các thành viên trong nhóm tích cực theo dõi & giám sát hiệu quả chung của đội nhóm",
    "Các thành viên trong nhóm sẵn sàng đặt câu hỏi về mức độ cam kết / sự nhận trách nhiệm của thành viên khác ",
    "Các thành viên trong nhóm có cảm thấy chịu trách nhiệm về kết quả chung của nhóm",
    "Tiến độ dự án có được thường xuyên xem xét & thảo luận",
    "Nhóm trưởng/ các thành viên trong nhóm khuyến khich/ ghi nhận việc phản hồi cởi mở và trao đổi thắng thắn ",
    "Nếu thấy có nguy cơ xảy ra sự cố và không đạt điều mình đã cam kết, các thành viên trong nhóm loan tin đến những người xunh quanh và đưa ra giải pháp để khắc phục",
    "Nhóm trưởng & các thành viên trong nhóm khuyến khích mọi người chủ động nhận trách nhiệm khi các vấn đề phát sinh thay vì đổ lỗi cho hoàn cảnh/ bên ngoài",
    "Nhóm có tổ chức các cuộc họp định kỳ để cập nhật tiến độ và kết quả công việc với tất cả thành viên",
    "Mục tiêu chung của nhóm được xác định rõ ràng và là tiêu chí hàng đầu khi đánh giá hiệu quả/hiệu suất cá nhân",
    "Khi mục tiêu chung của nhóm không được đạt, nhóm xác định rõ ràng nguyên nhân và đề ra kế hoạch hành động cụ thể để cải thiện "
];

const RESULTS = [
    "Sự tin tưởng",
    "Xung đột",
    "Kết quả",
    "Xung đột",
    "Sự tin tưởng",
    "Xung đột",
    "Trách nhiệm",
    "Kết quả",
    "Sự tin tưởng",
    "Cam kết",
    "Xung đột",
    "Sự tin tưởng",
    "Trách nhiệm",
    "Kết quả",
    "Trách nhiệm",
    "Sự tin tưởng",
    "Xung đột",
    "Cam kết",
    "Sự tin tưởng",
    "Xung đột",
    "Cam kết",
    "Kết quả",
    "Xung đột",
    "Cam kết",
    "Cam kết",
    "Sự tin tưởng",
    "Sự tin tưởng",
    "Cam kết",
    "Trách nhiệm",
    "Cam kết",
    "Trách nhiệm",
    "Trách nhiệm",
    "Trách nhiệm",
    "Kết quả",
    "Xung đột",
    "Cam kết",
    "Trách nhiệm",
    "Kết quả",
    "Kết quả",
    "Kết quả"
];

let SCORES = {
    "Sự tin tưởng": 0,
    "Xung đột" : 0,
    "Kết quả" : 0,
    "Cam kết": 0,
    "Trách nhiệm": 0,
};

//alert(questions.length);
document.querySelector(".view-results").style.display="none";
document.querySelector(".quiz").style.display="none";
document.querySelector(".final-result").style.display="none";
if (iOS() || (navigator.userAgentData && navigator.userAgentData.mobile)) {
    // let chartContainer = document.getElementById('chartContainer');
    // chartContainer.style.height = '150px';
    // chartContainer.style.marginTop = '200px';
    // chartContainer.style.maxWidth = "300px";
    // chartContainer.style.marginLeft = "-65px";
    document.querySelector('.question').style.minHeight = '45%';

}

document.querySelector(".start-btn").addEventListener("click",function(){
    document.getElementById('wrapper').style.display = 'none';


    document.getElementById("ques-left").textContent="Câu hỏi : " + (countQues+1) + "/" + CHOICES.length;
    document.querySelector(".quiz").style.display="block";
    document.querySelector(".question").innerHTML = "<h1> " + CHOICES[countQues] + " </h1>";
    // for (let i = 0; i <= 3; i++) {
    //     document.getElementById("lb" + i).innerHTML = CHOICES[countQues][i];
    // }
    document.querySelector('input[name="options"]:checked').checked = false
});


document.querySelector(".submit-answer").addEventListener("click",function(){
    let answerEl = document.querySelector('input[name="options"]:checked');
    if (!answerEl) {
        alert('Vui lòng chọn 1 đáp án!');
    }
    let selected = answerEl.value;
    if (selected === '0') {
        SCORES[RESULTS[countQues]] += 1;
    }

    if (countQues < CHOICES.length - 1) {
    // if (countQues < 2 - 1) {
        countQues++;
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";

    }

    document.getElementById("ques-left").textContent = "Câu hỏi : " + (countQues + 1) + "/" + CHOICES.length;
    document.querySelector(".question").innerHTML = "<h1> " + CHOICES[countQues] + " </h1>";
    // for (let i = 0; i <= 3; i++) {
    //     document.getElementById("lb" + i).innerHTML = CHOICES[countQues][i];
    // }

    document.querySelector('input[name="options"]:checked').checked = false
});

function iOS() {
    return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform)
        || (navigator.userAgent.includes("iPhone"))
        // iPad on iOS 13 detection
        || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
}

document.querySelector(".view-results").addEventListener("click",function(){
    document.querySelector(".quiz").style.display = "none";

    document.querySelector(".final-result").style.display="block";
    renderResult();

});

function renderResult() {
    var data = {
        labels: ["Sự tin tưởng", "Xung đột", "Kết quả", "Cam kết", "Trách nhiệm"],
        datasets: [{
            label: 'Điểm',
            fill: true,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            data: [SCORES["Sự tin tưởng"], SCORES["Xung đột"], SCORES["Kết quả"], SCORES["Cam kết"], SCORES["Trách nhiệm"]],
        }]
    };

    // Configuration options for the radar chart
    var options = {
        scales: {
            r: {
                angleLines: {
                    display: false
                },
                suggestedMin: 0,
                suggestedMax: 8
            }
        }
    };

    // Get the canvas element
    var ctx = document.getElementById('canvas').getContext('2d');

    // Create the radar chart
    var radarChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: options
    });
}

document.getElementById("restart").addEventListener("click",function(){
    location.reload();
});


/*Smooth Scroll*/
// $(document).on('click', 'a[href^="#"]', function (event) {
//     event.preventDefault();
//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top
//     }, 1000);
//
// });
/*Smooth Scroll End*/
