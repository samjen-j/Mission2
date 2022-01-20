$("form").submit(function () {
    /*All variables for grade categories*/
    var asgn = parseFloat($("#asgn").val());
    var gproj = parseFloat($("#gproj").val());
    var quiz = parseFloat($("#quiz").val());
    var exam = parseFloat($("#exam").val());
    var intex = parseFloat($("#intex").val());
    var letterGrade = ""
    /*Calculate final percentage with weighted categories*/
    var finalGrade = (asgn * .55) + (gproj * .05) + (quiz * .1) + (exam * .2) + (intex * .1);
    /*State Final Letter Grade*/
    if (finalGrade >= 94) {
        letterGrade = "A"
    } else if (finalGrade >= 90) {
        letterGrade = "A-"
    } else if (finalGrade >= 87) {
        letterGrade = "B+"
    } else if (finalGrade >= 84) {
        letterGrade = "B"
    } else if (finalGrade >= 80) {
        letterGrade = "B-"
    } else if (finalGrade >= 77) {
        letterGrade = "C+"
    } else if (finalGrade >= 74) {
        letterGrade = "C"
    } else if (finalGrade >= 70) {
        letterGrade = "C-"
    } else if (finalGrade >= 67) {
        letterGrade = "D+"
    } else if (finalGrade >= 64) {
        letterGrade = "D"
    } else if (finalGrade >= 60) {
        letterGrade = "D-"
    } else {
        letterGrade = "E"
    }
    /*Round final grade to two decimals*/
    finalGrade = finalGrade.toFixed(2);
    /*Alert box with grade*/
    alert("Your final percentage is: " + String(finalGrade) + "% \n" + "Your final letter grade is: " + letterGrade);
})