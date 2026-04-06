document.addEventListener('DOMContentLoaded', () => {
    const nationForm = document.querySelector('form');
    const flagInput = document.getElementById('flagUpload');
    const flagPreview = flagInput.nextElementSibling;

    // Flag Preview Logic 
    flagInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                // Update the preview area with the selected image
                flagPreview.innerHTML = `<img src="${event.target.result}" style="width: 100%; height: 100%; object-fit: cover;">`;
            }
            reader.readAsDataURL(file);
        }
    });

    // Biome Descriptions Upon Selecting a Biome
    const biomeData = {
    forest: {
        title: "Forest",
        desc: "The Forest provides resource bonuses for wood, leather, and iron"
    },
    mountains: {
        title: "Mountains",
        desc: "The Mountains provide resource bonuses for stone, iron, and clay"
    },
    desert: {
        title: "Desert",
        desc: "The Desert provides resource bonuses for iron, clay, and wood"
    },
    grasslands: {
        title: "Grasslands",
        desc: "The grasslands provide resource bonuses for leather, wood, and stone"
    },
    swamp: {
        title: "Swamp",
        desc: "The Swamp provides resources bonuses for clay, stone, and leather"
    }
};

// Target the elements
const biomeSelect = document.getElementById('biomeSelect');
const biomeBold = document.getElementById('biomeBold');
const biomeDescription = document.getElementById('biomeDescription');

// Listen for selection changes
biomeSelect.addEventListener('change', function() {
    const selectedValue = this.value; 
    const data = biomeData[selectedValue];

    if (data) {
        // Update the Bold Title and the text
        biomeBold.textContent = `${data.title}: `;
        
        // Preserve the bold tag and just update the text node after it
        biomeDescription.childNodes[2].textContent = data.desc;
    }
});

    // Form Submission & Local Storage
    nationForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent page from reloading

        const selectedKey = biomeSelect.value; // gets value of selected option
        const selectedData = biomeData[selectedKey]; // title and description collected based on selected option

        // Gather the data
        const nationData = {
            name: document.getElementById('nationName').value,
            leader: document.getElementById('leaderName').value,
            biomeTitle: selectedData.title,
            biomeDesc: selectedData.desc,
            flag: flagPreview.querySelector('img')?.src || null,
            createdAt: new Date().toISOString()
        };

        // Save to LocalStorage as a JSON string
        localStorage.setItem('myNation', JSON.stringify(nationData));

        // Feedback to user
        alert(`The Sovereignty of ${nationData.name} has been established!`);

        // Optional: Redirect to the dashboard or nation view
        // window.location.href = 'nationView.html';
        
        console.log("Nation Data Saved:", nationData);
        window.location.href = '../html/nationView.html';
    });
});