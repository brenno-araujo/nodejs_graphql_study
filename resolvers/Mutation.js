const { users, proxId } = require('../data/db');

module.exports = {
    createUser(_, { name, email, age }) {
        const id = proxId();
        const newUser = { id, name, email, age, wage: 1000.00, vip: false, profile_id: 1, status: "Active" };
        users.push(newUser);
        return newUser;
    }
}