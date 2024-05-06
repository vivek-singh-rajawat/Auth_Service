 const { response } = require('express');
const UserService = require('../services/userServices');

const userServices = new UserService();
const create = async (req, res) => {
    try {
        const response = await userServices.create({
            email: req.body.email,
            password:req.body.password
        });
        return res.status(201).json({
            success: true,
            massage: 'Successful create a new user',
            data: response,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            massage: 'something went wrong',
            data: {},
            success:false,
            err: error
        });
    }
}

const signIn = async (req, res) => {
    try {
        const response = await userServices.signIn(req.body.email, req.body.password);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            massage: "SuccessFully signed in"
        })
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            massage: 'something went wrong',
            data: {},
            success:false,
            err: error
        });
    }
}

module.exports = {
    create,
    signIn
}