import { Router } from 'express';
import UserController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Não deveria existir

router.get('/:id', UserController.show);// lista usuários
router.get('/', UserController.index); // lista usuário

router.post('/', UserController.store);
router.put('/:id', loginRequired.UserController.update);
router.delete('/:id', loginRequired.UserController.delete);

export default router;

/* ***metodos para controller
index        => lista todos os usuários=> GET
store/create => cria um novo usuário   => POST
delete       => apaga um usuário       => DELETE
show         => mostra um usuário      => GET
update       => atualiza um usuário    => PATCH OU PUT
*/
