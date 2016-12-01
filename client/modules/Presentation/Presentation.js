import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Import Style
import styles from './Presentation.css';

export class Presentation extends Component {

  constructor(props) {
    super(props);
    this.state = { step: 0 };
  }

  onPresentationStart = () => {
    this.setState({step: this.state.step + 1})
  }

  render() {
    console.log("Render state", this.state)
    return (
      <div className={styles.presentation} data-step={this.state.step}>

        <header className={styles.header}>
          <a href="#">Test the demo</a>
          <a href="https://github.com/existencelabs/keystamp-whitepaper/blob/master/KEYSTAMP_whitepaper.pdf" target="_blank">Read the White Paper</a>
        </header>

        <div className={styles.container}>
          <FontAwesome name="key" className={styles.logo}/>
          <h1>KeyStamp</h1>
          <h3>Proof of Process on Blockchain</h3>
        </div>

        <div className={styles.row}>
          <div className={styles['col-right']}>
            Right
          </div>
          <div className={styles['col-mid']}>
            <button className={styles['start-presentation']} onClick={this.onPresentationStart}>
              Start Presentation
            </button>
          </div>
          <div className={styles['col-left']}>
            Left
          </div>
        </div>

      </div>
    )
  }
}


export default Presentation;
