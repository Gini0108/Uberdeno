import { SmtpClient } from "https://raw.githubusercontent.com/Schotsl/denomailer/master/smtp.ts";
import { initializeEnv } from "../helper.ts";

initializeEnv([
  "IMAP_PORT",
  "IMAP_HOSTNAME",
  "IMAP_USERNAME",
  "IMAP_PASSWORD",
]);

const smtpClient = new SmtpClient();
await smtpClient.connectTLS({
  hostname: Deno.env.get("SMTP_HOSTNAME")!,
  username: Deno.env.get("SMTP_USERNAME")!,
  password: Deno.env.get("SMTP_PASSWORD")!,
  port: +Deno.env.get("SMTP_PORT")!,
});

export default smtpClient;
