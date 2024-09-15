document.getElementById('dobForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the default way
    
    // Get the selected date of birth
    const dob = document.getElementById('dob').value;

    // Validate that a date has been selected
    if (!dob) {
        alert('Please select your date of birth');
        return;
    }

    // Calculate the age based on the selected date
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Display a message showing the user's age
    const message = document.getElementById('message');
    message.innerHTML = `You are ${age} years old.`;
});
