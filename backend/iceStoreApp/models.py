from django.db import models

# Create your models here.
class Items(models.Model):
	item_id = models.IntegerField()
	item_name = models.CharField(max_length=50)
	price = models.models.FloatField()
	amount = models.IntegerField()