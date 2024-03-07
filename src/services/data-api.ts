import axios from "axios";

const getComments = async () => {
  try {
    const response = await axios.get("./data.json");
    return response.data; // Return the actual JSON data
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error; // Rethrow the error to handle it in the caller function
  }
};

export default { getComments };
