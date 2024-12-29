const express = require('express');

const app = express();
const port = 5000;

const students = [
  { id: 1, name: 'John Doe', passport_no: 'A1234567', email: 'john.doe@example.com', phone_no: '123-456-7890', created_on: '2023-01-01' },
  { id: 2, name: 'Jane Smith', passport_no: 'B2345678', email: 'jane.smith@example.com', phone_no: '234-567-8901', created_on: '2023-02-01' },
  { id: 3, name: 'Michael Johnson', passport_no: 'C3456789', email: 'michael.johnson@example.com', phone_no: '345-678-9012', created_on: '2023-03-01' }
];

app.get('/students', (req, res) => {
  res.json(students);
});
const applications = [
  { id: 1, uni_name: 'Harvard University', course_name: 'Computer Science', status: 'Pending', created_on: '2023-04-01', student_id: 1, student_name: 'John Doe' },
  { id: 2, uni_name: 'Stanford University', course_name: 'Mechanical Engineering', status: 'Accepted', created_on: '2023-05-01', student_id: 2, student_name: 'Jane Smith' },
  { id: 3, uni_name: 'MIT', course_name: 'Electrical Engineering', status: 'Rejected', created_on: '2023-06-01', student_id: 3, student_name: 'Michael Johnson' }
];

app.get('/applications', (req, res) => {
  res.json(applications);
});

const universities = [
  { id: 1, name: 'Harvard University', location: 'Cambridge, MA', country: 'USA', description: 'A private Ivy League research university.' },
  { id: 2, name: 'Stanford University', location: 'Stanford, CA', country: 'USA', description: 'A private research university known for its academic strength.' },
  { id: 3, name: 'MIT', location: 'Cambridge, MA', country: 'USA', description: 'A private research university known for its strong emphasis on scientific and technological education and research.' }
];

app.get('/universities', (req, res) => {
  res.json(universities);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});