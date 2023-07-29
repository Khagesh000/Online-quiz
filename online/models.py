from django.db import models

# Create your models here.

from django import forms


class ImageSet(forms.Form):
    image_choices = (
        ('image1', 'Image1'),
        ('image2', 'Image2'),
        ('image3', 'Image3'),
        ('image4', 'Image4')
    )
    selected_image = forms.ChoiceField(choices=image_choices)

class User(models.Model):
    username = models.CharField(max_length=30)
    name1 : models.CharField(max_length=30)