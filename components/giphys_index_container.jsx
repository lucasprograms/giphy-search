import { connect } from 'react-redux';
import GiphysIndex from './giphys_index'

const mapStateToProps = (state) => ({
  giphys: state.giphys
})

export default connect(
  mapStateToProps,
  null
)(GiphysIndex)