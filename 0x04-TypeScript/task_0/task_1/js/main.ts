interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract?: boolean;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};


// Interface for the class constructor
interface StudentConstructor {
  new (firtName: string, lastName: string): StudentClassInterface;
}

// Interface describing the methods of the student class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the student interface
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return `Currently working`;
  }

  displayName(): string {
    return this.firstName;
  }
}

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
  workTeacherTask(): string;
}


// Director Class
class Director implements DirectorInterface {
  workFromHome(): string {
    return `Working from home`;
  };

  getToWork(): string {
    return `Getting a coffee break`;
  };

  workDirectorTasks(): string {
    return `Getting to director task`;
  };
};

class Teacher implements TeacherInterface {
  workFromHome(): string {
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
