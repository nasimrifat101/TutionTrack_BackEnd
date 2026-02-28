const User = require('../../models/Admin/User.Model');
const bcrypt = require('bcryptjs');

exports.createPrincipal = async (req, res) => {
    try {
        const { username, password, instituteId } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }


        const hashedPassword = await bcrypt.hash(password, 10);

        const institute = await Institutes.findById(instituteId);
        if (!institute) {
            return res.status(404).json({ message: 'Institute not found' });
        }

        const principal = await User.create({
            name: '',
            username,
            email: '',
            phone: '',
            password: hashedPassword,
            role: 'PRINCIPAL',
            permissions: [
                "VIEW_INSTITUTE",
                "EDIT_INSTITUTE",
                "MANAGE_USERS",
                "MANAGE_STUDENTS",
                "MANAGE_SUBJECTS",
                "MANAGE_FEES",
                "MANAGE_EXAMS",
                "BULK_ACTIONS"
            ],
            instituteId,
        });

        res.status(201).json({ message: 'Principal created successfully', principal });
    } catch (error) {
        console.error('Error creating principal:', error);
        res.status(500).json({ message: 'Error creating principal' });
    }
};

