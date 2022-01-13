$("#btnSend").click(function () {
    const assignmentWeight = 0.55;
    const projectWeight = 0.05;
    const quizWeight = 0.10;
    const examWeight = 0.20;
    const intexWeight = 0.10;

    let assignments = $("#assignments").val();
    let project = $("#groupproject").val();
    let quizzes = $("#quizzes").val();
    let exams = $("#exams").val();
    let intex = $("#intex").val();
    let finalGrade;

    let calcGrade = (assignmentWeight * assignments) + (projectWeight * project) + (quizWeight * quizzes) + (examWeight * exams) + (intexWeight * intex);
    if (calcGrade >= 94) {
        finalGrade = "A";
    } else if (calcGrade >= 90) {
        finalGrade = "A-";
    } else if (calcGrade >= 87) {
        finalGrade = "B+";
    } else if (calcGrade >= 84) {
        finalGrade = "B";
    } else if (calcGrade >= 80) {
        finalGrade = "B-";
    } else if (calcGrade >= 77) {
        finalGrade = "C+";
    } else if (calcGrade >= 74) {
        finalGrade = "C";
    } else if (calcGrade >= 70) {
        finalGrade = "C-";
    } else if (calcGrade >= 67) {
        finalGrade = "D+";
    } else if (calcGrade >= 64) {
        finalGrade = "D";
    } else if (calcGrade >= 60) {
        finalGrade = "D-";
    } else {
        finalGrade = "E. Good luck lol";
    }

    alert("Your final grade will be: " + calcGrade + "%, which is a(n) " + finalGrade + ".");
})