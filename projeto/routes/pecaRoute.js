const express = require("express");
const router = express.Router();

const pecaController = require("../controller/pecaController");

router.get("/peca/add", pecaController.abreadd);
router.post("/peca/add", pecaController.add);
router.get("/peca/lst", pecaController.list);
router.post("/peca/lst", pecaController.filtro);
router.get("/peca/edt/:id", pecaController.abreedt);
router.post("/peca/edt/:id", pecaController.edt);
router.get("/peca/del/:id", pecaController.del);

module.exports = router;
