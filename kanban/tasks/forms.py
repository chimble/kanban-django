from django.contrib.auth.models import User
from django import forms
from tasks.models import Task

class UserForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ['username', 'email', 'password']
