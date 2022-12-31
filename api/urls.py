from django.urls import path
from . import views

urlpatterns = [
    path('sponsors/', views.getSponsors),
    path('sponsors/<int:id>/', views.getSponsorDetails),
    path('workshops/', views.getWorkshops),
    path('workshops/<int:id>/', views.getWorkshopDetails),
    path('guesttalks/', views.getGuestTalks),
    path('guesttalks/<int:id>/', views.getGuestTalkDetails),
    path('exhibitions/', views.getExhibitions),
    path('exhibitions/<int:id>/', views.getExhibitionDetails),
    path('organisingteammembers/', views.getOrganisingTeamMembers),
    path('organisingteammembers/<int:id>/', views.getOrganisingTeamMemberDetails),
    path('notifications/', views.getNotifications),
    path('notifications/<int:id>/', views.getNotificationDetails),
    path('merchandises/', views.getMerchandises),
    path('merchandises/<int:id>/', views.getMerchandiseDetails),
    path('events/', views.getEvents),
    path('events/<int:id>', views.getEventDetails),
    path('winners/', views.getWinners),
    path('winners/event/<int:id>', views.getEventWinners),

    path('all_users/', views.getUsers),
    path('users/<int:pk>/', views.getUserDetails),
    path('participants/', views.getParticipants),
    path('participants/<int:pk>/', views.getParticipantDetails),
]