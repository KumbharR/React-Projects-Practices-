import React,{ Component, Fragment } from 'react'

import { deleteMovie, getMovies } from "./moviesData"



class Movies extends React.Component {
    state = {
        movies: getMovies()
    }


    handleDeleteMovie = (movie) => {
        const newMovieArr = this.state.movies.filter(
          (mov) => mov._id !== movie._id
        );
        this.setState({ movies: newMovieArr });
      };

    renderMovieTable() {
        if (this.state.movies.length === 0) {
            return <h1>Sorry !! There are no movies..!</h1>;
        }
        return (
            <Fragment>
                <h1>There are {this.state.movies.length} movies</h1>

                <table className='table '>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Genre</th>
                            <th scope='col'>Stock</th>
                            <th scope='col'>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map((movies)=>(
                            <tr key={movies._id}>
                            <th scope="row">{movies.title}</th>
                            <td>{movies.genre.name}</td>
                            <td>{movies.numberInStock}</td>
                            <td>{movies.dailyRentalRate}</td>
                        
                            <td>
                                <button onClick={()=> this.handleDeleteMovie(movies)} type="button" className="btn btn-danger">Delete</button></td>
                          </tr>
                        )
                        )}
                    </tbody>

                </table>



            </Fragment>
        );

    }

    render() {
        return this.renderMovieTable();
    }
}

export default Movies;