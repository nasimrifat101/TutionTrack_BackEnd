const Institutes = require('../../models/Admin/Institute.model');

// Get all institutes
exports.getInstitutes = async (req, res) => {
  try {
    const institutes = await Institutes.find();
    res.json(institutes);
  } catch (error) {
    console.error('Error fetching institutes:', error);
    res.status(500).json({ message: 'Error fetching institutes' });
  }
};

// Get one institute by ID
exports.getInstitute = async (req, res) => {
  try {
    const { id } = req.params;
    const institute = await Institutes.findById(id);
    if (!institute) return res.status(404).json({ message: 'Institute not found' });
    res.json(institute);
  } catch (error) {
    console.error('Error fetching institute:', error);
    res.status(500).json({ message: 'Error fetching institute' });
  }
};