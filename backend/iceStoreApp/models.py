import uuid
from django.db import models

class Users(models.Model):
    id = models.UUIDField( 
        primary_key = True, 
        default = uuid.uuid4, 
        editable = False
    ) 
    name = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    email = models.EmailField(max_length=254)
    password = models.CharField(max_length=50)
    adress = models.CharField(max_length=150)
    phone_num = models.IntegerField()

class Items(models.Model):
    id = models.UUIDField( 
        primary_key = True, 
        default = uuid.uuid4, 
        editable = False
    ) 
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=254)
    price = models.FloatField()
    amount = models.IntegerField()

class Orders(models.Model):
    id = models.UUIDField( 
        primary_key = True, 
        default = uuid.uuid4, 
        editable = False
    ) 
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    item = models.ForeignKey(Items, on_delete=models.CASCADE)
    date = models.DateTimeField()
    amount = models.IntegerField()