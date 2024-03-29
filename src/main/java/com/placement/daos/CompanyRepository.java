package com.placement.daos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.placement.entity.Company;

@Repository
public interface CompanyRepository extends JpaRepository<Company, Integer> {

}
