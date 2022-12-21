// import * as Yup from 'yup';
import * as Yup from 'yup';
import IndexService from '../services/tasks/index';
import StoreService from '../services/tasks/store';
import UpdateService from '../services/tasks/update';
import DestroyService from '../services/tasks/destroy';

class TasksController {

  async index(req, res){
    const service = await IndexService.call(req.user_id);

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

    const service = await UpdateService.call(req.params.id, req.user_id);

    if(!service.success){
      return res.status(service.status).json( service.error );
    }

    return res.status(service.status).json( service.result );
  }

  async destroy(req, res){
    const service = await DestroyService.call(req.params.id, req.user_id);

    if(!service.success){
      return res.status(service.status).json( service.error );
    }

    return res.status(service.status).json( service.result );
  }

}

export default new TasksController();
