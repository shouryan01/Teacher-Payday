from django.shortcuts import render
from .serializers import UserSerializer 
from rest_framework import viewsets             
from rest_framework.decorators import api_view
from django.http import JsonResponse
from .models import User, Payment
from web3 import Web3
import os

@api_view(['GET'])
def get_students(request):
    students = list(User.objects.filter(type='student'))

    prod_students = []

    for student in enumerate(students):
        i, obj = student
        prod_students.append({
            'type': obj.type,
            'created_at': obj.created_at,
            'eth_wallet_address': obj.eth_wallet_address,
            'private_key': obj.private_key,
            'first_name': obj.first_name,
            'last_name': obj.last_name,
            'email': obj.email,
            'description': obj.description
        })

    return JsonResponse({'students': prod_students});

@api_view(['POST'])
def create_user(request):
    request_body = request.data

    # requires validation for all inputs

    first_name = request_body['first_name']
    last_name = request_body['last_name']
    email = request_body['email']
    password = request_body['password']
    type = request_body['type']

    private_key = description = eth_wallet_address = None

    if 'private_key' in request_body.keys() and len(request_body['private_key']) > 0:
        private_key = request_body['private_key']
    if 'description' in request_body.keys() and len(request_body['description']) > 0:
        description = request_body['description']
    if 'eth_wallet_address' in request_body.keys() and len(request_body['eth_wallet_address']) > 0:
        eth_wallet_address = request_body['eth_wallet_address']

    user = User(first_name=first_name, last_name=last_name, email=email, password=password, type=type, private_key=private_key, eth_wallet_address=eth_wallet_address, description=description)
    
    user.save()

    return JsonResponse({'message': 'success!'})

@api_view(['post'])
def make_payment(request):
    body = request.data

    # make eth payments

    print(body.keys())
    print(body.keys())
    print(body.keys())

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

    payment = Payment(sending_address=sending_address, recieving_address=recieving_address, sending_key=sending_key, amount=amount, recieving_key=recieving_key)

    payment.save()

    return JsonResponse({'message': 'success!'})

@api_view(['post'])
def user_exists(request):
    body = request.data

    exists = False

    email = body['email']
    password = body['password']

    obj = User.objects.filter(email=email)

    type = None
    created_at = None
    eth_wallet_address = None
    private_key = None
    description = None
    first_name = None
    last_name = None

    if obj.exists() and obj.first().password == password:
        exists = True
        type = obj.first().type
        created_at = obj.first().created_at
        eth_wallet_address = obj.first().eth_wallet_address
        private_key = obj.first().private_key
        first_name = obj.first().first_name
        last_name = obj.first().last_name

        description = obj.first().description

    return JsonResponse({'first_name': first_name, 'last_name': last_name, 'exists': exists, 'type': type, 'created_at': created_at, 'eth_wallet_address': eth_wallet_address, 'private_key': private_key, 'description': description})