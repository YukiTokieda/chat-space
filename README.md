# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# DB設計

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


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|user_id|integer|null: false,|

### Association
- has_many :menbers
- has_many :users,through: :menbers


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user