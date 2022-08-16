const { profiles } = require('../data/db');

module.exports = {
    profile: (user) => {
        return profiles.find(profile => profile.id === user.profile_id)
    }
}