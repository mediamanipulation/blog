import React from 'react';
import { connect } from 'react-redux';
import { fetchUser} from '../actions'

class UserHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }
    componentDidMount(){
        this.props.fetchUser(this.props.userId);
    }
    render() { 
        const user = this.props.users.find((user) => user.id === this.props.userId );
        if(!user){
            return null;
        }
        return ( <div><h3>{user.name}</h3></div>  );
    }
}
const mapStateToProps = (state) => {
     return {
         users: state.users 
        //  prop: state.prop
     };
 }
export default connect(mapStateToProps, { fetchUser }) (UserHeader) ;