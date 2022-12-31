from atexit import register
from enum import unique
from django.db import models
#from tinymce import HTMLField


class Event(models.Model):
    id = models.AutoField(primary_key=True)
    event_id = models.CharField(max_length=100, unique=True)
    name = models.CharField(max_length=200)
    presented_by = models.CharField(max_length=200)
    summary = models.CharField(max_length=200)
    details = models.TextField()
    event_type = models.CharField(max_length=50, choices=[(
        'departmental', 'Departmental'), ('informal', 'Informal'), ('club', 'Club')])
    #rules = models.TextField()
    brochure_link = models.URLField()
    register_link = models.URLField()
    image = models.ImageField(upload_to='event_images')
    register_timestamp = models.DateTimeField()
    start_timestamp = models.DateTimeField()
    end_timestamp = models.DateTimeField()
    event_complete = models.BooleanField(default=False)
    venue = models.CharField(max_length=100)

    def __str__(self) -> str:
        return self.name

    # def __str__(self):
    #     self.name or f"event {id}"


class Winner(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    college = models.CharField(max_length=100)
    position = models.IntegerField()
    event = models.ForeignKey(Event, on_delete=models.CASCADE)


class Sponsor(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    logo = models.ImageField(upload_to='sponsor_logos')
    url = models.URLField()

    def __str__(self):
        return self.name


class Workshop(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    summary = models.CharField(max_length=250)
    details = models.TextField()
    register_link = models.URLField()
    image = models.ImageField(upload_to='workshop_images')
    register_timestamp = models.DateTimeField()
    start_timestamp = models.DateTimeField()
    end_timestamp = models.DateTimeField()
    venue = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class GuestTalk(models.Model):
    id = models.IntegerField(primary_key=True)
    guest_name = models.CharField(max_length=100)
    summary = models.CharField(max_length=250)
    details = models.TextField()
    register_link = models.URLField()
    image = models.ImageField(upload_to='guest_images')
    register_timestamp = models.DateTimeField()
    start_timestamp = models.DateTimeField()
    end_timestamp = models.DateTimeField()
    venue = models.CharField(max_length=100)

    def __str__(self):
        return self.guest_name


class Exhibition(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    summary = models.CharField(max_length=250)
    details = models.TextField()
    image = models.ImageField(upload_to='exhibition_images')
    start_timestamp = models.DateTimeField()
    end_timestamp = models.DateTimeField()
    venue = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class OrganisingTeamMember(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='team_images')
    designation = models.CharField(max_length=100)
    linkedin = models.URLField()
    contact = models.CharField(max_length=20)

    def __str__(self):
        return self.name


class Notification(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=100)
    message = models.TextField()
    timestamp = models.DateTimeField()

    def __str__(self):
        return self.title


class Merchandise(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='mechandise_images')
    price = models.FloatField()
    description = models.TextField()

    def __str__(self):
        return self.name
