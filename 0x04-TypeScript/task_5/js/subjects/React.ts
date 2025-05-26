/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;   
  }

  export class React extends Subjects.Subject {
    getRequirements(): string {
        return ' Here is the list of requirements for React'
    };

    getAvailableTeacher(): string {
      if (!this.teacher || this.teacher.experienceTeachingC === undefined || this.teacher.experienceTeachingC <= 0) {
        return 'No available teacher'
      }   
      return `Available Teacher: ${this.teacher.firstName}`; 
    }

  }
}