const mainUserProfile = (req, res) => {
    res.send("Main user information")
}

const testRoute = (req, res) => {
    res.send("Test route")
}

module.exports = {
    mainUserProfile,
    testRoute
}