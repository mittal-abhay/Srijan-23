from sys import api_version
from rest_framework.response import Response
from rest_framework.decorators import api_view

from base.models import Event, Winner, Sponsor, Workshop, GuestTalk, \
                    Exhibition, OrganisingTeamMember, Notification, Merchandise
from .serializers import EventSerializer, WinnerSerializer, SponsorSerializer, WorkshopSerializer, GuestTalkSerializer, \
                    ExhibitionSerializer, OrganisingTeamMemberSerializer, NotificationSerializer, MerchandiseSerializer

from users.models import CustomUser, Participant
from users.serializers import UserSerializer, ParticipantSerializer

@api_view(['GET'])
def getParticipantDetails(request, pk):
    participant = Participant.objects.get(id=pk)
    serializer = ParticipantSerializer(participant, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getParticipants(request):
    participants = Participant.objects.all()
    serializer = ParticipantSerializer(participants, many=True)
    return Response(serializer.data)
    
@api_view(['GET'])
def getUsers(request):
    users = CustomUser.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getUserDetails(request, pk):
    user = CustomUser.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getSponsors(request):
    sponsors = Sponsor.objects.all()
    serializer = SponsorSerializer(sponsors, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getSponsorDetails(request, id):
    sponsor = Sponsor.objects.get(id=id)
    serializer = SponsorSerializer(sponsor, many=False, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getWorkshops(request):
    workshops = Workshop.objects.all()
    serializer = WorkshopSerializer(workshops, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getWorkshopDetails(request, id):
    workshop = Workshop.objects.get(id=id)
    serializer = WorkshopSerializer(workshop, many=False, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getGuestTalks(request):
    guestTalks = GuestTalk.objects.all()
    serializer = GuestTalkSerializer(guestTalks, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getGuestTalkDetails(request, id):
    guestTalk = GuestTalk.objects.get(id=id)
    serializer = GuestTalkSerializer(guestTalk, many=False, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getExhibitions(request):
    exhibitions = Exhibition.objects.all()
    serializer = ExhibitionSerializer(exhibitions, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getExhibitionDetails(request, id):
    exhibition = Exhibition.objects.get(id=id)
    serializer = ExhibitionSerializer(exhibition, many=False, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getOrganisingTeamMembers(request):
    organisingTeamMembers = OrganisingTeamMember.objects.all()
    serializer = OrganisingTeamMemberSerializer(organisingTeamMembers, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getOrganisingTeamMemberDetails(request, id):
    organisingTeamMember = OrganisingTeamMember.objects.get(id=id)
    serializer = OrganisingTeamMemberSerializer(organisingTeamMember, many=False, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getNotifications(request):
    notifications = Notification.objects.all()
    serializer = NotificationSerializer(notifications, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getNotificationDetails(request, id):
    notification = Notification.objects.get(id=id)
    serializer = NotificationSerializer(notification, many=False, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getMerchandises(request):
    merchandises = Merchandise.objects.all()
    serializer = MerchandiseSerializer(merchandises, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getMerchandiseDetails(request, id):
    merchandise = Merchandise.objects.get(id=id)
    serializer = MerchandiseSerializer(merchandise, many=False, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getEvents(request):
    events = Event.objects.all()
    event_type = request.query_params.get('event_type', None)
    if event_type is not None:
        events = events.filter(event_type=event_type)
    serializer = EventSerializer(events, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getEventDetails(request, id):
    events = Event.objects.get(id=id)
    serializer = EventSerializer(events, many=False, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getWinners(request):
    winners = Winner.objects.all()
    serializer = WinnerSerializer(winners, many=True, context={'request': request})
    return Response(serializer.data)

@api_view(['GET'])
def getEventWinners(request, id):
    winners = Winner.objects.filter(event=id)
    serializer = WinnerSerializer(winners, many=True, context={'request': request})
    return Response(serializer.data)