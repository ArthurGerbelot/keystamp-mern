import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

// Import Style
import styles from './Presentation.css';

// Import Images
import './img/avatar-advisor.jpg';
import './img/avatar-customer.jpg';

export class Presentation extends Component {

  constructor(props) {
    super(props);
    this.state = { step: 0 };
  }
  // 0 -> 1
  onPresentationStart = () => {
    const instance = this;
    if (instance.state.step === 0) {
      instance.setState({ step: 1 });

      setTimeout(() => {
        instance.setState({ step: 2 });
      }, 6000);
    }
  }

  onStep2Finish = () => {
    const instance = this;
    if (instance.state.step === 2) {
      instance.setState({ step: 3 });
      setTimeout(() => {
        instance.setState({ step: 4 });
      }, 2000);
    }
  }

  render() {
    const step = this.state.step;
    return (
      <div className={styles.presentation} data-step={step}>

        <header className={styles.header}>
          <a href="#">Test the demo</a>
          <a href="https://github.com/existencelabs/keystamp-whitepaper/blob/master/KEYSTAMP_whitepaper.pdf" target="_blank">Read the White Paper</a>
        </header>

        <div className={styles.container}>
          <FontAwesome name="key" className={styles.logo} />
          <h1>KeyStamp</h1>
          <h3>Proof of Process on Blockchain</h3>
        </div>


        <div className={styles.row} data-step="1">
          <div className={styles['col-right']}>
            {
              (step >= 1) ?
                <div>
                  <div className={`${styles.avatar} ${styles['avatar-advisor']}`}></div>
                  <div className={styles['avatar-text-advisor']}>
                    <strong>Advisor, Mr. Foo</strong>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat tincidunt interdum.</span>
                  </div>
                </div>
                : ''
            }
          </div>

          <div className={styles['col-mid']}>
            <button className={styles['start-presentation']} onClick={this.onPresentationStart}>
              Start Presentation
            </button>
            <div className={styles['line-container']}>
              <div className={styles['between-0-and-1']}></div>
            </div>

            {step >= 1 ? <span className={styles.tooltip}>Situation</span> : ''}
            {
              (step >= 2) ?
                <div>
                  <div className={styles.messages}>
                    <div className={`${styles.message} ${styles['message-1']}`}>Hello</div>
                    <div className={`${styles.message} ${styles['message-2']}`}>Hello</div>
                    <div className={`${styles.message} ${styles['message-3']}`}>I want your crypto data !</div>
                    <div className={`${styles.message} ${styles['message-4']}`}>Ho Yes !</div>
                  </div>
                </div>
                : ''
            }

          </div>

          <div className={styles['col-left']}>
            {
              (step >= 1) ?
                <div>
                  <div className={`${styles.avatar} ${styles['avatar-customer']}`}></div>
                  <div className={styles['avatar-text-customer']}>
                    <strong>Customer, Mme Bar</strong>
                    <span>Aenean in turpis eget magna iaculis scelerisque. Vivamus id sollicitudin lorem. Sed ut dui aliquam, imperdiet nunc quis, iaculis est.</span>
                  </div>
                </div> : ''
            }
          </div>
          <div style={{ clear: 'both' }}></div>
        </div>


        <div className={styles.row} data-step="3">
          <div className={styles['col-right']}>
            {
              (step === 4) ?
                <div className={styles['upload-form']}>
                  <div className={styles['upload-form-arrow']}></div>
                  <strong><FontAwesome name="upload" className={styles.icon} />Choose the file you want Mme Bar sign</strong>
                  <div className={styles['upload-form-zone']}>
                    <FontAwesome name="upload" className={styles['bg-icon']} />
                    <span>Drag a file <br /> or Click</span>
                  </div>
                </div>
                : ''
            }
          </div>
          <div className={styles['col-mid']}>
            {
              (step >= 2) ?
                <button className={styles['go-step-3']} onClick={this.onStep2Finish}>
                  Step 1
                  <br />
                  <strong>Update a file</strong>
                </button>
                : ''
            }
            {
              (step >= 3) ?
                <span className={styles['upload-tooltip-container']}>
                  <span className={styles['upload-tooltip']}>Upload a file</span>
                </span>
                : ''
            }
          </div>
          <div className={styles['col-left']}>
          </div>
        </div>


      </div>
    );
  }
}


export default Presentation;
