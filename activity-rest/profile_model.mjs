import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */

const profileSchema = mongoose.Schema({
    name: { type: String, required: true },
    birthday: { type: String, required: true }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Profile = mongoose.model("Profile", profileSchema);



const createProfile = async (name, birthday) => {
    // Call the constructor to create an instance of the model class User
    const profile = new Profile ({ name: name, birthday: birthday });
    // Call save to persist this object as a document in MongoDB

    return profile.save();
}

const findProfile = async (filter) => {
    // Use the 'find' method to retrieve users based on the query
    const query = Profile.find(filter);
    return query.exec();
}

const findProfileById = async (_id) => {
    const query = Profile.findById(_id);
    return query
}

const replaceProfile = async (_id, name, birthday) => {
    const updatedProfile = await Profile.findByIdAndUpdate(
        _id,
        { name, birthday },
        { new: true } // This option returns the updated document instead of the old one.
    );

    if (updatedProfile) {
        return 1; 
    } else {
        return 0; 
    }
}

const updateProfile = async (_id, update) => {
    return Profile.updateOne({ _id }, update).exec();
};



export { createProfile, findProfile, findProfileById, replaceProfile, updateProfile };

