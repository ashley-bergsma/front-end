import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchBoards } from '../actions';
// styling imports
import styled from 'styled-components';

const StyledContainer = styled.div`
  background-color: white;
  font-family: 'Roboto Slab', serif;
  border: 1px solid gray;
  padding: 2%;
  width: 85vw;
  margin: 0 auto;
`;

const StyledDiv = styled.div`
  border: 1px solid red;
  height: 25vh;
  width: 20vw;

  h2 {
    font-size: 2.8rem;
    font-weight: bold;
  }

  img {
    height: 10vh;
  }
`;

const Dashboard = (props) => {
  useEffect(() => {
    props.fetchBoards();
  }, []);

  return (
    <StyledContainer>
      <StyledDiv>
        <h2>Board Title</h2>
        <img src='' alt='board thumbnail' />
        {/* eventually enable a toggle to drop down ul of articles */}
        <ul>
          <li>
            <p>Article title</p>
          </li>
        </ul>
      </StyledDiv>
      <Link to='/new-board'>Create new Board</Link>
      {props.isLoading && <span>Loading Boards...</span>}
      {console.log(props.isLoading)}
    </StyledContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    boards: state.boards,
  };
};

export default connect(mapStateToProps, { fetchBoards })(Dashboard);
