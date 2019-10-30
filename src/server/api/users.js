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
router.put("/:userId", (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});
router.delete("/:userId", (req, res, next) => {
  try {
    /* etc */
  } catch (error) {
    next(error);
  }
});

module.exports = router;
