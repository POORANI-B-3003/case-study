package com.hexaware.assetmanagement.serviceimpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hexaware.assetmanagement.dao.AdminRepository;
import com.hexaware.assetmanagement.dao.AssetRepository;
import com.hexaware.assetmanagement.dao.EmployeeRepository;
import com.hexaware.assetmanagement.dao.ServiceRequestRepository;
import com.hexaware.assetmanagement.dto.DashboardStatsDTO;
import com.hexaware.assetmanagement.dto.EmployeeResponseDTO;
import com.hexaware.assetmanagement.entity.Employee;
import com.hexaware.assetmanagement.enums.ServiceStatus;
import com.hexaware.assetmanagement.exception.ResourceNotFoundException;
import com.hexaware.assetmanagement.mapper.EmployeeMapper;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepo;

    @Autowired
    private EmployeeRepository employeeRepo;

    @Autowired
    private AssetRepository assetRepo;

    @Autowired
    private ServiceRequestRepository serviceRequestRepo;

    // Get all employee details
    public List<EmployeeResponseDTO> getAllEmployeeDetails() {
        List<Employee> entityList = employeeRepo.findAll();
        return entityList.stream()
                         .map(EmployeeMapper::toDTO)
                         .collect(Collectors.toList());
    }

    // Update employee status (active/inactive)
    public EmployeeResponseDTO updateEmployeeStatus(int id, boolean active) {
        Employee emp = employeeRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));

        emp.setActive(active);
        Employee updated = employeeRepo.save(emp);
        return EmployeeMapper.toDTO(updated);
    }

    // Delete employee
    public boolean deleteEmployeeById(int id) {
        Employee emp = employeeRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + id));

        employeeRepo.deleteById(id);
        return true;
    }

    // Get dashboard stats
    public DashboardStatsDTO getDashboardStats() {
        long totalEmployees = employeeRepo.count();
        long totalAssets = assetRepo.count();
        long totalServiceRequests = serviceRequestRepo.count();
        long pendingServiceRequests = serviceRequestRepo.countByStatus(ServiceStatus.PENDING);


        return new DashboardStatsDTO(
                totalEmployees,
                totalAssets,
                totalServiceRequests,
                pendingServiceRequests
        );
    }
}
