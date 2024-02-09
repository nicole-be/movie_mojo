class MoviesController < ApplicationController

  def add_to_watchlist
    @movie = Movie.find(params[:id])
    current_user.movies << @movie unless current_user.movies.include?(@movie)
    redirect_to @movie, notice: "Movie added to your list"
  end

  def remove_from_watchlist
    @movie = Movie.find(params[:id])
    current_user.movies.delete(@movie)
    redirect_to @movie, notice: "Movie removed from your list"
  end

  def create
    raise
    @movie_db = Movie.new(title: "MovieMojo")
    if @movie_db.save
      @watched_movie = WatchedMovie.new
      @watched_movie.user = current_user
      @watched_movie.movie = @movie_db
      @watched_movie.save
    else
      render :new
    end
  end
end