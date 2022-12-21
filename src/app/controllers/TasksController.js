// import * as Yup from 'yup';
import * as Yup from 'yup';
import IndexService from '../services/tasks/index';
import StoreService from '../services/tasks/store';

class TasksController {

  async index(req, res){
    const service = await IndexService.call(req.body);

    if(!service.success){
      return res.status(service.status).json( service.error );
    }

    return res.status(service.status).json( service.result );
  }

	async store(req, res){

    const schema = Yup.object().shape({
      task: Yup.string().required()
    });

    try {
      await schema.validate(req.body, { abortEarly: false });
    } catch (error) {
      const validationErrors = {}
      error.inner.forEach((infos) => {
        if(!infos.path) { return; };

        validationErrors[infos.path] = infos.errors.join(', ');
      });

      return res.status(400).json({ errors: validationErrors })
    }

    const service = await StoreService.call(req.body, req.user_id);

    if(!service.success){
      return res.status(service.status).json( service.error );
    }

    return res.status(service.status).json( service.result );
	}

  async update(req, res){
    return res.json({ ok: true });
  }

}

export default new TasksController();
