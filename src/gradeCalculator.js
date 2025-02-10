import { getGradePoint } from "./utils.js";

const calculateCGPA = (semesterData) => {
  let totalCreditPoints = 0;
  let totalNumberOfUnits = 0;

  semesterData.forEach((semester) => {
    semester.courses.forEach((course) => {
      const gradePoint = getGradePoint(course.grade);
      const creditPoints = gradePoint * course.units;
      totalCreditPoints += creditPoints;
      totalNumberOfUnits += course.units;
    });
  });

  return {
    totalCreditPoints,
    totalNumberOfUnits,
    cgpa: totalCreditPoints / totalNumberOfUnits,
  };
};

export { calculateCGPA };
