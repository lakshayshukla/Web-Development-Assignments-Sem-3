const express = require("express");
const students = require("../data/students");

const router = express.Router();

// keeps track of the next id to hand out
let nextId = students.length ? Math.max(...students.map((s) => s.id)) + 1 : 1;

// checks name and course from the request body
// returns an error message string, or null if everything is fine
function validateStudent(body) {
  if (!body || typeof body !== "object") {
    return "Request body is missing";
  }
  const { name, course } = body;

  if (typeof name !== "string" || name.trim() === "") {
    return "Name is required and must be a non-empty string";
  }
  if (typeof course !== "string" || course.trim() === "") {
    return "Course is required and must be a non-empty string";
  }
  return null;
}

// GET /students - all students
router.get("/", (req, res) => {
  res.status(200).json(students);
});

// GET /students/:id - one student
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: "Student id must be a positive number" });
  }

  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ error: `Student with id ${id} not found` });
  }

  res.status(200).json(student);
});

// POST /students - add a student
router.post("/", (req, res) => {
  const error = validateStudent(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  const newStudent = {
    id: nextId++,
    name: req.body.name.trim(),
    course: req.body.course.trim()
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT /students/:id - update a student
router.put("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: "Student id must be a positive number" });
  }

  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ error: `Student with id ${id} not found` });
  }

  const error = validateStudent(req.body);
  if (error) {
    return res.status(400).json({ error });
  }

  student.name = req.body.name.trim();
  student.course = req.body.course.trim();

  res.status(200).json(student);
});

// DELETE /students/:id - remove a student
router.delete("/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return res.status(400).json({ error: "Student id must be a positive number" });
  }

  const index = students.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ error: `Student with id ${id} not found` });
  }

  const [removed] = students.splice(index, 1);
  res.status(200).json({ message: "Student deleted successfully", student: removed });
});

module.exports = router;
