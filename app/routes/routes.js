const adminController = require('../controllers/controller.js');
// console.log("router file")
router.post('/sample', adminController.sample);

module.exports = router;