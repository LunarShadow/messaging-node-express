const { TEST_VAR } = process.env
const testing = (res, req) => {
  console.log(TEST_VAR)
}

module.exports = {
  testing
}
