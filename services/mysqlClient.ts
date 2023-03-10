import { testMysql } from "../testing.ts";
import { initializeEnv } from "../helper.ts";

// I've added #= to the end of the URL so UDD won't update the package
import {
  Client,
  configLogger,
} from "https://deno.land/x/mysql@v2.10.2/mod.ts#=";

initializeEnv([
  "MYSQL_PORT",
  "MYSQL_USERNAME",
  "MYSQL_PASSWORD",
  "MYSQL_HOSTNAME",
  "MYSQL_DATABASE",
]);

// Disable logging for MySQL
await configLogger({ enable: false });

const mysqlClient = new Client();

mysqlClient.connect({
  hostname: Deno.env.get("MYSQL_HOSTNAME")!,
  username: Deno.env.get("MYSQL_USERNAME")!,
  password: Deno.env.get("MYSQL_PASSWORD")!,
  port: +Deno.env.get("MYSQL_PORT")!,
  db: Deno.env.get("MYSQL_DATABASE")!,
});

await testMysql(mysqlClient);

export default mysqlClient;
