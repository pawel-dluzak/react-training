# Generated by Django 3.0.8 on 2021-01-25 20:53

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_auto_20210125_2049'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='date_added',
            field=models.DateField(default=datetime.datetime(2021, 1, 25, 20, 53, 33, 744923, tzinfo=utc), verbose_name='Date added'),
        ),
    ]