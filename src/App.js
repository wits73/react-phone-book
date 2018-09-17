import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
import Header from './components/Header/Header';

class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: 'Jane Doe',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: 'John Doe',
        phone: '010-0000-0001'
      }
    ],
    keyword:''
  }

  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }

  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id
          ? { ...info, ...data } // 새 객체를 만들어서 기존의 값과 전달받은 data 을 덮어씀
          : info // 기존의 값을 그대로 유지
      )
    })
  }

  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );
    return (
      <div>
        <Header/>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        <div className="ui input focus">
          <input 
            type="text" 
            placeholder="Search..."
            onChange={this.handleChange}
            value={keyword}
          />
        </div>
        <hr />

        <PhoneInfoList 
          data={filteredList}
          onRemove={this.handleRemove}  
          onUpdate={this.handleUpdate}
        />
        {/*{JSON.stringify(information)}*/}
      </div>
    );
  }
}

export default App;