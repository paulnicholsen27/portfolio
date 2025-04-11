from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import generate_answer 
import requests
from django.http import JsonResponse

def chatbot(request):
    question = request.GET.get('question', '')
    pirate_mode = request.GET.get('pirate_mode', 'false')

    if not question:
        return JsonResponse({'error': 'No question provided'}, status=400)

    # Call Lambda via API Gateway
    url = f"https://lv9y0gnf6j.execute-api.us-east-1.amazonaws.com/chat?question={question}&pirate_mode={pirate_mode}"
    response = requests.get(url)

    # If successful, return the answer
    if response.status_code == 200:
        data = response.json()
        return JsonResponse({'answer': data.get('answer')})
    else:
        return JsonResponse({'error': 'Error fetching answer from chatbot'}, status=500)
