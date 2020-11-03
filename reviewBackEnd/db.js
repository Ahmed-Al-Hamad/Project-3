const mongoose = require('mongoose');

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

// connecting mongoose
mongoose.connect(process.env.DB_URL, options, () => {
  console.log('DB READY TO USE');
});

// this line extra
const db = mongoose.connection;
// these lines are extra => handle error / success
db.on('error', (err) => console.log('ERR:', err.message));
db.on('connected', () => console.log('MONGO CONNECTED'));
db.on('disconnected', () => console.log('MONGO DISCONNECTED'));
