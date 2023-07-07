// worker.ts

type RequestEvent = {
	request: Request;
  };
  
  addEventListener('fetch', (event: FetchEvent) => {
	event.respondWith(handleRequest(event));
  });
  
  async function handleRequest(event: FetchEvent) {
	const { request } = event;
  
	if (request.method !== 'POST') {
	  return new Response(`Invalid method: ${request.method}`, { status: 405 });
	}
  
	const data = await request.json();
  
	// Process the data or perform any desired operations
  
	// Send a response back to the client
	return new Response(JSON.stringify({ message: 'Text successfully saved!' }), {
	  headers: { 'Content-Type': 'application/json' },
	  status: 200,
	});
  }
  