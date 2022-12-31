from rest_framework import serializers

from users.models import CustomUser, Participant
from rest_auth.registration.serializers import RegisterSerializer


class CustomRegisterSerializer(RegisterSerializer):
    name = serializers.CharField(
        required=False,
        max_length=100,
    )

    college = serializers.CharField(
        required=False,
        max_length=100,
    )

    date_of_birth = serializers.DateField(
        required=False
    )

    def get_cleaned_data(self):
        data_dict = super().get_cleaned_data()
        data_dict['name'] = self.validated_data.get('name', '')
        data_dict['college'] = self.validated_data.get('college', '')
        data_dict['date_of_birth'] = self.validated_data.get(
            'date_of_birth', '')
        return data_dict


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name', 'college', 'date_of_birth']


class ParticipantSerializer(serializers.ModelSerializer):

    class Meta:
        model = Participant
        fields = "__all__"
