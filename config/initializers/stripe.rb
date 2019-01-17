# Stripe.config do |config|
#     config.publishable_key = ENV['stripe_publishable_key']
#     config.stripe_secret_key = ENV['stripe_secret_key']
# end

Rails.configuration.stripe = {
    :publishable_key => ENV['stripe_publishable_key'],
    :secret_key      => ENV['stripe_secret_key']
}