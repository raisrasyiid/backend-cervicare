import healthFacilityService from '../service/healthFacility-service.js';

const get = async (req, res, next) => {
  try {
    const result = await healthFacilityService.get();

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const show = async (req, res, next) => {
  try {
    const { healthFacilityId } = req.params;
    const result = await healthFacilityService.show(healthFacilityId);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const store = async (req, res, next) => {
  try {
    const result = await healthFacilityService.store(req.body);

    res.status(201).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const update = async (req, res, next) => {
  try {
    const { healthFacilityId } = req.params;
    const result = await healthFacilityService.update(req.body, healthFacilityId);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
}

const destroy = async (req, res, next) => {
  try {
    const { healthFacilityId } = req.params;
    const result = await healthFacilityService.destroy(healthFacilityId);

    res.status(200).json({
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  get,
  store,
  update,
  show,
  destroy,
};
