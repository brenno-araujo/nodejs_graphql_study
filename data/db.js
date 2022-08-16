const profiles = [
    {
        id: 1,
        name: 'admin',
    },
    {
        id: 2,
        name: 'user',
    }
];

const users = [
    {
        id: 1,
        name: "brenno",
        email: "brenno@email.com",
        age: 25,
        wage: 10000.00,
        vip: true,
        profile_id: 1,
        status : "Active"
    },
    {
        id: 2,
        name: "Arthur",
        email: "zico@email.com",
        age: 25,
        wage: 1000000000.00,
        vip: true,
        profile_id: 2,
        status : "Inactive"
    }
];

module.exports = {
    users,
    profiles
}