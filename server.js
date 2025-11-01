const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Kết nối tới MongoDB
mongoose.connect('mongodb://localhost:27017/vaccine-tracking', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Kết nối MongoDB thành công!'))
  .catch(err => console.error('Lỗi kết nối MongoDB:', err));

app.get('/', (req, res) => {
  res.send('Chào mừng đến với hệ thống theo dõi vaccine!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});