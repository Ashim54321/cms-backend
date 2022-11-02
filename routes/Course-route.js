const router =  require('express').Router();
const { getCourse,updateCourse,addCourse,deleteCourse,getSingleCourse } = require('../controllers/Course-controller')

router.get('/course/',getCourse);
router.post('/course/',addCourse);
router.put('/course/:id/',updateCourse);
router.delete('/course/:id/',deleteCourse);
router.get('/course/:id/',getSingleCourse);

module.exports = router;
