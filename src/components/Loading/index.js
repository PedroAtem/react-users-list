import React from 'react';
import { connect } from 'react-redux'

let Loading = ({ loading }) => (

  loading ?
    <div style={{ textAlign: 'center' }}>
      <img src='https://raw.githubusercontent.com/Lavitr/React-Redux-SAGA-tutorial-APP/master/src/loading_spinner.gif' alt='loading' />
      <h1>LOADING</h1>
    </div> :
    null
);

const mapStateToProps = (state) => ({
  loading: state.loading
})

Loading = connect(
  mapStateToProps,
  null
)(Loading)


export default Loading;