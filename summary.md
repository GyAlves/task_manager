
express.json() 

It parses incoming requests with JSON payloads and is based on body-parser.

Returns middleware that only parses JSON and only looks at requests where the Content-Type header matches the type option.

A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body), or an empty object ({}) if there was no body to parse, the Content-Type was not matched, or an error occurred.

// Replace <password> with the password for the user. 
// Replace myFirstDatabase with the name of the database that connections will use by default.

mongodb+srv://gyasmin:<nodejsprojects>@nodejsprojects.cyoc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

/**
 * Turning the connection into a function allow us to validate first if we are connected 
 * to the database and then connect to the server
 */

require("dotenv").config(); -> Pesquisar