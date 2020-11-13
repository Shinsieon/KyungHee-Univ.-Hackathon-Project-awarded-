from django.urls import path
from . import views


urlpatterns=[
    path('',views.home, name='home'),
    path('home/',views.home, name='home'),
    path('survey/',views.survey, name='survey'),
    path('result/',views.result, name='result'),
]