require('../../db');
const User = require('../../collections/User');

// const getUserCtrl = async (title) => {
//     if(title){
//         return await User.findOne({username: title});
//     }
// };

const getUserCtrl = async () => {
    const users = await User.find();
    
    return users;
};

module.exports = getUserCtrl;