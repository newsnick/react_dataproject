import React, { Component } from 'react'
import styles from '../../styles/Product/Product.module.css'
import laptop from '../../assets/images/laptop.png'
import headset from '../../assets/images/headset.jpg'
import ipad from '../../assets/images/ipad.jpg'
import webcam from '../../assets/images/webcam.jpg'
import airpods from '../../assets/images/airpods.jpg'
import speaker from '../../assets/images/speaker.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

class Header extends React.Component {
  render() {
    return (
      <header className="bg-primary text-center text-white">
        <h3 className={styles.title}>AtoZ Shopping</h3>
      </header>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center">
        <h6>All Copy Rights Reserved</h6>
      </footer>
    )
  }
}

class Product extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="card " style={{ width: '16rem' }}>
        <div className="card-header text-center" style={{ width: '16rem' }}>
          <h3 className={styles.header}>{this.props.name}</h3>
        </div>
        <div className="card-body">
          <img
            src={this.props.photo}
            alt="product image is not available"
            width="200"
            height="150"
          />
        </div>
        <div className="card-footer text-center" style={{ width: '16rem' }}>
          <h3 className={styles.price}>{this.props.price}</h3>
        </div>
      </div>
    )
  }
}

class Products extends React.Component {
  render() {
    return (
      //write the  logic to iterate json objects and generating products dynamically
      // < className={styles.cards}>
      <div className="container-auto">
        {' '}
        <div className="row row-cols-3">
          {' '}
          <div className="col-5 col-md-4 mt-3">
            <Product name="Headphones" photo={headset} price={1200} />
          </div>
          <div className="col-5 col-md-4 mt-3">
            <Product name="Laptop" photo={laptop} price={4500} />
          </div>
          <div className="col-5 col-md-4 mt-3">
            <Product name="iPad" photo={ipad} price={2200} />
          </div>
          <div className="col-5 col-md-4 mt-3">
            <Product name="Webcam" photo={webcam} price={2200} />
          </div>
          <div className="col-5 col-md-4 mt-3">
            <Product name="Speaker" photo={speaker} price={2200} />
          </div>
          <div className="col-5 col-md-4 mt-3">
            <Product name="Airpods" photo={airpods} price={2200} />
          </div>
        </div>
      </div>
    )
  }
}

class MainComponent extends React.Component {
  render() {
    return (
      <>
        <Header />
        <section className="container">
          <div className="row ">
            <div className="col mt-4">Menu Content</div>
            <div className="col-10">
              <Products />
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }
}

export default MainComponent

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<MainComponent />)
