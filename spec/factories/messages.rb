FactoryBot.define do
  factory :message do
    content {Faker::Lorem.sentence}
    image {File.open("#{Rils.root}/public/images/test_image.jpg")}
    user
    group
  end
end