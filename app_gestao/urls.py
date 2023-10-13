from django.urls import path
from . import views

urlpatterns = [
    path('', views.login, name='login'),
    path('home/', views.home, name='home'),
    path('financeiro/', views.financeiro, name='financeiro'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('estoque/', views.estoque, name='estoque'),


]
