import { Router } from 'express';
import { StudentController } from '../controllers/StudentController';

const router = Router();

// Create a new student
router.post('/students', StudentController.create);

// Get all students
router.get('/students', StudentController.getAll);

// Get a student by ID
router.get('/students/:id', StudentController.getById);

// Update a student by ID
router.put('/students/:id', StudentController.update);

// Delete a student by ID
router.delete('/students/:id', StudentController.delete);

export default router;