# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


p1 = Product.create(name: "multicolored-abstract-painting", price: "$400", description: "This is a painting description", img_url: "https://images.pexels.com/photos/935785/pexels-photo-935785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350")
p2 = Product.create(name: "multicolored-smoke", price: "$300", description: "this is the second painting description", img_url: "https://images.pexels.com/photos/1020315/pexels-photo-1020315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350")
p3 = Product.create(name: "adult-art-barren-beautiful", price: "$400", description: "This is the third painting description", img_url: "https://images.pexels.com/photos/417040/pexels-photo-417040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350")
p4 = Product.create(name: "pexels-phot", price: "$500", description: "This is the forth painting description", img_url: "https://images.pexels.com/photos/990826/pexels-photo-990826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=350")