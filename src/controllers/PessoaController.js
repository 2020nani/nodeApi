import Pessoa from '../models/Pessoa';



class PessoaController {
  async store(req, res) {

    const { id, nome, email } = await Pessoa.create(req.body);

    return res.json({
      id,
      nome,
      email,
    });
  }

  async listar(req, res) {
    const pessoas = await Pessoa.findAll({
      attributes: ['id', 'nome', 'email'],

    })
    return res.json(pessoas)
  }

  async update(req, res) {

    const pessoa = await Pessoa.findOne({
      where: { id: req.params.id }
    })

    const { nome, email } = await pessoa.update(req.body);

    return res.json({ nome, email });
  }


  async delete(req, res) {
    const pessoa = await Pessoa.findOne({
      where: { id: req.params.id }
    })
    await pessoa.destroy(req.body);
    res.json({})
  }
}

export default new PessoaController();