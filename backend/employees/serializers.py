from rest_framework import serializers
from .models import Employee, LeaveRequest


class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Employee
        fields = '__all__'
    def validate_salary(self, value):
        if value <= 0:
            raise serializers.ValidationError(
                "Salary must be greater than 0."
            )

        return value
    def validate_name(self, value):
        if len(value) < 3:
            raise serializers.ValidationError(
                "Name must contain at least 3 characters."
            )

        return value
      
class LeaveRequestSerializer(serializers.ModelSerializer):
    employee_name = serializers.CharField(
        source="employee.name",
        read_only=True
    )
    class Meta:
        model = LeaveRequest
        fields = "__all__"

    def validate(self, data):
        if data["end_date"] < data["start_date"]:
            raise serializers.ValidationError(
                "End date cannot be before start date."
            )

        return data