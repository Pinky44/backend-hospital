const VisitsService = require("../services/visits-services");

class VisitController {
  async getAllVisits(req, res, next) {
    try {
      const userId = req.user.id;
      const visits = await VisitsService.getVisits({ userId });

      res.status(200).json(visits);
    } catch (error) {
      next(error);
    }
  }

  async addVisit(req, res, next) {
    try {
      const userId = req.user.id;
      const { name, doctor, date, complaints } = req.body;

      const newVisit = await VisitsService.addNewVisit({
        userId,
        name,
        doctor,
        date,
        complaints,
      });

      res.status(200).json(newVisit);
    } catch (error) {
      next(error);
    }
  }

  async updateVisitById(req, res, next) {
    try {
      const { name, doctor, date, complaints } = req.body;
      const userId = req.params.id;

      const updatedVisit = await VisitsService.updateVisitById(userId, {
        name,
        doctor,
        date,
        complaints,
      });

      res.status(200).json(updatedVisit);
    } catch (error) {
      next(error);
    }
  }

  async deleteVisitById(req, res, next) {
    try {
      const userId = req.params.id;
      const deletedInfo = await VisitsService.deleteVisitById(userId);

      res.status(200).json(deletedInfo);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new VisitController();
