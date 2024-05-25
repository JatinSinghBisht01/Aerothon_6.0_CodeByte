const express = require('express');

const predict = (req, res) => {
    const image = req.file;
    // console.log(image);
    res.status(200).json({message: 'Image uploaded successfully'});
}

module.exports = { predict }
