class AddColumnYearToReleases < ActiveRecord::Migration[5.2]
  def change
    add_column :releases, :description, :text
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
