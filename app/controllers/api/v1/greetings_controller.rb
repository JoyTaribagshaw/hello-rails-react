class GreetingsController < ActionController
  def random_greeting
    @greeting = Greeting.find(Greeting.pluck(:id).sample)
    render json: @greeting, status: :ok
  end
end
