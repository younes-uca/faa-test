package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.EnjeuxIrdChercheur;


@Repository
public interface EnjeuxIrdChercheurDao extends JpaRepository<EnjeuxIrdChercheur,Long> {





    List<EnjeuxIrdChercheur> findByEnjeuxIrdCode(String code);
    int deleteByEnjeuxIrdCode(String code);

    List<EnjeuxIrdChercheur> findByEnjeuxIrdId(Long id);

    int deleteByEnjeuxIrdId(Long id);
    List<EnjeuxIrdChercheur> findByChercheurNumeroMatricule(String numeroMatricule);
    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<EnjeuxIrdChercheur> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);


}
