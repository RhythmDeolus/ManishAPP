const express = require('express');

const app = express();
const port = 5000;

const students = [
  { id: 1, name: 'John Doe', passport_no: 'A1234567', email: 'john.doe@example.com', phone_no: '123-456-7890', created_on: '2023-01-01' },
  { id: 2, name: 'Jane Smith', passport_no: 'B2345678', email: 'jane.smith@example.com', phone_no: '234-567-8901', created_on: '2023-02-01' },
  { id: 3, name: 'Michael Johnson', passport_no: 'C3456789', email: 'michael.johnson@example.com', phone_no: '345-678-9012', created_on: '2023-03-01' },
  { id: 4, name: 'Emily Davis', passport_no: 'D4567890', email: 'emily.davis@example.com', phone_no: '456-789-0123', created_on: '2023-04-01' },
  { id: 5, name: 'Daniel Brown', passport_no: 'E5678901', email: 'daniel.brown@example.com', phone_no: '567-890-1234', created_on: '2023-05-01' },
  { id: 6, name: 'Sophia Wilson', passport_no: 'F6789012', email: 'sophia.wilson@example.com', phone_no: '678-901-2345', created_on: '2023-06-01' },
  { id: 7, name: 'James Taylor', passport_no: 'G7890123', email: 'james.taylor@example.com', phone_no: '789-012-3456', created_on: '2023-07-01' },
  { id: 8, name: 'Olivia Martinez', passport_no: 'H8901234', email: 'olivia.martinez@example.com', phone_no: '890-123-4567', created_on: '2023-08-01' },
  { id: 9, name: 'Liam Anderson', passport_no: 'I9012345', email: 'liam.anderson@example.com', phone_no: '901-234-5678', created_on: '2023-09-01' },
  { id: 10, name: 'Ava Thomas', passport_no: 'J0123456', email: 'ava.thomas@example.com', phone_no: '012-345-6789', created_on: '2023-10-01' },
  { id: 11, name: 'William Jackson', passport_no: 'K1234567', email: 'william.jackson@example.com', phone_no: '123-456-7890', created_on: '2023-11-01' },
  { id: 12, name: 'Isabella White', passport_no: 'L2345678', email: 'isabella.white@example.com', phone_no: '234-567-8901', created_on: '2023-12-01' },
  { id: 13, name: 'Mason Harris', passport_no: 'M3456789', email: 'mason.harris@example.com', phone_no: '345-678-9012', created_on: '2024-01-01' },
  { id: 14, name: 'Mia Clark', passport_no: 'N4567890', email: 'mia.clark@example.com', phone_no: '456-789-0123', created_on: '2024-02-01' },
  { id: 15, name: 'Benjamin Lewis', passport_no: 'O5678901', email: 'benjamin.lewis@example.com', phone_no: '567-890-1234', created_on: '2024-03-01' },
  { id: 16, name: 'Charlotte Robinson', passport_no: 'P6789012', email: 'charlotte.robinson@example.com', phone_no: '678-901-2345', created_on: '2024-04-01' },
  { id: 17, name: 'Lucas Walker', passport_no: 'Q7890123', email: 'lucas.walker@example.com', phone_no: '789-012-3456', created_on: '2024-05-01' },
  { id: 18, name: 'Amelia Young', passport_no: 'R8901234', email: 'amelia.young@example.com', phone_no: '890-123-4567', created_on: '2024-06-01' },
  { id: 19, name: 'Henry King', passport_no: 'S9012345', email: 'henry.king@example.com', phone_no: '901-234-5678', created_on: '2024-07-01' },
  { id: 20, name: 'Evelyn Wright', passport_no: 'T0123456', email: 'evelyn.wright@example.com', phone_no: '012-345-6789', created_on: '2024-08-01' },
];

