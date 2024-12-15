from django.shortcuts import render
import datetime
# Create your views here.
def home(request):
    d={'author':'Rahim','age':20,'list':[1,2,3],'lst':['good','bad'],'birthday':datetime.datetime.now() ,'courses':[
        {
        'id':1,
        'fee':1000
    },{
        'id':2,
        'fee':2000
    },{
        'id':3,
        'fee':5000
    }
    ]}
    return render(request,'home.html',d)