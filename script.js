const form = document.getElementById('travelForm');
const planContainer = document.getElementById('planContainer');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user inputs
    const destination = document.getElementById('destination').value.trim();
    const days = parseInt(document.getElementById('days').value);
    const budget = parseInt(document.getElementById('budget').value);
    const travelers = parseInt(document.getElementById('travelers').value);
    const needHotel = document.getElementById('needHotel').checked;

    if (!destination || days <= 0 || budget <= 0 || travelers <= 0) {
        alert("Please fill all fields correctly!");
        return;
    }

    // Clear previous plan
    planContainer.innerHTML = '';

    for (let i = 1; i <= days; i++) {
        const activity = getActivity(destination);
        const transportCost = calculateTransport(budget, travelers);
        const hotelCost = needHotel ? calculateHotel(budget, travelers) : 0;
        const foodCost = calculateFood(budget, travelers);
        const totalCost = transportCost + hotelCost + foodCost;

        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>Day ${i}</h3>
            <p><strong>Destination:</strong> ${destination}</p>
            <p><strong>Activity:</strong> ${activity}</p>
            ${needHotel ? `<p><strong>Hotel:</strong> ₹${hotelCost}</p>` : ''}
            <p><strong>Transport:</strong> ₹${transportCost}</p>
            <p><strong>Food:</strong> ₹${foodCost}</p>
            <p><strong>Total Estimated Cost:</strong> ₹${totalCost}</p>
        `;
        planContainer.appendChild(card);
    }
});

function getActivity(destination) {
    const activities = [
        `Sightseeing in ${destination}`,
        `Local market visit in ${destination}`,
        `Outdoor adventure in ${destination}`,
        `Relaxing day in ${destination} park`,
        `Cultural experience in ${destination}`
    ];
    return activities[Math.floor(Math.random() * activities.length)];
}

function calculateTransport(budget, travelers) {
    return Math.floor(Math.random() * (budget * 0.1)) + 100 * travelers;
}

function calculateHotel(budget, travelers) {
    return Math.floor(Math.random() * (budget * 0.15)) + 500 * travelers;
}

function calculateFood(budget, travelers) {
    return Math.floor(Math.random() * (budget * 0.05)) + 200 * travelers;
}