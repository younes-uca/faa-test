package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.IdentifiantAuteurExpert;


@Repository
public interface IdentifiantAuteurExpertDao extends JpaRepository<IdentifiantAuteurExpert,Long> {





    List<IdentifiantAuteurExpert> findByIdentifiantRechercheCode(String code);
    int deleteByIdentifiantRechercheCode(String code);

    List<IdentifiantAuteurExpert> findByIdentifiantRechercheId(Long id);

    int deleteByIdentifiantRechercheId(Long id);
    List<IdentifiantAuteurExpert> findByChercheurNumeroMatricule(String numeroMatricule);
    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<IdentifiantAuteurExpert> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);


}
