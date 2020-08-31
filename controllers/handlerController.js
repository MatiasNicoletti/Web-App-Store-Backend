const catchAsync = require('../utils/catchAsync');

exports.create = Model => catchAsync(async(req, res, next) => {
    const result = await Model.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            result
        }
    });
});