app.get('/students', (req, res) => {
  res.json(students);
});
const applications = [
  { id: 1, uni_name: 'Harvard University', course_name: 'Computer Science', status: 'Pending', created_on: '2023-04-01', student_id: 1, student_name: 'John Doe' },
  { id: 2, uni_name: 'Stanford University', course_name: 'Mechanical Engineering', status: 'Accepted', created_on: '2023-05-01', student_id: 2, student_name: 'Jane Smith' },
  { id: 3, uni_name: 'MIT', course_name: 'Electrical Engineering', status: 'Rejected', created_on: '2023-06-01', student_id: 3, student_name: 'Michael Johnson' },
  { id: 4, uni_name: 'Harvard University', course_name: 'Law', status: 'Pending', created_on: '2023-07-01', student_id: 4, student_name: 'Emily Davis' },
  { id: 5, uni_name: 'Stanford University', course_name: 'Medicine', status: 'Accepted', created_on: '2023-08-01', student_id: 5, student_name: 'Daniel Brown' },
  { id: 6, uni_name: 'MIT', course_name: 'Physics', status: 'Rejected', created_on: '2023-09-01', student_id: 6, student_name: 'Sophia Wilson' },
  { id: 7, uni_name: 'Harvard University', course_name: 'Chemistry', status: 'Pending', created_on: '2023-10-01', student_id: 7, student_name: 'James Taylor' },
  { id: 8, uni_name: 'Stanford University', course_name: 'Biology', status: 'Accepted', created_on: '2023-11-01', student_id: 8, student_name: 'Olivia Martinez' },
  { id: 9, uni_name: 'MIT', course_name: 'Mathematics', status: 'Rejected', created_on: '2023-12-01', student_id: 9, student_name: 'Liam Anderson' },
  { id: 10, uni_name: 'Harvard University', course_name: 'Economics', status: 'Pending', created_on: '2024-01-01', student_id: 10, student_name: 'Ava Thomas' },
  { id: 11, uni_name: 'Stanford University', course_name: 'Political Science', status: 'Accepted', created_on: '2024-02-01', student_id: 11, student_name: 'William Jackson' },
  { id: 12, uni_name: 'MIT', course_name: 'Philosophy', status: 'Rejected', created_on: '2024-03-01', student_id: 12, student_name: 'Isabella White' },
  { id: 13, uni_name: 'Harvard University', course_name: 'Sociology', status: 'Pending', created_on: '2024-04-01', student_id: 13, student_name: 'Mason Harris' },
  { id: 14, uni_name: 'Stanford University', course_name: 'Anthropology', status: 'Accepted', created_on: '2024-05-01', student_id: 14, student_name: 'Mia Clark' },
  { id: 15, uni_name: 'MIT', course_name: 'Linguistics', status: 'Rejected', created_on: '2024-06-01', student_id: 15, student_name: 'Benjamin Lewis' },
  { id: 16, uni_name: 'Harvard University', course_name: 'History', status: 'Pending', created_on: '2024-07-01', student_id: 16, student_name: 'Charlotte Robinson' },
  { id: 17, uni_name: 'Stanford University', course_name: 'Art', status: 'Accepted', created_on: '2024-08-01', student_id: 17, student_name: 'Lucas Walker' },
  { id: 18, uni_name: 'MIT', course_name: 'Music', status: 'Rejected', created_on: '2024-09-01', student_id: 18, student_name: 'Amelia Young' },
  { id: 19, uni_name: 'Harvard University', course_name: 'Theater', status: 'Pending', created_on: '2024-10-01', student_id: 19, student_name: 'Henry King' },
  { id: 20, uni_name: 'Stanford University', course_name: 'Dance', status: 'Accepted', created_on: '2024-11-01', student_id: 20, student_name: 'Evelyn Wright' }
];

app.get('/applications', (req, res) => {
  res.json(applications);
});

const universities = [
  { id: 1, name: 'Harvard University', location: 'Cambridge, MA', country: 'USA', description: 'A private Ivy League research university.' },
  { id: 2, name: 'Stanford University', location: 'Stanford, CA', country: 'USA', description: 'A private research university known for its academic strength.' },
  { id: 3, name: 'MIT', location: 'Cambridge, MA', country: 'USA', description: 'A private research university known for its strong emphasis on scientific and technological education and research.' },
  { id: 4, name: 'University of Oxford', location: 'Oxford', country: 'UK', description: 'A collegiate research university and the oldest university in the English-speaking world.' },
  { id: 5, name: 'University of Cambridge', location: 'Cambridge', country: 'UK', description: 'A collegiate research university and the second-oldest university in the English-speaking world.' },
  { id: 6, name: 'California Institute of Technology', location: 'Pasadena, CA', country: 'USA', description: 'A private research university known for its strength in science and engineering.' },
  { id: 7, name: 'University of Chicago', location: 'Chicago, IL', country: 'USA', description: 'A private research university known for its strong emphasis on research and academic rigor.' },
  { id: 8, name: 'Princeton University', location: 'Princeton, NJ', country: 'USA', description: 'A private Ivy League research university known for its academic excellence.' },
  { id: 9, name: 'Columbia University', location: 'New York, NY', country: 'USA', description: 'A private Ivy League research university known for its diverse academic programs.' },
  { id: 10, name: 'University of California, Berkeley', location: 'Berkeley, CA', country: 'USA', description: 'A public research university known for its academic strength and research output.' }
];

app.get('/universities', (req, res) => {
  res.json(universities);
});


const courses = [
  { id: 1, name: 'Computer Science', degree_type: 'BSc', mode: 'Full-time', delivery: 'On-campus', university_name: 'Harvard University', country: 'USA', duration: '4 years', yearly_tuition_fee: '50,000', apply_date: '2023-01-01', start_date: '2023-09-01' },
  { id: 2, name: 'Mechanical Engineering', degree_type: 'BEng', mode: 'Full-time', delivery: 'On-campus', university_name: 'Stanford University', country: 'USA', duration: '4 years', yearly_tuition_fee: '55,000', apply_date: '2023-02-01', start_date: '2023-09-01' },
  { id: 3, name: 'Electrical Engineering', degree_type: 'BEng', mode: 'Part-time', delivery: 'Online', university_name: 'MIT', country: 'USA', duration: '5 years', yearly_tuition_fee: '40,000', apply_date: '2023-03-01', start_date: '2023-09-01' },
  { id: 4, name: 'Law', degree_type: 'LLB', mode: 'Full-time', delivery: 'On-campus', university_name: 'Harvard University', country: 'USA', duration: '3 years', yearly_tuition_fee: '60,000', apply_date: '2023-04-01', start_date: '2023-09-01' },
  { id: 5, name: 'Medicine', degree_type: 'MBBS', mode: 'Full-time', delivery: 'On-campus', university_name: 'Stanford University', country: 'USA', duration: '6 years', yearly_tuition_fee: '70,000', apply_date: '2023-05-01', start_date: '2023-09-01' }
];

app.get('/courses', (req, res) => {
  res.json(courses);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});