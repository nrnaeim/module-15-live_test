//Dependencies
//Core Dependencies
//const  =require();

//External Dependencies
//const  =require();

//Local Dependencies
const { app } = require("./src/app.js");

const PORT = 1000;
app.listen(PORT, () => {
  console.log(`Server lintening on http://localhost:${PORT}`);
});
