const express = require('express');
// const cors = require('cors');
// const { spawn } = require('child_process');
// const path = require('path');

const predict = (req, res) => {
    const image = req.body.image;
    console.log( image);
    res.status(200).json({message: 'Image uploaded successfully'});
}

module.exports = { predict }
