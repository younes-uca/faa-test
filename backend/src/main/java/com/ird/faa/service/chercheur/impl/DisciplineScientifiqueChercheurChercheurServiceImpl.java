package com.ird.faa.service.chercheur.impl;

import java.util.List;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.DisciplineScientifiqueChercheur;
import com.ird.faa.bean.DisciplineScientifique;
import com.ird.faa.bean.DisciplineScientifiqueErc;
import com.ird.faa.bean.Chercheur;
import com.ird.faa.dao.DisciplineScientifiqueChercheurDao;
import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueChercheurChercheurService;
import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueChercheurService;
import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueErcChercheurService;
import com.ird.faa.service.chercheur.facade.ChercheurChercheurService;

import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueChercheurVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class DisciplineScientifiqueChercheurChercheurServiceImpl extends AbstractServiceImpl<DisciplineScientifiqueChercheur> implements DisciplineScientifiqueChercheurChercheurService {

@Autowired
private DisciplineScientifiqueChercheurDao disciplineScientifiqueChercheurDao;

        @Autowired
        private DisciplineScientifiqueChercheurService disciplineScientifiqueService ;
        @Autowired
        private DisciplineScientifiqueErcChercheurService disciplineScientifiqueErcService ;
        @Autowired
        private ChercheurChercheurService chercheurService ;


@Autowired
private EntityManager entityManager;


@Override
public List<DisciplineScientifiqueChercheur> findAll(){
        return disciplineScientifiqueChercheurDao.findAll();
}

        @Override
        public List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueCode(String code){
        return disciplineScientifiqueChercheurDao.findByDisciplineScientifiqueCode(code);
        }

        @Override
        @Transactional
        public int deleteByDisciplineScientifiqueCode(String code){
        return disciplineScientifiqueChercheurDao.deleteByDisciplineScientifiqueCode(code);
        }

        @Override
        public List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueId(Long id){
        return disciplineScientifiqueChercheurDao.findByDisciplineScientifiqueId(id);
        }

        @Override
        @Transactional
        public int deleteByDisciplineScientifiqueId(Long id){
        return disciplineScientifiqueChercheurDao.deleteByDisciplineScientifiqueId(id);
        }


        @Override
        public List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueErcCode(String code){
        return disciplineScientifiqueChercheurDao.findByDisciplineScientifiqueErcCode(code);
        }

        @Override
        @Transactional
        public int deleteByDisciplineScientifiqueErcCode(String code){
        return disciplineScientifiqueChercheurDao.deleteByDisciplineScientifiqueErcCode(code);
        }

        @Override
        public List<DisciplineScientifiqueChercheur> findByDisciplineScientifiqueErcId(Long id){
        return disciplineScientifiqueChercheurDao.findByDisciplineScientifiqueErcId(id);
        }

        @Override
        @Transactional
        public int deleteByDisciplineScientifiqueErcId(Long id){
        return disciplineScientifiqueChercheurDao.deleteByDisciplineScientifiqueErcId(id);
        }


        @Override
        public List<DisciplineScientifiqueChercheur> findByChercheurNumeroMatricule(String numeroMatricule){
        return disciplineScientifiqueChercheurDao.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        @Transactional
        public int deleteByChercheurNumeroMatricule(String numeroMatricule){
        return disciplineScientifiqueChercheurDao.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        public List<DisciplineScientifiqueChercheur> findByChercheurId(Long id){
        return disciplineScientifiqueChercheurDao.findByChercheurId(id);
        }

        @Override
        @Transactional
        public int deleteByChercheurId(Long id){
        return disciplineScientifiqueChercheurDao.deleteByChercheurId(id);
        }


@Override
public DisciplineScientifiqueChercheur findById(Long id){
if(id==null) return null;
return disciplineScientifiqueChercheurDao.getOne(id);
}

@Override
public DisciplineScientifiqueChercheur findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(disciplineScientifiqueChercheurDao.findById(id).isPresent())  {
disciplineScientifiqueChercheurDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public DisciplineScientifiqueChercheur update(DisciplineScientifiqueChercheur disciplineScientifiqueChercheur){
DisciplineScientifiqueChercheur foundedDisciplineScientifiqueChercheur = findById(disciplineScientifiqueChercheur.getId());
if(foundedDisciplineScientifiqueChercheur==null) return null;
else{
return  disciplineScientifiqueChercheurDao.save(disciplineScientifiqueChercheur);
}
}

@Override
public DisciplineScientifiqueChercheur save (DisciplineScientifiqueChercheur disciplineScientifiqueChercheur){



    findDisciplineScientifique(disciplineScientifiqueChercheur);
    findDisciplineScientifiqueErc(disciplineScientifiqueChercheur);
    findChercheur(disciplineScientifiqueChercheur);

return disciplineScientifiqueChercheurDao.save(disciplineScientifiqueChercheur);


}

@Override
public List<DisciplineScientifiqueChercheur> save(List<DisciplineScientifiqueChercheur> disciplineScientifiqueChercheurs){
List<DisciplineScientifiqueChercheur> list = new ArrayList<>();
for(DisciplineScientifiqueChercheur disciplineScientifiqueChercheur: disciplineScientifiqueChercheurs){
list.add(save(disciplineScientifiqueChercheur));
}
return list;
}



@Override
@Transactional
public int delete(DisciplineScientifiqueChercheur disciplineScientifiqueChercheur){
    if(disciplineScientifiqueChercheur.getId()==null) return -1;
    DisciplineScientifiqueChercheur foundedDisciplineScientifiqueChercheur = findById(disciplineScientifiqueChercheur.getId());
    if(foundedDisciplineScientifiqueChercheur==null) return -1;
disciplineScientifiqueChercheurDao.delete(foundedDisciplineScientifiqueChercheur);
return 1;
}


public List<DisciplineScientifiqueChercheur> findByCriteria(DisciplineScientifiqueChercheurVo disciplineScientifiqueChercheurVo){

String query = "SELECT o FROM DisciplineScientifiqueChercheur o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",disciplineScientifiqueChercheurVo.getId());
    if(disciplineScientifiqueChercheurVo.getDisciplineScientifiqueVo()!=null){
        query += SearchUtil.addConstraint( "o", "disciplineScientifique.id","=",disciplineScientifiqueChercheurVo.getDisciplineScientifiqueVo().getId());
            query += SearchUtil.addConstraint( "o", "disciplineScientifique.code","LIKE",disciplineScientifiqueChercheurVo.getDisciplineScientifiqueVo().getCode());
    }

    if(disciplineScientifiqueChercheurVo.getDisciplineScientifiqueErcVo()!=null){
        query += SearchUtil.addConstraint( "o", "disciplineScientifiqueErc.id","=",disciplineScientifiqueChercheurVo.getDisciplineScientifiqueErcVo().getId());
            query += SearchUtil.addConstraint( "o", "disciplineScientifiqueErc.code","LIKE",disciplineScientifiqueChercheurVo.getDisciplineScientifiqueErcVo().getCode());
    }

    if(disciplineScientifiqueChercheurVo.getChercheurVo()!=null){
        query += SearchUtil.addConstraint( "o", "chercheur.id","=",disciplineScientifiqueChercheurVo.getChercheurVo().getId());
            query += SearchUtil.addConstraint( "o", "chercheur.numeroMatricule","LIKE",disciplineScientifiqueChercheurVo.getChercheurVo().getNumeroMatricule());
    }

return entityManager.createQuery(query).getResultList();
}

    private void findDisciplineScientifique(DisciplineScientifiqueChercheur disciplineScientifiqueChercheur){
        DisciplineScientifique loadedDisciplineScientifique =disciplineScientifiqueService.findByIdOrCode(disciplineScientifiqueChercheur.getDisciplineScientifique());

    if(loadedDisciplineScientifique==null ) {
        return;
    }
    disciplineScientifiqueChercheur.setDisciplineScientifique(loadedDisciplineScientifique);
    }
    private void findDisciplineScientifiqueErc(DisciplineScientifiqueChercheur disciplineScientifiqueChercheur){
        DisciplineScientifiqueErc loadedDisciplineScientifiqueErc =disciplineScientifiqueErcService.findByIdOrCode(disciplineScientifiqueChercheur.getDisciplineScientifiqueErc());

    if(loadedDisciplineScientifiqueErc==null ) {
        return;
    }
    disciplineScientifiqueChercheur.setDisciplineScientifiqueErc(loadedDisciplineScientifiqueErc);
    }
    private void findChercheur(DisciplineScientifiqueChercheur disciplineScientifiqueChercheur){
        Chercheur loadedChercheur =chercheurService.findByIdOrNumeroMatricule(disciplineScientifiqueChercheur.getChercheur());

    if(loadedChercheur==null ) {
        return;
    }
    disciplineScientifiqueChercheur.setChercheur(loadedChercheur);
    }

@Override
@Transactional
public void delete(List<DisciplineScientifiqueChercheur> disciplineScientifiqueChercheurs){
        if(ListUtil.isNotEmpty(disciplineScientifiqueChercheurs)){
        disciplineScientifiqueChercheurs.forEach(e->disciplineScientifiqueChercheurDao.delete(e));
        }
}
@Override
public void update(List<DisciplineScientifiqueChercheur> disciplineScientifiqueChercheurs){
if(ListUtil.isNotEmpty(disciplineScientifiqueChercheurs)){
disciplineScientifiqueChercheurs.forEach(e->disciplineScientifiqueChercheurDao.save(e));
}
}



}
