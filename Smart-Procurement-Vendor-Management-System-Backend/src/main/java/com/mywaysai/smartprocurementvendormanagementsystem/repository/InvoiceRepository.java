package com.mywaysai.smartprocurementvendormanagementsystem.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mywaysai.smartprocurementvendormanagementsystem.entity.Invoice;


public interface InvoiceRepository extends JpaRepository<Invoice,Long>{ 
	@Query("SELECT SUM(i.amount) FROM Invoice i")
	Double getTotalSpend();
}