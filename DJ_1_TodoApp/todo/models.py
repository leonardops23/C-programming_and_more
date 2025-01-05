from django.db import models

# Create your models here.
class Tasks(models.Model):
    objects = None
    title = models.CharField(max_length=200)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title