const keepAlive = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Keep-alive ping successful",
  });
};

export { keepAlive };
