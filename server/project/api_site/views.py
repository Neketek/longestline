from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.permissions import NOT, IsAuthenticated, AllowAny
from .serializers import UserSerializer, GroupSerializer
from django_filters import rest_framework as filters
from rest_framework import filters as drf_filters


class UserViewSet(
    viewsets.GenericViewSet,
    mixins.CreateModelMixin,
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.ListModelMixin
):

    permission_classes = (IsAuthenticated,)
    serializer_class = UserSerializer
    queryset = User.objects.all().order_by('pk')
    filter_backends = (drf_filters.SearchFilter, filters.DjangoFilterBackend)
    filter_fields = ('username', 'email')
    search_fields = ('^username', '^email',)

    def get_permissions(self):
        if self.request.method == 'POST':
            return (NOT(IsAuthenticated()),)
        elif self.request.method == 'OPTIONS':
            return (AllowAny(),)
        return super().get_permissions()


class GroupViewSet(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    queryset = Group.objects.all().order_by('pk')
