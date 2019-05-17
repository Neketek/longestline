from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework.permissions import NOT, IsAuthenticated, AllowAny
from .serializers import UserSerializer, GroupSerializer


class UserViewSet(viewsets.ModelViewSet):

    serializer_class = UserSerializer
    queryset = User.objects.all().order_by('pk')

    def get_permissions(self):
        if self.request.method == 'POST':
            return (NOT(IsAuthenticated()),)
        elif self.request.method == 'OPTIONS':
            return (AllowAny(),)
        return super().get_permissions()


class GroupViewSet(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    queryset = Group.objects.all().order_by('pk')
