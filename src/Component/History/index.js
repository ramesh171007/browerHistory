import './index.css'

const History = props => {
  const {historyDetails, deleteItem} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDeleteItem = () => {
    deleteItem(id)
  }
  return (
    <li className="li-container">
      <div className="his-details">
        <p className="time">{timeAccessed}</p>
        <div className="accessed-item-details">
          <img src={logoUrl} alt="domain logo" />
          <div className="app-details">
            <div className="name-container">
              <p className="title">{title}</p>
              <p className="classDomain">{domainUrl}</p>
            </div>
            <div className="btn-container">
              <button
                type="button"
                className="delete"
                data-testid="delete"
                onClick={onDeleteItem}
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
                  alt="delete"
                  className="delete-img"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default History
