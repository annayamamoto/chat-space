# chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
## Association
- has_many :groups_users
- has_many :groups, through: :groups_users
- has_many :massages

## groupsテーブル
|Column|Type|Opions|
|------|----|------|
|name|string|null: false|
## Association
- has_many :massages
- has_many :groups_users
- has_many :users, through :groups_users

## massagesテーブル
|Colum|Type|Opions|
|-----|----|------|
|body|text|null: false|
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
## Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

