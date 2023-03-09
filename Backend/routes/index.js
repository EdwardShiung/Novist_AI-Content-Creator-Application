module.exports = app => {


app.get('/api/users/test', (req, res) => {
    res.send('Okay');
})
}