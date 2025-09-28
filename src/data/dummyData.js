export const DUMMY_STUDENTS = [
    { id: 'S001', name: 'Alice Johnson', email: 'alice@example.com', department: 'Computer Science', year: 3, feeStatus: 'Paid', amountDue: 0 },
    { id: 'S002', name: 'Bob Williams', email: 'bob@example.com', department: 'Mechanical Eng.', year: 2, feeStatus: 'Pending', amountDue: 250 },
    { id: 'S003', name: 'Charlie Brown', email: 'charlie@example.com', department: 'Electronics', year: 4, feeStatus: 'Paid', amountDue: 0 },
    { id: 'S004', name: 'Diana Miller', email: 'diana@example.com', department: 'Civil Eng.', year: 1, feeStatus: 'Overdue', amountDue: 500 },
];

export const DUMMY_COURSES = [
    { code: 'CS101', name: 'Introduction to Programming', teacher: 'Dr. Alan Turing', credits: 3 },
    { code: 'ME203', name: 'Thermodynamics', teacher: 'Dr. Jane Foster', credits: 4 },
    { code: 'EE301', name: 'Digital Circuits', teacher: 'Prof. Ada Lovelace', credits: 4 },
];

export const DUMMY_FACULTY = [
    { id: 'F001', name: 'Dr. Alan Turing', email: 'alan.t@example.com', department: 'Computer Science', role: 'Professor' },
    { id: 'F002', name: 'Dr. Jane Foster', email: 'jane.f@example.com', department: 'Mechanical Eng.', role: 'Asst. Professor' },
    { id: 'F003', name: 'Prof. Ada Lovelace', email: 'ada.l@example.com', department: 'Electronics', role: 'Professor' },
];

export const DUMMY_BOOKS = [
    { id: 'B001', title: 'The Art of Computer Programming', author: 'Donald Knuth', status: 'Available', copies: 5 },
    { id: 'B002', title: 'Introduction to Algorithms', author: 'THC, et al.', status: 'Borrowed', copies: 3 },
    { id: 'B003', title: 'Fundamentals of Physics', author: 'Halliday, Resnick', status: 'Available', copies: 10 },
];

export const DUMMY_EXAMS = [
    { code: 'CS101-Mid', name: 'Intro to Programming - Mid Term', date: '2025-10-20', type: 'Theory' },
    { code: 'ME203-Fin', name: 'Thermodynamics - Final Exam', date: '2025-12-15', type: 'Theory' },
    { code: 'EE301-Lab', name: 'Digital Circuits - Lab Final', date: '2025-12-10', type: 'Practical' },
];
