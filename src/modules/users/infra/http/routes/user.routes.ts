import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import UsersAvatarController from '../controllers/UserAvatarController';
import UsersController from '../controllers/UsersController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();
const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();

const upload = multer(uploadConfig);

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersAvatarController.update,
);
export default usersRouter;
