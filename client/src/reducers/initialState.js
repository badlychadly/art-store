export default {
    hasToken: !!sessionStorage.jwt,
    failedLogin: false,
    sendMessage: false
    // change sendMessage into object that contains {sendWelcome: true, sendLogout: false}
}