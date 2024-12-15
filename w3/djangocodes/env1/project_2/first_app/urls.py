from django.urls import path
#from first_app.vews import home
#from first_app import views
from . import views
urlpatterns = [
    path('',views.home),
]
