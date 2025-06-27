from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import generate_answer 
import requests
from django.http import JsonResponse
from django.views.generic import TemplateView

def chatbot(request):
    question = request.GET.get('question', '')
    pirate_mode = request.GET.get('pirate_mode', 'false')
    if not question:
        return JsonResponse({'error': 'Please provide a question.'}, status=400)
    # Call Lambda via API Gateway
    url = f"https://lv9y0gnf6j.execute-api.us-east-1.amazonaws.com/chat?question={question}&pirate_mode={pirate_mode}"
    response = requests.get(url)

    # If successful, return the answer
    if response.status_code == 200:
        data = response.json()
        return JsonResponse({'answer': data.get('answer')})
    else:
        return JsonResponse({'error': 'Error fetching answer from chatbot.  Even artificial intelligence can be dumb sometimes.'}, status=500)

class ReactAppView(TemplateView):
    template_name = "index.html"

import os
from django.http import HttpResponse
from django.conf import settings

def test_view(request):
    return HttpResponse("Hello from Django! Code changes are live.")