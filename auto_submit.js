document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        alert("Bạn đã rời trang! Bài thi sẽ bị nộp ngay lập tức.");
        document.getElementById("exam-form").submit();
    }
});
