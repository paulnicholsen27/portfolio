from django.db import models

class Resume(models.Model):
    content = models.TextField()
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Resume uploaded on {self.uploaded_at}"