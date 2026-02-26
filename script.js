// Sample code for enhanced API integration
async function fetchGooglePlaces(location) {
    const apiKey = 'YOUR_GOOGLE_PLACES_API_KEY';
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&key=${apiKey}`);
    if (!response.ok) throw new Error('Failed to fetch Google Places');
    return await response.json();
}

async function fetchOpenCage(location) {
    const apiKey = 'YOUR_OPENCAGE_API_KEY';
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${apiKey}`);
    if (!response.ok) throw new Error('Failed to fetch OpenCage data');
    return await response.json();
}

async function fetchOpenWeather(location) {
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    if (!response.ok) throw new Error('Failed to fetch OpenWeatherMap data');
    return await response.json();
}

// Combine API calls and handle errors
async function getEnhancedData(location) {
    try {
        const [placesData, openCageData, weatherData] = await Promise.all([
            fetchGooglePlaces(location),
            fetchOpenCage(location),
            fetchOpenWeather(location)
        ]);
        return {
            places: placesData,
            openCage: openCageData,
            weather: weatherData
        };
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}