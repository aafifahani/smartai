'use strict';

// API Keys Configuration
const API_KEYS = {
    opencage: 'YOUR_OPENCAGE_API_KEY',
    google_places: 'YOUR_GOOGLE_PLACES_API_KEY',
    openweathermap: 'YOUR_OPENWEATHERMAP_API_KEY'
};

// Helper Functions

/**
 * Get coordinates from OpenCage.
 * @param {string} query - The location query.
 */
const getCoordinates = async (query) => {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${API_KEYS.opencage}`);
    return response.json();
};

/**
 * Get place details from Google Places.
 * @param {string} placeId - The ID of the place.
 */
const getPlaceDetails = async (placeId) => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${API_KEYS.google_places}`);
    return response.json();
};

/**
 * Get weather from OpenWeatherMap.
 * @param {string} city - The city name.
 */
const getWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEYS.openweathermap}`);
    return response.json();
};

module.exports = {
    API_KEYS,
    getCoordinates,
    getPlaceDetails,
    getWeather
};
