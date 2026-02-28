const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: false,
        unique: true,
    },
    role: {
        type: String,
        enum: ["SUPERADMIN", "SYSADMIN", "PRINCIPAL", "TEACHER", "ACCOUNTANT", "MANAGER", "STUDENT"],
        required: true
    },
    permissions: { type: [String], default: [] },
    instituteId: { type: mongoose.Schema.Types.ObjectId, ref: "Institutes" },
    isActive: {
        type: Boolean,
        default: true,
    },
    password: {
        type: String,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema, 'users');
