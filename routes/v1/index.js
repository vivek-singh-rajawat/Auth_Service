const express = require('express');

const UserController = require("../../controllers/userController");
const {authRequestVatiors} = require("../../middlewares/index");

const router = express.Router();

router.post(
    "/signup",
    authRequestVatiors.validateUserAuth,
     UserController.create
    );
router.post(
    "/signin",
    authRequestVatiors.validateUserAuth,
    UserController.signIn
);

module.exports = router;