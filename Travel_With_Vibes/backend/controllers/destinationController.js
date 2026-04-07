const getDestinations = (req, res) => {
  const data = [
    {
      id: 1,
      name: "Goa",
      country: "India",
      avg_cost: 10000,
      image_url: "https://source.unsplash.com/400x300/?goa"
    },
    {
      id: 2,
      name: "Manali",
      country: "India",
      avg_cost: 8000,
      image_url: "https://source.unsplash.com/400x300/?manali"
    },
    {
      id: 3,
      name: "Jaipur",
      country: "India",
      avg_cost: 6000,
      image_url: "https://source.unsplash.com/400x300/?jaipur"
    }
  ];

  const { budget } = req.query;

  const filtered = budget
    ? data.filter(item => item.avg_cost <= budget)
    : data;

  res.json(filtered);
};

module.exports = { getDestinations };