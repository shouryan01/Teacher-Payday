from rest_framework import serializers
from .models import User, Payment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'created_at', 'password', 'eth_wallet_address', 'type', 'private_key')

class PaymentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Payment
        fields = ('sending_address', 'recieving_address', 'sending_key', 'recieving_key', 'amount')
