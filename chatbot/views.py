from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import generate_answer 
import requests
from django.http import JsonResponse

# class ChatbotResponse(APIView):
#     def post(self, request):
#         user_question = request.data.get('question', '')
#         if not user_question:
#             return Response({"error": "Question is required"}, status=status.HTTP_400_BAD_REQUEST)
        
#         # Process the question and generate an answer
#         answer = generate_answer(user_question)
#         return Response({'answer': answer})

def chatbot(request):
    question = request.GET.get('question', '')
    
    if not question:
        return JsonResponse({'error': 'No question provided'}, status=400)

    # Call Lambda via API Gateway
    url = f"https://lv9y0gnf6j.execute-api.us-east-1.amazonaws.com/chat?question={question}"
    response = requests.get(url)

    # If successful, return the answer
    if response.status_code == 200:
        data = response.json()
        return JsonResponse({'answer': data.get('answer')})
    else:
        return JsonResponse({'error': 'Error fetching answer from chatbot'}, status=500)
