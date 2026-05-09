import app from "./app.js";
import config from "./app/config/index.js";

const port = config.port



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
