package com.hexaware.assetmanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hexaware.assetmanagement.entity.Asset;
import com.hexaware.assetmanagement.enums.AssetStatus;

@Repository
public interface AssetRepository extends JpaRepository<Asset,Integer>{
	
    List<Asset> findByCategoryId(Long categoryId);

    // Filter by Status (like "available" or "assigned")
    List<Asset> findByStatus(AssetStatus status);


}
