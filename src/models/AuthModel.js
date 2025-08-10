// models/AuthModel.js
export const AuthModel = {
  login: async (email, password) => {
    // Simulated API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    if (email === "test@gmail.com" && password === "123456") {
      return { token: "fake-jwt-token" };
    } else {
      throw new Error("Invalid credentials");
    }
  }
};
