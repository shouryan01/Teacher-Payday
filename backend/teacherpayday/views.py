from django.shortcuts import render
from .serializers import UserSerializer 
from rest_framework import viewsets             
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import User, Payment
from web3 import Web3
import os

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
    url = body['url']


    w3 = Web3(Web3.HTTPProvider(url))

    # sending_adress = '0x8183085b40d038814E847C1b93F7eC8C3dd63ab6'

    # reciever_adress = '0x5f835e18F2295e4B6A9b9A1Ba5Be47685f4C012C'

    # private_key = 'c5c3a266024ff74951fb230052d174684a2aeefd40f0f5ce058667538658cd8a' # sending key

    address1 = Web3.toChecksumAddress(sending_address)

    address2 = Web3.toChecksumAddress(recieving_address)

    nonce = w3.eth.getTransactionCount(address1)

    tx = {
        'nonce': nonce,
        'to': address2,
        'value': w3.toWei(float(amount), 'ether'), # How much to send (amount var)
        'gas': 21000,
        'gasPrice': w3.toWei(40, 'gwei')
    }

    signed_tx = w3.eth.account.signTransaction(tx, sending_key)

    tx_hash = w3.eth.sendRawTransaction(signed_tx.rawTransaction)

    print(tx_hash)


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