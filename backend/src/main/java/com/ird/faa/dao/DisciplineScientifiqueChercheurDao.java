package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.DisciplineScientifiqueChercheur;


@Repository
public interface DisciplineScientifiqueChercheurDao extends JpaRepository<DisciplineScientifiqueChercheur,Long> {





    List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueCode(String code);
    int deleteByDisciplineScientifiqueCode(String code);

    List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueId(Long id);

    int deleteByDisciplineScientifiqueId(Long id);
    List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueErcCode(String code);
    int deleteByDisciplineScientifiqueErcCode(String code);

    List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueErcId(Long id);

    int deleteByDisciplineScientifiqueErcId(Long id);
    List<DisciplineScientifiqueChercheur> findByChercheurNumeroMatricule(String numeroMatricule);
    int deleteByChercheurNumeroMatricule(String numeroMatricule);

    List<DisciplineScientifiqueChercheur> findByChercheurId(Long id);

    int deleteByChercheurId(Long id);


}
