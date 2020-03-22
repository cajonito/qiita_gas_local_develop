import { greeter } from "./module";

declare var global: any;

global.testGreeter = () => {
  const user = "Grant";
  Logger.log(greeter(user));
};
