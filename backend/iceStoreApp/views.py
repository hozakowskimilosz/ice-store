from rest_framework.views import APIView
from django.http import JsonResponse
from .models import Items

class StoreItemsView(APIView):
    def get(self, request):
        items = Items.objects.all().values() 
        return JsonResponse({'items': list(items)})
