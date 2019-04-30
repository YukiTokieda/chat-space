class Api::MessagesController < ApplicationController
  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    respond_to do |format|
      format.html
      format.json{ @new_messages = @messages.where('id > ?', params[:id]) }
  end
end