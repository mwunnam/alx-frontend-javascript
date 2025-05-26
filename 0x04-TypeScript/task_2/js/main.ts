// Interface for Director
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Interface for Teacher
interface TeacherInterface {
  workdFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}


// Director Class
class Director implements DirectorInterface {
  workFromHome(): string {
    return `Working from home`;
  };
  
  getCoffeeBreak(): string {
    return  'Break time';
  }
  getToWork(): string {
    return `Getting a coffee break`;
  };

  workDirectorTasks(): string {
    return `Getting to director task`;
  };
};

class Teacher implements TeacherInterface {
  workdFromHome(): string {
    return `Cannot work from home`;
  }
  
  getCoffeeBreak(): string {
    return `Cannot have a break`;
  }

  workTeacherTasks(): string {
    return `Getting to work`;
  }
};

function createEmployee(salary: number | string): Teacher | Director {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
};


// Type predicate
function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
};

function executeWork(employee: Teacher | Director){
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}


// Define a string Literal type
type Subjects = 'Math' | 'History';


// Function with the string litral type
function teachClass(todayClass: Subjects): string {
 if (todayClass === 'Math') {
   return 'Teaching Math';
 } else {
  return 'Teaching History';
 }
}
