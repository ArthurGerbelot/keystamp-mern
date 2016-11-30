import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import FontAwesome  from 'react-fontawesome';

// Import Style
import styles from './Presentation.css';


export function Presentation(props) {
  return (
    <div className={styles['presentation']}>
      <div className={styles['container']}>
        <FontAwesome name="rocket" />
        <h1>KeyStamp</h1>
        <h3>Presentation</h3>
      </div>
    </div>
  );
}

// Actions required to provide data for this component to render in sever side.
// PostDetailPage.need = [params => {
//   return fetchPost(params.cuid);
// }];

// Retrieve data from store as props
function mapStateToProps(state, props) {
  return {
    // post: getPost(state, props.params.cuid),
  };
}

// PostDetailPage.propTypes = {
//   post: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//     slug: PropTypes.string.isRequired,
//     cuid: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default connect(mapStateToProps)(Presentation);
