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

exports.getById = Model => catchAsync(async(req, res, next) => {
    const result = await Model.findById(req.params.id);
    res.status(201).json({
        status: 'success',
        data: {
            result
        }
    });
});

exports.getAll = Model => catchAsync(async(req, res, next) => {
    const result = await Model.find();
    res.status(201).json({
        status: 'success',
        data: {
            result
        }
    });
});

exports.update = Model => catchAsync(async(req, res, next) => {
    const result = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true, //return the new document
        // runValidators: true
      });

    res.status(201).json({
        status: 'success',
        data: {
            result
        }
    });
});

exports.deleteAll = Model => catchAsync(async(req, res, next) => {
    const result = await Model.remove();
    res.status(201).json({
        status: 'success',
        data: {
            result
        }
    });
});