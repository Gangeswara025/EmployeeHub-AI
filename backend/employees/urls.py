from django.urls import path
from .views import LoginView, EmployeeListCreateView, EmployeeDetailView

urlpatterns = [
  path('login/', LoginView.as_view()),
  path('employees/', EmployeeListCreateView.as_view()),
  path('employees/<int:pk>/', EmployeeDetailView.as_view()),
]