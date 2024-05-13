const bcrypt = require("bcrypt");
const User = require("../models/User");

async function getAllUsers() {
  return User.find({}, "fullName email courses isActive role");
}

async function findUserByEmail(email) {
  return User.findOne({ email });
}

// async function findAllUsers() {
//   getAllUsers
//   return User.find({  }).lean();
// }

async function findUserByID(_id) {

  return User.findById(_id).select("-password").lean();

}

async function enroll(_id, language) {
  try {
    // Find the user by ID
    const user = await User.findById(_id);

    if (!user) {
      // Handle the case where the user is not found
      return { success: false, message: 'User not found.' };
    }

    // Assuming the courses property exists on the User model
    // Modify the logic based on your actual User model structure
    user.courses = user.courses || []; // Ensure courses array exists

    // Check if the language is already enrolled
    const existingCourse = user.courses.find(course => course.language === language);

    if (existingCourse) {
      // Handle the case where the language is already enrolled
      return { success: false, message: `User is already enrolled in ${language} course.` };
    }

    // Enroll the user in the new language
    user.courses.push({ language:language });

    // Save the updated user object
    await user.save();

    return { success: true, message: `User enrolled in ${language} course successfully.` };
  } catch (error) {
    // Handle any errors that may occur during the database operation
    console.error('Error enrolling user:', error);
    return { success: false, message: 'Error enrolling user.' };
  }
}


async function completeQuestion(_id, language) {
  try {
    // Find the user by ID
    const user = await User.findById(_id);

    if (!user) {
      // Handle the case where the user is not found
      return { success: false, message: 'User not found.' };
    }

    // Assuming the courses property exists on the User model
    // Modify the logic based on your actual User model structure
    user.courses = user.courses || []; // Ensure courses array exists

    // Check if the language is already enrolled
    const existingCourse = user.courses.find(course => course.language === language);

    if (existingCourse) {
      // Handle the case where the language is already enrolled
      return { success: false, message: `User is already enrolled in ${language} course.` };
    }

    // Enroll the user in the new language
    existingCourse.currentQuestion=existingCourse.currentQuestion+1

    // Save the updated user object
    await user.save();

    return { success: true, message: `Completed the question` };
  } catch (error) {
    // Handle any errors that may occur during the database operation
    console.error('Error enrolling user:', error);
    return { success: false, message: 'Error completing question user.' };
  }
}
async function completeLesson(_id, language) {
  try {
    // Find the user by ID
    const user = await User.findById(_id);

    if (!user) {
      // Handle the case where the user is not found
      return { success: false, message: 'User not found.' };
    }

    // Assuming the courses property exists on the User model
    // Modify the logic based on your actual User model structure
    user.courses = user.courses || []; // Ensure courses array exists

    // Check if the language is already enrolled
    const existingCourse = user.courses.find(course => course.language === language);

    // if (existingCourse) {
    //   // Handle the case where the language is already enrolled
    //   return { success: false, message: `User is already enrolled in ${language} course.` };
    // }
    console.log(existingCourse,'EXIST')

    // Enroll the user in the new language
    existingCourse.lessonsCompleted=existingCourse.lessonsCompleted+1

    // Save the updated user object
    await user.save();

    return { success: true, message: `Completed the lesson` };
  } catch (error) {
    // Handle any errors that may occur during the database operation
    console.error('Error enrolling user:', error);
    return { success: false, message: 'Error completing lesson user.' };
  }
}

async function authenticateLogin(email, password) {
  const user = await findUserByEmail(email);
  // console.log(user)

  if (!user) {
    throw new Error("No user found");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    throw new Error("Invalid Password!");
  }
  console.log(user,'USER')

  return { _id:user._id, fullName: user.fullName, role: user.role };
}
async function authenticateSignup(fullName, email, password) {
  const user = await findUserByEmail(email);
  // console.log(user)

  if (user) {
    throw new Error("Email id already taken! ");
  } else {
    const hashPassowrd = await bcrypt.hash(password, 5);

    const newUser = new User({
      fullName: fullName,
      email: email,
      password: hashPassowrd,
    });
    newUser
      .save()
      .then((savedUser) => {
        console.log("User added successfully:", savedUser);
      })
      .catch((error) => {
        console.error("Error adding user:", error);
      });
    return { email: newUser.email, fullName: newUser.fullName };
  }
}

module.exports = {

  getAllUsers,
  authenticateSignup,
  authenticateLogin,
  findUserByID,
  enroll,
  completeLesson,
  completeQuestion,
  // findAllUsers
};
