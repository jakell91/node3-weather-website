const request = require('request')

const geocode = (address, callback) => {
    const geocodeURL = 'http://api.positionstack.com/v1/forward?access_key=0ef722004cc32fa39533308b5e8dd948&query=' + encodeURIComponent(address) 

    request({ url: geocodeURL, json: true}, (error, {body}, {data}) => {
        if (error){
            callback('Unable to connect to location services')
        } else if (body.error){
            callback('Unable to find address. Please check that address is valid.')
        } else {
            callback(undefined, {
                latitude: data[0].latitude,
                longitude: data[0].longitude,
                location: data[0].label
            })
        }
    })
}

module.exports = geocode