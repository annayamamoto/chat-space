# chatspace DB設計
## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|null: false|
|password|string|null: false|
|name|string|null: false|
## Association
- has_many :groups
- has_many :massages

## groupsテーブル
|Column|Type|Opions|
|------|----|------|
|name|string|null: false|
## Association
- has_many :users
- has_many :massages
- has_many :groups_users

## massagesテーブル
|Colum|Type|Opions|
|-----|----|------|
|body|text|null: false|
|image|string||
|group_id|integer|null: false, foreign_key: true|
|user_id|integera|null: false, foreign_key: true|
## Association
- belongs_to :users
- belongs_to :groups

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user

