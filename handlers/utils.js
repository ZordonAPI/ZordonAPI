const getHandler = (res, fn) => {

    fn.then( result => {
        res.send(result);
    }).catch( err => {
        res.send([]);
    });
};

module.exports = {
    getHandler
}