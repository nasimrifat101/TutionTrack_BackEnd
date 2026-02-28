const Institutes = require('../../models/Admin/Institute.model');

exports.createInstitute = async (req, res) => {
    try {
        const { name, email, eiin, phone, address } = req.body;

        const exists = await Institutes.findOne({
            $or: [{ email }, { eiin }]
        });

        if (exists) {
            return res.status(400).json({ message: 'Institute already exists' });
        }

        const institute = await Institutes.create({
            name,
            email,
            eiin,
            phone,
            address,
        });

        res.status(201).json({ message: 'Institute created successfully', institute });
    } catch (error) {
        console.error('Error creating institute:', error);
        res.status(500).json({ message: 'Error creating institute' });
    }
};


exports.getInstitutes = async (req, res) => {
    try {
        const institutes = await Institutes.find();
        res.json(institutes);
    } catch (error) {
        console.error('Error fetching institutes:', error);
        res.status(500).json({ message: 'Error fetching institutes' });
    }
};