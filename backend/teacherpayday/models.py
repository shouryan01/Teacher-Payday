from django.db import models

class InvestmentUser(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100, null=True)
    email = models.CharField(max_length=350, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    password = models.CharField(max_length=30, null=True) # Encryption?

    def __str__(self):
        return f'{self.first_name} {self.last_name}'