from django.urls import path
from .views import ChatbotResponse

urlpatterns = [
    path('api/chatbot/', ChatbotResponse.as_view(), name='chatbot_response'),
]
