const catchAsync = require('../utils/catchAsync');
const QueryOptions = require('../utils/queryOptions');

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

exports.getAll = Model =>
  catchAsync(async (req, res, next) => {
    //to allow nested get reviews on tour
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    const options = new QueryOptions(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
      
    const result = await options.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: result.length,
      result
      
    });
  });;

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