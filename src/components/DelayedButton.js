import React from 'react'

class DelayedButton extends React.Component {

    click = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)},
            this.props.delay
            )
    }

    render() {
        return (
            <button onClick={this.click}>Delay Button</button>
        )
    }
}

export default DelayedButton