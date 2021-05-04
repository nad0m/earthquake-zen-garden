const json = require('./data.json')

/**
 * Get site data from local JSON file
 * @returns json.site
 */
const getSiteData = () => {
  try {
    const result = json.site
    return result
  } catch (e) {
    console.error("[getSiteData]: Error getting site data", e)
    return null
  }
}

/**
 * Get profile from local JSON file
 * @returns json.profile
 */
 const getProfile = () => {
  try {
    const result = json.profile
    return result
  } catch (e) {
    console.error("[getProfile]: Error profile data", e)
    return null
  }
}

/**
 * Get a particular earthquake event by ID
 * @returns earthquakeEvent
 */
 const getEarthquakeEvent = id => {
  try {
    const features = json.data.features
    const result = features.find(feature => feature.id === id)
    return result || null
  } catch (e) {
    console.error("[getEarthquakeEvent]: Error getting earthquake data", e)
    return null
  }
}

/**
 * Get list of earthquakes from local JSON file
 * @returns json.data
 */
 const getEarthquakeEvents = () => {
  try {
    const result = json.data
    return result
  } catch (e) {
    console.error("[getEarthquakeEvents]: Error getting earthquake list", e)
    return null
  }
}

module.exports = {
  getSiteData,
  getProfile,
  getEarthquakeEvent,
  getEarthquakeEvents
}