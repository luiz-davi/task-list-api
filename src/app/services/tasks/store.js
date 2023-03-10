import Task from '../../models/Task';

class StoreService {
  async call(body, user_id){

    const { task } = body;

    const tasks = await Task.create({
      user_id,
      task
    })

    return {
      success: true,
      status: 201,
      result: {
        message: "Tarefa cadastrada com sucesso!",
        tasks
      },
      error: {}
    };
  }
}

export default new StoreService();
