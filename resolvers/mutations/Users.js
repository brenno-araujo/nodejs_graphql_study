const { users, proxId } = require('../../data/db');

function userExists(filter) {
    if (filter.id) {
        const userIndex = users.findIndex(user => user.id == filter.id);

        if (userIndex === -1) {
            throw new Error('User not found');
        }
        return userIndex;
    }
    else if (filter.email) {
        const userIndex = users.findIndex(user => user.email == filter.email);

        if (userIndex === -1) {
            throw new Error('User not found');
        }
        return userIndex;
    }   
}

module.exports = {
    createUser(_, { data }) {
        const emailExisting = users.some(user => user.email === data.email);
        if (emailExisting) {
            throw new Error('Email already exists');
        }
        const id = proxId();
        const newUser = { ...data, id, wage: 1000.00, vip: false, profile_id: 1, status: "Active" };
        users.push(newUser);
        return newUser;
    },

    deleteUser(_,  {filter} ) {
        const userIndex = userExists(filter);
        const deletedUser = users[userIndex];
        users.splice(userIndex, 1);
        return deletedUser ? deletedUser : null;
    },

    updateUser(_, { filter, data }) {
        const userIndex = userExists(filter);

        if (userIndex === -1) {
            throw new Error('User not found');
        }
        const updatedUser = { ...users[userIndex], ...data };
        users[userIndex] = updatedUser;
        return updatedUser;
    }

}