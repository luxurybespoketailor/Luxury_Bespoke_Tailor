// Keep-Alive Controller
// Silent endpoint for server keep-alive functionality
// No logging on success to keep it silent

const keepAlive = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Keep-alive ping successful",
  });
};

export { keepAlive };

