from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse, HttpRequest
from django.urls import reverse
from urllib.parse import urlencode, quote_plus
from django.shortcuts import redirect
from .models import User



# Create your views here.

def home(request):
   
    if request.method == 'POST':
            name = request.POST.get('name')
            print(f"Input value: {name}")
            user = User(username=name)
        
        
            return render(request, 'start.html', {'user':user})
    
    
    return render(request, 'index.html') 
                
    
def start(request):
    
    username = request.session.get('username')
    username = request.POST.get('username')
    print(username)
    return render(request, 'start.html', {'username':username})
    


def quiz1(request):
    
    username = request.POST.get('username')
    name1 = request.POST.get('name1')
    print(f'Input value: {username}')
    print(f'Input value: {name1}')
    sum = request.POST.get('sum')
    print(f'input :{sum}')
    sum = 0
    resultDiv = ''

    next_url = request.build_absolute_uri(reverse('quiz2'))
    next_url_with_username = next_url + f'?name1={name1}'
    share_url = f'https://api.whatsapp.com/send?text={next_url}'
    context = {'share_url':share_url,'sum':sum,'name1':name1,'username':username,'resultDiv':resultDiv}

        
    response =  render(request,'quiz1.html',context)
    return response
   
    
    
    

def quiz2(request):
 
       if request.method == 'POST':
            name1 = request.POST.get('name1')
            print(f"Input value: {name1}")
            sum = request.POST.get('sum')
            print(f'input :{sum}')
            context = {'name1':name1, 'username': 'username', 'sum':sum}
            return render(request, 'quiz3.html', context)
       return render(request,'quiz2.html')
    


def quiz3(request):

    if request.method == 'POST':
        name1 = request.POST.get('name1')
        print(name1)
        context = {'name1':name1,'data2':'Quiz3 Data'}
        return render(request,'quiz3.html',context)

    return render(request,'quiz3.html')

def final(request):

    if request.method == 'POST':
        name1 = request.POST.get('name1')

        context = {'name1':name1, 'data2':'Final Data'}
        return render(request, 'final.html', context)

    return render(request,'final.html')

def first(request):
    if request.method == 'POST':
        name1 = request.POST.get('name1')
        username = request.POST.get('username')
        name1 = request.POST.get('name1')
        request.session['name1'] = name1
        print(f'Input value: {name1}')
        sum = 0
        resultDiv = ''
        next_url = request.build_absolute_uri(reverse('quiz2'))
        share_url = f'https://api.whatsapp.com/send?text={next_url}'

        context = {'name1':'name1','sum':'sum', 'data2':'First Data', 'username':username}
        return redirect('home')

    return redirect('home')



   