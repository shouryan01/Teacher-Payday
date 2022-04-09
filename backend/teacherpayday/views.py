from django.shortcuts import render
from .serializers import InvestmentUserSerializer 
from rest_framework import viewsets      
from .models import InvestmentUser                 
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import InvestmentUser

class InvestmentUserView(viewsets.ModelViewSet):  
    serializer_class = InvestmentUserSerializer   
    queryset = InvestmentUser.objects.all()

@api_view(['POST'])
def investment_user_post(request):
    request_body = request.data

    first_name = request_body['firstName']

    user = InvestmentUser(first_name=first_name)
    
    user.save()

    return JsonResponse({'message': 'success!'})
