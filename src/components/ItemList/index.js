import React from 'react'
import './styles.css'

const ItemList = ({ list = [] }) => {

  return (
    <table className="item-list">
      <tbody>
        {list.map((item, idx) => {
          return (
            <tr key={idx}>
              <th>{item.name}</th>
              <td>{item.content}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default ItemList