import React from 'react'
import { useParams } from 'react-router'
import { useQuery, gql } from '@apollo/client'
import ItemList from '../../components/ItemList'
import './styles.css'

const EARTHQUAKE_QUERY = gql`
  query ($id: String) {
    earthquakeEvent(id: $id) {
      properties {
        title
        mag
        time
        status
        tsunami
        type
      }
    }
  }
`

const Detail = () => {
  const { id } = useParams()
  const { data, loading, error } = useQuery(EARTHQUAKE_QUERY, {
    variables: {
      id
    }
  })

  const properties = data?.earthquakeEvent?.properties || {}

  if (loading || error) {
    return null
  }

  const details = [
    {
      name: 'Title',
      content: properties?.title
    },
    {
      name: 'Magnitude',
      content: properties?.mag
    },
    {
      name: 'Time',
      content: properties?.time
    },
    {
      name: 'Status',
      content: properties?.status
    },
    {
      name: 'Tsunami',
      content: properties?.tsunami
    },
    {
      name: 'Type',
      content: properties?.type
    }
  ]

  return (
    <div className="detail-wrapper">
      <h3>{properties?.title || 'No event found'}</h3>
      {properties?.title && <ItemList list={details} />}
    </div>
  )
}

export default Detail