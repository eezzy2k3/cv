const got = require('got');
const moment = require("moment")

const generate = async (req,res) => {
   
    const position = req.body.position
    const type = req.body.type
    const title =req.body.title
    const company = req.body.company
    const skills = ["coding","learning","working"]
    const email = "eezzy2k3@yahoo.com"
    const prompt = `I am thrilled  to be applying for the ${position} position at ${company}. Since I am someone who thrives in fast-paced environments that are centered around positive leadership.\\n my skills are ${skills}`;
  const url = 'https://api.openai.com/v1/engines/davinci/completions';
  const params = {
    "prompt": prompt ,
    "max_tokens": 220,
    "temperature": 0.7,
    "frequency_penalty": 0.5,
    "n": 1
  };
  const headers = {
    'Authorization': `Bearer ${process.env.OPENAI_SECRET_KEY}`,
  };

  try {
    const response = await got.post(url, { json: params, headers: headers }).json();
    output = `${prompt}${response.choices[0].text}`;
    let date = moment()
    let currentDate = date.format('MMMM Do YYYY');
    res.json({currentDate,Title:`application for the post of ${title} at ${company}`,content:output,signature:"Gbose israel"});
  } catch (err) {
    console.log(err);
  }
};

module.exports = generate