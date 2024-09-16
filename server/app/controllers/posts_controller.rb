class PostsController < ApplicationController
  def index
    posts = [
      { title: 'Hello, unko!' },
      { title: 'Hello, unko2!' },
      { title: 'Hello, unko3!' },
      { title: 'Hello, unko4!' }
    ]
    render json: posts
  end
end
