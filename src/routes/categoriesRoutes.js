const CategoryController = require('../app/controllers/CategoryController');
const router = require('./routes');

router.post('/categories', CategoryController.store);
router.get('/categories', CategoryController.index);
router.get('/categories/:id', CategoryController.show);
router.put('/categories/:id', CategoryController.update);
router.delete('/categories/:id', CategoryController.delete);

module.exports = router;
