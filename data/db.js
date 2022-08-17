let id = 1;
function proxId() {
    return id++;
}

const profiles = [
    {
        id: proxId(),
        name: 'admin',
    },
    {
        id: proxId(),
        name: 'user',
    }
];

const users = [
    {
        id: proxId(),
        name: "brenno",
        email: "brenno@email.com",
        age: 25,
        wage: 10000.00,
        vip: true,
        profile_id: 1,
        status : "Active"
    },
    {
        id: proxId(),
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
    profiles,
    proxId
}