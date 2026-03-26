package com.mywaysai.smartprocurementvendormanagementsystem.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.mywaysai.smartprocurementvendormanagementsystem.entity.PurchaseOrder;
import com.mywaysai.smartprocurementvendormanagementsystem.service.ReportService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/reports")
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:5180"})
@RequiredArgsConstructor
public class ReportController {

    private final ReportService service;

    @GetMapping("/spend")
    public List<PurchaseOrder> report(){
        return service.spendAnalysis();
    }
}
