from django.urls import path

from . import views

from . views import home, start, quiz1, quiz2,  quiz3, final, first

urlpatterns = [
    path('',home,name='home'),
    path('start/',views.start,name='start' ),
    path('quiz1/',views.quiz1,name='quiz1' ),
    path('quiz2/',views.quiz2,name='quiz2' ),
    path('quiz3/',views.quiz3,name='quiz3' ),
    path('quiz2/final/',views.final,name='final' ),
    path('quiz2/first/',views.first, name="first"),
]