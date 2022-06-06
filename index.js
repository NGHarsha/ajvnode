const express = require("express");
const cors = require("cors");

const resumeValidate = require("./schemas/resume");
const validateRequest = require("./middlewares/validateRequest");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/", validateRequest(resumeValidate), (req, res) => {
  res.status(200).send("Success");
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});

// const data = {
//   firstName: "Harsha",
//   lastName: "NG",
//   experience: [
//     {
//       company: "TCS",
//       startDate: "2022-08-20",
//       current: false,
//       endDate: "2022-08-20",
//     },
//   ],
// };

// const valid = resumeValidate(data);
// console.log(valid);
// if (!valid) console.log(validate.errors);
