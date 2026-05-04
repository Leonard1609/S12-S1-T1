const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Ruta de usuarios - En desarrollo' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Registro de usuarios - En desarrollo' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login de usuarios - En desarrollo' });
});

module.exports = router;