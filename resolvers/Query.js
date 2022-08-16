const { users, profiles } = require('../data/db')

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
        user: (_, args) => {
            return users.find(user => user.id == args.id)
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