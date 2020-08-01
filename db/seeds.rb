# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

artist1 = Artist.create(name: "Manilla Road", description: "Hevay metal band from a country that looks like a country", alias: ["Manilla Road", "Other Name"])
tag1 = Tag.create(tag: "heavy-metal")
label1 = Label.create(name: "Polyvinyl", description: "A Label with of Montreal on it")
release1 = Release.create(release_type: "EP", title: "A Cool Tune", description: "Wow. I love this record. So Cool! Here is its history!", artist: artist1, label: label1,)
