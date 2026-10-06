// Custom logger middleware: prints method, URL and time for every request.

const logger = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`[${time}] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = logger;
