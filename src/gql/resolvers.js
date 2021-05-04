const { getSiteData, getProfile, getEarthquakeEvent, getEarthquakeEvents } = require('./datasource')
const { timeConverter } = require('./util')

const resolvers = {
  Query: {
    site: getSiteData,
    data: getEarthquakeEvents,
    profile: getProfile,
    earthquakeEvent: (parent, { id }, context, info) => getEarthquakeEvent(id)
  },
  Properties: {
    time: ({ time }, args, context, info) => timeConverter(time),
    updated: ({ updated }, args, context, info) => timeConverter(updated)
  },
  Metadata: {
    generated: ({ generated }, args, context, info) => timeConverter(generated)
  }
}

module.exports = resolvers