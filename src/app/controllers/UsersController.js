import StoreService from '../services/users/store';
import UpdateService from '../services/users/update';

class UsersController {

	async store(req, res){

		const service = await StoreService.call(req);

    if(!service.success){
      return res.status(400).json( service.error );
    }

    return res.status(201).json( service.result );

	}

  async update(req, res){
    const service = await UpdateService.call(req.body, req.user_id);

    if(!service.success){
      return res.status(service.status).json( service.error );
    }

    return res.status(service.status).json( service.result );
  }

}

export default new UsersController();
