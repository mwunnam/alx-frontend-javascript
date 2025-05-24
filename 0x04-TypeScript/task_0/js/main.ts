interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Michael",
  lastName: "Issahaku",
  age: 25,
  location: "Winneba"
};

const student2: Student = {
  firstName: "Gideon",
  lastName: "Sugri",
  age: 22,
  location: "Tamale"
};

const studentsList: Student[] = [student1, student2];


const table = document.createElement('table');
const tableBody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
