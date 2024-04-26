from django.db import models

# Create your models here.
class Items(models.Model):
	item_id = models.AutoField(primary_key=True)
	item_name = models.CharField(max_length=50)
	price = models.FloatField()
	amount = models.IntegerField()