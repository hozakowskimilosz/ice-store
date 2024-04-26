from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(

            name='Users',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('surname', models.CharField(max_length=50)),
                ('email', models.EmailField(max_length=254)),
                ('adress', models.CharField(max_length=150)),
                ('phone_num', models.IntegerField()),
            ]
            name='Items',
            fields=[
                ('item_id', models.AutoField(primary_key=True, serialize=False)),
                ('item_name', models.CharField(max_length=50)),
                ('price', models.FloatField()),
                ('amount', models.IntegerField()),
            ],
        ),
    ]
