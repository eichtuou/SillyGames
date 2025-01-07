module.exports = (err, req, res, next) => {
    const status = err.status || 500;
    res.status(status);

    // development
    if (process.env.NODE_ENV === 'development') {
        console.error(err.stack);
        return res.render('error', {
            message: err.message,
            error: err
        });
    }

    // production
    res.render('error', {
        message: err.message,
        error: {}
    });
};
