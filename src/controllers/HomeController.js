import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Teste1',
      sobrenome: 'Teste',
      email: 'teste@teste.com',
      idade: 30,
      peso: 300,
      altura: 1.9,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
