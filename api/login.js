module.exports = (req, res) => {
  if (req.body.password === "exhale123!") {
    return res.status(200).json({ authenticated: true });
  } else {
    return res.status(403).json({ authenticated: false });
  }
};
