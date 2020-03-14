const UserService = require('../services/user');

class UserController {
  async show(req, res) {
    const { id } = req.params;

    const response = await new Promise(
      (resolve, reject) => {
        UserService.getUserById(
          { id }, (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(response);
            }
          });
      });

    return res.json(response);
  }

  async store(req, res) {
    const { email, username, password } = req.body;

    const response = await new Promise(
      (resolve, reject) => {
        UserService.registerUser(
          { user: { email, username, password } },
          (err, response) => {
            if (err) {
              reject(err);
            } else {
              resolve(response);
            }
          });
      });

    return res.json(response);
  }
}

module.exports = new UserController();