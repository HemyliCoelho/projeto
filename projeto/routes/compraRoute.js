const express = require("express");
const router = express.Router();

const compraController = require("../controller/compraController");

router.get("/compra/add", compraController.abreadd);
router.post("/compra/add", compraController.add);
router.get("/compra/lst", compraController.list);
router.post("/compra/lst", compraController.filtro);
router.get("/compra/edt/:id", compraController.abreedt);
router.post("/compra/edt/:id", compraController.edt);
router.get("/compra/del/:id", compraController.del);

module.exports = router;
