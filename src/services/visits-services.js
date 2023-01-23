const VisitModel = require("../models/visit");

class VisitsService {
  async getVisits(userId) {
    const visits = await VisitModel.find({userId});

    return visits;
  }

  async addNewVisit(createdVisit) {
    const newVisit = new VisitModel(createdVisit);
    const data = await newVisit.save();

    return data;
  }

  async updateVisitById(userId, visit) {
    const updatedVisit = await VisitModel.findByIdAndUpdate(
      { _id: userId },
      { ...visit },
      { new: true }
    );

    return updatedVisit;
  }

  async deleteVisitById(userid) {
    const deletedInfo = await VisitModel.deleteOne({id: userid});
    
    return deletedInfo;
  }
}

module.exports = new VisitsService();
