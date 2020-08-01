# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

<<<<<<< HEAD
ActiveRecord::Schema.define(version: 2020_08_01_134359) do
=======
ActiveRecord::Schema.define(version: 0) do
>>>>>>> a5e4a555cdb270419a78296d7eefebbc0a71bfbf

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

<<<<<<< HEAD
  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.text "alias", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "artists_releases", id: false, force: :cascade do |t|
    t.integer "artist_id"
    t.integer "release_id"
  end

  create_table "labels", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.bigint "release_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["release_id"], name: "index_labels_on_release_id"
  end

  create_table "labels_releases", id: false, force: :cascade do |t|
    t.integer "label_id"
    t.integer "release_id"
  end

  create_table "releases", force: :cascade do |t|
    t.string "release_type", null: false
    t.string "embed_url"
    t.text "title", null: false
    t.integer "original_release_year", null: false
    t.bigint "artist_id", null: false
    t.bigint "label_id"
    t.bigint "tag_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.index ["artist_id"], name: "index_releases_on_artist_id"
    t.index ["label_id"], name: "index_releases_on_label_id"
    t.index ["tag_id"], name: "index_releases_on_tag_id"
  end

  create_table "releases_tags", id: false, force: :cascade do |t|
    t.integer "release_id"
    t.integer "tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "tag"
    t.bigint "release_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["release_id"], name: "index_tags_on_release_id"
  end

=======
>>>>>>> a5e4a555cdb270419a78296d7eefebbc0a71bfbf
end
