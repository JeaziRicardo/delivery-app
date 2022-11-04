const saleService = require('../services/sale.service');

const create = async (req, res) => {
  const { authorization: token } = req.headers;

  const saleID = await saleService.create(req.body, token);
  return res.status(201).json(saleID);
};

module.exports = { create };