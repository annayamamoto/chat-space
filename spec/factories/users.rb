FactoryBot.define do
  factory :user do
    password = Faker::Internet.password(min_lengfh: 8)
    name {Faker::Name.last_name}
    email {Faker::Internet.free_email}
    password {password}
    password_congirmation {password}
  end
end
