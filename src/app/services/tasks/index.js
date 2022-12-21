import Task from "../../models/Task";

class IndexService {
  async call(user_id){

    const tasks = await Task.findAll({
      where: { user_id, check: false }
    });

    return {
      success: true,
      status: 200,
      result: {
        message: "Im here moda foca",
        tasks
      },
      error: {}
    };
  }
}

export default new IndexService();
