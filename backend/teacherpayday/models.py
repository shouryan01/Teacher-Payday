from django.db import models

class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=350)
    created_at = models.DateTimeField(auto_now_add=True)
    password = models.CharField(max_length=30) # Encryption?
    eth_wallet_address = models.CharField(max_length=500, null=True)
    type = models.CharField(max_length=200) # Student or Investor
    private_key = models.CharField(max_length=1000, null=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}. {self.type} user'

class Payment(models.Model):
    sending_address =models.CharField(max_length=500, null=True)
    recieving_address =models.CharField(max_length=500, null=True)
    sending_key = models.CharField(max_length=1000, null=True)
    recieving_key = models.CharField(max_length=1000, null=True)
    amount = models.FloatField()

    def __str__(self):
        return f'{self.sending_address} to {self.recieving_address} for {self.amount}'
