# from django.shortcuts import render
from django.http import HttpResponse


def login(r):
    return HttpResponse('Login Page')


def signup(r):
    return HttpResponse('Signup Page')


# Create your views here.
