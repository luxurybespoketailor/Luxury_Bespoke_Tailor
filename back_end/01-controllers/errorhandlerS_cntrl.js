const globalErrorHandler = (err, req, res, next) => {
  console.error("Server error:", err);
  res.status(err.status || 500).json({
    status: "error",
    message: err.message || "Internal server error",
  });
};

const notFoundHandler = (req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
};

export { globalErrorHandler, notFoundHandler };
