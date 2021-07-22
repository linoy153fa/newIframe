
import { Component } from 'react'
import { searchService } from '../services/search.service'
import { ItemsList } from '../cmps/ItemsList'

export class IFrame extends Component {
  state = {
    items: searchService.query()
  }

  componentDidMount() {
    searchService.query()
  }

  onSetFilter = (filterBy) => {
    const items = searchService.query()
    const filterdItems = items.filter((item) => item.title.includes(filterBy))
    this.setState({ ...this.state, items: filterdItems })
  }

  handleChange = ({ target }) => {
    const { value, name: field } = target
    const { filterBy } = this.state
    this.setState({ ...this.state, filterBy: { ...filterBy, [field]: value } }, () => {
      this.onSetFilter(value)
    })
  }

  render() {
    const { items } = this.state
    if (!items) return <div>loading...</div>
    return (
      <div className="container">
        <div className="myCmp"  >
          <input className="todo-search" autoComplete="off" type="text" name="searchTxt" value={this.state.searchTxt} placeholder="Search..." onChange={this.handleChange} />
          <ItemsList items={items} />
        </div>
        <iframe src="https://www.ikea.co.il/catalogue/Workspaces" width="100%" height="1000px" margin='100px' name="ikea" >
        </iframe>
      </div>
    )
  }
}

