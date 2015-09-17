class Board < ActiveRecord::Base
  belongs_to :username

  enum back_type: %i(/assets/minisign_b.png /assets/minisign_y.png /assets/minisign_r.png)
end