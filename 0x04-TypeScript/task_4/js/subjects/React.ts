/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subject {
  export interface Teacher {
    experienceTeachingReact?: number;   
  }

  class React extends Subject {
    getRequirement(): string {
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