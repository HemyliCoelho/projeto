const express = require("express");
const router = express.Router();

const oficinaController = require("../controller/oficinaController");

router.get("/oficina/add", oficinaController.abreadd);
router.post("/oficina/add", oficinaController.add);
router.get("/oficina/lst", oficinaController.list);
router.post("/oficina/lst", oficinaController.filtro);
router.get("/oficina/edt/:id", oficinaController.abreedt);
router.post("/oficina/edt/:id", oficinaController.edt);
router.get("/oficina/del/:id", oficinaController.del);
module.exports = router;
