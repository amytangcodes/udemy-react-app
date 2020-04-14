import React from 'react'

class ImageCard extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      spans: 0
    }

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.height;
    const spans = Math.ceil(height / 10 + 1)

    this.setState({
      spans
    })
  }

  render() {
    const { description, urls } = this.props.image;
    const { spans } = this.state;

    return (
      <div className="image-card" style={{ gridRowEnd: `span ${spans}`}}>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={description}
        />
      </div>
    )
  }
}

export default ImageCard

// docuemnt.querySelector('img').clientHeight