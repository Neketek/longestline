from django.contrib.auth.models import User, Group
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, valid_data):
        user = User(
            username=valid_data['username'],
            email=valid_data.get('email', '')
        )
        user.set_password(valid_data['password'])
        user.save()
        return user


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
