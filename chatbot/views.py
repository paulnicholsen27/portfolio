from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import generate_answer 

class ChatbotResponse(APIView):
    def post(self, request):
        user_question = request.data.get('question', '')
        if not user_question:
            return Response({"error": "Question is required"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Process the question and generate an answer
        answer = generate_answer(user_question)
        return Response({'answer': answer})

