package com.hexaware.assetmanagement.dao;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.assetmanagement.entity.AuditRequest;

public interface AuditRequestRepository extends JpaRepository<AuditRequest,Integer>{

	List<AuditRequest> findByAuditDateBetween(LocalDateTime atStartOfDay, LocalDateTime atStartOfDay2);

	List<AuditRequest> findByEmployeeId(int employeeId);

}
