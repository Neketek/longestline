# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
from rest_framework_nested import routers
from django.urls import include, path
from . import views

router = routers.SimpleRouter()
router.register('matches', views.MatchViewSet, 'matches')

matches_parent_router = routers.NestedSimpleRouter(
    router,
    'matches',
    lookup='match',
)

matches_parent_router.register('turns', views.TurnViewSet, 'turns')
matches_parent_router.register('players', views.PlayerViewSet, 'players')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(matches_parent_router.urls)),
]
