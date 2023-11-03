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
    birthday: { type: Date, required: true },
    weight: { type: String, required: false },
    height: { type: Number, required: false }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Activity = mongoose.model("Activity", activitySchema);



const createActivity = async (name, start, end, amount, color, memo) => {
    // Call the constructor to create an instance of the model class User
    const activity = new Activity({ name: name, start: start, end: end, amount: amount, color: color, memo: memo });
    // Call save to persist this object as a document in MongoDB

    return activity.save();
}

const findActivityById = async (_id) => {
    const query = Activity.findById(_id);
    return query
}

const findActivities = async (filter) => {
    // Use the 'find' method to retrieve users based on the query
    const query = Activity.find(filter);
    return query.exec();
}

const replaceActivity = async (_id, name, start, end, amount, color, memo) => {
    const updatedActivity = await Activity.findByIdAndUpdate(
        _id,
        { name, start, end, amount, color, memo },
        { new: true } // This option returns the updated document instead of the old one.
    );

    if (updatedActivity) {
        return 1; 
    } else {
        return 0; 
    }
}

const updateActivity = async (_id, update) => {
    return Activity.updateOne({ _id }, update).exec();
};

const deleteById = async (_id) => {
    // Use the 'deleteOne' method to delete the activity with the specified _id
    const result = await Activity.deleteOne({ _id }).exec();
    return result.deletedCount;
};


export { createActivity, findActivityById, findActivities, replaceActivity, updateActivity, deleteById }

