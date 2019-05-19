from djongo import models as mongo
from django.db import models
from django.contrib.auth.models import User


class Player(models.Model):

    user = models.ForeignKey(User, on_delete=models.PROTECT)
    max_line_lengh = models.IntegerField(null=False, default=0)
    kicked = models.BooleanField(null=False, default=False)

    class Meta:
        abstract = True


class Players(models.Model):

    required = models.IntegerField(default=2, null=False)
    list = mongo.ArrayModelField(model_container=Player)

    class Meta:
        abstract = True


class Field(models.Model):

    width = models.IntegerField(null=False, default=3)
    height = models.IntegerField(null=False, default=3)
    state = models.TextField(null=False, default='')

    class Meta:
        abstract = True


class Turn(models.Model):

    created = models.DateTimeField(auto_now_add=True)

    x = models.IntegerField()
    y = models.IntegerField()

    class Meta:
        abstract = True


class State(models.Model):

    finished = models.BooleanField(default=False)
    paused = models.BooleanField(default=False)
    # turn started time
    turn_started = models.DateTimeField(null=True, default=None)
    # index of current player turn
    player_turn = models.IntegerField(null=True)

    class Meta:
        abstract = True


class Description(models.Model):

    created = models.DateTimeField(auto_now_add=True)
    creator = models.ForeignKey(User, on_delete=models.PROTECT)
    players = mongo.EmbeddedModelField(model_container=Players)

    class Meta:
        abstract = True


class Match(models.Model):
    description = mongo.EmbeddedModelField(model_container=Description)
    turns = mongo.ArrayModelField(model_container=Turn)
    state = mongo.EmbeddedModelField(model_container=State)
    field = mongo.EmbeddedModelField(model_container=Field)
