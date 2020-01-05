import React from "react";
import { connect } from "react-redux";
// import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {  }
  // }
  // not needed now
  // componentDidMount() {
  //   this.props.fetchUser(this.props.userId);
  // }
  render() {
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return (
      <div>
        <h3>{user.name}</h3>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};
export default connect(
    mapStateToProps, 
    // { fetchUser }
    )(UserHeader);
