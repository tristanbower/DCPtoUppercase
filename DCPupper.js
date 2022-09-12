async function main() {
  const compute = require("dcp/compute");
  // Rest of the code will go in the following section

  /* INPUT DATA */
  const inputSet = Array.from("yelling!");

  /* WORK FUNCTION */
  async function workFunction(letter) {
    progress();
    return letter.toUpperCase();
  }
  /* COMPUTE FOR */
  const job = compute.for(inputSet, workFunction);
  job.public.name = "toUpperCase";

  /* PROCESS RESULTS */
  let resultSet = await job.exec();
  resultSet = Array.from(resultSet);
  console.log(resultSet.toString().replace(",", ""));
  console.log(" - Job Complete");
}
// Still need to figure out architecture of id.keystore
require("dcp-client").init("https://scheduler.distributed.computer").then(main);
