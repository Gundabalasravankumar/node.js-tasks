const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/status', (req, res) => {
  res.status(200).json({
    status: 'OK',
    message: 'Store API is running'
  });
});

app.post('/api/test-body', (req, res) => {
  res.status(200).json({ received: req.body });
});

app.listen(PORT, () => {
  console.log(`Store API is running on http://localhost:${PORT}`);
});
