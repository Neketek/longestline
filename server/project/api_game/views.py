from rest_framework import viewsets
from rest_framework import mixins, response
from rest_framework.permissions import IsAuthenticated
from .serializers import MatchSerializer
from .models import Match
import json


class MatchViewSet(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin
):

    permission_classes = (IsAuthenticated,)
    serializer_class = MatchSerializer
    queryset = Match.objects.all().order_by('pk')
