from rest_framework import serializers
from base.models import Event, Winner, Sponsor, Workshop, GuestTalk, \
                    Exhibition, OrganisingTeamMember, Notification, Merchandise

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class WinnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Winner
        fields = '__all__'

class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = '__all__'

class WorkshopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workshop
        fields = '__all__'

class GuestTalkSerializer(serializers.ModelSerializer):
    class Meta:
        model = GuestTalk
        fields = '__all__'

class ExhibitionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exhibition
        fields = '__all__'

class OrganisingTeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrganisingTeamMember
        fields = '__all__'

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = '__all__'

class MerchandiseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Merchandise
        fields = '__all__'