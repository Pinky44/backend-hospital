const Router = require("express");
const visitController = require("../controllers/visit-controller");
const authMiddleware = require("../middlewares/auth-middlewares");
const { visitValidation } = require("../middlewares/visit-validation");

const router = new Router();

router.get(
  "/",
  authMiddleware,
  visitController.getAllVisits
);
router.post(
  "/",
  authMiddleware,
  visitValidation,
  visitController.addVisit
);
router.patch(
  "/update/:id",
  authMiddleware,
  visitValidation,
  visitController.updateVisitById
);
router.delete(
  "/delete/:id",
  authMiddleware,
  visitController.deleteVisitById
);

module.exports = router;