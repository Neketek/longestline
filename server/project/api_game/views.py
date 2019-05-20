from .models import Match, Turn, Player
from rest_framework import viewsets
from rest_framework import mixins
# from rest_framework.permissions import NOT, IsAuthenticated, AllowAny
from .serializers import TurnSerializer, MatchSerializer, PlayerSerializer
# from django_filters import rest_framework as filters
# from rest_framework import filters as drf_filters


class MatchViewSet(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.ListModelMixin
):
    serializer_class = MatchSerializer
    queryset = Match.objects.all()

    def perform_create(self, serializer):
        data = {}
        data['creator'] = self.request.user
        width = serializer.validated_data['field_width']
        height = serializer.validated_data['field_height']
        data['field_state'] = '0'*(width*height)
        data['required_players'] = 2
        data['max_players'] = 2
        serializer.save(**data)


class TurnViewSet(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.ListModelMixin,
):

    serializer_class = TurnSerializer

    def get_queryset(self):
        return (
            Turn.objects.all().filter(match_id=self.kwargs.get('match_pk'))
        )


class PlayerViewSet(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.ListModelMixin,
):

    serializer_class = PlayerSerializer

    def get_queryset(self):
        return (
            Player.objects.all().filter(match_id=self.kwargs.get('match_pk'))
        )
