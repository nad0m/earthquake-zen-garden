import React, { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const customSort = (a, b, category) => {
  switch (category) {
    case 'TITLE':
      return a.place.localeCompare(b.place)
    case 'MAGNITUDE':
      return a.mag - b.mag
    case 'TIME':
      return new Date(a.time) - new Date(b.time)
    default:
      return 0
  }
}

const EventTable = ({ tableHeaders = [], tableList = [] }) => {
  const [sortType, setSortType] = useState({
    ascending: true,
    category: null
  })

  const { ascending, category } = sortType

  const sortByType = useCallback(
    (a, b) => {
      return ascending ?
        customSort(a.properties, b.properties, category) :
        customSort(b.properties, a.properties, category)
    },
    [ascending, category],
  )

  const onCategoryClick = categoryName => {
    setSortType({
      ascending: category === categoryName ? !ascending : ascending,
      category: categoryName
    })
  }

  const list = tableList.slice().sort(sortByType)

  return (
    <table className="event-table">
      <tbody>
        <tr>
          {tableHeaders.map((header, idx) => <th key={idx} onClick={() => onCategoryClick(header.toUpperCase())}>{header}</th>)}
        </tr>
        {list.map((item, idx) => {
          return (
            <tr key={idx}>
              {Object.values(item.properties).map((val, idx) => {
                return idx === 0 ? (
                  // wrap with Link if it's the first item
                  <td className="title-column" key={val}>
                    <Link to={`/detail/${item.id}`}>{val}</Link>
                  </td>
                ) : (
                  <td key={val}>{val}</td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default EventTable