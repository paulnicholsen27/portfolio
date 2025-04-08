import json
from django.shortcuts import render

# Create your views here.
from django.http import JsonResponse
from .aws_scripts.ai_chatbot import query_chatbot

def chat_api(request):
    if request.method == 'POST':
        question = json.loads(request.body).get('message', '')
        response = query_chatbot(question)
        return JsonResponse({'response': response})
