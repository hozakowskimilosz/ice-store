from rest_framework.views import APIView
from django.http import JsonResponse, response, HttpResponse
from .models import Items
from django.core import serializers

class StoreItemsView(APIView):
    def get(self, request):
        items = Items.objects.all().values() 
        return JsonResponse({'items': list(items)})

class GetItemsById(APIView):
    def get(self, request, item_id):
        item = Items.objects.filter(item_id=item_id)
        data = serializers.serialize('json', item)
        return HttpResponse(data, content_type="application/json")


class Login(APIView):
    def get(self, request, email, password):
        try:
            user = Users.objects.filter(email=email, password=password)
        except:
            return HttpResponse({'message': 'Invalid email or password'}, status=401)
        return HttpResponse({'message': 'Logged in'}, status=200)