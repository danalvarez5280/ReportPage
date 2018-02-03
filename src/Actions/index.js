export const selectUser = (userInfo) => {
    console.log('select user fired', userInfo)
    return {
        type: "SELECT_USER",
        userInfo
    };
};