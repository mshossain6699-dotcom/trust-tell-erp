const express = require('express');
const router = express.Router();

// Get all sales
router.get('/', (req, res) => {
  res.json({ message: 'Get all sales' });
});

// Create sale
router.post('/', (req, res) => {
  res.json({ message: 'Create sale' });
});

// Get sale by invoice
router.get('/invoice/:invoiceNumber', (req, res) => {
  res.json({ message: 'Get sale by invoice' });
});

// Update installment payment
router.put('/:id/installment-payment', (req, res) => {
  res.json({ message: 'Update installment payment' });
});

module.exports = router;
