module.exports.success = (req, res, message, cod_status)=>{
    res.status(cod_status || 200).send({
        error: '',
        body: message
    });
}

module.exports.error = (req, res, message, cod_status, details)=>{
    console.log(`[response error] ${details}`);

    res.status(cod_status || 500).send({
        error: message,
        body: ''
    });
}