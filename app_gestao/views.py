from django.shortcuts import render


def login(request):

    return render(request, 'login.html')


def estoque(request):

    return render(request, 'estoque/estoque.html')


def home(request):

    return render(request, 'home.html')


def financeiro(request):

    return render(request, 'financeiro/financeiro.html')


def dashboard(request):

    return render(request, 'dashboard/dashboard.html')
