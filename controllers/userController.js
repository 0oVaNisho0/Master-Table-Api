const { User } = require('../models');
const createError = require('../utils/createError');

exports.getAllUser = async (req, res, next) => {
  try {
    const users = await User.findAll();

    res.status(200).json({ users });
  } catch (err) {
    next(err);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findOne({ where: { id: userId } });

    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const { name, lastName, phoneNumber, email, userDetail, userNumber } =
      req.body;

    const user = await User.create({
      name,
      lastName,
      userNumber,
      phoneNumber,
      email,
      userDetail,
    });

    res.status(201).json({ user });
  } catch (err) {
    next(err);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { name, lastName, phoneNumber, email, userDetail, userNumber } =
      req.body;
    const { userId } = req.params;

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      createError('user not found', 400);
    }

    if (name) {
      user.name = name;
    }
    if (lastName) {
      user.lastName = lastName;
    }
    if (phoneNumber) {
      user.phoneNumber = phoneNumber;
    }
    if (email) {
      user.email = email;
    }
    if (userDetail) {
      user.userDetail = userDetail;
    }
    if (userNumber) {
      user.userNumber = userNumber;
    }

    await user.save();

    res.json({ user });
  } catch (err) {
    next(err);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;

    const user = await User.findOne({ where: { id: userId } });

    if (!user) {
      createError('user not found', 400);
    }

    await user.destroy();

    res.status(204).json();
  } catch (err) {
    next(err);
  }
};
