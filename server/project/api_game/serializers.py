from .models import Match
from rest_framework import serializers


# class FieldSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Field
#         fields = (
#             'width',
#             'height',
#             'state',
#         )
#
#
# class StateSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = State
#         fields = (
#             'finished',
#             'paused',
#             'turn_started',
#             'player_turn'
#         )
#
#
# class DescriptionSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = State
#         fields = (
#             'finished',
#             'paused',
#             'turn_started',
#             'player_turn'
#         )


class MatchSerializer(serializers.ModelSerializer):

    class Meta:
        model = Match

        fields = (
            'url',
            'state',
            'field',
            'description',
        )
