import {Component} from 'react'
import History from './Component/History/index'
import './App.css'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
class App extends Component {
  state = {searchText: '', historyState: initialHistoryList}

  onChangeText = event => {
    this.setState({searchText: event.target.value})
  }

  deleteItem = unique => {
    const {historyState} = this.state
    const delItem = historyState.filter(each => each.id !== unique)
    this.setState({historyState: delItem})
  }

  getLen = () => {
    const {historyState} = this.state
    console.log(historyState)
  }

  render() {
    const {searchText, historyState} = this.state

    console.log(searchText)
    console.log(historyState.length)
    const searchRes = historyState.filter(each =>
      each.title.toLowerCase().includes(searchText),
    )

    return (
      <div className="bg-container">
        <nav className="search-container">
          <div className="navbar">
            <img
              className="history-logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
            />
            <div className="search-tab">
              <div className="search-icon-container">
                <img
                  className="search-icon-style"
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </div>
              <input
                type="search"
                placeholder="Search History"
                onChange={this.onChangeText}
              />
            </div>
          </div>
        </nav>
        <div className="history-container">
          {historyState.length === 0 ? (
            <div className="there-is-no">
              <p className="error-msg">There is no history to show</p>
            </div>
          ) : (
            <ul>
              {searchRes.map(eachItem => (
                <History
                  key={eachItem.id}
                  historyDetails={eachItem}
                  deleteItem={this.deleteItem}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default App
