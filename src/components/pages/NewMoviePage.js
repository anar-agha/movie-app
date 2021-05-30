//Created by [rcredux] snippet
import React, { Component } from "react";
import { connect } from "react-redux";
import NewMovieForm from "../NewMovieForm";
import { addNewMovie } from "../../actions/moviesAction";

export class NewMoviePage extends Component {
  render() {
    return (
      <div>
        Add New Movie Page
        <NewMovieForm
          errorText={this.props.newMovieReducer.error}
          loading={this.props.newMovieReducer.loading}
          addNewMovie={this.props.addNewMovie}
          done={this.props.newMovieReducer.done}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ newMovieReducer }) => {
  return { newMovieReducer };
};

const mapDispatchToProps = {
  addNewMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
