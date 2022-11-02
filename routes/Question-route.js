const router = require('express').Router();
const {addQuestion,RemoveQuestion,showQuestion,updateQuestion} = require('../controllers/Question-controller');


router.get('/question/',showQuestion);
router.post('/question/',addQuestion);
router.put('/question/:id',updateQuestion);
router.delete('/question/:id',RemoveQuestion);

module.exports = router