const { users, profiles } = require('../data/db')

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
    hello: () => "Hello World",
        newDate: () => new Date(),
        userLoggued: () => {
            return {
                id: 1,
                name: "brenno",
                email: "brenno@email.com",
                age: 25,
                wage: 10000.00,
                vip: true
            }
        },
        users: () => {
            return users
        },
        user: (_, {filter}) => {
            const userIndex = userExists(filter);
            if (userIndex === -1) {
                throw new Error('User not found');
            }
            return users[userIndex];
        },
        product: () => {
            return {
                id: 1,
                name: "Product 1",
                price: 1000.00,
                discount: 50.00
            }
        },
        certifications: () => {
            return ["NodeJs", "GraphQL", "PHP"]
        },
        numbersMegaSena: () => {
            const order = (a, b) => a - b
            return Array(6).fill(0).map( (_, i) => i + 1 ).sort(order)
        },
        profiles: () => {
            return profiles
        },
        profile: (_, args) => {
            return profiles.find(profile => profile.id == args.id)
        },
}