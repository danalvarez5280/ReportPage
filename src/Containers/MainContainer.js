import { connect } from "react-redux";
import { selectUser } from "../Actions/index";

const mapStateToProps = store => {
  return {
      currentUser: store.selectUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    selectUser: (obj) => dispatch(selectUser(obj)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps);
