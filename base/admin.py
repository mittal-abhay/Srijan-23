from django.contrib import admin
from .models import Event, Winner, Sponsor, Workshop, GuestTalk, \
                    Exhibition, OrganisingTeamMember, Notification, Merchandise

admin.site.register(Event)
admin.site.register(Winner)
admin.site.register(Sponsor)
admin.site.register(Workshop)
admin.site.register(GuestTalk)
admin.site.register(Exhibition)
admin.site.register(OrganisingTeamMember)
admin.site.register(Notification)
admin.site.register(Merchandise)