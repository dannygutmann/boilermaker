const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});
router.post("/", (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});
router.put("/:puppyId", (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});
router.delete("/:puppyId", (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

module.exports = router;
