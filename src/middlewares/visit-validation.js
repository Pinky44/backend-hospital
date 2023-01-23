const { check } = require('express-validator');
const { validateResult } = require('./result-validation');

const visitValidation  = [
  check('name')
    .isString()
    .trim()
    .isLength({ min: 3 })
    .withMessage('Длина должна быть больше 3 символов'),
  check('doctor')
    .isString()
    .notEmpty()
    .withMessage('Выберите доктора'),
  check('date')
    .isDate(),
  check('complaints')
    .isString()
    .trim()
    .isLength({ min: 6 })
    .withMessage('Длина должна быть больше 6 символов'),
  validateResult,
];

module.exports = { visitValidation };
