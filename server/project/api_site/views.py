from django.contrib.auth.models import User, Group
from rest_framework.viewsets import ModelViewSet
from .serializers import UserSerializer, GroupSerializer


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all().order_by('pk')


class GroupViewSet(ModelViewSet):
    serializer_class = GroupSerializer
    queryset = Group.objects.all().order_by('pk')
