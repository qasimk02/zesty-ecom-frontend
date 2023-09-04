import jwtDecode from "jwt-decode";

const checkTokenExpiry = (jwtToken) => {
  try {
    const decodedToken = jwtDecode(jwtToken);
    const currentTime = Date.now() / 1000; // Convert to seconds

    if (decodedToken.exp && decodedToken.exp < currentTime) {
      // Token has expired
      return true;
    } else {
      // Token is still valid
      return false;
    }
  } catch (error) {
    // Error occurred while decoding or token is invalid
    return true;
  }
};

export default checkTokenExpiry;
