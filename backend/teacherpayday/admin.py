from django.contrib import admin
from .models import User, Payment

class UserAdmin(admin.ModelAdmin):
  list = ('description', 'first_name', 'last_name', 'email', 'created_at', 'password', 'eth_wallet_address', 'type', 'private_key')

class PaymentAdmin(admin.ModelAdmin):
  list = ('sending_address', 'recieving_address', 'sending_key', 'recieving_key', 'amount')

admin.site.register(User, UserAdmin)
admin.site.register(Payment, PaymentAdmin)