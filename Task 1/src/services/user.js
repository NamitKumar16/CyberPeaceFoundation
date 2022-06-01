const userModel = require("../models/user");

module.exports = {
saveData(userObject) {
    const user = userModel.create(userObject);
    return user;
  },
};
