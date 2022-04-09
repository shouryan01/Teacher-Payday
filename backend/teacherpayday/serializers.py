from rest_framework import serializers
from .models import InvestmentUser

class InvestmentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = InvestmentUser
        fields = ('first_name', 'last_name', 'email', 'created_at', 'password')