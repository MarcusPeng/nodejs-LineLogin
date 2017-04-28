var request = require('request');
var config = require('../config');
var notifydb = require('../repository/notifydb');

const lineService = {
    getAccessUrl: function(callback) {
        notifydb.getApplicationInfo(function(item) {
            const accessUrl = config.lineApi.weblogin + 
                "?response_type=code" +
                "&client_id=" + item.channelId + 
                "&redirect_uri=" + item.CallbackUrl +
                "&state=" + config.lineApi.state;
            callback && callback(accessUrl);
        });
    },

    getAccessToken: function(code, callback) {
        let options = {
            url: config.lineApi.accessToken,
            form: { 
                grant_type:'authorization_code',
                client_id: '1512396874',
                client_secret: '4801d29a5f8bf7549316bdf535ecfb01',
                code: code,
                redirect_uri: 'http://localhost:3000/auth/line-callback'
            }
        };

        request.post(options, function(error, response, body) {
            callback && callback(error, response, body);
        });
    },

    getUserProfile: function(accessToken, callback) {
        let options = {
            url: config.lineApi.userProfile,
            headers: { 'Authorization': 'Bearer ' + accessToken }
        };

        request.get(options, function(error, response, body) {
            callback && callback(error, response, body);
        });
    }
};

module.exports = lineService;