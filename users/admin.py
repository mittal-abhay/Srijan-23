from django.contrib import admin
from .models import CustomUser, Participant
# Register your models here.

admin.site.register(CustomUser)
admin.site.register(Participant)
