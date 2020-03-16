import express from 'express';
import { indexPage } from '../controllers';

const indexRouter = express.Router();
indexRouter.get('/', indexPage);

export default indexRouter;
