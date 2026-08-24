from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework import generics
from rest_framework_simplejwt.tokens import RefreshToken

from .models import Employee
from .serializers import EmployeeSerializer

from django.contrib.auth.models import User


class LoginView(APIView):

    authentication_classes = []
    permission_classes = [AllowAny]

    def post(self, request):

        email = request.data.get("email")
        password = request.data.get("password")

        user = User.objects.filter(email=email).first()

        if user is None:
            return Response(
                {"message": "User not found"},
                status=status.HTTP_401_UNAUTHORIZED
            )

        if not user.check_password(password):
            return Response(
                {"message": "Invalid password"},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        refresh = RefreshToken.for_user(user)
        return Response({
            "message" : "Login successful",
            "access" : str(refresh.access_token),
            "refresh" : str(refresh)
        }
        )
     
class EmployeeListCreateView(generics.ListCreateAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    
class EmployeeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    
    authentication_classes = []
    permission_classes = [AllowAny]
    