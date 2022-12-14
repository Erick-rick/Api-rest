import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = new Router();

router.get('/', UserController.store);

export default router;

/* ***metodos para controller
index        => lista todos os usuários=> GET
store/create => cria um novo usuário   => POST
delete       => apaga um usuário       => DELETE
show         => mostra um usuário      => GET
update       => atualiza um usuário    => PATCH OU PUT
*/
