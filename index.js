import http from "k6/http";
import { sleep } from "k6";

export default function () {
  // Define the request headers
  const headers = {
    "Content-Type": "application/json",
  };

  // Define the request body as a JSON object
  const requestBody = {
    email: "anotherRandom3@user.id",
    password: "randomtextaspassword",
  };

  // Send a POST request with the headers and body
  const response = http.post(
    "http://localhost:5000/api/user/login",
    JSON.stringify(requestBody),
    {
      headers: headers,
    }
  );

  // Log the response status code
  console.log(`Response status code: ${response.status}`);

  // Sleep for 1 second (adjust as needed)
  sleep(1);
}

/* 
    * Command: k6 run index.js

    ? http_req_blocked: This metric represents the time the request was blocked before it could be sent.
    ? http_req_connecting: This metric represents the time taken to establish a connection to the server. 
    ? http_req_sending: This metric represents the time taken to send the request data to the server. 
    ? http_req_tls_handshaking: This metric represents the time taken for the TLS handshake if you're using HTTPS.
    ? http_req_waiting: This metric represents the time the request was waiting for a response from the server. 

    ? VU:
    "VU" stands for "Virtual User." A Virtual User is a simulated user or client that interacts with your application  
    during a load test. Each VU is a separate execution thread that performs the actions defined in your k6 test script.

    * Concurrency Simulation: 
    VUs are used to simulate concurrent users or clients accessing your application. 
    For example, if you configure your k6 test to run with 10 VUs, it means that k6 will simulate 10 concurrent
    users making requests to your application simultaneously.

    * Parallel Execution: 
    Each VU runs independently and concurrently. They execute the test script in parallel, allowing 
    you to simulate multiple users interacting with your application at the same time.

    * Load Testing: 
    VUs are particularly useful for load testing and performance testing scenarios. 

    * Command to add VU: 
    k6 run --vus 10 --duration 1m your-script.js
*/
