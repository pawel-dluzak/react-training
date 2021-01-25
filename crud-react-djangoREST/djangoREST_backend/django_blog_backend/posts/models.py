from django.db import models
from datetime import date
from django import utils


class Posts(models.Model):
    title = models.CharField("Title", max_length=240)
    text = models.TextField()
    date_added = models.DateField("Date added", default=utils.timezone.now())

    def __str__(self):
        return self.title
