const serviceAccount = {
  type: "service_account",
  project_id: "flip-forms",
  private_key_id: "433245c585bbc956c988a529ee3d4238b300ca9d",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDQZabguPRpm7PH\nHz2VR2fUItj6EO+i1KMIKMEW6pqqR7m3hUtI3TslwE5OUFy+X9n+W41RRAO5qf9T\nwI2ujMWe8JNcAG+BvAf1xVvHr/TpvWIwAAWGH7s/UM8VmalGVq0K0BQtUam0Ht0G\nANrrJKfDUciZGgvG+pajqd2t/ZWTV8hqeB/rNa6uYyGaz73VAkg2ciEIEtcWTAFs\nVZ0WEbue5go23NNafkjFOyBY8ZYA/ipx4i+GGV67A7fHK623Zg39LgZAm2mQ4oLQ\nhkb05r+IzOjkHjsc3qdz5IoC8gRbPP/OeZtrXG1yJ3FdAI664P1RZ64l4VQUjwuL\nXBukfQ61AgMBAAECggEAFXA/qKKeUjb4WaW3GiJMZiBnneIcJO4nD3HR21+rJZVX\nX6/QvOA1c37DD39o6xTFQkt80D1k/LamU6FdcfV9Zwpsvmw1DG2hjAEPng1V7q3S\n6gk2iEO/aZYQl7JFHb1Q8+nQCZF7GdKK/lEcNFCDCa7iKg3p5EBnOtMAwSNzPcL8\nfCjmaMjia+2wipFtkyAc/xrcsunPRPewGKGWkFN1IGEvKig5jLzyUiIF3EkoYLnU\nLkA+lT+31dqck9jyZH3cFX9XiS5htdRTP50DTJhZddNLJxzfblgwxUqhOzUMb2jW\nQhcL9jCA5sBqaJWeMsfnNaokCbgCMn7N4hGpfBfdQQKBgQD0R9Frj3tPnpli3oWy\n7ovFNJFJQhC2eQsmMMtAv5wd/Z+TcB8x1eY3LLi6XWiEdfPLiJZaScU+UZYtBkXw\nfbHsosdTSscP73LVez3WoQGZ5Gwo2ZBS5dobk+8XhEkfVWHgpe3WZYMiNK2605/U\nkHBddOu5uv4MjvttJUGZ4/ywaQKBgQDaZR+ohfp/FAld0uvLFovFVZJTkTWb6hH1\nuWNbbgAni+x9e/YRHayIZ1ynz/tpaYrUd14G/y8aDIi2eoRy0t5odYjB+hXapdbq\nxb4woJwWwDhP3BOyLI1Z7L1h3qO+gMHr8Dk4Bx9FWE8QyyR5wH9IFsGaz7ygz24W\nzzlun7gibQKBgQDU2P8QyaSYa4kbLOkyT8hZvMQbIQWO+UlNrZZshIhzWVqCDWAg\n/E/sI3uSZ3F6eYxD/G+FnGHROyWvdZfbRKqTlgI4ASASMoHMoeXv7bqHbRERRwEK\nOl0hSnU5+Hn+Y1c1d18VQL5SP7Rg5aSOgoxl4krDOrvCFZPeNmhCvvSegQKBgFCs\nhDpLa5Ifw6n97Q4zQORfTNND06rJl2LO3a37f2EcZfqgnPALpx0oGWkAAh4ZV6hO\ng9RP1YVo1eOadGy6CmBJ8n+9Mu92zWIiM7Rgz+fzj5mocTojDQAH3JlXleMcSwYt\n0eUpdFq4WVSZxdqXyizGAzR9wm8g0MjqOYvswictAoGARywx1NcVL6/efIeB6Wxu\nJSRVpGShgmUEs05ay6dKOZOFwnXtjwx+MKu5bknnh+fY/1hEzLRWkvCuJ/uO3EDX\nirTq9uvvRW+L/jafeEDH/C9SdxVKlMvmU4fbk6AfrRvTrdYftt6Z3qSgOOQDu8sK\nuYmiNf5GalA4PdzHfOWskyM=\n-----END PRIVATE KEY-----\n",
  client_email: "flip-forms-948@flip-forms.iam.gserviceaccount.com",
  client_id: "107005414500472407641",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/flip-forms-948%40flip-forms.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

const privateKey = serviceAccount.private_key;
console.log(privateKey);
// encode privateKey to base64 format
const base64PrivateKey = Buffer.from(privateKey).toString("base64");

// decode base64PrivateKey to privateKey
const decodedPrivateKey = Buffer.from(base64PrivateKey, "base64").toString(
  "utf-8",
);

if (privateKey === decodedPrivateKey) {
  console.log("Private key matches");
} else {
  console.log("Private key does not match");
}

console.log(privateKey);
