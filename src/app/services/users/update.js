class UpdateService {

  async call(body, user_id){
     console.log(body);
     console.log(user_id);

    return {
      success: true,
      status: 200,
      result: {
        message: "heheheheheh",
      },
      error: {}
    };

  }

}

export default new UpdateService();
