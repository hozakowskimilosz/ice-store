from rest_framework.views import APIView
from django.http import HttpResponse
from django.core import serializers
import json

class StoreItemsView(APIView):
    def get(self, request):

        sample_data = {
            'items': {
                'item1': {
                    'item_id': '1',
                    'item_name': 'name1',
                    'price': '1',
                    'amount': '1',
                },
                'item2': {
                    'item_id': '2',
                    'item_name': 'name2',
                    'price': '2',
                    'amount': '2',
                },  
            }
        }
        fake_items_implementation = json.dumps(sample_data, indent=4)
        return HttpResponse(fake_items_implementation, 'application/json')
