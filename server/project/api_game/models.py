from django.db import models
from django.contrib.auth.models import User
# Create your models here.


# class Match(models.Model):
#     created_on = models.DateTimeField(auto_now_add=True)
#     participants = models.ManyToManyField(User, through='Player')
#     field_width = models.IntegerField(null=False)
#     field_height = models.IntegerField(null=True)
#
#
# class Player(models.Model):
#     user = models.ForeignKey(User, on_delete=models.PROTECT)
#     match = models.ForeignKey(Match, on_delete=models.CASCADE)
#     turn_order = models.IntegerField(null=True, default=None)
#
#
# class Turn(models.Model):
#     created_on = models.DateTimeField(auto_now_add=True)
#     match = models.ForeignKey(Match, on_delete=models.CASCADE)
