# DB設計

##users/groupsテーブルのアソシエーションミス＆menbersテーブルのid カラムの型修正

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|null: false,
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, |
|name|string|null: false, unique: true|

### Association
- has_many :menbers
- has_many :groups,through: :menbers
- has_many :messages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|user_id|integer|null: false,|

### Association
- has_many :menbers
- has_many :users,through: :menbers
- has_many :messages


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user