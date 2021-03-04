import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
  state = {
    isOpen: false
  }

  openCloseModal = () => {
    this.setState({ isOpen: !this.state.isOpen })
    
  }

  destroy = (event) => {
    if (event.target.className === 'modal') {
      this.openCloseModal()
    }
  }

  render() {
    return (
      <>
        <button onClick={this.openCloseModal}>Open modal</button>

        {this.state.isOpen && (
          <div className='modal' onClick={this.destroy}>
            <div className='modal-body'>
              <h1>Modal Title</h1>
              <p>I am awesome modal</p>
              <button onClick={this.openCloseModal}>Close modal</button>
            </div>
          </div>
        )}
      </>
    )
  }
}
