# Generated by Django 3.2.12 on 2022-04-09 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teacherpayday', '0004_auto_20220409_0922'),
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sending_address', models.CharField(max_length=500, null=True)),
                ('recieving_address', models.CharField(max_length=500, null=True)),
                ('sending_key', models.CharField(max_length=1000, null=True)),
                ('recieving_key', models.CharField(max_length=1000, null=True)),
                ('amount', models.FloatField()),
            ],
        ),
    ]
