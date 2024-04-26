from django.db import models

class Users(models.Model):
    user_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    adress = models.CharField(max_length=150)
    phone_num = models.IntegerField()

class Items(models.Model):
	item_id = models.AutoField(primary_key=True)
	item_name = models.CharField(max_length=50)
	price = models.FloatField()
	amount = models.IntegerField()

class Orders(models.Model):
      order_id = models.AutoField(primary_key=True)
      user_id = models.ForeignKey(Users, on_delete=models.CASCADE)
      item_id = models.ForeignKey(Items, on_delete=models.CASCADE)
      date = models.DateTimeField()
      amount = models.IntegerField()