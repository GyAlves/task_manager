const notFound = (req, res) => res.status(404).send("Routes does not exits")

module.exports = notFound