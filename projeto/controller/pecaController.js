const Peca = require("../model/Peca");

function abreadd(req, res) {
  res.render("peca/add");
}

function add(req, res) {
  let peca = new Peca({
    nome: req.body.nome,
    descricao: req.body.descricao,
    fabricante: req.body.fabricante,
    cod: req.body.cod,
    preco: req.body.preco,
  });

  peca.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/peca/lst");
    }
  });
}

function list(req, res) {
  Peca.find({}, function (err, pecas) {
    res.render("peca/lst", { Pecas: pecas });
  });
}

function filtro(req, res) {
  Peca.find(
    { nome: new RegExp(req.body.pesquisar, "i") },
    function (err, pecas) {
      res.render("peca/lst", { Pecas: pecas });
    }
  );
}

function del(req, res) {
  Peca.findByIdAndDelete(req.params.id, function (err, peca) {
    res.redirect("/admin/peca/lst");
  });
}

function abreedt(req, res) {
  Peca.findById(req.params.id, function (err, peca) {
    res.render("peca/edt", { Peca: peca });
  });
}

function edt(req, res) {
  Peca.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      descricao: req.body.descricao,
      fabricante: req.body.fabricante,
      cod: req.body.cod,
      preco: req.body.preco,
    },
    function (err, peca) {
      res.redirect("/admin/peca/lst");
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
