# Generated by Django 3.2.12 on 2022-04-09 09:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='InvestmentUser',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=350)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('password', models.CharField(max_length=30)),
            ],
        ),
    ]