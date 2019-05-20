from django.db import models
from django.contrib.auth.models import User
# from django.contrib import postgres


class Match(models.Model):

    creator = models.ForeignKey(User, on_delete=models.PROTECT)
    name = models.CharField(max_length=256)

    field_width = models.PositiveSmallIntegerField(default=3)
    field_height = models.PositiveSmallIntegerField(default=3)
    field_state = models.TextField()

    finished = models.BooleanField(default=False)
    paused = models.BooleanField(default=False)
    started = models.BooleanField(default=False)

    required_players = models.PositiveSmallIntegerField(default=2)
    max_players = models.PositiveSmallIntegerField(default=2)
    players = None

    turns = None


class Player(models.Model):

    user = models.ForeignKey(
        User,
        on_delete=models.PROTECT,
        related_name='players',
    )

    match = models.ForeignKey(
        Match,
        on_delete=models.CASCADE,
        related_name='players'
    )

    order = models.PositiveSmallIntegerField()


class Turn(models.Model):

    player = models.ForeignKey(Player, on_delete=models.PROTECT)
    match = models.ForeignKey(Match, on_delete=models.CASCADE)

    x = models.PositiveSmallIntegerField()
    y = models.PositiveSmallIntegerField()
