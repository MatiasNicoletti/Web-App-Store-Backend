
exports.create = (req,res,next) => {
    console.log('llego');
    res.status(200).json({message: 'success'});
}