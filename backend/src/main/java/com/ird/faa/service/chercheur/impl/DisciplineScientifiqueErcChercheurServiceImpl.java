package com.ird.faa.service.chercheur.impl;

import java.util.List;
import java.util.Date;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import com.ird.faa.service.util.StringUtil;
import com.ird.faa.security.common.SecurityUtil;
import com.ird.faa.security.bean.User;
import org.springframework.stereotype.Service;
import javax.persistence.EntityManager;
import com.ird.faa.bean.DisciplineScientifiqueErc;
import com.ird.faa.bean.DisciplineScientifiqueErcParent;
import com.ird.faa.bean.Chercheur;
import com.ird.faa.dao.DisciplineScientifiqueErcDao;
import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueErcChercheurService;
import com.ird.faa.service.chercheur.facade.DisciplineScientifiqueErcParentChercheurService;
import com.ird.faa.service.chercheur.facade.ChercheurChercheurService;

import com.ird.faa.ws.rest.provided.vo.DisciplineScientifiqueErcVo;
import com.ird.faa.service.util.*;

import com.ird.faa.service.core.facade.ArchivableService;
import com.ird.faa.service.core.impl.AbstractServiceImpl;

@Service
public class DisciplineScientifiqueErcChercheurServiceImpl extends AbstractServiceImpl<DisciplineScientifiqueErc> implements DisciplineScientifiqueErcChercheurService {

@Autowired
private DisciplineScientifiqueErcDao disciplineScientifiqueErcDao;

@Autowired
private ArchivableService<DisciplineScientifiqueErc> archivableService;
        @Autowired
        private DisciplineScientifiqueErcParentChercheurService disciplineScientifiqueErcParentService ;
        @Autowired
        private ChercheurChercheurService chercheurService ;


@Autowired
private EntityManager entityManager;


@Override
public List<DisciplineScientifiqueErc> findAll(){
    String query = "SELECT o FROM DisciplineScientifiqueErc o ";
    query+= " WHERE (o.archive != true AND o.visible = true)";
    query+= " ORDER BY o.code";
    return entityManager.createQuery(query).getResultList();
}

        @Override
        public List<DisciplineScientifiqueErc> findByDisciplineScientifiqueErcParentCode(String code){
        return disciplineScientifiqueErcDao.findByDisciplineScientifiqueErcParentCode(code);
        }

        @Override
        @Transactional
        public int deleteByDisciplineScientifiqueErcParentCode(String code){
        return disciplineScientifiqueErcDao.deleteByDisciplineScientifiqueErcParentCode(code);
        }

        @Override
        public List<DisciplineScientifiqueErc> findByDisciplineScientifiqueErcParentId(Long id){
        return disciplineScientifiqueErcDao.findByDisciplineScientifiqueErcParentId(id);
        }

        @Override
        @Transactional
        public int deleteByDisciplineScientifiqueErcParentId(Long id){
        return disciplineScientifiqueErcDao.deleteByDisciplineScientifiqueErcParentId(id);
        }


