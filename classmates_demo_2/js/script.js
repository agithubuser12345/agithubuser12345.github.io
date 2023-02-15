function getDate() {
    // Get the "date" element we made in step 1
    let text = document.getElementById("date");
    // Create and set variable to current date and time using the Date() function
    const now = new Date();
    // Set the content inside the p tag to the date 
    text.innerHTML = now;
}
