function gradeCalculator(num) {
  if (num <= 100 && num >= 90) {
    console.log("Grade A");
  } else if (num <= 89 && num >= 80) {
    console.log("Grade B");
  } else if (num <= 79 && num >= 70) {
    console.log("Grade C");
  } else if (num <= 69 && num >= 60) {
    console.log("Grade D");
  } else if (num <= 59 && num >= 0) {
    console.log("Grade F");
  } else {
    console.log("error");
  }
}

gradeCalculator(85);
