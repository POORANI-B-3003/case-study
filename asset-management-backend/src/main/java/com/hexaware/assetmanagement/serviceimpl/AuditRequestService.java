package com.hexaware.assetmanagement.serviceimpl;

import com.hexaware.assetmanagement.dto.AuditRequestDTO;
import com.hexaware.assetmanagement.entity.Asset;
import com.hexaware.assetmanagement.entity.AuditRequest;
import com.hexaware.assetmanagement.entity.Employee;
import com.hexaware.assetmanagement.exception.ResourceNotFoundException;
import com.hexaware.assetmanagement.mapper.AuditRequestMapper;
import com.hexaware.assetmanagement.dao.AssetRepository;
import com.hexaware.assetmanagement.dao.AuditRequestRepository;
import com.hexaware.assetmanagement.dao.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AuditRequestService {

    @Autowired
    private AuditRequestRepository auditRepo;

    @Autowired
    private EmployeeRepository employeeRepo;

    @Autowired
    private AssetRepository assetRepo;

    // Get all audit logs
    public List<AuditRequestDTO> getAllLogs() {
        List<AuditRequest> logs = auditRepo.findAll();
        return logs.stream()
                   .map(AuditRequestMapper::toDTO)
                   .collect(Collectors.toList());
    }

    // Get single audit log by ID
    public AuditRequestDTO getLogById(int id) {
        return auditRepo.findById(id)
                        .map(AuditRequestMapper::toDTO)
                        .orElseThrow(() -> new ResourceNotFoundException("Audit log not found with id: " + id));
    }

    // Get logs by employee ID
    public List<AuditRequestDTO> getLogsByEmployee(int employeeId) {
        return auditRepo.findByEmployeeId(employeeId)
                        .stream()
                        .map(AuditRequestMapper::toDTO)
                        .collect(Collectors.toList());
    }

    // Get logs by date
    public List<AuditRequestDTO> getLogsByDate(LocalDate date) {
        return auditRepo.findByAuditDateBetween(
                date.atStartOfDay(),
                date.plusDays(1).atStartOfDay()
        ).stream()
         .map(AuditRequestMapper::toDTO)
         .collect(Collectors.toList());
    }

    // Add a new audit entry
    public AuditRequestDTO addAudit(AuditRequestDTO dto) {
        Employee emp = employeeRepo.findById(dto.getEmployeeId())
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with id: " + dto.getEmployeeId()));

        Asset asset = assetRepo.findById(dto.getAssetId())
                .orElseThrow(() -> new ResourceNotFoundException("Asset not found with id: " + dto.getAssetId()));

        AuditRequest entity = AuditRequestMapper.toEntity(dto, emp, asset);
        entity.setAuditDate(LocalDateTime.now());

        AuditRequest saved = auditRepo.save(entity);
        return AuditRequestMapper.toDTO(saved);
    }
}
