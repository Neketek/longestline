from .models import Match, Player, Turn
from rest_framework import serializers


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('user', 'match')


class TurnSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turn
        fields = ('match', 'player', 'x', 'y')


class MatchSerializer(serializers.ModelSerializer):

    class Meta:
        model = Match
        fields = (
            'id',
            'creator',
            'field_state',
            'required_players',
            'max_players',
            'turns',
            'finished',
            'started',
            'paused',
            'name',
            'field_width',
            'field_height',
        )

        read_only_fields = (
            'id',
            'creator',
            'field_state',
            'required_players',
            'max_players',
            'turns',
            'finished',
            'started',
            'paused'
        )

        extra_kwargs = {}
