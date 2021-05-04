const { gql } = require('apollo-server')

const typeDefs = gql`
  type Geometry { 
    type: String 
    coordinates: [Float] 
  }

  type Properties { 
    mag: Float
    place: String
    time: String
    updated: String
    tz: Int
    url: String
    detail: String
    felt: String
    cdi: String
    mmi: String
    alert: String
    status: String
    tsunami: Int
    sig: Int
    net: String
    code: String
    ids: String
    sources: String
    types: String
    nst: Int
    dmin: Float
    rms: Float
    gap: Int
    magType: String
    type: String
    title: String 
  }

  type Features { 
    type: String
    id: String
    geometry: Geometry
    properties: Properties
  }

  type Metadata { 
    generated: String
    url: String
    title: String
    status: Int
    api: String
    count: Int 
  }

  type Data { 
    type: String
    bbox: [Float]
    features: [Features]
    metadata: Metadata 
  }

  type Profile { 
    firstName: String
    lastName: String
    avatarImage: String
    phone: String
    email: String
    bio: String 
  }

  type Site { 
    title: String 
    heroImage: String 
    logoImage: String 
  }

  type Query { 
    data: Data
    profile: Profile 
    site: Site 
    earthquakeEvent(id: String): Features
  }
`

module.exports = typeDefs