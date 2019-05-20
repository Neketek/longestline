# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
from rest_framework import routers
from django.urls import include, path
from . import views

router = routers.DefaultRouter()
router.register('matches', views.MatchViewSet)

urlpatterns = [
    path('', include(router.urls))
]
