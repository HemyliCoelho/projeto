const Compra = require("../model/Compra");
function abreindex(req, res) {
  Compra.find({})
    .populate("comprador")
    .populate("peca")
    .exec(function (err, compras) {
      console.log(compras);
      res.render("public/index", { Compras: compras });
    });
}

module.exports = {
  abreindex,
};
