
const multer = require('multer');
const Datauri = require('datauri/parser');
const path = require('path');

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }
});

const dUri = new Datauri();

const dataUri = file => {
  return dUri.format(path.extname(file.originalname).toString(), file.buffer);
 
};

module.exports = {upload, dataUri};
