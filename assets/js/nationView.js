document.addEventListener('DOMContentLoaded', () => {
    // retirieves submitted data
    const savedData = localStorage.getItem('myNation');

    // Checks if data exists
    if (savedData) {
        // Convert the string back into a JavaScript Object
        const nation = JSON.parse(savedData);

        // Inject the text data into your HTML IDs
        document.getElementById('displayName').textContent = nation.name;
        document.getElementById('displayLeader').textContent = nation.leader;
        document.getElementById('displayBiome').textContent = nation.biomeTitle;
        document.getElementById('displayDescription').textContent = nation.biomeDesc;

        // Handles Date format
        if (nation.createdAt) {
            const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
            document.getElementById('displayDate').textContent = new Date(nation.createdAt).toLocaleDateString(undefined, dateOptions);
        }

        // 5. Handle the Flag Image
        const flagImg = document.getElementById('displayFlag');
        const flagPlaceholder = document.getElementById('flagPlaceholder');
        
        if (nation.flag) {
            flagImg.src = nation.flag;
            flagImg.style.display = 'block'; // Show the image
            flagPlaceholder.style.display = 'none'; // Hide the "No Flag" text
        }
        
        console.log("Nation profile loaded for:", nation.name);

    } else {
        // if nation doesn't exist, redirect to create nation page
        alert("No nation data found in local storage, please create one.");
        window.location.href = 'createNation.html';
    }
});