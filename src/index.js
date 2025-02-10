import { calculateCGPA } from "./gradeCalculator.js";
import { askForSemesterData } from "./semesterData.js";

const main = async () => {
  const semesterData = await askForSemesterData();
  const { totalCreditPoints, totalNumberOfUnits, cgpa } =
    calculateCGPA(semesterData);
  const tableData = semesterData
    .map((semester) => {
      return semester.courses.map((course, index) => ({
        "#": index + 1,
        Semester: semester.semester,
        CourseCode: course.courseCode,
        Units: course.units,
        Grade: course.grade,
      }));
    })
    .flat();

  if (tableData && tableData.length > 0) {
    console.table(tableData);
  }

  console.log("====================================");
  console.log("Your total credit points: ", totalCreditPoints);
  console.log("Total number of units: ", totalNumberOfUnits);
  console.log(`\n\nYour CGPA is: ${cgpa.toFixed(2)}`);
  console.log("====================================");
};

main();
