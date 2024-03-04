findGradeLevel("John","91");
findGradeLevel("Den","86");
findGradeLevel("Ben", "75");
findGradeLevel("Met","60");
findGradeLevel("Anthony","52");
findGradeLevel("Ron","-2");
findGradeLevel("Kris","20");


function findGradeLevel(name, marks) {
    if (marks >= 90 && marks <= 100) {
        console.log(name + " you have received S grade");
    }

    else if (marks >= 80 && marks < 90) {
        console.log(name + " you have received A grade");
    }

    else if (marks >= 70 && marks < 80) {
        console.log(name + " you have received B grade");
    }

    else if (marks >= 60 && marks < 70) {
        console.log(name + " you have received C grade");
    }

    else if (marks >= 50 && marks < 60) {
        console.log(name + " you have received D grade");
    }

    else if (marks > 100 || marks < 0) {
        console.log("Invalid marks");
    }

    else  {
        console.log(name + " has failed");
    }

}