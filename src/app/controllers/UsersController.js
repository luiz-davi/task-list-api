import StoreService from "../services/users/store";

class UsersController {

	async store(req, res){

		const service = await StoreService.call(req);

    if(!service.success){
      return res.status(400).json( service.error );
    }

    return res.status(201).json( service.result );

	}

}

export default new UsersController();
