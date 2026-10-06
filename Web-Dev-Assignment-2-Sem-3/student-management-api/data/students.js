// In-memory student data. No database is used, so everything
// resets whenever the server restarts.

const students = [
  { id: 1, name: "Rahul", course: "BCA" },
  { id: 2, name: "Priya", course: "BTech" },
  { id: 3, name: "Amit", course: "BCA" }
];

module.exports = students;
