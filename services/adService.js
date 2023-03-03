const fs = require('fs')
const ad = require("../models/Ad")
const config = require('config')

class AdService {

    createDir() {
        const adPath = `${config.get('adPath')} \\ ${ad.user} \\ ${ad.path}`
        return new Promise(((resolve, reject) => {
            try {
                if(!fs.existsSync(ad)) {
                    fs.mkdirSync(adPath)
                    return resolve({message: "Ad was created"})
                } else {
                    return reject({message: "Ad already exist"})
                }
            } catch (error) {
                return reject({message: 'ad error'})
            }
        }))
    }
}

module.exports = new AdService()