package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.DistinctionDisciplineScientifique;
import com.ird.faa.bean.Distinction;
import com.ird.faa.bean.DisciplineScientifique;
import com.ird.faa.dao.DistinctionDisciplineScientifiqueDao;
import com.ird.faa.service.chercheur.facade.DistinctionDisciplineScientifiqueChercheurService;
import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueChercheurService;
import com.ird.faa.service.chercheur.facade.DistinctionChercheurService;

import com.ird.faa.ws.rest.provided.vo.DistinctionDisciplineScientifiqueVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class DistinctionDisciplineScientifiqueChercheurServiceImpl extends AbstractServiceImpl<DistinctionDisciplineScientifique> implements DistinctionDisciplineScientifiqueChercheurService {

@Autowired
private DistinctionDisciplineScientifiqueDao distinctionDisciplineScientifiqueDao;

        @Autowired
        private DisciplineScientifiqueChercheurService disciplineScientifiqueService ;
        @Autowired
        private DistinctionChercheurService distinctionService ;


@Autowired
private EntityManager entityManager;


@Override
public List<DistinctionDisciplineScientifique> findAll(){
        return distinctionDisciplineScientifiqueDao.findAll();
}
        @Override
        public List<DistinctionDisciplineScientifique> findByDistinctionId(Long id){
        return distinctionDisciplineScientifiqueDao.findByDistinctionId(id);
        }

        @Override
        @Transactional
        public int deleteByDistinctionId(Long id){
        return distinctionDisciplineScientifiqueDao.deleteByDistinctionId(id);
        }


        @Override
        public List<DistinctionDisciplineScientifique> findByDisciplineScientifiqueCode(String code){
        return distinctionDisciplineScientifiqueDao.findByDisciplineScientifiqueCode(code);
        }

        @Override
        @Transactional
        public int deleteByDisciplineScientifiqueCode(String code){
        return distinctionDisciplineScientifiqueDao.deleteByDisciplineScientifiqueCode(code);
        }

        @Override
        public List<DistinctionDisciplineScientifique> findByDisciplineScientifiqueId(Long id){
        return distinctionDisciplineScientifiqueDao.findByDisciplineScientifiqueId(id);
        }

        @Override
        @Transactional
        public int deleteByDisciplineScientifiqueId(Long id){
        return distinctionDisciplineScientifiqueDao.deleteByDisciplineScientifiqueId(id);
        }


@Override
public DistinctionDisciplineScientifique findById(Long id){
if(id==null) return null;
return distinctionDisciplineScientifiqueDao.getOne(id);
}

@Override
public DistinctionDisciplineScientifique findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(distinctionDisciplineScientifiqueDao.findById(id).isPresent())  {
distinctionDisciplineScientifiqueDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public DistinctionDisciplineScientifique update(DistinctionDisciplineScientifique distinctionDisciplineScientifique){
DistinctionDisciplineScientifique foundedDistinctionDisciplineScientifique = findById(distinctionDisciplineScientifique.getId());
if(foundedDistinctionDisciplineScientifique==null) return null;
else{
return  distinctionDisciplineScientifiqueDao.save(distinctionDisciplineScientifique);
}
}

@Override
public DistinctionDisciplineScientifique save (DistinctionDisciplineScientifique distinctionDisciplineScientifique){



    findDistinction(distinctionDisciplineScientifique);
    findDisciplineScientifique(distinctionDisciplineScientifique);

return distinctionDisciplineScientifiqueDao.save(distinctionDisciplineScientifique);


}

@Override
public List<DistinctionDisciplineScientifique> save(List<DistinctionDisciplineScientifique> distinctionDisciplineScientifiques){
List<DistinctionDisciplineScientifique> list = new ArrayList<>();
for(DistinctionDisciplineScientifique distinctionDisciplineScientifique: distinctionDisciplineScientifiques){
list.add(save(distinctionDisciplineScientifique));
}
return list;
}



@Override
@Transactional
public int delete(DistinctionDisciplineScientifique distinctionDisciplineScientifique){
    if(distinctionDisciplineScientifique.getId()==null) return -1;
    DistinctionDisciplineScientifique foundedDistinctionDisciplineScientifique = findById(distinctionDisciplineScientifique.getId());
    if(foundedDistinctionDisciplineScientifique==null) return -1;
distinctionDisciplineScientifiqueDao.delete(foundedDistinctionDisciplineScientifique);
return 1;
}


public List<DistinctionDisciplineScientifique> findByCriteria(DistinctionDisciplineScientifiqueVo distinctionDisciplineScientifiqueVo){

String query = "SELECT o FROM DistinctionDisciplineScientifique o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",distinctionDisciplineScientifiqueVo.getId());
    if(distinctionDisciplineScientifiqueVo.getDistinctionVo()!=null){
        query += SearchUtil.addConstraint( "o", "distinction.id","=",distinctionDisciplineScientifiqueVo.getDistinctionVo().getId());
    }

    if(distinctionDisciplineScientifiqueVo.getDisciplineScientifiqueVo()!=null){
        query += SearchUtil.addConstraint( "o", "disciplineScientifique.id","=",distinctionDisciplineScientifiqueVo.getDisciplineScientifiqueVo().getId());
            query += SearchUtil.addConstraint( "o", "disciplineScientifique.code","LIKE",distinctionDisciplineScientifiqueVo.getDisciplineScientifiqueVo().getCode());
    }

return entityManager.createQuery(query).getResultList();
}

    private void findDistinction(DistinctionDisciplineScientifique distinctionDisciplineScientifique){
        Distinction loadedDistinction = null;
        if(distinctionDisciplineScientifique.getDistinction() != null && distinctionDisciplineScientifique.getDistinction().getId() !=null)
        loadedDistinction =distinctionService.findById(distinctionDisciplineScientifique.getDistinction().getId());

    if(loadedDistinction==null ) {
        return;
    }
    distinctionDisciplineScientifique.setDistinction(loadedDistinction);
    }
    private void findDisciplineScientifique(DistinctionDisciplineScientifique distinctionDisciplineScientifique){
        DisciplineScientifique loadedDisciplineScientifique =disciplineScientifiqueService.findByIdOrCode(distinctionDisciplineScientifique.getDisciplineScientifique());

    if(loadedDisciplineScientifique==null ) {
        return;
    }
    distinctionDisciplineScientifique.setDisciplineScientifique(loadedDisciplineScientifique);
    }

@Override
@Transactional
public void delete(List<DistinctionDisciplineScientifique> distinctionDisciplineScientifiques){
        if(ListUtil.isNotEmpty(distinctionDisciplineScientifiques)){
        distinctionDisciplineScientifiques.forEach(e->distinctionDisciplineScientifiqueDao.delete(e));
        }
}
@Override
public void update(List<DistinctionDisciplineScientifique> distinctionDisciplineScientifiques){
if(ListUtil.isNotEmpty(distinctionDisciplineScientifiques)){
distinctionDisciplineScientifiques.forEach(e->distinctionDisciplineScientifiqueDao.save(e));
}
}



}
