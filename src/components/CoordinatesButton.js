import React from 'react'

class CoordinatesButton extends React.Component {

    click = (event) => {
        this.props.onReceiveCoordinates([event.clientX, event.clientY])
    }

    render() {
        return (
            <button onClick={this.click}>Mouse Coordinates</button>
        )
    }
}

export default CoordinatesButton