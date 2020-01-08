export default {
    setUser(state, user) {
        state.user = {
            email: user.email,
            username: user.displayName,
            avatar: user.photoURL,
            uid: user.uid
        }
    }
}