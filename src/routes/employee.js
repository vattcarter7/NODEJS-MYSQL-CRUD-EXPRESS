const router = require('express').Router();

const employeeController = require('../controllers/employeeController');

router.get('/', employeeController.get);
router.post('/add', employeeController.save);
router.put('/update/:id', employeeController.update);
router.delete('/delete/:id', employeeController.delete);

module.exports = router;

