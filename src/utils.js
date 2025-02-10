const getGradePoint = (grade) => {
  switch (grade.toUpperCase()) {
    case "A":
      return 5;
    case "B":
      return 4;
    case "C":
      return 3;
    case "D":
      return 2;
    case "F":
      return 0;
    default:
      return 0;
  }
};

export { getGradePoint };
