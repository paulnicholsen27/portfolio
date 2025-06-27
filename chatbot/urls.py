from django.urls import path
from . import views

urlpatterns = [
    path('chatbot/', views.chatbot, name='chatbot'),
    path("test-view/", views.test_view),
]
