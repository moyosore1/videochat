from django.shortcuts import render

# Create your views here.


def home(request):
    return render(request, 'misc/home.html')


def room(request):
    return render(request, 'misc/room.html')
