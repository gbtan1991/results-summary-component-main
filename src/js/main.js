// Step 1: Fetch the file "data.json" from the server
fetch("data.json")
  // Step 2: After the file is fetched successfully, convert its contents to JSON format
  .then((response) => response.json())
  // Step 3: Once the JSON data is ready, do something with it
  .then((data) => {
    // Step 5: Display a success message and the actual data in the console
    console.log("Successfully fetched data from 'data.json'."); 
    console.log(data);
  })
  // Step 6: If there's an error during fetching or JSON conversion, handle it here
  .catch((error) => {
    // Step 7: Display an error message in the console
    console.error("Error:", error);
  });
