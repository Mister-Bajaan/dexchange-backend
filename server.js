const app = require("./app.js");

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
