from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth.models import User
from .models import Employee, LeaveRequest
from .models import Employee
from .serializers import EmployeeSerializer, LeaveRequestSerializer


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
            "message": "Login successful",
            "access": str(refresh.access_token),
            "refresh": str(refresh)
        })


class EmployeeListCreateView(generics.ListCreateAPIView):
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticated]
    def get_queryset(self):
        queryset = Employee.objects.all()
        department = self.request.query_params.get("department")
        search = self.request.query_params.get("search")
        if department:
            queryset = queryset.filter(
                department__iexact=department
            )
        if search:
            queryset = queryset.filter(
                name__icontains=search
            )
        return queryset

class EmployeeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializer
    authentication_classes = []
    permission_classes = [AllowAny]
    
class LeaveRequestListCreateView(generics.ListCreateAPIView):
    queryset = LeaveRequest.objects.all()
    serializer_class = LeaveRequestSerializer
    permission_classes = [IsAuthenticated]


class LeaveRequestDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = LeaveRequest.objects.all()
    serializer_class = LeaveRequestSerializer
    permission_classes = [IsAuthenticated]