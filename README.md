# Node.js HTTP Server Content-Length Header Bug

This repository demonstrates a common but subtle error in Node.js HTTP servers: omitting the `Content-Length` header in the response.  This can lead to unpredictable behavior on the client-side, as the client may not know when to expect the end of the response.

## Bug Description:

The `server.js` file contains a minimal Node.js HTTP server that sends a 'Hello, world!' response without setting the `Content-Length` header.  This can result in incomplete responses or buffering issues on some clients.

## Solution:

The `server-solution.js` file shows the corrected version that includes the `Content-Length` header. This ensures the client receives the full response and avoids any unexpected behavior.

## How to reproduce

1. Clone this repository
2. Run `node server.js`
3. Observe the behavior with different HTTP clients (e.g., curl, browser, etc.)
4. Run `node server-solution.js` and compare the behavior.  

## Additional Notes:

Always set the `Content-Length` header when the response body size is known to ensure reliable communication between the server and client.