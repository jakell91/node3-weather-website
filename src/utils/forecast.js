const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=45f24ed0e30470a71e2223e6f915790c&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather serivce.')
        } else if (body.error) {
            callback(body.error)
        } else {
            console.log(body.current)
            callback(undefined, body.current.weather_descriptions + '. It is currently ' + body.current.temperature + ' degrees out, but feels like ' + body.current.feelslike + ' degrees out. The humidity is ' + body.current.humidity + ".")
        }
    })
}

module.exports = forecast