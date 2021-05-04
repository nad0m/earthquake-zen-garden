import React from 'react'
import { useQuery, gql } from '@apollo/client'
import EventTable from '../../components/EventTable'
import './styles.css'

const EARTHQUAKES_QUERY = gql`
  query {
    data {
      metadata {
        title
      }
      features {
        id
        properties {
          place
          mag
          time
        }
      }
    }
  }
`

const Home = () => {
  const { data, loading, error } = useQuery(EARTHQUAKES_QUERY)
  const headers = ["Title", "Magnitude", "Time"]
  const title = data?.data?.metadata?.title || ''
  const events = data?.data?.features || []

  if (loading || error) {
    return null
  }

  return (
    <div className="home-wrapper">
      <h4>{title}</h4>
      <EventTable tableHeaders={headers} tableList={events} />
    </div>
  )
}

export default Home