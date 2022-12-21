import Task from "../../models/Task";

class UpdateService {
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

    await task.update({ check: true })
    return {
      success: true,
      status: 200,
      result: {
        message: "Tarefa atualizada com sucesso!",
        task
      },
      error: {}
    };

  }
}

export default new UpdateService();
