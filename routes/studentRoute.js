const express=require('express');
const router=express.Router();

const studentController=require('../controller/student_controller');

router.get('/allStudents',studentController.getAll);
router.get('/:id',studentController.getById);
router.post('/addStudent',studentController.createStudent);
router.put('/:id',studentController.updateStudent);
router.delete(':id',studentController.deleteStudent);


module.exports = router;