from django.db import models

class Data(models.Model):
    data1 = models.CharField("Data1", max_length=240)
    data2 = models.CharField("Data2", max_length=240)

    def __str__(self):
        return self.data1,self.data2