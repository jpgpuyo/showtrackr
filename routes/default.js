var defaultUrl = function(req, res) {
    res.redirect('/#' + req.originalUrl);
}

module.exports = defaultUrl