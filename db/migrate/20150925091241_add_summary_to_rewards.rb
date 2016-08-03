class AddSummaryToRewards < ActiveRecord::Migration
  def change
    add_column :rewards, :summary, :string
  end
end
