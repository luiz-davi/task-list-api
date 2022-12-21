import Task from "../../models/Task";

class DestroyService {
  async call(task_id, user_id){

    const task = await Task.findOne({
      where: {
        user_id,
        id: task_id
      }
    });

    if(!task){
      return {
        success: false,
        status: 404,
        error: [{ message: 'Tarefa não encontrada!' }]
      };
    }

    await task.destroy();
    return {
      success: true,
      status: 200,
      result: {
        message: "Tarefa apagada com sucesso!"
      },
      error: {}
    };

  }
}

export default new DestroyService();
