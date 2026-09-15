from django.urls import path
from .views import CartView, AddToCartView, RemoveFromCartView

urlpatterns = [
    path('', CartView.as_view(), name='cart_detail'),
    path('add/', AddToCartView.as_view(), name='cart_add'),
    path('item/<int:pk>/', RemoveFromCartView.as_view(), name='cart_item_remove'),
]
