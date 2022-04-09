from django.contrib import admin
from .models import InvestmentUser

class InvestmentUserAdmin(admin.ModelAdmin):
  list = ('first_name', 'last_name', 'email', 'created_at', 'password')

admin.site.register(InvestmentUser, InvestmentUserAdmin)