        @Override
        public List<DisciplineScientifiqueErc> findByChercheurNumeroMatricule(String numeroMatricule){
        return disciplineScientifiqueErcDao.findByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        @Transactional
        public int deleteByChercheurNumeroMatricule(String numeroMatricule){
        return disciplineScientifiqueErcDao.deleteByChercheurNumeroMatricule(numeroMatricule);
        }

        @Override
        public List<DisciplineScientifiqueErc> findByChercheurId(Long id){
        return disciplineScientifiqueErcDao.findByChercheurId(id);
        }

        @Override
        @Transactional
        public int deleteByChercheurId(Long id){
        return disciplineScientifiqueErcDao.deleteByChercheurId(id);
        }

    @Override
    public DisciplineScientifiqueErc findByCode(String code){
    if( code==null) return null;
    return disciplineScientifiqueErcDao.findByCode(code);
    }

    @Override
    @Transactional
    public int deleteByCode(String  code) {
    return disciplineScientifiqueErcDao.deleteByCode(code);
    }
    @Override
    public DisciplineScientifiqueErc findByIdOrCode(DisciplineScientifiqueErc disciplineScientifiqueErc){
        DisciplineScientifiqueErc resultat=null;
        if(disciplineScientifiqueErc != null){
            if(StringUtil.isNotEmpty(disciplineScientifiqueErc.getId())){
            resultat= disciplineScientifiqueErcDao.getOne(disciplineScientifiqueErc.getId());
            }else if(StringUtil.isNotEmpty(disciplineScientifiqueErc.getCode())) {
            resultat= disciplineScientifiqueErcDao.findByCode(disciplineScientifiqueErc.getCode());
            }
        }
    return resultat;
    }

@Override
public DisciplineScientifiqueErc findById(Long id){
if(id==null) return null;
return disciplineScientifiqueErcDao.getOne(id);
}

@Override
public DisciplineScientifiqueErc findByIdWithAssociatedList(Long id){
return findById(id);
}


@Transactional
public int deleteById(Long id){
int res=0;
if(disciplineScientifiqueErcDao.findById(id).isPresent())  {
disciplineScientifiqueErcDao.deleteById(id);
res = 1;
}
return res;
}


@Override
public DisciplineScientifiqueErc update(DisciplineScientifiqueErc disciplineScientifiqueErc){
DisciplineScientifiqueErc foundedDisciplineScientifiqueErc = findById(disciplineScientifiqueErc.getId());
if(foundedDisciplineScientifiqueErc==null) return null;
else{
    archivableService.prepare(disciplineScientifiqueErc);
return  disciplineScientifiqueErcDao.save(disciplineScientifiqueErc);
}
}
private void prepareSave(DisciplineScientifiqueErc disciplineScientifiqueErc){
disciplineScientifiqueErc.setDateCreation(new Date());
if(disciplineScientifiqueErc.getArchive() == null)
  disciplineScientifiqueErc.setArchive(false);
if(disciplineScientifiqueErc.getAdmin() == null)
  disciplineScientifiqueErc.setAdmin(false);
if(disciplineScientifiqueErc.getVisible() == null)
  disciplineScientifiqueErc.setVisible(false);



}

@Override
public DisciplineScientifiqueErc save (DisciplineScientifiqueErc disciplineScientifiqueErc){
prepareSave(disciplineScientifiqueErc);

DisciplineScientifiqueErc result =null;
    DisciplineScientifiqueErc foundedDisciplineScientifiqueErc = findByCode(disciplineScientifiqueErc.getCode());
   if(foundedDisciplineScientifiqueErc == null){


    findDisciplineScientifiqueErcParent(disciplineScientifiqueErc);
    findChercheur(disciplineScientifiqueErc);

DisciplineScientifiqueErc savedDisciplineScientifiqueErc = disciplineScientifiqueErcDao.save(disciplineScientifiqueErc);

result = savedDisciplineScientifiqueErc;
   }

return result;
}

@Override
public List<DisciplineScientifiqueErc> save(List<DisciplineScientifiqueErc> disciplineScientifiqueErcs){
List<DisciplineScientifiqueErc> list = new ArrayList<>();
for(DisciplineScientifiqueErc disciplineScientifiqueErc: disciplineScientifiqueErcs){
list.add(save(disciplineScientifiqueErc));
}
return list;
}



@Override
@Transactional
public int delete(DisciplineScientifiqueErc disciplineScientifiqueErc){
    if(disciplineScientifiqueErc.getCode()==null) return -1;

    DisciplineScientifiqueErc foundedDisciplineScientifiqueErc = findByCode(disciplineScientifiqueErc.getCode());
    if(foundedDisciplineScientifiqueErc==null) return -1;
disciplineScientifiqueErcDao.delete(foundedDisciplineScientifiqueErc);
return 1;
}


public List<DisciplineScientifiqueErc> findByCriteria(DisciplineScientifiqueErcVo disciplineScientifiqueErcVo){

String query = "SELECT o FROM DisciplineScientifiqueErc o where 1=1 ";

            query += SearchUtil.addConstraint( "o", "id","=",disciplineScientifiqueErcVo.getId());
            query += SearchUtil.addConstraint( "o", "libelleFr","LIKE",disciplineScientifiqueErcVo.getLibelleFr());
            query += SearchUtil.addConstraint( "o", "libelleEng","LIKE",disciplineScientifiqueErcVo.getLibelleEng());
            query += SearchUtil.addConstraint( "o", "code","LIKE",disciplineScientifiqueErcVo.getCode());
            query += SearchUtil.addConstraint( "o", "niveau","=",disciplineScientifiqueErcVo.getNiveau());
            query += SearchUtil.addConstraint( "o", "archive","=",disciplineScientifiqueErcVo.getArchive());
        query += SearchUtil.addConstraintDate( "o", "dateArchivage","=",disciplineScientifiqueErcVo.getDateArchivage());
        query += SearchUtil.addConstraintDate( "o", "dateCreation","=",disciplineScientifiqueErcVo.getDateCreation());
            query += SearchUtil.addConstraint( "o", "admin","=",disciplineScientifiqueErcVo.getAdmin());
            query += SearchUtil.addConstraint( "o", "visible","=",disciplineScientifiqueErcVo.getVisible());
            query += SearchUtil.addConstraintMinMax("o","niveau",disciplineScientifiqueErcVo.getNiveauMin(),disciplineScientifiqueErcVo.getNiveauMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateArchivage",disciplineScientifiqueErcVo.getDateArchivageMin(),disciplineScientifiqueErcVo.getDateArchivageMax());
            query += SearchUtil.addConstraintMinMaxDate("o","dateCreation",disciplineScientifiqueErcVo.getDateCreationMin(),disciplineScientifiqueErcVo.getDateCreationMax());
    if(disciplineScientifiqueErcVo.getDisciplineScientifiqueErcParentVo()!=null){
        query += SearchUtil.addConstraint( "o", "disciplineScientifiqueErcParent.id","=",disciplineScientifiqueErcVo.getDisciplineScientifiqueErcParentVo().getId());
            query += SearchUtil.addConstraint( "o", "disciplineScientifiqueErcParent.code","LIKE",disciplineScientifiqueErcVo.getDisciplineScientifiqueErcParentVo().getCode());
    }

    if(disciplineScientifiqueErcVo.getChercheurVo()!=null){
        query += SearchUtil.addConstraint( "o", "chercheur.id","=",disciplineScientifiqueErcVo.getChercheurVo().getId());
            query += SearchUtil.addConstraint( "o", "chercheur.numeroMatricule","LIKE",disciplineScientifiqueErcVo.getChercheurVo().getNumeroMatricule());
    }

query+= " ORDER BY o.code";
return entityManager.createQuery(query).getResultList();
}

    private void findDisciplineScientifiqueErcParent(DisciplineScientifiqueErc disciplineScientifiqueErc){
        DisciplineScientifiqueErcParent loadedDisciplineScientifiqueErcParent =disciplineScientifiqueErcParentService.findByIdOrCode(disciplineScientifiqueErc.getDisciplineScientifiqueErcParent());

    if(loadedDisciplineScientifiqueErcParent==null ) {
        return;
    }
    disciplineScientifiqueErc.setDisciplineScientifiqueErcParent(loadedDisciplineScientifiqueErcParent);
    }
    private void findChercheur(DisciplineScientifiqueErc disciplineScientifiqueErc){
        Chercheur loadedChercheur =chercheurService.findByIdOrNumeroMatricule(disciplineScientifiqueErc.getChercheur());

    if(loadedChercheur==null ) {
        return;
    }
    disciplineScientifiqueErc.setChercheur(loadedChercheur);
    }

@Override
@Transactional
public void delete(List<DisciplineScientifiqueErc> disciplineScientifiqueErcs){
        if(ListUtil.isNotEmpty(disciplineScientifiqueErcs)){
        disciplineScientifiqueErcs.forEach(e->disciplineScientifiqueErcDao.delete(e));
        }
}
@Override
public void update(List<DisciplineScientifiqueErc> disciplineScientifiqueErcs){
if(ListUtil.isNotEmpty(disciplineScientifiqueErcs)){
disciplineScientifiqueErcs.forEach(e->disciplineScientifiqueErcDao.save(e));
}
}



}
