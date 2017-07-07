import fetch from "../util/fetch-fill";
import URI from "urijs";

// /records endpoint
window.path = "http://localhost:3000/records";

// Your retrieve function plus any additional functions go here ...
const url = 'http://localhost:3000/records';
fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function() {
    // Your code for handling the data you get from the API
    let records = data.results;
    return records;
})
.catch(function() {
    // This is where you run code if the server returns any errors
    console.log("Something is wrong.");
});


export default retrieve;
