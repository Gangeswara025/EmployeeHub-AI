from django.urls import path
from .views import LeaveRequestDetailView, LeaveRequestListCreateView, LoginView, EmployeeListCreateView, EmployeeDetailView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
  path('login/', LoginView.as_view()),
  path('token/refresh/', TokenRefreshView.as_view()), 
  path('employees/', EmployeeListCreateView.as_view()),
  path('employees/<int:pk>/', EmployeeDetailView.as_view()),
  path('leave-requests/', LeaveRequestListCreateView.as_view()),
  path('leave-requests/<int:pk>/', LeaveRequestDetailView.as_view()),
]
