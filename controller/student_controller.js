const Student = require('../models/student');

module.exports.createStudent = async (req, res) => {
  try {
    const user = await Student.create(req.body);
    if (user) {
      return res.status(201).json(user);
    } else {
      return res.status(400).json({ message: "Student not created" });
    }
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports.getAll = async (req, res) => {
  try {
    const users = await Student.find({});
    return res.status(200).json(users);
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports.getById = async (req, res) => {
  try {
    const user = await Student.findById(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "Student not found" });
    }
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports.updateStudent = async (req, res) => {
  try {
    const user = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "Student not found" });
    }
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports.deleteStudent = async (req, res) => {
  try {
    const user = await Student.findByIdAndDelete(req.params.id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ message: "Student not found" });
    }
  } catch (err) {
    console.log("Error", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
