export const selectUser = (userInfo) => {
    return {
        type: "SELECT_USER",
        userInfo
    };
};