from rest_framework import generics, views, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Cart, CartItem
from products.models import Product
from .serializers import CartSerializer, CartItemSerializer
from django.shortcuts import get_object_or_404

class CartView(generics.RetrieveAPIView):
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]

    def get_object(self):
        cart, created = Cart.objects.get_or_create(user=self.request.user)
        return cart

class AddToCartView(views.APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        cart, created = Cart.objects.get_or_create(user=request.user)
        product_id = request.data.get('product_id')
        quantity = int(request.data.get('quantity', 1))

        product = get_object_or_404(Product, id=product_id)
        
        cart_item, item_created = CartItem.objects.get_or_create(cart=cart, product=product)
        if not item_created:
            cart_item.quantity += quantity
        else:
            cart_item.quantity = quantity
        cart_item.save()
        
        serializer = CartSerializer(cart)
        return Response(serializer.data)

class RemoveFromCartView(views.APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        cart = get_object_or_404(Cart, user=request.user)
        cart_item = get_object_or_404(CartItem, id=pk, cart=cart)
        cart_item.delete()
        
        serializer = CartSerializer(cart)
        return Response(serializer.data)
