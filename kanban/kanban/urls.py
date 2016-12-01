from django.contrib import admin
from django.conf.urls import url, include
from rest_framework import routers
from tasks import views


router = routers.DefaultRouter()
router.register(r'api/tasks', views.TasksViewSet)


urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
