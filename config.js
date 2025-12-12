// this is used to parse the .env file variables for jsonwebtokens

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD

module.exports = {
    JWT_ADMIN_PASSWORD,
    JWT_USER_PASSWORD
}