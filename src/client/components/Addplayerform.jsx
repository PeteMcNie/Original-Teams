import React from 'react'

class Addplayerform extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '' }
    }

    submitHandler = (evnt) => {
        evnt.preventDefault()
        // Redirect to Createteams page here
    }

    changeHandler = (evnt) => {
        this.setState({ name: evnt.target.value })
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <p>Name:</p>
                <input type='text' onChange={this.changeHandler} />
                <input type='submit' value='Add Player' />
            </form>
        )
    }
}

export default Addplayerform