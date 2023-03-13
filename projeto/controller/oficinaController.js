const Oficina = require("../model/Oficina");

function abreadd(req, res) {
  res.render("oficina/add");
}

function add(req, res) {
  let oficina = new Oficina({
    nome: req.body.nome,
    email: req.body.email,
    telefone: req.body.telefone,
    endereco: req.body.endereco,
    proprietario: req.body.proprietario,
    cnpj: req.body.cnpj,
  });

  oficina.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/oficina/lst");
    }
  });
}

function list(req, res) {
  Oficina.find({}, function (err, oficinas) {
    res.render("oficina/lst", { Oficinas: oficinas });
  });
}

function filtro(req, res) {
  Oficina.find(
    { nome: new RegExp(req.body.pesquisar, "i") },
    function (err, oficinas) {
      res.render("oficina/lst", { Oficinas: oficinas });
    }
  );
}

function del(req, res) {
  Oficina.findByIdAndDelete(req.params.id, function (err, oficina) {
    res.redirect("/admin/oficina/lst");
  });
}

function abreedt(req, res) {
  Oficina.findById(req.params.id, function (err, oficina) {
    res.render("oficina/edt", { Oficina: oficina });
  });
}

function edt(req, res) {
  Oficina.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      email: req.body.email,
      telefone: req.body.telefone,
      endereco: req.body.endereco,
      proprietario: req.body.proprietario,
      cnpj: req.body.cnpj,
    },
    function (err, oficina) {
      res.redirect("/admin/oficina/lst");
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
