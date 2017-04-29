const config = {
    lineApi: {
        weblogin: "https://access.line.me/dialog/oauth/weblogin",
        accessToken: "https://api.line.me/v2/oauth/accessToken",
        userProfile: "https://api.line.me/v2/profile",
        state: "marcus822",
        callbackUrl: "http://localhost:3000/auth/line-callback"
    },
    sql: {
        host: "xxx.xxx.xxx.xxx",
        user: "user",
        password: "password",
        database: "database"
    }
}

module.exports = config;