require "factory_bot"
FactoryBot.define do
  factory :artist do
    name {'name'}
    description { 'description' }
  end
end
