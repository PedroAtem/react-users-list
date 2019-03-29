import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './styles.css';
import * as UsersActions from '../../actions';


class UsersList extends Component {

  componentDidMount() {
    this.props.getUsers(5, 1);
  }

  render() {
    const { users, per_page, page, total_pages } = this.props;
    const arr_per_page = [1, 3, 5, 7, 10];
    const pages = Array.apply(null, { length: total_pages }).map(Function.call, Number).map(n => n + 1);


    return (
      <div className="users">
        <h1 className="title">Per Page</h1>
        <div className="container-buttons">
          {arr_per_page.map(_per_page => (
            <div key={_per_page} onClick={() => this.props.getUsers(_per_page, page)} className={`buttons ${per_page === _per_page ? 'active' : ''}`}>{_per_page}</div>
          ))}
        </div>
        {users ? users.map(user => (
          <div className="user" key={user.id}>
            <img src={user.avatar} />
            <div>{user.first_name} {user.last_name}</div>
          </div>
        )) : null}
        <h1 className="title">Pages</h1>
        <div className="container-buttons">
          {pages.map(_page => (
            <div key={_page} onClick={() => this.props.getUsers(per_page, _page)} className={`buttons ${page === _page ? 'active' : ''}`}>{_page}</div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users,
  page: state.page,
  per_page: state.per_page,
  total: state.total,
  total_pages: state.total_pages
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(UsersActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
