package com.ird.faa.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

import com.ird.faa.bean.DistinctionDisciplineScientifique;


@Repository
public interface DistinctionDisciplineScientifiqueDao extends JpaRepository<DistinctionDisciplineScientifique,Long> {






    List<DistinctionDisciplineScientifique> findByDistinctionId(Long id);

    int deleteByDistinctionId(Long id);
    List<DistinctionDisciplineScientifique> findByDisciplineScientifiqueCode(String code);
    int deleteByDisciplineScientifiqueCode(String code);

    List<DistinctionDisciplineScientifique> findByDisciplineScientifiqueId(Long id);

    int deleteByDisciplineScientifiqueId(Long id);


}
