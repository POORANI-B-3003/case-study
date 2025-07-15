package com.hexaware.assetmanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hexaware.assetmanagement.entity.ServiceRequest;
import com.hexaware.assetmanagement.enums.ServiceStatus;

public interface ServiceRequestRepository extends JpaRepository<ServiceRequest,Integer>{
       
    List<ServiceRequest> findByEmployeeId(int id);
    List<ServiceRequest> findByStatus(ServiceStatus status);
    long countByStatus(ServiceStatus status);

}
