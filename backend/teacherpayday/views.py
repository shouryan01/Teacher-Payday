from django.shortcuts import render
from .serializers import UserSerializer 
from rest_framework import viewsets             
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import User, Payment

class UserView(viewsets.ModelViewSet):  
    serializer_class = UserSerializer   
    queryset = User.objects.all()

@api_view(['POST'])
def create_user(request):
    request_body = request.data

    # requires validation for all inputs

    first_name = request_body['first_name']
    last_name = request_body['last_name']


    user = User(first_name=first_name)
    
    user.save()

    return JsonResponse({'message': 'success!'})

@api_view(['post'])
def make_payment(request):
    body = request.data

    # make eth payments

    sending_address = body['sending_address']
    recieving_address = body['recieving_address']
    sending_key = body['sending_key']
    recieving_key = body['recieving_key']
    amount = body['amount']

    print(body)

    payment = Payment(sending_address=sending_address, recieving_address=recieving_address, sending_key=sending_key, amount=amount, recieving_key=recieving_key)

    payment.save()

    return JsonResponse({'message': 'success!'})

# @api_view(['post'])
# def get_user(request):
#     body = request.data

#     # make eth payments

#     print(body)

#     return JsonResponse({'message': 'success!'})