const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/userModel');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { role, age } = req.query;
    const filter = {};

    if (role) filter.role = role;
    if (age) filter.age = Number(age);

    const users = await User.find(filter);
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong while fetching users',
      error: error.message
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong while fetching the user',
      error: error.message
    });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, age, role } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const user = await User.create({ name, email, age, role });
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong while creating the user',
      error: error.message
    });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, age, role } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    if (!name || !email || age === undefined || !role) {
      return res.status(400).json({ message: 'Name, email, age and role are required' });
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email, age, role },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong while updating the user',
      error: error.message
    });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong while patching the user',
      error: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid user ID' });
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json({
      message: 'User deleted successfully',
      user: deletedUser
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Something went wrong while deleting the user',
      error: error.message
    });
  }
});

module.exports = router;
