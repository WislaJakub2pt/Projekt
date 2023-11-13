# Generated by Django 4.2.6 on 2023-10-30 14:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data', '0002_data'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='data',
            name='data',
        ),
        migrations.AddField(
            model_name='data',
            name='data1',
            field=models.CharField(default='', max_length=240, verbose_name='Data1'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='data',
            name='data2',
            field=models.CharField(default='', max_length=240, verbose_name='Data2'),
            preserve_default=False,
        ),
    ]