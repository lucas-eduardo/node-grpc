module.exports = {
  getUserById(call, callback) {
    const { id } = call.request;

    const user = {
      username: 'Lucas',
      email: 'lucas@lucas.com',
      password: '123456'
    };

    return callback(null, { user: { ...user, id } });
  },

  registerUser(call, callback) {
    const user = call.request.user;
    
    return callback(null, { user: { ...user, id: 2 } });
  },

  loginUser(call, callback) {
    return callback(null, { token: 'ab5412478wewewe' });
  }
}