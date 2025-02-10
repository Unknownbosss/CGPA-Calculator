import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askForSemesterData = async () => {
  const semesterData = [];
  const numSemesters = await askForNumSemesters();

  for (let i = 0; i < numSemesters; i++) {
    const semester = await askForSemester(i + 1);
    semesterData.push(semester);
  }

  return semesterData;
};

const askForNumSemesters = async () => {
  return new Promise((resolve) => {
    rl.question('Enter the number of semesters: ', (numSemesters) => {
      if (isNaN(numSemesters) || numSemesters <= 0) {
        console.log('Invalid input. Please enter a positive integer.');
        resolve(askForNumSemesters());
      } else {
        resolve(parseInt(numSemesters));
      }
    });
  });
};

const askForSemester = async (semesterNumber) => {
  const numCourses = await askForNumCourses(semesterNumber);
  const courses = [];

  for (let i = 0; i < numCourses; i++) {
    const course = await askForCourse(semesterNumber, i + 1);
    courses.push(course);
  }

  return { semester: semesterNumber, courses };
};

const askForNumCourses = async (semesterNumber) => {
  return new Promise((resolve) => {
    rl.question(`Enter the number of courses in semester ${semesterNumber}: `, (numCourses) => {
      if (isNaN(numCourses) || numCourses <= 0) {
        console.log('Invalid input. Please enter a positive integer.');
        resolve(askForNumCourses(semesterNumber));
      } else {
        resolve(parseInt(numCourses));
      }
    });
  });
};

const askForCourse = async (semesterNumber, courseNumber) => {
  const courseCode = await askForCourseCode(semesterNumber, courseNumber);
  const grade = await askForGrade(semesterNumber, courseNumber, courseCode);
  const units = await askForUnits(semesterNumber, courseNumber, courseCode);

  return { courseCode, grade, units };
};

const askForCourseCode = async (semesterNumber, courseNumber) => {
  return new Promise((resolve) => {
    rl.question(`Enter the course code for course ${courseNumber} in semester ${semesterNumber}: `, resolve);
  });
};

const askForGrade = async (semesterNumber, courseNumber, courseCode) => {
  return new Promise((resolve) => {
    rl.question(`Enter the grade for course ${courseCode} in semester ${semesterNumber} (A, B, C, D, F): `, resolve);
  });
};

const askForUnits = async (semesterNumber, courseNumber, courseCode) => {
  return new Promise((resolve) => {
    rl.question(`Enter the number of units for course ${courseCode} in semester ${semesterNumber}: `, (units) => {
      if (isNaN(units) || units <= 0) {
        console.log('Invalid input. Please enter a positive integer.');
        resolve(askForUnits(semesterNumber, courseNumber, courseCode));
      } else {
        resolve(parseInt(units));
      }
    });
  });
};

export { askForSemesterData };