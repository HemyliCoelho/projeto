const Compra = require("../model/Compra");
const Peca = require("../model/Peca");
const Oficina = require("../model/Oficina");

function abreadd(req, res) {
  Oficina.find({}, function (err, oficinas) {
    Peca.find({}, function (err, pecas) {
      res.render("compra/add", { Pecas: pecas, Oficinas: oficinas });
    });
  });
}
function add(req, res) {
  let compra = new Compra({
    peca: req.body.peca,
    precoPeca: req.body.precoPeca,
    quantidade: req.body.quantidade,
    precoTotal: parseInt(req.body.quantidade) * parseInt(req.body.precoPeca),
    comprador: req.body.comprador,
  });

  compra.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/compra/lst");
    }
  });
}

function list(req, res) {
  Compra.find({}, function (err, compras) {
    res.render("compra/lst", { Compras: compras });
  });
}

function filtro(req, res) {
  Compra.find({})
    .populate("peca")
    .populate("comprador")
    .exec(function (err, compras) {
      res.render("compra/lst", { Compras: compras });
    });
}

function del(req, res) {
  Compra.findByIdAndDelete(req.params.id, function (err, compra) {
    res.redirect("/admin/compra/lst");
  });
}

function abreedt(req, res) {
  Compra.findById(req.params.id, function (err, compra) {
    Peca.find({}, function (err, pecas) {
      Oficina.find({}).exec(function (err, oficinas) {
        res.render("compra/edt", {
          Compra: compra,
          Pecas: pecas,
          Oficinas: oficinas,
        });
      });
    });
  });
}

function edt(req, res) {
  Compra.findByIdAndUpdate(
    req.params.id,
    {
      peca: req.body.peca,
      precoPeca: req.body.precoPeca,
      quantidade: req.body.quantidade,
      precoTotal: parseInt(req.body.quantidade) * parseInt(req.body.precoPeca),
      comprador: req.body.comprador,
    },
    function (err, compra) {
      res.redirect("/admin/compra/lst");
    }
  );
}

module.exports = {
  abreadd,
  add,
  list,
  filtro,
  abreedt,
  edt,
  del,
};
