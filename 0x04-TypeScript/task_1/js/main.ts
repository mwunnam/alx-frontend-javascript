interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
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

function printTeacher({firstName, lastName }: Teacher): string {
  return `${firstName[0]}. ${lastName}`
}



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
