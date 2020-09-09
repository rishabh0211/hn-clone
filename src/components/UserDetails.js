import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import moment from "moment";
import StyledUserDetails from './styled/StyledUserDetails';
import { fetchUserDetails } from '../actions';

const UserDetails = ({ fetchUserDetails, userDetails = {}, isLoadingUser }) => {

  useEffect(() => {
    const userId = window.location.search.split('=')[1];
    fetchUserDetails(userId);
  }, []);

  const { about, created, karma, id } = userDetails;

  return (
    <StyledUserDetails>
      {!isLoadingUser ?
        <table>
          <tbody>

            <tr>
              <td>User</td>
              <td>{id}</td>
            </tr>
            <tr>
              <td>Created</td>
              <td>{moment(created * 1000).format('MMMM DD, YYYY')}</td>
            </tr>
            <tr>
              <td>Karma</td>
              <td>{karma}</td>
            </tr>
          </tbody>
        </table>
        :
        <h1>Loading</h1>
      }
    </StyledUserDetails>
  )
}

const mapStateToProps = state => {
  return {
    userDetails: state.hackernews.user,
    isLoadingUser: state.hackernews.isLoadingUser,
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUserDetails: (userId) => dispatch(fetchUserDetails(userId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);