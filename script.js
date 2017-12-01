function calculateCurrentGrade(){
    var hwGrades = document.getElementById("hwScores").value;
    var hwArray = convertArrayStringToNumber(hwGrades);
    var hwAvg = averageArray(hwArray);
    console.log(hwAvg);
    colorRowByGrade(1,hwAvg);

    var qGrades = document.getElementById("qScores").value;
    var qArray = convertArrayStringToNumber(qGrades);
    var qAvg = averageArray(qArray);
    console.log(qAvg);
    colorRowByGrade(2,qAvg);

    var testsGrades = document.getElementById("testScores").value;
    var testsArray = convertArrayStringToNumber(testsGrades);
    var testsAvg = averageArray(testsArray);
    console.log(testsAvg);
    colorRowByGrade(3,testsAvg);


    var homeworkWeight = (parseInt(document.getElementById("hwWeight").value))/100;
    var quizzesWeight = (parseInt(document.getElementById("qWeight").value))/100;
    var testsWeight = (parseInt(document.getElementById("testWeight").value))/100;
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var sumOfWeight = homeworkWeight + quizzesWeight + testsWeight + (finalWeight/100);
    if(sumOfWeight !=1 || isNaN(finalWeight)){
        document.getElementById("currentGrade").innerHTML = "ERROR! The weight percentages you have entered do not add up to 100% or the weight you entered is not a number. Please enter a valid weight.";
    } else {
        var homework = hwAvg * homeworkWeight;
        var quizzes = qAvg * quizzesWeight;
        var tests = testsAvg * testsWeight;

        var currentGrade = ((homework + quizzes + tests)/(100 - finalWeight)) * 100;
        currentGrade = Math.floor(currentGrade);
        console.log(currentGrade);
        document.getElementById("currentGrade").innerHTML = "Your current grade is " + currentGrade + "% and you need at least a...";
    }

    return currentGrade;

}


function convertArrayStringToNumber(str){
    var arr = str.split(",");
    for(var i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }
    console.log(arr);
    return arr;
}

function averageArray(arr){
    var sum = 0;
    for(var i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    var avg = sum/(arr.length);
    return avg;
    //→ takes an array of numbers and returns the average of those numbers
}


function calculateGradeNeeded(){
    var currentGrade = calculateCurrentGrade();
    console.log(currentGrade);
    var desiredTotalGrade = document.getElementById("gradeWanted").value;
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    if(isNaN(desiredTotalGrade) || isNaN(finalWeight) || desiredTotalGrade == ""){
        document.getElementById("finalGradeNeeded").innerHTML = "ERROR! Please enter a valid weight and desired grade (without the % symbol)."
    } else {
        var one = currentGrade/100;
        console.log(one);
        var two = one * (100-finalWeight);
        console.log(two);
        var three = desiredTotalGrade - two;
        var four = three / finalWeight;
        console.log(four);
        var five = four * 100;
        five = Math.floor(five);
        document.getElementById("finalGradeNeeded").innerHTML = five + "%  on the final to get " + desiredTotalGrade + "% in the class.";
        return five;
    }
}

function colorRowByGrade(row, grade){
    if(grade>=90){
        document.getElementById(row).style.backgroundColor = "chartreuse";
    }
    if(grade>=80 && grade<90){
        document.getElementById(row).style.backgroundColor = "gold";
    }
    if(grade>=70 && grade<80){
        document.getElementById(row).style.backgroundColor = "darkorange";
    }
    if(grade<70){
        document.getElementById(row).style.backgroundColor = "red";
    }
}


function reset(){
    document.getElementById("currentGrade").innerHTML = "";
    document.getElementById("finalGradeNeeded").innerHTML = "";
    document.getElementById("gradeWanted").value = "";
    document.getElementById("finalWeight").value = "";
    document.getElementById(1).style.backgroundColor = "#cfdefb";
    document.getElementById(2).style.backgroundColor = "#cfdefb";
    document.getElementById(3).style.backgroundColor = "#cfdefb";
}