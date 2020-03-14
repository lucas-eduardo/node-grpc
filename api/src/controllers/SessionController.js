const UserService = require('../services/user');

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const response = await new Promise((resolve, reject) => {
      UserService.loginUser(
        { user: { email, password } }, (err, response) => {
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

module.exports = new SessionController();